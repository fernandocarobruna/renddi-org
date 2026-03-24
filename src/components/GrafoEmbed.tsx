"use client";

import { useState } from "react";

interface GrafoEmbedProps {
  src: string;
  title?: string;
}

export default function GrafoEmbed({ src, title = "Visualizacion" }: GrafoEmbedProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ position: "relative", width: "100%", height: "calc(100vh - 200px)", minHeight: 500 }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--card, #1a1d23)",
            borderRadius: 12,
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 36,
                height: 36,
                border: "3px solid rgba(243,156,18,0.2)",
                borderTopColor: "#F39C12",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
                margin: "0 auto 12px",
              }}
            />
            <div style={{ fontSize: 13, color: "var(--muted, #6b7280)" }}>
              Cargando {title}...
            </div>
          </div>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        onLoad={() => setLoading(false)}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: 12,
          background: "#0a0a0a",
        }}
      />
    </div>
  );
}
