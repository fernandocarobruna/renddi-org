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
        style={{ width: "100vw", height: "calc(100vh - 42px)", border: "none", position: "fixed", top: 42, left: 0 }}
        title="Marco Teorico RENDDI"
      />
    </>
  );
}
