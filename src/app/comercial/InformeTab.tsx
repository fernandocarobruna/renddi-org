"use client";

import { useState } from "react";

/* ─── Types ─── */
type InformeSection =
  | "que-es"
  | "diferenciacion"
  | "personas"
  | "pricing"
  | "web-landing"
  | "mensajes-app"
  | "metricas"
  | "roadmap"
  | "riesgos";

const INFORME_SECTIONS: { id: InformeSection; label: string; num: string }[] = [
  { id: "que-es", label: "Que es Renddi", num: "1" },
  { id: "diferenciacion", label: "Diferenciacion", num: "2" },
  { id: "personas", label: "Buyer Personas", num: "3" },
  { id: "pricing", label: "Pricing", num: "4" },
  { id: "web-landing", label: "Web y Landing", num: "5" },
  { id: "mensajes-app", label: "Mensajes App", num: "6" },
  { id: "metricas", label: "Metricas", num: "7" },
  { id: "roadmap", label: "Roadmap", num: "8" },
  { id: "riesgos", label: "Riesgos", num: "9" },
];

/* ─── Style helpers ─── */
const card: React.CSSProperties = {
  background: "#141419",
  border: "1px solid #1a1a2e",
  borderRadius: 12,
  padding: 24,
  marginBottom: 20,
};

const heading2: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 800,
  color: "#e0e0e0",
  margin: "0 0 16px",
  letterSpacing: "-0.3px",
};

const heading3: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  color: "#F39C12",
  margin: "24px 0 12px",
};

const heading4: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#e0e0e0",
  margin: "16px 0 8px",
};

const para: React.CSSProperties = {
  fontSize: 13,
  color: "#aaa",
  lineHeight: 1.8,
  margin: "0 0 12px",
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 12px",
  color: "#888",
  fontWeight: 600,
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: 0.5,
  borderBottom: "1px solid #1a1a2e",
};

const tdStyle: React.CSSProperties = {
  padding: "10px 12px",
  color: "#e0e0e0",
  fontSize: 12,
  borderBottom: "1px solid #0f0f18",
  lineHeight: 1.6,
};

const badge = (
  text: string,
  color: string = "#F39C12"
): React.ReactNode => (
  <span
    style={{
      display: "inline-block",
      fontSize: 10,
      fontWeight: 700,
      padding: "2px 8px",
      borderRadius: 20,
      background: `${color}15`,
      color,
      border: `1px solid ${color}33`,
      marginRight: 4,
    }}
  >
    {text}
  </span>
);

function DataTable({
  headers,
  rows,
  highlightFirst = false,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  highlightFirst?: boolean;
}) {
  return (
    <div style={{ overflowX: "auto", borderRadius: 10, border: "1px solid #1a1a2e", marginBottom: 16 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 500 }}>
        <thead>
          <tr style={{ background: "#0f0f18" }}>
            {headers.map((h, i) => (
              <th key={i} style={thStyle}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: highlightFirst && ri === 0 ? "rgba(243,156,18,0.06)" : "transparent" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ ...tdStyle, fontWeight: highlightFirst && ri === 0 ? 600 : 400 }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatCard({ label, value, sub, color = "#F39C12" }: { label: string; value: string; sub: string; color?: string }) {
  return (
    <div style={{ background: "#0f0f18", border: "1px solid #1a1a2e", borderRadius: 10, padding: 20, flex: "1 1 200px", minWidth: 180 }}>
      <div style={{ fontSize: 11, color: "#888", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color, marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 11, color: "#666" }}>{sub}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: 13, color: "#aaa", padding: "4px 0", display: "flex", gap: 8, lineHeight: 1.6 }}>
          <span style={{ color: "#F39C12", flexShrink: 0 }}>&#9656;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ═══════════════════════════════════════════
   SECTION 1: Que es Renddi
   ═══════════════════════════════════════════ */
function SecQueEs() {
  return (
    <>
      <h2 style={heading2}>1. Que es Renddi</h2>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.1 Definicion precisa</h3>
        <p style={para}>
          Renddi es un coach de rendimiento PAES con IA que opera sobre un modelo causal de 21 variables en 5 dimensiones (academica, emocional, conductual, social, vocacional) conectadas por 30 aristas ponderadas con evidencia meta-analitica. No ensena contenido. Entrena rendimiento.
        </p>
        <p style={para}>
          La diferencia es estructural: un preuniversitario asume que saber mas = rendir mas. Renddi demuestra — via simulacion Monte Carlo de 5,000 trayectorias — que la brecha entre conocimiento y puntaje existe por causas no-academicas que nadie mas aborda.
        </p>
        <p style={para}>
          Renddi caracteriza al estudiante en multiples dimensiones y lo ayuda a sacar el 100% de SU capacidad. No optimiza contra un estandar generico; optimiza contra el potencial individual de cada estudiante, medido y modelado por el grafo causal.
        </p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.2 El insight central: stress (0.255) {">"} variables academicas</h3>
        <p style={para}>La descomposicion de rutas de Wright sobre el grafo causal revela un hallazgo contraintuitivo que define toda la propuesta de valor:</p>
        <DataTable
          headers={["Rango", "Variable", "Efecto total en mastery", "Tipo de intervencion"]}
          rows={[
            ["1", "stress_level", "0.255", "Emocional/conductual"],
            ["2", "sleep_quality", "0.199", "Conductual"],
            ["3", "physical_activity", "0.122", "Conductual"],
            ["4", "motivation", "0.105", "Vocacional/emocional"],
            ["5", "emotional_state", "0.032", "Emocional/social"],
          ]}
        />
        <p style={para}>Las tres variables con mayor impacto en mastery no son academicas. stress_level (0.255) tiene mas del doble de efecto total que motivation (0.105). sleep_quality (0.199) casi el doble. Esto invierte la logica de toda la industria de preus.</p>
        <p style={para}>
          <strong style={{ color: "#F39C12" }}>Implicancia directa:</strong> Un estudiante que duerme mal y esta estresado obtiene menor retorno por hora de practica que uno que primero mejora su sueno y maneja su estres. Renddi actua sobre ambos frentes simultaneamente; los preus solo actuan sobre contenido.
        </p>
        <p style={para}>La variable con mayor efecto combinado es self_efficacy (0.507) porque alimenta mastery por 4 caminos aciclicos: directo (+0.30), via confidence (+0.07), via anxiety (+0.105), via anxiety a attention (+0.0315). Renddi construye self_efficacy con cada sesion exitosa calibrada.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.3 Posicionamiento: &quot;Coach de rendimiento&quot; no &quot;tutor&quot;</h3>
        <p style={{ ...para, fontWeight: 600, color: "#e0e0e0" }}>Renddi NO es:</p>
        <BulletList items={[
          "Un banco de preguntas (Puntaje Nacional, Gauss)",
          "Un preu online (CPECH Virtual, Unitips)",
          "Un chatbot con IA (Preu AI, ChatGPT)",
          "Una app de quizzes (Kahoot, Quizlet)",
        ]} />
        <p style={{ ...para, fontWeight: 600, color: "#e0e0e0" }}>Renddi ES:</p>
        <BulletList items={[
          "El staff de alto rendimiento del estudiante, en su bolsillo",
          "Un sistema que modela 21 variables por estudiante y adapta todo a ese perfil",
          "El primer producto en Chile que integra coaching emocional + practica adaptativa + grafo causal",
          "Un complemento al preu, no un competidor",
        ]} />
        <p style={para}>La analogia fundacional: Mr. Miyagi no le ensena golpes a Daniel LaRusso — lo pone a encerar autos y pintar cercas. Cada movimiento repetitivo construye memoria muscular sin que Daniel lo note. El dia de la pelea, no piensa — ejecuta. Renddi hace lo mismo: practica adaptativa diaria que parece simple pero cierra brechas reales.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.4 El dato que lo respalda</h3>
        <p style={para}>Las simulaciones Monte Carlo (1000 estudiantes, 10 arquetipos, 180 dias, 5 escenarios) producen:</p>
        <DataTable
          headers={["Escenario", "Delta PAES medio", "IC 95%"]}
          rows={[
            ["A — Sin Renddi", "+6.3 pts", "[-5.1, +17.6]"],
            ["B — Renddi basico (solo academico)", "+69.6 pts", "[+59.1, +80.1]"],
            ["C — Renddi completo (todos agentes)", "+65.8 pts", "[+55.1, +76.5]"],
            ["D — Renddi + alta adherencia", "+84.5 pts", "[+74.0, +95.1]"],
            ["E — Renddi + crisis", "+60.2 pts", "[+49.5, +70.9]"],
          ]}
        />
        <p style={para}>Sin Renddi, el estudiante promedio mejora +6.3 puntos en 6 meses (ruido estadistico). Con Renddi completo: +65.8 puntos. Con alta adherencia: +84.5 puntos. La adherencia es el multiplicador — no el contenido.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.5 El sistema de agentes</h3>
        <p style={para}>9 agentes especializados operan sobre las 21 variables:</p>
        <DataTable
          headers={["Agente", "Funcion", "Variables principales"]}
          rows={[
            ["MIYAGI", "Orquestador general, prioriza agentes", "Todas (priorizacion FAD)"],
            ["SENPAI", "Practica adaptativa IRT/BKT", "mastery, confidence, self_efficacy"],
            ["KAZE", "Coaching emocional, regulacion", "anxiety, stress, emotional_state"],
            ["KAIZEN", "Habitos y conducta", "study_adherence, sleep, time_management"],
            ["COMPASS", "Orientacion vocacional", "vocational_clarity, motivation"],
            ["DOJO", "Simulacros y exposicion gradual", "anxiety, confidence, mastery"],
            ["NAKAMA", "Grupos y apoyo social", "social_support, emotional_state"],
            ["KOAN", "Metacognicion y estrategia de estudio", "metacognition, cognitive_load"],
            ["IKIGAI", "Motivacion y mindset", "motivation, growth_mindset"],
          ]}
        />
        <p style={para}>{badge("MVP", "#4CAF50")} lanza con 3 agentes activos (SENPAI, KAZE basico, KAIZEN basico). {badge("V1", "#3498DB")} completa los 9.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.6 Decisiones de Messaging Cristalizadas</h3>
        <DataTable
          headers={["Elemento", "Copy definitivo", "Codigo"]}
          rows={[
            [<strong key="t">&quot;Tagline permanente&quot;</strong>, "Entrena para rendir.", "P1"],
            [<strong key="h">&quot;Hero campana&quot;</strong>, "No estudies mas. Entrena mejor.", "P5"],
            [<strong key="b">&quot;Bajada explicativa&quot;</strong>, "Sabe donde fallas. Te entrena donde importa.", "P2"],
            [<strong key="p">&quot;Propuesta valor principal&quot;</strong>, "En 3 min sabe mas que tu preu en 6 meses", "V3"],
            [<strong key="c">&quot;CTA principal&quot;</strong>, "Descubre donde estas perdiendo puntos", "—"],
          ]}
        />
        <p style={{ ...para, fontWeight: 600, color: "#e0e0e0" }}>Uso obligatorio:</p>
        <BulletList items={[
          "P1 aparece en logo, bio RRSS, firma, stickers, app splash, footer",
          "P5 es el hero de landing y primera impresion en campanas",
          "P2 es la bajada explicativa en landing, App Store, stories",
          "V3 es el gancho de curiosidad + baja barrera para conversion",
          "CTA principal se usa en hero, diagnostico, ads, push de reactivacion",
        ]} />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.7 El aha moment</h3>
        <p style={para}>Validado: el estudiante contesta su primera pregunta PAES adaptativa. La app le dice exactamente POR QUE fallo y que debilidad tiene. En 3 minutos se siente visto.</p>
        <p style={para}>Mecanica: CAT IRT 2PL converge a theta con 5-8 items (SEM {"<="} 0.30). Stealth assessment mide 4 variables pasivas sin preguntar nada (attention_span, confidence, frustration_tolerance, metacognition). En 3 minutos el sistema tiene mas informacion sobre el rendimiento del estudiante que un preu en 6 meses.</p>
        <p style={{ ...para, color: "#F39C12", fontWeight: 600 }}>Metrica critica: usuarios que llegan al aha moment en {"<"}3 min retienen 40%+ a D7. Los que no: {"<"}10%.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.8 El proposito</h3>
        <p style={para}>Cerrar la brecha entre el talento que un estudiante tiene y el puntaje que obtiene en la prueba.</p>
        <p style={para}>Es medible (simulaciones muestran gap de 40-80 pts por causas no-academicas), defendible (grafo causal de 21 variables con 30 aristas ponderadas), y accionable (cada variable del grafo tiene un agente responsable).</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.9 Las 30 aristas del grafo: tabla completa</h3>
        <p style={para}>El modelo causal NO es especulativo. Cada arista tiene un nivel de evidencia asignado:</p>
        <DataTable
          headers={["#", "Desde", "Hacia", "Peso", "Nivel", "Interpretacion operacional"]}
          rows={[
            ["1", "anxiety", "mastery", "-0.30", "A", "Ansiedad reduce rendimiento directamente"],
            ["2", "confidence", "mastery", "+0.20", "B", "Seguridad en KCs mejora rendimiento"],
            ["3", "sleep_quality", "attention_span", "+0.45", "A", "Dormir bien = atencion sostenida"],
            ["4", "attention_span", "mastery", "+0.30", "B", "Atencion sostenida = mejor rendimiento"],
            ["5", "motivation", "study_adherence", "+0.35", "A", "Motivacion impulsa consistencia"],
            ["6", "study_adherence", "mastery", "+0.30", "A", "Consistencia mejora mastery directamente"],
            ["7", "stress_level", "anxiety", "+0.45", "A", "Estres amplifica ansiedad"],
            ["8", "cognitive_load", "fatigue", "+0.30", "B", "Sobrecarga produce fatiga"],
            ["9", "fatigue", "attention_span", "-0.40", "B", "Fatiga destruye atencion"],
            ["10", "screen_time", "sleep_quality", "-0.40", "A", "Pantalla nocturna arruina sueno"],
            ["11", "physical_activity", "sleep_quality", "+0.25", "A", "Ejercicio mejora sueno"],
            ["12", "physical_activity", "emotional_state", "+0.30", "A", "Ejercicio mejora estado emocional"],
            ["13", "social_support", "emotional_state", "+0.30", "A", "Red social protege emociones"],
            ["14", "emotional_state", "motivation", "+0.30", "B", "Bienestar emocional impulsa motivacion"],
            ["15", "vocational_clarity", "motivation", "+0.30", "B", "Saber que estudiar motiva"],
            ["16", "self_efficacy", "confidence", "+0.35", "A", "Creer en ti genera seguridad"],
            ["17", "mastery", "self_efficacy", "+0.30", "A", "Mejorar refuerza autoeficacia (ciclo virtuoso)"],
            ["18", "parental_support", "emotional_state", "+0.25", "C", "Apoyo familiar protege. Presion lo destruye"],
            ["19", "metacognition", "study_adherence", "+0.25", "C", "Saber estudiar = estudiar mas"],
            ["20", "growth_mindset", "frustration_tolerance", "+0.25", "A", "Mentalidad crecimiento = tolerar dificultad"],
            ["21", "frustration_tolerance", "study_adherence", "+0.20", "C", "Tolerar dificultad = no abandonar"],
            ["22", "time_management", "study_adherence", "+0.30", "B", "Gestionar tiempo = cumplir plan"],
            ["23", "fatigue", "emotional_state", "-0.25", "C", "Fatiga degrada bienestar"],
            ["24", "stress_level", "sleep_quality", "-0.35", "A", "Estres arruina sueno"],
            ["25", "anxiety", "attention_span", "-0.30", "A", "Ansiedad destruye atencion"],
            ["26", "self_efficacy", "mastery", "+0.30", "A", "Autoeficacia mejora rendimiento directo"],
            ["27", "stress_level", "emotional_state", "-0.35", "A", "Estres destruye bienestar"],
            ["28", "sleep_quality", "fatigue", "-0.50", "A", "Dormir bien = menos fatiga (peso mas alto del grafo)"],
            ["29", "self_efficacy", "anxiety", "-0.35", "A", "Creer en ti reduce ansiedad"],
            ["30", "physical_activity", "stress_level", "-0.25", "A", "Ejercicio reduce estres"],
          ]}
        />
        <p style={para}><strong style={{ color: "#e0e0e0" }}>Niveles:</strong> 18 aristas Nivel A (meta-analisis), 7 Nivel B (empirico), 4 Nivel C (teorico). 1 arista Nivel A* no listada.</p>

        <h4 style={heading4}>Ejemplo de propagacion real</h4>
        <p style={para}>Si reducimos stress_level en -0.20 (equivalente a 2 semanas de intervencion KAZE):</p>
        <BulletList items={[
          "Capa 1: anxiety = -0.09, sleep_quality = +0.07, emotional_state = +0.07",
          "Capa 2 (gamma=0.7): mastery via anxiety = +0.019, attention via sleep = +0.022",
          "Capa 3 (gamma=0.49): mastery via attention = +0.005",
          "Efecto total en mastery: ~+0.05 = ~5-6 puntos PAES",
        ]} />
        <p style={para}>Este calculo es posible SOLO porque el grafo es causal, no correlacional. Ningun competidor puede hacerlo.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.10 El mercado</h3>
        <DataTable
          headers={["Dato", "Valor"]}
          rows={[
            ["Inscritos PAES/ano", "~300,000"],
            ["SAM (alcanzable por Renddi)", "~160,000"],
            ["Brecha municipal-privado", "180-197 pts PAES"],
            ["Gasto promedio en preu", "$500K-1.5M CLP/ano"],
            ["% sin preu", "~55%"],
            ["Retakers", "~15-20% de inscritos"],
            ["Temporada alta", "Julio-noviembre"],
            ["Invierno PAES (estimacion 2026)", "~50K inscritos"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>1.11 Funcion de calculo PAES</h3>
        <div style={{ background: "#0a0a0f", border: "1px solid #1a1a2e", borderRadius: 8, padding: 16, fontFamily: "monospace", fontSize: 14, color: "#F39C12", marginBottom: 12 }}>
          PAES = 150 + 700 x sigmoid((mastery - 0.5) x 6)
        </div>
        <p style={para}>Rango efectivo: ~[150, 850]. La sigmoid produce aceleracion en el rango medio (mastery 0.35-0.65) y saturacion en extremos. Sin ajustes aditivos por anxiety ni fatigue — el grafo ya propaga estos efectos hacia mastery, evitando doble conteo.</p>
        <p style={para}>Implicancia: un estudiante con mastery 0.45 que sube a 0.55 gana mas puntos PAES que uno que sube de 0.65 a 0.75. La zona media es donde Renddi tiene mayor impacto visible.</p>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2: Diferenciacion
   ═══════════════════════════════════════════ */
function SecDiferenciacion() {
  return (
    <>
      <h2 style={heading2}>2. Diferenciacion</h2>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>2.1 Matriz competitiva</h3>
        <DataTable
          headers={["Dimension", "Preus (CPECH/PdV)", "Filadd", "Preu AI", "Khan Academy", "Puntaje Nacional", "Renddi"]}
          rows={[
            ["Enfoque", "Ensenar contenido", "Resumes + quizzes", "Chatbot", "Videos + ejercicios", "Banco preguntas", <strong key="r" style={{ color: "#F39C12" }}>Entrenar rendimiento</strong>],
            ["Personalizacion", "1 profesor para 30+", "Ninguna", "Slider dificultad", "Por progreso", "Ninguna", <strong key="r" style={{ color: "#F39C12" }}>21 variables x 12 arquetipos</strong>],
            ["Motor adaptativo", "Ninguno", "Ninguno", "No real (chatbot)", "Basico (mastery)", "Ninguno", <strong key="r" style={{ color: "#F39C12" }}>IRT 2PL + BKT + grafo causal</strong>],
            ["Dimension emocional", "No existe", "No existe", "No existe", "No existe", "No existe", <strong key="r" style={{ color: "#F39C12" }}>KAZE + stealth assessment</strong>],
            ["Diagnostico", "Ensayo cada N semanas", "Quiz generico", "Conversacion", "Ejercicios", "Ensayo generico", <strong key="r" style={{ color: "#F39C12" }}>{"CAT adaptativo <3 min"}</strong>],
            ["Precio (CLP/mes)", "$80K-120K", "$12K-33K", "$4K/mes", "Gratis", "Gratis (ads)", <strong key="r" style={{ color: "#F39C12" }}>$6.990</strong>],
            ["Precio (CLP/ano)", "$500K-1.5M", "$150K-400K", "$48K", "$0", "$0", <strong key="r" style={{ color: "#F39C12" }}>$84K</strong>],
            ["Arquetipos", "0", "0", "0", "0", "0", <strong key="r" style={{ color: "#F39C12" }}>12 con journeys diferenciados</strong>],
            ["Stealth assessment", "No", "No", "No", "No", "No", <strong key="r" style={{ color: "#F39C12" }}>4 variables pasivas</strong>],
            ["Coaching conductual", "No", "No", "No", "No", "No", <strong key="r" style={{ color: "#F39C12" }}>KAIZEN (sueno, habitos, tiempo)</strong>],
            ["Orientacion vocacional", "Limitada", "No", "No", "No", "No", <strong key="r" style={{ color: "#F39C12" }}>COMPASS integrado</strong>],
            ["Protocolo crisis", "No", "No", "No", "No", "No", <strong key="r" style={{ color: "#F39C12" }}>4 niveles (KAZE)</strong>],
            ["Validacion cientifica", "Ninguna publicada", "Ninguna", "Ninguna", "Parcial", "Ninguna", <strong key="r" style={{ color: "#F39C12" }}>Grafo 18 aristas Nivel A + 1 A*</strong>],
          ]}
          highlightFirst={false}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>2.2 Los 7 diferenciadores unicos</h3>

        {[
          {
            num: "1",
            title: "Grafo causal de 21 variables",
            desc: "Renddi es el unico producto en Chile (y probablemente en Latinoamerica) que modela el rendimiento estudiantil como una red causal dirigida aciclica con pesos calibrados desde meta-analisis. 19 de 30 aristas tienen soporte meta-analitico robusto (Nivel A). Esto no es marketing — es ciencia implementada como producto.",
          },
          {
            num: "2",
            title: "Stealth assessment (medicion invisible)",
            desc: "Mientras el estudiante practica, Renddi mide 4 variables sin preguntar nada: attention_span (degradacion de rendimiento intra-sesion), confidence (calibracion entre confianza declarada y precision real), frustration_tolerance (persistencia ante items dificiles), metacognition (patron de revision y uso de ayudas). Ningun competidor tiene esto.",
          },
          {
            num: "3",
            title: "12 arquetipos con journeys diferenciados",
            desc: "10 estudiantes abren Renddi. Valentina recibe preguntas dificiles desde el minuto 1. Benjamin recibe una mision con XP. Isidora ve sus fortalezas antes que sus debilidades. Diego recibe una sesion de 5 minutos en formato competitivo. Misma app, 12 experiencias. Los arquetipos cubren 90-93% de la poblacion PAES directamente. Con flags y capas complementarias: 97-99%.",
          },
          {
            num: "4",
            title: "Motor adaptativo real (IRT 2PL + BKT)",
            desc: "No un slider de dificultad. No un chatbot que elige preguntas al azar. Un motor que selecciona items por maxima informacion de Fisher, estima mastery por KC via BKT, mantiene al estudiante en zona optima (P=0.50-0.80), y converge a theta con 5-8 items. delta_theta +0.003/sesion. 30 sesiones = ~8-14 pts PAES/mes compuesto.",
          },
          {
            num: "5",
            title: "Coaching emocional integrado",
            desc: "Renddi no es un psicologo. Es un sistema que detecta ansiedad, estres, fatiga y estados emocionales y actua sobre ellos como variables que impactan rendimiento. Protocolo de crisis de 4 niveles: Nivel 0 monitoreo pasivo, Nivel 1 alerta temprana, Nivel 2 intervencion activa, Nivel 3 crisis con derivacion a profesional.",
          },
          {
            num: "6",
            title: "Precio 94% menor que preus",
            desc: "$6.990 CLP/mes vs $80K-120K CLP/mes. $84K CLP/ano vs $500K-1.5M CLP/ano. Accesible desde el celular 24/7 vs horarios fijos presencial. IA personalizada 1:1 vs 1 profesor para 30+ alumnos. $6.990 CLP = el precio de un almuerzo.",
          },
          {
            num: "7",
            title: "Validacion por simulacion cuantitativa",
            desc: "Ningun competidor tiene validacion por simulacion. Renddi tiene 5,000 trayectorias Monte Carlo con 10 arquetipos, 5 escenarios, 180 dias simulados, curva honeymoon de adherencia realista, regresion a la media siempre activa, eventos de crisis calibrados. Esto es evidencia cuantitativa, no claims de marketing.",
          },
        ].map((d) => (
          <div key={d.num} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: d.num !== "7" ? "1px solid #1a1a2e" : "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", background: "#F39C1215", border: "1px solid #F39C1233", fontSize: 12, fontWeight: 700, color: "#F39C12", flexShrink: 0 }}>{d.num}</span>
              <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#e0e0e0" }}>{d.title}</h4>
            </div>
            <p style={{ ...para, marginLeft: 40 }}>{d.desc}</p>
          </div>
        ))}
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>2.3 El moat real: integracion grafo + emociones + adaptacion</h3>
        <p style={para}>Cada diferenciador por separado es replicable. El moat real es la integracion de los tres:</p>
        <BulletList items={[
          "El grafo causal determina QUE intervenir (leverage points)",
          "Los arquetipos determinan COMO intervenir (parametros diferenciados)",
          "El motor adaptativo ejecuta la intervencion en tiempo real",
          "El stealth assessment actualiza el grafo sin friccion",
          "El coaching emocional protege la efectividad de todo lo anterior",
        ]} />
        <p style={para}>Replicar un componente toma meses. Replicar la integracion toma anos — y requiere la base cientifica que ya esta validada.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>2.4 Analisis competitivo detallado</h3>

        <h4 style={heading4}>CPECH / Pedro de Valdivia (preus tradicionales)</h4>
        <DataTable
          headers={["Dimension", "Preu", "Renddi", "Resultado"]}
          rows={[
            ["Precio", "$80K-120K/mes", "$6.990/mes", "Renddi 94% mas barato"],
            ["Formato", "Clases presenciales, 30+ alumnos", "App 24/7, personalizada 1:1", "Renddi mas accesible"],
            ["Diagnostico", "Ensayo generico cada 4-6 semanas", "CAT IRT cada sesion", "Renddi infinitamente mas granular"],
            ["Adaptacion", "Misma clase para todos", "IRT selecciona items por estudiante", "Renddi adapta en tiempo real"],
            ["Dimension emocional", "Tutor sobrecargado, no mide nada", "KAZE + stealth assessment", "Renddi unico"],
            ["Posicionamiento", "N/A", "Complemento que el preu no puede darte", "No compiten — se complementan"],
          ]}
        />

        <h4 style={heading4}>Filadd</h4>
        <DataTable
          headers={["Dimension", "Filadd", "Renddi", "Resultado"]}
          rows={[
            ["Precio", "$12K-33K/mes", "$6.990/mes", "Renddi 42-79% mas barato"],
            ["Motor adaptativo", "No tiene", "IRT 2PL + BKT", "Renddi ventaja absoluta"],
            ["Personalizacion", "Ninguna", "12 arquetipos x 21 variables", "Renddi ventaja absoluta"],
          ]}
        />

        <h4 style={heading4}>Preu AI (chatbot)</h4>
        <DataTable
          headers={["Dimension", "Preu AI", "Renddi", "Resultado"]}
          rows={[
            ["Precio", "~$4K/mes", "$6.990/mes", "Preu AI mas barato"],
            ["Motor", "Chatbot LLM (no IRT real)", "IRT 2PL + BKT + grafo causal", "Renddi tecnicamente superior"],
            ["Arquetipos", "0", "12 con journeys diferenciados", "Renddi unico"],
            ["Coaching emocional", "No", "KAZE + protocolos crisis", "Renddi unico"],
          ]}
        />

        <h4 style={heading4}>Khan Academy</h4>
        <DataTable
          headers={["Dimension", "Khan", "Renddi", "Resultado"]}
          rows={[
            ["Precio", "Gratis", "$6.990/mes (free tier)", "Khan mas accesible"],
            ["Motor adaptativo", "Basico (mastery)", "IRT 2PL + BKT + grafo causal", "Renddi mas sofisticado"],
            ["Localizacion", "Global, no PAES", "PAES-first", "Renddi gana en Chile"],
          ]}
        />

        <h4 style={heading4}>Puntaje Nacional</h4>
        <DataTable
          headers={["Dimension", "Puntaje Nacional", "Renddi", "Resultado"]}
          rows={[
            ["Precio", "Gratis (con publicidad)", "$6.990/mes (sin ads)", "PN gratis pero con ads"],
            ["Motor", "Banco estatico", "IRT adaptativo", "Renddi adapta"],
            ["Diagnostico", "Ensayo completo (2h)", "CAT (3 min)", "Renddi mas rapido y profundo"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>2.5 Posicionamiento: complemento, no competidor</h3>
        <p style={para}>Renddi no compite con preus. Es el complemento que los hace rendir mejor. El estudiante con preu + Renddi obtiene: contenido del preu + practica adaptativa de Renddi + coaching emocional de Renddi + diagnostico granular de Renddi.</p>
        <p style={{ ...para, fontStyle: "italic", color: "#e0e0e0" }}>Para el padre: &quot;Ya le pagaste el preu. Esto es lo que le faltaba. Por el precio de un almuerzo.&quot;</p>
        <p style={{ ...para, fontStyle: "italic", color: "#e0e0e0" }}>Para el estudiante sin preu: &quot;El mismo motor adaptativo que tienen los de preu. Por $6.990/mes.&quot;</p>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3: Buyer Personas
   ═══════════════════════════════════════════ */
function SecPersonas() {
  return (
    <>
      <h2 style={heading2}>3. Buyer Personas Definitivos</h2>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>3.1 Estudiantes</h3>

        {[
          { name: "BP1: Sofia — La que estudia pero no sabe si alcanza", perfil: "17 anos, 4to medio, particular subvencionado Las Condes. Preu CPECH. Puntaje ~620. Meta: 750+ Medicina UC.", dolor: "Estudio mucho pero mis ensayos salen igual. No se si lo que hago sirve.", renddi: "Diagnostico por topico en 3 min. Ve que en geometria analitica tiene 31% pero en algebra 78%.", mensaje: "Tu preu te ensena algebra. Pero sabe que en geometria analitica tienes 31%? Renddi si.", arq: "Valentina/Isidora", seg: "A1 + B1" },
          { name: "BP2: Martin — El que quiere pero no puede pagar", perfil: "18 anos, egresado reciente, municipal Puente Alto. Sin preu. Samsung Galaxy A15, prepago 5GB. ~520 pts.", dolor: "Los del preu tienen ventaja. Yo estudio solo y no se si avanzo.", renddi: "Mismo motor adaptativo por $6.990/mes o gratis (free tier: 5 preguntas/dia, 1 asignatura).", mensaje: "Diagnostico gratis. Sin registro. 3 minutos. Sabes exactamente donde estas.", arq: "Camila", seg: "A5 + B3" },
          { name: "BP3: Joaquin — El retaker que sabe la materia pero no sube", perfil: "20 anos, egresado hace 2 anos. 2 PAES (680, 695). Necesita 720 para Derecho Chile.", dolor: "Se la materia. Estudio. Pero sigo sacando lo mismo.", renddi: "Diagnostico de POR QUE no sube. El grafo muestra cuello de botella en time management + ansiedad.", mensaje: "Tus errores en CL se concentran en las ultimas 2 preguntas. No es que no sepas — te quedas sin tiempo.", arq: "Joaquin/Matias", seg: "A4" },
          { name: "BP4: Constanza — La Retaker Ansiosa", perfil: "19 anos, egresada, Vina del Mar. 720 pts, necesita 750 para Medicina UV.", dolor: "Se la materia. Pero el dia de la prueba me bloquee. Cambie 4 respuestas correctas en los ultimos 10 minutos.", renddi: "Entrenamiento para rendir bajo presion. KAZE + DOJO exposicion gradual. Stealth detecta patron de cambio de respuestas.", mensaje: "Renddi detecto que cambias respuestas correctas despues del minuto 50. No es que no sepas — es que la presion te traiciona.", arq: "Matias/Isidora", seg: "A4 + A3" },
          { name: "BP5: Tomas — El gamer que no quiere estudiar", perfil: "17 anos, 3ro medio. Valorant 4h/dia. Promedio 5.5. Sin preu.", dolor: "No siente dolor. El hook es curiosidad/desafio, no miedo.", renddi: "Gamificacion calibrada. Primera Mision. XP, tipologia. 5 min como mini-game.", mensaje: "5 minutos. Un diagnostico. Te dice tu tipo PAES. Eres El Estratega, El Sprinter o El Explorador?", arq: "Benjamin/Diego", seg: "A2" },
          { name: "BP6: Valentina — La de puntaje alto que quiere el maximo", perfil: "18 anos, 4to medio. ~780 pts. Quiere 850+ para Medicina Chile. PdV. Autoexigente.", dolor: "Mis ensayos son buenos pero no perfectos. Necesito saber EXACTAMENTE donde pierdo esos puntos.", renddi: "Micro-diagnostico: probabilidad condicional 61% vs algebra 92%. Esos 31 pts de diferencia son sus puntos escondidos.", mensaje: "Renddi no te dice 'vas bien'. Te dice que en probabilidad condicional tienes 61%.", arq: "Valentina", seg: "A1 elite" },
          { name: "BP8: Isidora — La que se paraliza con la ansiedad", perfil: "18 anos, 4to medio. Notas 6.2 pero PAES ~570 (-150 pts de lo esperado).", dolor: "Se la materia pero en el examen me bloqueo. Cambio respuestas correctas.", renddi: "Coaching emocional integrado. Fortalezas primero. Nunca puntaje crudo si ansiedad >0.50.", mensaje: "Renddi no te muestra un puntaje frio. Te muestra tus fortalezas primero.", arq: "Isidora/Matias", seg: "A3" },
          { name: "BP9: Diego — El que trabaja y estudia con 20 minutos libres", perfil: "21 anos, egresado. Supermercado turno completo. 20 min libres/dia.", dolor: "No tengo 2 horas para un ensayo. Cuando llego a la casa estoy muerto.", renddi: "Sesiones de 5 min que mueven la aguja. delta_theta +0.003/sesion x 30 dias = progreso medible.", mensaje: "5 min x 30 dias = 150 minutos de practica adaptativa. Supera 4 horas de ensayo generico.", arq: "Diego/Andres", seg: "A4/A5" },
        ].map((bp) => (
          <div key={bp.name} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid #1a1a2e" }}>
            <h4 style={{ ...heading4, color: "#F39C12", fontSize: 15 }}>{bp.name}</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginTop: 8 }}>
              <div><span style={{ fontSize: 11, color: "#888", textTransform: "uppercase" }}>Perfil:</span><p style={{ ...para, marginTop: 4 }}>{bp.perfil}</p></div>
              <div><span style={{ fontSize: 11, color: "#888", textTransform: "uppercase" }}>Dolor:</span><p style={{ ...para, marginTop: 4, fontStyle: "italic" }}>&quot;{bp.dolor}&quot;</p></div>
              <div><span style={{ fontSize: 11, color: "#888", textTransform: "uppercase" }}>Lo que Renddi le da:</span><p style={{ ...para, marginTop: 4 }}>{bp.renddi}</p></div>
              <div><span style={{ fontSize: 11, color: "#888", textTransform: "uppercase" }}>Mensaje que convierte:</span><p style={{ ...para, marginTop: 4, color: "#F39C12" }}>&quot;{bp.mensaje}&quot;</p></div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              {badge(`Arquetipo: ${bp.arq}`)}
              {badge(`Segmento: ${bp.seg}`, "#3498DB")}
            </div>
          </div>
        ))}
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>3.2 Padre/Madre (4 subtipos)</h3>
        {[
          { name: "Fernanda — La mama que paga preu sin certeza", desc: "45 anos, madre de Sofia. Paga CPECH $95K/mes. No tiene visibilidad del progreso real. Renddi le da dashboard de progreso por topico.", msg: "El preu ensena la materia. Renddi entrena el rendimiento. Son complementarios. Cuesta menos que un almuerzo al mes." },
          { name: "Carlos — El papa de 2 que no puede pagar 2 preus", desc: "52 anos, padre de 2. Motor adaptativo real por $6.990/hijo/mes. Ahorra $1M+/ano vs 2 preus.", msg: "Renddi usa inteligencia artificial que adapta cada pregunta al nivel de tu hijo. Y cuesta 94% menos." },
          { name: "La mama ansiosa", desc: "Proyecta ansiedad en el hijo. Dashboard padres (V2) con progreso visible sin invadir. Guia 'Como apoyar sin presionar'.", msg: "Renddi te da la visibilidad que necesitas. Sin presionar a tu hijo." },
          { name: "El padre esceptico/racional", desc: "Quiere datos, no promesas. Simulacion Monte Carlo, grafo causal, metricas verificables.", msg: "Un motor de IA calibrado con 150+ estudios cientificos. No es fe — es ciencia." },
        ].map((p, i) => (
          <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < 3 ? "1px solid #1a1a2e" : "none" }}>
            <h4 style={heading4}>{p.name}</h4>
            <p style={para}>{p.desc}</p>
            <p style={{ ...para, color: "#F39C12", fontStyle: "italic" }}>&quot;{p.msg}&quot;</p>
          </div>
        ))}
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>3.3 Colegio/Orientador</h3>
        <h4 style={heading4}>BP10: Patricia — La orientadora del liceo municipal</h4>
        <p style={para}>38 anos, orientadora vocacional. 400 alumnos 3ro-4to medio. Sin presupuesto para preus. Free tier funcional para 400 alumnos. Diagnostico personalizado sin costo. Sin publicidad.</p>
        <p style={{ ...para, color: "#F39C12", fontStyle: "italic" }}>&quot;Renddi tiene diagnostico personalizado gratuito para cada alumno. Sin publicidad. Sin datos sensibles. Puede recomendarlo a sus 400 alumnos hoy.&quot;</p>
        <p style={para}>LTV: $0 directo. 1 orientadora = 50-100 descargas organicas. Canal de adquisicion masivo y gratuito.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>3.4 Tabla cruzada persona x arquetipo x mensaje x canal</h3>
        <DataTable
          headers={["Buyer Persona", "Arquetipo", "Promesa", "Canal primario", "CTA"]}
          rows={[
            ["BP1 Sofia", "Valentina/Isidora", "P2 Sabe donde fallas", "IG Story", "Descubre tus brechas en 3 min"],
            ["BP2 Martin", "Camila", "P6 3 min + 5 min/dia", "TikTok", "Diagnostico gratis. Sin registro"],
            ["BP3 Joaquin", "Matias/Joaquin", "P10 Cierra la brecha", "Google SEO", "Por que no subes de puntaje?"],
            ["BP5 Tomas", "Benjamin", "P7 Se adapta a ti", "TikTok viral", "Cual es tu tipo PAES?"],
            ["BP6 Valentina", "Valentina", "P2 Sabe donde fallas", "IG", "Tus puntos escondidos"],
            ["BP8 Isidora", "Isidora/Matias", "P3 Lo que sabes al 100%", "IG/TikTok", "Fortalezas primero"],
            ["BP9 Diego", "Diego/Andres", "P6 3 min + 5 min/dia", "TikTok", "5 min al dia"],
            ["BP4 Fernanda", "N/A (padre)", "P8 Preu 30 vs Renddi 1", "WhatsApp WOM", "Ve el progreso real"],
            ["Carlos padre", "N/A (padre)", "P8 Preu 30 vs Renddi 1", "Google/Meta", "94% mas barato"],
            ["Patricia", "N/A (B2B)", "P9 Diagnostico+plan", "Email", "Gratis para sus 400 alumnos"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>3.5 Prioridad de personas para launch (15 abril)</h3>
        <div style={{ marginBottom: 12 }}>
          {badge("Tier 1 (semana 1-2)", "#4CAF50")}
          <span style={{ fontSize: 13, color: "#aaa", marginLeft: 8 }}>BP1 Sofia + BP3 Joaquin + BP8 Isidora — Cubren volumen, retencion, diferenciacion</span>
        </div>
        <div style={{ marginBottom: 12 }}>
          {badge("Tier 2 (semana 3-4)", "#F39C12")}
          <span style={{ fontSize: 13, color: "#aaa", marginLeft: 8 }}>BP4 Fernanda + Carlos — Los que pagan. Llegan via WhatsApp y Google</span>
        </div>
        <div>
          {badge("Tier 3 (mes 2)", "#3498DB")}
          <span style={{ fontSize: 13, color: "#aaa", marginLeft: 8 }}>BP10 Patricia — Canal B2B que escala sin costo. 1 orientadora = 50-100 descargas</span>
        </div>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>3.6 Delta PAES por arquetipo</h3>
        <p style={para}>Datos de simulacion Monte Carlo (escenario C, Renddi completo, 180 dias):</p>
        <DataTable
          headers={["Arquetipo", "PAES inicial", "Delta C", "PAES final est.", "Interpretacion"]}
          rows={[
            ["Valentina", "835", "-0.6", "~834", "Valor defensivo: proteger contra deterioro"],
            ["Matias", "680", "+79.0", "~759", "Coaching emocional desbloquea potencial"],
            ["Camila", "590", "+65.9", "~656", "Crecimiento sostenido por resiliencia"],
            ["Benjamin", "500", "+53.9", "~554", "Potencial desbloqueado por habitos"],
            ["Isidora", "725", "-9.1", "~716", "Perfil fragil, necesita sostenimiento"],
            ["Diego", "455", "+141.8", "~597", "Mayor potencial del cohorte"],
            ["Francisca", "410", "+117.2", "~527", "Micro-sesiones compensan deficit atencional"],
            ["Tomas", "545", "+62.5", "~608", "Capital social canalizado a estudio"],
            ["Martina", "635", "+36.1", "~671", "Mejora modesta, requiere proteccion"],
            ["Joaquin", "320", "+111.6", "~432", "Growth mindset como motor"],
          ]}
        />
        <p style={{ ...para, color: "#F39C12", fontWeight: 600 }}>Hallazgo clave: Los perfiles con PAES {"<"}500 mejoran +106.1 pts promedio vs +38.8 pts los perfiles {">"}=500. Renddi tiene mayor impacto visible en estudiantes que mas lo necesitan.</p>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4: Pricing
   ═══════════════════════════════════════════ */
function SecPricing() {
  return (
    <>
      <h2 style={heading2}>4. Pricing y Value Ladder</h2>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>4.1 Estructura de precios</h3>
        <DataTable
          headers={["Tier", "Precio", "Features", "Target"]}
          rows={[
            [<span key="f">{badge("Free", "#4CAF50")} Free</span>, "$0", "5 preguntas/dia, 1 asignatura, dashboard basico, diagnostico completo sin registro", "Todos — funnel de entrada"],
            [<span key="p">{badge("Premium", "#F39C12")} Premium</span>, "$6.990 CLP/mes (~$7.60 USD)", "Ilimitado, todas asignaturas, facsimiles, coaching IA, analytics completo", "Estudiante comprometido"],
            [<span key="pp">{badge("PAES Pack", "#9B59B6")} PAES Pack</span>, "$29.990 CLP unico (~$32 USD)", "6 meses Premium (ahorro ~28%)", "Padres, retakers, planificadores"],
            [<span key="c">{badge("Colegio", "#3498DB")} Colegio</span>, "Por definir (V2)", "Dashboard institucional, reportes por curso, bulk licensing", "Colegios, orientadores"],
          ]}
        />
        <h4 style={heading4}>Logica del pricing</h4>
        <BulletList items={[
          "$6.990/mes = 'un almuerzo'. Barrera psicologica minima. 94% menos que preu",
          "$29.990 PAES Pack = 'una ida al cine en familia'. Cubre abril-noviembre. Ahorro vs mensual = $11.950 (28%)",
          "Free tier funcional = no es trial. Es una version real con restriccion de volumen",
        ]} />
        <h4 style={heading4}>Por que NO hay trial</h4>
        <p style={para}>El free tier ES el trial perpetuo. Un trial de 7 dias fuerza una decision antes del aha moment. Conversion esperada: conservador 8-10%, base 12-15%, optimista 18-20%.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>4.2 Unit economics</h3>
        <h4 style={heading4}>Costo por alumno (IA)</h4>
        <DataTable
          headers={["Perfil", "Dias activos/mes", "Preguntas/mes", "Coaching calls", "Costo USD", "Costo CLP", "% precio"]}
          rows={[
            ["Free", "10", "50", "0 (template)", "$0.004", "$3", "N/A"],
            ["Premium casual", "12", "240", "12", "$0.08", "$70", "1.0%"],
            ["Premium activo", "20", "680", "20", "$0.22", "$198", "2.8%"],
            ["Premium intensivo", "28", "1,480", "28", "$0.57", "$520", "7.4%"],
          ]}
        />
        <p style={para}>Costo promedio por premium: ~$0.22 USD/mes ($198 CLP). El 93% del precio es margen bruto.</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
          <StatCard label="CAC target" value="<$3K" sub="CLP, mes 1" />
          <StatCard label="LTV" value=">$35K" sub="CLP, mes 1" />
          <StatCard label="LTV/CAC" value=">11x" sub="Ratio saludable" />
          <StatCard label="Churn mensual" value="<10%" sub="Target mes 1" color="#E74C3C" />
        </div>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>4.3 Proyecciones de revenue por mes</h3>
        <DataTable
          headers={["Metrica", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]}
          rows={[
            ["MAU", "200", "600", "1,500", "3,000", "4,000", "5,000", "8,000", "12,000", "15,000"],
            ["Subs", "30", "100", "250", "600", "800", "1,000", "1,600", "2,400", "3,000"],
            ["Conv rate", "15%", "17%", "17%", "20%", "20%", "20%", "20%", "20%", "20%"],
            ["Revenue CLP", "$210K", "$700K", "$1.75M", "$4.2M", "$5.6M", "$7M", "$11.2M", "$16.8M", "$21M"],
            ["Utilidad CLP", "$197K", "$662K", "$1.68M", "$4.03M", "$5.37M", "$6.7M", "$10.7M", "$16M", "$20M"],
          ]}
        />

        <h4 style={heading4}>Escenario conservador vs optimista (mes 6)</h4>
        <DataTable
          headers={["Metrica", "Conservador", "Base", "Optimista"]}
          rows={[
            ["MAU", "2,500", "5,000", "10,000"],
            ["Subs", "375", "1,000", "2,000"],
            ["Revenue CLP", "$2.6M", "$7M", "$14M"],
            ["Break-even", "No", "Limite", "Si"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>4.4 Estrategia de conversion por buyer persona</h3>
        <DataTable
          headers={["Persona", "Trigger de conversion", "Precio optimo", "Momento"]}
          rows={[
            ["BP1 Sofia", "Ve brechas micro que preu no da", "PAES Pack $29.990", "Semana 2"],
            ["BP2 Martin", "Free se siente limitado", "Premium $6.990", "Semana 3"],
            ["BP3 Joaquin", "Insight especifico de tiempo", "Premium $6.990", "Dia 1"],
            ["BP5 Tomas", "Papas ven que usa app", "Premium $6.990", "Mes 2"],
            ["BP6 Valentina", "Micro-brechas en KCs", "PAES Pack $29.990", "Semana 1"],
            ["BP8 Isidora", "Coaching emocional funciona", "Premium $6.990", "Semana 3"],
            ["BP9 Diego", "5 min/dia muestra progreso", "Premium $6.990", "Semana 3"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>4.5 Value ladder completa</h3>
        {[
          { stage: "AWARENESS", desc: "Diagnostico gratis sin registro (<3 min)", detail: "Aha moment: 'Renddi sabe mas de mi rendimiento en 3 min que mi preu en 6 meses'", color: "#3498DB" },
          { stage: "ENGAGEMENT", desc: "Free tier (5 preguntas/dia, 1 asignatura)", detail: "Valor demostrable: practica adaptativa real, dashboard basico", color: "#2ECC71" },
          { stage: "CONVERSION", desc: "Premium $6.990/mes", detail: "Todo ilimitado + coaching IA + analytics completo. Trigger: semana 2-3", color: "#F39C12" },
          { stage: "COMMITMENT", desc: "PAES Pack $29.990", detail: "6 meses Premium. Ahorro 28%. Trigger: padres que ya vieron valor", color: "#9B59B6" },
          { stage: "EXPANSION (V2)", desc: "Colegio", detail: "Dashboard institucional, reportes por curso. Trigger: orientadores free tier", color: "#E74C3C" },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 16, marginBottom: 16, alignItems: "flex-start" }}>
            <div style={{ minWidth: 120, padding: "6px 12px", borderRadius: 6, background: `${s.color}15`, border: `1px solid ${s.color}33`, color: s.color, fontSize: 11, fontWeight: 700, textAlign: "center" }}>{s.stage}</div>
            <div>
              <div style={{ fontSize: 13, color: "#e0e0e0", fontWeight: 600 }}>{s.desc}</div>
              <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{s.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5: Web y Landing
   ═══════════════════════════════════════════ */
function SecWebLanding() {
  return (
    <>
      <h2 style={heading2}>5. Web y Landing</h2>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>5.1 Landing principal (renddi.cl)</h3>

        <h4 style={heading4}>Hero section</h4>
        <DataTable
          headers={["Elemento", "Contenido"]}
          rows={[
            [<strong key="h1">H1</strong>, "Tu coach PAES con IA. Entrena donde pierdes puntos."],
            [<strong key="h2">H2</strong>, "No es estudiar mas. Es entrenar mejor. (P5)"],
            [<strong key="h3">H3</strong>, "El primer coach de rendimiento PAES con IA. Diagnostica tus debilidades en 3 minutos. Entrena tus brechas en 5 al dia."],
            [<strong key="cta1">CTA primario</strong>, "Descubre donde estas perdiendo puntos -> /diagnostico"],
            [<strong key="cta2">CTA secundario</strong>, "Descarga la app -> App Store / Play Store"],
            [<strong key="vis">Visual</strong>, "Pantalla del celular mostrando radar de 5 dimensiones con brechas visibles"],
            [<strong key="sp">Social proof</strong>, "Contador: 'X estudiantes ya descubrieron sus brechas'"],
          ]}
        />

        <h4 style={heading4}>Seccion &quot;Como funciona&quot;</h4>
        <DataTable
          headers={["Paso", "Titulo", "Descripcion"]}
          rows={[
            ["1", "Diagnostico adaptativo", "5 preguntas que se adaptan a tu nivel. Sin ensayo de 2 horas. Sin registro."],
            ["2", "Perfil multidimensional", "No solo que sabes. Como estudias, cuanta ansiedad tienes, donde pierdes tiempo."],
            ["3", "Entrenamiento personalizado", "Practica diaria de 5 min calibrada a TUS debilidades. No a las de 30 companeros."],
            ["4", "Progreso visible", "Dashboard con mastery por topico. Tu y tus papas ven exactamente donde mejoras."],
          ]}
        />

        <h4 style={heading4}>Seccion &quot;Lo que te da que nadie mas puede&quot;</h4>
        <BulletList items={[
          "Diagnostico por topico, no por asignatura — 'Tu preu dice vas bien en M1. Renddi dice en geometria analitica tienes 31%.'",
          "Practica que se adapta pregunta a pregunta — Calibrada a tu zona optima",
          "Coach emocional integrado — Detecta cuando tu ansiedad sube y ajusta la sesion",
          "Stealth assessment — Mide cosas que ni tu sabes: atencion, confianza, persistencia. Sin preguntarte nada.",
        ]} />

        <h4 style={heading4}>Seccion &quot;La ciencia detras&quot;</h4>
        <p style={para}>21 variables respaldado por 150+ estudios cientificos. Simulaciones de 5,000 estudiantes muestran: sin entrenamiento +6 puntos, con Renddi +65 puntos.</p>

        <h4 style={heading4}>Seccion pricing (en landing)</h4>
        <p style={para}>H2: &quot;Un preu cuesta $1.2M al ano. Renddi cuesta $84K.&quot; (V10). Cards de Free, Premium ($6.990/mes) y PAES Pack ($29.990). Nota: &quot;Sin compromiso. Cancela cuando quieras. Diagnostico gratis sin registro.&quot;</p>

        <h4 style={heading4}>Seccion padres</h4>
        <p style={para}>H2: &quot;El complemento que al preu le falta. Por el precio de un almuerzo.&quot; Dashboard de progreso por topico — no un numero, un mapa.</p>

        <h4 style={heading4}>SEO/blog (contenido evergreen)</h4>
        <DataTable
          headers={["Pagina", "H1", "Target keyword", "Buyer persona"]}
          rows={[
            ["/blog/como-mejorar-puntaje-paes", "Como mejorar tu puntaje PAES (guia basada en datos)", "como mejorar puntaje paes", "BP1 Sofia, BP3 Joaquin"],
            ["/blog/ansiedad-paes", "Ansiedad en la PAES: por que saber la materia no basta", "ansiedad paes", "BP8 Isidora"],
            ["/blog/preu-vs-app", "Preu vs app: que funciona mejor para la PAES", "preu paes alternativa", "BP2 Martin, Carlos"],
            ["/blog/5-minutos-paes", "Por que 5 minutos al dia superan 4 horas el fin de semana", "estudiar paes poco tiempo", "BP9 Diego"],
            ["/blog/diagnostico-paes-gratis", "Diagnostico PAES gratis: descubre tus brechas", "diagnostico paes gratis", "Todos"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>5.2 Pagina /diagnostico</h3>
        <p style={para}>H1: &quot;Descubre donde estas perdiendo puntos.&quot; H2: &quot;5 preguntas adaptativas. 3 minutos. Sin registro. Sin ensayo de 2 horas.&quot;</p>
        <h4 style={heading4}>Flujo del diagnostico web</h4>
        <BulletList items={[
          "Seleccion de materia (10 seg): M1, M2, CL, CB, HC",
          "Pregunta 1 (item ancla, dificultad media): Formato PAES real con feedback inmediato",
          "Preguntas 2-8 (adaptativas): CAT IRT 2PL por maxima informacion de Fisher",
          "Procesamiento (2-3 seg): Barra de progreso animada",
          "Resultados: Radar 5 dimensiones, 2 fortalezas, 2 oportunidades, puntaje estimado (si no hay ansiedad alta)",
          "CTA: 'Quiero entrenar mis brechas' -> descarga app",
        ]} />
        <p style={para}>Sin registro obligatorio. Mobile-first. Menos de 3 minutos. Deep link a app con theta pre-cargado.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>5.3 Pagina /padres</h3>
        <p style={para}>H1: &quot;Tu hijo estudia. Pero sabe donde esta fallando?&quot;</p>
        <p style={para}>Secciones: El problema (preus ensenan igual a todos), La solucion (diagnostico por topico + coaching), Dashboard padres (mockup mastery por topico), Comparacion (preu vs Renddi), FAQ padres.</p>

        <h4 style={heading4}>FAQ padres (resumen)</h4>
        <BulletList items={[
          "Es seguro? — No datos sensibles, no publicidad, no terceros",
          "Funciona sin preu? — Si, motor adaptativo independiente",
          "Como veo progreso? — Dashboard compartible (V2: portal padres)",
          "Y si no lo usa? — Notificaciones calibradas, no culpa",
          "5 min sirven? — Aprendizaje espaciado: corto y frecuente supera largo y esporadico",
          "Si tiene ansiedad? — Stealth assessment detecta y ajusta. Derivacion profesional si severa",
          "Por que tan barato? — Es software. Costo marginal minimo. Elegimos accesibilidad",
          "Vs preuniversitario? — Complemento: preu ensena contenido, Renddi entrena rendimiento",
        ]} />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>5.4 Pagina /ciencia</h3>
        <p style={para}>H1: &quot;La ciencia detras de Renddi.&quot; H2: &quot;21 variables. 30 conexiones causales. 150+ estudios cientificos. 5,000 simulaciones.&quot;</p>
        <BulletList items={[
          "Seccion 1: Visualizacion interactiva del grafo causal",
          "Seccion 2: El hallazgo (stress 0.255 > variables academicas)",
          "Seccion 3: Los 12 arquetipos con delta PAES",
          "Seccion 4: Simulaciones (baseline +6.3, Renddi +65.8, alta adherencia +84.5)",
          "Seccion 5: El motor (IRT 2PL + BKT + FSRS)",
          "CTA: 'Quieres ver como funciona en ti?' -> /diagnostico",
          "Target: Padre racional, BP3 Joaquin, periodistas, inversores",
        ]} />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   SECTION 6: Mensajes App
   ═══════════════════════════════════════════ */
function SecMensajesApp() {
  return (
    <>
      <h2 style={heading2}>6. Mensajes por Pantalla de la App</h2>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>6.1 Onboarding (8-10 minutos)</h3>
        <h4 style={heading4}>Splash screens (3 pantallas, 15 seg total)</h4>
        <BulletList items={[
          "Pantalla 1: 'Renddi te prepara para la PAES de verdad.' / 'No es otro banco de preguntas.'",
          "Pantalla 2: 'Es tu coach personal que aprende de ti.' / 'Diagnostica, entrena, acompana.'",
          "Pantalla 3: 'Tu Primera Mision empieza ahora.' / CTA: 'Empezar'",
        ]} />

        <h4 style={heading4}>Bloque A: Contexto y bienestar (90 seg)</h4>
        <BulletList items={[
          "Estres (2 items PSS): nervioso/estresado + cosas fuera de control",
          "Sueno (3 items PSQI): hora acostarse + hora levantarse + calidad",
          "Ansiedad (2 items Spielberger): nervios PAES + preocupacion examen",
          "Motivacion (2 items SDT): interes genuino vs presion externa",
        ]} />

        <h4 style={heading4}>Bloque B: CAT diagnostico (5-7 min)</h4>
        <p style={para}>Formato PAES real + 4 alternativas + opcion &quot;No se&quot; (mide frustration_tolerance). Feedback inmediato tras cada item. Barra de progreso aproximada. Stealth midiendo attention_span, confidence, frustration_tolerance, metacognition.</p>
        <p style={para}>Copy adaptado por ansiedad: si anxiety {">"} 0.50: &quot;Esto NO es un examen. Es solo para saber por donde empezar. No hay nota, no hay presion.&quot;</p>

        <h4 style={heading4}>Resultados</h4>
        <DataTable
          headers={["Condicion", "Contenido"]}
          rows={[
            ["anxiety < 0.50", "Fortalezas (82%, 76%), Oportunidades (31%, 44%), Puntaje estimado, Plan de entrenamiento"],
            ["anxiety >= 0.50", "Fortalezas primero, Oportunidades (sin %) — 'aqui vamos a trabajar juntos', NO puntaje, Plan suave"],
          ]}
        />

        <h4 style={heading4}>Adaptaciones por arquetipo en resultados</h4>
        <DataTable
          headers={["Arquetipo", "Adaptacion"]}
          rows={[
            ["Valentina", "Calibracion rapida a items dificiles. Datos duros."],
            ["Matias", "Frame exploratorio. Sin temporizador."],
            ["Benjamin", "Gamificado: 'Primera Mision completada. +50 XP. Tu tipo: El Sprinter.'"],
            ["Isidora", "Fortalezas primero. NUNCA puntaje si anxiety >0.50."],
            ["Diego", "Micro-sesion competitiva. 'Diagnostico en 5 min. Record.'"],
            ["Francisca", "Variedad visual, cambios de ritmo. Max 6-7 min."],
            ["Joaquin", "COMPASS mini incluido: 'Que te gustaria estudiar?'"],
            ["Camila", "Indicar consumo datos. Modo offline disponible."],
            ["Andres", "Ultra-rapido. 'Diagnostico express. 3 min.'"],
            ["Martina", "Modo suave. Sin presion. 'Solo revision ligera.'"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>6.2 Dashboard</h3>
        <h4 style={heading4}>Elementos permanentes</h4>
        <BulletList items={[
          "Header: Nombre, Streak (Racha: X dias), Countdown PAES (Faltan Y dias)",
          "Radar de 5 dimensiones: Academica, Emocional, Conductual, Social, Vocacional con indicador verde/amarillo/rojo",
          "Mastery por materia: Barra de progreso expandible a topicos",
          "Plan del dia: materia foco, N preguntas, Y minutos + CTA 'Empezar sesion'",
        ]} />

        <h4 style={heading4}>Mensajes contextuales</h4>
        <DataTable
          headers={["Momento", "Mensaje"]}
          rows={[
            ["Post-onboarding", "Tu perfil esta calibrado. Cada sesion lo hace mas preciso. En 7 dias vas a ver tu primera tendencia."],
            ["Post semana 1 (3+ sesiones)", "Primera semana completa. Tu mastery en [materia] subio [X]%. A este ritmo, en un mes vas a estar en [Y]%."],
            ["Post semana 1 (<3 sesiones)", "Esta semana hiciste [N] sesiones. No pasa nada — cada sesion cuenta."],
            ["Streak en riesgo (1 dia)", "Tu racha es de [X] dias. Una sesion corta (5 min) la mantiene viva."],
            ["Streak perdida", "Tu racha anterior fue de [X] dias. Nada mal. La nueva empieza cuando quieras."],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>6.3 Sesion de practica</h3>
        <h4 style={heading4}>Pre-sesion</h4>
        <p style={para}>Check-in emocional (5 seg): &quot;Como llegas hoy?&quot; Si estado negativo: &quot;Hoy la sesion va a ser mas liviana.&quot; Opcion de respiracion 4-4-6 (2 min). Si positivo: &quot;Vamos a aprovechar la energia.&quot;</p>

        <h4 style={heading4}>Durante sesion (feedback inmediato)</h4>
        <DataTable
          headers={["Situacion", "Mensaje"]}
          rows={[
            ["Correcto", "Correcto. Dominas [KC]. / Tu accuracy en [KC] ya esta en [X]%."],
            ["Incorrecto", "Trampa comun. La clave esta en [explicacion]. / El 68% la responde mal la primera vez."],
            ["2+ errores consecutivos", "Los errores activan circuitos neuronales que fortalecen el aprendizaje. Estas mejorando ahora."],
            ["Desatencion detectada", "Tomemos 30 segundos. Respira. / Quieres continuar o retomar despues?"],
          ]}
        />

        <h4 style={heading4}>Post-sesion (por persona comunicacional)</h4>
        <DataTable
          headers={["Persona", "Arquetipos", "Mensaje tipo"]}
          rows={[
            ["Catalina (pragmatica)", "Valentina, Camila, Andres", "Sesion solida. Tu accuracy en [KC] subio a [X]%. Manana trabajamos [proximo KC]."],
            ["Tomas (empatico)", "Matias, Isidora, Martina, Joaquin", "Bien hecho. Cada sesion te acerca. No importa si algunas preguntas fueron dificiles."],
            ["Martin (energico)", "Benjamin, Diego, Francisca, Tomas", "Mision completada. +[X] XP. Tu racha sigue. Manana vas por [proximo desafio]."],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>6.4 Simulacro</h3>
        <DataTable
          headers={["Nivel", "Items", "Descripcion"]}
          rows={[
            ["Nivel 1 (sin presion)", "10", "Para calibrar. No tiene nota ni timer. Solo responde lo que puedas."],
            ["Nivel 2 (tiempo generoso)", "20", "2 min por pregunta — mas de lo real. Paso intermedio."],
            ["Nivel 3 (tiempo real)", "30", "1.5 min por pregunta. Se parece a la PAES real. Respiracion previa si anxiety >0.50."],
            ["Nivel 4 (PAES completo)", "65", "150 minutos. Condiciones reales. Ya hiciste el trabajo — ahora es ponerlo a prueba."],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>6.5 Protocolo de crisis (mensajes KAZE)</h3>
        <DataTable
          headers={["Nivel", "Trigger", "Accion"]}
          rows={[
            [<span key="n1">{badge("Nivel 1", "#F39C12")} Alerta temprana</span>, "emotional_state 0.30-0.39, 2 sesiones / anxiety 0.60-0.70", "Mensaje validacion + ajustar sesion + respiracion 4-4-6"],
            [<span key="n2">{badge("Nivel 2", "#E74C3C")} Intervencion activa</span>, "emotional_state < 0.30, 3+ sesiones / burnout 0.60-0.74", "Circuit breaker + actividad restaurativa + repasar lo dominado"],
            [<span key="n3">{badge("Nivel 3", "#ff0000")} Crisis</span>, "emotional_state < 0.15, 3+ dias", "Contencion emocional + derivacion profesional + lineas de ayuda"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>6.6 Push notifications por arquetipo</h3>
        <DataTable
          headers={["Arquetipo", "Frecuencia", "Tono", "Ejemplo"]}
          rows={[
            ["Valentina", "1/dia", "Directo, data", "Tu accuracy en [KC] esta en 73%. Una sesion para llevarlo a 80%."],
            ["Matias", "1/dia max", "Empatico", "Tu sesion esta lista cuando quieras. Sin prisa."],
            ["Benjamin", "2/dia", "Gamificado", "Mision del dia: 5 preguntas. +30 XP si accuracy >70%."],
            ["Isidora", "1/dia, silenciable", "Suave", "Hoy practicamos [KC donde va bien]. Reforzar lo bueno tambien es entrenar."],
            ["Diego", "1/dia, flexible", "Competitivo", "5 min. Una ronda rapida. Puedes?"],
            ["Francisca", "2/dia, variado", "Energico", "Mision flash: 3 preguntas. 2 minutos. Vamos."],
            ["Martina", "1 cada 2 dias", "Protector", "Solo si te sientes con energia. Tu bienestar primero."],
            ["Joaquin", "1/dia + COMPASS", "Motivacional", "Ingenieria Comercial necesita 620 en M1. Hoy acercas 3 puntos."],
            ["Camila", "1/dia", "Celebratorio", "Sesion #[N]. Tu consistencia es tu superpoder."],
            ["Andres", "1/dia, laboral", "Ultra-breve", "3 min en tu break. Una ronda rapida de [materia]."],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>6.7 Errores de copy que Renddi NUNCA debe cometer</h3>
        <DataTable
          headers={["Error", "Por que es danino", "Que hacer en vez"]}
          rows={[
            ["'Te extrañamos!'", "Manipulacion emocional", "'Tu plan sigue aqui cuando quieras'"],
            ["'Estas perdiendo puntos!'", "Genera ansiedad", "'Tu mastery esta estable. Una sesion lo mueve'"],
            ["'Solo quedan X dias!'", "Urgencia falsa", "Solo <30 dias, tono de empoderamiento"],
            ["'Eres mejor que el 80%!'", "Comparacion social destructiva", "'Tu mastery en [KC] subio X%' (vs uno mismo)"],
            ["'No te rindas!'", "Asume rendicion", "'Cada sesion cuenta. A tu ritmo'"],
            ["Emojis excesivos", "Infantiliza", "Maximo 1 emoji por push"],
            ["'Error! Respuesta incorrecta'", "Frame negativo", "'Esta pregunta tiene trampa. La clave...'"],
            ["Comparar con otros", "Ansiedad + competencia toxica", "Comparar con rendimiento propio anterior"],
          ]}
        />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   SECTION 7: Metricas
   ═══════════════════════════════════════════ */
function SecMetricas() {
  return (
    <>
      <h2 style={heading2}>7. Metricas</h2>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>7.1 North Star Metric: delta_theta / semana</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
          <StatCard label="North Star" value="+0.015" sub="delta_theta/semana target" />
          <StatCard label="Equivalente" value="8-14 pts" sub="PAES por mes" color="#4CAF50" />
        </div>
        <p style={para}>Mide valor real entregado (si theta sube, el estudiante mejora), es accionable, correlaciona con retention y revenue, y es leading (no espera noviembre).</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>7.2 Metricas de producto (Nivel 2)</h3>
        <DataTable
          headers={["Metrica", "Target mes 1", "Target mes 3"]}
          rows={[
            ["Aha moment rate", ">60%", ">70%"],
            ["D7 retention", ">35%", ">40%"],
            ["D30 retention", ">20%", ">25%"],
            ["Sesiones/semana por activo", ">3", ">4"],
            ["Accuracy promedio", "60-70%", "65-70%"],
            ["Streak promedio (activos)", ">5 dias", ">7 dias"],
            ["Tiempo a aha moment", "<3 min", "<3 min"],
            ["Tasa completacion onboarding", ">85%", ">90%"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>7.3 Metricas de negocio (Nivel 3)</h3>
        <DataTable
          headers={["Metrica", "Target mes 1", "Target mes 3", "Target mes 12"]}
          rows={[
            ["MAU", "200", "1,500", "15,000"],
            ["DAU/MAU ratio", ">30%", ">40%", ">40%"],
            ["Free -> Premium conversion", ">15%", ">20%", ">20%"],
            ["Churn mensual", "<10%", "<8%", "<8%"],
            ["Revenue CLP", "$210K", "$1.75M", "$21M"],
            ["CAC", "<$3K CLP", "<$5K CLP", "<$5K CLP"],
            ["LTV", ">$35K CLP", ">$42K CLP", ">$42K CLP"],
            ["LTV/CAC", ">11x", ">8x", ">8x"],
            ["Costo IA/premium", "<$0.25 USD", "<$0.25 USD", "<$0.25 USD"],
            ["Viral coefficient (K)", ">0.3", ">0.5", ">0.7"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>7.4 Metricas por arquetipo</h3>
        <DataTable
          headers={["Arquetipo", "D7 target", "Sesiones/sem", "Accuracy", "Metrica diferenciadora"]}
          rows={[
            ["Valentina", ">50%", "6-7", "55-65%", "delta_theta en KCs dificiles (p80+)"],
            ["Matias", ">35%", "4-5", "70%+", "Reduccion anxiety semana a semana"],
            ["Camila", ">40%", "5-6", "65-75%", "Consistency rate"],
            ["Benjamin", ">25%", "5-7 (micro)", "60-70%", "Session starts (que abra)"],
            ["Isidora", ">40%", "5-6", "65-75%", "emotional_state trending up"],
            ["Diego", ">30%", "5-6 (micro)", "65-75%", "Sesiones <5 min completadas"],
            ["Francisca", ">25%", "5-7 (micro)", "65-75%", "Variedad de KCs tocados"],
            ["Tomas", ">35%", "4-5", "65-75%", "Social engagement"],
            ["Martina", ">30%", "3-4", "80%+ (facil)", "fatigue down, emotional_state up"],
            ["Joaquin", ">20%", "3-5 (micro)", "75%+", "Cualquier sesion = exito"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>7.5 Funnel de conversion</h3>
        {[
          { from: "Visita landing", to: "Diagnostico iniciado", target: ">40%" },
          { from: "Diagnostico iniciado", to: "Diagnostico completado", target: ">85%" },
          { from: "Diagnostico completado", to: "App download", target: ">50%" },
          { from: "App download", to: "Registro completado", target: ">80%" },
          { from: "Registro", to: "Onboarding completado", target: ">85%" },
          { from: "Onboarding", to: "Aha moment (<3 min)", target: ">60%" },
          { from: "Aha moment", to: "Sesion 2 (D1)", target: ">50%" },
          { from: "D1 activo", to: "D7 activo", target: ">35%" },
          { from: "D7 activo", to: "D30 activo", target: ">60% (de D7)" },
          { from: "D30 activo", to: "Trial premium", target: ">30%" },
          { from: "Trial", to: "Paid", target: ">50%" },
          { from: "Paid", to: "Retained M2", target: ">90%" },
        ].map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: i < 11 ? "1px solid #1a1a2e" : "none" }}>
            <span style={{ fontSize: 12, color: "#888", minWidth: 180 }}>{step.from}</span>
            <span style={{ color: "#F39C12" }}>&#8594;</span>
            <span style={{ fontSize: 12, color: "#e0e0e0", flex: 1 }}>{step.to}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#4CAF50" }}>{step.target}</span>
          </div>
        ))}
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>7.6 Alertas y thresholds</h3>
        <DataTable
          headers={["Alerta", "Trigger", "Accion"]}
          rows={[
            ["Aha moment degradado", "Tasa <50%", "Revisar flujo diagnostico, CAT mal calibrado"],
            ["Retencion en picada", "D7 <25%", "Revisar onboarding, push timing, primera experiencia"],
            ["Accuracy demasiado baja", "<50% promedio", "IRT selecciona muy dificil — recalibrar"],
            ["Accuracy demasiado alta", ">85% promedio", "Items demasiado faciles — no hay aprendizaje"],
            ["Churn spike", ">15% mensual", "Analizar cohorte por arquetipo, buscar patron"],
            ["Costo IA escalando", ">$0.50/premium", "Optimizar modelo (Sonnet -> Haiku)"],
            ["Onboarding drop-off", "<75% completacion", "Simplificar bloques, reducir items"],
            ["IRT convergencia lenta", "SEM >0.30 tras 12 items", "Revisar items ancla, parametros a y b"],
          ]}
        />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   SECTION 8: Roadmap
   ═══════════════════════════════════════════ */
function SecRoadmap() {
  return (
    <>
      <h2 style={heading2}>8. Roadmap Integrado</h2>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>8.1 MVP (lanzamiento 1 abril 2026)</h3>
        <h4 style={heading4}>Features P0</h4>
        <DataTable
          headers={["Feature", "Proyecto", "Arquetipo beneficiado"]}
          rows={[
            [<span key="f">{badge("P0")} Diagnostico CAT IRT 2PL ({"<"}3 min)</span>, "dojo + miyagi-do", "Todos"],
            [<span key="f2">{badge("P0")} Practica adaptativa diaria</span>, "dojo + miyagi-do", "Todos"],
            [<span key="f3">{badge("P0")} Dashboard con mastery radar</span>, "dojo", "Todos"],
            [<span key="f4">{badge("P0")} Coaching IA texto (Sonnet)</span>, "miyagi-do", "Matias, Isidora, Martina"],
            [<span key="f5">{badge("P0")} Streaks guilt-free</span>, "dojo", "Benjamin, Diego"],
            [<span key="f6">{badge("P0")} Simulacro basico (30 items + timer)</span>, "dojo + miyagi-do", "Valentina, Joaquin"],
            [<span key="f7">{badge("P0")} Paywall + RevenueCat</span>, "dojo + miyagi-do", "N/A (monetizacion)"],
            [<span key="f8">{badge("P0")} Landing page</span>, "bonsai", "Padres"],
            [<span key="f9">{badge("P0")} Push notifications</span>, "dojo", "Todos"],
          ]}
        />

        <h4 style={heading4}>Lo que NO es negociable para launch</h4>
        <BulletList items={[
          "CAT diagnostico convergente (SEM <= 0.30 en 8 items)",
          "Al menos 2 asignaturas con items calibrados",
          "Paywall funcional con RevenueCat",
          "Onboarding completo con aha moment en <3 min",
        ]} />

        <h4 style={heading4}>Arquetipos activos en MVP (3 perfiles base)</h4>
        <DataTable
          headers={["Perfil MVP", "Arquetipos que agrupa", "Agentes activos", "Experiencia"]}
          rows={[
            [<span key="e">{badge("Esforzado", "#4CAF50")}</span>, "Valentina, Camila", "SENPAI, KAIZEN basico", "Practica directa, datos, 15-20 min"],
            [<span key="em">{badge("Emocional", "#3498DB")}</span>, "Matias, Isidora, Martina", "SENPAI, KAZE texto, KAIZEN", "Coaching antes de practica, fortalezas primero, 10-15 min"],
            [<span key="g">{badge("Gamificado", "#9B59B6")}</span>, "Benjamin, Diego", "SENPAI, KAIZEN basico", "XP y misiones, sesiones 5-7 min, micro-logros"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>8.2 Semana a semana del MVP</h3>
        <DataTable
          headers={["Semana", "Backend (miyagi-do)", "Frontend (dojo)", "Entregable"]}
          rows={[
            ["S1 (17-21 feb)", "Schema base + Edge Functions auth", "Scaffold Expo + login", "DB poblada, app compila y autentica"],
            ["S2 (24-28 feb)", "select-question (IRT), evaluate-response (BKT)", "Flujo diagnostico CAT completo", "Diagnostico end-to-end, theta converge"],
            ["S3 (3-7 mar)", "coaching-message, streak-engine, push triggers", "Dashboard radar, practica diaria, streaks UI", "Sesion diaria completa"],
            ["S4 (10-14 mar)", "simulacro-engine, RevenueCat webhook", "Simulacro UI, paywall 3 tiers, push", "Simulacro jugable, paywall funcional"],
            ["S5 (17-21 mar)", "Optimizacion: caching, rate limiting, logging", "QA 12 arquetipos x flujos. Performance", "Release candidate. 0 bugs P0"],
            ["S6 (24-28 mar)", "Monitoreo: Sentry, PostHog, costos IA", "Submit App Store (dia 26). Testflight beta", "App aprobada. Lanzamiento 1 abril"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>8.3 V1 (abril-junio 2026)</h3>
        <DataTable
          headers={["Semana", "Feature", "Arquetipo activado"]}
          rows={[
            ["Abr 1-7", "Monitoreo, hotfixes, onboarding primeros usuarios", "—"],
            ["Abr 8-14", "PostHog + Sentry (analytics)", "—"],
            ["Abr 15-21", "Social login + coaching emocional KAZE", "Matias, Isidora"],
            ["Abr 22-30", "PAES Pack pricing + scroll basico", "—"],
            ["May 1-15", "COMPASS basico (explorar carreras)", "Joaquin, Diego"],
            ["May 15-31", "Reclasificacion quincenal a 12 arquetipos", "Todos"],
            ["Jun 1-15", "Diferenciacion 5 tipos de error", "Joaquin (retaker)"],
            ["Jun 15-30", "WhatsApp share (card diagnostico)", "Martin, Benjamin"],
          ]}
        />
        <h4 style={heading4}>Metricas V1 (target fin junio)</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <StatCard label="MAU" value="1,500" sub="target" color="#3498DB" />
          <StatCard label="Suscriptores" value="250" sub="target" color="#4CAF50" />
          <StatCard label="D7 retention" value=">40%" sub="target" />
          <StatCard label="Viral K" value=">0.3" sub="target" color="#9B59B6" />
        </div>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>8.4 V2 (julio-noviembre 2026 — PAES season)</h3>
        <DataTable
          headers={["Mes", "Feature", "Impacto"]}
          rows={[
            ["Jul", "NAKAMA (grupos de estudio, matching)", "social_support +, engagement +"],
            ["Jul", "Dashboard padres (OKINAWA basico)", "Revenue via padres, retencion"],
            ["Ago", "Simulacros PAES completos (65 items)", "anxiety -, confidence +, prediccion"],
            ["Ago", "Ejercicios ansiedad guiados", "anxiety -, stress -"],
            ["Sep", "Generacion infinita preguntas IA", "Contenido sin limite"],
            ["Sep", "COMPASS calculadora carrera", "vocational_clarity +, motivation +"],
            ["Oct", "Modo offline (Javiera)", "Cobertura rural"],
            ["Oct", "Deteccion senales riesgo (KOKORO)", "Seguridad estudiante"],
            ["Nov", "Protocolo pre-PAES", "anxiety -, confidence +"],
          ]}
        />
        <h4 style={heading4}>Metricas V2 (target fin noviembre)</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <StatCard label="MAU" value="15,000" sub="target" color="#3498DB" />
          <StatCard label="Revenue mensual" value="$21M" sub="CLP" color="#4CAF50" />
          <StatCard label="Churn" value="<8%" sub="mensual" color="#E74C3C" />
          <StatCard label="NPS" value=">50" sub="target" color="#9B59B6" />
        </div>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>8.5 Horizonte V3 (2027)</h3>
        <DataTable
          headers={["Iniciativa", "Descripcion", "Impacto"]}
          rows={[
            ["Internacionalizacion", "Adaptar motor a ENEM (Brasil), Selectividad (Espana), SAT (LATAM)", "TAM x10"],
            ["Plan Colegio", "Dashboard institucional, bulk licensing, reportes por curso", "Revenue B2B"],
            ["API para terceros", "Motor adaptativo como servicio para otras EdTech", "Revenue API"],
            ["Peer tutoring", "Estudiantes avanzados ayudan a principiantes (mediado por IA)", "Engagement, retention"],
            ["Contenido propio", "Explicaciones integradas (el preu dentro de Renddi)", "Expansion de value prop"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>8.6 Impacto features por arquetipo</h3>
        <DataTable
          headers={["Feature", "Valentina", "Matias", "Camila", "Benjamin", "Isidora", "Diego", "Francisca", "Tomas", "Martina", "Joaquin"]}
          rows={[
            ["CAT diagnostico", "Alto", "Medio", "Alto", "Bajo", "Medio", "Medio", "Bajo", "Medio", "Bajo", "Alto"],
            ["Practica adaptativa", "Alto", "Alto", "Alto", "Medio", "Alto", "Medio", "Medio", "Alto", "Bajo", "Alto"],
            ["Coaching KAZE", "Bajo", "Critico", "Medio", "Bajo", "Critico", "Bajo", "Medio", "Bajo", "Critico", "Medio"],
            ["Streaks", "Medio", "Medio", "Alto", "Critico", "Bajo", "Critico", "Critico", "Medio", "Bajo", "Medio"],
            ["Simulacros", "Critico", "Alto", "Alto", "Bajo", "Alto", "Bajo", "Bajo", "Alto", "Bajo", "Medio"],
            ["COMPASS", "Bajo", "Medio", "Alto", "Bajo", "Medio", "Critico", "Medio", "Bajo", "Bajo", "Critico"],
            ["NAKAMA", "Bajo", "Medio", "Alto", "Medio", "Bajo", "Medio", "Medio", "Critico", "Bajo", "Medio"],
            ["Dashboard padres", "Bajo", "Medio", "Medio", "Medio", "Alto", "Bajo", "Medio", "Bajo", "Alto", "Medio"],
            ["Modo offline", "Bajo", "Bajo", "Critico", "Bajo", "Bajo", "Bajo", "Bajo", "Bajo", "Bajo", "Bajo"],
          ]}
        />
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>8.7 Plan de contingencia</h3>

        <h4 style={heading4}>Contingencia 1: Launch se retrasa 2+ semanas</h4>
        <p style={para}>Trigger: Dependencia bloqueante no resuelta para semana 5. Acciones: cortar COMPASS, reducir a 2 arquetipos, simplificar simulacro, NO degradar CAT ni aha moment.</p>

        <h4 style={heading4}>Contingencia 2: D7 retention {"<"} 20%</h4>
        <p style={para}>Trigger: Cohorte de 100 usuarios muestra D7 {"<"} 20%. Acciones: pivotear onboarding, insight mas impactante, A/B test, pausar features V1 hasta resolver.</p>

        <h4 style={heading4}>Contingencia 3: Conversion {"<"} 5%</h4>
        <p style={para}>Trigger: Menos del 5% convierte en semana 3. Acciones: eliminar paywall temporal (30 dias freemium), testear $4.990, mover paywall a sesion 6-7.</p>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   SECTION 9: Riesgos
   ═══════════════════════════════════════════ */
function SecRiesgos() {
  return (
    <>
      <h2 style={heading2}>9. Analisis de Riesgos</h2>

      {[
        {
          id: "R1",
          title: "Regulatorio — Datos de menores",
          prob: "Media-alta",
          impacto: "Critico",
          desc: "Renddi procesa datos de menores de edad (14-17 anos). Ley 21.430 (Garantias Ninez) y Ley 21.719 (Proteccion Datos Personales) imponen obligaciones estrictas.",
          mitigaciones: [
            "Consentimiento parental verificable en registro para menores de 18",
            "Politica de privacidad especifica para menores publicada antes de launch",
            "Minimizacion de datos: solo lo estrictamente necesario",
            "No compartir datos con terceros (excepto Supabase, OpenRouter)",
            "Derecho a eliminacion completa desde dia 1",
            "Revision legal pre-launch por abogado especialista",
            "Sin publicidad dirigida a menores",
          ],
          resp: "Fer (legal) + Dioni (tecnico)",
        },
        {
          id: "R2",
          title: "Contenido — Banco de items insuficiente",
          prob: "Media",
          impacto: "Critico",
          desc: "CAT IRT 2PL requiere minimo 200 items calibrados por materia para converger. Sin items, diagnostico no funciona y aha moment se pierde.",
          mitigaciones: [
            "Priorizar 2 asignaturas ancla (M1, CLEE) con banco completo",
            "Curar items DEMRE publicos como base",
            "Calibracion con piloto de 20-30 beta testers",
            "Generacion IA como backup (Sonnet genera, humano valida)",
          ],
          resp: "Fer (pipeline) + Dioni (validacion IRT)",
        },
        {
          id: "R3",
          title: "Reputacional — Estudiante empeora con Renddi",
          prob: "Baja-media",
          impacto: "Alto",
          desc: "Simulaciones muestran que Isidora (-9.1 pts) y Valentina (-0.6 pts) pueden tener delta negativo. Un caso publico en TikTok/RRSS danaria la marca.",
          mitigaciones: [
            "NUNCA prometer puntajes especificos",
            "Disclaimer visible: 'complemento de entrenamiento'",
            "Respuesta empatica si caso publico, no defensiva",
            "Si patron sistematico: pausar marketing y revisar modelo",
          ],
          resp: "Alejo (comunicaciones) + Fer (analisis)",
        },
        {
          id: "R4",
          title: "Dependencia — OpenRouter/Anthropic como proveedor IA",
          prob: "Baja",
          impacto: "Alto",
          desc: "Coaching KAZE depende de Sonnet via OpenRouter. Si cae o sube precios, el servicio se degrada.",
          mitigaciones: [
            "Fallback: mensajes coaching pre-generados (templates)",
            "Arquitectura multi-provider (Gemini Flash, GPT-4o)",
            "Interfaz generica, proveedor intercambiable",
            "Cache de respuestas frecuentes",
            "Si costo >$0.50/alumno: migrar a Haiku/Gemini Flash",
            "Nunca comprometer mas del 15% del revenue en costos IA",
          ],
          resp: "Dioni (arquitectura) + Fer (costos)",
        },
        {
          id: "R5",
          title: "Estacionalidad — 70% revenue concentrado julio-noviembre",
          prob: "Alta",
          impacto: "Medio",
          desc: "Temporada PAES concentra demanda en 5 meses. Diciembre-junio es temporada baja.",
          mitigaciones: [
            "PAES invierno (junio-julio): ~50K inscritos",
            "3ro medio (marzo-noviembre): 'Empieza un ano antes'",
            "Contenido evergreen: calculadora, orientacion, habitos",
            "B2B colegios: cobro anual, no estacional",
            "Retakers tempranos: enero-febrero",
            "Internacionalizacion (V3): ENEM noviembre, Selectividad junio",
          ],
          resp: "Fer (estrategia) + Alejo (campanas)",
        },
        {
          id: "R6",
          title: "Competencia — Entrada de Duolingo al mercado chileno",
          prob: "Baja-media (2-3 anos)",
          impacto: "Alto",
          desc: "Duolingo Math/STEM podria expandir a pruebas estandarizadas LATAM con 500M+ usuarios y marketing masivo.",
          mitigaciones: [
            "12-18 meses de ventaja para construir marca y base",
            "Especializacion PAES-first gana en nicho",
            "Datos locales: taxonomia DEMRE, items poblacion chilena",
            "Moat de integracion: grafo + coaching + arquetipos",
            "Posicionamiento complementario: 'Duolingo ensena. Renddi entrena para rendir.'",
            "B2B como defensa: relaciones colegios dificiles de replicar",
          ],
          resp: "Fer (inteligencia competitiva)",
        },
      ].map((r) => (
        <div key={r.id} style={card}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "50%", background: "#E74C3C15", border: "1px solid #E74C3C33", fontSize: 12, fontWeight: 700, color: "#E74C3C", flexShrink: 0 }}>{r.id}</span>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#e0e0e0" }}>{r.title}</h3>
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            {badge(`Prob: ${r.prob}`, r.prob.includes("Alta") ? "#E74C3C" : "#F39C12")}
            {badge(`Impacto: ${r.impacto}`, r.impacto === "Critico" ? "#E74C3C" : "#F39C12")}
          </div>
          <p style={para}>{r.desc}</p>
          <h4 style={{ ...heading4, marginTop: 12 }}>Mitigaciones</h4>
          <BulletList items={r.mitigaciones} />
          <p style={{ fontSize: 11, color: "#666", margin: 0 }}>Responsable: {r.resp}</p>
        </div>
      ))}

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>9.1 Banco de Items — Requisitos</h3>
        <DataTable
          headers={["Parametro", "Valor minimo", "Ideal", "Justificacion"]}
          rows={[
            ["Items por materia", "200", "500+", "CAT 2PL necesita variedad de dificultad y discriminacion"],
            ["Rango dificultad (b)", "[-2.5, +2.5]", "[-3.0, +3.0]", "Cubrir 300-850 pts PAES"],
            ["Discriminacion min (a)", ">= 0.5", ">= 0.8", "Items con a < 0.5 no aportan informacion"],
            ["Materias para launch", "2 (M1, CLEE)", "3 (+ Ciencias)", "M1 y CLEE mas rendidas"],
            ["Items con params IRT", "100%", "100%", "Sin calibracion, CAT selecciona al azar"],
          ]}
        />
        <p style={{ ...para, color: "#E74C3C", fontWeight: 600 }}>Criterio go: Sin 200+ items calibrados en al menos 2 materias con SEM {"<="} 0.30, el launch se pospone.</p>
      </div>

      <div style={card}>
        <h3 style={{ ...heading3, marginTop: 0 }}>Criterios Go/No-Go</h3>

        <h4 style={heading4}>MVP -{">"} V1 (decision: ~14 abril)</h4>
        <DataTable
          headers={["Criterio", "Go", "No-go", "Accion si no-go"]}
          rows={[
            ["D1 retention", ">50%", "<30%", "Redisenar onboarding"],
            ["D7 retention", ">25%", "<15%", "Problema fundamental de valor"],
            ["App Store rating", ">3.5", "<3.0", "Hotfix critico"],
            ["Crash rate", "<2%", ">5%", "Estabilizar antes de todo"],
            ["Aha moment tasa", ">50%", "<30%", "CAT roto u onboarding confuso"],
          ]}
        />

        <h4 style={heading4}>V1 -{">"} V2 (decision: fin junio)</h4>
        <DataTable
          headers={["Criterio", "Go", "No-go", "Accion si no-go"]}
          rows={[
            ["MAU", ">800", "<300", "Problema de adquisicion"],
            ["Suscriptores pagos", ">100", "<40", "Problema de conversion"],
            ["D7 retention", ">35%", "<20%", "Producto no retiene"],
            ["Revenue mensual", ">$700K", "<$250K", "Unit economics no cierran"],
            ["Viral K", ">0.15", "<0.05", "Crecimiento organico nulo"],
            ["NPS", ">30", "<10", "Usuarios no recomiendan"],
          ]}
        />

        <h4 style={heading4}>V2 -{">"} V3/Internacionalizacion (decision: diciembre)</h4>
        <DataTable
          headers={["Criterio", "Go", "No-go", "Accion si no-go"]}
          rows={[
            ["Correlacion theta-PAES", "r >0.75", "r <0.50", "Recalibrar grafo completo"],
            ["MAU", ">10,000", "<3,000", "Pivotar a B2B colegios"],
            ["Revenue mensual", ">$15M CLP", "<$5M CLP", "No hay PMF suficiente"],
            ["NPS", ">45", "<25", "No genera evangelistas"],
            ["Churn mensual", "<10%", ">20%", "Leaky bucket, resolver retencion"],
          ]}
        />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════ */
export default function InformeTab() {
  const [activeSection, setActiveSection] = useState<InformeSection>("que-es");

  return (
    <div style={{ display: "flex", gap: 0, minHeight: "70vh" }}>
      {/* ─── Sidebar ─── */}
      <nav
        style={{
          position: "sticky",
          top: 120,
          alignSelf: "flex-start",
          minWidth: 200,
          maxWidth: 220,
          background: "#0d0d14",
          border: "1px solid #1a1a2e",
          borderRadius: 12,
          padding: "8px 0",
          marginRight: 24,
          flexShrink: 0,
        }}
      >
        {INFORME_SECTIONS.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "10px 16px",
              border: "none",
              borderLeft: activeSection === sec.id ? "3px solid #F39C12" : "3px solid transparent",
              background: activeSection === sec.id ? "rgba(243,156,18,0.08)" : "transparent",
              color: activeSection === sec.id ? "#F39C12" : "#888",
              fontSize: 12,
              fontWeight: activeSection === sec.id ? 700 : 500,
              cursor: "pointer",
              textAlign: "left",
              fontFamily: "'Inter', system-ui, sans-serif",
              transition: "all 0.15s",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: activeSection === sec.id ? "#F39C1222" : "#1a1a2e",
                fontSize: 10,
                fontWeight: 700,
                color: activeSection === sec.id ? "#F39C12" : "#666",
                flexShrink: 0,
              }}
            >
              {sec.num}
            </span>
            {sec.label}
          </button>
        ))}
      </nav>

      {/* ─── Content ─── */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#e0e0e0",
              margin: "0 0 8px",
              letterSpacing: "-0.5px",
            }}
          >
            Informe de Producto Exhaustivo
          </h1>
          <p style={{ fontSize: 14, color: "#888", margin: 0 }}>
            Referencia completa — Marzo 2026 — Panel de Producto
          </p>
        </div>

        {activeSection === "que-es" && <SecQueEs />}
        {activeSection === "diferenciacion" && <SecDiferenciacion />}
        {activeSection === "personas" && <SecPersonas />}
        {activeSection === "pricing" && <SecPricing />}
        {activeSection === "web-landing" && <SecWebLanding />}
        {activeSection === "mensajes-app" && <SecMensajesApp />}
        {activeSection === "metricas" && <SecMetricas />}
        {activeSection === "roadmap" && <SecRoadmap />}
        {activeSection === "riesgos" && <SecRiesgos />}
      </div>
    </div>
  );
}
