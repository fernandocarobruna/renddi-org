import { createClient } from "@supabase/supabase-js";

const ADMIN_EMAILS = ["fernando@renddi.app", "fernando.caro.bruna@gmail.com"];

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export function isAdminEmail(email: string | undefined): boolean {
  return !!email && ADMIN_EMAILS.includes(email);
}
