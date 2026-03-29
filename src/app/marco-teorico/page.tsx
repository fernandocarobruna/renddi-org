import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import SectionNav from "@/components/SectionNav";

export default async function MarcoTeoricoPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <SectionNav active="marco-teorico" />
      <iframe
        src="/api/private2026/marco-teorico"
        style={{ width: "100vw", height: "100vh", border: "none", position: "fixed", top: 0, left: 0 }}
        title="Marco Teorico RENDDI"
      />
    </>
  );
}
