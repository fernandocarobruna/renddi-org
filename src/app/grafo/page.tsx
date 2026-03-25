import { createServerSupabaseClient } from "@/lib/supabase-server";
import { isAdminEmail } from "@/lib/supabase-admin";
import { redirect } from "next/navigation";
import GrafoClient from "./GrafoClient";

export default async function GrafoPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Determine admin status server-side so the email list stays out of the client bundle
  const isAdmin = isAdminEmail(user.email);

  return <GrafoClient email={user.email ?? ""} isAdmin={isAdmin} />;
}
