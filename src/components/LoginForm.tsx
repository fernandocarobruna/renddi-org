"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"password" | "magic">("password");
  const router = useRouter();
  const supabase = createClient();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    if (mode === "password") {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError("Credenciales incorrectas. Verifica tu email y contraseña.");
      } else if (data.user?.user_metadata?.must_change_password) {
        router.push("/cambiar-password");
        router.refresh();
      } else {
        router.push("/grafo");
        router.refresh();
      }
    } else {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        setError("No pudimos enviar el link. Verifica que tu email esté registrado.");
      } else {
        setMessage("✅ Link enviado — revisa tu bandeja de entrada (y spam).");
      }
    }

    setLoading(false);
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(ellipse at 30% 20%, #1a0a2e 0%, #0a0a0f 50%, #0d1117 100%)",
      padding: 24,
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div style={{ width: "100%", maxWidth: 440 }}>
        {/* Header — Dojo/Miyagi theme */}
        <div style={{
          textAlign: "center",
          marginBottom: 32,
        }}>
          <div style={{ fontSize: 56, marginBottom: 8 }}>🥋</div>
          <h1 style={{
            fontSize: 42,
            fontWeight: 900,
            color: "#F39C12",
            letterSpacing: -2,
            margin: 0,
            textShadow: "0 0 40px rgba(243,156,18,0.3)",
          }}>
            RENDDI
          </h1>
          <div style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            marginTop: 8,
            fontStyle: "italic",
            letterSpacing: 2,
          }}>
            道場 · DOJO DEL CONOCIMIENTO
          </div>
          <div style={{
            marginTop: 20,
            padding: "10px 24px",
            background: "rgba(243,156,18,0.1)",
            border: "1px solid rgba(243,156,18,0.2)",
            borderRadius: 8,
            display: "inline-block",
          }}>
            <span style={{ fontSize: 14, color: "#F39C12", fontWeight: 600 }}>
              ⚡ Ya casi estamos listos
            </span>
          </div>
        </div>

        {/* Login card */}
        <div style={{
          background: "rgba(20,20,25,0.95)",
          border: "1px solid rgba(243,156,18,0.15)",
          borderRadius: 16,
          padding: 32,
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}>
          {/* Mode tabs */}
          <div style={{
            display: "flex",
            gap: 4,
            marginBottom: 28,
            background: "#0a0a0f",
            borderRadius: 10,
            padding: 4,
          }}>
            <button
              onClick={() => setMode("password")}
              style={{
                flex: 1,
                padding: "10px 16px",
                borderRadius: 8,
                border: "none",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                background: mode === "password" ? "#F39C12" : "transparent",
                color: mode === "password" ? "#0a0a0f" : "#888",
              }}
            >
              🔑 Email + Password
            </button>
            <button
              onClick={() => setMode("magic")}
              style={{
                flex: 1,
                padding: "10px 16px",
                borderRadius: 8,
                border: "none",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                background: mode === "magic" ? "#F39C12" : "transparent",
                color: mode === "magic" ? "#0a0a0f" : "#888",
              }}
            >
              ✨ Magic Link
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 500, marginBottom: 6, color: "#888", textTransform: "uppercase", letterSpacing: 1 }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="tu@renddi.app"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#0a0a0f",
                  border: "1px solid #333",
                  borderRadius: 10,
                  fontSize: 14,
                  color: "#e0e0e0",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => e.target.style.borderColor = "#F39C12"}
                onBlur={(e) => e.target.style.borderColor = "#333"}
              />
            </div>

            {mode === "password" && (
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 500, marginBottom: 6, color: "#888", textTransform: "uppercase", letterSpacing: 1 }}>
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "#0a0a0f",
                    border: "1px solid #333",
                    borderRadius: 10,
                    fontSize: 14,
                    color: "#e0e0e0",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#F39C12"}
                  onBlur={(e) => e.target.style.borderColor = "#333"}
                />
              </div>
            )}

            {mode === "magic" && (
              <div style={{
                padding: "12px 16px",
                background: "rgba(243,156,18,0.05)",
                border: "1px solid rgba(243,156,18,0.1)",
                borderRadius: 10,
                marginBottom: 20,
                fontSize: 12,
                color: "#888",
                lineHeight: 1.5,
              }}>
                Te enviaremos un link de acceso directo a tu email. Sin contraseña.
              </div>
            )}

            {error && (
              <div style={{
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.2)",
                color: "#ff6666",
                padding: "10px 14px",
                borderRadius: 10,
                fontSize: 13,
                marginBottom: 16,
              }}>
                {error}
              </div>
            )}

            {message && (
              <div style={{
                background: "rgba(76,175,80,0.1)",
                border: "1px solid rgba(76,175,80,0.2)",
                color: "#4CAF50",
                padding: "10px 14px",
                borderRadius: 10,
                fontSize: 13,
                marginBottom: 16,
              }}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px 20px",
                background: loading ? "#444" : "linear-gradient(135deg, #F39C12, #e67e22)",
                color: loading ? "#888" : "#0a0a0f",
                border: "none",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                boxShadow: loading ? "none" : "0 4px 20px rgba(243,156,18,0.3)",
              }}
            >
              {loading ? "Procesando..." : mode === "password" ? "Entrar al Dojo" : "Enviar Magic Link"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          marginTop: 24,
          fontSize: 11,
          color: "rgba(255,255,255,0.2)",
        }}>
          "El maestro aparece cuando el estudiante está listo" — MIYAGI
        </div>
      </div>
    </div>
  );
}
