import { createServerSupabaseClient } from "@/lib/supabase-server";
import { isAdminEmail } from "@/lib/supabase-admin";
import { redirect } from "next/navigation";
import ComercialClient from "./ComercialClient";

export default async function ComercialPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const isAdmin = isAdminEmail(user.email);

  return <ComercialClient email={user.email ?? ""} isAdmin={isAdmin} />;
}
