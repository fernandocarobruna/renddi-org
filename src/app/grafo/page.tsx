import { createServerSupabaseClient } from "@/lib/supabase-server";
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

  return <GrafoClient email={user.email ?? ""} />;
}
