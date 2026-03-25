import { createServerSupabaseClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

// Whitelist of allowed redirect paths after auth callback
const ALLOWED_REDIRECTS = ["/", "/grafo", "/cambiar-password", "/private2026", "/metamodelo"];

function getSafeRedirect(next: string | null): string {
  if (!next) return "/";
  // Strip protocol/host to prevent open redirect
  const path = next.startsWith("/") ? next.split("?")[0] : "/";
  return ALLOWED_REDIRECTS.includes(path) ? path : "/";
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const redirectPath = getSafeRedirect(searchParams.get("next"));

  if (code) {
    const supabase = await createServerSupabaseClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${redirectPath}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth`);
}
