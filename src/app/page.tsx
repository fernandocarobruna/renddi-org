import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', system-ui, sans-serif",
      color: "#e0e0e0",
      gap: 40,
    }}>
      <h1 style={{ fontSize: 48, fontWeight: 800, color: "#F39C12", margin: 0 }}>RENDDI</h1>
      <div style={{ display: "flex", gap: 24 }}>
        <Link href="/grafo" style={{
          padding: "20px 40px",
          background: "linear-gradient(135deg, #F39C12, #e67e22)",
          color: "#0a0a0f",
          borderRadius: 12,
          textDecoration: "none",
          fontWeight: 700,
          fontSize: 18,
        }}>
          🕸️ Grafo Interactivo
        </Link>
        <Link href="/metamodelo" style={{
          padding: "20px 40px",
          background: "#1a1a2e",
          border: "1px solid #F39C12",
          color: "#F39C12",
          borderRadius: 12,
          textDecoration: "none",
          fontWeight: 700,
          fontSize: 18,
        }}>
          📊 Metamodelo
        </Link>
      </div>
      <p style={{ color: "#666", fontSize: 14 }}>{user.email}</p>
    </div>
  );
}
