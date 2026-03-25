import { createAdminClient, isAdminEmail } from "@/lib/supabase-admin";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

async function verifyAdmin() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user || !isAdminEmail(user.email)) {
    return null;
  }
  return user;
}

async function sendReactivationEmail(email: string, password: string) {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Renddi <onboarding@resend.dev>",
        to: email,
        subject: "Tu cuenta Renddi ha sido reactivada 🥋",
        html: `
          <div style="font-family: 'Inter', system-ui, sans-serif; max-width: 500px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; padding: 32px; border-radius: 16px;">
            <div style="text-align: center; margin-bottom: 24px;">
              <div style="font-size: 48px;">🥋</div>
              <h1 style="color: #F39C12; font-size: 28px; margin: 8px 0;">RENDDI</h1>
              <p style="color: #888; font-size: 12px; font-style: italic;">道場 · Dojo del Conocimiento</p>
            </div>
            <div style="background: #141419; padding: 24px; border-radius: 12px; border: 1px solid #222;">
              <h2 style="color: #F39C12; font-size: 18px; margin-top: 0;">Tu cuenta ha sido reactivada</h2>
              <p style="color: #ccc; font-size: 14px; line-height: 1.6;">
                Tu acceso a Renddi ha sido restaurado. Puedes ingresar con las siguientes credenciales:
              </p>
              <div style="background: #0a0a0f; padding: 16px; border-radius: 8px; margin: 16px 0; border: 1px solid #333;">
                <p style="margin: 4px 0; font-size: 13px;"><strong style="color: #F39C12;">Email:</strong> <span style="color: #e0e0e0;">${email}</span></p>
                <p style="margin: 4px 0; font-size: 13px;"><strong style="color: #F39C12;">Contraseña:</strong> <span style="font-family: monospace; color: #e0e0e0;">${password}</span></p>
              </div>
              <div style="background: rgba(243,156,18,0.1); border: 1px solid rgba(243,156,18,0.2); padding: 12px; border-radius: 8px; margin: 16px 0;">
                <p style="margin: 0; font-size: 13px; color: #F39C12;">⚠️ <strong>Importante:</strong> Deberás cambiar tu contraseña en el primer inicio de sesión.</p>
              </div>
              <a href="https://renddi.org" style="display: block; text-align: center; background: linear-gradient(135deg, #F39C12, #e67e22); color: #0a0a0f; padding: 14px 24px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 15px; margin-top: 20px;">
                Entrar al Dojo →
              </a>
            </div>
            <p style="text-align: center; font-size: 11px; color: #444; margin-top: 20px;">
              "El maestro aparece cuando el estudiante está listo" — MIYAGI
            </p>
          </div>
        `,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function GET() {
  const admin = await verifyAdmin();
  if (!admin) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  const adminClient = createAdminClient();
  const { data, error } = await adminClient.auth.admin.listUsers();

  if (error) {
    console.error("Admin listUsers error:", error.message);
    return NextResponse.json({ error: "Error al obtener usuarios" }, { status: 500 });
  }

  const users = data.users.map((u) => ({
    id: u.id,
    email: u.email,
    role: u.user_metadata?.role ?? (isAdminEmail(u.email) ? "admin" : "user"),
    status: u.banned_until
      ? "eliminado"
      : u.user_metadata?.must_change_password
      ? "creado"
      : "activo",
    created_at: u.created_at,
    last_sign_in_at: u.last_sign_in_at,
    temp_password: u.user_metadata?.temp_password || null,
  }));

  return NextResponse.json({ users });
}

export async function POST(request: Request) {
  const admin = await verifyAdmin();
  if (!admin) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email y password son requeridos" },
      { status: 400 }
    );
  }
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Formato de email invalido" },
      { status: 400 }
    );
  }
  if (typeof password !== "string" || password.length < 8) {
    return NextResponse.json(
      { error: "Password debe tener mínimo 8 caracteres" },
      { status: 400 }
    );
  }

  const adminClient = createAdminClient();
  const { data, error } = await adminClient.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { role: "user", must_change_password: true, temp_password: password },
  });

  if (error) {
    console.error("Admin createUser error:", error.message);
    // Return user-friendly message, not internal Supabase error
    const userMsg = error.message.includes("already been registered")
      ? "Este email ya esta registrado"
      : "Error al crear usuario";
    return NextResponse.json({ error: userMsg }, { status: error.message.includes("already been registered") ? 409 : 500 });
  }

  // Send welcome email
  await sendReactivationEmail(email, password);

  return NextResponse.json({ user: { id: data.user.id, email: data.user.email }, emailSent: true });
}

export async function PATCH(request: Request) {
  const admin = await verifyAdmin();
  if (!admin) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  const { userId, action, newPassword } = await request.json();
  const adminClient = createAdminClient();

  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ error: "userId requerido" }, { status: 400 });
  }

  if (action === "delete") {
    const { error } = await adminClient.auth.admin.updateUserById(userId, {
      ban_duration: "876600h",
    });
    if (error) {
      console.error("Admin delete error:", error.message);
      return NextResponse.json({ error: "Error al eliminar usuario" }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  }

  if (action === "reactivate") {
    // Generate new password
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%";
    const tempPassword = newPassword || Array.from({ length: 14 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");

    // Unban + reset password + force change
    const { error } = await adminClient.auth.admin.updateUserById(userId, {
      ban_duration: "none",
      password: tempPassword,
      user_metadata: { must_change_password: true, temp_password: tempPassword },
    });
    if (error) {
      console.error("Admin reactivate error:", error.message);
      return NextResponse.json({ error: "Error al reactivar usuario" }, { status: 500 });
    }

    // Get user email and send reactivation email
    const { data: userData } = await adminClient.auth.admin.getUserById(userId);
    if (userData?.user?.email) {
      await sendReactivationEmail(userData.user.email, tempPassword);
    }

    return NextResponse.json({ success: true, emailSent: true, tempPassword });
  }

  if (action === "delete_permanent") {
    const { error } = await adminClient.auth.admin.deleteUser(userId);
    if (error) {
      console.error("Admin delete_permanent error:", error.message);
      return NextResponse.json({ error: "Error al eliminar usuario definitivamente" }, { status: 500 });
    }
    return NextResponse.json({ success: true, permanent: true });
  }

  return NextResponse.json({ error: "Accion no valida" }, { status: 400 });
}
