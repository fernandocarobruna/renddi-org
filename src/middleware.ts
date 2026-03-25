import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const loginAttempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;
// Prevent unbounded memory growth — evict expired entries periodically
const MAX_MAP_SIZE = 10000;

function getClientIp(request: NextRequest): string {
  // In production behind a trusted proxy (Vercel), x-forwarded-for first IP is reliable.
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // Take the first IP (client IP set by the trusted proxy)
    return forwarded.split(",")[0].trim();
  }
  return "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Evict expired entries if map is too large
  if (loginAttempts.size > MAX_MAP_SIZE) {
    for (const [key, val] of loginAttempts) {
      if (now > val.resetAt) loginAttempts.delete(key);
    }
  }

  const record = loginAttempts.get(ip);
  if (!record || now > record.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (record.count >= MAX_ATTEMPTS) return false;
  record.count++;
  return true;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Rate limit login attempts AND auth API endpoints
  if (
    (pathname === "/login" && request.method === "POST") ||
    (pathname.startsWith("/api/auth") && request.method === "POST")
  ) {
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Demasiados intentos. Intenta en 15 minutos." },
        { status: 429 }
      );
    }
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not logged in → redirect to login
  if (
    !user &&
    !pathname.startsWith("/login") &&
    !pathname.startsWith("/auth")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Must change password
  if (
    user &&
    user.user_metadata?.must_change_password === true &&
    !pathname.startsWith("/cambiar-password") &&
    !pathname.startsWith("/auth") &&
    !pathname.startsWith("/api")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/cambiar-password";
    return NextResponse.redirect(url);
  }

  // Security headers
  supabaseResponse.headers.set("X-Frame-Options", "SAMEORIGIN");
  supabaseResponse.headers.set("X-Content-Type-Options", "nosniff");
  supabaseResponse.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  supabaseResponse.headers.set("X-XSS-Protection", "1; mode=block");
  supabaseResponse.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  supabaseResponse.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );
  supabaseResponse.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https://*.supabase.co https://api.resend.com; frame-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self';"
  );

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
