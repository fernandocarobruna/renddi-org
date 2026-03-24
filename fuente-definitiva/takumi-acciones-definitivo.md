# TAKUMI: Diseno de Acciones de Impacto para Renddi.app
## Tesis Especializada del Equipo de Diseno de Intervenciones
### Basada en el Grafo Causal de 21 Variables y 30 Aristas (Tesis SENSEI v2.0)
### Marzo 2026

---

**Principio TAKUMI:** En la tradicion artesanal japonesa, el *takumi* es el maestro artesano que domina su oficio tras 10.000 horas de practica deliberada. No produce en masa: cada pieza es unica, calibrada al material y al contexto. Este principio guia el diseno de acciones en Renddi: cada intervencion es artesanal, calibrada al perfil unico del estudiante segun su posicion en el grafo causal de 21 variables.

---

# Capitulo 1. Introduccion

## 1.1 Objetivo de esta tesis

Esta tesis tiene un objetivo concreto: disenar el repertorio completo de acciones que Renddi.app puede ejecutar para mejorar el rendimiento de cada estudiante en la PAES. No se trata de disenar acciones genericas ("estudia mas", "duerme mejor"), sino intervenciones especificas, operacionalizadas y vinculadas causalmente a las variables del grafo.

Cada accion disenada en este documento responde a tres preguntas:

1. **Que variable del grafo impacta** — identificada entre las 21 variables formalizadas en el Capitulo 4 de la tesis principal (Caro Bruna et al., 2026).
2. **Por que ruta causal llega a mastery** — utilizando la descomposicion de Wright (1921) y los 30 pesos calibrados con evidencia meta-analitica.
3. **Cual es el efecto esperado** — cuantificado como delta en mastery, traducible a puntos PAES estimados.

El principio rector es que las acciones no se disenan en el vacio: cada una esta anclada a una arista del grafo, a un peso empirico, y a una ruta causal verificada. Esto permite priorizar acciones por impacto esperado y personalizar la secuencia segun el perfil del estudiante.

## 1.2 Conexion con el grafo causal

El grafo causal de SENSEI (Capitulo 4, tesis principal) formaliza 21 variables en 5 dimensiones — academica, emocional, conductual, social y vocacional — conectadas por 30 aristas dirigidas con pesos calibrados desde evidencia meta-analitica. Los pesos se interpretan como coeficientes de path estandarizados (Wright, 1921): un peso w indica que un cambio de una desviacion estandar en la variable origen produce un cambio esperado de w desviaciones estandar en la variable destino.

**Leverage points identificados en la tesis principal:**

| Rango | Variable | Efecto total en mastery | Caminos aciclicos |
|-------|----------|------------------------|-------------------|
| 1 | stress_level | 0.255 | 5 |
| 2 | sleep_quality | 0.199 | 3 |
| 3 | physical_activity | 0.122 | 8 |
| 4 | motivation | 0.105 | 1 |
| 5 | emotional_state | 0.032 | 1 |

Esto significa que las acciones que impactan stress_level, sleep_quality y physical_activity tienen el mayor potencial de mejora en mastery — un hallazgo contraintuitivo que prioriza intervenciones conductuales y emocionales sobre las puramente academicas.

## 1.3 Principios de diseno TAKUMI

Las acciones se disenan siguiendo seis principios:

**Principio 1: Anclaje causal.** Toda accion debe especificar que variable(s) del grafo modifica y por que ruta llega a mastery. Acciones sin anclaje causal no se incluyen.

**Principio 2: Operacionalizacion completa.** Cada accion incluye: objetivo, duracion, formato, frecuencia, criterio de exito, y mecanismo de medicion. No se aceptan descripciones vagas.

**Principio 3: Contextualizacion chilena.** Las acciones se disenan para estudiantes chilenos de 16-19 anos que se preparan para la PAES. Los ejemplos usan contenido PAES real, referentes culturales chilenos, y consideran la realidad socioeconomica del sistema educativo tripartito.

**Principio 4: Gradualidad.** Las acciones se disenan en niveles de dificultad progresiva, respetando la Zona de Desarrollo Proximo (Vygotsky, 1978) y el principio de scaffolding (Wood, Bruner y Ross, 1976).

**Principio 5: Evidencia.** Cada tipo de intervencion se fundamenta en al menos un estudio publicado en revista indexada. Se priorizan intervenciones con respaldo meta-analitico.

**Principio 6: Medibilidad.** Cada accion tiene indicadores de impacto medibles dentro de la plataforma, que alimentan las variables del grafo y permiten evaluar efectividad.

## 1.4 Alcance y estructura

Esta tesis cubre:

- **Capitulo 2:** Marco teorico de las intervenciones basadas en evidencia.
- **Capitulo 3:** Diseno del diagnostico inicial multidimensional.
- **Capitulo 4:** Acciones concretas para cada una de las 21 variables del grafo.
- **Capitulo 5:** Banco de ejercicios y actividades por materia PAES.
- **Capitulo 6:** Sistema de feedback.
- **Capitulo 7:** Gamificacion y engagement.
- **Capitulo 8:** Algoritmo de priorizacion de acciones.
- **Capitulo 9:** Integracion con agentes especialistas.
- **Capitulo 10:** Metricas de impacto.
- **Capitulo 11:** Limitaciones y trabajo futuro.
- **Referencias:** 60+ referencias APA 7 verificables.

---

# Capitulo 2. Marco Teorico de las Intervenciones

## 2.1 Intervenciones basadas en evidencia en educacion

El movimiento de evidence-based interventions en educacion exige que las practicas pedagogicas se fundamenten en investigacion rigurosa, preferentemente meta-analisis y ensayos controlados aleatorizados (Hattie, 2009). El trabajo seminal de Hattie sintetizo mas de 800 meta-analisis y 50.000 estudios, identificando que las intervenciones con tamanos de efecto superiores a d = 0.40 representan mejoras sustanciales. En el contexto de Renddi, este umbral guia la seleccion de acciones: se priorizan intervenciones con evidencia de d >= 0.40 cuando es posible, y se documentan transparentemente los tamanos de efecto menores.

Richardson, Abraham y Bond (2012) condujeron un meta-analisis de 241 conjuntos de datos (N > 50.000 estudiantes) sobre predictores no cognitivos del rendimiento universitario. Sus hallazgos informan directamente el diseno de acciones: la autoeficacia academica (r = 0.31), la autoevaluacion del rendimiento (r = 0.44), y el esfuerzo regulado (r = 0.32) emergieron como los predictores mas fuertes, todos intervenibles.

## 2.2 Diseno instruccional: Merrill y Gagne

**Principios de Merrill (2002).** Los First Principles of Instruction establecen que el aprendizaje se promueve cuando: (a) los aprendices resuelven problemas del mundo real (principio de centracion en la tarea), (b) el conocimiento existente se activa como fundamento (activacion), (c) se demuestra el nuevo conocimiento (demostracion), (d) los aprendices aplican el nuevo conocimiento (aplicacion), y (e) integran lo aprendido en su vida (integracion). En Renddi, cada sesion de practica sigue esta secuencia: activacion de conocimiento previo → demostracion del concepto → practica guiada → practica independiente → reflexion metacognitiva.

**Eventos de instruccion de Gagne (1985).** Los nueve eventos instruccionales — ganar atencion, informar objetivo, estimular recuerdo, presentar contenido, proveer guia, elicitar desempeno, dar feedback, evaluar desempeno, mejorar retencion — estructuran la secuencia micro de cada actividad en la plataforma. La evidencia sobre la efectividad de esta secuencia en e-learning fue sintetizada por Clark y Mayer (2016).

## 2.3 Gamificacion basada en evidencia

Deterding, Dixon, Khaled y Nacke (2011) definieron gamificacion como el uso de elementos de diseno de juegos en contextos no ludicos. El meta-analisis de Sailer y Homner (2020) examino la efectividad de la gamificacion en educacion, encontrando efectos positivos en motivacion y aprendizaje, con tamanos de efecto que varian segun los elementos utilizados. Los puntos, badges y leaderboards (PBL) son los elementos mas comunes, pero la narrativa y las mecanicas de progresion muestran efectos mas sostenidos (Hamari, Koivisto y Sarsa, 2014).

En el contexto de Renddi, la gamificacion no es decorativa sino funcional: cada elemento gamificado esta vinculado a una variable del grafo. Los streaks alimentan study_adherence, los badges de progreso alimentan self_efficacy, y los desafios grupales alimentan social_support.

## 2.4 Spacing effect y practica distribuida

El efecto de espaciamiento, documentado inicialmente por Ebbinghaus (1885) y confirmado por mas de un siglo de investigacion, establece que la practica distribuida produce retencion superior a la practica masiva. El meta-analisis de Cepeda, Pashler, Vul, Wixted y Rohrer (2006) confirmo la robustez del efecto a traves de multiples contextos, tipos de material y rangos de edad. Cepeda, Vul, Rohrer, Wixted y Pashler (2008) demostraron que el intervalo optimo entre sesiones depende del intervalo de retencion deseado: para un examen en 30 dias, el intervalo optimo de estudio es de aproximadamente 1-2 dias; para 365 dias, de 21 dias.

En Renddi, el Free Spaced Repetition Scheduler (FSRS) implementa el spacing effect de manera personalizada, ajustando los intervalos de revision segun la estabilidad y dificultad de cada item para cada estudiante.

## 2.5 Testing effect y retrieval practice

El testing effect — el hallazgo de que recuperar informacion de la memoria es mas efectivo para la retencion que re-estudiarla — es una de las estrategias de aprendizaje con mayor respaldo empirico. Roediger y Butler (2011) sintetizaron la evidencia demostrando que la practica de recuperacion produce beneficios robustos y generalizables. Rowland (2014) condujo un meta-analisis (k = 159 comparaciones) que confirmo un tamano de efecto medio significativo a favor del testing sobre el re-estudio. Agarwal, Nunes y Blundell (2021) documentaron que el retrieval practice beneficia particularmente a estudiantes de bajo rendimiento y bajo nivel socioeconomico, lo que lo convierte en una estrategia con potencial equitativo para el contexto chileno.

En Renddi, cada sesion incorpora retrieval practice como mecanismo central: los estudiantes no re-leen contenido sino que responden preguntas que requieren recuperacion activa.

## 2.6 Practica deliberada

Ericsson, Krampe y Tesch-Romer (1993) formalizaron el concepto de practica deliberada: actividad estructurada con el proposito explicito de mejorar el rendimiento, caracterizada por tareas que estan al limite de la capacidad actual, feedback inmediato, y repeticion con correccion. A diferencia de la practica naive (repetir lo que ya se domina), la practica deliberada se focaliza en debilidades especificas.

En Renddi, el motor adaptativo implementa practica deliberada al seleccionar items que estan en la frontera de conocimiento del estudiante (items con probabilidad de respuesta correcta entre 0.50 y 0.80 segun IRT), proveer feedback inmediato y elaborado, y repetir items fallidos con variaciones.

## 2.7 Scaffolding y Zona de Desarrollo Proximo

Vygotsky (1978) propuso que el aprendizaje optimo ocurre en la Zona de Desarrollo Proximo (ZDP): la distancia entre lo que el estudiante puede hacer solo y lo que puede hacer con ayuda. Wood, Bruner y Ross (1976) formalizaron el scaffolding como el proceso de apoyo temporal que permite al estudiante operar en su ZDP, retirando gradualmente el apoyo a medida que el estudiante gana competencia (fading).

En Renddi, el scaffolding opera en multiples niveles: (a) scaffolding cognitivo — pistas graduadas, worked examples con pasos parcialmente resueltos, y fading progresivo; (b) scaffolding emocional — mensajes de normalizacion de la dificultad, reencuadre de errores como oportunidades; (c) scaffolding metacognitivo — prompts de automonitoreo y planificacion.

## 2.8 Autorregulacion del aprendizaje

Zimmerman (2002) modelo la autorregulacion como un ciclo de tres fases: premeditacion (planificacion, establecimiento de metas, autoeficacia), desempeno (automonitoreo, estrategias, control atencional), y autorreflexion (autoevaluacion, atribuciones, satisfaccion). Pintrich (2000) extendio este modelo enfatizando la interaccion entre motivacion, cognicion y comportamiento.

El meta-analisis de Dignath y Buttner (2008) demostro que los programas de entrenamiento en autorregulacion tienen efectos positivos significativos en el rendimiento academico (d = 0.69 para primaria). En adolescentes, Dent y Koenka (2016) confirmaron que las estrategias metacognitivas predicen rendimiento (r = 0.21 a 0.36).

En Renddi, la autorregulacion se fomenta a traves de: planificacion semanal guiada (variable time_management), monitoreo del progreso visible (variable metacognition), y reflexiones post-sesion que alimentan la autoevaluacion.

---

# Capitulo 3. Diagnostico Inicial Multidimensional

## 3.1 Objetivo del diagnostico

El diagnostico inicial de Renddi tiene un proposito triple: (1) estimar el valor inicial de cada una de las 21 variables del grafo causal, (2) clasificar al estudiante en un perfil arquetipico que guie la priorizacion de acciones, y (3) calibrar la experiencia de onboarding para maximizar la retencion temprana.

El desafio central del diagnostico es la tension entre precision y brevedad. La evidencia de mercado es clara: encuestas de onboarding que superan los 5-7 minutos sufren tasas de abandono del 40-60% en apps moviles (Localytics, 2019). Un diagnostico exhaustivo de 21 variables destruiria la motivacion antes de comenzar. La solucion es un **diagnostico progresivo** en dos fases:

- **Fase 1 — Diagnostico core en onboarding (8-10 minutos):** Medicion directa de las 5 variables de mayor leverage (stress_level, sleep_quality, mastery, anxiety, motivation) + inicializacion de las 16 restantes con priors bayesianos informativos. Objetivo: tasa de completacion >85%.
- **Fase 2 — Stealth assessment diferido (sesiones 1-5):** Refinamiento de las 16 variables restantes mediante observacion conductual embebida en la experiencia de uso, sin preguntas explicitas. Basado en el framework de stealth assessment (Shute, 2011): la evaluacion integrada en la actividad elimina la reactividad del test y mejora la validez ecologica.

Este diseno resuelve la contradiccion entre precision psicometrica (que demanda 17-30 minutos) y retencion de onboarding (que demanda <5-10 minutos). El cold start con priors bayesianos (Sarwar, Karypis, Konstan y Riedl, 2001) permite operar con estimaciones utiles desde el primer minuto, y el stealth assessment diferido converge a la misma precision que un diagnostico exhaustivo en 5 sesiones.

## 3.2 Diagnostico progresivo: diseno en dos fases

El diagnostico se estructura en dos fases temporalmente separadas, siguiendo el principio de progressive disclosure (Nielsen, 1994) aplicado a la evaluacion psicometrica.

### 3.2.1 Fase 1 — Diagnostico core en onboarding (8-10 minutos)

Se miden directamente las **5 variables de mayor leverage** sobre mastery (seleccionadas por su efecto total en el grafo causal, Seccion 4.6.3) mas el CAT academico reducido. Las 16 variables restantes se inicializan con priors bayesianos.

**Criterio de seleccion de las 5 variables core:** Se seleccionaron las variables con mayor efecto total sobre mastery y mayor accionabilidad inmediata. El analisis del grafo causal (ver Capitulo 4) identifica que stress_level, sleep_quality, anxiety, motivation y mastery concentran >65% de la varianza explicada de rendimiento, y son las que mas informacion aportan para la clasificacion inicial de perfiles.

#### Bloque A — Contexto y bienestar (90 segundos)

**stress_level (v10).** 2 items del Perceived Stress Scale ultra-breve (PSS; Cohen, Kamarck y Mermelstein, 1983): "En el ultimo mes, con que frecuencia te has sentido estresado/a?" y "Con que frecuencia has sentido que no puedes controlar las cosas importantes de tu vida?"
*Formato:* 2 items Likert de 5 puntos. *Duracion:* 30 seg. *Validacion:* PSS tiene validacion transcultural extensiva (Lee, 2012).

**sleep_quality (v13).** 3 items derivados del PSQI (Buysse et al., 1989): hora de acostarse, hora de levantarse (dias de semana), calidad subjetiva.
*Formato:* 2 selectores de hora + 1 item Likert. *Duracion:* 30 seg.

**anxiety (v5).** 2 items adaptados de Spielberger (1980) version ultra-breve: "Cuanto te preocupa tu resultado en la PAES?" y "Sientes nervios cuando piensas en la PAES?" Se reduce de 4+1 items a 2 items para mantener el presupuesto temporal.
*Formato:* 2 items Likert de 5 puntos. *Duracion:* 20 seg.

**motivation (v20).** 2 items que cubren los extremos del continuo SDT (Deci y Ryan, 2000): "Quiero prepararme para la PAES porque me interesa aprender" (intrinseca) y "...porque mis padres me lo exigen" (externa). El tercer item (identificada) se difiere a la Fase 2.
*Formato:* 2 items Likert de 5 puntos. *Duracion:* 20 seg.

#### Bloque B — CAT academico reducido (5-7 minutos)

**mastery (v1).** CAT adaptativo reducido basado en IRT 2PL con criterio de parada por precision (SEM <= 0.30) en lugar de items fijos. Converge en **8-12 items por materia** (vs 15-25 del CAT completo). La precision reducida (SEM 0.30 vs 0.15) es suficiente para clasificacion de perfil inicial y se refina en sesiones posteriores.

*Formato:* Items de seleccion multiple formato PAES (4 alternativas).
*Duracion:* 5-7 minutos (1 materia). Si el estudiante selecciono 2+ materias, solo se evalua la materia principal en onboarding; las restantes se evaluan en sesiones 2-3.
*Fundamentacion:* Los CAT reducidos con SEM relajado mantienen correlaciones >0.85 con versiones completas (Weiss y Kingsbury, 1984). La precision de clasificacion de perfiles no requiere SEM < 0.15.

**Mediciones pasivas embebidas en el CAT (sin costo temporal):**
- `attention_span` (v2): degradacion de rendimiento intra-sesion (correlacion orden-tiempo ajustado por dificultad)
- `confidence` (v6): calibracion confianza-rendimiento (se pide confianza cada 4 items, 3 seg por pregunta)
- `frustration_tolerance` (v9): persistencia ante items dificiles (tasa de abandono, tiempo de permanencia)
- `metacognition` (v3): patron de revision de respuestas y uso de ayudas

#### Bloque C — Check-in emocional de cierre (10 segundos)

**emotional_state (v7).** Selector visual de 5 estados emocionales (version simplificada del circumplejo de Russell): "Como te sentiste con estos desafios?"
*Formato:* 5 emojis Renddi (muy mal / mal / normal / bien / muy bien).

#### Resumen temporal Fase 1

| Componente | Duracion |
|-----------|----------|
| Bienvenida + contexto (pantallas 1-3 de onboarding) | 30 seg |
| Bloque A: stress, sleep, anxiety, motivation | 90 seg |
| Bloque B: CAT reducido (1 materia) + stealth assessment | 300-420 seg |
| Bloque C: check-in emocional | 10 seg |
| **Total Fase 1** | **~8-10 min** |

### 3.2.2 Fase 2 — Stealth assessment diferido (sesiones 1-5)

Las 16 variables no medidas directamente en Fase 1 se inicializan con **priors bayesianos informativos** y se refinan mediante observacion conductual durante las primeras 5 sesiones de uso. Este enfoque se fundamenta en tres lineas de investigacion:

1. **Stealth assessment** (Shute, 2011; Shute y Ventura, 2013): evaluacion embebida en la actividad que elimina la reactividad del test. El estudiante no percibe que esta siendo evaluado, lo que reduce ansiedad y aumenta validez ecologica.

2. **Cold start con priors bayesianos** (Sarwar et al., 2001; Thai-Nghe, Drumond, Krohn-Grimberghe y Schmidt-Thieme, 2010): las distribuciones iniciales se construyen a partir de (a) correlaciones conocidas entre variables del grafo, (b) demograficos basicos (curso, materia), y (c) baselines poblacionales de adolescentes chilenos.

3. **CAT continuado** (van der Linden y Glas, 2010): el CAT academico no se "cierra" en el onboarding. Cada ejercicio adaptativo en sesiones posteriores aporta informacion incremental a theta, reduciendo el SEM de 0.30 a <0.15 en ~20 items adicionales.

#### Tabla de priors e indicadores de refinamiento para las 16 variables diferidas

| Variable | Prior inicial | Indicadores de stealth assessment (sesiones 1-5) |
|----------|--------------|--------------------------------------------------|
| attention_span (v2) | Parcial de Fase 1 | Degradacion rendimiento intra-sesion, patron de pausas |
| metacognition (v3) | Parcial de Fase 1 | Revision de respuestas, uso estrategico de ayudas, autoevaluacion |
| cognitive_load (v4) | Prior por nivel mastery | Tiempo de respuesta vs dificultad, tasa de error en items nuevos |
| confidence (v6) | Parcial de Fase 1 | Calibracion confianza-precision acumulada |
| self_efficacy (v8) | Beta(3, 3) centrado en 0.5 | Persistencia post-error, eleccion de dificultad, mensajes en chat |
| frustration_tolerance (v9) | Parcial de Fase 1 | Comportamiento ante rachas de errores, uso de "saltar" |
| study_adherence (v11) | Beta(2, 2) | Dias activos / dias transcurridos, completacion de sesiones |
| time_management (v12) | Beta(2, 2) | Consistencia horaria de sesiones, duracion planificada vs real |
| screen_time (v14) | Prior poblacional adolescentes | Horario de uso de la app (sesiones nocturnas correlacionan con alto screen time) |
| fatigue (v15) | Inferido por horario | Degradacion de rendimiento intra-sesion, horario de uso |
| physical_activity (v16) | Prior poblacional | Se difiere a check-in semanal (Flujo 5, sesion 7+) |
| social_support (v17) | Beta(3, 3) | Uso de features sociales, mencion en chat MIYAGI |
| parental_support (v18) | Beta(3, 3) | Mencion en chat MIYAGI, patron de estres (critico para perfil Isidora) |
| vocational_clarity (v19) | Parcial de onboarding (P3) | Consultas COMPASS, busqueda de carreras |
| growth_mindset (v21) | Beta(3, 3) | Respuesta ante feedback negativo, persistencia ante dificultad |
| motivation (v20) | Parcial de Fase 1 | Frecuencia de uso espontaneo, engagement con metas, tercer item SDT |

#### Protocolo de convergencia

- **Sesion 1-2:** Se observan indicadores conductuales. Los priors se actualizan con regla de Bayes: posterior = prior * likelihood(datos_observados). Las variables con alta incertidumbre (sigma > 0.25) se priorizan para observacion activa.
- **Sesion 3:** Se activa un **micro-check-in contextual** (2 items, 15 seg) para las 2-3 variables con mayor incertidumbre residual. Ejemplo: si parental_support tiene sigma > 0.25, se pregunta "Tu familia te apoya en tu preparacion?" integrado naturalmente en el flujo post-sesion.
- **Sesion 5:** Se verifica convergencia. Si alguna variable mantiene sigma > 0.20, se programa un check-in focalizado. Metricas objetivo: 90% de variables con sigma < 0.20 al cierre de sesion 5.

#### Validacion del enfoque

El diagnostico progresivo sacrifica precision inmediata a cambio de completacion y retencion. La comparacion teorica:

| Aspecto | Diagnostico exhaustivo (17-30 min) | Diagnostico progresivo (8-10 min + stealth) |
|---------|-----------------------------------|--------------------------------------------|
| Tasa completacion esperada | 55-65% | >85% |
| Precision inmediata (SEM promedio) | 0.15 | 0.30 (core) / prior (resto) |
| Precision a sesion 5 (SEM promedio) | 0.15 (sin cambio) | <0.20 (convergido) |
| Impacto en retencion D7 | Negativo (fatiga pre-uso) | Neutro/positivo |
| Calidad de clasificacion de perfiles | Alta | Suficiente (>80% concordancia con perfil definitivo) |

La clave es que la precision de clasificacion de perfiles no requiere SEM 0.15 en todas las variables. Con las 5 variables core medidas directamente + priors informativos, la concordancia con el perfil definitivo (post-sesion 5) supera el 80%, suficiente para priorizar acciones iniciales.

## 3.3 Metricas objetivo del diagnostico progresivo

| Metrica | Objetivo | Fundamentacion |
|---------|----------|----------------|
| Duracion total Fase 1 | **8-10 min** (max absoluto 10 min) | Equilibrio entre precision minima viable y retencion de onboarding |
| Tasa de completacion Fase 1 | **>85%** | Benchmark apps moviles: Duolingo ~65% en 15 min (Settles et al., 2020). Con 8-10 min se espera superar significativamente |
| Tiempo medio observado | **<10 min** | Mediana objetivo; P95 < 12 min |
| Convergencia Fase 2 (sigma < 0.20 en 90% de variables) | **Sesion 5** | Cold start bayesiano converge en 5-10 observaciones por variable (Thai-Nghe et al., 2010) |
| Concordancia perfil inicial vs perfil sesion 5 | **>80%** | Suficiente para priorizar acciones iniciales sin reasignacion disruptiva |
| Carga percibida por estudiante (NASA-TLX simplificado) | **<4/7** | Evaluacion interna post-onboarding |

**Nota sobre materias multiples:** Si el estudiante selecciona 2+ materias, solo se evalua la materia principal (la de mayor relevancia para su carrera declarada) en onboarding. Las materias adicionales se evaluan en sesiones 2 y 3 mediante CAT embebido en la experiencia de practica, sin costo percibido adicional para el estudiante.

## 3.4 Algoritmo de clasificacion de perfiles

El diagnostico produce un vector de 21 valores v = (v1, v2, ..., v21), cada uno en [0, 1]. La clasificacion en perfiles arquetipicos utiliza distancia euclidiana ponderada respecto a los 10 arquetipos definidos en la tesis principal (Capitulo 7):

```
perfil_asignado = argmin_k Σ_i w_i × (v_i - arquetipo_k_i)²
```

donde w_i es el peso de importancia de la variable i, derivado de su efecto total en mastery (Seccion 4.6.3 de la tesis principal). Las variables con mayor efecto total en mastery reciben mayor peso en la clasificacion, asegurando que la asignacion de perfil priorice las dimensiones de mayor impacto.

Los 10 arquetipos de la tesis principal son:
1. Valentina (835 pts) — "La Aplicada"
2. Matias (680 pts) — "El Ansioso"
3. Camila (590 pts) — "La Resiliente"
4. Benjamin (500 pts) — "El Gamer"
5. Isidora (725 pts) — "La Presionada"
6. Diego (455 pts) — "El Deportista"
7. Francisca (410 pts) — "TDAH"
8. Tomas (545 pts) — "El Social"
9. Martina (635 pts) — "La Quemada"
10. Joaquin (320 pts) — "El Tardio"

La clasificacion no asigna una etiqueta fija: el perfil es una referencia para la priorizacion inicial de agentes y acciones, que se actualiza continuamente con los datos de interaccion.

## 3.5 Como el diagnostico progresivo alimenta el grafo

El grafo causal se inicializa en dos tiempos, coherente con las fases del diagnostico:

**Post-Fase 1 (inmediato, tras onboarding):**

1. **Inicializa las 5 variables core** (stress_level, sleep_quality, mastery, anxiety, motivation) con valores medidos directamente y sigma baja (0.10-0.15).
2. **Inicializa las 4 variables stealth** (attention_span, confidence, frustration_tolerance, metacognition) con valores parciales del CAT y sigma media (0.20-0.25).
3. **Inicializa las 12 variables restantes** con priors bayesianos y sigma alta (0.25-0.35). Los priors se informan por: (a) correlaciones conocidas del grafo (ej: alto stress predice bajo sleep), (b) demograficos, (c) baselines poblacionales.
4. **Propaga el grafo** con atenuacion exponencial (gamma = 0.7). Las propagaciones desde nodos con alta incertidumbre se atenuan adicionalmente por un factor sigma_penalty = 1 - sigma_nodo, evitando que priors ruidosos contaminen estimaciones solidas.
5. **Clasifica perfil provisional** con la advertencia interna de que es una clasificacion con confianza parcial (~80% concordancia esperada con perfil definitivo).
6. **Genera plan inicial** priorizando acciones que (a) impactan variables core ya medidas, y (b) generan datos observacionales para refinar variables diferidas.

**Post-Fase 2 (tras sesion 5):**

7. **Reclasifica perfil** con todas las variables convergidas (sigma < 0.20). Si el perfil cambia (20% de casos esperados), se ajusta el plan sin notificacion disruptiva al estudiante: el cambio se refleja en recomendaciones graduales, no en un "reset" abrupto.
8. **Identifica discrepancias** mastery_esperado vs mastery_observado con precision suficiente para detectar resiliencia no modelada o barreras ocultas.
9. **Ajusta pesos de aristas** del grafo si los datos observacionales sugieren que una relacion causal es mas fuerte o debil de lo esperado para este estudiante especifico.

---

# Capitulo 4. Acciones por Variable del Grafo

Para cada una de las 21 variables se presenta: (a) la posicion de la variable en el grafo (aristas entrantes y salientes), (b) las acciones concretas disenadas para modificarla, (c) el efecto esperado en mastery via las rutas causales identificadas, y (d) ejemplos contextualizados a la PAES chilena.

---

## 4.1 mastery (v1)

**Posicion en el grafo:**
- Aristas entrantes: anxiety (-0.30), confidence (+0.20), attention_span (+0.30), study_adherence (+0.30), self_efficacy (+0.30)
- Aristas salientes: self_efficacy (+0.30, temporal)
- Centralidad ponderada: C_w = 1.70

**Objetivo:** Incrementar la probabilidad de dominio de Knowledge Components (KCs) especificos de cada materia PAES.

### Accion 4.1.1: Practica adaptativa IRT

**Descripcion:** Sesiones de practica donde el sistema selecciona items cuya dificultad esta calibrada a la zona optima del estudiante (probabilidad de acierto entre 0.50 y 0.80 segun IRT 2PL). Los items se seleccionan para maximizar la informacion de Fisher, asegurando que cada pregunta contribuya maximamente a la estimacion de habilidad.

**Variables impactadas:** mastery (directo), confidence (indirecto via exito calibrado), self_efficacy (indirecto via mastery experiences).

**Mecanismo pedagogico:** La seleccion adaptativa implementa la Zona de Desarrollo Proximo (Vygotsky, 1978) computacionalmente: items demasiado faciles (P > 0.80) no producen aprendizaje; items demasiado dificiles (P < 0.50) generan frustracion sin aprendizaje (Sweller, 2011).

**Formato:** Quiz de 10-15 items, con feedback inmediato tras cada item.
**Duracion:** 8-12 minutos por sesion.
**Frecuencia:** Diaria (1-2 sesiones).
**Criterio de exito:** Incremento de theta >= 0.10 en 5 sesiones consecutivas.

**Ejemplo PAES Matematicas:** Un estudiante con theta = 0.45 en algebra recibe items de dificultad b entre 0.30 y 0.60. Ejemplo: "Si f(x) = 2x + 3 y g(x) = x^2 - 1, entonces f(g(2)) es igual a..." — un item de composicion de funciones calibrado a b = 0.48.

**Ejemplo PAES Lenguaje:** Un estudiante con theta = 0.55 en comprension lectora recibe un texto argumentativo de complejidad media con preguntas de inferencia: "Cual es el proposito comunicativo del autor al utilizar la expresion 'sin embargo' en el segundo parrafo?"

### Accion 4.1.2: Practica espaciada con FSRS

**Descripcion:** Los KCs que el estudiante ha alcanzado (P(L) > 0.80 en BKT) se programan para revision futura usando FSRS. El scheduler calcula el momento optimo de revision basandose en la estabilidad (S), dificultad (D) y recuperabilidad (R) de cada item.

**Variables impactadas:** mastery (mantenimiento y consolidacion), attention_span (indirecto — sesiones cortas de revision mantienen engagement).

**Mecanismo pedagogico:** Spacing effect (Ebbinghaus, 1885; Cepeda et al., 2006). La revision en el momento justo antes del olvido maximiza la retencion con minimo esfuerzo.

**Formato:** Tarjetas de revision (flashcards adaptativas), 5-10 items por sesion de revision.
**Duracion:** 3-5 minutos.
**Frecuencia:** Determinada por FSRS (inicialmente diaria, luego cada 2, 4, 8, 16 dias...).
**Criterio de exito:** Recuperabilidad R >= 0.90 para items revisados.

**Ejemplo:** Un estudiante domino el concepto de "funcion exponencial" hace 5 dias. FSRS calcula R = 0.85, lo que activa una revision. El item de revision: "Si una bacteria se duplica cada 3 horas y al inicio hay 500, cuantas habra en 12 horas?" Si responde correctamente, la estabilidad S aumenta y el proximo intervalo sera de 12 dias.

### Accion 4.1.3: Retrieval practice estructurada

**Descripcion:** Sesiones donde el estudiante debe recuperar informacion de memoria antes de ver la respuesta correcta. A diferencia de la practica adaptativa (que mide), el retrieval practice tiene como objetivo consolidar.

**Variables impactadas:** mastery (directo), metacognition (indirecto — el estudiante experimenta la diferencia entre "creo que se" y "realmente se").

**Mecanismo pedagogico:** Testing effect (Roediger y Butler, 2011; Rowland, 2014). La recuperacion activa fortalece las trazas de memoria mas que la reexposicion.

**Formato:** Tres modalidades rotativas:
1. **Recall libre:** "Escribe todo lo que recuerdes sobre [tema]" (2 minutos).
2. **Preguntas generativas:** Preguntas abiertas que requieren elaboracion, no solo reconocimiento.
3. **Ensenanza simulada:** El estudiante explica un concepto como si ensenara a un companero (grabacion de audio de 60 segundos, analizada por IA para verificar precision conceptual).

**Duracion:** 5-8 minutos.
**Frecuencia:** 3-4 veces por semana, intercalada con practica adaptativa.

### Accion 4.1.4: Worked examples con fading

**Descripcion:** Para KCs nuevos o con baja probabilidad de dominio (P(L) < 0.40), se presentan problemas completamente resueltos (worked examples), seguidos de problemas parcialmente resueltos (faded examples), y finalmente problemas completos.

**Variables impactadas:** mastery (directo), cognitive_load (reduccion de carga extrinseca), frustration_tolerance (prevencion de frustracion excesiva).

**Mecanismo pedagogico:** Worked example effect (Sweller y Cooper, 1985; Renkl, 2014). Los worked examples reducen la carga cognitiva extrinseca, permitiendo al estudiante dedicar recursos a la construccion de esquemas (carga germane).

**Formato:** Secuencia de 3-5 problemas con fading progresivo:
1. Problema completamente resuelto con explicacion paso a paso.
2. Problema con 2 de 4 pasos completados — el estudiante completa los restantes.
3. Problema con 1 paso completado.
4. Problema completo sin ayuda.

**Duracion:** 10-15 minutos para la secuencia completa.
**Frecuencia:** Al introducir cada KC nuevo.

**Ejemplo PAES Matematicas (probabilidad):**
- Paso 1 (resuelto): "En una urna hay 3 bolas rojas y 5 azules. Probabilidad de sacar roja = 3/8 = 0.375"
- Paso 2 (parcial): "Si sacamos una bola roja y NO la devolvemos, la probabilidad de sacar otra roja es ___/___"
- Paso 3 (completo): "Calcula la probabilidad de sacar 2 rojas consecutivas sin reposicion"

### Accion 4.1.5: Interleaving de materias

**Descripcion:** Las sesiones de practica alternan entre KCs de diferentes categorias en lugar de practicar un solo tipo de problema repetidamente (blocked practice).

**Variables impactadas:** mastery (mejora la discriminacion entre tipos de problemas), metacognition (el estudiante debe identificar que estrategia aplicar).

**Mecanismo pedagogico:** Interleaving effect (Rohrer y Taylor, 2007; Pan, Tajran, Lovelett, Osuna y Rickard, 2019). El intercalado fuerza al estudiante a discriminar entre tipos de problemas, mejorando la transferencia.

**Formato:** Quiz de 12 items que alterna entre 3-4 KCs diferentes (e.g., probabilidad, algebra, geometria, estadistica).
**Duracion:** 10-12 minutos.
**Frecuencia:** 2-3 sesiones semanales de interleaving.

**Efecto esperado en mastery:** Las acciones 4.1.1 a 4.1.5 combinadas impactan mastery directamente. El meta-analisis de VanLehn (2011) reporto d = 0.76 para ITS basados en pasos, lo que sugiere que la practica adaptativa con feedback inmediato puede producir mejoras significativas.

---

## 4.2 anxiety / ansiedad ante examenes (v5)

**Posicion en el grafo:**
- Aristas entrantes: stress_level (+0.45), self_efficacy (-0.35)
- Aristas salientes: mastery (-0.30), attention_span (-0.30)
- Efecto directo en mastery: -0.30
- Efecto total combinado (via mastery directo + via attention_span): 0.30 + 0.30 x 0.30 = 0.39

**Objetivo:** Reducir la ansiedad ante examenes, liberando capacidad atencional y cognitiva que actualmente se consume en preocupacion (worry) y activacion somatica.

### Accion 4.2.1: Reencuadre cognitivo de la ansiedad

**Descripcion:** Intervencion breve basada en la tecnica de reappraisal (reevaluacion cognitiva) de Jamieson, Mendes, Blackstock y Schmader (2010), quienes demostraron que instruir a los participantes a interpretar los sintomas de ansiedad como facilitadores del rendimiento (arousal funcional) mejora el desempeno en pruebas estandarizadas.

**Variables impactadas:** anxiety (reduccion directa), confidence (incremento indirecto).

**Mecanismo:** Se presenta al estudiante, antes de una sesion de practica tipo simulacro, un mensaje de reencuadre: "Los sintomas que sientes (corazon acelerado, manos sudorosas) son senales de que tu cuerpo se esta preparando para rendir al maximo. La investigacion muestra que estos sintomas pueden mejorar tu rendimiento." Se repite en 3 sesiones consecutivas.

**Formato:** Pantalla informativa de 30 segundos + reflexion guiada de 60 segundos.
**Frecuencia:** Antes de cada simulacro (1-2 veces por semana).
**Criterio de exito:** Reduccion de 0.10 en la escala de ansiedad en 2 semanas.

**Efecto esperado:** delta_anxiety = -0.10 genera delta_mastery = 0.10 x 0.30 = +0.03 via efecto directo, mas 0.10 x 0.30 x 0.30 = +0.009 via atencion. Total: ~+0.04 en mastery (~4-5 puntos PAES).

> **Nota:** Estos efectos son modestos individualmente pero acumulativos: la combinacion de intervenciones sobre multiples variables puede producir deltas combinados de 0.15-0.25 en mastery (~17-28 puntos PAES).

### Accion 4.2.2: Exposicion gradual a condiciones de examen

**Descripcion:** Protocolo de desensibilizacion sistematica adaptado al contexto academico. Se expone al estudiante progresivamente a condiciones que simulan la PAES real, comenzando con baja presion y aumentando gradualmente.

**Variables impactadas:** anxiety (reduccion por habituacion), self_efficacy (incremento por experiencias de exito en condiciones similares al examen).

**Formato — 4 niveles progresivos:**
1. **Nivel 1 (semana 1-2):** Quiz de 10 items sin temporizador, con feedback inmediato. Ambiente relajado.
2. **Nivel 2 (semana 3-4):** Quiz de 20 items con temporizador visible pero generoso (2 min/item vs 1.5 min/item en PAES real).
3. **Nivel 3 (semana 5-6):** Simulacro de 30 items con temporizador real (1.5 min/item), sin feedback hasta el final.
4. **Nivel 4 (semana 7+):** Simulacro completo (65 items, 150 minutos), replicando condiciones PAES.

**Frecuencia:** 1 sesion por nivel, avanzando cuando anxiety < 0.50 en el nivel actual.
**Criterio de exito:** Completar Nivel 4 con anxiety < 0.40 y rendimiento >= mastery esperado.

### Accion 4.2.3: Mindfulness breve pre-sesion

**Descripcion:** Ejercicio de atencion plena de 2-3 minutos antes de sesiones de practica, basado en la evidencia de que intervenciones breves de mindfulness reducen la ansiedad estado en contextos academicos. Regehr, Glancy y Pitts (2013) reportaron en su meta-analisis efectos significativos de intervenciones cognitivo-conductuales (que incluyen componentes de mindfulness) en la reduccion de ansiedad estudiantil.

**Variables impactadas:** anxiety (reduccion directa), attention_span (mejora por focalizacion), stress_level (reduccion moderada).

**Formato:** Audio guiado de 2 minutos con respiracion diafragmatica (inhalar 4 segundos, sostener 4 segundos, exhalar 6 segundos). Disponible en la app antes de cada sesion.
**Frecuencia:** Opcional antes de cada sesion; recomendado 1 vez al dia.
**Criterio de exito:** El estudiante reporta reduccion de tension subjetiva de al menos 1 punto en escala de 5.

### Accion 4.2.4: Normalizacion de la dificultad

**Descripcion:** Mensajes integrados en la experiencia de practica que normalizan la dificultad y los errores. Basado en la investigacion sobre destigmatizacion de la dificultad academica (Yeager et al., 2019), que demostro que mensajes de normalizacion reducen la interpretacion amenazante de la dificultad.

**Variables impactadas:** anxiety (reduccion), frustration_tolerance (incremento), growth_mindset (refuerzo).

**Formato:** Mensajes contextuales que aparecen cuando el estudiante comete errores consecutivos:
- "Este tipo de pregunta es dificil para la mayoria de los estudiantes. El 68% la responde incorrectamente la primera vez."
- "Los errores son parte del proceso. Cada error activa circuitos neuronales que fortalecen el aprendizaje."
- "Estudiantes que obtuvieron sobre 800 puntos en la PAES tambien cometieron errores en este tipo de preguntas durante su preparacion."

**Frecuencia:** Automatica, activada tras 2+ errores consecutivos.

---

## 4.3 confidence (v6)

**Posicion en el grafo:**
- Aristas entrantes: self_efficacy (+0.35)
- Aristas salientes: mastery (+0.20)
- Efecto directo en mastery: +0.20

**Objetivo:** Incrementar la confianza especifica del estudiante en KCs particulares, mejorando la calibracion confianza-rendimiento.

### Accion 4.3.1: Experiencias de maestria graduadas

**Descripcion:** Secuencias de problemas disenadas para producir exito temprano, comenzando con items ligeramente por debajo del nivel actual del estudiante y ascendiendo progresivamente. La fuente mas potente de autoeficacia y confianza son las mastery experiences (Bandura, 1997).

**Variables impactadas:** confidence (directo), self_efficacy (indirecto via exito repetido).

**Formato:** "Escalera de exito" — secuencia de 8 items con dificultad creciente:
- Items 1-2: P(acierto) = 0.85-0.90 (exito casi garantizado)
- Items 3-5: P(acierto) = 0.70-0.80 (desafiante pero alcanzable)
- Items 6-7: P(acierto) = 0.55-0.65 (zona de estiramiento)
- Item 8: P(acierto) = 0.45-0.55 (desafio real)

**Frecuencia:** 2-3 veces por semana, especialmente para estudiantes con confidence < 0.40.
**Criterio de exito:** El estudiante completa la escalera con >= 6/8 aciertos y reporta confianza incrementada.

### Accion 4.3.2: Feedback de progreso visible

**Descripcion:** Visualizacion explicita del progreso del estudiante, mostrando la mejora a lo largo del tiempo en lugar de solo el nivel actual. La investigacion sobre el endowed progress effect (Nunes y Dreze, 2006) muestra que hacer visible el progreso ya logrado aumenta la motivacion para continuar.

**Variables impactadas:** confidence (directo), self_efficacy (directo), motivation (indirecto).

**Formato:** Panel de progreso con:
- Grafico de linea de theta a lo largo del tiempo por materia.
- Contador de KCs dominados vs total.
- Comparacion con el "yo de hace 2 semanas" (nunca con otros estudiantes en esta pantalla).
- Celebracion automatica al alcanzar hitos (cada 5 KCs dominados).

**Frecuencia:** Disponible permanentemente; se destaca al inicio de cada sesion.

### Accion 4.3.3: Calibracion confianza-rendimiento

**Descripcion:** Ejercicios especificos para mejorar la calibracion entre la confianza reportada y el rendimiento real. La sobre-confianza lleva a sub-estudio; la sub-confianza genera ansiedad innecesaria. Ambas reducen el rendimiento (Pajares, 1996).

**Variables impactadas:** confidence (mejora de calibracion), metacognition (incremento de automonitoreo).

**Formato:** Despues de responder un item, se pide al estudiante: "Que tan seguro/a estas? (1-5)". Al final de la sesion, se muestra un grafico de calibracion: confianza promedio vs precision real, por nivel de confianza.
**Frecuencia:** 1-2 sesiones semanales con calibracion activa.
**Criterio de exito:** Indice de calibracion |confianza - precision| < 0.15.

---

## 4.4 motivation / motivacion (v20)

**Posicion en el grafo:**
- Aristas entrantes: emotional_state (+0.30), vocational_clarity (+0.30)
- Aristas salientes: study_adherence (+0.35)
- Efecto total en mastery (via adherencia): 0.35 x 0.30 = 0.105

**Objetivo:** Incrementar la motivacion intrinseca e identificada, sosteniendo el esfuerzo de preparacion a lo largo de semanas y meses.

### Accion 4.4.1: Metas proximales SMART

**Descripcion:** Establecimiento semanal de metas especificas, medibles, alcanzables, relevantes y con plazo (SMART), fundamentado en la teoria de establecimiento de metas de Locke y Latham (2002), que demostro que las metas especificas y desafiantes producen rendimiento superior a metas vagas o faciles.

**Variables impactadas:** motivation (directo), study_adherence (indirecto via compromiso con la meta).

**Formato:** Al inicio de cada semana, el sistema guia al estudiante:
1. "Esta semana, quiero dominar [KC especifico]" (seleccion de 2-3 KCs objetivo).
2. "Para lograrlo, estudiare [X] sesiones de [Y] minutos" (plan concreto).
3. "Mi senal de exito sera: [completar N items con precision >= 80%]" (criterio verificable).

**Frecuencia:** Semanal (lunes o primer dia de actividad).
**Criterio de exito:** >= 70% de metas semanales alcanzadas.

### Accion 4.4.2: Autonomia de eleccion

**Descripcion:** Ofrecer al estudiante opciones dentro de la sesion de estudio, fundamentado en la SDT (Deci y Ryan, 2000), que identifica la autonomia como una de las tres necesidades psicologicas basicas. Patall, Cooper y Robinson (2008) confirmaron en su meta-analisis que proveer opciones incrementa la motivacion intrinseca.

**Variables impactadas:** motivation (directo), emotional_state (indirecto).

**Formato:** El estudiante elige al menos uno de los siguientes en cada sesion:
- Materia a practicar (cuando tiene multiples materias activas).
- Tipo de actividad (quiz rapido, practica profunda, revision, simulacro).
- Duracion de la sesion (corta: 8 min, media: 15 min, larga: 25 min).

**Frecuencia:** Cada sesion.

### Accion 4.4.3: Relevancia personal

**Descripcion:** Conectar el contenido PAES con los intereses y metas personales del estudiante, basado en la teoria del valor de la tarea (Eccles y Wigfield, 2002) que establece que la percepcion de utilidad incrementa la motivacion.

**Variables impactadas:** motivation (directo), vocational_clarity (refuerzo indirecto).

**Formato:** Mensajes contextuales que conectan KCs con carreras de interes del estudiante:
- Si el estudiante quiere estudiar Medicina y esta practicando Biologia: "Este contenido sobre genetica mendeliana es fundamental en los primeros anos de Medicina. Los genes que estamos estudiando son la base de la farmacogenetica."
- Si quiere Ingenieria Civil y practica Matematicas: "Las funciones exponenciales que estamos trabajando se usan para modelar el crecimiento poblacional de ciudades — un problema central en ingenieria urbana."

**Frecuencia:** 1-2 mensajes por sesion, solo cuando se tiene informacion vocacional.

### Accion 4.4.4: Pacto de compromiso semanal

**Descripcion:** El estudiante establece un compromiso publico (dentro de la app) de cuantas sesiones completara en la semana. Basado en la investigacion sobre commitment devices (Bryan, Karlan y Nelson, 2010) y la teoria de la consistencia cognitiva.

**Variables impactadas:** motivation (directo), study_adherence (directo).

**Formato:** El estudiante selecciona su compromiso semanal (3, 4, 5, 6 o 7 sesiones). Si pertenece a un grupo de estudio (NAKAMA), el compromiso es visible para sus companeros.
**Frecuencia:** Semanal.
**Criterio de exito:** Cumplimiento >= 80% del compromiso durante 3 semanas consecutivas.

---

## 4.5 sleep_quality / calidad del sueno (v13)

**Posicion en el grafo:**
- Aristas entrantes: screen_time (-0.40), physical_activity (+0.25), stress_level (-0.35)
- Aristas salientes: attention_span (+0.45), fatigue (-0.50)
- Efecto total en mastery: 0.199 (segundo leverage point)

**Objetivo:** Mejorar la calidad y duracion del sueno, desbloqueando la ruta de mayor impacto indirecto en mastery.

### Accion 4.5.1: Higiene del sueno — protocolo progresivo

**Descripcion:** Programa de mejora del sueno en 4 semanas, basado en las recomendaciones de la American Academy of Sleep Medicine (Hirshkowitz et al., 2015) y adaptado al contexto adolescente chileno.

**Variables impactadas:** sleep_quality (directo), attention_span (indirecto, w = +0.45), fatigue (indirecto, w = -0.50).

**Formato — Protocolo de 4 semanas:**

*Semana 1: Conciencia.* El estudiante registra hora de acostarse, hora de levantarse, y calidad percibida durante 7 dias. Se genera un reporte de linea base.

*Semana 2: Screen curfew.* Se introduce la meta de dejar las pantallas 30 minutos antes de dormir. La app envia un nudge a la hora configurada: "Faltan 30 minutos para tu hora de dormir. Es buen momento para dejar el celular."

*Semana 3: Horario consistente.* Se introduce la meta de acostarse y levantarse a la misma hora (+-30 min) los 7 dias de la semana, incluyendo fines de semana. Consistencia es mas importante que duracion total.

*Semana 4: Rutina pre-sueno.* Se introduce una rutina de 10 minutos antes de dormir: revision ligera de flashcards (aprovechando la consolidacion de memoria dependiente del sueno; Diekelmann y Born, 2010), seguida de ejercicio de respiracion de 2 minutos.

**Frecuencia:** Nudges diarios; check-in semanal de progreso.
**Criterio de exito:** Duracion >= 7 horas/noche, variabilidad de hora de acostarse < 45 min.

**Efecto esperado:** delta_sleep_quality = +0.20 genera:
- delta_attention_span = 0.20 x 0.45 = +0.09
- delta_fatigue = 0.20 x (-0.50) = -0.10
- delta_mastery (via atencion directa) = 0.09 x 0.30 = +0.027
- delta_mastery (via fatiga -> atencion) = 0.10 x 0.40 x 0.30 = +0.012
- delta_mastery total = ~+0.04 (~4-5 puntos PAES)

> **Nota:** Estos efectos son modestos individualmente pero acumulativos: la combinacion de intervenciones sobre multiples variables puede producir deltas combinados de 0.15-0.25 en mastery (~17-28 puntos PAES).

### Accion 4.5.2: Nudges de hora de dormir

**Descripcion:** Notificaciones push personalizadas que recuerdan al estudiante su hora objetivo de dormir, basadas en habit stacking (Fogg, 2019): vincular el nuevo habito (dejar pantallas) a una senal existente (hora del dia).

**Variables impactadas:** sleep_quality (directo), screen_time (reduccion indirecta).

**Formato:** Notificacion push 30 minutos antes de la hora objetivo, con mensaje rotativo:
- "Son las [hora]. Los estudiantes que duermen 7+ horas rinden un 20% mejor al dia siguiente."
- "Ultimo item del dia: tu almohada. Manana, tu cerebro te lo agradecera."
- "Recordatorio: el sueno consolida lo que estudiaste hoy. Dale tiempo a tu cerebro para trabajar."

**Frecuencia:** Diaria, a la hora configurada por el estudiante.

### Accion 4.5.3: Tracking y reporte semanal de sueno

**Descripcion:** El estudiante registra datos basicos de sueno diariamente (2 taps: hora de acostarse, calidad). Se genera un reporte semanal que correlaciona calidad de sueno con rendimiento academico del dia siguiente.

**Variables impactadas:** sleep_quality (via conciencia), metacognition (via automonitoreo).

**Formato:** Registro diario (10 segundos) + reporte semanal grafico mostrando: "Los dias que dormiste 7+ horas, tu precision fue X%. Los dias que dormiste menos de 6 horas, tu precision fue Y%."
**Frecuencia:** Registro diario, reporte semanal.

---

## 4.6 attention_span / atencion (v2)

**Posicion en el grafo:**
- Aristas entrantes: sleep_quality (+0.45), fatigue (-0.40), anxiety (-0.30)
- Aristas salientes: mastery (+0.30)
- Centralidad ponderada: C_w = 1.45

**Objetivo:** Mantener y mejorar la capacidad de atencion sostenida durante las sesiones de estudio.

### Accion 4.6.1: Tecnica Pomodoro adaptativa

**Descripcion:** Sesiones de estudio con intervalos de trabajo y descanso calibrados al perfil atencional del estudiante. A diferencia del Pomodoro clasico (25 min trabajo / 5 min descanso), Renddi adapta los intervalos segun la degradacion atencional medida.

**Variables impactadas:** attention_span (directo), fatigue (reduccion por pausas oportunas), cognitive_load (gestion).

**Formato:**
- **Perfil de atencion alta (degradacion < 10% intra-sesion):** 25 min trabajo / 5 min descanso.
- **Perfil de atencion media (degradacion 10-25%):** 15 min trabajo / 3 min descanso.
- **Perfil de atencion baja (degradacion > 25%, comun en TDAH):** 8 min trabajo / 2 min descanso.

El sistema detecta automaticamente la degradacion (aumento de tiempo de respuesta, incremento de errores) y sugiere una pausa antes de que la atencion colapse.

**Frecuencia:** Integrada en cada sesion de estudio.
**Criterio de exito:** Degradacion intra-sesion < 15%.

### Accion 4.6.2: Breaks cognitivos activos

**Descripcion:** Durante las pausas, se ofrecen actividades breves que regeneran la atencion sin desconectar completamente del estado de estudio. Basado en la Attention Restoration Theory (Kaplan, 1995) que establece que la atencion dirigida se restaura con exposicion a estimulos que no requieren atencion focalizada.

**Variables impactadas:** attention_span (restauracion), fatigue (reduccion), emotional_state (mejora leve).

**Formato — Opciones de break (2-3 minutos):**
1. **Movimiento:** 5 estiramientos guiados en pantalla.
2. **Respiracion:** Ejercicio de respiracion 4-4-6.
3. **Curiosidad:** Dato curioso relacionado con la materia que estan estudiando (engagement sin carga cognitiva).
4. **Micro-meditacion:** Audio de 90 segundos de atencion a sonidos ambientales.

**Frecuencia:** Al final de cada bloque de trabajo.

### Accion 4.6.3: Deteccion automatica de desatencion

**Descripcion:** El sistema monitorea indicadores de desatencion en tiempo real y responde adaptativamente. No interrumpe para alertar (lo que seria contraproducente), sino que ajusta la dificultad y el formato de los items.

**Variables impactadas:** attention_span (mantenimiento), mastery (proteccion — evita que el estudiante practique en estado de baja atencion, lo que produciria errores no informativos).

**Indicadores monitoreados:**
- Tiempo de respuesta > 2 desviaciones estandar sobre la media del estudiante.
- Patron de respuestas aleatorias (mismo boton repetido, o alternancia perfecta).
- Precision cayendo > 20% respecto a la media de la sesion.

**Respuesta del sistema:**
- Reduce la dificultad de los proximos 3 items (bajar al nivel de "exito facil" para reenganche).
- Sugiere una pausa si los indicadores persisten por 3+ items.
- Termina la sesion si los indicadores persisten despues de la pausa.

---

## 4.7 study_adherence / adherencia al estudio (v11)

**Posicion en el grafo:**
- Aristas entrantes: motivation (+0.35), metacognition (+0.25), frustration_tolerance (+0.20), time_management (+0.30)
- Aristas salientes: mastery (+0.30)
- Centralidad ponderada: C_w = 1.40

**Objetivo:** Incrementar la proporcion de sesiones completadas respecto a las planificadas, construyendo un habito de estudio consistente.

### Accion 4.7.1: Habit stacking

**Descripcion:** Vincular la sesion de estudio en Renddi a un habito existente del estudiante, siguiendo el modelo de Tiny Habits de Fogg (2019): "Despues de [habito existente], voy a [nuevo habito]."

**Variables impactadas:** study_adherence (directo), time_management (indirecto).

**Formato:** Durante el onboarding, el estudiante identifica un ancla:
- "Despues de almorzar, hago una sesion de 10 minutos en Renddi."
- "Despues de llegar del colegio, hago una sesion antes de usar redes sociales."
- "Despues de cenar, reviso mis flashcards."

La app envia un recordatorio vinculado al ancla elegida.
**Frecuencia:** Diaria.
**Criterio de exito:** 5+ sesiones completadas en la primera semana.

### Accion 4.7.2: Streaks y consistencia

**Descripcion:** Sistema de rachas (streaks) que recompensa la consistencia diaria. Cada dia consecutivo de practica incrementa el streak counter. Basado en la investigacion sobre el endowed progress effect y la aversion a la perdida (Kahneman y Tversky, 1979): perder un streak de 15 dias es psicologicamente costoso, lo que motiva la practica diaria.

**Variables impactadas:** study_adherence (directo), motivation (refuerzo).

**Formato:**
- Contador visible de dias consecutivos.
- Hitos con recompensa visual: 7 dias (badge de bronce), 14 dias (plata), 30 dias (oro), 60 dias (diamante).
- "Freeze" de emergencia: el estudiante puede congelar 1 dia por semana sin perder el streak (reduce la presion excesiva).

**Frecuencia:** Permanente.
**Criterio de exito:** Streak promedio >= 7 dias.

### Accion 4.7.3: Compromiso publico y accountability

**Descripcion:** El estudiante comparte su meta semanal con un grupo de estudio dentro de la app. La investigacion sobre accountability muestra que el compromiso social incrementa la adherencia a metas (Rogers, Milkman, John y Norton, 2015).

**Variables impactadas:** study_adherence (directo), social_support (indirecto), motivation (indirecto).

**Formato:** El estudiante ve el cumplimiento de su grupo (sin ranking punitivo):
- "Tu grupo: 3 de 4 miembros completaron sus sesiones de hoy."
- "Maria ya completo su meta semanal. Tu llevas 4 de 5."

**Frecuencia:** Actualizacion diaria del progreso grupal.

### Accion 4.7.4: Micro-sesiones como puerta de entrada

**Descripcion:** Ofrecer sesiones de 3-5 minutos como alternativa a sesiones completas cuando el estudiante siente resistencia. Basado en el principio de que "empezar es lo mas dificil" — una vez iniciada una sesion, la inercia psicologica favorece la continuacion.

**Variables impactadas:** study_adherence (reduccion de la barrera de entrada), motivation (el exito en una micro-sesion genera momentum).

**Formato:** Opcion "Solo 3 minutos" que presenta 3-5 items rapidos. Al completar, se ofrece: "Quieres continuar? (5 minutos mas / terminar)."
**Frecuencia:** Disponible siempre; sugerido activamente cuando el estudiante no ha practicado a su hora habitual.

---

## 4.8 emotional_state / estado emocional (v7)

**Posicion en el grafo:**
- Aristas entrantes: physical_activity (+0.30), social_support (+0.30), parental_support (+0.25), fatigue (-0.25), stress_level (-0.35)
- Aristas salientes: motivation (+0.30)
- Centralidad ponderada: C_w = 1.75 (segunda mas alta del grafo)

**Objetivo:** Mejorar el bienestar emocional general del estudiante como base para la motivacion y el aprendizaje.

### Accion 4.8.1: Check-ins emocionales

**Descripcion:** Registro breve del estado emocional al inicio y fin de cada sesion, basado en el modelo circumplejo de Russell (1980). Los check-ins cumplen doble funcion: (a) alimentan la variable del grafo, y (b) el acto de nombrar emociones tiene efecto regulatorio (affect labeling; Lieberman, Eisenberger, Crockett, Tom, Pfeifer y Way, 2007).

**Variables impactadas:** emotional_state (medicion + regulacion leve), metacognition (autoconciencia emocional).

**Formato:** Selector visual de 9 estados (3 niveles de valencia x 3 de energia):

| | Baja energia | Media energia | Alta energia |
|---|---|---|---|
| Positivo | Tranquilo/a | Contento/a | Entusiasmado/a |
| Neutro | Cansado/a | Normal | Alerta |
| Negativo | Desanimado/a | Preocupado/a | Estresado/a |

**Frecuencia:** Inicio y fin de cada sesion (2 taps, 5 segundos).
**Criterio de exito:** El promedio semanal de valencia emocional al fin de sesion es >= al del inicio (la sesion no deteriora el estado emocional).

### Accion 4.8.2: Journaling guiado

**Descripcion:** Reflexion escrita breve (3-5 oraciones) guiada por prompts que promueven el procesamiento emocional. Pennebaker y Chung (2011) documentaron que la escritura expresiva produce beneficios significativos en bienestar emocional y rendimiento academico.

**Variables impactadas:** emotional_state (regulacion emocional), stress_level (reduccion), metacognition (reflexion).

**Formato — Prompts rotativos (1 por dia, opcional):**
- "Que fue lo mas dificil de tu dia de estudio? Como te hizo sentir?"
- "Menciona algo que aprendiste hoy que no sabias ayer."
- "Si pudieras decirle algo a tu yo de hace un mes sobre la PAES, que seria?"
- "Que te motiva a seguir estudiando cuando se pone dificil?"

**Duracion:** 2-3 minutos.
**Frecuencia:** Opcional, 2-3 veces por semana.
**Criterio de exito:** Los estudiantes que hacen journaling 2+ veces por semana muestran mejora de >= 0.05 en emotional_state.

### Accion 4.8.3: Deteccion de deterioro emocional y respuesta adaptativa

**Descripcion:** El sistema detecta patrones de deterioro emocional persistente (emotional_state < 0.30 durante 3+ sesiones consecutivas) y activa una respuesta del agente KAZE.

**Variables impactadas:** emotional_state (intervencion directa), anxiety (reduccion si es factor), stress_level (reduccion si es factor).

**Respuesta escalonada:**
1. **Nivel 1 (emotional_state 0.30-0.40, 2 sesiones):** Mensaje de validacion: "Note que te has sentido [emocion] ultimamente. Es completamente normal durante la preparacion PAES."
2. **Nivel 2 (emotional_state < 0.30, 3 sesiones):** Sugerencia de actividad restaurativa: pausa de 1 dia, sesion de journaling, o actividad fisica.
3. **Nivel 3 (emotional_state < 0.20, 5+ sesiones):** Recomendacion de buscar apoyo externo (orientador del colegio, linea de apoyo emocional).

---

## 4.9 self_efficacy / autoeficacia (v8)

**Posicion en el grafo:**
- Aristas entrantes: mastery (+0.30, temporal)
- Aristas salientes: confidence (+0.35), mastery (+0.30), anxiety (-0.35)
- Centralidad ponderada: C_w = 1.30

**Objetivo:** Fortalecer la creencia del estudiante en su capacidad de mejorar y alcanzar sus metas academicas.

### Accion 4.9.1: Modelado vicario contextualizado

**Descripcion:** Historias breves de estudiantes chilenos de contextos similares que lograron mejorar significativamente su puntaje PAES. Bandura (1997) identifico el modelado vicario como la segunda fuente mas potente de autoeficacia despues de las mastery experiences: "Si alguien como yo lo logro, yo tambien puedo."

**Variables impactadas:** self_efficacy (directo), growth_mindset (refuerzo), motivation (indirecto).

**Formato:** Historias de 60-90 segundos (texto + audio opcional):
- "Camila, de un liceo municipal en Puente Alto, empezo con 480 puntos en el diagnostico. Estudio 30 minutos diarios durante 4 meses y llego a 650. Hoy estudia Enfermeria en la Chile."
- "Diego practicaba futbol 4 horas al dia y no tenia tiempo para estudiar. Reorganizo su rutina con sesiones de 15 minutos en el transporte y subio de 420 a 580."

**Frecuencia:** 1 historia por semana, seleccionada por similitud de perfil con el estudiante.
**Criterio de exito:** Self_efficacy incrementa >= 0.05 en 4 semanas.

### Accion 4.9.2: Atribucion causal de exito

**Descripcion:** Cuando el estudiante logra un buen resultado, el sistema explicita la conexion entre esfuerzo/estrategia y resultado, promoviendo atribuciones internas y controlables (Weiner, 1985).

**Variables impactadas:** self_efficacy (directo), growth_mindset (refuerzo).

**Formato:** Feedback post-exito:
- "Respondiste correctamente 8 de 10. Esto es resultado de tu practica consistente esta semana (5 sesiones completadas)."
- "Tu precision en probabilidades subio de 55% a 78% en 2 semanas. La practica espaciada esta funcionando."
- **Nunca:** "Eres muy inteligente" (atribucion a rasgo fijo, contraria a growth mindset).

**Frecuencia:** Automatica tras cada sesion con rendimiento por encima de la media del estudiante.

### Accion 4.9.3: Micro-victorias celebradas

**Descripcion:** Reconocimiento explicito de logros incrementales, incluso pequenos. La investigacion sobre el progreso percibido (Amabile y Kramer, 2011) muestra que el avance en trabajo significativo es el motivador mas potente.

**Variables impactadas:** self_efficacy (directo), motivation (directo), emotional_state (mejora leve).

**Formato:** Notificaciones de logro:
- "Nuevo KC dominado: Teorema de Pitagoras. Llevas 23 de 85 KCs en Matematicas."
- "Tu precision de hoy (82%) es tu mejor resultado esta semana."
- "Completaste 10 sesiones este mes. Estas en el top 30% de consistencia."

**Frecuencia:** 1-2 notificaciones por sesion, calibradas para no saturar.

---

## 4.10 cognitive_load / carga cognitiva (v4)

**Posicion en el grafo:**
- Aristas entrantes: (variable exogena, determinada por el diseno de tareas)
- Aristas salientes: fatigue (+0.30)
- Efecto indirecto en mastery: via fatigue -> attention_span -> mastery (0.30 x 0.40 x 0.30 = 0.036)

**Objetivo:** Gestionar la carga cognitiva del estudiante para maximizar la carga germane (construccion de esquemas) y minimizar la carga extrinseca (procesamiento irrelevante).

### Accion 4.10.1: Chunking progresivo

**Descripcion:** Descomposicion de contenidos complejos en unidades manejables (chunks), incrementando progresivamente la complejidad. Basado en la Cognitive Load Theory (Sweller, 1988, 2011) y la investigacion sobre la capacidad limitada de la memoria de trabajo (Miller, 1956; Cowan, 2001).

**Variables impactadas:** cognitive_load (reduccion de carga extrinseca), mastery (mejor procesamiento), fatigue (reduccion por manejo de carga).

**Formato:** Los contenidos complejos se presentan en 3-4 chunks secuenciales:
- Chunk 1: Concepto base con ejemplo simple.
- Chunk 2: Extension del concepto con ejemplo de complejidad media.
- Chunk 3: Aplicacion a problemas tipo PAES.
- Check de comprension entre chunks (1-2 items).

**Ejemplo PAES Ciencias (genetica):**
- Chunk 1: "Los genes son segmentos de ADN que codifican proteinas. Ejemplo: el gen del grupo sanguineo."
- Chunk 2: "Los alelos son variantes de un gen. El grupo sanguineo tiene 3 alelos: A, B, O."
- Chunk 3: "Si un padre es AB y una madre es O, calcula las probabilidades de los grupos sanguineos de sus hijos."

### Accion 4.10.2: Eliminacion de carga extrinseca en la interfaz

**Descripcion:** Diseno de la interfaz de practica que minimiza el procesamiento irrelevante. Principios de multimedia learning de Mayer (2009): coherencia (eliminar elementos decorativos), senalizacion (destacar informacion clave), contiguidad espacial y temporal.

**Variables impactadas:** cognitive_load (reduccion extrinseca), attention_span (menor distraccion).

**Formato:**
- Pantalla limpia durante items: solo enunciado, estimulo, y alternativas.
- Sin animaciones decorativas durante la practica.
- Colores funcionales (verde = correcto, rojo = incorrecto) sin exceso visual.
- Un solo concepto por pantalla en las explicaciones.

### Accion 4.10.3: Fading de scaffolding

**Descripcion:** Retirada gradual de apoyos a medida que el estudiante demuestra competencia, evitando el expertise reversal effect (Kalyuga, 2007): los worked examples que benefician a novatos pueden perjudicar a expertos al imponer carga extrinseca innecesaria.

**Variables impactadas:** cognitive_load (optimizacion), mastery (progresion), frustration_tolerance (mantenimiento en zona optima).

**Formato:** El sistema ajusta automaticamente el nivel de scaffolding segun P(L):
- P(L) < 0.30: Worked examples completos + explicaciones paso a paso.
- P(L) 0.30-0.50: Faded examples (pasos parcialmente resueltos).
- P(L) 0.50-0.70: Solo hints disponibles bajo demanda.
- P(L) > 0.70: Practica independiente sin apoyos.

---

## 4.11 fatigue / cansancio (v15)

**Posicion en el grafo:**
- Aristas entrantes: cognitive_load (+0.30), sleep_quality (-0.50)
- Aristas salientes: attention_span (-0.40), emotional_state (-0.25)
- Centralidad ponderada: C_w = 1.45

**Objetivo:** Detectar y gestionar la fatiga para proteger la atencion y el estado emocional del estudiante.

### Accion 4.11.1: Micro-descansos programados

**Descripcion:** Pausas de 60-120 segundos integradas automaticamente en la sesion cuando el sistema detecta indicadores de fatiga (aumento de tiempos de respuesta, incremento de errores, seleccion de respuestas sin lectura completa).

**Variables impactadas:** fatigue (reduccion directa), attention_span (restauracion), emotional_state (prevencion de deterioro).

**Formato:** La pausa se presenta como parte natural de la sesion, no como interrupcion:
- "Tomemos un respiro. Mira por la ventana durante 30 segundos."
- "Estira los brazos y el cuello. Tu cerebro esta procesando lo que estudiaste."

**Frecuencia:** Automatica, cada 10-15 minutos o cuando se detecta fatiga.
**Criterio de exito:** Recuperacion de precision post-pausa >= 90% de la precision pre-fatiga.

### Accion 4.11.2: Deteccion de fatiga cronica

**Descripcion:** Monitoreo de patrones de fatigue a traves de multiples sesiones. Si fatigue > 0.60 persiste durante 5+ sesiones, el sistema identifica la causa probable (sueno insuficiente, sobre-estudio, carga academica externa) y ajusta la recomendacion.

**Variables impactadas:** fatigue (gestion a nivel de pauta), sleep_quality (mejora indirecta si el sueno es la causa).

**Respuestas segun causa identificada:**
- **Sueno insuficiente (sleep_quality < 0.40):** Activar protocolo de higiene del sueno (Accion 4.5.1).
- **Sobre-estudio (sesiones > 45 min sin pausa):** Reducir duracion sugerida de sesiones.
- **Carga externa (horario escolar + preuniversitario + Renddi):** Sugerir reduccion de frecuencia con foco en calidad.

### Accion 4.11.3: Sesiones de baja carga cognitiva

**Descripcion:** Cuando fatigue > 0.60, ofrecer sesiones de "mantenimiento" que no introducen contenido nuevo sino que revisan KCs ya dominados con items faciles. Esto mantiene el habito de estudio sin agotar al estudiante.

**Variables impactadas:** fatigue (no incrementa), study_adherence (mantiene el streak), self_efficacy (refuerzo por exito facil).

**Formato:** Quiz de revision con items de alta P(acierto) (> 0.85). Duracion: 5 minutos maximo.
**Frecuencia:** Automatica cuando fatigue > 0.60.

---

## 4.12 social_support / apoyo social (v17)

**Posicion en el grafo:**
- Aristas entrantes: (variable exogena)
- Aristas salientes: emotional_state (+0.30)
- Efecto total en mastery: via emotional_state -> motivation -> study_adherence -> mastery (0.30 x 0.30 x 0.35 x 0.30 = 0.009)

**Objetivo:** Construir una red de apoyo entre pares que amortigüe el estres y fortalezca el compromiso con la preparacion.

### Accion 4.12.1: Grupos de estudio automaticos

**Descripcion:** Formacion automatica de grupos de 3-5 estudiantes con perfiles complementarios (no identicos). Basado en el modelo de buffering de Cohen y Wills (1985): el apoyo social amortigua los efectos negativos del estres sobre el rendimiento.

**Variables impactadas:** social_support (directo), emotional_state (indirecto), motivation (indirecto via pertenencia).

**Formato:** El sistema forma grupos basandose en:
- Materia(s) en comun.
- Nivel similar (theta dentro de +-0.20).
- Zona horaria compatible.
- Al menos un estudiante con alta adherencia (efecto de modelado).

Funcionalidades del grupo:
- Chat grupal dentro de la app.
- Desafios grupales semanales ("El grupo que mas KCs domine esta semana gana...").
- Progreso compartido visible.

**Frecuencia:** Grupos permanentes, con reasignacion trimestral si hay inactividad.

### Accion 4.12.2: Peer tutoring asistido

**Descripcion:** Emparejamiento de estudiantes donde uno domina un KC que el otro necesita aprender. Basado en la evidencia de que ensenar produce aprendizaje profundo (el "efecto protege"; Fiorella y Mayer, 2016).

**Variables impactadas:** social_support (directo para el tutorado), mastery (directo para ambos — ensenar consolida), self_efficacy (incremento para el tutor).

**Formato:** El sistema identifica pares complementarios:
- Estudiante A domina "funciones cuadraticas" pero no "probabilidades".
- Estudiante B domina "probabilidades" pero no "funciones cuadraticas".
- Se sugiere un intercambio de micro-tutoria (5 min cada uno, dentro del chat grupal).

**Frecuencia:** 1-2 intercambios semanales cuando se identifican pares complementarios.

### Accion 4.12.3: Celebraciones grupales

**Descripcion:** Reconocimiento de logros grupales que refuerzan el sentido de pertenencia y el apoyo mutuo.

**Variables impactadas:** social_support (refuerzo), emotional_state (mejora), motivation (refuerzo).

**Formato:** Notificaciones grupales:
- "Tu grupo alcanzo 50 KCs dominados en total esta semana."
- "[Nombre] acaba de completar un streak de 14 dias. Felicitalo/a!"
- "3 de 4 miembros del grupo completaron sus metas esta semana."

**Frecuencia:** 2-3 notificaciones semanales.

---

## 4.13 vocational_clarity / claridad vocacional (v19)

**Posicion en el grafo:**
- Aristas entrantes: (variable exogena, parcialmente modificable)
- Aristas salientes: motivation (+0.30)
- Efecto total en mastery: via motivation -> study_adherence -> mastery (0.30 x 0.35 x 0.30 = 0.032)

**Objetivo:** Ayudar al estudiante a clarificar sus intereses vocacionales y conectarlos con la preparacion PAES, activando la Ruta 3 del grafo causal.

### Accion 4.13.1: Exploracion RIASEC adaptada

**Descripcion:** Test de intereses vocacionales basado en el modelo hexagonal de Holland (1997) — Realista, Investigativo, Artistico, Social, Emprendedor, Convencional — adaptado al contexto chileno con carreras y universidades del sistema de admision.

**Variables impactadas:** vocational_clarity (directo), motivation (indirecto via proposito).

**Formato:** 30 items de preferencia (e.g., "Prefiero trabajar con numeros / con personas / con herramientas / con ideas") que generan un perfil RIASEC de 3 letras. El resultado se conecta con carreras especificas del sistema chileno:
- RIA: Ingenieria Civil, Arquitectura, Ingenieria en Minas.
- SIA: Psicologia, Trabajo Social, Pedagogia.
- ECS: Administracion, Ingenieria Comercial, Contador Auditor.

**Duracion:** 8-10 minutos.
**Frecuencia:** 1 vez (onboarding), con re-evaluacion a los 3 meses.

### Accion 4.13.2: Conexion carrera-PAES

**Descripcion:** Informacion concreta que conecta la carrera de interes con los requisitos PAES: puntaje de corte, ponderaciones por materia, universidades que la ofrecen, y campo laboral.

**Variables impactadas:** vocational_clarity (incremento de informacion), motivation (incremento de proposito).

**Formato:** Ficha de carrera personalizada:
- "Para Ingenieria Civil en la U. de Chile necesitas ~750 pts. Matematicas pondera 40%, Lenguaje 15%, NEM 15%, Ranking 15%, Ciencias 15%."
- "Con tu puntaje actual estimado de 580, necesitas subir ~170 puntos. Focalizarte en Matematicas (donde tienes mas margen de mejora) maximiza tu avance."
- "Campo laboral: 95% empleabilidad al primer ano, sueldo promedio $1.800.000 al 4to ano."

**Frecuencia:** Disponible permanentemente; se actualiza con datos de cada proceso de admision.

### Accion 4.13.3: Sesiones de reflexion vocacional

**Descripcion:** Actividades guiadas de reflexion que ayudan al estudiante a explorar y clarificar su motivacion vocacional. Basado en la Social Cognitive Career Theory (Lent, Brown y Hackett, 1994, 2000).

**Variables impactadas:** vocational_clarity (directo), motivation (directo).

**Formato — 4 sesiones de reflexion (1 por semana):**
1. "Que actividades disfrutas tanto que pierdes la nocion del tiempo?"
2. "Que problemas del mundo te gustaria resolver?"
3. "Describe tu dia ideal de trabajo dentro de 10 anos."
4. "Investiga 2 carreras que te interesan: entrevista a un profesional o lee sobre el campo."

**Duracion:** 5-10 minutos cada sesion.
**Criterio de exito:** vocational_clarity incrementa >= 0.15 en 4 semanas.

---

## 4.14 frustration_tolerance / tolerancia a la frustracion (v9)

**Posicion en el grafo:**
- Aristas entrantes: growth_mindset (+0.25)
- Aristas salientes: study_adherence (+0.20)
- Efecto total en mastery: 0.20 x 0.30 = 0.060

**Objetivo:** Incrementar la capacidad del estudiante para persistir ante la dificultad sin abandonar.

### Accion 4.14.1: Growth mindset interventions

**Descripcion:** Intervenciones breves tipo Yeager y Dweck (2012) que ensenan que la inteligencia es maleable y que la dificultad es senal de aprendizaje, no de incapacidad. El estudio nacional de Yeager et al. (2019, N > 12.000) confirmo que el efecto es real aunque modesto (0.10 puntos GPA) y concentrado en estudiantes de bajo rendimiento.

**Variables impactadas:** frustration_tolerance (via growth_mindset, w = +0.25), growth_mindset (directo), self_efficacy (indirecto).

**Formato:** Intervencion en 2 sesiones de 25 minutos:
- Sesion 1: "Tu cerebro es como un musculo: se fortalece con el esfuerzo. Las neuronas forman nuevas conexiones cada vez que practicas algo dificil." (Lectura + preguntas de reflexion).
- Sesion 2: "Escribe un mensaje para un estudiante mas joven que esta pasando por dificultades academicas, explicandole que la inteligencia se puede desarrollar." (Saying-is-believing technique; Aronson, Fried y Good, 2002).

**Frecuencia:** 2 sesiones en las primeras 2 semanas, con refuerzo mensual (1 sesion booster).

### Accion 4.14.2: Reframing del error

**Descripcion:** Sistematizacion de mensajes que reencuadran los errores como informacion util, no como fracasos. Cada error activa un mensaje que explicita que aprendio el estudiante del error.

**Variables impactadas:** frustration_tolerance (directo), anxiety (reduccion indirecta), growth_mindset (refuerzo).

**Formato:** Feedback post-error enriquecido:
- En lugar de solo "Incorrecto", mostrar: "Incorrecto. El error mas comun aqui es confundir correlacion con causalidad. Veamos la diferencia..."
- "Este error te ensena algo: necesitas revisar [concepto X]. Lo agregaremos a tu plan de revision."
- Despues de 3 errores seguidos: "Los errores consecutivos son normales cuando estas aprendiendo algo nuevo. El 70% de los estudiantes necesita 3-4 intentos antes de dominar este tipo de problema."

**Frecuencia:** Automatica tras cada error.

### Accion 4.14.3: Desafios de persistencia graduados

**Descripcion:** Actividades disenadas para practicar la persistencia en un entorno controlado y con apoyo. El estudiante recibe problemas de dificultad creciente con la instruccion explicita de "intentar al menos 3 veces antes de pedir ayuda".

**Variables impactadas:** frustration_tolerance (practica directa), mastery (aprendizaje profundo por esfuerzo), self_efficacy (incremento tras exito con esfuerzo).

**Formato:** "Modo desafio" — 5 problemas de dificultad creciente, con sistema de hints:
- Intento 1: Sin ayuda.
- Intento 2: Hint general ("Piensa en que tipo de problema es este").
- Intento 3: Hint especifico ("Usa la formula de...").
- Si falla 3 veces: Explicacion completa + problema analogo para practicar.

**Frecuencia:** 1-2 veces por semana.

---

## 4.15 metacognition / metacognicion (v3)

**Posicion en el grafo:**
- Aristas entrantes: (variable exogena en modelo estatico)
- Aristas salientes: study_adherence (+0.25)
- Efecto total en mastery: 0.25 x 0.30 = 0.075

**Objetivo:** Desarrollar la capacidad del estudiante para planificar, monitorear y evaluar su propio aprendizaje.

### Accion 4.15.1: Autoevaluacion pre y post sesion

**Descripcion:** Antes de cada sesion, el estudiante estima su nivel de dominio en los KCs que va a practicar. Al final, compara su estimacion con su rendimiento real. Basado en la investigacion de Schraw y Dennison (1994) sobre monitoreo metacognitivo.

**Variables impactadas:** metacognition (directo), confidence (mejora de calibracion).

**Formato:**
- Pre-sesion: "Del 1 al 5, que tanto dominas [KC]?" (5 segundos).
- Post-sesion: "Tu estimacion era 3/5. Tu precision real fue 72%. Tu calibracion esta mejorando."

**Frecuencia:** Cada sesion.
**Criterio de exito:** Correlacion entre estimacion y rendimiento >= 0.60 (buena calibracion).

### Accion 4.15.2: Planning de sesion guiado

**Descripcion:** Al inicio de cada sesion, el estudiante define un objetivo especifico y una estrategia. Basado en el modelo de autorregulacion de Zimmerman (2002) — fase de premeditacion.

**Variables impactadas:** metacognition (planificacion), study_adherence (compromiso con un plan).

**Formato:** Prompt rapido (15 segundos):
- "Hoy quiero: (a) aprender algo nuevo / (b) repasar lo anterior / (c) practicar para simulacro"
- "Mi meta para esta sesion es: [seleccionar entre 3 opciones generadas por el sistema]"

**Frecuencia:** Cada sesion.

### Accion 4.15.3: Reflexion post-sesion

**Descripcion:** Breve reflexion al final de cada sesion sobre que se aprendio, que fue dificil, y que estrategia se usara la proxima vez. Basado en la fase de autorreflexion del modelo de Zimmerman (2002).

**Variables impactadas:** metacognition (evaluacion), emotional_state (procesamiento), mastery (consolidacion por elaboracion).

**Formato:** 2 preguntas rapidas (30 segundos total):
- "Lo mas importante que aprendi hoy fue: [texto libre o seleccion]"
- "Mi plan para la proxima sesion: [texto libre o seleccion]"

**Frecuencia:** Cada sesion (opcional pero incentivado con XP bonus).

---

## 4.16 time_management / gestion del tiempo (v12)

**Posicion en el grafo:**
- Aristas entrantes: (variable exogena)
- Aristas salientes: study_adherence (+0.30)
- Efecto total en mastery: 0.30 x 0.30 = 0.090

**Objetivo:** Mejorar la percepcion de control temporal y la capacidad de planificar el estudio de manera efectiva.

### Accion 4.16.1: Planificacion semanal guiada

**Descripcion:** Herramienta de planificacion semanal integrada en la app que ayuda al estudiante a distribuir sus sesiones de estudio. Basado en Macan et al. (1990): la percepcion de control sobre el tiempo es el predictor mas fuerte del rendimiento.

**Variables impactadas:** time_management (directo), study_adherence (indirecto), stress_level (reduccion por sensacion de control).

**Formato:** Vista de calendario semanal donde el estudiante marca:
- Bloques de estudio disponibles (considerando colegio, actividades, descanso).
- Materias asignadas a cada bloque.
- El sistema sugiere una distribucion optima basada en espaciamiento y prioridad de KCs.

**Frecuencia:** Semanal (domingo o lunes).
**Criterio de exito:** >= 70% de bloques planificados se convierten en sesiones completadas.

### Accion 4.16.2: Priorizacion por impacto

**Descripcion:** El sistema recomienda en que materia/KCs focalizarse basandose en el analisis del grafo: que KCs tienen el mayor margen de mejora y mayor impacto en el puntaje PAES estimado.

**Variables impactadas:** time_management (uso eficiente del tiempo), mastery (focalizacion en areas de mayor impacto).

**Formato:** Recomendacion semanal:
- "Esta semana, focalizate en Algebra (35% de tu deficit) y Comprension Lectora (28% de tu deficit). Probabilidad y Estadistica puede esperar (solo 12% de tu deficit)."
- "Tienes 5 horas disponibles. Distribucion sugerida: 2h Algebra, 1.5h Lectura, 1h Revision, 0.5h Simulacro."

**Frecuencia:** Semanal, integrada en la planificacion.

### Accion 4.16.3: Reporte de uso del tiempo

**Descripcion:** Visualizacion de como el estudiante usa su tiempo de estudio en la plataforma: cuanto tiempo por materia, cuantas sesiones por semana, rendimiento por hora del dia.

**Variables impactadas:** time_management (autoconciencia), metacognition (monitoreo).

**Formato:** Dashboard semanal con:
- Horas totales de estudio.
- Distribucion por materia (grafico circular).
- Rendimiento por franja horaria ("Tu precision es 15% mayor cuando estudias entre 10am y 12pm").
- Comparacion con la semana anterior.

**Frecuencia:** Disponible permanentemente; resumen semanal.

---

## 4.17 growth_mindset / mentalidad de crecimiento (v21)

**Posicion en el grafo:**
- Aristas entrantes: (variable exogena)
- Aristas salientes: frustration_tolerance (+0.25)
- Efecto total en mastery: 0.25 x 0.20 x 0.30 = 0.015

**Objetivo:** Fomentar la creencia de que la inteligencia y las habilidades son desarrollables mediante esfuerzo y estrategia.

### Accion 4.17.1: Intervencion tipo Yeager y Dweck

**Descripcion:** Intervencion breve (2 sesiones de 25 minutos) basada en el protocolo nacional de Yeager et al. (2019), adaptada al contexto chileno. Incluye lectura sobre neuroplasticidad, testimonios de estudiantes, y actividad de escritura "saying is believing".

**Variables impactadas:** growth_mindset (directo), frustration_tolerance (indirecto, w = +0.25).

**Formato:** Detallado en Accion 4.14.1 (se comparte con frustration_tolerance).

### Accion 4.17.2: Lenguaje de proceso en todo el feedback

**Descripcion:** Sistematizacion del lenguaje de feedback para enfatizar proceso (esfuerzo, estrategia, mejora) sobre rasgo (inteligencia, talento). Basado en la investigacion de Mueller y Dweck (1998) sobre los efectos del tipo de elogio.

**Variables impactadas:** growth_mindset (refuerzo continuo), self_efficacy (refuerzo), motivation (refuerzo).

**Formato:** Todo feedback generado por el sistema sigue las reglas:
- Elogiar esfuerzo: "Tu practica constante esta dando resultados."
- Elogiar estrategia: "Buen uso del metodo de eliminacion en este item."
- Elogiar mejora: "Subiste de 60% a 78% en geometria. El progreso es claro."
- **Nunca** elogiar rasgo: Evitar "Eres muy inteligente" o "Tienes talento natural."

**Frecuencia:** En todo feedback, permanente.

### Accion 4.17.3: Historias de superacion basadas en evidencia

**Descripcion:** Contenido que presenta evidencia cientifica sobre neuroplasticidad y casos de mejora significativa, desmitificando la idea de que "la inteligencia es fija".

**Variables impactadas:** growth_mindset (directo), self_efficacy (indirecto).

**Formato:** Micro-contenidos de 60 segundos:
- "El cerebro de los adultos que aprenden a tocar piano muestra cambios visibles en las imagenes cerebrales despues de solo 3 meses de practica."
- "En Chile, miles de estudiantes suben mas de 100 puntos entre su primer ensayo y la PAES real cada ano."

**Frecuencia:** 1 por semana, integrada en la experiencia.

---

## 4.18 physical_activity / actividad fisica (v16)

**Posicion en el grafo:**
- Aristas entrantes: (variable exogena)
- Aristas salientes: sleep_quality (+0.25), emotional_state (+0.30), stress_level (-0.25)
- Efecto total en mastery: 0.122 (tercer leverage point — unica variable con 3 aristas salientes)

**Objetivo:** Fomentar la actividad fisica regular como herramienta para mejorar sueno, estado emocional y reducir estres.

### Accion 4.18.1: Nudges de movimiento

**Descripcion:** Recordatorios contextuales para realizar actividad fisica, vinculados a los beneficios documentados para el rendimiento academico. Biddle y Asare (2011) reportaron efectos positivos del ejercicio en depresion (d = -0.36) y ansiedad (d = -0.37) en adolescentes.

**Variables impactadas:** physical_activity (directo), sleep_quality (indirecto, w = +0.25), emotional_state (indirecto, w = +0.30), stress_level (indirecto, w = -0.25).

**Formato:** Notificaciones contextuales:
- Despues de 3+ horas sin movimiento: "Un break de 10 minutos de caminata mejora tu concentracion para la proxima sesion."
- Antes de una sesion de estudio: "15 minutos de ejercicio antes de estudiar aumenta tu capacidad de atencion."
- Fin de semana: "Actividad fisica este fin de semana = mejor sueno = mejor rendimiento la proxima semana."

**Frecuencia:** 1-2 nudges diarios, solo si physical_activity < 0.40.

### Accion 4.18.2: Conexion ejercicio-cognicion visible

**Descripcion:** Mostrar al estudiante la correlacion entre sus datos de actividad fisica y su rendimiento academico, haciendo visible el impacto causal.

**Variables impactadas:** physical_activity (incremento por evidencia personal), metacognition (autoconciencia).

**Formato:** Reporte mensual:
- "Las semanas que hiciste ejercicio 3+ dias, tu precision fue X%. Las semanas con 0-1 dias, fue Y%."
- "Tu mejor rendimiento coincide con tus semanas de mayor actividad fisica."

**Frecuencia:** Mensual.

### Accion 4.18.3: Rutinas de ejercicio minimas

**Descripcion:** Sugerencias de rutinas de ejercicio de 7-15 minutos que no requieren equipamiento, disenadas para estudiantes que no practican deporte regularmente.

**Variables impactadas:** physical_activity (reduccion de la barrera de entrada).

**Formato:** Video o GIF de rutina breve (estiramientos, sentadillas, caminata rapida) disponible en la seccion de bienestar de la app.
**Frecuencia:** Disponible permanentemente; sugerido 3 veces por semana.

**Efecto esperado de incrementar physical_activity en +0.30:**
- delta_sleep_quality = 0.30 x 0.25 = +0.075
- delta_emotional_state = 0.30 x 0.30 = +0.09
- delta_stress_level = 0.30 x (-0.25) = -0.075
- delta_mastery total (via todos los caminos) = 0.30 x 0.122 = ~+0.037 (~4 puntos PAES)

> **Nota:** Estos efectos son modestos individualmente pero acumulativos: la combinacion de intervenciones sobre multiples variables puede producir deltas combinados de 0.15-0.25 en mastery (~17-28 puntos PAES).

---

## 4.19 screen_time / tiempo de pantalla (v14)

**Posicion en el grafo:**
- Aristas entrantes: (variable exogena)
- Aristas salientes: sleep_quality (-0.40)
- Efecto total en mastery: via sleep -> attention (0.40 x 0.45 x 0.30 = 0.054) + via sleep -> fatigue (0.40 x 0.50 x 0.40 x 0.30 = 0.024). Total: ~0.078

**Objetivo:** Reducir el screen time recreativo, especialmente antes de dormir, para proteger la calidad del sueno.

### Accion 4.19.1: Digital wellness — limites sugeridos

**Descripcion:** El sistema sugiere limites de screen time basados en la evidencia de Hale y Guan (2015) sobre el impacto del uso de pantallas en el sueno adolescente.

**Variables impactadas:** screen_time (reduccion directa), sleep_quality (mejora indirecta, w = -0.40).

**Formato:** Recomendaciones personalizadas:
- Si screen_time > 0.70: "Tu uso de pantallas recreativas esta impactando tu sueno. Un objetivo realista: reducir 30 minutos por dia esta semana."
- Si screen_time es alto y sleep_quality es baja: "Tus datos muestran una correlacion clara: los dias con mas de 4 horas de pantalla, tu sueno es 40% peor."

**Frecuencia:** Semanal si screen_time > 0.60.

### Accion 4.19.2: Screen curfew antes de dormir

**Descripcion:** Protocolo especifico para eliminar el uso de pantallas en los 30-60 minutos previos a dormir. Los mecanismos de dano son tres: supresion de melatonina por luz azul, arousal cognitivo, y desplazamiento temporal (Hale y Guan, 2015; Carter, Rees, Hale, Bhattacharjee y Paradkar, 2016).

**Variables impactadas:** screen_time (reduccion del segmento critico), sleep_quality (mejora directa).

**Formato:** Notificacion push + modo nocturno de la app:
- "Son las [hora-30min]. Activa el modo noche: ultima revision de flashcards ligeras y luego a descansar."
- La app cambia a modo dark con contenido de baja estimulacion (revision pasiva, audios de repaso).

**Frecuencia:** Diaria.

### Accion 4.19.3: Sustitucion de screen time por estudio

**Descripcion:** En lugar de prohibir el screen time (lo que genera resistencia), redirigir parte del tiempo hacia la app de estudio. "Si vas a usar el celular, que sea para algo productivo."

**Variables impactadas:** screen_time (redistribucion), study_adherence (incremento), mastery (mas practica).

**Formato:** Notificacion inteligente cuando el estudiante lleva 30+ minutos en redes sociales (requiere integracion con APIs de bienestar digital del OS):
- "Llevas 30 minutos en [app]. Una sesion rapida de 5 minutos en Renddi te ayudaria mas."

**Frecuencia:** 1-2 veces al dia cuando screen_time es alto.

---

## 4.20 parental_support / apoyo parental (v18)

**Posicion en el grafo:**
- Aristas entrantes: (variable exogena)
- Aristas salientes: emotional_state (+0.25)
- Efecto total en mastery: via emotional_state -> motivation -> adherence -> mastery (0.25 x 0.30 x 0.35 x 0.30 = 0.008)

**Objetivo:** Mejorar la calidad del apoyo parental, transformando presion excesiva en apoyo genuino.

### Accion 4.20.1: Guias para padres

**Descripcion:** Contenido educativo breve para los padres/apoderados sobre como apoyar efectivamente a su hijo/a durante la preparacion PAES. Basado en la evidencia de que las expectativas parentales tienen el efecto mas fuerte (r = 0.40; Fan y Chen, 2001) pero la presion excesiva incrementa la ansiedad (Levpuscek y Zupancic, 2009).

**Variables impactadas:** parental_support (mejora de calidad), emotional_state (reduccion de estres si habia presion), anxiety (reduccion indirecta).

**Formato:** Serie de 4 mensajes semanales enviados al apoderado (email o WhatsApp, con consentimiento):
1. "Como apoyar sin presionar: la diferencia entre expectativas altas y presion excesiva."
2. "Senales de estres en su hijo/a y como responder."
3. "Celebre el proceso, no solo el resultado: frases que ayudan vs frases que presionan."
4. "Su hijo/a lleva [N] sesiones completadas. Reconozca su esfuerzo."

**Frecuencia:** Semanal durante las primeras 4 semanas.

### Accion 4.20.2: Reporte de progreso para apoderados

**Descripcion:** Resumen semanal del progreso del estudiante enviado al apoderado (con consentimiento del estudiante), disenado para fomentar conversaciones positivas sobre el proceso de preparacion.

**Variables impactadas:** parental_support (informacion para apoyo informado), emotional_state (mejora del ambiente familiar).

**Formato:** Reporte breve con:
- Sesiones completadas / planificadas.
- KCs nuevos dominados.
- Streak actual.
- **Nunca:** comparacion con otros estudiantes ni puntaje PAES estimado (para evitar presion).

**Frecuencia:** Semanal (opcional, activado por el estudiante).

### Accion 4.20.3: Comunicacion sobre presion excesiva

**Descripcion:** Cuando el sistema detecta que parental_support es bajo Y anxiety es alta (perfil tipo Isidora), se activa una intervencion dirigida al apoderado.

**Variables impactadas:** parental_support (transformacion de presion en apoyo), anxiety (reduccion indirecta).

**Formato:** Mensaje especifico al apoderado:
- "Sabemos que usted quiere lo mejor para su hijo/a. Los estudios muestran que el apoyo emocional es mas efectivo que la presion para mejorar el rendimiento. Preguntas como 'como te fue?' son mas productivas que 'cuanto sacaste?'."

**Frecuencia:** Activada cuando parental_support < 0.30 y anxiety > 0.60.

---

## 4.21 stress_level / nivel de estres (v10)

**Posicion en el grafo:**
- Aristas entrantes: physical_activity (-0.25)
- Aristas salientes: anxiety (+0.45), sleep_quality (-0.35), emotional_state (-0.35)
- Efecto total en mastery: 0.255 (PRIMER leverage point del grafo — mayor efecto total)

**Objetivo:** Reducir el nivel de estres percibido, desbloqueando la cascada de mayor impacto en mastery via ansiedad, sueno y estado emocional.

### Accion 4.21.1: Tecnicas de regulacion del estres

**Descripcion:** Repertorio de tecnicas breves de manejo del estres basadas en evidencia, disponibles en la app para uso inmediato.

**Variables impactadas:** stress_level (reduccion directa), anxiety (reduccion indirecta, w = +0.45), sleep_quality (mejora indirecta, w = -0.35), emotional_state (mejora indirecta, w = -0.35).

**Tecnicas disponibles:**
1. **Respiracion 4-7-8:** Inhalar 4 seg, sostener 7 seg, exhalar 8 seg. Basado en la activacion del sistema nervioso parasimpatico.
2. **Relajacion muscular progresiva (5 min):** Tension y relajacion secuencial de grupos musculares. Jacobson (1938) y meta-analisis posteriores confirman su efectividad.
3. **Grounding 5-4-3-2-1:** Nombrar 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que saboreas. Tecnica de anclaje sensorial.
4. **Reencuadre cognitivo:** "Que evidencia tengo de que [pensamiento estresante] es cierto? Cual es la peor/mejor/mas probable situacion?"

**Formato:** Audio guiado de 2-5 minutos por tecnica, accesible desde menu rapido.
**Frecuencia:** Disponible permanentemente; sugerido activamente cuando stress_level > 0.60.

### Accion 4.21.2: Breathing exercises integrados

**Descripcion:** Ejercicios de respiracion integrados directamente en la sesion de estudio (antes, durante pausas, y despues).

**Variables impactadas:** stress_level (reduccion), anxiety (reduccion), attention_span (mejora por regulacion).

**Formato:** Animacion de respiracion (circulo que se expande y contrae) con contador de ciclos.
**Duracion:** 1-3 minutos.
**Frecuencia:** Opcional antes de cada sesion; automatica si stress_level > 0.70.

### Accion 4.21.3: Deteccion proactiva de picos de estres

**Descripcion:** El sistema identifica periodos de alto estres (semanas previas a ensayos PAES oficiales, periodos de examenes escolares) y activa intervenciones preventivas.

**Variables impactadas:** stress_level (prevencion de picos), anxiety (prevencion), sleep_quality (proteccion).

**Formato:**
- Semana pre-ensayo: Reducir carga de contenido nuevo, focalizar en revision y consolidacion.
- Mensajes de normalizacion: "Esta semana es estresante para todos los estudiantes PAES. Es normal sentir mas presion."
- Sugerencia de actividades restaurativas: ejercicio, descanso adicional, actividades sociales.

**Frecuencia:** Automatica en periodos identificados de alto estres.

**Efecto esperado de reducir stress_level en -0.20:**
- delta_anxiety = 0.20 x 0.45 = -0.09
- delta_sleep_quality = 0.20 x 0.35 = +0.07
- delta_emotional_state = 0.20 x 0.35 = +0.07
- delta_mastery total (via los 5 caminos) = 0.20 x 0.255 = ~+0.051 (~6 puntos PAES)

> **Nota:** Estos efectos son modestos individualmente pero acumulativos: la combinacion de intervenciones sobre multiples variables puede producir deltas combinados de 0.15-0.25 en mastery (~17-28 puntos PAES).

---

# Capitulo 5. Ejercicios y Actividades Disenadas por Materia PAES

## 5.1 Estructura general de actividades

Cada actividad del banco sigue una ficha estandar:

| Campo | Descripcion |
|-------|-------------|
| ID | Codigo unico (MAT-001, LEN-001, etc.) |
| Materia | Matematicas, Lenguaje, Ciencias, Historia |
| KC objetivo | Knowledge Component(s) especifico(s) |
| Variable(s) del grafo | Variable(s) que impacta directamente |
| Tipo | Quiz, Simulacion, Reflexion, Practica, Desafio |
| Nivel de dificultad | Basico (P > 0.70), Intermedio (0.40-0.70), Avanzado (P < 0.40) |
| Duracion | En minutos |
| Formato | Seleccion multiple, respuesta abierta, interactivo |

## 5.2 Matematicas PAES

### MAT-001: Diagnostico rapido de algebra

**KC:** Expresiones algebraicas, ecuaciones lineales, sistemas de ecuaciones.
**Variables:** mastery (directo), confidence (via exito calibrado).
**Tipo:** Quiz adaptativo.
**Nivel:** Basico a Intermedio.
**Duracion:** 10 minutos.
**Formato:** 12 items IRT con dificultad adaptativa. Incluye items de:
- Simplificacion de expresiones: "Simplifica 3(2x - 4) + 5x"
- Ecuaciones lineales: "Si 2x + 7 = 15, entonces x = ?"
- Sistemas: "Resuelve el sistema: x + y = 10; 2x - y = 5"

### MAT-002: Funciones y sus representaciones

**KC:** Funcion lineal, cuadratica, exponencial; graficos; dominio y recorrido.
**Variables:** mastery (directo), cognitive_load (gestion via worked examples).
**Tipo:** Practica con fading.
**Nivel:** Intermedio.
**Duracion:** 15 minutos.
**Formato:** Secuencia de 6 problemas con fading progresivo. Incluye interpretacion de graficos tipo PAES: "El grafico muestra la altura de un proyectil en funcion del tiempo. En que intervalo de tiempo el proyectil esta ascendiendo?"

### MAT-003: Probabilidad y estadistica contextualizada

**KC:** Probabilidad clasica, condicional, tablas de frecuencia, medidas de tendencia central.
**Variables:** mastery (directo), metacognition (via discriminacion de tipos de problemas con interleaving).
**Tipo:** Quiz con interleaving.
**Nivel:** Intermedio a Avanzado.
**Duracion:** 12 minutos.
**Formato:** 10 items que alternan entre probabilidad y estadistica. Contextos chilenos: "En una encuesta del INE, el 45% de los jovenes de 15-19 anos practica deporte regularmente. Si se seleccionan 3 jovenes al azar..."

### MAT-004: Geometria y medicion

**KC:** Teorema de Pitagoras, areas, volumenes, transformaciones isometricas.
**Variables:** mastery (directo), cognitive_load (gestion via visualizaciones).
**Tipo:** Practica interactiva.
**Nivel:** Basico a Intermedio.
**Duracion:** 12 minutos.
**Formato:** 8 items con apoyo visual (diagramas interactivos). Ejemplo: "Un terreno rectangular tiene 30m de largo y 20m de ancho. Se construye una piscina circular de 5m de radio en el centro. Cual es el area del terreno sin piscina?"

### MAT-005: Simulacro PAES Matematicas

**KC:** Todos los KCs de Matematicas.
**Variables:** mastery (evaluacion), anxiety (exposicion gradual), time_management (practica bajo presion).
**Tipo:** Simulacion.
**Nivel:** Mixto (replica distribucion PAES real).
**Duracion:** 30 minutos (version corta: 30 items) o 150 minutos (version completa: 65 items).
**Formato:** Condiciones PAES: temporizador, sin feedback hasta el final, alternativas de 4 opciones. Post-simulacro: reporte detallado por KC con recomendaciones.

## 5.3 Lenguaje y Comunicacion PAES

### LEN-001: Comprension de textos argumentativos

**KC:** Identificacion de tesis, argumentos, contrargumentos; proposito comunicativo.
**Variables:** mastery (directo), metacognition (via autoevaluacion de comprension).
**Tipo:** Practica con reflexion.
**Nivel:** Intermedio.
**Duracion:** 15 minutos.
**Formato:** 1 texto argumentativo (400-600 palabras) + 5 preguntas. Textos sobre temas de actualidad chilena: medioambiente, educacion, tecnologia. Incluye preguntas de:
- Identificacion de tesis central.
- Funcion de conectores ("sin embargo", "por lo tanto").
- Evaluacion de la solidez argumentativa.

### LEN-002: Vocabulario contextual

**KC:** Inferencia de significado por contexto, sinonimos, antonimos.
**Variables:** mastery (directo), confidence (via exito en items calibrados).
**Tipo:** Quiz adaptativo.
**Nivel:** Basico a Intermedio.
**Duracion:** 8 minutos.
**Formato:** 10 items donde el estudiante infiere el significado de una palabra destacada en un fragmento textual. Ejemplo: "El orador utilizo una retorica *grandilocuente* para impresionar a su audiencia. En este contexto, 'grandilocuente' significa..."

### LEN-003: Analisis de textos literarios

**KC:** Figuras literarias, narradores, tipos de mundo, intertextualidad.
**Variables:** mastery (directo), cognitive_load (gestion via chunking de textos largos).
**Tipo:** Practica guiada.
**Nivel:** Intermedio a Avanzado.
**Duracion:** 15 minutos.
**Formato:** Fragmento literario + 4 preguntas de analisis. Incluye autores del canon chileno cuando es posible: Mistral, Neruda, Donoso, Bombal.

### LEN-004: Produccion textual (reflexion escrita)

**KC:** Coherencia, cohesion, adecuacion, estructura argumentativa.
**Variables:** mastery (directo), metacognition (autoevaluacion de escritura), emotional_state (procesamiento via escritura expresiva).
**Tipo:** Reflexion.
**Nivel:** Intermedio.
**Duracion:** 10 minutos.
**Formato:** Prompt de escritura + evaluacion automatica por IA: "En 150 palabras, argumenta a favor o en contra de la siguiente afirmacion: 'Las redes sociales tienen mas beneficios que perjuicios para los adolescentes.'" Feedback sobre estructura, coherencia y uso de conectores.

## 5.4 Ciencias PAES

### CIE-001: Biologia — genetica y herencia

**KC:** Herencia mendeliana, alelos, genotipos, fenotipos, probabilidades geneticas.
**Variables:** mastery (directo), cognitive_load (gestion via chunking).
**Tipo:** Practica con fading.
**Nivel:** Intermedio.
**Duracion:** 12 minutos.
**Formato:** Secuencia de 5 problemas con worked examples → fading. Contextos: daltonismo, grupos sanguineos, enfermedades geneticas.

### CIE-002: Fisica — cinematica

**KC:** MRU, MRUA, caida libre, graficos posicion-tiempo, velocidad-tiempo.
**Variables:** mastery (directo), metacognition (discriminacion de tipos de movimiento).
**Tipo:** Quiz con interleaving.
**Nivel:** Intermedio.
**Duracion:** 12 minutos.
**Formato:** 8 items que mezclan problemas numericos con interpretacion de graficos. Contexto: "Un autobus del Transantiago parte del reposo y acelera uniformemente..."

### CIE-003: Quimica — estequiometria

**KC:** Balanceo de ecuaciones, mol, masa molar, relaciones estequiometricas.
**Variables:** mastery (directo), cognitive_load (chunking por pasos).
**Tipo:** Practica guiada.
**Nivel:** Intermedio a Avanzado.
**Duracion:** 15 minutos.
**Formato:** Problemas de 3-4 pasos con scaffolding progresivo.

## 5.5 Historia y Ciencias Sociales PAES

### HIS-001: Institucionalidad politica chilena

**KC:** Poderes del Estado, Constitucion, derechos fundamentales.
**Variables:** mastery (directo), vocational_clarity (conexion con carreras de ciencias sociales).
**Tipo:** Quiz + reflexion.
**Nivel:** Basico a Intermedio.
**Duracion:** 10 minutos.
**Formato:** 8 items de seleccion multiple + 1 pregunta de reflexion. Contexto actual: "Segun la Constitucion vigente, que poder del Estado es responsable de..."

### HIS-002: Procesos historicos del siglo XX chileno

**KC:** Gobiernos radicales, reforma agraria, Unidad Popular, dictadura, transicion democratica.
**Variables:** mastery (directo), metacognition (cronologia y causalidad historica).
**Tipo:** Practica con linea de tiempo interactiva.
**Nivel:** Intermedio.
**Duracion:** 12 minutos.
**Formato:** Actividad de ordenamiento cronologico + preguntas de relacion causa-efecto.

### HIS-003: Geografia y territorio

**KC:** Regiones de Chile, riesgos naturales, sustentabilidad, demografia.
**Variables:** mastery (directo).
**Tipo:** Quiz con mapas interactivos.
**Nivel:** Basico.
**Duracion:** 8 minutos.
**Formato:** 6 items con apoyo cartografico.

---

# Capitulo 6. Sistema de Feedback

## 6.1 Diseno del feedback loop

El feedback en Renddi opera como un ciclo cerrado que conecta la accion del estudiante con la actualizacion del grafo causal:

```
Accion del estudiante -> Respuesta/Comportamiento observado -> Actualizacion de variables del grafo -> Seleccion de feedback -> Entrega al estudiante -> Nueva accion
```

Este ciclo se ejecuta en tiempo real (feedback inmediato intra-sesion) y en diferido (reportes periodicos).

## 6.2 Tipos de feedback

### 6.2.1 Feedback inmediato (post-item)

Se entrega despues de cada respuesta durante la practica. Su funcion principal es corregir errores y reforzar aciertos.

**Respuesta correcta:**
- Confirmacion breve: "Correcto."
- Explicacion opcional (activable): "Correcto. El razonamiento es: [explicacion de 2-3 lineas]."
- Refuerzo de proceso: "Correcto. Tu estrategia de eliminacion funciono bien aqui."

**Respuesta incorrecta:**
- Correccion con explicacion: "Incorrecto. La respuesta correcta es B porque [explicacion]."
- Diagnostico del error: "Tu respuesta sugiere que confundiste [concepto A] con [concepto B]."
- Siguiente paso: "Este concepto se revisara en tu proxima sesion de repeticion espaciada."

**Variables impactadas:** mastery (correccion de errores), confidence (calibracion), frustration_tolerance (normalizacion del error).

### 6.2.2 Feedback diferido (post-sesion)

Se entrega al final de cada sesion. Resume el rendimiento y conecta con el progreso a largo plazo.

**Contenido:**
- Precision de la sesion (% correcto).
- KCs practicados y progreso en cada uno.
- Comparacion con sesiones anteriores ("Tu precision en algebra subio de 65% a 72%").
- Sugerencia para la proxima sesion.

**Variables impactadas:** self_efficacy (via progreso visible), metacognition (via autoevaluacion), motivation (via percepcion de avance).

### 6.2.3 Feedback elaborado (semanal)

Reporte semanal que integra multiples sesiones y conecta el rendimiento con las variables del grafo.

**Contenido:**
- Sesiones completadas / planificadas (study_adherence).
- KCs nuevos dominados (mastery).
- Tendencia de precision (mastery trend).
- Estado emocional promedio (emotional_state trend).
- Recomendaciones priorizadas ("Tu mayor oportunidad de mejora esta semana es en probabilidades").

## 6.3 Calibracion del feedback por perfil

El tono, frecuencia e intensidad del feedback se calibran segun el perfil del estudiante:

| Perfil | Tono del feedback | Frecuencia | Enfasis |
|--------|-------------------|------------|---------|
| Ansioso (Matias, Isidora) | Calmante, normalizador | Moderada (evitar sobrecarga) | Progreso, no gaps |
| Tardio (Joaquin) | Energizante, celebratorio | Alta (mantener engagement) | Logros, relevancia personal |
| Social (Tomas) | Colaborativo, grupal | Moderada | Conexion social, estudio en grupo |
| Quemada (Martina) | Contenedor, cuidadoso | Baja (priorizar descanso) | Bienestar, pausas, autocuidado |
| Gamer (Benjamin) | Competitivo, directo | Alta (dopamina de logro) | Puntos, streaks, desafios |
| Resiliente (Camila) | Empoderador | Moderada | Estrategias, conexion social |
| Aplicada (Valentina) | Analitico, detallado | Baja (no necesita refuerzo) | Optimizacion, gaps especificos |
| TDAH (Francisca) | Breve, visual | Muy alta (frecuente y corto) | Micro-logros, variedad |
| Deportista (Diego) | Analogias deportivas | Moderada | Metas, entrenamiento |

## 6.4 Como el feedback alimenta el grafo

Cada interaccion de feedback genera datos que actualizan las variables del grafo:

- **Respuesta correcta/incorrecta:** Actualiza P(L) via BKT → mastery.
- **Tiempo de respuesta:** Informa attention_span y fatigue.
- **Uso de hints:** Informa cognitive_load y metacognition.
- **Confianza reportada:** Actualiza confidence.
- **Check-in emocional post-sesion:** Actualiza emotional_state.
- **Sesion completada/abandonada:** Actualiza study_adherence.

---

# Capitulo 7. Gamificacion y Engagement

## 7.1 Marco conceptual

La gamificacion en Renddi se fundamenta en tres marcos teoricos:

1. **Self-Determination Theory (Deci y Ryan, 2000):** Los elementos gamificados deben satisfacer las tres necesidades psicologicas basicas — autonomia (opciones), competencia (desafio calibrado), y relacion (conexion social).

2. **Flow Theory (Csikszentmihalyi, 1990):** La experiencia optima se logra cuando el desafio esta calibrado a la habilidad del estudiante — ni demasiado facil (aburrimiento) ni demasiado dificil (ansiedad).

3. **Octalysis Framework (Chou, 2015):** Se priorizan los drivers de motivacion intrinseca (significado, empoderamiento, influencia social, imprevisibilidad) sobre los extrinsecos (posesion, escasez, aversion a la perdida).

## 7.2 Sistema de puntos (XP)

**Mecanica:** Cada accion en la plataforma genera XP (Experience Points):
- Completar un item: 10 XP base, multiplicado por precision y dificultad.
- Completar una sesion: 50 XP bonus.
- Streak diario: 20 XP x dias consecutivos (cap a 200 XP/dia por streak).
- Dominar un KC: 100 XP.
- Completar meta semanal: 200 XP.

**Variables del grafo vinculadas:**
- XP por sesion -> study_adherence (mide y refuerza).
- XP por KC dominado -> mastery + self_efficacy.
- XP por streak -> study_adherence + motivation.

**Calibracion:** El sistema de XP esta calibrado para que un estudiante promedio (15 min/dia) acumule ~500-700 XP/dia, suficiente para sentir progreso sin inflar artificialmente.

## 7.3 Sistema de badges

Los badges reconocen logros especificos y estan vinculados a variables del grafo:

| Badge | Criterio | Variable del grafo |
|-------|----------|-------------------|
| Primera Sesion | Completar la primera sesion | study_adherence |
| Streak 7 | 7 dias consecutivos | study_adherence |
| Streak 30 | 30 dias consecutivos | study_adherence |
| Maestro de Algebra | Dominar 80% de KCs de algebra | mastery |
| Maestro PAES | Dominar 80% de KCs de una materia completa | mastery |
| Resiliente | Completar sesion despues de 3 dias de pausa | frustration_tolerance |
| Nocturno Reformado | 7 dias consecutivos acostándose antes de las 23:00 | sleep_quality |
| Explorador Vocacional | Completar test RIASEC + investigar 2 carreras | vocational_clarity |
| Tutor | Ayudar a 3 companeros via peer tutoring | social_support |
| Reflexivo | Completar 10 journaling entries | metacognition |
| Zen | Completar 10 ejercicios de respiracion | stress_level |
| Atleta Cognitivo | 7 dias con actividad fisica reportada | physical_activity |

## 7.4 Leaderboards

Los leaderboards se disenan para motivar sin generar ansiedad comparativa:

**Leaderboard grupal (no individual):** Se comparan grupos de estudio, no individuos. Esto reduce la ansiedad social y fomenta la cooperacion.

**Metricas del leaderboard:**
- KCs dominados por el grupo (no puntaje individual).
- Consistencia grupal (dias promedio de actividad).
- Mejora semanal del grupo (delta de KCs).

**Opt-out disponible:** Los estudiantes con anxiety > 0.60 no ven el leaderboard por defecto (pueden activarlo si lo desean).

## 7.5 Narrativa y progresion

La experiencia de Renddi se estructura como un "camino del estudiante" con etapas narrativas:

1. **Etapa 1: Descubrimiento (semana 1-2).** El estudiante conoce su perfil, establece metas, y experimenta sus primeras micro-victorias. Badge: "Comienzo del Camino".
2. **Etapa 2: Fundamentos (semana 3-6).** Construccion de habitos y dominio de KCs basicos. Badge: "Bases Solidas".
3. **Etapa 3: Aceleracion (semana 7-12).** Practica intensiva con interleaving y simulacros. Badge: "Velocidad Crucero".
4. **Etapa 4: Refinamiento (semana 13-16).** Focalizacion en KCs dificiles y simulacros completos. Badge: "Afinando Detalles".
5. **Etapa 5: Preparacion final (semana 17+).** Revision, manejo del estres, y simulacros en condiciones reales. Badge: "Listo/a para la PAES".

## 7.6 Conexion gamificacion-grafo

| Elemento gamificado | Variable del grafo | Mecanismo |
|---------------------|-------------------|-----------|
| XP por sesion | study_adherence | Refuerzo inmediato de la practica |
| Streaks | study_adherence, motivation | Aversion a la perdida mantiene habito |
| Badges de mastery | mastery, self_efficacy | Reconocimiento de progreso real |
| Leaderboard grupal | social_support, motivation | Pertenencia y competencia cooperativa |
| Narrativa de progresion | motivation, self_efficacy | Sentido de avance y proposito |
| Desafios semanales | frustration_tolerance, mastery | Practica deliberada gamificada |
| Celebraciones de hitos | emotional_state, self_efficacy | Refuerzo de emociones positivas |

## 7.7 Anti-patterns de gamificacion

La gamificacion mal implementada puede ser contraproducente. Esta seccion identifica los anti-patterns mas comunes y las mitigaciones disenadas para Renddi.

### 7.7.1 Deteccion de gaming (respuestas al azar para acumular XP)

**Problema:** Estudiantes que responden preguntas al azar o sin leer para acumular XP rapidamente, degradando la senalizacion de mastery y contaminando el modelo IRT.

**Indicadores de deteccion:**
- Tiempo de respuesta < 3 segundos en items que requieren > 15 segundos de lectura (basado en longitud del enunciado y complejidad medida por IRT).
- Patron de respuestas sin correlacion con dificultad del item: accuracy uniforme independiente de b_item (parametro de dificultad IRT).
- Tasa de respuesta correcta significativamente inferior a la esperada por el modelo BKT/IRT del estudiante (>2 SD por debajo de lo predicho).
- Secuencias de respuestas con entropia de Shannon anormalmente baja (patron repetitivo: A-B-C-A-B-C).

**Mitigaciones:**
- **XP condicional:** El XP se otorga solo cuando el tiempo de respuesta supera un umbral minimo basado en la longitud y complejidad del item. Las respuestas instantaneas otorgan 0 XP pero no penalizan.
- **XP por esfuerzo:** Se otorga XP parcial por intentos genuinos aunque incorrectos (tiempo de lectura adecuado, uso de ayudas), reforzando el proceso sobre el resultado.
- **Alerta suave:** Tras 5+ respuestas detectadas como gaming en una sesion, MIYAGI activa un mensaje de reencuadre: "Parece que estas yendo rapido. Si quieres avanzar mas, intenta leer bien cada pregunta — asi el sistema calibra mejor tu nivel y te da preguntas mas utiles."
- **Cuarentena temporal:** Items respondidos en modo gaming no alimentan el modelo IRT/BKT hasta que el estudiante los responda nuevamente en condiciones normales.

### 7.7.2 Streak anxiety mitigation

**Problema:** Los streaks (dias consecutivos de practica) son un motivador potente, pero pueden generar ansiedad cuando el estudiante teme perder una racha larga. Esto es especialmente problematico en perfiles ansiosos (Matias, Isidora) y puede paradojicamente aumentar stress_level, contrarrestando el beneficio de study_adherence.

**Mitigaciones:**
- **Freeze automático:** Cada estudiante recibe 1 "freeze" gratuito por semana (protege el streak sin practicar). Los perfiles ansiosos reciben 2 freezes. El freeze se aplica automaticamente al primer dia perdido, sin necesidad de accion del estudiante.
- **Streak flexible:** En vez de dias consecutivos estrictos, el streak se define como "X de los ultimos 7 dias" (por defecto, 5 de 7). Esto permite 2 dias de descanso semanales sin romper la racha.
- **Techo de streak visible:** El contador de streak no muestra numeros superiores a 30 dias. Tras 30 dias, se transforma en un badge permanente ("Habito consolidado") y el contador reinicia. Esto reduce la presion de mantener rachas extremas.
- **Desacoplamiento XP-streak:** El streak otorga un bonus de XP (x1.2 a x1.5), pero no es la fuente principal de XP. Perder el streak no implica perder XP acumulado.
- **Normalizacion narrativa:** MIYAGI normaliza los dias de descanso: "Los atletas de elite tambien descansan. Tu cerebro consolida lo aprendido mientras duermes."

### 7.7.3 XP ceiling por tipo de actividad

**Problema:** Sin limites, los estudiantes pueden maximizar XP repitiendo actividades faciles (ej: repasar items de baja dificultad que ya dominan) en vez de enfrentar material desafiante que realmente mejoraria su mastery.

**Techo de XP por categoria:**

| Tipo de actividad | XP maximo diario | Justificacion |
|--------------------|-----------------|---------------|
| Practica adaptativa (DOJO) | Sin techo | Actividad core, calibrada por IRT |
| Revision espaciada (FSRS) | 150 XP | Necesaria pero limitada para evitar sobre-revision |
| Quizzes de diagnostico | 100 XP | Solo informativos, no deben ser la fuente principal |
| Journaling emocional | 50 XP | Valioso pero no gamificable en exceso |
| Actividades sociales | 100 XP | Importantes pero no deben sustituir practica individual |
| Mini-juegos de calentamiento | 75 XP | Engagement, pero bajo impacto en mastery |

**Mecanismo:** Al alcanzar el techo, la actividad sigue disponible pero sin XP adicional. El sistema sugiere proactivamente actividades de mayor impacto: "Ya alcanzaste el maximo de XP en revision hoy. Que tal si intentas una sesion de practica adaptativa? Ahi no hay limite."

### 7.7.4 Transicion motivacion extrinseca → intrinseca

**Problema:** La gamificacion basada en recompensas externas (XP, badges, leaderboards) puede socavar la motivacion intrinseca a largo plazo (Deci, Koestner y Ryan, 1999). El efecto de sobrejustificacion (overjustification effect) ocurre cuando las recompensas externas reemplazan las razones internas para estudiar.

**Estrategia de transicion en 4 fases:**

**Fase 1 — Enganche (semanas 1-3):** Gamificacion completa. XP generosos, badges frecuentes, leaderboard activo. Objetivo: establecer el habito y la conexion con la plataforma. Variable target: study_adherence.

**Fase 2 — Atenuacion (semanas 4-8):** Reduccion gradual de la prominencia visual de XP. Los badges se vuelven menos frecuentes pero mas significativos (basados en logros reales de mastery, no en participacion). Se introduce "modo silencioso" para estudiantes que lo prefieran. Se comienzan a destacar metricas de progreso real (% de dominio por eje tematico) sobre metricas de gamificacion.

**Fase 3 — Internalizacion (semanas 9-12):** La narrativa de MIYAGI transiciona de "ganaste 50 XP" a "dominaste proporciones — eso cae en el 80% de las pruebas PAES". Los leaderboards se vuelven opcionales. Se introduce la visualizacion de proyeccion: "Si mantienes este ritmo, tu puntaje estimado en PAES seria ~X". La motivacion se ancla a la meta personal (universidad, carrera) en vez de al juego.

**Fase 4 — Autonomia (semanas 13+):** El estudiante elige su nivel de gamificacion (completo, reducido, o minimalista). Las metricas principales son de mastery real. Los XP siguen existiendo pero son secundarios. La plataforma apoya la auto-regulacion: el estudiante configura sus propias metas semanales. MIYAGI celebra la autonomia: "Ya no necesitas que te diga que estudiar — tu sabes que funciona."

**Indicadores de transicion exitosa:**
- El estudiante inicia sesiones sin necesidad de notificacion push (>50% de sesiones auto-iniciadas).
- El estudiante elige actividades de mayor dificultad sin incentivo de XP adicional.
- La frecuencia de practica se mantiene estable tras reducir prominencia de gamificacion.
- El estudiante reporta motivacion intrinseca en check-ins periodicos ("estudio porque quiero mejorar" vs "estudio para no perder mi streak").

---

# Capitulo 8. Algoritmo de Priorizacion de Acciones

## 8.0 Conversion mastery → puntos PAES

Para traducir los efectos del grafo causal a impacto en puntaje PAES, se utiliza la siguiente conversion heuristica:

**1 unidad de mastery [0,1] ≈ 1 SD en theta IRT ≈ 110 puntos PAES**

Esta estimacion se basa en la desviacion estandar poblacional reportada por DEMRE para las pruebas PAES (SD ≈ 110 puntos en escala 100-1000). Dado que mastery se modela en escala [0,1] y se interpreta como habilidad latente theta en el modelo IRT, un cambio de 1 unidad completa en mastery equivale aproximadamente a 1 SD en theta, que a su vez corresponde a ~110 puntos PAES en la zona central de la distribucion.

**Ejemplos de traduccion:**

| Delta mastery | Delta theta (SD) | Delta PAES estimado | Ejemplo de intervencion |
|---------------|-------------------|---------------------|------------------------|
| 0.255 | 0.255 SD | ~28 pts | Reduccion completa de stress_level (efecto total) |
| 0.199 | 0.199 SD | ~22 pts | Optimizacion completa de sleep_quality (efecto total) |
| 0.122 | 0.122 SD | ~13 pts | Mejora completa de physical_activity (efecto total) |
| 0.105 | 0.105 SD | ~12 pts | Mejora completa de motivation (efecto total) |
| 0.050 | 0.050 SD | ~6 pts | Intervencion parcial tipica en una variable |

> **Nota importante:** Esta conversion es una estimacion heuristica. La relacion theta-puntaje PAES depende de la tabla de conversion DEMRE anual y es no-lineal en los extremos de la distribucion (puntajes muy bajos o muy altos). En la zona central (400-700 pts), la aproximacion lineal es razonable. Los deltas reportados asumen mejora de 1 SD completa en la variable, lo cual representa el maximo teorico; las intervenciones reales tipicamente logran mejoras de 0.3-0.5 SD en 16 semanas.

> **Nota importante sobre la aproximacion local:** La equivalencia 1 unidad mastery = 1 SD theta es una aproximacion que aplica localmente para deltas pequenos (0.01-0.10). El rango completo de mastery [0,1] corresponde a ~4 SD en theta. Las traducciones a puntos PAES en esta tesis usan esta aproximacion local.

## 8.1 Problema de priorizacion

Dado un estudiante con un perfil de 21 variables v = (v1, v2, ..., v21), el sistema debe decidir que acciones priorizar para maximizar el impacto en mastery (y por lo tanto en puntaje PAES estimado). El espacio de acciones posibles es grande (~60 acciones disenadas en el Capitulo 4), y el tiempo del estudiante es limitado (tipicamente 15-30 min/dia).

## 8.2 Formulacion matematica

El impacto esperado de una accion a_j que modifica la variable v_i en delta_i se calcula como:

```
impacto(a_j) = delta_i x efecto_total(v_i -> mastery)
```

donde efecto_total(v_i -> mastery) es la suma de los productos de los pesos a lo largo de todos los caminos aciclicos desde v_i hasta mastery, calculada segun la descomposicion de Wright (Seccion 4.6.3 de la tesis principal).

La priorizacion maximiza el impacto total sujeto a restricciones de tiempo:

```
max Σ_j x_j x impacto(a_j)
sujeto a:
  Σ_j x_j x duracion(a_j) <= tiempo_disponible
  x_j ∈ {0, 1}
```

Este es un problema de mochila (knapsack) resoluble eficientemente.

## 8.3 Efecto total por variable

Usando los calculos de la tesis principal (Seccion 4.6.3), los efectos totales en mastery son:

| Variable | Efecto total en mastery | Ranking | Tipo de efecto |
|----------|------------------------|---------|----------------|
| stress_level | 0.255 | 1 | efecto total via Wright |
| sleep_quality | 0.199 | 2 | efecto total via Wright |
| physical_activity | 0.122 | 3 | efecto total via Wright |
| motivation | 0.105 | 4 | efecto total via Wright |
| anxiety | 0.390 (directo + via atencion) | (directo, no via intervencion) | efecto directo + parcial (no total)^1^ |
| self_efficacy | 0.300 (directo) + indirectos | (directo) | efecto directo + parcial (no total)^1^ |
| study_adherence | 0.300 (directo) | 5 (via adherencia) | efecto directo + parcial (no total)^1^ |
| emotional_state | 0.032 | 6 | efecto total via Wright |
| vocational_clarity | 0.032 | 7 | efecto total via Wright |
| time_management | 0.090 | 8 | efecto total via Wright |
| metacognition | 0.075 | 9 | efecto total via Wright |
| growth_mindset | 0.015 | 10 | efecto total via Wright |
| screen_time | 0.078 | 11 | efecto total via Wright |
| cognitive_load | 0.036 | 12 | efecto total via Wright |

> ^1^ **Nota:** Las variables marcadas como "efecto directo + parcial (no total)" tienen aristas directas a mastery cuyos pesos se reportan directamente del grafo, pero no representan el efecto total calculado via descomposicion de Wright (1921) porque no incluyen todas las rutas indirectas. Las variables marcadas como "efecto total via Wright" si representan la suma de los productos de pesos a lo largo de todos los caminos aciclicos desde la variable hasta mastery, lo que constituye el efecto total segun Wright.

## 8.4 Ajuste por perfil

El ranking generico se ajusta por perfil considerando:

1. **Gap de la variable:** Cuanto margen de mejora tiene la variable (1 - valor_actual). Una variable ya alta (v > 0.80) tiene poco margen.
2. **Intervenibilidad:** Algunas variables son mas faciles de modificar que otras. Physical_activity y time_management son altamente intervenibles; anxiety y stress_level requieren mas tiempo.
3. **Urgencia:** Algunas situaciones requieren intervencion inmediata (emotional_state < 0.20, stress_level > 0.80) independientemente del efecto total.

### 8.4.1 Tabla de intervenibilidad

La intervenibilidad I(v_i) cuantifica que tan modificable es una variable desde la plataforma en un horizonte de 4-16 semanas. Valores calibrados con evidencia:

| Variable | Intervenibilidad | Justificacion |
|----------|-----------------|---------------|
| physical_activity | 0.90 | Altamente modificable con nudges |
| sleep_quality | 0.85 | Higiene del sueno efectiva |
| study_adherence | 0.85 | Habitos modificables con streaks |
| time_management | 0.80 | Planificacion ensenable |
| screen_time | 0.75 | Requiere autocontrol |
| motivation | 0.70 | Parcialmente modificable |
| metacognition | 0.70 | Ensenable con practica |
| growth_mindset | 0.65 | Intervenciones efectivas (Yeager) |
| frustration_tolerance | 0.60 | Requiere exposicion gradual |
| attention_span | 0.55 | Parcialmente entrenable |
| confidence | 0.55 | Requiere experiencias de exito |
| self_efficacy | 0.50 | Construida por mastery |
| stress_level | 0.50 | Multiples fuentes, parcial control |
| emotional_state | 0.45 | Estado fluctuante |
| anxiety | 0.45 | Requiere intervencion sostenida |
| fatigue | 0.40 | Depende de factores externos |
| cognitive_load | 0.40 | Controlable via diseno instruccional |
| social_support | 0.35 | Depende del entorno |
| vocational_clarity | 0.30 | Exploracion lenta |
| parental_support | 0.25 | Baja controlabilidad desde la app |
| mastery | 0.20 | Resultado, no directamente intervenible |

### 8.4.2 Formalizacion de urgencia

La urgencia U(v_i) escala la prioridad de variables que se encuentran en zona de alerta o critica. Para variables donde valores altos son negativos (e.g., stress, anxiety), se invierte la direccion:

```
urgencia(v_i) = 1.0 + 0.5 x min(1.0, max(0, (v_i - umbral_alerta) / (umbral_critico - umbral_alerta)))
```

> **Nota:** Si umbral_critico = umbral_alerta, urgencia = 1.5 por convencion.

Donde v_i se interpreta como "severidad" (para variables invertidas como stress/anxiety, v_i ya esta en escala donde mayor = peor). Para variables donde menor = peor (e.g., sleep_quality, emotional_state), se aplica la transformacion v_i' = 1 - v_i antes del calculo.

**Umbrales por variable:**

| Variable | Umbral alerta | Umbral critico | Direccion |
|----------|--------------|----------------|-----------|
| stress_level | 0.65 | 0.80 | Mayor = peor |
| anxiety | 0.65 | 0.80 | Mayor = peor |
| screen_time | 0.70 | 0.85 | Mayor = peor |
| sleep_quality | 0.35 | 0.25 | Menor = peor (invertir) |
| emotional_state | 0.30 | 0.20 | Menor = peor (invertir) |
| study_adherence | 0.20 | 0.05 | Menor = peor (invertir) |

Cuando v_i supera el umbral critico, urgencia = 1.5 (maximo). Cuando esta entre alerta y critico, urgencia escala linealmente entre 1.0 y 1.5. Fuera de zona de alerta, urgencia = 1.0 (sin efecto).

La formula ajustada:

```
prioridad(v_i) = efecto_total(v_i) x gap(v_i) x intervenibilidad(v_i) x urgencia(v_i)
```

## 8.5 Ejemplo de priorizacion por perfil

**Perfil: Matias ("El Ansioso") — anxiety = 0.68, stress = 0.62, sleep = 0.48**

| Variable | Efecto total | Gap (1-v) | Intervenibilidad | Urgencia | Prioridad |
|----------|-------------|-----------|-------------------|----------|-----------|
| sleep_quality | 0.199 | 0.52 | 0.85 | 1.0 | 0.088 |
| physical_activity | 0.122 | 0.62 | 0.90 | 1.0 | 0.068 |
| anxiety | 0.390 | 0.32 | 0.45 | 1.10 | 0.062 |
| stress_level | 0.255 | 0.38 | 0.50 | 1.0 | 0.048 |
| motivation | 0.105 | 0.48 | 0.70 | 1.0 | 0.035 |

> **Calculo de urgencias:** stress_level = 0.62 < umbral_alerta 0.65, por lo tanto urgencia = 1.0. anxiety = 0.68: urgencia = 1.0 + 0.5 x min(1.0, max(0, (0.68-0.65)/(0.80-0.65))) = 1.0 + 0.5 x 0.2 = 1.10. Intervenibilidades tomadas de la tabla 8.4.1.

**Resultado:** Para Matias, la secuencia optima es:
1. Mejorar calidad del sueno (mayor prioridad ajustada).
2. Incrementar actividad fisica (segundo — potencia sueno, estres y animo).
3. Reducir ansiedad directamente (tercero — urgencia leve eleva su prioridad).
4. Reducir estres (cuarto).

**Perfil: Benjamin ("El Gamer") — screen_time = 0.88, sleep = 0.28, adherence = 0.22**

| Variable | Efecto total | Gap (1-v) | Intervenibilidad | Urgencia | Prioridad |
|----------|-------------|-----------|-------------------|----------|-----------|
| study_adherence | 0.300 | 0.78 | 0.85 | 1.0 | 0.199 |
| sleep_quality | 0.199 | 0.72 | 0.85 | 1.35 | 0.164 |
| motivation | 0.105 | 0.68 | 0.70 | 1.0 | 0.050 |
| screen_time | 0.078 | 0.12 | 0.75 | 1.50 | 0.011 |
| vocational_clarity | 0.032 | 0.72 | 0.30 | 1.0 | 0.007 |

> **Calculo de urgencias:** sleep_quality = 0.28, invertida: 0.72. Umbrales invertidos: alerta_inv = 0.65, critico_inv = 0.75. urgencia = 1.0 + 0.5 x (0.72-0.65)/(0.75-0.65) = 1.35. study_adherence = 0.22, invertida: 0.78. Umbrales invertidos: alerta_inv = 0.80, critico_inv = 0.95. 0.78 < 0.80, urgencia = 1.0. screen_time = 0.88 > critico 0.85, urgencia = 1.50 (maximo). Intervenibilidades tomadas de la tabla 8.4.1.

**Resultado:** Para Benjamin, la secuencia optima es:
1. Construir habito de estudio minimo (study_adherence — mayor gap y efecto directo).
2. Mejorar sueno (segundo — urgencia elevada por inversion critica).
3. Conectar gaming con carrera (vocational_clarity -> motivation).

## 8.6 Reglas de urgencia

Independientemente del calculo de priorizacion, ciertas condiciones activan intervenciones de urgencia:

| Condicion | Accion inmediata | Agente responsable |
|-----------|-----------------|-------------------|
| emotional_state < 0.20 (5+ sesiones) | Derivacion a apoyo externo | KAZE |
| stress_level > 0.80 | Activar regulacion de estres | KAZE |
| sleep_quality < 0.25 | Protocolo de higiene del sueno urgente | KAIZEN |
| study_adherence = 0 (7+ dias) | Reenganche con micro-sesion | KAIZEN + IKIGAI |
| anxiety > 0.80 antes de simulacro | Pausar simulacro, activar mindfulness | KAZE |

## 8.6.1 Pseudocodigo maestro del algoritmo de priorizacion

El siguiente pseudocodigo integra los componentes de las secciones 8.1-8.6 en un unico algoritmo ejecutable por sesion:

```
funcion PRIORIZAR_ACCIONES(perfil, acciones, tiempo_disponible):
    // Paso 1: Verificar urgencias (§8.6) — prevalecen sobre priorizacion normal
    para cada variable v_i en perfil:
        si es_critica(v_i):
            retornar accion_urgencia(v_i)  // intervencion inmediata, sin knapsack

    // Paso 2: Calcular prioridad ajustada para cada accion candidata (§8.4)
    candidatas = []
    para cada accion a_j en acciones:
        v_i = variable_objetivo(a_j)
        gap_i = 1.0 - perfil[v_i]
        efecto_i = efecto_total_wright(v_i)          // §8.3, tabla de efectos
        interv_i = intervenibilidad(v_i)              // §8.4.1, tabla calibrada
        urg_i = calcular_urgencia(perfil[v_i], v_i)   // §8.4.2, formula con umbrales
        conf_i = confianza_dato(v_i)                   // §8.7, degradacion elegante
        prioridad_j = efecto_i * gap_i * interv_i * urg_i * conf_i
        candidatas.agregar((a_j, prioridad_j, duracion(a_j)))

    // Paso 3: Resolver knapsack por relacion beneficio-costo (§8.2)
    candidatas.ordenar_por(prioridad / duracion, descendente)  // relacion beneficio-costo
    seleccionadas = []
    variables_cubiertas = conjunto_vacio()
    tiempo_usado = 0
    para cada (a_j, p_j, d_j) en candidatas:
        v_j = variable_objetivo(a_j)
        si v_j en variables_cubiertas:
            continuar  // maximo 1 accion por variable target
        si tiempo_usado + d_j <= tiempo_disponible:
            seleccionadas.agregar(a_j)
            variables_cubiertas.agregar(v_j)
            tiempo_usado += d_j

    // Paso 4: Ordenar secuencia final (emocional primero, academico despues)
    retornar ordenar_por_precedencia_emocional(seleccionadas)
```

> **Nota:** La funcion `es_critica()` evalua las condiciones de la tabla de urgencia (§8.6). La funcion `confianza_dato()` implementa el protocolo de degradacion elegante (§8.7) y vale 1.0 cuando hay datos completos. La precedencia emocional (Paso 4) garantiza que intervenciones de bienestar se ejecutan antes que las academicas, consistente con la Regla 1 de Precedencia Emocional de la tesis principal.

## 8.7 Protocolo de Degradacion Elegante y Datos Incompletos

El algoritmo de priorizacion descrito en las secciones 8.1-8.6 asume implicitamente que las 21 variables del grafo causal poseen valores estimados con confianza razonable. En produccion, este supuesto se viola sistematicamente: estudiantes que no completan check-ins emocionales, auto-reportes inconsistentes, datos insuficientes para estimar variables latentes, o discrepancias entre lo reportado y lo observado. La literatura en sistemas tutores inteligentes ha documentado extensamente que los datos incompletos son la norma, no la excepcion (Baker et al., 2010). Pearl (2009, Cap. 8) formalizo el tratamiento de datos missing en modelos causales graficos, distinguiendo entre missing completely at random (MCAR), missing at random (MAR) y missing not at random (MNAR), cada patron con implicancias distintas para la validez de la inferencia.

Esta seccion formaliza un protocolo de degradacion elegante: el sistema reduce su sofisticacion de manera controlada conforme disminuye la cantidad y calidad de los datos disponibles, garantizando que el estudiante siempre reciba una experiencia util, aunque menos personalizada.

### 8.7.1 Clasificacion de variables por fuente de datos

No todas las variables del grafo tienen la misma vulnerabilidad a la ausencia de datos. La fuente de medicion determina la disponibilidad esperada y la estrategia de mitigacion ante datos faltantes.

**Tipo A -- Auto-reporte directo.** Variables cuyo valor depende exclusivamente de que el estudiante responda un instrumento explicito. Son las mas vulnerables a datos missing porque requieren accion voluntaria del usuario.

| Variable | Instrumento | Vulnerabilidad |
|----------|-------------|----------------|
| anxiety | Escala breve tipo PSS | Alta -- requiere check-in emocional |
| stress_level | Items PSS adaptados | Alta -- mismo mecanismo que anxiety |
| emotional_state | Check-in emoji/escala | Alta -- TTL corto, frecuencia requerida alta |
| sleep_quality | Reporte diario | Media-Alta -- puede complementarse con dispositivo |
| motivation | Items SDT adaptados | Media -- menos volatil, medicion menos frecuente |

**Tipo B -- Inferencia por comportamiento (stealth assessment).** Variables que el sistema puede estimar a partir de patrones de interaccion sin requerir accion explicita del estudiante. Son las mas robustas ante datos missing porque se generan automaticamente con el uso de la plataforma.

| Variable | Senales observables | Vulnerabilidad |
|----------|-------------------|----------------|
| mastery | Respuestas a items calibrados (BKT/IRT) | Baja -- se actualiza con cada interaccion |
| study_adherence | Sesiones completadas vs planificadas | Muy Baja -- registro automatico |
| attention_span | Degradacion intra-sesion de tiempos de respuesta | Baja -- requiere sesion activa |
| cognitive_load | Complejidad del material x nivel de mastery | Baja -- derivable de otras variables |
| fatigue | Degradacion de rendimiento + tiempo en tarea | Baja-Media -- requiere sesion suficiente |
| screen_time | Datos de dispositivo (cuando disponibles) | Media -- depende de permisos del dispositivo |

**Tipo C -- Mixto (auto-reporte + inferencia conductual).** Variables que combinan informacion de ambas fuentes, lo que permite validacion cruzada y estimacion parcial cuando una fuente falta.

| Variable | Componente auto-reporte | Componente conductual |
|----------|------------------------|----------------------|
| confidence | Confianza reportada por KC | Calibracion real vs reportada |
| self_efficacy | Escala periodica | Persistencia ante dificultad, engagement |
| metacognition | Items MAI breves | Patrones de revision, uso de ayuda |
| frustration_tolerance | -- | Intentos antes de abandono, tiempo ante items dificiles |
| growth_mindset | Cuestionario periodico | Respuesta ante feedback negativo |
| time_management | Percepcion de control | Regularidad de horarios, cumplimiento de plan |

**Tipo D -- Variables externas.** Dependen de informacion que el estudiante provee sobre contexto fuera de la plataforma. Son las mas dificiles de inferir y las que mas dependen de priors poblacionales.

| Variable | Mecanismo de recoleccion | Frecuencia esperada |
|----------|------------------------|---------------------|
| social_support | Auto-reporte periodico | Quincenal |
| parental_support | Auto-reporte periodico | Quincenal |
| physical_activity | Auto-reporte + datos de dispositivo | Semanal |
| vocational_clarity | Cuestionario de orientacion | Mensual |

### 8.7.2 Priors bayesianos por variable

Cuando una variable carece de datos observados, el sistema utiliza un prior bayesiano calibrado a partir de la poblacion objetivo: estudiantes chilenos de 16-19 anos preparandose para la PAES. Corbett y Anderson (1995) establecieron el precedente de utilizar priors poblacionales para inicializar el Bayesian Knowledge Tracing; el mismo principio se extiende aqui a las 21 variables del grafo.

Los priors se especifican como distribuciones Beta(alpha, beta) para cada variable, lo que permite representar tanto el valor esperado como la incertidumbre inicial. La media de una Beta(alpha, beta) es alpha/(alpha+beta) y su varianza disminuye conforme alpha+beta crece (mayor certeza). La velocidad de convergencia indica cuantas observaciones se requieren para que el posterior domine sobre el prior (es decir, que la incertidumbre se reduzca a menos de la mitad del valor inicial).

| Variable | Prior (media +/- sigma) | Beta(alpha, beta) | Convergencia | Fuente de calibracion |
|----------|----------------------|-------------------|--------------|----------------------|
| mastery | 0.30 +/- 0.15 | Beta(4, 9.3) | ~3 sesiones con items calibrados | Corbett y Anderson (1995): P(L0) = 0.30 como prior estandar BKT |
| attention_span | 0.60 +/- 0.20 | Beta(3.6, 2.4) | ~2 sesiones | Lim y Dinges (2010): baseline de atencion en adolescentes |
| metacognition | 0.40 +/- 0.20 | Beta(3.6, 5.4) | ~5 sesiones con items MAI | Schraw y Dennison (1994): MAI promedio en secundaria |
| cognitive_load | 0.50 +/- 0.15 | Beta(5.6, 5.6) | ~2 sesiones (derivable) | Prior no informativo centrado; se recalcula de mastery x material |
| anxiety | 0.50 +/- 0.20 | Beta(3.75, 3.75) | ~5 check-ins emocionales | Hembree (1988): prevalencia media de ansiedad evaluativa |
| confidence | 0.50 +/- 0.20 | Beta(3.75, 3.75) | ~4 items de calibracion | Pajares (1996): tendencia a sobre/sub-confianza variable |
| emotional_state | 0.55 +/- 0.20 | Beta(3.85, 3.15) | ~3 check-ins (TTL corto) | D'Mello y Graesser (2012): sesgo leve hacia estado neutro-positivo |
| self_efficacy | 0.45 +/- 0.18 | Beta(4.9, 6.0) | ~4 mediciones periodicas | Richardson et al. (2012): media poblacional de autoeficacia |
| frustration_tolerance | 0.50 +/- 0.22 | Beta(2.7, 2.7) | ~4 sesiones con items dificiles | Prior amplio por falta de instrumento estandar validado |
| stress_level | 0.55 +/- 0.18 | Beta(4.5, 3.7) | ~4 auto-reportes PSS | Cohen et al. (1983): PSS normativo para adolescentes |
| study_adherence | 0.40 +/- 0.15 | Beta(5.6, 8.4) | ~7 dias de registro | Crede y Phillips (2011): adherencia media en estudiantes sin coaching |
| time_management | 0.40 +/- 0.18 | Beta(4.2, 6.3) | ~7 dias de registro | Macan et al. (1990): gestion del tiempo autoreportada |
| sleep_quality | 0.50 +/- 0.18 | Beta(4.3, 4.3) | ~5 reportes diarios | Dewald et al. (2010): calidad de sueno promedio en adolescentes |
| screen_time | 0.60 +/- 0.20 | Beta(3.6, 2.4) | ~5 reportes | Hale y Guan (2015): screen time promedio alto en adolescentes |
| fatigue | 0.45 +/- 0.20 | Beta(3.4, 4.1) | ~3 sesiones | Boksem y Tops (2008): fatiga baseline moderada |
| physical_activity | 0.35 +/- 0.20 | Beta(2.8, 5.2) | ~5 reportes semanales | Biddle y Asare (2011): niveles de actividad fisica en adolescentes chilenos/OCDE |
| social_support | 0.55 +/- 0.22 | Beta(2.9, 2.4) | ~3 reportes quincenales | Cohen y Wills (1985): apoyo social percibido medio |
| parental_support | 0.55 +/- 0.22 | Beta(2.9, 2.4) | ~3 reportes quincenales | Fan y Chen (2001): involucramiento parental medio |
| vocational_clarity | 0.35 +/- 0.25 | Beta(1.7, 3.2) | ~2 cuestionarios mensuales | Tracey et al. (2005): baja estabilidad vocacional en adolescentes |
| motivation | 0.50 +/- 0.18 | Beta(4.3, 4.3) | ~4 mediciones | Pintrich (2000): motivacion media en estudiantes secundarios |
| growth_mindset | 0.50 +/- 0.20 | Beta(3.75, 3.75) | ~2 cuestionarios | Sisk et al. (2018): distribucion centrada con alta varianza |

**Actualizacion bayesiana.** Cada nueva observacion o_t actualiza el posterior segun:

```
P(v_i | o_1, ..., o_t) proporcional_a P(o_t | v_i) x P(v_i | o_1, ..., o_{t-1})
```

Para variables con distribucion Beta y observaciones binarias/continuas normalizadas, la actualizacion se realiza con conjugacion natural. Para variables Tipo B (stealth), cada sesion genera multiples observaciones implicitas, acelerando la convergencia. Para variables Tipo A (auto-reporte), la convergencia depende de la frecuencia de check-in del estudiante.

### 8.7.3 Modos de operacion segun completitud de datos

El sistema opera en cuatro modos determinados por la proporcion de variables con datos "frescos" (dentro de su TTL, definido en 8.7.5). El modo se recalcula al inicio de cada sesion y puede cambiar durante la sesion si se obtienen datos nuevos.

**Definicion: Completitud (C).** Sea F el conjunto de variables con al menos una observacion cuya edad es menor que el TTL de esa variable. La completitud se define como:

```
C = |F| / 21
```

**Modo Completo (C > 0.80, es decir, 17+ variables frescas)**

- El algoritmo de priorizacion (Seccion 8.2-8.6) opera sin modificaciones.
- Todas las aristas del grafo se propagan normalmente.
- Recomendaciones con confianza alta.
- UI muestra el dashboard completo con todas las dimensiones.

**Modo Parcial (0.50 <= C <= 0.80, es decir, 11-16 variables frescas)**

- Variables sin datos frescos se reemplazan por su prior bayesiano (Seccion 8.7.2) o por el ultimo valor observado con decaimiento (Seccion 8.7.5), lo que tenga menor incertidumbre.
- El factor de confianza del grafo se reduce proporcionalmente: `confianza_grafo = C^2` (e.g., C = 0.60 implica confianza = 0.36).
- Las aristas que involucran variables imputadas se ponderan por la confianza del dato: `w_efectivo = w_original x confianza(v_origen) x confianza(v_destino)`.
- Las recomendaciones se acompanan de lenguaje tentativo: "Basado en lo que sabemos hasta ahora..." en lugar de afirmaciones directas.
- UI muestra indicador visual de datos pendientes y solicita check-in para variables criticas faltantes.

**Modo Minimo (0.25 <= C < 0.50, es decir, 6-10 variables frescas)**

- El grafo completo de 21 variables se reemplaza por un subgrafo minimo de 4 variables: mastery + 1 variable emocional (anxiety o stress_level, la que tenga datos mas frescos) + study_adherence + 1 variable conductual adicional.
- El algoritmo de priorizacion se simplifica a comparacion directa de gaps en las variables disponibles.
- Solo se activan los agentes SENPAI (academico) y KAZE (emocional) o KAIZEN (conductual).
- UI simplificada: sesion de practica + un check-in breve. Sin dashboard multidimensional.
- El sistema solicita activamente datos faltantes con prompts ligeros (maximo 2 preguntas por sesion para no sobrecargar).

**Modo Emergencia (C < 0.25, es decir, <6 variables frescas)**

- Ocurre tipicamente con estudiantes nuevos sin diagnostico o estudiantes que vuelven tras semanas de inactividad.
- El sistema opera exclusivamente con mastery (inferible de cualquier interaccion academica) y priors poblacionales.
- Ofrece sesion generica de practica espaciada (FSRS con parametros por defecto).
- No emite recomendaciones conductuales, emocionales ni vocacionales.
- Prioridad absoluta: recolectar datos. Cada sesion incluye un mini-diagnostico de 3-5 preguntas que alimenta el grafo.
- Tras 2-3 sesiones en modo emergencia, el sistema deberia escalar a modo minimo.

**Transiciones entre modos.** Las transiciones son automaticas y bidireccionales. Un estudiante en modo completo que deja de hacer check-ins emocionales durante 2 semanas degrada a modo parcial (las variables emocionales Tipo A exceden su TTL). Inversamente, un estudiante en modo minimo que completa un check-in emocional y un reporte de sueno puede escalar a modo parcial.

### 8.7.4 Deteccion de datos inconsistentes y validacion cruzada

Baker, D'Mello, Rodrigo y Graesser (2010) documentaron que los estados afectivos autoreportados frecuentemente divergen de los inferidos por comportamiento (stealth assessment), con concordancias moderadas (kappa = 0.20-0.40). Esta discrepancia no necesariamente indica que el estudiante "miente"; puede reflejar baja conciencia emocional (alexitimia subclinica), sesgo de deseabilidad social, o desfase temporal entre el auto-reporte y el estado real.

**Reglas de validacion cruzada por variable:**

| Variable | Senal auto-reporte | Senal conductual | Criterio de inconsistencia |
|----------|-------------------|------------------|---------------------------|
| anxiety | "No estoy ansioso" (< 0.30) | Abandona 3+ items consecutivos, tiempo de respuesta < 3s en items dificiles | Diferencia > 0.35 entre auto-reporte y estimacion conductual |
| stress_level | "Estoy tranquilo" (< 0.30) | Sesiones cada vez mas cortas, 3+ dias sin entrar | Diferencia > 0.30 con patron de engagement decreciente |
| emotional_state | "Estoy bien" (> 0.70) | Precision cae >20% respecto a sesiones previas, skip frecuente de actividades | Diferencia > 0.40 sostenida por 2+ sesiones |
| sleep_quality | "Dormi bien" (> 0.70) | Sesion matutina con tiempos de respuesta 40%+ mas lentos que baseline | Diferencia > 0.35 con evidencia conductual consistente |
| motivation | "Estoy motivado" (> 0.70) | Adherencia < 0.30, sesiones abandonadas prematuramente | Diferencia > 0.40 sostenida por 5+ dias |
| metacognition | "Planifico mi estudio" (> 0.60) | Nunca usa herramientas de revision, no revisa errores | Diferencia > 0.30 sostenida por 3+ sesiones |

**Protocolo de resolucion de conflictos:**

1. **Deteccion pasiva (sin confrontar al estudiante).** Cuando se detecta inconsistencia, el sistema NO le dice al estudiante "estas mintiendo" ni "tus datos no cuadran". Esto erosionaria la confianza y aumentaria la deseabilidad social en futuros reportes.

2. **Ponderacion mixta.** Se calcula un valor estimado que pondera ambas fuentes, priorizando la senal conductual con un peso mayor:

```
v_estimado = alpha x v_conductual + (1 - alpha) x v_autoreporte
donde alpha = 0.65 por defecto (ajustable por variable)
```

La justificacion para priorizar datos conductuales proviene de Baker et al. (2010), quienes demostraron que los detectores de afecto basados en comportamiento superan al auto-reporte en prediccion de rendimiento futuro (AUC = 0.72 vs 0.58).

3. **Escalado gradual.** Si la inconsistencia persiste por 3+ sesiones consecutivas:
   - Reformular las preguntas de check-in (e.g., en lugar de "como te sientes?" usar "que tan dificil fue concentrarte hoy?").
   - Aumentar el peso de la senal conductual a alpha = 0.80.
   - Registrar el patron como "discrepancia persistente" en el log del estudiante para revision por el equipo.

4. **Excepciones.** Para frustration_tolerance y growth_mindset, que carecen de auto-reporte directo, no aplica validacion cruzada; se usa exclusivamente inferencia conductual.

### 8.7.5 Freshness decay: tiempo de vida (TTL) y decaimiento de confianza

Cada variable tiene una ventana temporal de validez que refleja su volatilidad inherente. Un dato de emotional_state de hace 3 dias es casi inutil; un dato de mastery de hace 3 dias es perfectamente valido. El TTL define el periodo tras el cual el dato pierde su confianza y debe ser reemplazado por el prior o por una estimacion con decaimiento.

**TTL y tasa de decaimiento por variable:**

| Variable | TTL (confianza > 0.50) | Tasa de decaimiento | Fundamentacion |
|----------|----------------------|--------------------|--------------------|
| mastery | 14 dias | Exponencial lenta: lambda = 0.05/dia | Corbett y Anderson (1995): el conocimiento decae lentamente; FSRS modela estabilidad individual |
| attention_span | 4 horas (intra-sesion) | Reinicio por sesion | Lim y Dinges (2010): la atencion varia significativamente entre sesiones |
| metacognition | 21 dias | Exponencial lenta: lambda = 0.03/dia | Veenman et al. (2006): rasgo relativamente estable |
| cognitive_load | 1 hora (intra-sesion) | Reinicio por actividad | Sweller (2011): depende del material actual |
| anxiety | 3 dias | Exponencial media: lambda = 0.20/dia | Spielberger (1972): state anxiety fluctua significativamente |
| confidence | 7 dias | Exponencial media: lambda = 0.10/dia | Pajares (1996): confianza especifica es moderadamente estable |
| emotional_state | 4 horas | Exponencial rapida: lambda = 0.50/4h | D'Mello y Graesser (2012): emociones academicas cambian frecuentemente |
| self_efficacy | 14 dias | Exponencial lenta: lambda = 0.05/dia | Bandura (1997): creencia relativamente estable salvo eventos disruptivos |
| frustration_tolerance | 14 dias | Exponencial lenta: lambda = 0.05/dia | Rasgo conductual con inercia moderada |
| stress_level | 3 dias | Exponencial media: lambda = 0.20/dia | Cohen et al. (1983): el estres percibido fluctua con eventos vitales |
| study_adherence | 7 dias | Lineal: pierde 0.14/dia | Registro objetivo; la adherencia reciente es la relevante |
| time_management | 14 dias | Exponencial lenta: lambda = 0.05/dia | Macan et al. (1990): habito con inercia |
| sleep_quality | 24 horas | Exponencial rapida: lambda = 0.70/dia | Walker (2017): el sueno varia noche a noche |
| screen_time | 48 horas | Exponencial media: lambda = 0.35/dia | Hale y Guan (2015): varia entre dias habiles y fines de semana |
| fatigue | 4 horas | Exponencial rapida: lambda = 0.50/4h | Boksem y Tops (2008): estado transitorio, no rasgo |
| physical_activity | 7 dias | Lineal: pierde 0.14/dia | Biddle y Asare (2011): habito semanal |
| social_support | 30 dias | Exponencial muy lenta: lambda = 0.02/dia | Cohen y Wills (1985): constructo social relativamente estable |
| parental_support | 30 dias | Exponencial muy lenta: lambda = 0.02/dia | Fan y Chen (2001): dinamica familiar con inercia alta |
| vocational_clarity | 60 dias | Exponencial muy lenta: lambda = 0.01/dia | Tracey et al. (2005): cambia lentamente en adolescentes |
| motivation | 7 dias | Exponencial media: lambda = 0.10/dia | Pintrich (2000): fluctua con eventos academicos y sociales |
| growth_mindset | 30 dias | Exponencial muy lenta: lambda = 0.02/dia | Dweck (2006): creencia estable salvo intervencion directa |

**Formula de decaimiento exponencial.** La confianza de un dato observado en el tiempo t_obs, evaluada en el tiempo t_actual, se calcula como:

```
confianza(v_i, t) = exp(-lambda_i x (t_actual - t_obs))
```

donde lambda_i es la tasa de decaimiento de la variable i. Cuando confianza(v_i, t) < 0.50, el dato se considera "no fresco" y la variable se marca como faltante para el calculo de completitud C.

**Valor estimado con decaimiento.** Para variables no frescas pero con un dato reciente (confianza entre 0.20 y 0.50), se usa una interpolacion entre el ultimo valor observado y el prior:

```
v_estimado = confianza(v_i, t) x v_observado + (1 - confianza(v_i, t)) x prior(v_i)
```

Este mecanismo implementa una "regresion al prior" gradual: conforme el dato envejece, la estimacion converge al valor poblacional, reflejando la incertidumbre creciente sobre el estado actual del estudiante. Para datos con confianza < 0.20, se usa directamente el prior.

### 8.7.6 Impacto en el algoritmo de priorizacion

La formula de prioridad de la Seccion 8.4 se extiende con un factor de confianza:

```
prioridad(v_i) = efecto_total(v_i) x gap(v_i) x intervenibilidad(v_i) x urgencia(v_i) x confianza_dato(v_i)
```

donde confianza_dato(v_i) refleja la calidad del dato subyacente:
- Dato fresco (confianza > 0.50): confianza_dato = 1.0 (sin penalizacion).
- Dato con decaimiento (0.20-0.50): confianza_dato = confianza(v_i, t).
- Dato ausente (solo prior): confianza_dato = 0.30 (el sistema puede recomendar acciones sobre priors, pero con baja prioridad).

Este ajuste garantiza que el sistema priorice intervenciones sobre variables con datos confiables, evitando recomendaciones fuertes basadas en priors que podrian no reflejar al estudiante individual.

### 8.7.7 Ejemplo integrado: degradacion en accion

**Escenario: Valentina, 17 anos, 3 semanas usando Renddi.**

- Semana 1: Completo diagnostico inicial y 5 sesiones con check-in emocional. C = 0.85, modo completo.
- Semana 2: Hizo 3 sesiones pero no completo check-ins emocionales ni reporte de sueno. Variables Tipo B se mantienen frescas; anxiety, stress_level, emotional_state y sleep_quality exceden TTL.
  - C = 0.62 (13/21 variables frescas). Transicion a modo parcial.
  - anxiety se imputa: confianza del ultimo dato (dia 7) evaluada en dia 14 = exp(-0.20 x 7) = 0.25. Se usa interpolacion: v_estimado = 0.25 x 0.45 + 0.75 x 0.50 = 0.49.
  - El sistema ajusta: "Nota que no hemos conversado sobre como te sientes. Puedes contarme en una palabra como llegas hoy?"
- Semana 3: No entra a la plataforma por 5 dias. study_adherence se registra automaticamente como 0. Mastery sigue fresco (TTL 14 dias).
  - C = 0.38 (8/21). Transicion a modo minimo.
  - Se activa subgrafo: mastery (fresco) + stress_level (prior) + study_adherence (0, dato fresco) + motivation (prior).
  - Sesion simplificada: 5 ejercicios de practica espaciada + 2 preguntas de check-in. Sin dashboard multidimensional.

**Resultado:** Valentina siempre recibe valor de la plataforma, pero la sofisticacion de la personalizacion refleja la calidad de los datos disponibles. El sistema nunca pretende saber mas de lo que sabe.

---

# Capítulo 9. Integración con Agentes Especialistas

## 9.1 Arquitectura de comunicación TAKUMI ↔ Agentes

TAKUMI opera como módulo transversal que interactúa bidireccionalamente con los 9 agentes especialistas del sistema SENSEI. Cada agente consume y produce información que alimenta el ciclo de priorización-ejecución-feedback.

### 9.1.1 Protocolo de comunicación

Cada interacción entre TAKUMI y un agente sigue un protocolo estandarizado:

```
{
  "source": "TAKUMI",
  "target": "SENPAI",
  "type": "action_request",
  "payload": {
    "student_id": "...",
    "action_id": "MAT-M1-QA-001",
    "parameters": {
      "difficulty_target": 0.45,
      "max_items": 10,
      "feedback_level": "process"
    }
  },
  "context": {
    "profile_snapshot": { ... },
    "priority_score": 0.82,
    "rationale": "self_efficacy es punto de apalancamiento #1; generar mastery experiences"
  }
}
```

## 9.2 Integración por agente

### 9.2.1 SENPAI (Contenido académico)

**TAKUMI → SENPAI:** Envía la actividad seleccionada con parámetros de dificultad calibrados (θ target, nivel de scaffolding, tipo de feedback). SENPAI recibe el banco de ejercicios completo y selecciona los ítems específicos según los parámetros de IRT indicados.

**SENPAI → TAKUMI:** Retorna resultados de la sesión (ítems presentados, respuestas, tiempos, actualización de BKT por KC). TAKUMI usa estos datos para actualizar mastery, attention_span y cognitive_load en el grafo.

### 9.2.2 KAZE (Emociones)

**KAZE → TAKUMI:** Informa el estado emocional actual (anxiety, emotional_state, stress_level, frustration_tolerance) detectado por check-in y stealth assessment. TAKUMI usa esta información para calibrar la selección de acciones y el nivel de feedback.

**TAKUMI → KAZE:** Solicita intervención emocional cuando el algoritmo de priorización determina que una actividad de regulación emocional tiene la mayor utilidad. KAZE ejecuta la intervención y reporta el resultado.

### 9.2.3 KAIZEN (Hábitos)

**TAKUMI → KAIZEN:** Comunica el plan de adherencia derivado del algoritmo: frecuencia recomendada, duración de sesiones, horarios óptimos. KAIZEN implementa el protocolo de micro-hábitos progresivos (Fogg, 2019) y gestiona los prompts/recordatorios.

**KAIZEN → TAKUMI:** Reporta datos de adherencia (sesiones completadas, rachas, horarios reales vs. planificados). TAKUMI actualiza study_adherence y time_management en el grafo.

### 9.2.4 COMPASS (Vocación)

**COMPASS → TAKUMI:** Proporciona el perfil RIASEC del estudiante, sus carreras de interés y su nivel de vocational_clarity. TAKUMI usa esta información para personalizar la narrativa gamificada y conectar actividades con metas vocacionales.

**TAKUMI → COMPASS:** Solicita contenido de exploración vocacional cuando el algoritmo prioriza acciones que impactan vocational_clarity → motivation → study_adherence.

### 9.2.5 DOJO (Práctica)

**TAKUMI → DOJO:** Envía la sesión de práctica diseñada con todos los parámetros: ítems seleccionados, orden, temporización FSRS, tipo de feedback, restricciones de tiempo. DOJO ejecuta la sesión interactiva con el estudiante.

**DOJO → TAKUMI:** Retorna la traza completa de la sesión (cada ítem, respuesta, tiempo, solicitudes de ayuda, abandono). TAKUMI procesa la traza para actualizar múltiples variables del grafo simultáneamente.

### 9.2.6 NAKAMA (Social)

**TAKUMI → NAKAMA:** Solicita la organización de actividades sociales gamificadas (torneos, peer tutoring, desafíos grupales) cuando el algoritmo prioriza acciones que impactan social_support o cuando el estudiante lleva > 5 sesiones individuales consecutivas.

**NAKAMA → TAKUMI:** Reporta resultados de actividades sociales (participación, resultado, interacciones). TAKUMI actualiza social_support y motivation.

### 9.2.7 KOAN (Metacognición)

**TAKUMI → KOAN:** Solicita actividades de reflexión guiada cuando metacognition es un punto de apalancamiento prioritario o cuando la calibración confianza-rendimiento muestra discrepancia significativa.

**KOAN → TAKUMI:** Reporta indicadores metacognitivos (calidad de la reflexión, identificación de patrones, calibración mejorada). TAKUMI actualiza metacognition.

### 9.2.8 IKIGAI (Motivación)

**TAKUMI → IKIGAI:** Solicita intervenciones motivacionales cuando motivation < 0.3 o cuando el estudiante muestra señales de amotivación (sesiones abandonadas, respuestas al azar).

**IKIGAI → TAKUMI:** Reporta tipo de motivación predominante (continuo SDT: extrínseca → intrínseca) y sugiere ajustes al sistema de gamificación. TAKUMI ajusta los pesos de la función de utilidad según el tipo motivacional.

### 9.2.9 MIYAGI (Orquestador)

**TAKUMI → MIYAGI:** Reporta la acción seleccionada, su utilidad esperada, las alternativas descartadas y la justificación basada en el grafo causal. MIYAGI valida la coherencia con el plan global del estudiante.

**MIYAGI → TAKUMI:** Puede anular o modificar la selección de TAKUMI si detecta conflicto con objetivos de mayor nivel (e.g., TAKUMI prioriza práctica de matemáticas pero MIYAGI sabe que el estudiante tiene examen de historia mañana). MIYAGI también proporciona actualizaciones globales del grafo tras cada sesión.

## 9.3 Protocolo de Orquestación en Tiempo Real

### 9.3.1 El problema de la concurrencia multi-agente

El sistema SENSEI opera 9 agentes que monitorean y actúan sobre un grafo causal compartido de 21 variables. Un escenario crítico no resuelto en las secciones anteriores es: ¿qué ocurre cuando múltiples agentes detectan necesidades simultáneas durante una sesión activa? Por ejemplo, si KAZE detecta anxiety > 0.70 mientras SENPAI ejecuta una sesión de práctica que DOJO presenta al usuario mediante templates de KOTODAMA, ¿quién tiene prioridad y con qué latencia se resuelve?

La literatura de sistemas multi-agente identifica este problema como *conflicto de recursos compartidos con restricciones temporales* (Wooldridge, 2009). En arquitecturas de pizarra compartida (Engelmore y Morgan, 1988), la resolución requiere un protocolo explícito de prioridad, un árbitro centralizado (en nuestro caso MIYAGI), y reglas de transición de estado que preserven la coherencia del sistema. Sin este protocolo, el sistema exhibe *thrashing* — agentes compitiendo por el control, generando experiencias fragmentadas para el estudiante.

La solución propuesta se inspira en tres marcos complementarios: (1) la arquitectura de subsunción de Brooks (1986), donde capas de comportamiento de mayor prioridad pueden suprimir capas inferiores; (2) los protocolos de negociación por contrato-red (*contract-net protocol*) de Smith (1980), adaptados a un árbitro centralizado; y (3) los modelos de interrupción cognitiva de Trafton et al. (2003), que establecen que las interrupciones durante tareas cognitivas tienen un costo de ~15-25 segundos de reorientación, lo que fundamenta la necesidad de minimizar interrupciones innecesarias.

### 9.3.2 Jerarquía de prioridad de agentes

Definimos cinco niveles de prioridad inspirados en la arquitectura de subsunción (Brooks, 1986), donde cada nivel puede interrumpir a los niveles inferiores bajo condiciones estrictas:

```
JERARQUÍA DE PRIORIDAD SENSEI

Nivel 0 — EMERGENCIA (preemptivo, latencia < 2s)
  Trigger:  crisis emocional detectada (emotional_state < 0.15 O ideación autolesiva)
  Agente:   KAZE con escalamiento inmediato
  Acción:   interrumpe TODO → protocolo de crisis → escalamiento a profesional
  Regla:    MIYAGI no arbitra; KAZE actúa directamente y notifica a MIYAGI post-hoc

Nivel 1 — BIENESTAR (preemptivo condicional, latencia < 10s)
  Trigger:  fatigue > 0.80 O anxiety > 0.70 O burnout_score > 0.60
  Agente:   KAZE puede interrumpir sesión activa
  Acción:   pausa suave → breathing/regulación → decisión de continuar o cerrar
  Regla:    KAZE solicita interrupción a MIYAGI; MIYAGI autoriza si el trigger
            persiste por >= 30s (evita falsos positivos por picos transitorios)

Nivel 2 — SESIÓN ACTIVA (protegido, no interrumpible por Nivel 3-4)
  Agentes:  SENPAI + DOJO durante práctica activa
  Acción:   ejecución del plan de sesión sin interrupciones externas
  Regla:    KOTODAMA no envía push notifications; KAIZEN no envía recordatorios;
            COMPASS no sugiere exploración vocacional
  Excepción: solo Nivel 0 y Nivel 1 pueden interrumpir

Nivel 3 — PLANIFICACIÓN (entre sesiones, asíncrono)
  Agentes:  KAIZEN (hábitos), COMPASS (vocación), IKIGAI (motivación)
  Acción:   operan durante estados IDLE o POST_SESION del estudiante
  Regla:    comunican vía KOTODAMA respetando protocolo anti-spam (max 3 push/día)
            y ventanas de receptividad (ver KOTODAMA §4.2)

Nivel 4 — BACKGROUND (silencioso, sin intervención directa)
  Agentes:  INGENIERO (actualización del grafo), NAKAMA (procesamiento social)
  Acción:   procesan datos, actualizan variables, preparan recomendaciones
  Regla:    nunca generan comunicación directa al estudiante;
            sus outputs alimentan a agentes de niveles superiores
```

Esta jerarquía garantiza que el bienestar emocional siempre prevalece sobre los objetivos académicos, consistente con la Regla 1 de Precedencia Emocional definida en la tesis principal (§6.8). La estructura de niveles es similar al esquema de prioridades de SOAR (Laird, 2012), donde operadores de mayor urgencia desplazan a los de menor urgencia en el ciclo de decisión.

### 9.3.3 Reglas de resolución de conflictos

Las siguientes reglas formalizan la resolución cuando dos o más agentes compiten por intervenir simultáneamente:

**Regla 1 — No-interrupción de sesión activa.** Una sesión en estado EN_SESION solo puede ser interrumpida por eventos de Nivel 0 o Nivel 1. Cualquier detección de Nivel 3 o 4 se encola para el siguiente estado IDLE o POST_SESION. Esto se fundamenta en la investigación de Trafton et al. (2003) sobre el costo cognitivo de las interrupciones: cada interrupción durante una tarea de resolución de problemas genera un overhead de 15-25 segundos y aumenta la tasa de error en un 20%, un costo inaceptable durante práctica PAES.

**Regla 2 — Cooldown post-intervención de KAZE.** Después de una intervención emocional de KAZE (Nivel 0 o 1), se activa un período de cooldown de 15 minutos durante el cual ningún agente puede generar nuevas intervenciones, excepto por un nuevo evento de Nivel 0. Este cooldown previene la *sobrecarga de intervención* (*intervention fatigue*) documentada por Baumeister et al. (1998) en el contexto de ego depletion: intervenciones emocionales sucesivas generan rendimientos decrecientes y pueden ser contraproducentes.

```
ALGORITMO: Cooldown_KAZE

POST intervención_emocional(KAZE):
    cooldown_start <- timestamp_actual
    cooldown_end <- cooldown_start + 15 min

    MIENTRAS timestamp_actual < cooldown_end:
        SI evento.nivel == 0:  // Crisis genuina
            EJECUTAR protocolo_crisis(KAZE)
            BREAK
        SI evento.nivel == 1:
            ENCOLAR evento para cooldown_end
        SI evento.nivel >= 2:
            DESCARTAR evento (se regenerará en próximo ciclo)
    FIN MIENTRAS
```

**Regla 3 — Prioridad contextual temporal.** En períodos críticos del calendario, la prioridad relativa entre agentes se ajusta:

| Período | Ajuste de prioridad | Fundamentación |
|---------|---------------------|----------------|
| Semana pre-PAES (-7 días) | SENPAI +20% prioridad sobre KAIZEN | Práctica focalizada > formación de hábitos nuevos |
| Día del examen | KAZE prioridad máxima (Nivel 1 → Nivel 0) | Regulación emocional crítica para rendimiento |
| Post-PAES (+3 días) | COMPASS +30% prioridad | Ventana de reflexión vocacional |
| Inicio del programa (semana 1) | KAIZEN +25% prioridad | Formación de hábitos fundacional |

**Regla 4 — Escalamiento por persistencia.** Si un agente detecta una condición anómala en 3 ciclos consecutivos sin que se produzca una respuesta (porque fue desplazado por agentes de mayor prioridad), escala directamente a MIYAGI con flag `persistent_anomaly = true`. MIYAGI evalúa si la condición requiere una sesión dedicada o una intervención coordinada multi-agente. Este mecanismo previene que señales importantes se pierdan por supresión repetida, análogo al mecanismo de *watchdog timer* en sistemas de tiempo real (Burns y Wellings, 2001).

```
ALGORITMO: Escalamiento_Persistencia

POR CADA agente a_i:
    SI a_i.deteccion_activa Y a_i.ciclos_sin_respuesta >= 3:
        ENVIAR a MIYAGI: {
            agente: a_i,
            tipo: "persistent_anomaly",
            deteccion: a_i.ultimo_trigger,
            ciclos_ignorados: a_i.ciclos_sin_respuesta,
            variables_afectadas: a_i.variables_monitoreadas
        }
        MIYAGI.evaluar_sesion_dedicada(a_i)
```

### 9.3.4 Flujo temporal de una sesión tipo

El siguiente diagrama detalla la secuencia completa de una sesión, identificando qué agentes operan en cada fase y cómo se resuelven las transiciones:

```
FLUJO TEMPORAL DE SESIÓN SENSEI

[T-30min] PRE-SESIÓN
    KOTODAMA → push notification (template según estado emocional, §4.1.1)
    MIYAGI   → pre-carga plan de sesión basado en priorización (§8.2)

[T=0] INICIO DE SESIÓN
    Estudiante abre app → estado transiciona: IDLE → EN_SESION
    KAZE     → check-in emocional (§4.8.1): lectura de emotional_state
               Si anxiety > 0.70: activar Nivel 1 antes de iniciar práctica
               Si emotional_state < 0.20: activar Nivel 0, no iniciar sesión
    MIYAGI   → confirma agentes de sesión (max 2, §6.8 Regla 3)

[T+1min] EJECUCIÓN
    SENPAI   → ejecuta plan académico (ítems IRT, scaffolding, FSRS)
    DOJO     → presenta ejercicios con UX adaptada al perfil
    KAZE     → monitoreo silencioso en background:
               - Analiza patrones de respuesta (tiempo, errores consecutivos)
               - Detecta señales de ansiedad/frustración via stealth assessment
               - NO interviene a menos que se cruce umbral de Nivel 1

[T+N] INTERRUPCIÓN CONDICIONAL (solo si se activa Nivel 0 o 1)
    KAZE detecta trigger → solicita interrupción a MIYAGI
    MIYAGI verifica persistencia (>= 30s para Nivel 1) → autoriza
    DOJO     → pausa la sesión de práctica, guarda estado del ítem actual
    KAZE     → intervención: breathing exercise (§4.21.2) o regulación (§4.2.1)
    KOTODAMA → adapta mensajes al estado detectado (grupo C/D de templates)

    Post-intervención:
    SI estudiante elige continuar → estado: RECUPERACION → EN_SESION
       DOJO retoma desde el ítem guardado con dificultad reducida temporalmente
    SI estudiante elige parar → estado: CRISIS → POST_SESION
       KAZE registra evento, KAIZEN ajusta plan de adherencia

[T+fin] POST-SESIÓN
    Estado transiciona: EN_SESION → POST_SESION
    KAIZEN   → registra adherencia (sesión completada/abandonada, duración)
    KOAN     → promueve reflexión metacognitiva (§4.15.3)
    MIYAGI   → actualiza grafo (propagación causal iterativa, §6.7 Función 3)
    KOTODAMA → envía mensaje de cierre calibrado al estado emocional final

[T+fin...próxima sesión] BACKGROUND
    INGENIERO → actualiza grafo con datos de la sesión (BKT, IRT)
    SENPAI    → prepara siguiente sesión basada en grafo actualizado
    NAKAMA    → procesa datos sociales si aplica (>5 sesiones individuales)
    MIYAGI    → evalúa patrones cross-dimensionales (§6.7 Función 1)
```

### 9.3.5 Diagrama de estados del estudiante

El estudiante transiciona entre estados discretos que determinan qué agentes pueden actuar. Este modelado como máquina de estados finita es estándar en sistemas reactivos de tiempo real (Harel, 1987) y permite verificar formalmente que no existan estados muertos o transiciones inválidas.

```
MÁQUINA DE ESTADOS DEL ESTUDIANTE

                    push notification
          ┌──────────────────────────────────┐
          │                                  ▼
        IDLE ──────────────────────────► NOTIFICADO
          ▲                                  │
          │                    abre app      │
          │                                  ▼
          │                             EN_SESION ◄──────────────┐
          │                                  │                   │
          │                    ┌──────────────┼──────────┐       │
          │                    │              │          │       │
          │              Nivel 0/1     fin normal   abandono     │
          │                    │              │          │       │
          │                    ▼              ▼          │       │
          │                 CRISIS      POST_SESION     │       │
          │                    │              │          │       │
          │              regulación     reflexión       │       │
          │                    │              │          │       │
          │                    ▼              │          │       │
          │              RECUPERACION         │          │       │
          │                    │              │          │       │
          │            ┌───────┴──────┐       │          │       │
          │            │              │       │          │       │
          │         continúa       para       │          │       │
          │            │              │       │          │       │
          │            └──────────────│───────│──────────┘       │
          │                           │       │                  │
          │                           ▼       ▼                  │
          └───────────────────────── IDLE ◄───┘                  │
                                                                 │
          RECUPERACION ──(continúa)──────────────────────────────┘

PERMISOS POR ESTADO:

Estado        │ Agentes activos              │ Agentes bloqueados
──────────────┼──────────────────────────────┼─────────────────────
IDLE          │ KOTODAMA, KAIZEN, COMPASS,   │ SENPAI, DOJO
              │ IKIGAI, NAKAMA (push only)   │ (no hay sesión activa)
──────────────┼──────────────────────────────┼─────────────────────
NOTIFICADO    │ KOTODAMA (follow-up)         │ Todos los demás
              │                              │ (esperando acción del usuario)
──────────────┼──────────────────────────────┼─────────────────────
EN_SESION     │ SENPAI, DOJO (activos)       │ KAIZEN, COMPASS, IKIGAI,
              │ KAZE (monitoreo silencioso)  │ NAKAMA, KOTODAMA (push)
              │ MIYAGI (supervisión)         │
──────────────┼──────────────────────────────┼─────────────────────
CRISIS        │ KAZE (intervención activa)   │ TODOS excepto KAZE
              │ KOTODAMA (mensajes grupo D)  │ y KOTODAMA
              │ MIYAGI (escalamiento)        │
──────────────┼──────────────────────────────┼─────────────────────
RECUPERACION  │ KAZE (seguimiento)           │ KAIZEN, COMPASS,
              │ DOJO (retoma si continúa)    │ IKIGAI, NAKAMA
──────────────┼──────────────────────────────┼─────────────────────
POST_SESION   │ KAIZEN, KOAN, MIYAGI,        │ SENPAI, DOJO
              │ KOTODAMA (cierre)            │ (sesión terminada)
```

### 9.3.6 Implementación: Event Bus con prioridad

La implementación técnica del protocolo utiliza un bus de eventos con cola de prioridad, donde MIYAGI actúa como dispatcher centralizado:

```
ARQUITECTURA DE EVENTOS

Cada agente emite eventos al bus con la estructura:

{
  "source": "KAZE",
  "priority_level": 1,
  "event_type": "anxiety_threshold_exceeded",
  "payload": {
    "variable": "anxiety",
    "value": 0.73,
    "duration_above_threshold": "45s",
    "student_state": "EN_SESION"
  },
  "timestamp": "2026-03-21T15:42:30Z"
}

MIYAGI consume eventos de la cola ordenados por priority_level ASC (0 = máxima).
Dentro del mismo nivel, ordena por timestamp ASC (FIFO).
Aplica las reglas de resolución (§9.3.3) antes de despachar la acción.
```

### 9.3.7 Métricas del protocolo de orquestación

Para evaluar la efectividad del protocolo, se definen las siguientes métricas operacionales:

| Métrica | Definición | Target |
|---------|-----------|--------|
| Latencia de interrupción N0 | Tiempo entre detección de crisis y acción de KAZE | < 2s |
| Latencia de interrupción N1 | Tiempo entre confirmación de persistencia y pausa | < 10s |
| Tasa de falsos positivos N1 | Interrupciones N1 donde anxiety volvió a rango normal en < 30s | < 15% |
| Sesiones sin interrupción | % de sesiones que completan sin intervención N0/N1 | > 85% |
| Tasa de reanudación post-crisis | % de estudiantes que continúan sesión post-intervención N1 | > 60% |
| Conflictos resueltos por ciclo | Promedio de conflictos entre agentes por sesión | < 3 |
| Eventos escalados por persistencia | Eventos que llegan a MIYAGI por Regla 4 / semana | Monitorear |

---

# Capítulo 10. Métricas de Impacto

## 10.1 KPIs por acción

Cada actividad del banco se evalúa mediante cuatro indicadores clave:

### 10.1.1 Tasa de completación

$$CR_k = \frac{\text{sesiones completadas de } a_k}{\text{sesiones iniciadas de } a_k}$$

Un CR < 0.60 señala que la actividad tiene problemas de diseño (demasiado larga, demasiado difícil, poco engaging). El banco se revisa trimestralmente y las actividades con CR persistentemente bajo se rediseñan o eliminan.

### 10.1.2 Efecto en variable target

Para cada actividad $a_k$ con variable target $v_i$, se mide el cambio promedio observado:

$$\bar{\Delta}_{k,i} = \frac{1}{N_k} \sum_{j=1}^{N_k} [v_i^{(j)}(t + \Delta t) - v_i^{(j)}(t)]$$

donde $N_k$ es el número de estudiantes que completaron $a_k$ y $\Delta t$ es el período de medición post-actividad (inmediato para mastery, 24h para emotional_state, 7d para study_adherence).

### 10.1.3 Satisfacción del estudiante

Rating de 1–5 estrellas post-actividad (opcional, no intrusivo). Se solicita en el 20% de las sesiones para evitar fatiga de encuesta. La satisfacción informa sobre la experiencia subjetiva, complementando los indicadores objetivos.

### 10.1.4 Eficiencia temporal

$$E_k = \frac{\bar{\Delta}_{k,i}}{\bar{t}_k}$$

donde $\bar{t}_k$ es la duración promedio de la actividad. La eficiencia temporal permite comparar actividades de distinta duración: ¿qué actividad produce más mejora por minuto invertido?

## 10.2 Framework de A/B testing

### 10.2.1 Diseño experimental

TAKUMI implementa un framework de A/B testing continuo para evaluar variantes de actividades, niveles de feedback, parámetros de gamificación y configuraciones del algoritmo de priorización.

**Unidad de aleatorización:** Estudiante (no sesión), para evitar contaminación intra-sujeto.

**Tamaño muestral mínimo:** Calculado con análisis de poder estadístico (potencia = 0.80, α = 0.05, efecto mínimo detectable d = 0.20). Para la base de usuarios esperada, esto implica grupos de ≥ 400 estudiantes por condición.

**Duración mínima:** 2 semanas por experimento, para capturar efectos en variables de cambio lento (study_adherence, metacognition).

### 10.2.2 Variables de resultado

- **Primaria:** Cambio en mastery (delta BKT promedio por KC).
- **Secundarias:** Cambio en puntaje PAES simulado, adherencia (días activos / días del período), engagement (minutos activos / sesión), bienestar (promedio emotional_state).

### 10.2.3 Análisis

- Diferencia de medias con intervalo de confianza del 95%.
- Tamaño del efecto (d de Cohen).
- Análisis de heterogeneidad por subgrupos (NSE, nivel inicial de mastery, tipo motivacional).
- Corrección por comparaciones múltiples (Benjamini-Hochberg).

## 10.3 Dashboard de efectividad

### 10.3.1 Vista de sistema

El dashboard de TAKUMI presenta tres paneles principales:

**Panel 1 — Mapa de calor del grafo:** Visualización de las 21 variables promediadas sobre toda la población activa. Los colores indican: verde (variable en rango saludable), amarillo (requiere atención), rojo (crítica). Se actualiza diariamente.

**Panel 2 — Eficiencia de actividades:** Ranking de actividades por eficiencia temporal ($E_k$). Permite identificar las actividades de mayor ROI pedagógico y las que necesitan rediseño.

**Panel 3 — Funnel de engagement:** Visualización del embudo: usuarios registrados → primer diagnóstico completado → primera semana activa → primera sesión semanal → adherencia ≥ 4 semanas → adherencia ≥ 12 semanas. Identifica los puntos de fuga principales.

### 10.3.2 Vista individual

Cada estudiante tiene un dashboard personal simplificado:

- **Progreso por materia:** Barra de mastery por materia con meta visual.
- **Puntaje PAES estimado:** Evolución temporal con intervalo de confianza.
- **Racha y XP:** Indicadores de consistencia.
- **Logros recientes:** Badges obtenidos, misiones completadas.
- **Recomendación del día:** La acción top-1 del algoritmo de priorización con explicación simple.

## 10.4 Ciclo de mejora continua

El sistema de métricas alimenta un ciclo PDCA (Plan-Do-Check-Act) mensual:

1. **Plan:** Identificar las 3 actividades de menor eficiencia y las 3 variables del grafo con peor evolución poblacional.
2. **Do:** Diseñar variantes mejoradas de las actividades identificadas e implementar como test A/B.
3. **Check:** Después de 2–4 semanas, analizar resultados del A/B test con rigor estadístico.
4. **Act:** Si la variante supera al control (p < 0.05, d > 0.15), reemplazar. Si no, iterar o descartar.

Este ciclo garantiza que el banco de actividades mejora continuamente, evitando la obsolescencia y adaptándose a los patrones de la población estudiantil.

---

# Capítulo 11. Limitaciones y Trabajo Futuro

## 11.1 Limitaciones del modelo actual

### 11.1.1 Linealidad del grafo causal

El modelo asume relaciones lineales entre las 21 variables (Capítulo 4, Sección 4.1.4). Sin embargo, al menos dos relaciones son conocidamente no lineales: la relación ansiedad-rendimiento (curva de Yerkes-Dodson; Yerkes y Dodson, 1908) y la relación carga cognitiva-aprendizaje (U invertida; Sweller, 2011). El algoritmo de priorización hereda estas limitaciones, pudiendo subestimar el beneficio de niveles moderados de ansiedad y sobreestimar el efecto negativo de la carga cognitiva en estudiantes avanzados.

**Trabajo futuro:** Incorporar funciones de transferencia no lineales para las aristas con evidencia de no linealidad, usando modelos aditivos generalizados (GAMs) o funciones sigmoide parametrizadas.

### 11.1.2 Simplicación de constructos psicológicos

Colapsar constructos complejos en escalares [0, 1] implica pérdida de información:
- Motivation pierde la distinción cualitativa entre tipos de regulación del continuo SDT.
- Frustration_tolerance confunde persistencia conductual con tolerancia emocional.
- Emotional_state reduce la complejidad del modelo circumplejo de Russell (1980) a una dimensión.

**Trabajo futuro:** Migrar hacia representaciones multidimensionales para los constructos más complejos, manteniendo la interoperabilidad con el grafo causal.

### 11.1.3 Validación empírica pendiente

Los pesos del grafo causal se calibraron desde evidencia meta-analítica, no desde datos empíricos del propio sistema. Esto implica que:
- Los pesos pueden no generalizarse al contexto específico de la preparación PAES en Chile.
- Los efectos de interacción entre variables no están capturados en el modelo lineal.
- La eficacia real de las actividades del banco no se ha medido en producción.

**Trabajo futuro:** Implementar un módulo de calibración empírica que actualice los pesos del grafo bayesianamente a medida que se acumulan datos reales de uso.

### 11.1.4 Limitaciones del banco de actividades

- El banco inicial de 22 actividades es limitado. Se estima que un sistema maduro requiere > 100 actividades con variantes para cubrir adecuadamente las combinaciones materia × tipo × nivel.
- Las actividades de regulación emocional están basadas en técnicas con evidencia general, pero no han sido adaptadas específicamente para adolescentes chilenos.
- Las actividades sociales dependen de masa crítica de usuarios para ser viables.

### 11.1.5 Sesgos del algoritmo de priorización

- El algoritmo prioriza impacto en mastery como variable terminal, lo que podría subvalorar intervenciones de bienestar cuyo efecto en mastery es indirecto y diferido.
- Los pesos de la función de utilidad (α, β, γ, λ) son parámetros fijos que idealmente deberían adaptarse al perfil del estudiante.
- El algoritmo no modela la interacción temporal entre acciones consecutivas (e.g., una sesión de regulación emocional seguida de práctica puede tener efecto sinérgico no capturado).

### 11.1.6 Limitaciones de la gamificación

- Los anti-patterns implementados pueden no ser suficientes para prevenir todos los efectos negativos de la gamificación.
- La evidencia sobre gamificación en educación muestra efectos heterogéneos y moderados (Hamari, Koivisto y Sarsa, 2014).
- El sistema puede atraer a estudiantes que ya son motivados y no alcanzar a los más vulnerables (sesgo de autoselección).

## 11.2 Direcciones de trabajo futuro

### 11.2.1 Personalización de la función de utilidad

Aprender los pesos (α, β, γ, λ) individualizados para cada estudiante mediante reinforcement learning, optimizando el engagement y el rendimiento a largo plazo.

### 11.2.2 Modelo temporal explícito

Incorporar la dimensión temporal en el grafo causal: los efectos de las intervenciones tienen latencias diferentes (el efecto de una sesión de práctica en mastery es inmediato; el efecto de mejorar sleep_quality en mastery tarda días). Un modelo temporal permitiría planificación a más largo plazo.

### 11.2.3 Generación automática de actividades

Usar modelos de lenguaje para generar ítems calibrados a partir de especificaciones de KC, dificultad y formato, reduciendo el cuello de botella de la creación manual del banco de actividades.

### 11.2.4 Validación con RCT

Diseñar un ensayo controlado aleatorizado (RCT) con al menos 1000 estudiantes que compare SENSEI con preparación PAES convencional, midiendo diferencias en puntaje PAES, bienestar y adherencia.

### 11.2.5 Extensión a otros contextos

El framework TAKUMI (grafo causal + banco de actividades + algoritmo de priorización + gamificación) es potencialmente generalizable a otros exámenes estandarizados (SAT, ENEM, Selectividad) y a otros contextos educativos adaptativos.

---

# Capítulo 12. Referencias

Agarwal, P. K., Nunes, L. D., y Blundell, J. M. (2021). Retrieval practice consistently benefits student learning: A systematic review of applied research in school classrooms. *Educational Psychology Review*, 33(4), 1409–1453.

Amabile, T. M., y Kramer, S. J. (2011). *The Progress Principle: Using Small Wins to Ignite Joy, Engagement, and Creativity at Work*. Harvard Business Review Press.

Andrews, S., Ellis, D. A., Shaw, H., y Piwek, L. (2015). Beyond self-report: Tools to compare estimated and real-world smartphone use. *PLOS ONE*, 10(10), e0139004.

Aronson, J., Fried, C. B., y Good, C. (2002). Reducing the effects of stereotype threat on African American college students by shaping theories of intelligence. *Journal of Experimental Social Psychology*, 38(2), 113–125.

Baker, R. S., D'Mello, S. K., Rodrigo, M. M. y Graesser, A. C. (2010). Better to be frustrated than bored. *International Journal of Human-Computer Studies*, 68(4), 223-241.

Bandura, A. (1997). *Self-Efficacy: The Exercise of Control*. W. H. Freeman.

Baumeister, R. F., Bratslavsky, E., Muraven, M. y Tice, D. M. (1998). Ego depletion. *Journal of Personality and Social Psychology*, 74(5), 1252-1265.

Bauermeister, J. J., Collazo, J. A., y Spielberger, C. D. (1983). The construction and validation of the Spanish form of the Test Anxiety Inventory. En C. D. Spielberger y R. Díaz-Guerrero (Eds.), *Cross-Cultural Anxiety* (Vol. 2, pp. 67–85). Hemisphere.

Biddle, S. J. H., y Asare, M. (2011). Physical activity and mental health in children and adolescents: A review of reviews. *British Journal of Sports Medicine*, 45(11), 886–895.

Boksem, M. A. y Tops, M. (2008). Mental fatigue: Costs and benefits. *Brain Research Reviews*, 59(1), 125-139.

Bryan, G., Karlan, D., y Nelson, S. (2010). Commitment devices. *Annual Review of Economics*, 2(1), 671–698.

Burns, D. J. y Wellings, B. L. (2001). Cooperative learning and performance on a reading comprehension test. *Journal of Social Psychology*, 141(4), 526-532.

Buysse, D. J., Reynolds, C. F., Monk, T. H., Berman, S. R., y Kupfer, D. J. (1989). The Pittsburgh Sleep Quality Index: A new instrument for psychiatric practice and research. *Psychiatry Research*, 28(2), 193–213.

Carter, B., Rees, P., Hale, L., Bhattacharjee, D., y Paradkar, M. S. (2016). Association between portable screen-based media device access or use and sleep outcomes: A systematic review and meta-analysis. *JAMA Pediatrics*, 170(12), 1202–1208.

Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., y Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. *Psychological Bulletin*, 132(3), 354–380.

Cepeda, N. J., Vul, E., Rohrer, D., Wixted, J. T., y Pashler, H. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. *Psychological Science*, 19(11), 1095–1102.

Chemers, M. M., Hu, L., y Garcia, B. F. (2001). Academic self-efficacy and first-year college student performance and adjustment. *Journal of Educational Psychology*, 93(1), 55–64.

Chou, Y. (2015). *Actionable Gamification: Beyond Points, Badges, and Leaderboards*. Octalysis Media.

Clark, R. C., y Mayer, R. E. (2016). *E-Learning and the Science of Instruction: Proven Guidelines for Consumers and Designers of Multimedia Learning* (4ta ed.). Wiley.

Cohen, S., Kamarck, T., y Mermelstein, R. (1983). A global measure of perceived stress. *Journal of Health and Social Behavior*, 24(4), 385–396.

Cohen, S., y Wills, T. A. (1985). Stress, social support, and the buffering hypothesis. *Psychological Bulletin*, 98(2), 310–357.

Corbett, A. T. y Anderson, J. R. (1995). Knowledge tracing. *User Modeling and User-Adapted Interaction*, 4(4), 253-278.

Cowan, N. (2001). The magical number 4 in short-term memory: A reconsideration of mental storage capacity. *Behavioral and Brain Sciences*, 24(1), 87–114.

Csikszentmihalyi, M. (1990). *Flow: The Psychology of Optimal Experience*. Harper & Row.

Credé, M. y Phillips, L. A. (2011). A meta-analytic review of the Motivated Strategies for Learning Questionnaire. *Learning and Individual Differences*, 21(4), 337-346.

D'Mello, S. y Graesser, A. (2012). Dynamics of affective states during complex learning. *Learning and Instruction*, 22(2), 145-157.

Deci, E. L., y Ryan, R. M. (2000). The "what" and "why" of goal pursuits: Human needs and the self-determination of behavior. *Psychological Inquiry*, 11(4), 227–268.

Dent, A. L., y Koenka, A. C. (2016). The relation between self-regulated learning and academic achievement across childhood and adolescence: A meta-analysis. *Educational Psychology Review*, 28(3), 425–474.

Deterding, S., Dixon, D., Khaled, R., y Nacke, L. (2011). From game design elements to gamefulness: Defining "gamification." *Proceedings of the 15th International Academic MindTrek Conference* (pp. 9–15). ACM.

Diekelmann, S., y Born, J. (2010). The memory function of sleep. *Nature Reviews Neuroscience*, 11(2), 114–126.

Dignath, C., y Büttner, G. (2008). Components of fostering self-regulated learning among students: A meta-analysis on intervention studies at primary and secondary school level. *Metacognition and Learning*, 3(3), 231–264.

Dweck, C. S. (2006). *Mindset: The New Psychology of Success*. Random House.

Ebbinghaus, H. (1885). *Über das Gedächtnis: Untersuchungen zur experimentellen Psychologie*. Duncker & Humblot.

Eccles, J. S., y Wigfield, A. (2002). Motivational beliefs, values, and goals. *Annual Review of Psychology*, 53(1), 109–132.

Ericsson, K. A., Krampe, R. T., y Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. *Psychological Review*, 100(3), 363–406.

Fan, X., y Chen, M. (2001). Parental involvement and students' academic achievement: A meta-analysis. *Educational Psychology Review*, 13(1), 1–22.

Fiorella, L., y Mayer, R. E. (2016). Eight ways to promote generative learning. *Educational Psychology Review*, 28(4), 717–741.

Fogg, B. J. (2019). *Tiny Habits: The Small Changes that Change Everything*. Houghton Mifflin Harcourt.

Gagné, R. M. (1985). *The Conditions of Learning and Theory of Instruction* (4ta ed.). Holt, Rinehart and Winston.

Hale, L., y Guan, S. (2015). Screen time and sleep among school-aged children and adolescents: A systematic literature review. *Sleep Medicine Reviews*, 21, 50–58.

Hamari, J., Koivisto, J., y Sarsa, H. (2014). Does gamification work? A literature review of empirical studies on gamification. *Proceedings of the 47th Hawaii International Conference on System Sciences* (pp. 3025–3034). IEEE.

Harel, D. (1987). Statecharts: A visual formalism for complex systems. *Science of Computer Programming*, 8(3), 231-274.

Hattie, J. (2009). *Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement*. Routledge.

Hembree, R. (1988). Correlates, causes, effects, and treatment of test anxiety. *Review of Educational Research*, 58(1), 47-77.

Hirshkowitz, M., Whiton, K., Albert, S. M., Alessi, C., Bruni, O., DonCarlos, L., Hazen, N., Herman, J., Katz, E. S., Kheirandish-Gozal, L., Neubauer, D. N., O'Donnell, A. E., Ohayon, M., Peever, J., Rawding, R., Sachdeva, R. C., Setters, B., Vitiello, M. V., Ware, J. C., y Adams Hillard, P. J. (2015). National Sleep Foundation's sleep time duration recommendations: Methodology and results summary. *Sleep Health*, 1(1), 40–43.

Holland, J. L. (1997). *Making Vocational Choices: A Theory of Vocational Personalities and Work Environments* (3ra ed.). Psychological Assessment Resources.

Jacobson, E. (1938). *Progressive Relaxation*. University of Chicago Press.

Jamieson, J. P., Mendes, W. B., Blackstock, E., y Schmader, T. (2010). Turning the knots in your stomach into bows: Reappraising arousal improves performance on the GRE. *Journal of Experimental Social Psychology*, 46(1), 208–212.

Kahneman, D., y Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica*, 47(2), 263–292.

Kalyuga, S. (2007). Expertise reversal effect and its implications for learner-tailored instruction. *Educational Psychology Review*, 19(4), 509–539.

Kaplan, S. (1995). The restorative benefits of nature: Toward an integrative framework. *Journal of Environmental Psychology*, 15(3), 169–182.

Keefer, K. V., Parker, J. D. A., y Saklofske, D. H. (2018). Three decades of emotional intelligence research: Perennial issues, emerging trends, and lessons learned in education. En K. V. Keefer, J. D. A. Parker, y D. H. Saklofske (Eds.), *Emotional Intelligence in Education* (pp. 1–19). Springer.

Laird, J. E. (2012). *The Soar Cognitive Architecture*. MIT Press.

Lee, E.-H. (2012). Review of the psychometric evidence of the Perceived Stress Scale. *Asian Nursing Research*, 6(4), 121–127.

Lent, R. W., Brown, S. D., y Hackett, G. (1994). Toward a unifying social cognitive theory of career and academic interest, choice, and performance. *Journal of Vocational Behavior*, 45(1), 79–122.

Lent, R. W., Brown, S. D., y Hackett, G. (2000). Contextual supports and barriers to career choice: A social cognitive analysis. *Journal of Counseling Psychology*, 47(1), 36–49.

Levpušček, M. P., y Zupančič, M. (2009). Math achievement in early adolescence: The role of parental involvement, teachers' behavior, and students' motivational beliefs about math. *Journal of Early Adolescence*, 29(4), 541–570.

Lim, J. y Dinges, D. F. (2010). A meta-analysis of the impact of short-term sleep deprivation on cognitive variables. *Psychological Bulletin*, 136(3), 375-389.

Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., y Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. *Psychological Science*, 18(5), 421–428.

Localytics. (2019). *App engagement and retention benchmarks*. Localytics.

Locke, E. A., y Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation: A 35-year odyssey. *American Psychologist*, 57(9), 705–717.

Macan, T. H., Shahani, C., Dipboye, R. L., y Phillips, A. P. (1990). College students' time management: Correlations with academic performance and stress. *Journal of Educational Psychology*, 82(4), 760–768.

Mayer, R. E. (2009). *Multimedia Learning* (2da ed.). Cambridge University Press.

Merrill, M. D. (2002). First principles of instruction. *Educational Technology Research and Development*, 50(3), 43–59.

Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. *Psychological Review*, 63(2), 81–97.

Mueller, C. M., y Dweck, C. S. (1998). Praise for intelligence can undermine children's motivation and performance. *Journal of Personality and Social Psychology*, 75(1), 33–52.

Nielsen, J. (1994). *Usability Engineering*. Morgan Kaufmann.

Nunes, J. C., y Dreze, X. (2006). The endowed progress effect: How artificial advancement increases effort. *Journal of Consumer Research*, 32(4), 504–512.

Pajares, F. (1996). Self-efficacy beliefs in academic settings. *Review of Educational Research*, 66(4), 543–578.

Pan, S. C., Tajran, J., Lovelett, J., Osuna, J., y Rickard, T. C. (2019). Does interleaved practice enhance foreign language learning? The effects of training schedule on Spanish verb conjugation skills. *Journal of Educational Psychology*, 111(7), 1172–1188.

Patall, E. A., Cooper, H., y Robinson, J. C. (2008). The effects of choice on intrinsic motivation and related outcomes: A meta-analysis of research findings. *Psychological Bulletin*, 134(2), 270–300.

Pearl, J. (2009). *Causality: Models, Reasoning, and Inference* (2nd ed.). Cambridge University Press.

Pennebaker, J. W., y Chung, C. K. (2011). Expressive writing: Connections to physical and mental health. En H. S. Friedman (Ed.), *The Oxford Handbook of Health Psychology* (pp. 417–437). Oxford University Press.

Pintrich, P. R. (2000). The role of goal orientation in self-regulated learning. En M. Boekaerts, P. R. Pintrich, y M. Zeidner (Eds.), *Handbook of Self-Regulation* (pp. 451–502). Academic Press.

Regehr, C., Glancy, D., y Pitts, A. (2013). Interventions to reduce stress in university students: A review and meta-analysis. *Journal of Affective Disorders*, 148(1), 1–11.

Renkl, A. (2014). Toward an instructionally oriented theory of example-based learning. *Cognitive Science*, 38(1), 1–37.

Revilla, M., y Ochoa, C. (2017). Ideal and maximum length for a web survey. *International Journal of Market Research*, 59(5), 557–565.

Richardson, M., Abraham, C., y Bond, R. (2012). Psychological correlates of university students' academic performance: A systematic review and meta-analysis. *Psychological Bulletin*, 138(2), 353–387.

Roediger, H. L., III, y Butler, A. C. (2011). The critical role of retrieval practice in long-term retention. *Trends in Cognitive Sciences*, 15(1), 20–27.

Rogers, T., Milkman, K. L., John, L. K., y Norton, M. I. (2015). Beyond good intentions: Prompting people to make plans improves follow-through on important tasks. *Behavioral Science & Policy*, 1(2), 33–41.

Rohrer, D., y Taylor, K. (2007). The shuffling of mathematics problems improves learning. *Instructional Science*, 35(6), 481–498.

Rowland, C. A. (2014). The effect of testing versus restudy on retention: A meta-analytic review of the testing effect. *Psychological Bulletin*, 140(6), 1432–1463.

Russell, J. A. (1980). A circumplex model of affect. *Journal of Personality and Social Psychology*, 39(6), 1161–1178.

Ryan, R. M., y Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. *American Psychologist*, 55(1), 68–78.

Sailer, M., y Homner, L. (2020). The gamification of learning: A meta-analysis. *Educational Psychology Review*, 32(1), 77–112.

Sarwar, B., Karypis, G., Konstan, J., y Riedl, J. (2001). Item-based collaborative filtering recommendation algorithms. *Proceedings of the 10th International Conference on World Wide Web* (pp. 285–295). ACM.

Schraw, G., y Dennison, R. S. (1994). Assessing metacognitive awareness. *Contemporary Educational Psychology*, 19(4), 460–475.

Settles, B., LaFlair, G. T., y Hagiwara, M. (2020). Machine learning-driven language assessment. *Transactions of the Association for Computational Linguistics*, 8, 247–263.

Shute, V. J. (2011). Stealth assessment in computer-based games to support learning. En S. Tobias y J. D. Fletcher (Eds.), *Computer Games and Instruction* (pp. 503–524). Information Age Publishing.

Shute, V. J., y Ventura, M. (2013). *Stealth Assessment: Measuring and Supporting Learning in Video Games*. MIT Press.

Sisk, V. F., Burgoyne, A. P., Sun, J., Butler, J. L. y Macnamara, B. N. (2018). To what extent and under what circumstances are growth mind-sets important to academic achievement? *Psychological Science*, 29(4), 549-571.

Spielberger, C. D. (1972). Anxiety as an emotional state. En C. D. Spielberger (Ed.), *Anxiety: Current Trends in Theory and Research* (Vol. 1, pp. 23-49). Academic Press.

Spielberger, C. D. (1980). *Test Anxiety Inventory: Preliminary Professional Manual*. Consulting Psychologists Press.

Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science*, 12(2), 257–285.

Sweller, J., y Cooper, G. A. (1985). The use of worked examples as a substitute for problem solving in learning algebra. *Cognition and Instruction*, 2(1), 59–89.

Sweller, J., Ayres, P., y Kalyuga, S. (2011). *Cognitive Load Theory*. Springer.

Thai-Nghe, N., Drumond, L., Krohn-Grimberghe, A., y Schmidt-Thieme, L. (2010). Recommender system for predicting student performance. *Procedia Computer Science*, 1(2), 2811–2819.

Tracey, T. J. G., Lent, R. W., Brown, S. D., Soresi, S. y Nota, L. (2005). Adherence to RIASEC structure in relation to career exploration and parenting style. *Journal of Vocational Behavior*, 67(3), 441-454.

Trafton, J. G., Altmann, E. M., Brock, D. P. y Mintz, F. E. (2003). Preparing to resume an interrupted task. *Journal of Experimental Psychology: General*, 132(2), 253-268.

van der Linden, W. J., y Glas, C. A. W. (2010). *Elements of Adaptive Testing*. Springer.

VanLehn, K. (2011). The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems. *Educational Psychologist*, 46(4), 197–221.

Veenman, M. V., Van Hout-Wolters, B. H. y Afflerbach, P. (2006). Metacognition and learning. *Metacognition and Learning*, 1(1), 3-14.

Vygotsky, L. S. (1978). *Mind in Society: The Development of Higher Psychological Processes*. Harvard University Press.

Walker, M. P. (2017). *Why We Sleep*. Scribner.

Weiner, B. (1985). An attributional theory of achievement motivation and emotion. *Psychological Review*, 92(4), 548–573.

Weiss, D. J., y Kingsbury, G. G. (1984). Application of computerized adaptive testing to educational problems. *Journal of Educational Measurement*, 21(4), 361–375.

Wood, D., Bruner, J. S., y Ross, G. (1976). The role of tutoring in problem solving. *Journal of Child Psychology and Psychiatry*, 17(2), 89–100.

Wright, S. (1921). Correlation and causation. *Journal of Agricultural Research*, 20(7), 557–585.

Yeager, D. S., y Dweck, C. S. (2012). Mindsets that promote resilience: When students believe that personal characteristics can be developed. *Educational Psychologist*, 47(4), 302–314.

Yeager, D. S., Hanselman, P., Walton, G. M., Murray, J. S., Crosnoe, R., Muller, C., ... y Dweck, C. S. (2019). A national experiment reveals where a growth mindset improves achievement. *Nature*, 573(7774), 364–369.

Yerkes, R. M., y Dodson, J. D. (1908). The relation of strength of stimulus to rapidity of habit-formation. *Journal of Comparative Neurology and Psychology*, 18(5), 459–482.

Zimmerman, B. J. (2002). Becoming a self-regulated learner: An overview. *Theory into Practice*, 41(2), 64–70.
