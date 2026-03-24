"use client";

import { useState } from "react";
import UserMenu from "./UserMenu";
import GrafoEmbed from "./GrafoEmbed";

const SECTIONS = [
  { key: "overview", label: "Vision General", icon: "overview" },
  { key: "grafo", label: "Grafo Interactivo", icon: "grafo" },
  { key: "simulador", label: "Simulador", icon: "simulador" },
  { key: "documentos", label: "Documentos", icon: "docs" },
  { key: "equipo", label: "Equipo & Agentes", icon: "equipo" },
];

const STATS = [
  { value: "9", label: "Agentes Especializados" },
  { value: "21", label: "Variables del Grafo" },
  { value: "30", label: "Aristas Causales" },
  { value: "12", label: "Arquetipos" },
  { value: "3", label: "Tesis Validadas" },
  { value: "1000+", label: "Simulaciones" },
];

const DOCUMENTS = [
  {
    name: "Tesis v8 - Contexto Definitivo",
    file: "tesis-v8-contexto-definitivo.md",
    type: "MD",
    size: "505 KB",
    desc: "Documento maestro del marco teorico y contexto completo",
  },
  {
    name: "Grafo Caracterizacion Multivariable v8",
    file: "Grafo-Caracterizacion-Multivariable-Estudiante-PAES-v8.0.pdf",
    type: "PDF",
    size: "548 KB",
    desc: "Especificacion formal del grafo causal de 21 variables",
  },
  {
    name: "Paper Validacion Matematica",
    file: "Paper-Validacion-Matematica-Grafo-SENSEI.pdf",
    type: "PDF",
    size: "141 KB",
    desc: "Validacion estadistica del modelo causal",
  },
  {
    name: "Evaluacion Fundamentacion RENDDI",
    file: "evaluacion-fundamentacion-renddi.pdf",
    type: "PDF",
    size: "17 KB",
    desc: "Evaluacion de la solidez teorica del framework",
  },
  {
    name: "RENDDI IP Keynote",
    file: "RENDDI_IP_Keynote.pdf",
    type: "PDF",
    size: "48 KB",
    desc: "Presentacion ejecutiva de propiedad intelectual",
  },
  {
    name: "Keynote v2 - Revision Doctoral",
    file: "KEYNOTE-V2-Revision-Doctoral.pdf",
    type: "PDF",
    size: "29 KB",
    desc: "Presentacion con revision a nivel doctoral",
  },
  {
    name: "SENSEI - Sistema de Agentes Consolidado",
    file: "sensei-sistema-agentes-consolidado.docx",
    type: "DOCX",
    size: "34 KB",
    desc: "Arquitectura completa del sistema multi-agente",
  },
  {
    name: "Shokunin - Perfilamiento Definitivo",
    file: "shokunin-perfilamiento-definitivo.md",
    type: "MD",
    size: "249 KB",
    desc: "Sistema de perfilamiento multidimensional de estudiantes",
  },
  {
    name: "Takumi - Acciones Definitivo",
    file: "takumi-acciones-definitivo.md",
    type: "MD",
    size: "206 KB",
    desc: "Motor de acciones pedagogicas personalizadas",
  },
  {
    name: "Kotodama - Comunicacion Definitivo",
    file: "kotodama-comunicacion-definitivo.md",
    type: "MD",
    size: "140 KB",
    desc: "Sistema de comunicacion adaptativa con el estudiante",
  },
  {
    name: "Proceso Mejora Tesis",
    file: "proceso-mejora-tesis.docx",
    type: "DOCX",
    size: "19 KB",
    desc: "Documentacion del proceso iterativo de mejora",
  },
];

const FASES = [
  { num: "1", fase: "Investigacion Profunda", desc: "Agentes investigadores levantan estado del arte del dominio." },
  { num: "2", fase: "Especializacion", desc: "Agentes especialistas proponen tecnicas de implementacion." },
  { num: "3", fase: "Revision Iterativa", desc: "Ciclo multi-panel de revision hasta solidez academica." },
  { num: "4", fase: "Comites de Producto", desc: "Lideres del grafo proponen flujos, planificacion y metricas." },
  { num: "5", fase: "Ejecucion Evolutiva", desc: "Funciones multidimensionales interactuan con el cliente." },
  { num: "6", fase: "Refinamiento Continuo", desc: "Ingeniero matematico y lideres reescriben paper de resultados." },
];

export default function Dashboard({ email }: { email: string }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <header className="header">
        <div>
          <h1>RENDDI</h1>
          <div className="sub">Meta-Modelo de Construccion de Productos</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="badge">v8.0</span>
          <span className="badge badge-outline">Sistema FAD</span>
          <UserMenu email={email} />
        </div>
      </header>

      <div className="container">
        <div className="tabs">
          {SECTIONS.map((s) => (
            <button
              key={s.key}
              className={`tab ${activeTab === s.key ? "active" : ""}`}
              onClick={() => setActiveTab(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* ─── VISION GENERAL ─── */}
        {activeTab === "overview" && (
          <div>
            <div className="grid g3" style={{ marginBottom: 20 }}>
              {STATS.map((stat) => (
                <div key={stat.label} className="card stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="card" style={{ marginBottom: 20 }}>
              <h3>Metodologia Renddi</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
                Sistema de construccion de productos basado en investigacion profunda, agentes especializados,
                grafos causales y revision iterativa multi-panel. El meta-modelo replica la metodologia
                validada en el proyecto Miyagi para cualquier dominio de producto.
              </p>
              <div className="note">
                Flujo: Investigacion &rarr; Agentes Especialistas &rarr; Revision Iterativa &rarr;
                Comites de Producto &rarr; Ejecucion Evolutiva &rarr; Refinamiento Continuo
              </div>
            </div>

            <div className="card">
              <h3>Fases del Meta-Modelo</h3>
              <div style={{ display: "grid", gap: 0, marginTop: 12 }}>
                {FASES.map((item) => (
                  <div key={item.num} className="fase-row">
                    <span className="fase-num">{item.num}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>
                        {item.fase}
                      </div>
                      <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── GRAFO INTERACTIVO ─── */}
        {activeTab === "grafo" && (
          <div>
            <div className="embed-header">
              <div>
                <h3 style={{ margin: 0, fontSize: 15 }}>Grafo Interactivo v8</h3>
                <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
                  12 tabs: Perfiles, Red Causal, Simulador, Predicciones, Seguimiento y mas
                </p>
              </div>
              <a
                href="/grafo-v8.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Abrir en nueva ventana
              </a>
            </div>
            <GrafoEmbed src="/api/private2026/grafo" title="Grafo Interactivo v8" />
          </div>
        )}

        {/* ─── SIMULADOR ─── */}
        {activeTab === "simulador" && (
          <div>
            <div className="embed-header">
              <div>
                <h3 style={{ margin: 0, fontSize: 15 }}>Simulador de Intervenciones</h3>
                <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
                  Simulaciones what-if sobre el grafo causal de 21 variables
                </p>
              </div>
              <a
                href="/simulador-v8.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Abrir en nueva ventana
              </a>
            </div>
            <GrafoEmbed src="/api/private2026/simulador" title="Simulador de Intervenciones" />
          </div>
        )}

        {/* ─── DOCUMENTOS ─── */}
        {activeTab === "documentos" && (
          <div>
            <div className="card" style={{ marginBottom: 16 }}>
              <h3>Fuente Definitiva</h3>
              <p style={{ fontSize: 13, color: "var(--muted)" }}>
                Documentos canonicos del proyecto RENDDI. Cada documento ha pasado por el proceso
                de revision iterativa multi-panel.
              </p>
            </div>
            <div className="doc-list">
              {DOCUMENTS.map((doc) => (
                <div key={doc.file} className="doc-row">
                  <div className="doc-info">
                    <span className={`doc-type doc-type-${doc.type.toLowerCase()}`}>{doc.type}</span>
                    <div>
                      <div className="doc-name">{doc.name}</div>
                      <div className="doc-desc">{doc.desc}</div>
                    </div>
                  </div>
                  <div className="doc-meta">
                    <span className="doc-size">{doc.size}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── EQUIPO & AGENTES ─── */}
        {activeTab === "equipo" && (
          <div>
            <div className="embed-header">
              <div>
                <h3 style={{ margin: 0, fontSize: 15 }}>Ecosistema de Agentes</h3>
                <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
                  9 agentes especializados: MIYAGI, KAZE, SENPAI, TAKUMI, SHOKUNIN, KOTODAMA y mas
                </p>
              </div>
              <a
                href="/ecosistema-animacion.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Abrir en nueva ventana
              </a>
            </div>
            <GrafoEmbed src="/api/private2026/agentes" title="Ecosistema de Agentes" />
          </div>
        )}
      </div>
    </>
  );
}
