"use client";

import { useState, useEffect, useCallback } from "react";
import { createBrowserClient } from "@supabase/ssr";

interface User {
  id: string;
  email: string;
  role: string;
  status: string;
  created_at: string;
  last_sign_in_at: string | null;
}

export default function GrafoClient({ email, isAdmin }: { email: string; isAdmin: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [changingPw, setChangingPw] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [newPw, setNewPw] = useState("");
  const [pwMsg, setPwMsg] = useState("");

  // Admin state
  const [users, setUsers] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newUserPw, setNewUserPw] = useState("");
  const [creating, setCreating] = useState(false);
  const [adminMsg, setAdminMsg] = useState("");
  const [adminErr, setAdminErr] = useState("");

  // isAdmin is now passed as a prop from the server component

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const fetchUsers = useCallback(async () => {
    setLoadingUsers(true);
    const res = await fetch("/api/admin/users");
    const data = await res.json();
    if (data.users) setUsers(data.users);
    setLoadingUsers(false);
  }, []);

  useEffect(() => {
    if (adminOpen && isAdmin) fetchUsers();
  }, [adminOpen, isAdmin, fetchUsers]);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  async function handleChangePw() {
    if (newPw.length < 8) { setPwMsg("Mínimo 8 caracteres"); return; }
    const { error } = await supabase.auth.updateUser({ password: newPw });
    if (error) { console.error("Change pw error:", error.message); setPwMsg("Error al cambiar contrasena. Intenta nuevamente."); }
    else { setPwMsg("✅ Contraseña actualizada"); setNewPw(""); setTimeout(() => { setChangingPw(false); setPwMsg(""); }, 2000); }
  }

  function generatePassword() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%";
    let pass = "";
    for (let i = 0; i < 14; i++) pass += chars[Math.floor(Math.random() * chars.length)];
    return pass;
  }

  async function handleCreateUser(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true); setAdminErr(""); setAdminMsg("");
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newEmail, password: newUserPw }),
    });
    const data = await res.json();
    if (data.error) setAdminErr(data.error);
    else { setAdminMsg("✅ Usuario " + newEmail + " creado"); setNewEmail(""); setNewUserPw(""); fetchUsers(); }
    setCreating(false);
  }

  async function handleUserAction(userId: string, action: string) {
    await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, action }),
    });
    fetchUsers();
  }

  function formatDate(d: string | null) {
    if (!d) return "—";
    return new Date(d).toLocaleDateString("es-CL", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  const s = (overrides: React.CSSProperties): React.CSSProperties => overrides;

  return (
    <>
      {/* User menu floating */}
      <div style={{ position: "fixed", top: 12, right: 16, zIndex: 99999, fontFamily: "'Inter', system-ui, sans-serif" }}>
        <button onClick={() => { setMenuOpen(!menuOpen); setAdminOpen(false); }} style={s({ background: "rgba(20,20,30,0.9)", border: "1px solid #F39C12", color: "#F39C12", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600, backdropFilter: "blur(8px)" })}>
          👤 {email} ▾
        </button>

        {menuOpen && !adminOpen && (
          <div style={s({ position: "absolute", top: 44, right: 0, background: "#141419", border: "1px solid #333", borderRadius: 10, padding: 16, minWidth: 280, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" })}>
            <div style={{ color: "#888", fontSize: 11, marginBottom: 12 }}>Sesión activa</div>
            <div style={{ color: "#e0e0e0", fontSize: 14, fontWeight: 600, marginBottom: 16 }}>{email}</div>

            {!changingPw ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button onClick={() => setChangingPw(true)} style={s({ background: "#1a1a2e", border: "1px solid #444", color: "#e0e0e0", padding: "10px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, textAlign: "left" })}>
                  🔑 Cambiar contraseña
                </button>
                {isAdmin && (
                  <button onClick={() => setAdminOpen(true)} style={s({ background: "#1a1a2e", border: "1px solid #F39C12", color: "#F39C12", padding: "10px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, textAlign: "left" })}>
                    ⚙️ Administrar usuarios
                  </button>
                )}
                <button onClick={handleLogout} style={s({ background: "#3a1515", border: "1px solid #cc3333", color: "#ff6666", padding: "10px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, textAlign: "left", marginTop: 4 })}>
                  🚪 Cerrar sesión
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input type="password" placeholder="Nueva contraseña (mín. 8 chars)" value={newPw} onChange={(e) => setNewPw(e.target.value)} style={s({ background: "#0a0a0f", border: "1px solid #444", color: "#e0e0e0", padding: "10px 12px", borderRadius: 8, fontSize: 13, outline: "none" })} />
                {pwMsg && <div style={{ fontSize: 12, color: pwMsg.startsWith("✅") ? "#4CAF50" : "#ff6666" }}>{pwMsg}</div>}
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={handleChangePw} style={s({ background: "#F39C12", border: "none", color: "#0a0a0f", padding: "10px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 700, flex: 1 })}>Guardar</button>
                  <button onClick={() => { setChangingPw(false); setPwMsg(""); setNewPw(""); }} style={s({ background: "#1a1a2e", border: "1px solid #444", color: "#888", padding: "10px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13 })}>Cancelar</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Admin Panel */}
        {menuOpen && adminOpen && isAdmin && (
          <div style={s({ position: "fixed", top: 60, right: 16, width: "min(600px, calc(100vw - 32px))", maxHeight: "calc(100vh - 80px)", overflowY: "auto", background: "#0d0d14", border: "1px solid #F39C12", borderRadius: 12, padding: 24, boxShadow: "0 12px 48px rgba(0,0,0,0.7)", zIndex: 100000 })}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 style={{ margin: 0, color: "#F39C12", fontSize: 18 }}>⚙️ Administrar Usuarios</h2>
              <button onClick={() => setAdminOpen(false)} style={s({ background: "none", border: "none", color: "#888", fontSize: 20, cursor: "pointer" })}>✕</button>
            </div>

            {/* Resumen */}
            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              <div style={s({ flex: 1, background: "#141419", borderRadius: 8, padding: 16, textAlign: "center", border: "1px solid #222" })}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#F39C12" }}>{users.length}</div>
                <div style={{ fontSize: 11, color: "#888" }}>Total</div>
              </div>
              <div style={s({ flex: 1, background: "#141419", borderRadius: 8, padding: 16, textAlign: "center", border: "1px solid #222" })}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#4CAF50" }}>{users.filter(u => u.status === "activo").length}</div>
                <div style={{ fontSize: 11, color: "#888" }}>Activos</div>
              </div>
              <div style={s({ flex: 1, background: "#141419", borderRadius: 8, padding: 16, textAlign: "center", border: "1px solid #222" })}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#FF9800" }}>{users.filter(u => u.status === "creado").length}</div>
                <div style={{ fontSize: 11, color: "#888" }}>Pendientes</div>
              </div>
            </div>

            {/* Crear usuario */}
            <div style={s({ background: "#141419", borderRadius: 10, padding: 16, marginBottom: 20, border: "1px solid #222" })}>
              <h3 style={{ margin: "0 0 12px", color: "#e0e0e0", fontSize: 14 }}>Crear nuevo usuario</h3>
              <form onSubmit={handleCreateUser}>
                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <input type="email" placeholder="email@ejemplo.com" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required style={s({ flex: 1, background: "#0a0a0f", border: "1px solid #333", color: "#e0e0e0", padding: "10px 12px", borderRadius: 8, fontSize: 13, outline: "none" })} />
                </div>
                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <input type="text" placeholder="Contraseña" value={newUserPw} onChange={(e) => setNewUserPw(e.target.value)} required minLength={8} style={s({ flex: 1, background: "#0a0a0f", border: "1px solid #333", color: "#e0e0e0", padding: "10px 12px", borderRadius: 8, fontSize: 13, outline: "none", fontFamily: "monospace" })} />
                  <button type="button" onClick={() => setNewUserPw(generatePassword())} style={s({ background: "#1a1a2e", border: "1px solid #F39C12", color: "#F39C12", padding: "10px 12px", borderRadius: 8, cursor: "pointer", fontSize: 12, whiteSpace: "nowrap" })}>Generar</button>
                </div>
                {adminErr && <div style={{ fontSize: 12, color: "#ff6666", marginBottom: 8, padding: "6px 10px", background: "#3a1515", borderRadius: 6 }}>{adminErr}</div>}
                {adminMsg && <div style={{ fontSize: 12, color: "#4CAF50", marginBottom: 8, padding: "6px 10px", background: "#153a15", borderRadius: 6 }}>{adminMsg}</div>}
                <button type="submit" disabled={creating} style={s({ background: creating ? "#444" : "#F39C12", color: "#0a0a0f", border: "none", padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: creating ? "not-allowed" : "pointer" })}>
                  {creating ? "Creando..." : "Crear usuario"}
                </button>
              </form>
              <div style={{ fontSize: 11, color: "#666", marginTop: 8 }}>El usuario deberá cambiar su contraseña en el primer inicio de sesión.</div>
            </div>

            {/* Lista de usuarios */}
            <div style={s({ background: "#141419", borderRadius: 10, padding: 16, border: "1px solid #222" })}>
              <h3 style={{ margin: "0 0 12px", color: "#e0e0e0", fontSize: 14 }}>Usuarios registrados</h3>
              {loadingUsers ? (
                <div style={{ color: "#888", fontSize: 13 }}>Cargando...</div>
              ) : (
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #333" }}>
                      <th style={{ textAlign: "left", padding: "8px 6px", color: "#888", fontWeight: 500 }}>Email</th>
                      <th style={{ textAlign: "left", padding: "8px 6px", color: "#888", fontWeight: 500 }}>Rol</th>
                      <th style={{ textAlign: "left", padding: "8px 6px", color: "#888", fontWeight: 500 }}>Estado</th>
                      <th style={{ textAlign: "left", padding: "8px 6px", color: "#888", fontWeight: 500 }}>Creado</th>
                      <th style={{ textAlign: "left", padding: "8px 6px", color: "#888", fontWeight: 500 }}>Último login</th>
                      <th style={{ textAlign: "center", padding: "8px 6px", color: "#888", fontWeight: 500 }}>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(u => (
                      <tr key={u.id} style={{ borderBottom: "1px solid #1a1a2e" }}>
                        <td style={{ padding: "8px 6px", color: "#e0e0e0", fontWeight: 600 }}>{u.email}</td>
                        <td style={{ padding: "8px 6px" }}>
                          <span style={{ background: u.role === "admin" ? "#4a1a6b" : "#1a2a4a", color: u.role === "admin" ? "#c084fc" : "#60a5fa", padding: "2px 8px", borderRadius: 4, fontSize: 11 }}>
                            {u.role === "admin" ? "Admin" : "Usuario"}
                          </span>
                        </td>
                        <td style={{ padding: "8px 6px" }}>
                          <span style={{
                            background: u.status === "activo" ? "#153a15" : u.status === "creado" ? "#3a2a15" : "#3a1515",
                            color: u.status === "activo" ? "#4CAF50" : u.status === "creado" ? "#FF9800" : "#ff6666",
                            padding: "2px 8px", borderRadius: 4, fontSize: 11,
                          }}>
                            {u.status === "activo" ? "Activo" : u.status === "creado" ? "Pendiente" : "Eliminado"}
                          </span>
                        </td>
                        <td style={{ padding: "8px 6px", color: "#888", fontSize: 11 }}>{formatDate(u.created_at)}</td>
                        <td style={{ padding: "8px 6px", color: "#888", fontSize: 11 }}>{formatDate(u.last_sign_in_at)}</td>
                        <td style={{ padding: "8px 6px", textAlign: "center" }}>
                          {u.role !== "admin" && (
                            u.status === "eliminado" ? (
                              <button onClick={() => handleUserAction(u.id, "reactivate")} style={s({ background: "#153a15", border: "1px solid #4CAF50", color: "#4CAF50", padding: "4px 10px", borderRadius: 4, fontSize: 11, cursor: "pointer" })}>Reactivar</button>
                            ) : (
                              <button onClick={() => { if (confirm("¿Eliminar cuenta de " + u.email + "?")) handleUserAction(u.id, "delete"); }} style={s({ background: "#3a1515", border: "1px solid #cc3333", color: "#ff6666", padding: "4px 10px", borderRadius: 4, fontSize: 11, cursor: "pointer" })}>Eliminar</button>
                            )
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Grafo iframe */}
      <iframe
        src="/api/assets/grafo-v8.html"
        style={{ width: "100vw", height: "100vh", border: "none", position: "fixed", top: 0, left: 0, zIndex: 9998 }}
        title="SENSEI GRAFO v2 — Motor de Rendimiento Estudiantil"
      />
    </>
  );
}
