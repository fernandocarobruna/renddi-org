import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import SectionNav from "@/components/SectionNav";

export default async function AddendaPaperPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <SectionNav active="addenda-paper" />
      <iframe
        src="/api/private2026/addenda-paper"
        style={{ width: "100vw", height: "calc(100vh - 42px)", border: "none", position: "fixed", top: 42, left: 0 }}
        title="Addenda Paper Validacion SENSEI"
      />
    </>
  );
}
