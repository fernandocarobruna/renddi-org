import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export default async function DictamenExpertoPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <iframe
      src="/api/private2026/dictamen-experto"
      style={{ width: "100vw", height: "100vh", border: "none", position: "fixed", top: 0, left: 0 }}
      title="Dictamen Experto RENDDI"
    />
  );
}
