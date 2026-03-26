"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

type Tab = "pricing" | "competencia" | "economics" | "percepcion" | "estrategia";

const TABS: { id: Tab; label: string }[] = [
  { id: "pricing", label: "Pricing" },
  { id: "competencia", label: "Competencia" },
  { id: "economics", label: "Unit Economics" },
  { id: "percepcion", label: "Percepcion de Valor" },
  { id: "estrategia", label: "Estrategia" },
];

/* ─── Inline style helper ─── */
const s = (overrides: React.CSSProperties): React.CSSProperties => overrides;

/* ─── Pricing data ─── */
const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    badge: null,
    features: [
      "Diagnostico inicial completo",
      "3 sesiones de practica / semana",
      "Resultados basicos",
      "Acceso limitado a contenido",
    ],
    cta: "Comenzar gratis",
    borderColor: "#444",
    highlight: false,
  },
  {
    name: "Renddi",
    price: "$14.990",
    period: "/mes",
    badge: "Mas popular",
    features: [
      "Sesiones ilimitadas",
      "Coaching emocional con IA",
      "Arquetipos de aprendizaje",
      "Simulacros PAES completos",
      "Analisis de rendimiento",
      "Soporte prioritario",
    ],
    cta: "Suscribirse",
    borderColor: "#F39C12",
    highlight: true,
  },
  {
    name: "PAES Pack",
    price: "$49.990",
    period: "/6 meses",
    badge: null,
    features: [
      "Todo lo de Renddi",
      "6 meses prepago (ahorro 44%)",
      "Acceso anticipado a features",
      "Simulacros premium",
      "Dashboard de progreso avanzado",
    ],
    cta: "Comprar pack",
    borderColor: "#9B59B6",
    highlight: false,
  },
  {
    name: "Colegio",
    price: "$99.990",
    period: "/alumno/ano",
    badge: null,
    features: [
      "Todo lo de Renddi",
      "Panel de administracion escolar",
      "Reportes por curso",
      "Integracion con LMS",
      "Soporte dedicado",
      "Facturacion institucional",
    ],
    cta: "Contactar ventas",
    borderColor: "#3498DB",
    highlight: false,
  },
];

/* ─── Competencia data ─── */
const COMPETITORS = [
  { name: "Renddi", price: "$14.990/mes", adaptativo: true, coaching: true, arquetipos: true, simulacros: true, soporte: true, isRenddi: true },
  { name: "CPECH", price: "$120.000/mes", adaptativo: false, coaching: false, arquetipos: false, simulacros: true, soporte: true, isRenddi: false },
  { name: "PDV", price: "$95.000/mes", adaptativo: false, coaching: false, arquetipos: false, simulacros: true, soporte: true, isRenddi: false },
  { name: "Preu AI", price: "$3.990/mes", adaptativo: true, coaching: false, arquetipos: false, simulacros: false, soporte: false, isRenddi: false },
  { name: "Filadd", price: "$33.000/mes", adaptativo: true, coaching: false, arquetipos: false, simulacros: false, soporte: true, isRenddi: false },
  { name: "Khan Academy", price: "Gratis", adaptativo: true, coaching: false, arquetipos: false, simulacros: false, soporte: false, isRenddi: false },
];

/* ─── Unit economics data ─── */
const ECONOMICS = [
  { label: "CAC estimado", value: "$2.500", sub: "Costo de adquisicion por cliente" },
  { label: "LTV (mensual)", value: "$89.940", sub: "6 meses promedio de retencion" },
  { label: "LTV / CAC", value: "36x", sub: "Ratio saludable > 3x" },
  { label: "Payback period", value: "< 1 mes", sub: "Recuperacion de inversion" },
];

const REVENUE_PROJECTIONS = [
  { plan: "Free", users: 5000, revenue: "$0", color: "#666" },
  { plan: "Renddi", users: 500, revenue: "$7.495.000", color: "#F39C12" },
  { plan: "PAES Pack", users: 200, revenue: "$9.998.000", color: "#9B59B6" },
  { plan: "Colegio", users: 50, revenue: "$4.999.500", color: "#3498DB" },
];

/* ─── WTP data (Willingness to Pay) ─── */
const WTP_DATA = [
  { segment: "Estudiantes autoprep.", wtp: 12000, max: 50000, color: "#F39C12" },
  { segment: "Padres preocupados", wtp: 25000, max: 50000, color: "#E74C3C" },
  { segment: "Colegios privados", wtp: 45000, max: 50000, color: "#3498DB" },
  { segment: "Colegios publicos", wtp: 8000, max: 50000, color: "#2ECC71" },
  { segment: "Universitarios", wtp: 15000, max: 50000, color: "#9B59B6" },
];

/* ─── Estrategia data ─── */
const STRATEGIES = [
  { title: "Early Bird", desc: "50% descuento primeros 100 usuarios. Genera traccion y testimonios iniciales.", icon: "01" },
  { title: "Referidos", desc: "1 mes gratis por cada referido que se suscriba. Crecimiento viral organico.", icon: "02" },
  { title: "Becas Renddi", desc: "10% de cupos gratuitos para estudiantes vulnerables. Impacto social y PR.", icon: "03" },
  { title: "Convenios colegios", desc: "Precio preferencial para colegios que integren Renddi como herramienta oficial.", icon: "04" },
];

const TIMELINE = [
  { month: "Mes 1-2", phase: "Pre-lanzamiento", actions: "Landing page, waitlist, contenido en RRSS, beta cerrada con 50 usuarios" },
  { month: "Mes 3", phase: "Lanzamiento", actions: "Early bird, PR en medios educativos, partnerships con influencers educativos" },
  { month: "Mes 4-6", phase: "Crecimiento", actions: "Referidos activo, primeros colegios piloto, optimizacion de conversion" },
  { month: "Mes 7-12", phase: "Escala", actions: "Expansion a mas regiones, equipo comercial, serie de financiamiento" },
];

export default function ComercialClient({
  email,
  isAdmin,
}: {
  email: string;
  isAdmin: boolean;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("pricing");
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
      setPwMsg("Minimo 8 caracteres");
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: newPw });
    if (error) {
      setPwMsg("Error al cambiar contrasena. Intenta nuevamente.");
    } else {
      setPwMsg("Contrasena actualizada");
      setNewPw("");
      setTimeout(() => {
        setChangingPw(false);
        setPwMsg("");
      }, 2000);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        color: "#e0e0e0",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* ─── Header ─── */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          borderBottom: "1px solid #1a1a2e",
          background: "rgba(10,10,15,0.95)",
          backdropFilter: "blur(8px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#F39C12",
              letterSpacing: "-0.5px",
            }}
          >
            RENDDI
          </span>
          <span
            style={{
              fontSize: 14,
              color: "#888",
              borderLeft: "1px solid #333",
              paddingLeft: 16,
            }}
          >
            Estrategia Comercial
          </span>
        </div>

        {/* User menu */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={s({
              background: "rgba(20,20,30,0.9)",
              border: "1px solid #F39C12",
              color: "#F39C12",
              padding: "8px 16px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
            })}
          >
            {email} ▾
          </button>

          {menuOpen && (
            <div
              style={s({
                position: "absolute",
                top: 44,
                right: 0,
                background: "#141419",
                border: "1px solid #333",
                borderRadius: 10,
                padding: 16,
                minWidth: 280,
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                zIndex: 200,
              })}
            >
              <div style={{ color: "#888", fontSize: 11, marginBottom: 12 }}>
                Sesion activa
              </div>
              <div
                style={{
                  color: "#e0e0e0",
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                {email}
              </div>

              {!changingPw ? (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <button
                    onClick={() => setChangingPw(true)}
                    style={s({
                      background: "#1a1a2e",
                      border: "1px solid #444",
                      color: "#e0e0e0",
                      padding: "10px 16px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontSize: 13,
                      textAlign: "left",
                    })}
                  >
                    Cambiar contrasena
                  </button>
                  {isAdmin && (
                    <button
                      onClick={() => {
                        window.location.href = "/grafo";
                      }}
                      style={s({
                        background: "#1a1a2e",
                        border: "1px solid #F39C12",
                        color: "#F39C12",
                        padding: "10px 16px",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontSize: 13,
                        textAlign: "left",
                      })}
                    >
                      Ir al Grafo
                    </button>
                  )}
                  <button
                    onClick={handleLogout}
                    style={s({
                      background: "#3a1515",
                      border: "1px solid #cc3333",
                      color: "#ff6666",
                      padding: "10px 16px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontSize: 13,
                      textAlign: "left",
                      marginTop: 4,
                    })}
                  >
                    Cerrar sesion
                  </button>
                </div>
              ) : (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <input
                    type="password"
                    placeholder="Nueva contrasena (min. 8 chars)"
                    value={newPw}
                    onChange={(e) => setNewPw(e.target.value)}
                    style={s({
                      background: "#0a0a0f",
                      border: "1px solid #444",
                      color: "#e0e0e0",
                      padding: "10px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      outline: "none",
                    })}
                  />
                  {pwMsg && (
                    <div
                      style={{
                        fontSize: 12,
                        color: pwMsg.includes("actualizada")
                          ? "#4CAF50"
                          : "#ff6666",
                      }}
                    >
                      {pwMsg}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      onClick={handleChangePw}
                      style={s({
                        background: "#F39C12",
                        border: "none",
                        color: "#0a0a0f",
                        padding: "10px 16px",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontSize: 13,
                        fontWeight: 700,
                        flex: 1,
                      })}
                    >
                      Guardar
                    </button>
                    <button
                      onClick={() => {
                        setChangingPw(false);
                        setPwMsg("");
                        setNewPw("");
                      }}
                      style={s({
                        background: "#1a1a2e",
                        border: "1px solid #444",
                        color: "#888",
                        padding: "10px 16px",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontSize: 13,
                      })}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* ─── Tab navigation ─── */}
      <nav
        style={{
          display: "flex",
          gap: 0,
          borderBottom: "1px solid #1a1a2e",
          background: "#0d0d14",
          overflowX: "auto",
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={s({
              background: "none",
              border: "none",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid #F39C12"
                  : "2px solid transparent",
              color: activeTab === tab.id ? "#F39C12" : "#888",
              padding: "14px 24px",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: activeTab === tab.id ? 700 : 500,
              fontFamily: "'Inter', system-ui, sans-serif",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
            })}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* ─── Content ─── */}
      <main style={{ padding: "32px 24px", maxWidth: 1200, margin: "0 auto" }}>
        {activeTab === "pricing" && <PricingSection />}
        {activeTab === "competencia" && <CompetenciaSection />}
        {activeTab === "economics" && <EconomicsSection />}
        {activeTab === "percepcion" && <PercepcionSection />}
        {activeTab === "estrategia" && <EstrategiaSection />}
      </main>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Section Components
   ═══════════════════════════════════════════ */

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h1
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: "#e0e0e0",
          margin: "0 0 8px",
          letterSpacing: "-0.5px",
        }}
      >
        {title}
      </h1>
      <p style={{ fontSize: 14, color: "#888", margin: 0 }}>{subtitle}</p>
    </div>
  );
}

/* ─── 1. Pricing ─── */
function PricingSection() {
  return (
    <>
      <SectionTitle
        title="Planes y Pricing"
        subtitle="Estructura de precios para el mercado chileno de preparacion PAES"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            style={s({
              background: plan.highlight
                ? "linear-gradient(135deg, #1a1500 0%, #141419 100%)"
                : "#141419",
              border: `1px solid ${plan.borderColor}`,
              borderRadius: 12,
              padding: 28,
              position: "relative",
              transition: "transform 0.2s",
            })}
          >
            {plan.badge && (
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  right: 16,
                  background: "#F39C12",
                  color: "#0a0a0f",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: 20,
                }}
              >
                {plan.badge}
              </div>
            )}
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: 18,
                fontWeight: 700,
                color: "#e0e0e0",
              }}
            >
              {plan.name}
            </h3>
            <div style={{ marginBottom: 20 }}>
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: plan.highlight ? "#F39C12" : "#e0e0e0",
                }}
              >
                {plan.price}
              </span>
              {plan.period && (
                <span style={{ fontSize: 14, color: "#888" }}>
                  {plan.period}
                </span>
              )}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
              {plan.features.map((f, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 13,
                    color: "#aaa",
                    padding: "6px 0",
                    borderBottom: "1px solid #1a1a2e",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#4CAF50", fontSize: 12 }}>
                    &#10003;
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              style={s({
                width: "100%",
                padding: "12px 16px",
                borderRadius: 8,
                border: plan.highlight
                  ? "none"
                  : `1px solid ${plan.borderColor}`,
                background: plan.highlight ? "#F39C12" : "transparent",
                color: plan.highlight ? "#0a0a0f" : "#e0e0e0",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'Inter', system-ui, sans-serif",
              })}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

/* ─── 2. Competencia ─── */
function CompetenciaSection() {
  return (
    <>
      <SectionTitle
        title="Analisis Competitivo"
        subtitle="Comparacion con principales alternativas en el mercado de preparacion PAES"
      />
      <div
        style={{
          overflowX: "auto",
          borderRadius: 12,
          border: "1px solid #1a1a2e",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 13,
            minWidth: 700,
          }}
        >
          <thead>
            <tr style={{ background: "#141419" }}>
              <th style={thStyle}>Plataforma</th>
              <th style={thStyle}>Precio</th>
              <th style={thStyle}>Adaptativo</th>
              <th style={thStyle}>Coaching emocional</th>
              <th style={thStyle}>Arquetipos</th>
              <th style={thStyle}>Simulacros</th>
              <th style={thStyle}>Soporte</th>
            </tr>
          </thead>
          <tbody>
            {COMPETITORS.map((c) => (
              <tr
                key={c.name}
                style={{
                  background: c.isRenddi
                    ? "rgba(243,156,18,0.08)"
                    : "transparent",
                  borderBottom: "1px solid #1a1a2e",
                }}
              >
                <td
                  style={{
                    ...tdStyle,
                    fontWeight: c.isRenddi ? 700 : 500,
                    color: c.isRenddi ? "#F39C12" : "#e0e0e0",
                  }}
                >
                  {c.name}
                </td>
                <td
                  style={{
                    ...tdStyle,
                    color: c.isRenddi ? "#4CAF50" : "#e0e0e0",
                    fontWeight: 600,
                  }}
                >
                  {c.price}
                </td>
                <td style={tdStyle}>{boolCell(c.adaptativo)}</td>
                <td style={tdStyle}>{boolCell(c.coaching)}</td>
                <td style={tdStyle}>{boolCell(c.arquetipos)}</td>
                <td style={tdStyle}>{boolCell(c.simulacros)}</td>
                <td style={tdStyle}>{boolCell(c.soporte)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: 24,
          padding: 20,
          background: "#141419",
          borderRadius: 12,
          border: "1px solid #1a1a2e",
        }}
      >
        <h3
          style={{
            margin: "0 0 12px",
            fontSize: 15,
            fontWeight: 700,
            color: "#F39C12",
          }}
        >
          Ventaja competitiva
        </h3>
        <p style={{ fontSize: 13, color: "#aaa", margin: 0, lineHeight: 1.7 }}>
          Renddi es la unica plataforma que combina aprendizaje adaptativo,
          coaching emocional con IA y arquetipos de aprendizaje a un precio 87%
          menor que un preuniversitario tradicional. Ninguna otra solucion en el
          mercado ofrece esta combinacion.
        </p>
      </div>
    </>
  );
}

/* ─── 3. Unit Economics ─── */
function EconomicsSection() {
  return (
    <>
      <SectionTitle
        title="Unit Economics"
        subtitle="Metricas clave de rentabilidad y proyecciones de ingresos"
      />

      {/* KPI cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginBottom: 32,
        }}
      >
        {ECONOMICS.map((kpi) => (
          <div
            key={kpi.label}
            style={s({
              background: "#141419",
              border: "1px solid #1a1a2e",
              borderRadius: 12,
              padding: 24,
              textAlign: "center",
            })}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: "#F39C12",
                marginBottom: 4,
              }}
            >
              {kpi.value}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#e0e0e0",
                marginBottom: 4,
              }}
            >
              {kpi.label}
            </div>
            <div style={{ fontSize: 11, color: "#888" }}>{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* Revenue projections */}
      <div
        style={{
          background: "#141419",
          border: "1px solid #1a1a2e",
          borderRadius: 12,
          padding: 24,
          marginBottom: 32,
        }}
      >
        <h3
          style={{
            margin: "0 0 20px",
            fontSize: 16,
            fontWeight: 700,
            color: "#e0e0e0",
          }}
        >
          Proyeccion de ingresos mensuales
        </h3>
        <table
          style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #333" }}>
              <th style={thStyle}>Plan</th>
              <th style={thStyle}>Usuarios estimados</th>
              <th style={thStyle}>Revenue mensual</th>
            </tr>
          </thead>
          <tbody>
            {REVENUE_PROJECTIONS.map((r) => (
              <tr key={r.plan} style={{ borderBottom: "1px solid #1a1a2e" }}>
                <td style={{ ...tdStyle, fontWeight: 600 }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: r.color,
                      marginRight: 8,
                    }}
                  />
                  {r.plan}
                </td>
                <td style={tdStyle}>{r.users.toLocaleString("es-CL")}</td>
                <td
                  style={{
                    ...tdStyle,
                    color: "#4CAF50",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  {r.revenue}
                </td>
              </tr>
            ))}
            <tr style={{ borderTop: "2px solid #F39C12" }}>
              <td
                style={{
                  ...tdStyle,
                  fontWeight: 800,
                  color: "#F39C12",
                }}
              >
                Total
              </td>
              <td style={tdStyle}>5.750</td>
              <td
                style={{
                  ...tdStyle,
                  color: "#F39C12",
                  fontWeight: 800,
                  fontFamily: "monospace",
                  fontSize: 15,
                }}
              >
                $22.492.500
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Break-even */}
      <div
        style={{
          background: "#141419",
          border: "1px solid #1a1a2e",
          borderRadius: 12,
          padding: 24,
        }}
      >
        <h3
          style={{
            margin: "0 0 12px",
            fontSize: 16,
            fontWeight: 700,
            color: "#e0e0e0",
          }}
        >
          Break-even Analysis
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
          }}
        >
          <div
            style={{
              padding: 16,
              background: "#0a0a0f",
              borderRadius: 8,
              border: "1px solid #222",
            }}
          >
            <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>
              Costos fijos mensuales
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#e0e0e0",
                fontFamily: "monospace",
              }}
            >
              $3.500.000
            </div>
          </div>
          <div
            style={{
              padding: 16,
              background: "#0a0a0f",
              borderRadius: 8,
              border: "1px solid #222",
            }}
          >
            <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>
              Break-even (suscriptores Renddi)
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#F39C12",
                fontFamily: "monospace",
              }}
            >
              234 usuarios
            </div>
          </div>
          <div
            style={{
              padding: 16,
              background: "#0a0a0f",
              borderRadius: 8,
              border: "1px solid #222",
            }}
          >
            <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>
              Margen bruto estimado
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#4CAF50",
                fontFamily: "monospace",
              }}
            >
              85%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── 4. Percepcion de Valor ─── */
function PercepcionSection() {
  return (
    <>
      <SectionTitle
        title="Percepcion de Valor"
        subtitle="Estrategias de anclaje y framing para maximizar conversion"
      />

      {/* Anchoring & Framing cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #1a1500 0%, #141419 100%)",
            border: "1px solid #F39C12",
            borderRadius: 12,
            padding: 28,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "#F39C12",
              fontWeight: 700,
              marginBottom: 8,
              textTransform: "uppercase" as const,
              letterSpacing: 1,
            }}
          >
            Anchoring
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#e0e0e0",
              marginBottom: 8,
            }}
          >
            $14.990 = 87% menos que un preu
          </div>
          <p style={{ fontSize: 13, color: "#aaa", margin: 0, lineHeight: 1.6 }}>
            Comparado con CPECH ($120.000/mes) o PDV ($95.000/mes), Renddi
            ofrece preparacion adaptativa con IA a una fraccion del costo. El
            anclaje contra preuniversitarios tradicionales hace que el precio
            se perciba como una ganga.
          </p>
        </div>

        <div
          style={{
            background: "#141419",
            border: "1px solid #3498DB",
            borderRadius: 12,
            padding: 28,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "#3498DB",
              fontWeight: 700,
              marginBottom: 8,
              textTransform: "uppercase" as const,
              letterSpacing: 1,
            }}
          >
            Framing
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#e0e0e0",
              marginBottom: 8,
            }}
          >
            Menos de $500/dia por tu futuro
          </div>
          <p style={{ fontSize: 13, color: "#aaa", margin: 0, lineHeight: 1.6 }}>
            Reformulado como gasto diario, $14.990/mes equivale a menos de
            $500/dia. Menos que un cafe. Este framing elimina la friccion de
            precio y apela a la inversion en uno mismo.
          </p>
        </div>
      </div>

      {/* WTP chart */}
      <div
        style={{
          background: "#141419",
          border: "1px solid #1a1a2e",
          borderRadius: 12,
          padding: 28,
        }}
      >
        <h3
          style={{
            margin: "0 0 24px",
            fontSize: 16,
            fontWeight: 700,
            color: "#e0e0e0",
          }}
        >
          Willingness to Pay por segmento
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {WTP_DATA.map((item) => (
            <div key={item.segment}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 13, color: "#e0e0e0" }}>
                  {item.segment}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: item.color,
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  ${item.wtp.toLocaleString("es-CL")}/mes
                </span>
              </div>
              <div
                style={{
                  height: 12,
                  background: "#0a0a0f",
                  borderRadius: 6,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${(item.wtp / item.max) * 100}%`,
                    background: item.color,
                    borderRadius: 6,
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 20,
            padding: 16,
            background: "#0a0a0f",
            borderRadius: 8,
            border: "1px solid #222",
          }}
        >
          <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>
            Precio optimo sugerido
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#F39C12" }}>
            $14.990/mes — captura el 80% del mercado objetivo
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── 5. Estrategia ─── */
function EstrategiaSection() {
  return (
    <>
      <SectionTitle
        title="Estrategia de Lanzamiento"
        subtitle="Plan de go-to-market y tacticas de crecimiento"
      />

      {/* Strategy cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          marginBottom: 32,
        }}
      >
        {STRATEGIES.map((st) => (
          <div
            key={st.title}
            style={s({
              background: "#141419",
              border: "1px solid #1a1a2e",
              borderRadius: 12,
              padding: 24,
            })}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: "#F39C12",
                marginBottom: 12,
                opacity: 0.3,
              }}
            >
              {st.icon}
            </div>
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: 16,
                fontWeight: 700,
                color: "#e0e0e0",
              }}
            >
              {st.title}
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "#aaa",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              {st.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div
        style={{
          background: "#141419",
          border: "1px solid #1a1a2e",
          borderRadius: 12,
          padding: 28,
        }}
      >
        <h3
          style={{
            margin: "0 0 24px",
            fontSize: 16,
            fontWeight: 700,
            color: "#e0e0e0",
          }}
        >
          Calendario de lanzamiento
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {TIMELINE.map((t, i) => (
            <div
              key={t.month}
              style={{
                display: "flex",
                gap: 20,
                padding: "20px 0",
                borderBottom:
                  i < TIMELINE.length - 1
                    ? "1px solid #1a1a2e"
                    : "none",
              }}
            >
              <div
                style={{
                  minWidth: 90,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#F39C12",
                }}
              >
                {t.month}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#e0e0e0",
                    marginBottom: 4,
                  }}
                >
                  {t.phase}
                </div>
                <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>
                  {t.actions}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Shared styles ─── */
const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "12px 14px",
  color: "#888",
  fontWeight: 600,
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: 0.5,
};

const tdStyle: React.CSSProperties = {
  padding: "12px 14px",
  color: "#e0e0e0",
};

function boolCell(val: boolean) {
  return (
    <span
      style={{
        color: val ? "#4CAF50" : "#555",
        fontWeight: val ? 700 : 400,
        fontSize: 14,
      }}
    >
      {val ? "\u2713" : "\u2717"}
    </span>
  );
}
