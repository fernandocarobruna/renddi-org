"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import InformeTab from "./InformeTab";

type Tab = "pricing" | "competencia" | "economics" | "percepcion" | "estrategia" | "producto" | "investigacion" | "informe";

const TABS: { id: Tab; label: string }[] = [
  { id: "pricing", label: "Pricing" },
  { id: "competencia", label: "Competencia" },
  { id: "economics", label: "Unit Economics" },
  { id: "percepcion", label: "Percepcion de Valor" },
  { id: "estrategia", label: "Estrategia" },
  { id: "producto", label: "Producto" },
  { id: "investigacion", label: "Investigacion" },
  { id: "informe", label: "Informe Producto" },
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
        {activeTab === "producto" && <ProductoSection />}
        {activeTab === "investigacion" && <InvestigacionSection />}
        {activeTab === "informe" && <InformeTab />}
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

/* ─── 6. Producto ─── */
function ProductoSection() {
  return (
    <>
      <SectionTitle
        title="Producto"
        subtitle="Que es Renddi, diferenciacion, buyer personas, features y roadmap"
      />

      {/* Que es Renddi */}
      <div
        style={{
          background: "#141419",
          border: "1px solid #1a1a2e",
          borderRadius: 12,
          padding: 28,
          marginBottom: 24,
        }}
      >
        <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 700, color: "#F39C12" }}>
          Que es Renddi
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
          {[
            "Coach de rendimiento PAES con IA que opera sobre un modelo causal de 21 variables en 5 dimensiones",
            "No ensena contenido — entrena rendimiento. Optimiza contra el potencial individual de cada estudiante",
            "9 agentes especializados que cubren lo academico, emocional, conductual, social y vocacional",
          ].map((item, i) => (
            <li key={i} style={{ fontSize: 13, color: "#aaa", padding: "8px 0", borderBottom: "1px solid #1a1a2e", display: "flex", alignItems: "flex-start", gap: 8 }}>
              <span style={{ color: "#F39C12", fontSize: 12, marginTop: 2 }}>&#9679;</span>
              {item}
            </li>
          ))}
        </ul>
        <div style={{ padding: 16, background: "rgba(243,156,18,0.06)", borderRadius: 8, border: "1px solid rgba(243,156,18,0.2)" }}>
          <div style={{ fontSize: 11, color: "#F39C12", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 6 }}>
            Insight central
          </div>
          <p style={{ fontSize: 13, color: "#e0e0e0", margin: 0, lineHeight: 1.7 }}>
            stress_level (0.255) tiene mas del doble de efecto en mastery que motivation (0.105). Las 3 variables con mayor impacto no son academicas. Esto invierte la logica de toda la industria de preus.
          </p>
        </div>
      </div>

      {/* Diferenciadores */}
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e0e0e0", marginBottom: 16 }}>
        7 Diferenciadores Unicos
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 32 }}>
        {[
          { title: "Grafo causal 21 variables", desc: "Red causal dirigida aciclica con 30 aristas ponderadas desde meta-analisis. 19 con soporte Nivel A.", color: "#F39C12" },
          { title: "Stealth assessment", desc: "Mide 4 variables sin preguntar: attention_span, confidence, frustration_tolerance, metacognition.", color: "#9B59B6" },
          { title: "12 arquetipos diferenciados", desc: "Misma app, 12 experiencias. Cubren 90-93% de la poblacion PAES. Con capas: 97-99%.", color: "#3498DB" },
          { title: "Motor adaptativo IRT 2PL + BKT", desc: "Seleccion por maxima informacion de Fisher. Converge a theta con 5-8 items. delta_theta +0.003/sesion.", color: "#2ECC71" },
          { title: "Coaching emocional integrado", desc: "Detecta ansiedad, estres, fatiga. Protocolo de crisis de 4 niveles. KAZE + stealth assessment.", color: "#E74C3C" },
          { title: "Precio 94% menor", desc: "$6.990/mes vs $80K-120K/mes de preus. Accesible 24/7 desde el celular. IA personalizada 1:1.", color: "#F39C12" },
          { title: "Validacion por simulacion", desc: "5,000 trayectorias Monte Carlo. 10 arquetipos, 5 escenarios, 180 dias. Evidencia cuantitativa, no claims.", color: "#1ABC9C" },
        ].map((d) => (
          <div key={d.title} style={s({ background: "#141419", border: `1px solid ${d.color}33`, borderRadius: 12, padding: 24 })}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: d.color, marginBottom: 12 }} />
            <h4 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: "#e0e0e0" }}>{d.title}</h4>
            <p style={{ fontSize: 12, color: "#aaa", margin: 0, lineHeight: 1.6 }}>{d.desc}</p>
          </div>
        ))}
      </div>

      {/* Buyer Personas */}
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e0e0e0", marginBottom: 16 }}>
        Buyer Personas Principales
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 12 }}>
        {[
          { name: "Sofia", tag: "Estudiante aplicada", desc: "17, 4to medio, preu CPECH. Ensayo ~620, meta 750+ Medicina UC. Estudia mucho pero no sube.", dolor: "Estudio mucho pero mis ensayos salen igual", canal: "IG Story", ltv: "PAES Pack $29.990", color: "#F39C12" },
          { name: "Constanza", tag: "Retaker ansiosa", desc: "19, egresada. PAES 720, necesita 750 para Medicina UV. Se bloquea el dia del examen.", dolor: "Se la materia pero me bloqueo bajo presion", canal: "Google SEO", ltv: "Premium x5 meses", color: "#E74C3C" },
          { name: "Martin", tag: "Explorador sin preu", desc: "18, egresado, municipal Puente Alto. Sin preu, estudia con PDFs y YouTube. ~520.", dolor: "Los del preu tienen ventaja", canal: "TikTok", ltv: "Free a Premium sem 3", color: "#3498DB" },
          { name: "Fernanda", tag: "Madre que paga preu", desc: "45, madre de Sofia. Paga CPECH $95K/mes sin visibilidad del progreso real.", dolor: "Pago el preu pero no se si funciona", canal: "WhatsApp WOM", ltv: "PAES Pack $29.990", color: "#9B59B6" },
        ].map((bp) => (
          <div key={bp.name} style={s({ background: "#141419", border: "1px solid #1a1a2e", borderRadius: 12, padding: 24 })}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${bp.color}22`, border: `1px solid ${bp.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: bp.color }}>
                {bp.name[0]}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#e0e0e0" }}>{bp.name}</div>
                <div style={{ fontSize: 11, color: bp.color }}>{bp.tag}</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "#aaa", margin: "0 0 10px", lineHeight: 1.5 }}>{bp.desc}</p>
            <div style={{ fontSize: 12, color: "#888", fontStyle: "italic", marginBottom: 10, padding: "8px 10px", background: "#0a0a0f", borderRadius: 6 }}>
              &ldquo;{bp.dolor}&rdquo;
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 20, background: "#1a1a2e", color: "#aaa" }}>{bp.canal}</span>
              <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 20, background: "#1a1a2e", color: "#4CAF50" }}>{bp.ltv}</span>
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 11, color: "#666", marginBottom: 32 }}>
        + 8 buyer personas adicionales (Tomas gamer, Valentina elite, Isidora ansiosa, Diego doble jornada, Carlos padre de 2, Patricia orientadora, y 2 subtipos de padres). Ver 12 arquetipos en tab Investigacion.
      </p>

      {/* Features por fase */}
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e0e0e0", marginBottom: 16 }}>
        Features por Fase
      </h3>
      <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #1a1a2e", marginBottom: 32 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 700 }}>
          <thead>
            <tr style={{ background: "#141419" }}>
              <th style={thStyle}>Fase</th>
              <th style={thStyle}>Features</th>
              <th style={thStyle}>Agentes</th>
            </tr>
          </thead>
          <tbody>
            {[
              { fase: "MVP", tag: "1 abril", features: "CAT diagnostico IRT 2PL, practica adaptativa, dashboard radar, coaching IA texto, streaks guilt-free, simulacro basico 30 items, paywall RevenueCat, push notifications", agentes: "SENPAI, KAZE basico, KAIZEN basico", color: "#F39C12" },
              { fase: "V1", tag: "abr-jun", features: "PostHog/Sentry, social login, KAZE completo, PAES Pack pricing, COMPASS basico, reclasificacion 12 arquetipos, diferenciacion 5 tipos error, WhatsApp share", agentes: "9 agentes completos", color: "#3498DB" },
              { fase: "V2", tag: "jul-nov", features: "NAKAMA grupos estudio, dashboard padres, simulacros completos 65 items, ejercicios ansiedad guiados, COMPASS calculadora carrera, modo offline, generacion IA, protocolo pre-PAES", agentes: "Todos + KOKORO", color: "#9B59B6" },
            ].map((row) => (
              <tr key={row.fase} style={{ borderBottom: "1px solid #1a1a2e" }}>
                <td style={{ ...tdStyle, fontWeight: 700 }}>
                  <span style={{ color: row.color }}>{row.fase}</span>
                  <div style={{ fontSize: 10, color: "#666", marginTop: 2 }}>{row.tag}</div>
                </td>
                <td style={{ ...tdStyle, fontSize: 12, lineHeight: 1.6 }}>{row.features}</td>
                <td style={{ ...tdStyle, fontSize: 12, color: "#888" }}>{row.agentes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sistema FAD */}
      <div style={{ background: "#141419", border: "1px solid #1a1a2e", borderRadius: 12, padding: 28, marginBottom: 32 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#F39C12" }}>
          Sistema FAD (Fatigue-Adjusted Difficulty)
        </h3>
        <p style={{ fontSize: 13, color: "#aaa", margin: "0 0 16px", lineHeight: 1.7 }}>
          Algoritmo de priorizacion diaria que decide que intervenir y en que orden para cada estudiante.
        </p>
        <div style={{ padding: 16, background: "#0a0a0f", borderRadius: 8, border: "1px solid #222", marginBottom: 16, fontFamily: "monospace" }}>
          <div style={{ fontSize: 11, color: "#888", marginBottom: 8 }}>Formula de priorizacion</div>
          <div style={{ fontSize: 14, color: "#F39C12", fontWeight: 600 }}>
            prioridad_i = efecto_Wright_i x gap_i x intervenibilidad_i x urgencia_i x confianza_i
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {[
            { factor: "efecto_Wright", desc: "Impacto total de la variable en mastery" },
            { factor: "gap", desc: "Diferencia entre valor actual y optimo" },
            { factor: "intervenibilidad", desc: "Que tan modificable es por la app [0,1]" },
            { factor: "urgencia", desc: "Deterioro reciente o deadline cercano" },
            { factor: "confianza", desc: "1 - sigma. Baja incertidumbre = mayor prioridad" },
          ].map((f) => (
            <div key={f.factor} style={{ padding: 12, background: "#0a0a0f", borderRadius: 8, border: "1px solid #222" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#e0e0e0", marginBottom: 4, fontFamily: "monospace" }}>{f.factor}</div>
              <div style={{ fontSize: 11, color: "#888" }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap timeline */}
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e0e0e0", marginBottom: 16 }}>
        Roadmap
      </h3>
      <div style={{ background: "#141419", border: "1px solid #1a1a2e", borderRadius: 12, padding: 28 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { phase: "MVP", date: "1 abril 2026", desc: "CAT diagnostico, practica adaptativa, coaching texto, streaks, simulacro basico. 3 agentes.", color: "#F39C12", target: "Launch + primeros 200 MAU" },
            { phase: "V1", date: "Abril - Junio 2026", desc: "9 agentes completos, 12 arquetipos, COMPASS, WhatsApp share, analytics. Iteracion rapida.", color: "#3498DB", target: "1,500 MAU / 250 subs / D7 >40%" },
            { phase: "V2", date: "Julio - Nov 2026", desc: "PAES season. NAKAMA social, simulacros completos, dashboard padres, modo offline.", color: "#9B59B6", target: "15,000 MAU / 3,000 subs / $21M CLP" },
          ].map((t, i) => (
            <div key={t.phase} style={{ display: "flex", gap: 20, padding: "20px 0", borderBottom: i < 2 ? "1px solid #1a1a2e" : "none" }}>
              <div style={{ minWidth: 80, textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: t.color }}>{t.phase}</div>
                <div style={{ fontSize: 10, color: "#666", marginTop: 4 }}>{t.date}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: "#e0e0e0", lineHeight: 1.6, marginBottom: 8 }}>{t.desc}</div>
                <span style={{ fontSize: 10, padding: "3px 10px", borderRadius: 20, background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}33` }}>
                  {t.target}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── 7. Investigacion ─── */
function InvestigacionSection() {
  return (
    <>
      <SectionTitle
        title="Investigacion"
        subtitle="Grafo causal, arquetipos, simulaciones, tesis validadas y comisiones revisoras"
      />

      {/* Grafo Causal */}
      <div style={{ background: "#141419", border: "1px solid #1a1a2e", borderRadius: 12, padding: 28, marginBottom: 24 }}>
        <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 700, color: "#F39C12" }}>
          Grafo Causal
        </h3>
        <p style={{ fontSize: 13, color: "#aaa", margin: "0 0 16px", lineHeight: 1.7 }}>
          21 variables, 5 dimensiones, 30 aristas ponderadas. Red causal dirigida aciclica con pesos calibrados desde meta-analisis. 19 aristas Nivel A (soporte meta-analitico).
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 20 }}>
          {[
            { label: "Variables", value: "21", color: "#F39C12" },
            { label: "Dimensiones", value: "5", color: "#3498DB" },
            { label: "Aristas", value: "30", color: "#9B59B6" },
            { label: "Nivel A", value: "19", color: "#2ECC71" },
          ].map((stat) => (
            <div key={stat.label} style={{ padding: 16, background: "#0a0a0f", borderRadius: 8, border: "1px solid #222", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: "#888" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <h4 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700, color: "#e0e0e0" }}>
          5 Leverage Points (mayor efecto en mastery)
        </h4>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 500 }}>
            <thead>
              <tr style={{ background: "#0a0a0f" }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Variable</th>
                <th style={thStyle}>Efecto total</th>
                <th style={thStyle}>Tipo intervencion</th>
              </tr>
            </thead>
            <tbody>
              {[
                { rank: 1, variable: "stress_level", efecto: "0.255", tipo: "Emocional/conductual" },
                { rank: 2, variable: "sleep_quality", efecto: "0.199", tipo: "Conductual" },
                { rank: 3, variable: "physical_activity", efecto: "0.122", tipo: "Conductual" },
                { rank: 4, variable: "motivation", efecto: "0.105", tipo: "Vocacional/emocional" },
                { rank: 5, variable: "emotional_state", efecto: "0.032", tipo: "Emocional/social" },
              ].map((lp) => (
                <tr key={lp.rank} style={{ borderBottom: "1px solid #1a1a2e" }}>
                  <td style={{ ...tdStyle, color: "#F39C12", fontWeight: 700, textAlign: "center" }}>{lp.rank}</td>
                  <td style={{ ...tdStyle, fontFamily: "monospace", color: "#e0e0e0" }}>{lp.variable}</td>
                  <td style={{ ...tdStyle, fontFamily: "monospace", color: "#F39C12", fontWeight: 600 }}>{lp.efecto}</td>
                  <td style={{ ...tdStyle, color: "#888" }}>{lp.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 12, padding: 12, background: "rgba(243,156,18,0.06)", borderRadius: 8, border: "1px solid rgba(243,156,18,0.15)" }}>
          <p style={{ fontSize: 12, color: "#aaa", margin: 0, lineHeight: 1.6 }}>
            self_efficacy (0.507) tiene el mayor efecto combinado: alimenta mastery por 4 caminos aciclicos. Las 3 variables con mayor impacto directo no son academicas.
          </p>
        </div>
      </div>

      {/* 12 Arquetipos */}
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e0e0e0", marginBottom: 16 }}>
        12 Arquetipos de Estudiante
      </h3>
      <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #1a1a2e", marginBottom: 32 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 900 }}>
          <thead>
            <tr style={{ background: "#141419" }}>
              <th style={thStyle}>#</th>
              <th style={thStyle}>Nombre</th>
              <th style={thStyle}>Perfil</th>
              <th style={thStyle}>PAES est.</th>
              <th style={thStyle}>Adherencia</th>
              <th style={thStyle}>Duracion opt.</th>
              <th style={thStyle}>Delta C</th>
              <th style={thStyle}>Riesgo</th>
            </tr>
          </thead>
          <tbody>
            {[
              { n: 1, nombre: "Valentina", perfil: "Alto Rendimiento", paes: "835", adh: "0.85", dur: "15-25 min", delta: "-0.6", riesgo: "Bajo" },
              { n: 2, nombre: "Matias", perfil: "Gestion Emocional", paes: "680", adh: "0.60", dur: "10-15 min", delta: "+79.0", riesgo: "Medio" },
              { n: 3, nombre: "Camila", perfil: "Primera Generacion", paes: "590", adh: "0.55", dur: "10-15 min", delta: "+65.9", riesgo: "Medio" },
              { n: 4, nombre: "Benjamin", perfil: "Engagement Digital", paes: "500", adh: "0.35", dur: "3-5 min", delta: "+53.9", riesgo: "Alto" },
              { n: 5, nombre: "Isidora", perfil: "Prevencion Sobrecarga", paes: "725", adh: "0.70", dur: "10-15 min", delta: "-9.1", riesgo: "Alto" },
              { n: 6, nombre: "Diego", perfil: "Integracion Deportiva", paes: "455", adh: "0.45", dur: "5-8 min", delta: "+141.8", riesgo: "Medio" },
              { n: 7, nombre: "Francisca", perfil: "Funcion Ejecutiva", paes: "410", adh: "0.35", dur: "3-5 min", delta: "+117.2", riesgo: "Alto" },
              { n: 8, nombre: "Tomas", perfil: "Aprendizaje Social", paes: "545", adh: "0.50", dur: "8-12 min", delta: "+62.5", riesgo: "Bajo" },
              { n: 9, nombre: "Martina", perfil: "Recuperacion Academica", paes: "635", adh: "0.45", dur: "max 10 min", delta: "+36.1", riesgo: "Alto" },
              { n: 10, nombre: "Joaquin", perfil: "Activacion Tardia", paes: "320", adh: "0.30", dur: "3-5 min", delta: "+111.6", riesgo: "Alto" },
              { n: 11, nombre: "Andres", perfil: "Doble Jornada", paes: "420", adh: "0.40", dur: "3-5 min", delta: "N/A", riesgo: "Medio" },
              { n: 12, nombre: "Javiera", perfil: "Contexto Rural", paes: "380", adh: "0.42", dur: "10-15 min", delta: "N/A", riesgo: "Medio" },
            ].map((a) => (
              <tr key={a.n} style={{ borderBottom: "1px solid #1a1a2e", background: a.n <= 10 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                <td style={{ ...tdStyle, color: "#666", textAlign: "center" }}>{a.n}</td>
                <td style={{ ...tdStyle, fontWeight: 600, color: "#e0e0e0" }}>{a.nombre}</td>
                <td style={{ ...tdStyle, color: "#888" }}>{a.perfil}</td>
                <td style={{ ...tdStyle, fontFamily: "monospace", textAlign: "center" }}>{a.paes}</td>
                <td style={{ ...tdStyle, fontFamily: "monospace", textAlign: "center" }}>{a.adh}</td>
                <td style={{ ...tdStyle, textAlign: "center", color: "#888" }}>{a.dur}</td>
                <td style={{ ...tdStyle, fontFamily: "monospace", textAlign: "center", color: a.delta.startsWith("+") ? "#4CAF50" : a.delta === "N/A" ? "#666" : "#E74C3C", fontWeight: 600 }}>{a.delta}</td>
                <td style={{ ...tdStyle, textAlign: "center" }}>
                  <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: a.riesgo === "Alto" ? "#3a151522" : a.riesgo === "Medio" ? "#3a2a1522" : "#1a2a1522", color: a.riesgo === "Alto" ? "#E74C3C" : a.riesgo === "Medio" ? "#F39C12" : "#4CAF50", border: `1px solid ${a.riesgo === "Alto" ? "#E74C3C33" : a.riesgo === "Medio" ? "#F39C1233" : "#4CAF5033"}` }}>
                    {a.riesgo}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Simulaciones */}
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e0e0e0", marginBottom: 16 }}>
        Simulaciones Monte Carlo
      </h3>
      <div style={{ background: "#141419", border: "1px solid #1a1a2e", borderRadius: 12, padding: 28, marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: "#aaa", margin: "0 0 16px", lineHeight: 1.7 }}>
          1,000 estudiantes, 10 arquetipos, 180 dias, 5 escenarios. Curva honeymoon realista + regresion a la media + eventos de crisis calibrados.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 500 }}>
            <thead>
              <tr style={{ background: "#0a0a0f" }}>
                <th style={thStyle}>Escenario</th>
                <th style={thStyle}>Delta PAES medio</th>
                <th style={thStyle}>IC 95%</th>
              </tr>
            </thead>
            <tbody>
              {[
                { esc: "A — Sin Renddi", delta: "+6.3 pts", ic: "[-5.1, +17.6]", color: "#666" },
                { esc: "B — Renddi basico (solo academico)", delta: "+69.6 pts", ic: "[+59.1, +80.1]", color: "#3498DB" },
                { esc: "C — Renddi completo (todos agentes)", delta: "+65.8 pts", ic: "[+55.1, +76.5]", color: "#2ECC71" },
                { esc: "D — Renddi + alta adherencia", delta: "+84.5 pts", ic: "[+74.0, +95.1]", color: "#F39C12" },
                { esc: "E — Renddi + crisis", delta: "+60.2 pts", ic: "[+49.5, +70.9]", color: "#E74C3C" },
              ].map((row) => (
                <tr key={row.esc} style={{ borderBottom: "1px solid #1a1a2e" }}>
                  <td style={{ ...tdStyle, color: row.color, fontWeight: 600 }}>{row.esc}</td>
                  <td style={{ ...tdStyle, fontFamily: "monospace", fontWeight: 700, color: "#e0e0e0" }}>{row.delta}</td>
                  <td style={{ ...tdStyle, fontFamily: "monospace", color: "#888" }}>{row.ic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 16, padding: 12, background: "rgba(243,156,18,0.06)", borderRadius: 8, border: "1px solid rgba(243,156,18,0.15)" }}>
          <p style={{ fontSize: 12, color: "#aaa", margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: "#F39C12" }}>Hallazgo clave:</strong> La adherencia es el multiplicador, no el contenido. Perfiles PAES &lt;500 mejoran +106.1 pts promedio vs +38.8 pts los perfiles &gt;=500.
          </p>
        </div>
      </div>

      {/* Tesis Validadas */}
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e0e0e0", marginBottom: 16 }}>
        Tesis Validadas
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
        {[
          { name: "TAKUMI", num: "Tesis 95+", desc: "Acciones e intervenciones de Renddi. Define las acciones concretas por variable del grafo, presupuesto de tiempo por arquetipo, y mecanismos de cambio.", color: "#F39C12" },
          { name: "SHOKUNIN", num: "Tesis 96", desc: "Perfilamiento y arquetipos. Define los 12 arquetipos con vectores de 21 variables, journeys diferenciados, y sistema de reclasificacion quincenal.", color: "#9B59B6" },
          { name: "KOTODAMA", num: "Tesis 97", desc: "Comunicacion y messaging. Define personas comunicacionales (Catalina, Tomas, Martin), tono por arquetipo, y copy por pantalla.", color: "#3498DB" },
        ].map((t) => (
          <div key={t.name} style={s({ background: "#141419", border: `1px solid ${t.color}33`, borderRadius: 12, padding: 24, position: "relative" })}>
            <div style={{ position: "absolute", top: -10, right: 16, background: t.color, color: "#0a0a0f", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>
              {t.num}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: t.color, marginBottom: 8 }}>{t.name}</div>
            <p style={{ fontSize: 12, color: "#aaa", margin: 0, lineHeight: 1.6 }}>{t.desc}</p>
          </div>
        ))}
      </div>

      {/* Sistema FAD detalle */}
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e0e0e0", marginBottom: 16 }}>
        Sistema FAD — Detalle de 5 Factores
      </h3>
      <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #1a1a2e", marginBottom: 32 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 700 }}>
          <thead>
            <tr style={{ background: "#141419" }}>
              <th style={thStyle}>Factor</th>
              <th style={thStyle}>Definicion</th>
              <th style={thStyle}>Fuente</th>
              <th style={thStyle}>Rango</th>
            </tr>
          </thead>
          <tbody>
            {[
              { factor: "efecto_Wright", def: "Impacto total en mastery via descomposicion de rutas de Wright", fuente: "Grafo causal 30 aristas", rango: "[0, 0.507]" },
              { factor: "gap", def: "1.0 - valor_actual (positivas) o valor_actual (negativas)", fuente: "Perfil del estudiante (21 vars)", rango: "[0, 1]" },
              { factor: "intervenibilidad", def: "Que tan modificable es la variable por acciones de la app", fuente: "TAKUMI (calibrado)", rango: "[0.20, 0.90]" },
              { factor: "urgencia", def: "Factor temporal: deterioro reciente o deadline cercano", fuente: "Thresholds por variable", rango: "[1.0, 3.0]" },
              { factor: "confianza", def: "1 - sigma_variable. Alta incertidumbre = menor prioridad", fuente: "Observaciones acumuladas", rango: "[0, 1]" },
            ].map((f) => (
              <tr key={f.factor} style={{ borderBottom: "1px solid #1a1a2e" }}>
                <td style={{ ...tdStyle, fontFamily: "monospace", fontWeight: 600, color: "#F39C12" }}>{f.factor}</td>
                <td style={{ ...tdStyle, color: "#aaa", fontSize: 12 }}>{f.def}</td>
                <td style={{ ...tdStyle, color: "#888", fontSize: 12 }}>{f.fuente}</td>
                <td style={{ ...tdStyle, fontFamily: "monospace", color: "#e0e0e0", textAlign: "center" }}>{f.rango}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Comisiones Revisoras */}
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e0e0e0", marginBottom: 16 }}>
        Comisiones Revisoras
      </h3>
      <div style={{ background: "#141419", border: "1px solid #1a1a2e", borderRadius: 12, padding: 28 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { id: "C1", title: "Revision Inicial", desc: "3 expertos mundiales (Learning Sciences, UX, Comunicacion). Validacion de grafo, arquetipos y propuesta de valor.", status: "Completada" },
            { id: "C2", title: "Ingeniero Matematico", desc: "Validacion estadistica del modelo causal. Verificacion de pesos, aristas, descomposicion de Wright y simulaciones Monte Carlo.", status: "Completada" },
            { id: "C3", title: "Auditoria Cruzada", desc: "Verificacion de consistencia entre 7 documentos: HTML grafo, Teoria Aplicada, TAKUMI, SHOKUNIN, KOTODAMA, Informe Consultor, Reporte Simulaciones.", status: "Completada" },
            { id: "C4", title: "Comision Internacional", desc: "Panel completo: 3 expertos mundiales, ingeniero matematico, auditor bibliografico, auditor de coherencia, consultor McKinsey.", status: "Completada" },
          ].map((c, i) => (
            <div key={c.id} style={{ display: "flex", gap: 20, padding: "20px 0", borderBottom: i < 3 ? "1px solid #1a1a2e" : "none" }}>
              <div style={{ minWidth: 48, textAlign: "center" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F39C1215", border: "1px solid #F39C1233", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#F39C12", margin: "0 auto" }}>
                  {c.id}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#e0e0e0" }}>{c.title}</span>
                  <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: "#1a2a1522", color: "#4CAF50", border: "1px solid #4CAF5033" }}>
                    {c.status}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: "#888", margin: 0, lineHeight: 1.6 }}>{c.desc}</p>
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
