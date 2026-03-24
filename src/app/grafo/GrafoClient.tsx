"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

export default function GrafoClient({ email }: { email: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [changingPw, setChangingPw] = useState(false);
  const [newPw, setNewPw] = useState("");
  const [pwMsg, setPwMsg] = useState("");

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  async function handleChangePw() {
    if (newPw.length < 8) {
      setPwMsg("Mínimo 8 caracteres");
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: newPw });
    if (error) {
      setPwMsg("Error: " + error.message);
    } else {
      setPwMsg("✅ Contraseña actualizada");
      setNewPw("");
      setTimeout(() => { setChangingPw(false); setPwMsg(""); }, 2000);
    }
  }

  return (
    <>
      {/* User menu floating */}
      <div style={{
        position: "fixed",
        top: 12,
        right: 16,
        zIndex: 99999,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "rgba(20,20,30,0.9)",
            border: "1px solid #F39C12",
            color: "#F39C12",
            padding: "8px 16px",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 600,
            backdropFilter: "blur(8px)",
          }}
        >
          👤 {email} ▾
        </button>

        {menuOpen && (
          <div style={{
            position: "absolute",
            top: 44,
            right: 0,
            background: "#141419",
            border: "1px solid #333",
            borderRadius: 10,
            padding: 16,
            minWidth: 280,
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          }}>
            <div style={{ color: "#888", fontSize: 11, marginBottom: 12 }}>
              Sesión activa
            </div>
            <div style={{ color: "#e0e0e0", fontSize: 14, fontWeight: 600, marginBottom: 16 }}>
              {email}
            </div>

            {!changingPw ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button
                  onClick={() => setChangingPw(true)}
                  style={{
                    background: "#1a1a2e",
                    border: "1px solid #444",
                    color: "#e0e0e0",
                    padding: "10px 16px",
                    borderRadius: 8,
                    cursor: "pointer",
                    fontSize: 13,
                    textAlign: "left",
                  }}
                >
                  🔑 Cambiar contraseña
                </button>
                <button
                  onClick={handleLogout}
                  style={{
                    background: "#3a1515",
                    border: "1px solid #cc3333",
                    color: "#ff6666",
                    padding: "10px 16px",
                    borderRadius: 8,
                    cursor: "pointer",
                    fontSize: 13,
                    textAlign: "left",
                    marginTop: 4,
                  }}
                >
                  🚪 Cerrar sesión
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input
                  type="password"
                  placeholder="Nueva contraseña (mín. 8 chars)"
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  style={{
                    background: "#0a0a0f",
                    border: "1px solid #444",
                    color: "#e0e0e0",
                    padding: "10px 12px",
                    borderRadius: 8,
                    fontSize: 13,
                    outline: "none",
                  }}
                />
                {pwMsg && (
                  <div style={{ fontSize: 12, color: pwMsg.startsWith("✅") ? "#4CAF50" : "#ff6666" }}>
                    {pwMsg}
                  </div>
                )}
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={handleChangePw}
                    style={{
                      background: "#F39C12",
                      border: "none",
                      color: "#0a0a0f",
                      padding: "10px 16px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 700,
                      flex: 1,
                    }}
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => { setChangingPw(false); setPwMsg(""); setNewPw(""); }}
                    style={{
                      background: "#1a1a2e",
                      border: "1px solid #444",
                      color: "#888",
                      padding: "10px 16px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Grafo iframe */}
      <iframe
        src="/api/assets/grafo-v8.html"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9998,
        }}
        title="SENSEI GRAFO v2 — Motor de Rendimiento Estudiantil"
      />
    </>
  );
}
