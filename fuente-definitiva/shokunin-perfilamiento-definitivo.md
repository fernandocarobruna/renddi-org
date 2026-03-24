# SHOKUNIN: Diseño de Experiencia de Usuario para Renddi.app
## Tesis Especializada del Equipo SHOKUNIN — Capítulos 1-4

---

# Capítulo 1. Introducción

## 1.1 El principio SHOKUNIN y su aplicación al diseño de experiencia de usuario

SHOKUNIN (職人) designa en la tradición japonesa al artesano que persigue la perfección funcional de su oficio. No se trata de ornamento ni de virtuosismo estético, sino de una obsesión metódica por que cada detalle del artefacto producido cumpla su propósito con la menor fricción posible. Un cuchillo SHOKUNIN no es bello por decoración; es bello porque corta con precisión absoluta. La belleza emerge de la función perfeccionada.

Este principio vertebra la presente tesis especializada. El diseño de experiencia de usuario (UX) de Renddi.app no es una capa cosmética superpuesta sobre un motor adaptativo. Es la interfaz crítica entre la evidencia científica codificada en el grafo causal de 21 variables y el estudiante de 16 años que abre la aplicación a las 21:00 horas en su celular Android, acostado en su cama, con 15 minutos de atención disponible antes de que Instagram lo reclame.

## 1.2 Objetivo de la tesis

El objetivo de esta tesis es diseñar la experiencia de usuario óptima de Renddi.app, fundamentada en evidencia de UX research, behavioral design y perfilamiento generacional, de modo que maximice el engagement sostenido, la adherencia al estudio y, en última instancia, el impacto positivo sobre las variables del grafo causal que predicen el rendimiento en la PAES.

La tesis central que se defiende es la siguiente: **la UX no es decoración, es la interfaz entre la evidencia científica y el estudiante**. Un sistema adaptativo con un grafo causal sofisticado, modelos BKT/IRT calibrados y nueve agentes especializados es inútil si el estudiante no abre la aplicación, no completa la sesión, o no regresa al día siguiente. La UX es el multiplicador --- o el divisor --- de todo el valor científico del sistema.

## 1.3 La cadena causal UX → Impacto

La conexión entre diseño de experiencia y resultado académico opera a través de una cadena causal con eslabones verificables:

1. **UX → Engagement inicial.** Un onboarding bien diseñado reduce la tasa de abandono en el primer uso. Si el estudiante no completa el diagnóstico inicial ("Primera Misión"), el sistema no puede inicializar las 21 variables del grafo y queda ciego.

2. **Engagement → Uso recurrente.** Los mecanismos de retención (rachas, notificaciones calibradas, feedback de progreso) determinan la variable `study_adherence` (v₁₁), que alimenta directamente `mastery` (v₁) con un peso causal de w = +0.30 (Credé y Phillips, 2011).

3. **Uso → Exposición a intervenciones.** Cada sesión completada es una oportunidad para que los agentes KAZE, COMPASS, KAIZEN, KOAN, NAKAMA e IKIGAI intervengan sobre variables emocionales, conductuales, sociales y vocacionales. Sin uso, no hay intervención posible.

4. **Intervenciones → Cambio en variables del grafo.** Las intervenciones modifican variables como `anxiety` (v₅), `motivation` (v₂₀), `sleep_quality` (v₁₃) o `vocational_clarity` (v₁₉), que propagan sus efectos a través de las 30 aristas causales del modelo.

5. **Cambio en variables → Mejora PAES.** La mejora simultánea de múltiples variables, guiada por las rutas causales óptimas para cada perfil, produce el incremento en `mastery` que se traduce en puntaje PAES.

Esta cadena implica que cada decisión de diseño --- desde el tamaño de un botón hasta el tono de una notificación --- tiene un efecto causal, mediado pero real, sobre el puntaje PAES del estudiante. El diseñador UX de Renddi.app no diseña pantallas: diseña probabilidades de cambio conductual.

## 1.4 Alcance y estructura

Los capítulos 1 a 4 de esta tesis cubren los fundamentos necesarios para el diseño informado:

- El **Capítulo 1** (presente) establece el marco conceptual y la tesis central.
- El **Capítulo 2** presenta el marco teórico que integra UX design, behavioral design, flow theory, SDT, comportamiento digital Gen Z, gamificación y diseño emocional.
- El **Capítulo 3** desarrolla el perfilamiento generacional de la Gen Z chilena como población objetivo.
- El **Capítulo 4** define diez arquetipos de usuario basados en las 21 variables del grafo causal, con journey maps, pain points, estrategias de diseño personalizadas y tabla de mapeo cruzado con las personas comunicacionales de KOTODAMA.

## 1.5 Relación con la tesis principal

Esta tesis especializada opera como extensión vertical del Capítulo 9 (Diseño UX y Gamificación) de la tesis principal SENSEI. Mientras el Capítulo 9 establece principios generales, SHOKUNIN los operacionaliza en decisiones de diseño concretas, informadas por el perfilamiento profundo de la población objetivo y la traducción de los arquetipos del Capítulo 7 a experiencias de usuario diferenciadas.

Las 21 variables del grafo causal (mastery, attention_span, metacognition, cognitive_load, anxiety, confidence, emotional_state, self_efficacy, frustration_tolerance, stress_level, study_adherence, time_management, sleep_quality, screen_time, fatigue, physical_activity, social_support, parental_support, vocational_clarity, motivation y growth_mindset) constituyen el vocabulario compartido entre esta tesis y la tesis principal. Cada decisión de diseño documentada aquí se justifica por su impacto esperado sobre una o más de estas variables.

---

# Capítulo 2. Marco Teórico

## 2.1 UX Design: fundamentos canónicos

### 2.1.1 Don Norman y el diseño de las cosas cotidianas

Norman (2013), en *The Design of Everyday Things*, estableció los conceptos que fundamentan el diseño centrado en el usuario moderno. Dos constructos son particularmente relevantes para Renddi.app:

**Affordances y signifiers.** Una affordance es la relación entre las propiedades de un objeto y las capacidades del agente que determina cómo el objeto puede ser usado. Un signifier es la señal perceptible que comunica esa affordance. En el contexto de una aplicación móvil educativa, cada elemento interactivo debe comunicar inequívocamente su función: un botón de respuesta debe parecer presionable, una barra de progreso debe comunicar avance, un gesto de swipe debe ser descubrible sin instrucción explícita. La falla en los signifiers produce lo que Norman denomina el *gulf of execution*: la distancia entre la intención del usuario y las acciones disponibles en la interfaz.

**Gulf of evaluation.** La distancia entre el estado real del sistema y la percepción del usuario sobre dicho estado. Para un sistema adaptativo como Renddi, este concepto adquiere relevancia especial: el estudiante debe comprender por qué el sistema le presenta determinado contenido, por qué la dificultad cambia, y cómo sus acciones afectan las recomendaciones futuras. Un sistema adaptativo opaco genera desconfianza y sensación de pérdida de control, afectando negativamente la variable `self_efficacy` (v₈).

**Modelo conceptual.** Norman argumenta que los usuarios construyen modelos mentales del funcionamiento de un sistema. Cuando el modelo mental del usuario no coincide con el modelo real del sistema, se producen errores y frustración. Renddi debe comunicar un modelo conceptual simple --- "la app te conoce, aprende contigo, y te da lo que necesitas en cada momento" --- que sea suficientemente preciso para predecir el comportamiento del sistema sin requerir comprensión del grafo causal subyacente.

### 2.1.2 Jakob Nielsen y las heurísticas de usabilidad

Nielsen (1994) formalizó diez heurísticas de usabilidad que constituyen el estándar de facto para la evaluación de interfaces. Para Renddi.app, cinco heurísticas resultan críticas:

1. **Visibilidad del estado del sistema.** El estudiante debe saber en todo momento: dónde está dentro de una sesión (pregunta 3 de 8), cuánto le falta (barra de progreso), cómo va su progreso global (dashboard), y qué impacto tienen sus acciones (feedback inmediato de respuesta correcta/incorrecta). La ausencia de visibilidad eleva la variable `cognitive_load` (v₄) al forzar al usuario a mantener el estado en memoria de trabajo.

2. **Correspondencia entre el sistema y el mundo real.** La terminología debe reflejar el lenguaje cotidiano del adolescente chileno, no jerga psicométrica ni académica. "Nivel de dominio: 0.72 en KC-MAT-ALG-003" es información para el sistema; "Algebra: vas bien, te faltan las ecuaciones cuadráticas" es información para el estudiante.

3. **Control y libertad del usuario.** El estudiante debe poder pausar, retroceder o abandonar una sesión sin penalización punitiva. La sensación de estar atrapado eleva `anxiety` (v₅) y reduce `self_efficacy` (v₈). La Teoría de la Autodeterminación (Ryan y Deci, 2000) predice que la restricción de autonomía socava la motivación intrínseca.

4. **Consistencia y estándares.** Los patrones de interacción deben ser uniformes entre los nueve agentes del ecosistema. Si SENPAI presenta preguntas con swipe horizontal, DOJO no puede presentarlas con scroll vertical. La inconsistencia eleva la carga cognitiva extrínseca (Sweller, 2011).

5. **Prevención de errores.** En contextos de evaluación, un toque accidental que registre una respuesta incorrecta tiene consecuencias reales sobre la estimación BKT del dominio del estudiante. El diseño debe minimizar estas posibilidades mediante confirmación de respuestas, áreas de toque generosas (mínimo 44×44 px CSS, WCAG 2.2) y undo cuando sea posible.

### 2.1.3 Sung, Chang y Liu: UX móvil educativo

Sung, Chang y Liu (2016), en su meta-análisis de 110 estudios sobre aprendizaje móvil, encontraron que las aplicaciones con diseño centrado en el usuario producen efectos significativamente mayores (d = 0.55) que aquellas que trasladan contenido de escritorio a formato móvil sin adaptación. Este hallazgo refuerza que el diseño mobile-first no es un complemento estético sino un predictor de efectividad educativa.

## 2.2 Behavioral Design: el modelo de Fogg

### 2.2.1 B = MAP

Fogg (2009, 2019) propuso que el comportamiento (B) ocurre cuando tres elementos convergen simultáneamente: **M**otivación (motivation), **A**ptitud (ability) y **P**rompter (prompt, anteriormente denominado trigger). La ausencia de cualquiera de los tres impide el comportamiento objetivo. Este modelo, formalizado en *Tiny Habits* (Fogg, 2019), tiene implicancias directas para el diseño de Renddi:

**Motivación.** El modelo de Fogg identifica tres pares de motivadores centrales: placer/dolor, esperanza/miedo, y aceptación social/rechazo social. Para un estudiante PAES, la motivación varía entre perfiles: Valentina ("La Aplicada") opera predominantemente por esperanza (acceder a la carrera deseada); Matías ("El Ansioso") opera predominantemente por miedo (no quedar fuera); Benjamín ("El Gamer") carece de motivadores académicos activados. La UX debe detectar y aprovechar el motivador dominante de cada perfil.

**Aptitud (Ability).** Fogg descompone la aptitud en seis factores de simplicidad: tiempo requerido, dinero, esfuerzo físico, esfuerzo cognitivo, desviación social y no-rutina. Para un adolescente chileno usando Renddi en su celular, los factores críticos son el tiempo requerido (sesiones de máximo 15 minutos), el esfuerzo cognitivo (preguntas calibradas a la zona de desarrollo próximo), y la no-rutina (integración con hábitos existentes, como estudiar después de cenar).

**Prompt.** El prompt es la señal que activa el comportamiento cuando motivación y aptitud son suficientes. Los prompts de Renddi incluyen notificaciones push, recordatorios de racha, y triggers contextuales (hora del día, día de la semana). La calibración del prompt es crítica: un prompt en el momento equivocado (durante clases, a las 7:00 AM) genera rechazo y desinstalación; un prompt en el momento óptimo (20:30, después de cenar) activa el hábito.

### 2.2.2 Tiny Habits y la arquitectura de hábitos

Fogg (2019) formalizó un protocolo para la creación de hábitos basado en tres pasos: (1) anclar el nuevo comportamiento a un hábito existente ("Después de [ancla], voy a [nuevo hábito]"); (2) hacer el nuevo hábito tan pequeño que sea imposible fallar (la "versión mínima"); y (3) celebrar inmediatamente después de completar el hábito.

Para Renddi, esto se traduce en:
- **Ancla:** "Después de cenar" o "Después de llegar del colegio" como momentos de activación.
- **Versión mínima:** Una sesión de 3 preguntas (menos de 2 minutos) cuenta como sesión completada para mantener la racha. Esto preserva `study_adherence` (v₁₁) en días difíciles.
- **Celebración:** Feedback inmediato positivo (animación, sonido, actualización de racha) que activa la dopamina asociativa y refuerza el circuito hábito-recompensa.

### 2.2.3 Persuasive Technology

Fogg (2003), en *Persuasive Technology: Using Computers to Change What We Think and Do*, estableció el campo de la tecnología persuasiva. Distinguió tres roles que la tecnología puede asumir como agente de cambio: herramienta (facilita una tarea), medio (proporciona experiencias que cambian actitudes) y actor social (establece relaciones que influyen en el comportamiento).

Renddi opera en los tres roles simultáneamente: como herramienta que facilita la práctica adaptativa, como medio que proporciona experiencias de maestría que elevan `self_efficacy` (v₈), y como actor social a través de los agentes que establecen relaciones de coaching. La ética de la tecnología persuasiva --- que Fogg abordó explícitamente --- exige que la persuasión opere a favor de los intereses del usuario, no contra ellos. Este principio se operacionaliza en la sección sobre dark patterns (2.9).

## 2.3 Flow Theory: el balance desafío-habilidad

### 2.3.1 El modelo de Csikszentmihalyi

Csikszentmihalyi (1990) identificó el estado de flow como la experiencia óptima que ocurre cuando una persona se involucra completamente en una actividad que equilibra el desafío percibido con la habilidad percibida. Las condiciones para el flow incluyen: (a) metas claras, (b) feedback inmediato, (c) balance desafío-habilidad, (d) concentración intensa, (e) sensación de control, (f) pérdida de autoconciencia, (g) distorsión temporal, y (h) la actividad como autotélica (intrínsecamente gratificante).

Para Renddi, el flow es el estado objetivo durante las sesiones de práctica. El motor adaptativo BKT/IRT calibra la dificultad de los ítems para mantener al estudiante en el canal de flow: suficientemente desafiante para evitar el aburrimiento, suficientemente accesible para evitar la ansiedad. Cuando el desafío excede la habilidad, la `anxiety` (v₅) se eleva y la `frustration_tolerance` (v₉) se consume. Cuando la habilidad excede el desafío, el aburrimiento reduce la `motivation` (v₂₀) y el engagement.

### 2.3.2 Flow en contextos digitales educativos

Hamari y Koivisto (2014) documentaron que los elementos de gamificación pueden facilitar el estado de flow cuando están alineados con las condiciones de Csikszentmihalyi. Específicamente, los sistemas de progresión (XP, niveles) proporcionan metas claras; el feedback de respuesta correcta/incorrecta proporciona retroalimentación inmediata; y la dificultad adaptativa mantiene el balance desafío-habilidad. Sin embargo, los elementos de gamificación que interrumpen la actividad --- popups, animaciones excesivas, transiciones largas --- destruyen el flow al fragmentar la concentración.

Nakamura y Csikszentmihalyi (2002) formalizaron la relación entre flow y motivación intrínseca: el flow es intrínsecamente gratificante, lo que genera un ciclo virtuoso donde la experiencia de flow aumenta la probabilidad de repetir la actividad. En el contexto del grafo causal, la experiencia repetida de flow durante sesiones de Renddi incrementa `motivation` (v₂₀) y `study_adherence` (v₁₁), que a su vez aumentan `mastery` (v₁).

## 2.4 Self-Determination Theory aplicada a UX

### 2.4.1 Las tres necesidades básicas en interfaces

Ryan y Deci (2000) postularon que la motivación intrínseca depende de la satisfacción de tres necesidades psicológicas básicas: autonomía, competencia y relación. Cada necesidad tiene implicancias directas para el diseño de la interfaz de Renddi:

**Autonomía.** La percepción de que las propias acciones son volitivas y congruentes con los propios valores. En la interfaz, la autonomía se satisface mediante: (a) opciones de personalización (temas visuales, configuración de notificaciones, selección de asignaturas prioritarias); (b) control sobre la sesión (pausar, cambiar de tema, ajustar duración); (c) transparencia del sistema ("Te recomiendo repasar funciones porque tu último ensayo mostró debilidad ahí" en lugar de simplemente presentar el contenido sin explicación). La restricción de opciones --- interfaces que obligan a seguir una secuencia rígida --- socava la autonomía y, por extensión, la motivación intrínseca.

**Competencia.** La percepción de eficacia y dominio en la interacción con el entorno. En la interfaz, la competencia se satisface mediante: (a) feedback de progreso visible y significativo (barras de mastery por tema, racha acumulada, mejora en ensayos simulados); (b) dificultad calibrada que produce una tasa de éxito óptima (ni tan fácil que no haya logro, ni tan difícil que no haya éxito); (c) celebraciones de hitos que refuerzan la percepción de avance. Bandura (1997) documentó que las mastery experiences son la fuente más potente de autoeficacia, lo que conecta directamente la satisfacción de competencia con la variable `self_efficacy` (v₈) del grafo.

**Relación (relatedness).** La percepción de conexión con otros significativos. En la interfaz, la relación se satisface mediante: (a) funcionalidades sociales del agente NAKAMA (grupos de estudio, accountability partners); (b) micro-leaderboards de pares comparables; (c) la relación parasocial con los agentes de coaching, que adoptan un tono empático y personalizado. Cohen y Wills (1985) establecieron que el apoyo social amortigua el estrés, lo que conecta la satisfacción de relación con las variables `social_support` (v₁₇) y `stress_level` (v₁₀).

### 2.4.2 La SDT como marco evaluativo de decisiones UX

Cada decisión de diseño en Renddi puede evaluarse mediante la pregunta: ¿esta decisión satisface o frustra alguna de las tres necesidades básicas? Una notificación con tono culposo ("¡Te perdiste tu sesión de ayer!") frustra la autonomía. Un ítem demasiado difícil que el estudiante no puede resolver sin ayuda frustra la competencia. Un leaderboard global donde el estudiante se ve en la posición 47.832 de 50.000 frustra tanto la competencia como la relación.

Deci, Koestner y Ryan (1999), en un meta-análisis de 128 estudios, demostraron que las recompensas externas contingentes a la tarea pueden socavar la motivación intrínseca cuando son percibidas como controladoras. Este hallazgo tiene implicancias directas para el sistema de XP y rachas de Renddi: los puntos deben funcionar como indicadores informativos de progreso (reforzando competencia), no como mecanismos de control conductual (socavando autonomía).

## 2.5 Comportamiento digital de la Gen Z

### 2.5.1 Seemiller y Grace: Generation Z

Seemiller y Grace (2016), en *Generation Z Goes to College*, documentaron las características definitorias de la Generación Z (nacidos aproximadamente entre 1995 y 2012) basándose en un estudio con más de 1.100 estudiantes universitarios. Sus hallazgos clave para el diseño de aplicaciones educativas incluyen: (a) preferencia por el aprendizaje visual e interactivo sobre el textual pasivo; (b) expectativa de personalización --- rechazo de experiencias genéricas; (c) pragmatismo orientado a resultados --- necesidad de comprender la utilidad inmediata de cada actividad; y (d) comodidad con la tecnología pero no necesariamente competencia técnica profunda.

### 2.5.2 Twenge: iGen

Twenge (2017), en *iGen: Why Today's Super-Connected Kids Are Growing Up Less Rebellious, More Tolerant, Less Happy---and Completely Unprepared for Adulthood*, documentó tendencias preocupantes en la salud mental de la Gen Z asociadas al uso intensivo de smartphones y redes sociales. Twenge reportó correlaciones entre tiempo de pantalla y síntomas depresivos, aunque la dirección causal y la magnitud del efecto han sido debatidos en la literatura posterior (Orben y Przybylski, 2019, estimaron efectos pequeños, r < 0.05, en un análisis de tres grandes datasets).

Para el diseño de Renddi, la contribución de Twenge no es el debate sobre el efecto del screen time en la salud mental, sino la documentación de patrones de uso: (a) el smartphone es el dispositivo primario para todo tipo de actividad digital en la Gen Z; (b) la tolerancia a la espera es baja --- las interfaces que no cargan en menos de 3 segundos son abandonadas; (c) la comunicación es predominantemente visual y asíncrona.

## 2.6 Gamificación UX

### 2.6.1 Deterding et al.: definición canónica

Deterding, Dixon, Khaled y Nacke (2011) definieron gamificación como el uso de elementos de diseño de juegos en contextos no lúdicos. Esta definición distingue la gamificación de los serious games (juegos completos con propósito educativo) y del playful design (diseño lúdico sin elementos de juego específicos). La precisión importa porque los efectos de la gamificación dependen críticamente de qué elementos se implementan y cómo se integran con los objetivos del sistema.

### 2.6.2 Hamari et al.: evidencia empírica

Hamari, Koivisto y Sarsa (2014) revisaron 24 estudios empíricos sobre gamificación y concluyeron que produce efectos positivos en la mayoría de los contextos, con una advertencia crucial: los resultados dependen del alineamiento entre los elementos gamificados y la motivación del usuario. Los estudios con efectos nulos o negativos compartían un patrón: la gamificación había sido superpuesta superficialmente sin integración con la dinámica central de la actividad.

Sailer y Homner (2020) cuantificaron estos efectos en un meta-análisis (38 estudios, N = 4.314): efecto positivo significativo sobre resultados cognitivos (d = 0.49) y motivacionales (d = 0.36). Los elementos que refuerzan competencia y autonomía producen efectos significativos; los elementos decorativos no producen efectos o producen efectos negativos. Este hallazgo alinea la evidencia de gamificación con la SDT.

### 2.6.3 Implicancias para Renddi

La gamificación de Renddi debe operar como sistema informativo integrado, no como capa decorativa. Específicamente:
- Los **XP** reflejan calidad de aprendizaje, no cantidad de actividad.
- Las **rachas** aprovechan la aversión a la pérdida (Kahneman y Tversky, 1979) con mecanismos de protección que transforman la amenaza en reforzamiento positivo.
- Los **micro-leaderboards** agrupan por nivel similar para evitar desmotivación por comparación social descendente (Ames, 1992; Elliot, 1999).
- El **progreso endowado** (Nunes y Dreze, 2006) inicia barras de progreso por encima de cero tras el diagnóstico inicial.

## 2.7 Mobile-First

### 2.7.1 Wroblewski: Mobile First

Wroblewski (2011), en *Mobile First*, argumentó que el diseño debe comenzar por la experiencia móvil y expandirse hacia pantallas más grandes, invirtiendo la práctica convencional de diseñar para escritorio y adaptar para móvil. Las razones son tres: (a) las restricciones del móvil (pantalla pequeña, atención fragmentada, contexto de uso variable) fuerzan la priorización del contenido esencial; (b) las capacidades únicas del móvil (ubicación, cámara, sensores, notificaciones push) habilitan experiencias imposibles en escritorio; y (c) el móvil es el dispositivo primario de acceso a internet para la mayoría de la población mundial, particularmente en segmentos jóvenes.

Para Renddi, mobile-first no es una preferencia sino un requisito de equidad: el 85% de los adolescentes chilenos accede a internet primordialmente vía smartphone (SUBTEL, 2023), y el 75% de esos dispositivos son Android de gama media-baja. Diseñar para escritorio y adaptar para móvil produciría una experiencia degradada precisamente para el segmento que más necesita el producto.

## 2.8 Emotional Design

### 2.8.1 Norman: los tres niveles de diseño emocional

Norman (2004), en *Emotional Design: Why We Love (or Hate) Everyday Things*, propuso tres niveles de procesamiento del diseño:

- **Nivel visceral.** La reacción inmediata, automática y pre-consciente ante la apariencia. Para Renddi: primera impresión visual, paleta de colores, tipografía, animaciones de carga. Un diseño visceralmente atractivo reduce la probabilidad de desinstalación en los primeros 30 segundos.

- **Nivel conductual.** La experiencia de uso funcional: ¿funciona bien? ¿Es fácil de usar? ¿Logra lo que el usuario quiere? Para Renddi: fluidez de la interacción, velocidad de respuesta, claridad de la navegación, utilidad percibida del feedback.

- **Nivel reflexivo.** El significado que el usuario atribuye al producto: ¿qué dice de mí usarlo? ¿Me siento orgulloso de mi progreso? Para Renddi: la narrativa de autosuperación, la identidad de "estudiante que se prepara activamente", el sentido de pertenencia a una comunidad de pares.

### 2.8.2 Desmet y Hekkert: marco de emociones en productos

Desmet y Hekkert (2007) formalizaron un marco para comprender las respuestas emocionales a productos, distinguiendo entre experiencia estética (placer sensorial), experiencia de significado (significado personal y simbólico) y experiencia emocional (emociones discretas como orgullo, frustración, alivio). Para Renddi, las emociones objetivo en cada momento de la interacción son:
- **Al abrir la app:** curiosidad, anticipación.
- **Al responder correctamente:** orgullo, competencia.
- **Al responder incorrectamente:** interés (no frustración), comprensión de la explicación.
- **Al completar una sesión:** logro, satisfacción, ganas de volver.
- **Al ver el progreso semanal:** esperanza, autoeficacia.

## 2.9 Dark Patterns: qué NO hacer

### 2.9.1 Brignull y la taxonomía de dark patterns

Brignull (2010) acuñó el término dark patterns para describir estrategias de diseño de interfaces que manipulan al usuario contra sus propios intereses. Gray, Kou, Battles, Hoggatt y Toombs (2018) formalizaron una taxonomía que incluye: nagging (insistencia repetitiva), obstruction (dificultar acciones que el negocio no desea), sneaking (ocultar información relevante), interface interference (manipular la interfaz para dirigir decisiones), y forced action (obligar acciones no deseadas como condición para continuar).

### 2.9.2 Dark patterns en EdTech

En el contexto de aplicaciones educativas, los dark patterns incluyen patrones específicos que Renddi debe evitar explícitamente:

- **Notificaciones basadas en culpa.** "¡Perdiste tu racha de 15 días! Tus amigos siguen avanzando" --- manipulación emocional que eleva `anxiety` (v₅) y `stress_level` (v₁₀).
- **Contadores regresivos artificiales.** "Solo quedan 3 horas para tu recompensa diaria" --- urgencia artificial que genera ansiedad innecesaria.
- **Paywalls sobre contenido esencial.** Condicionar funcionalidades pedagógicas básicas a la versión premium viola el compromiso de equidad.
- **Métricas vanidosas.** Mostrar números inflados que no representan aprendizaje real para generar sensación artificial de progreso.
- **Infinite scroll en contenido educativo.** Fomentar el consumo pasivo en lugar de la práctica activa.

El compromiso SHOKUNIN contra dark patterns no es solo ético sino estratégico: la confianza del usuario es un recurso no renovable, y su destrucción mediante manipulación produce abandono irreversible.

## 2.10 Síntesis del marco teórico

El marco teórico integrado para el diseño UX de Renddi.app se articula en tres capas:

1. **Capa funcional** (Norman, Nielsen, Wroblewski): la interfaz debe ser usable, comprensible y adaptada al dispositivo primario del usuario.
2. **Capa motivacional** (Fogg, Ryan y Deci, Csikszentmihalyi, Deterding): la interfaz debe activar y sostener la motivación mediante diseño de hábitos, satisfacción de necesidades básicas, estado de flow y gamificación informativa.
3. **Capa emocional** (Norman emotional design, Desmet y Hekkert, Brignull): la interfaz debe generar emociones positivas, construir significado personal y evitar manipulación.

Estas tres capas operan simultáneamente sobre las 21 variables del grafo causal, con impacto directo sobre `study_adherence` (v₁₁), `motivation` (v₂₀), `anxiety` (v₅), `self_efficacy` (v₈) y `emotional_state` (v₇), e impacto indirecto --- propagado por las 30 aristas causales --- sobre `mastery` (v₁).

---

# Capítulo 3. Perfilamiento Generacional de la Gen Z Chilena

## 3.1 Delimitación demográfica

### 3.1.1 Cohorte objetivo

La población objetivo de Renddi.app está compuesta por adolescentes chilenos nacidos entre 2005 y 2009, que cursan entre 2° medio y IV medio y rendirán la PAES entre 2025 y 2029. Esta cohorte representa aproximadamente 1.2 millones de estudiantes distribuidos en las tres dependencias del sistema escolar chileno: establecimientos municipales (actualmente en transición a Servicios Locales de Educación Pública, SLEP), particulares subvencionados y particulares pagados.

La distribución por dependencia según datos del Ministerio de Educación (MINEDUC) es aproximadamente: 36% en establecimientos públicos (municipales + SLEP), 54% en particulares subvencionados y 10% en particulares pagados. Esta distribución es relevante porque el grupo socioeconómico (GSE) correlaciona fuertemente con el tipo de establecimiento y determina patrones de acceso tecnológico, hábitos de estudio y expectativas familiares que impactan directamente el diseño UX.

### 3.1.2 Contexto generacional

La Gen Z chilena comparte rasgos con la Gen Z global documentada por Seemiller y Grace (2016) y Twenge (2017), pero presenta particularidades derivadas del contexto sociocultural chileno:

- **Estallido social de octubre 2019.** Esta cohorte tenía entre 10 y 14 años durante las protestas más masivas de la historia reciente de Chile. El evento tuvo un impacto formativo en sus percepciones sobre justicia social, institucionalidad y agencia colectiva, diferenciándolos de la Gen Z de países que no experimentaron eventos de esa magnitud en su período formativo.

- **Pandemia COVID-19 (2020-2021).** La cohorte perdió entre 1 y 2 años de presencialidad escolar durante una etapa crítica de su desarrollo académico y social. Los efectos de esta pérdida en el rendimiento académico han sido documentados por el SIMCE 2022, que mostró caídas significativas en lectura y matemáticas respecto a mediciones pre-pandemia.

- **Transición PSU → PAES (2022).** Esta cohorte es la primera generación que se prepara exclusivamente para la PAES, sin referencia directa a la experiencia PSU de generaciones anteriores. Esto reduce la utilidad del conocimiento transmitido por hermanos mayores y padres, y aumenta la dependencia de recursos digitales actualizados.

## 3.2 Acceso tecnológico

### 3.2.1 Penetración de smartphones

Según datos de la Subsecretaría de Telecomunicaciones (SUBTEL, 2023), Chile alcanzó una penetración de telefonía móvil de 136 líneas por cada 100 habitantes, con más del 80% correspondiente a smartphones. En la franja etaria de 15 a 18 años, la penetración efectiva de smartphones supera el 85%, considerando tanto líneas propias como acceso regular al dispositivo de un familiar.

La distribución por sistema operativo refleja la estructura socioeconómica del país: aproximadamente 75% Android y 25% iOS, con una concentración de iOS en los quintiles de ingreso más altos. Para el GSE bajo y medio-bajo, la penetración de Android supera el 90%, con predominancia de dispositivos de gama media-baja (Samsung Galaxy A-series, Xiaomi Redmi, Motorola Moto G). Esta distribución impone restricciones de diseño: Renddi debe optimizarse para dispositivos con 3-4 GB de RAM, procesadores de gama media y pantallas de 6.0 a 6.7 pulgadas con resolución HD+ (1600×720).

### 3.2.2 Conectividad

La Encuesta Nacional de Acceso y Uso de Internet (SUBTEL) reporta que el 87% de los hogares chilenos tiene acceso a internet, pero la calidad y estabilidad de la conexión varían significativamente entre zonas urbanas y rurales. La cobertura 4G alcanza aproximadamente al 90% de la población, pero la velocidad efectiva promedio en redes móviles es de 25-35 Mbps en zonas urbanas y 10-15 Mbps en zonas rurales.

Para el diseño de Renddi, la implicancia clave es que una proporción significativa de usuarios accederá exclusivamente por datos móviles, con planes limitados (típicamente 5-15 GB mensuales en planes prepago del segmento objetivo). Esto impone tres requisitos: (a) sesiones que consuman menos de 5 MB de datos; (b) capacidad de descarga anticipada de contenido vía WiFi; (c) funcionalidad offline completa para sesiones de práctica.

### 3.2.3 Brecha digital por GSE

La brecha digital en Chile no es binaria (acceso/no acceso) sino multidimensional. El Índice de Desarrollo Digital (IDD) del Centro de Estudios Digitales de la Fundación País Digital distingue entre acceso, uso y apropiación. Los adolescentes del quintil de ingreso más bajo tienen acceso a smartphones, pero con limitaciones en: (a) calidad del dispositivo (pantalla más pequeña, menor capacidad de procesamiento); (b) volumen de datos disponible; (c) espacio compartido que dificulta el estudio concentrado; y (d) menor exposición a usos productivos de la tecnología.

Para Renddi, la brecha digital se traduce en la necesidad de un diseño que funcione óptimamente en las peores condiciones, no en las mejores. Un diseño que requiere conexión permanente, consume datos abundantes o demanda hardware de gama alta excluye precisamente a los estudiantes que más se beneficiarían del sistema.

## 3.3 Patrones de uso digital

### 3.3.1 Plataformas dominantes

Los patrones de consumo digital de la Gen Z chilena están dominados por cinco plataformas que definen sus expectativas de interacción:

**TikTok.** Plataforma dominante en la cohorte, con un tiempo promedio de uso diario estimado en 90-120 minutos según reportes de la industria. TikTok ha establecido estándares de interacción que los adolescentes trasladan a cualquier otra aplicación: (a) formato vertical nativo; (b) contenido de duración breve (15-60 segundos por unidad); (c) navegación por scroll vertical infinito; (d) algoritmo de recomendación que genera sensación de personalización extrema; (e) estética visual dinámica con transiciones rápidas.

**Instagram.** Predominantemente usado en formato Stories (contenido efímero de 24 horas) y Reels (competidor directo de TikTok). La función Stories ha normalizado el formato de contenido secuencial breve que se consume tocando la pantalla para avanzar --- un patrón de interacción directamente aplicable al diseño de sesiones de estudio en Renddi.

**YouTube.** Plataforma de referencia para contenido educativo. Los adolescentes chilenos recurren a YouTube para resolver dudas académicas específicas, con preferencia por canales que explican conceptos en menos de 10 minutos con apoyo visual. Este comportamiento documenta una preferencia por micro-learning que Renddi debe replicar.

**WhatsApp.** Canal de comunicación primario para coordinación social y académica. Los grupos de WhatsApp de curso funcionan como red de apoyo informal donde se comparten tareas, resuelven dudas y coordinan actividades. La variable `social_support` (v₁₇) del grafo se materializa predominantemente a través de esta plataforma.

**Spotify.** Relevante no por su funcionalidad sino por su modelo de personalización: la experiencia de "Spotify te conoce y te recomienda música que te gusta" ha establecido la expectativa de que las aplicaciones deben adaptarse al usuario, no al revés. Renddi debe cumplir esta expectativa de personalización para no percibirse como genérica.

### 3.3.2 Formato y modalidad preferida

Los patrones de consumo de la Gen Z chilena revelan preferencias consistentes que deben informar el diseño:

- **Video > Texto.** La preferencia por contenido audiovisual sobre textual es robusta y consistente con los hallazgos de Seemiller y Grace (2016). Sin embargo, esta preferencia tiene matices: el video es preferido para explicaciones conceptuales, mientras que la práctica interactiva (resolver problemas, responder preguntas) es preferida sobre el video pasivo.

- **Vertical > Horizontal.** La orientación vertical es el estándar de facto. Rotar el dispositivo a horizontal se percibe como una acción intencional reservada para contenido premium (películas, juegos). Renddi debe funcionar íntegramente en orientación vertical.

- **Interactivo > Pasivo.** La tolerancia al contenido puramente receptivo (leer, escuchar, mirar) es baja. Los adolescentes esperan poder interactuar con el contenido: tocar, deslizar, seleccionar, arrastrar. El diseño de Renddi debe minimizar el tiempo de consumo pasivo y maximizar la interacción activa.

- **Micro-learning: contenido < 10 minutos.** La unidad de contenido óptima para la cohorte es de 5 a 10 minutos. Sesiones más largas requieren justificación explícita y señales de progreso frecuentes. Las sesiones de Renddi de 15 minutos están en el límite superior; la segmentación interna en bloques de 3-5 minutos es necesaria para mantener el engagement.

### 3.3.3 Horarios de uso

Los datos de uso de aplicaciones educativas y redes sociales en Chile (reportados por empresas de analytics y corroborados por la literatura sobre cronotipo adolescente de Kelley, Lockley, Foster y Kelley, 2015) muestran dos ventanas de uso predominantes:

- **Peak primario: 20:00 a 23:00.** Corresponde al período post-cena, cuando el adolescente tiene tiempo libre y acceso privado a su smartphone. Es la ventana óptima para sesiones de estudio en Renddi, coincidiendo con el desplazamiento circadiano que produce alerta cognitiva tardía en adolescentes.

- **Peak secundario: 13:00 a 15:00.** Corresponde al período post-almuerzo en horarios escolares de jornada completa, o al tiempo libre tras clases en jornadas parciales. Es una ventana apta para sesiones breves de repaso o flashcards.

- **Valle: 07:00 a 08:00 y 23:00 a 01:00.** Las notificaciones en estos horarios son contraproducentes: a las 07:00 porque el cronotipo adolescente genera irritabilidad matinal; después de las 23:00 porque interfieren con el sueño y degradan `sleep_quality` (v₁₃).

## 3.4 Valores y actitudes de la Gen Z chilena

### 3.4.1 Autenticidad

La Gen Z rechaza la comunicación corporativa pulida y prefiere tonos auténticos, imperfectos y directos. Para Renddi, esto significa que los mensajes de los agentes de coaching deben sonar como un par mayor que ayuda, no como un sistema automatizado que instruye. La autenticidad se expresa en: (a) lenguaje coloquial sin ser infantil; (b) reconocimiento honesto de la dificultad ("Esto es difícil, normal que cueste"); (c) humor contextual cuando es apropiado; (d) evitación del tono motivacional genérico tipo LinkedIn.

### 3.4.2 Diversidad y salud mental

La Gen Z chilena muestra mayor apertura que generaciones anteriores hacia la diversidad (de género, orientación sexual, neurodivergencia) y hacia la conversación sobre salud mental. La normalización de la ansiedad, el estrés y la depresión como temas legítimos de conversación permite que Renddi aborde estos temas directamente a través del agente KAZE sin que sean percibidos como intrusivos o estigmatizantes.

### 3.4.3 Propósito e impacto social

Seemiller y Grace (2016) documentaron que la Gen Z valora el propósito sobre el estatus. Para Renddi, esto implica que la motivación no puede construirse exclusivamente sobre "sacar buen puntaje para entrar a una buena universidad". La narrativa debe incluir: ¿para qué sirve lo que estoy aprendiendo? ¿Cómo se conecta con algo que me importa? El agente COMPASS, al vincular preparación PAES con exploración vocacional, atiende directamente esta necesidad de propósito.

### 3.4.4 Pragmatismo y utilidad inmediata

La relación de la Gen Z con la educación es pragmática: valoran el aprendizaje que tiene utilidad percibida inmediata y cuestionan el que no la tiene. "¿Para qué me sirve esto?" no es una pregunta retórica sino una demanda legítima de justificación. Renddi debe responderla constantemente: cada contenido debe estar contextualizado en su relevancia para la PAES ("Este tipo de pregunta apareció 4 veces en la PAES 2024") y, cuando es posible, en su relevancia para la vida real o la carrera vocacional del estudiante.

## 3.5 Lenguaje y comunicación

### 3.5.1 Registro lingüístico

El español chileno de la Gen Z presenta características distintivas que deben informar el tono de comunicación de Renddi:

- **Informalidad como norma.** El tuteo es universal entre pares. El ustedeo se reserva para contextos formales. Los agentes de Renddi deben tutear al estudiante para no percibirse como distantes o autoritarios.

- **Chilenismos contextuales.** El uso calibrado de expresiones coloquiales chilenas ("bacán", "fome", "cachar") genera sensación de cercanía sin caer en artificialidad. El exceso de chilenismos produce el efecto inverso: parece un adulto intentando hablar como joven.

- **Referencias culturales.** Memes, referencias a series, música y cultura digital compartida funcionan como señales de pertenencia al grupo generacional. Renddi puede incorporar referencias culturales en momentos de baja carga cognitiva (mensajes de bienvenida, celebraciones de logros, pantallas de descanso) sin contaminar el contenido académico.

### 3.5.2 Lo que NO funciona

- Tono paternalista o condescendiente.
- Motivacionalismo genérico ("¡Tú puedes!", "¡Nunca te rindas!") sin sustancia.
- Jerga académica o psicométrica no contextualizada.
- Emojis excesivos que trivializan el contenido.
- Traducciones literales del inglés en patrones de interfaz.

## 3.6 Comparación Gen Z Chile vs. Gen Z global

| Dimensión | Gen Z global | Gen Z Chile (específico) |
|-----------|-------------|-------------------------|
| Dispositivo primario | Smartphone | Smartphone (Android 75%+, gama media-baja) |
| Conectividad | Predomina WiFi/5G | 4G predominante, planes de datos limitados |
| Plataforma dominante | TikTok/Instagram | TikTok/Instagram + WhatsApp como hub social |
| Horario de uso peak | Variable | 20:00-23:00 (desplazamiento circadiano + cena familiar) |
| Relación con educación | Pragmática | Pragmática + mediada por PAES como puerta única |
| Salud mental | Conversación abierta | Conversación abierta + impacto estallido social y pandemia |
| Brecha digital | Por ingreso | Por ingreso + urbano/rural + dependencia escolar |
| Lenguaje | Informal, memes | Informal, chilenismos, cultura de "copucheo" digital |
| Presión académica | Variable por país | Alta y concentrada (PAES como filtro único) |
| Expectativa de personalización | Alta | Alta + baja tolerancia a contenido "gringo" no adaptado |

---

# Capítulo 4. Arquetipos de Usuario

## 4.1 Metodología de construcción

### 4.1.1 Fundamentos

Los diez arquetipos definidos en este capítulo se construyen como extensión UX de los 10 perfiles del Capítulo 7 de la tesis principal, adaptándolos para el diseño de experiencia de usuario. Cada arquetipo se define por:

1. **Valores en las 21 variables del grafo causal**, expresados como alto (≥ 0.65), medio (0.35-0.64) o bajo (< 0.35), para facilitar la comprensión de diseñadores sin formación en modelamiento cuantitativo.
2. **Journey map** desde la descarga hasta el uso regular, identificando los momentos críticos donde el diseño puede capturar o perder al usuario.
3. **Pain points** principales que la UX debe resolver o mitigar.
4. **Motivadores y triggers** que la UX debe activar.
5. **Diseño de experiencia personalizado** con decisiones concretas de interfaz, tono y funcionalidades.
6. **Riesgo de abandono y estrategia de retención** específica.

### 4.1.2 Criterios de selección

Los diez arquetipos fueron seleccionados para cubrir la diversidad de la población PAES según tres ejes: (a) nivel de mastery académico (alto, medio, bajo); (b) perfil emocional-conductual dominante (ansioso, resiliente, presionado, gamer, deportista, neurodivergente, tardío, social, quemado); y (c) riesgo de abandono de la plataforma (bajo, medio, alto). Los nombres propios asignados corresponden a los nombres más frecuentes en registros civiles chilenos para la cohorte 2005-2009. Los dos arquetipos adicionales (Tomás "El Social" y Martina "La Quemada") se incorporan desde la tesis principal (Capítulo 7, Sección 7.2) para completar la cobertura del espacio de perfiles.

---

## 4.2 Arquetipo 1: La Aplicada (Valentina)

### 4.2.1 Descripción

Estudiante de alto rendimiento con hábitos de estudio consolidados, baja ansiedad y alta motivación intrínseca. Rinde en un colegio particular subvencionado o pagado, tiene claridad vocacional (medicina, derecho, ingeniería) y usa Renddi como herramienta de optimización, no de rescate.

### 4.2.2 Valores típicos en las 21 variables

| Variable | Nivel | Variable | Nivel |
|----------|-------|----------|-------|
| mastery | Alto (0.78) | study_adherence | Alto (0.88) |
| attention_span | Alto (0.80) | time_management | Alto (0.78) |
| metacognition | Alto (0.70) | sleep_quality | Alto (0.72) |
| cognitive_load | Bajo (0.32) | screen_time | Bajo (0.25) |
| anxiety | Bajo (0.25) | fatigue | Bajo (0.22) |
| confidence | Alto (0.75) | physical_activity | Medio (0.55) |
| emotional_state | Alto (0.75) | social_support | Medio (0.68) |
| self_efficacy | Alto (0.80) | parental_support | Alto (0.72) |
| frustration_tolerance | Alto (0.72) | vocational_clarity | Alto (0.82) |
| stress_level | Bajo (0.25) | motivation | Alto (0.82) |
| growth_mindset | Medio (0.68) | | |

### 4.2.3 Journey map

1. **Descubrimiento.** Valentina descubre Renddi por recomendación de una compañera o por un anuncio en Instagram. Busca una herramienta que complemente su preparación actual (preuniversitario o estudio autónomo).
2. **Descarga e instalación.** Descarga sin fricciones. Espera que la app sea seria y profesional, no infantil.
3. **Primera Misión (diagnóstico).** Completa el diagnóstico sin dificultad. Se frustra levemente si las preguntas iniciales son demasiado fáciles. Quiere ser evaluada en su nivel real, no recibir contenido básico.
4. **Primera semana.** Explora las funcionalidades, evalúa la calidad del contenido. Compara mentalmente con otros recursos que usa. Decisión clave: ¿este contenido me aporta algo que no tengo?
5. **Mes 1.** Si el contenido es lo suficientemente desafiante y los ensayos simulados se sienten realistas, integra Renddi en su rutina diaria. Usa principalmente SENPAI (práctica adaptativa) y DOJO (ensayos).
6. **Uso regular.** Sesiones de 15-20 minutos diarios. Revisa su progreso semanalmente. Valora las estadísticas detalladas y las predicciones de puntaje.

### 4.2.4 Pain points

- **Contenido demasiado fácil.** Si el algoritmo no calibra rápidamente su nivel alto, percibe la app como inútil.
- **Meseta de rendimiento.** Ya está en un nivel alto; los incrementos marginales son pequeños y difíciles de percibir, lo que reduce la sensación de progreso.
- **Falta de contenido avanzado.** Si el banco de ítems no tiene suficientes preguntas de dificultad alta (percentil 90+), agota el contenido disponible.
- **Gamificación infantil.** Rechaza elementos de gamificación que percibe como condescendientes (animaciones excesivas, personajes caricaturescos, celebraciones por logros triviales).

### 4.2.5 Motivadores y triggers

- **Motivador dominante:** Esperanza (acceder a la carrera deseada en la universidad deseada).
- **Trigger primario:** Predicción de puntaje PAES ("Hoy estás en 835, tu meta es 870 para Medicina UC").
- **Trigger secundario:** Desafíos de ítems de alta dificultad ("Solo el 12% de los estudiantes resuelve correctamente este problema").
- **Horario óptimo de prompt:** 20:00-21:00 (después de cenar, inicio de bloque de estudio vespertino).

### 4.2.6 Diseño de experiencia personalizado

- **Tono:** Profesional, directo, orientado a datos. Evitar exceso de motivacionalismo. "Tu tasa de acierto en cálculo subió de 72% a 78% esta semana" es más efectivo que "¡Increíble progreso!".
- **Interfaz:** Dashboard analítico prominente con gráficos de progreso por KC, predicción de puntaje con intervalo de confianza, y comparación con su rendimiento histórico (no con otros usuarios).
- **Contenido:** Priorizar ítems de alta dificultad (percentil 80+). Ofrecer explicaciones detalladas con fundamentos teóricos, no solo resoluciones paso a paso.
- **Agentes priorizados:** SENPAI (optimización de KCs residuales), DOJO (ensayos simulados realistas), COMPASS (confirmación de meta vocacional).
- **Gamificación:** Minimalista. Racha como indicador de consistencia, no como presión. XP vinculados a dificultad resuelta. Sin animaciones celebratorias excesivas.

### 4.2.7 Riesgo de abandono y estrategia de retención

- **Riesgo:** Bajo-medio. El riesgo no es abandono por desmotivación sino por percepción de valor insuficiente ("ya no me aporta nada nuevo").
- **Estrategia de retención:** (a) Contenido de dificultad creciente que no se agote rápidamente. (b) Ensayos simulados con condiciones reales (tiempo, formato, presión) que solo Renddi ofrece. (c) Estadísticas predictivas que conecten esfuerzo diario con puntaje esperado. (d) Feature premium de análisis de debilidades específicas por KC.

---

## 4.3 Arquetipo 2: El Ansioso (Matías)

### 4.3.1 Descripción

Estudiante con potencial académico real pero cuyo rendimiento está crónicamente deprimido por ansiedad evaluativa alta y autoconfianza baja. Sabe más de lo que demuestra en evaluaciones formales. Estudia en un colegio particular subvencionado, con presión familiar moderada por acceder a una buena universidad.

### 4.3.2 Valores típicos en las 21 variables

| Variable | Nivel | Variable | Nivel |
|----------|-------|----------|-------|
| mastery | Medio (0.58) | study_adherence | Medio (0.62) |
| attention_span | Medio (0.52) | time_management | Medio (0.52) |
| metacognition | Medio (0.52) | sleep_quality | Medio (0.48) |
| cognitive_load | Medio (0.58) | screen_time | Medio (0.42) |
| anxiety | Alto (0.68) | fatigue | Medio (0.52) |
| confidence | Bajo (0.38) | physical_activity | Bajo (0.38) |
| emotional_state | Medio (0.42) | social_support | Medio (0.52) |
| self_efficacy | Medio (0.42) | parental_support | Medio (0.58) |
| frustration_tolerance | Bajo (0.38) | vocational_clarity | Medio (0.48) |
| stress_level | Alto (0.62) | motivation | Medio (0.52) |
| growth_mindset | Medio (0.48) | | |

### 4.3.3 Journey map

1. **Descubrimiento.** Matías busca activamente herramientas de preparación PAES porque siente que su estudio actual no es suficiente. Busca en Google Play "app PAES" o lo descubre por un video de TikTok.
2. **Descarga e instalación.** Descarga con expectativa mezclada: espera que ayude pero teme que confirme que está peor de lo que cree.
3. **Primera Misión (diagnóstico).** Momento crítico. Si el diagnóstico se siente como un examen más, la ansiedad se activa y contamina los resultados. La "Primera Misión" gamificada es especialmente importante para este perfil: debe sentirse como exploración, no como evaluación.
4. **Primera semana.** Hipersensible al feedback negativo. Si los primeros resultados muestran un nivel bajo, puede interpretar como confirmación de su incapacidad ("sabía que era malo para esto"). Necesita feedback calibrado que muestre fortalezas antes que debilidades.
5. **Mes 1.** Si la experiencia de las primeras sesiones fue positiva (logros accesibles, tono empático, ausencia de comparaciones sociales amenazantes), desarrolla una relación de confianza con la app. Comienza a notar que puede resolver cosas que creía no poder.
6. **Uso regular.** Sesiones de 10-15 minutos con frecuencia moderada (4-5 días por semana). Usa KAZE (coaching emocional) con frecuencia. Evita los ensayos simulados completos porque le generan ansiedad anticipatoria.

### 4.3.4 Pain points

- **Feedback negativo no calibrado.** Un resultado bajo en rojo brillante con una "X" grande activa la cascada ansiedad → parálisis → evitación → abandono.
- **Comparaciones sociales.** Leaderboards globales, mensajes del tipo "tus compañeros están avanzando más rápido", cualquier señal de que está quedando atrás.
- **Simulacros de presión.** Ensayos con temporizador visible y cuenta regresiva generan la misma ansiedad que la prueba real, sin el beneficio de desensibilización gradual.
- **Inconsistencia entre dominio y rendimiento.** Frustra no poder demostrar lo que sabe cuando la ansiedad interfiere.

### 4.3.5 Motivadores y triggers

- **Motivador dominante:** Miedo (no quedar fuera) + esperanza latente (demostrar su capacidad real).
- **Trigger primario:** Evidencia de progreso personal sin comparación con otros ("La semana pasada resolvías 6 de 10 en funciones; hoy resolviste 8 de 10").
- **Trigger secundario:** Mensajes de normalización de KAZE ("La ansiedad ante exámenes es normal y tiene solución. Vamos a trabajarla juntos").
- **Horario óptimo de prompt:** 20:30-21:30 (momento de relajación, evitar horarios cercanos a evaluaciones).

### 4.3.6 Diseño de experiencia personalizado

- **Tono:** Empático, cálido, normalizador. Nunca comparativo. "Te fue bien en proporciones --- eso demuestra que cuando bajas la ansiedad, tu nivel real aparece" es más efectivo que "Mejoraste un 15%".
- **Interfaz:** Paleta de colores suaves (evitar rojos intensos para errores; usar tonos cálidos para señalar áreas de mejora). Progreso mostrado como gráfico ascendente de tendencia, no como porcentaje puntual que fluctúa.
- **Feedback de errores:** Reformulado como oportunidad. "Esta la erraste --- vamos a ver por qué y la próxima la sacas" en lugar de "Incorrecto ✗". Ofrecer la explicación antes de mostrar si la respuesta fue correcta o incorrecta cuando la ansiedad detectada es alta.
- **Ensayos simulados:** Introducir gradualmente. Primero mini-ensayos de 5 preguntas sin temporizador. Luego 10 preguntas con temporizador relajado. Luego ensayos completos con opción de pausar. Desensibilización sistemática aplicada al formato evaluativo.
- **Agentes priorizados:** KAZE (reducción de ansiedad mediante técnicas de respiración, reencuadre cognitivo, anxiety reappraisal según Brooks, 2014), SENPAI (con calibración que genera tasa de éxito del 70%+ para construir confianza).
- **Gamificación:** Rachas con escudos de protección generosos. XP por consistencia, no solo por precisión. Celebraciones sutiles pero frecuentes. Sin leaderboards visibles por defecto.

### 4.3.7 Riesgo de abandono y estrategia de retención

- **Riesgo:** Alto. La parálisis por ansiedad puede producir evitación de la app como mecanismo de defensa ("si no practico, no me entero de que estoy mal").
- **Estrategia de retención:** (a) Notificaciones con tono de invitación, nunca de presión ("¿Tienes 3 minutos? Preparé algo que se te va a dar bien"). (b) Sesiones mínimas de 3 preguntas que mantienen la racha sin generar ansiedad. (c) KAZE como primer contacto cuando regresa tras ausencia ("Oye, bienvenido de vuelta. Sin presión, empecemos suave"). (d) Evidencia acumulada de progreso visible al abrir la app después de una pausa.

---

## 4.4 Arquetipo 3: La Resiliente (Camila)

### 4.4.1 Descripción

Estudiante de mastery medio proveniente de un establecimiento municipal, primera generación en aspirar a la universidad. Condiciones adversas (bajo apoyo parental, bajo apoyo social, recursos limitados) compensadas por alta tolerancia a la frustración y growth mindset alto. El déficit está en hábitos y soporte, no en capacidad ni actitud.

### 4.4.2 Valores típicos en las 21 variables

| Variable | Nivel | Variable | Nivel |
|----------|-------|----------|-------|
| mastery | Medio (0.52) | study_adherence | Medio (0.52) |
| attention_span | Medio (0.48) | time_management | Medio (0.42) |
| metacognition | Medio (0.42) | sleep_quality | Medio (0.42) |
| cognitive_load | Medio (0.55) | screen_time | Medio (0.48) |
| anxiety | Medio (0.42) | fatigue | Medio (0.55) |
| confidence | Medio (0.52) | physical_activity | Bajo (0.32) |
| emotional_state | Medio (0.48) | social_support | Bajo (0.38) |
| self_efficacy | Medio (0.52) | parental_support | Bajo (0.32) |
| frustration_tolerance | Alto (0.68) | vocational_clarity | Bajo (0.38) |
| stress_level | Medio (0.52) | motivation | Medio (0.48) |
| growth_mindset | Medio (0.62) | | |

### 4.4.3 Journey map

1. **Descubrimiento.** Camila descubre Renddi a través de una campaña en redes sociales, un profesor que la recomienda, o una compañera. Investiga si es gratis antes de descargar.
2. **Descarga e instalación.** Preocupación por espacio en el teléfono (dispositivo de gama baja con almacenamiento limitado). Si la app pesa más de 100 MB, puede descartarla.
3. **Primera Misión (diagnóstico).** Completa el diagnóstico con interés genuino. No tiene miedo del resultado porque su expectativa ya es baja. Se sorprende positivamente si el sistema identifica fortalezas que ella no reconocía.
4. **Primera semana.** Evalúa si el contenido es accesible (no requiere conocimientos previos que no tiene), si funciona con datos móviles limitados, y si puede usarla en bloques cortos entre otras responsabilidades (muchas veces tiene que ayudar en casa).
5. **Mes 1.** Si la experiencia es accesible y empieza a notar mejoras pequeñas, Renddi se convierte en su principal (posiblemente único) recurso de preparación PAES. La relación con COMPASS (exploración vocacional) puede ser transformadora: nadie le ha preguntado qué quiere estudiar.
6. **Uso regular.** Sesiones de 10-15 minutos, 5-6 días por semana. Usa KAIZEN (hábitos), NAKAMA (red de apoyo social), COMPASS (claridad vocacional).

### 4.4.4 Pain points

- **Brecha de contenido previo.** Si el diagnóstico inicial detecta mastery bajo en contenidos que son prerrequisito, necesita una ruta de nivelación que no la haga sentir "atrasada".
- **Falta de red de apoyo.** No tiene compañeros que usen la app ni familia que entienda la PAES. Se siente sola en el proceso.
- **Limitaciones de dispositivo y datos.** Sesiones que consumen muchos datos o que requieren conexión permanente la excluyen.
- **Falta de claridad vocacional.** No sabe qué estudiar, lo que debilita la motivación sostenida. "¿Para qué me esfuerzo si no sé qué quiero?"

### 4.4.5 Motivadores y triggers

- **Motivador dominante:** Propósito (ser la primera de su familia en ir a la universidad) + aceptación social (demostrar que puede).
- **Trigger primario:** Progreso visible desde un punto de partida claro ("Cuando empezaste, tu nivel en matemáticas era 42%. Hoy estás en 56%. En un mes subiste 14 puntos").
- **Trigger secundario:** Conexión social ("Hay 3 estudiantes de tu zona que también están preparándose. ¿Quieres unirte a un grupo de estudio?").
- **Horario óptimo de prompt:** 21:00-22:00 (después de terminar tareas domésticas).

### 4.4.6 Diseño de experiencia personalizado

- **Tono:** Cercano, esperanzador, respetuoso de su contexto sin ser paternalista. "Llevas 3 semanas seguidas. Eso es disciplina real" es más efectivo que "¡Sigue así campeona!".
- **Interfaz:** Optimizada para dispositivos de gama baja. Sin animaciones pesadas. Modo offline prominente. Indicador de consumo de datos. Descarga anticipada de sesiones vía WiFi.
- **Contenido:** Ruta de nivelación que no se etiquete como "nivel básico" sino como "fundamentos clave". Explicaciones desde cero cuando sea necesario, sin asumir conocimientos previos.
- **Agentes priorizados:** KAIZEN (construcción de hábitos de estudio desde cero), NAKAMA (conexión con pares en situación similar), COMPASS (exploración vocacional guiada que le muestre opciones que no conocía).
- **Gamificación:** Rachas con celebración genuina ("7 días seguidos --- eso te pone en el 30% más constante de Renddi"). Progreso endowado: el diagnóstico inicial ya le da un punto de partida no nulo. Micro-metas diarias alcanzables.

### 4.4.7 Riesgo de abandono y estrategia de retención

- **Riesgo:** Medio. El riesgo es que las condiciones externas (presiones familiares, falta de tiempo, desconexión) venzan a la resiliencia interna.
- **Estrategia de retención:** (a) Sesiones mínimas de 2-3 minutos que se adapten a su disponibilidad variable. (b) NAKAMA como red de apoyo que compense el bajo `social_support` (v₁₇) y `parental_support` (v₁₈). (c) COMPASS activado tempranamente para construir motivación vocacional. (d) Notificaciones que reconozcan su esfuerzo sin presionar ("Llevas 12 días. Tu constancia es tu ventaja").

---

## 4.5 Arquetipo 4: El Gamer (Benjamín)

### 4.5.1 Descripción

Estudiante con baja adherencia al estudio y alta motivación extrínseca, cuyo tiempo libre está dominado por videojuegos y pantallas recreativas. No tiene déficit de capacidad cognitiva sino de infraestructura conductual: screen time extremo destruye sueño, que destruye atención, que destruye aprendizaje. Alta tolerancia a la frustración (entrenada por gaming).

### 4.5.2 Valores típicos en las 21 variables

| Variable | Nivel | Variable | Nivel |
|----------|-------|----------|-------|
| mastery | Medio (0.42) | study_adherence | Bajo (0.22) |
| attention_span | Bajo (0.32) | time_management | Bajo (0.18) |
| metacognition | Bajo (0.28) | sleep_quality | Bajo (0.28) |
| cognitive_load | Medio (0.62) | screen_time | Alto (0.88) |
| anxiety | Bajo (0.32) | fatigue | Alto (0.68) |
| confidence | Medio (0.48) | physical_activity | Bajo (0.18) |
| emotional_state | Medio (0.52) | social_support | Medio (0.58) |
| self_efficacy | Bajo (0.38) | parental_support | Medio (0.48) |
| frustration_tolerance | Medio (0.58) | vocational_clarity | Bajo (0.28) |
| stress_level | Bajo (0.35) | motivation | Bajo (0.32) |
| growth_mindset | Medio (0.52) | | |

### 4.5.3 Journey map

1. **Descubrimiento.** Benjamín no busca una app de estudio. Descubre Renddi por un anuncio que usa lenguaje de gaming, por un streamer que la menciona, o porque un amigo le dice "es como un juego pero para la PAES".
2. **Descarga e instalación.** Descarga por curiosidad, no por convicción. La retención en los primeros 3 minutos es crítica: si la app se siente como "colegio en el celular", la cierra y no vuelve.
3. **Primera Misión (diagnóstico).** La gamificación del diagnóstico es esencial para este perfil. Si la "Primera Misión" tiene narrativa, progresión, recompensas y se siente como el tutorial de un juego, Benjamín la completa. Si se siente como un test escolar, la abandona.
4. **Primera semana.** Evalúa si la app es entretenida, no si es educativa. Si los elementos de gamificación son suficientes para generar engagement (XP, rachas, desafíos, competencia con amigos), continúa. Si no, desinstala.
5. **Mes 1.** Si sigue usando la app, comienza a notar que está aprendiendo sin proponérselo (efecto Duolingo). La conexión gaming-carreras por COMPASS ("¿Sabías que puedes estudiar desarrollo de videojuegos?") puede ser un punto de inflexión motivacional.
6. **Uso regular.** Sesiones cortas (5-10 minutos) pero frecuentes (múltiples veces al día si el loop de engagement funciona). Compite con amigos en leaderboards.

### 4.5.4 Pain points

- **Aburrimiento.** Cualquier experiencia que se sienta como "estudiar" en el sentido tradicional genera rechazo inmediato.
- **Sesiones largas.** Su atención está entrenada para estímulos de alta frecuencia (gaming) y se degrada rápidamente con contenido menos estimulante.
- **Falta de recompensa inmediata.** El aprendizaje tiene recompensa diferida (mejora en PAES meses después). Necesita recompensas inmediatas que simulen el loop dopaminérgico del gaming.
- **Ausencia de competencia social.** Sin elemento competitivo, la app carece de la tensión que lo mantiene engaged en juegos.

### 4.5.5 Motivadores y triggers

- **Motivador dominante:** Competencia social (superar a amigos, ranking) + aceptación social (no quedar como "el que no estudia").
- **Trigger primario:** Desafíos de amigos ("Tomás te superó en el desafío de geometría. ¿Respondes?").
- **Trigger secundario:** Recompensas desbloqueables que conecten con su identidad gamer (skins, temas visuales, títulos).
- **Horario óptimo de prompt:** 16:00-18:00 (antes de su sesión de gaming nocturna) y 22:00 (transición gaming → sueño, donde una sesión breve de Renddi puede sustituir 10 minutos de gaming).

### 4.5.6 Diseño de experiencia personalizado

- **Tono:** Competitivo, directo, con referencias a cultura gamer cuando sea natural. "Nivel desbloqueado" en lugar de "Tema completado". "Boss fight" para ensayos simulados difíciles.
- **Interfaz:** Estética que no contradiga la identidad gamer. Modo oscuro por defecto. Animaciones fluidas. Feedback haptico. Transiciones rápidas. Cero tiempos de espera.
- **Contenido:** Bloques ultra-cortos de 3-5 preguntas. Formato quiz rápido con temporizador que genera adrenalina (no ansiedad, porque su baseline de ansiedad es bajo). Ítems presentados como "retos" con dificultad progresiva.
- **Agentes priorizados:** KAIZEN (screen curfew, mejora de sueño), COMPASS (conexión gaming-carreras TI: programación, diseño de juegos, esports management, animación digital), DOJO (ensayos gamificados).
- **Gamificación:** Máxima. Leaderboards con amigos, desafíos 1v1, torneos semanales, sistema de ligas (bronce-plata-oro-diamante), rewards visuales desbloqueables. La gamificación ES la experiencia para este perfil.
- **Intervención conductual:** KAIZEN introduce gradualmente el concepto de screen curfew ("Desafío nocturno: si cierras pantallas a las 23:00 por 5 días, desbloqueas el tema Neon"). El objetivo es mejorar `sleep_quality` (v₁₃), que mejora `attention_span` (v₂), que mejora `mastery` (v₁).

### 4.5.7 Riesgo de abandono y estrategia de retención

- **Riesgo:** Alto. La motivación es predominantemente extrínseca y la competencia con juegos por su atención es directa.
- **Estrategia de retención:** (a) Loop de engagement competitivo: desafíos diarios, ranking semanal, torneos mensuales. (b) Onboarding social: invitar amigos y formar equipos. (c) Contenido renovado frecuentemente para evitar la fatiga. (d) Integración con identidad gamer vía COMPASS. (e) Notificaciones gamificadas ("Tu rival avanzó. ¿Vas a dejarlo?").

---

## 4.6 Arquetipo 5: La Presionada (Isidora)

### 4.6.1 Descripción

Estudiante de rendimiento alto con perfil emocionalmente frágil. El mastery es real pero está sostenido por presión externa (parental y autoimpuesta), no por bienestar. Alta ansiedad, alto estrés, mala calidad de sueño, fatiga crónica. El riesgo es el quiebre: burnout académico que produce colapso de rendimiento.

### 4.6.2 Valores típicos en las 21 variables

| Variable | Nivel | Variable | Nivel |
|----------|-------|----------|-------|
| mastery | Alto (0.68) | study_adherence | Alto (0.72) |
| attention_span | Medio (0.58) | time_management | Alto (0.68) |
| metacognition | Medio (0.58) | sleep_quality | Bajo (0.38) |
| cognitive_load | Medio (0.58) | screen_time | Bajo (0.28) |
| anxiety | Alto (0.72) | fatigue | Alto (0.68) |
| confidence | Medio (0.42) | physical_activity | Bajo (0.28) |
| emotional_state | Bajo (0.32) | social_support | Medio (0.42) |
| self_efficacy | Medio (0.48) | parental_support | Bajo (0.28) |
| frustration_tolerance | Bajo (0.32) | vocational_clarity | Medio (0.52) |
| stress_level | Alto (0.78) | motivation | Medio (0.62) |
| growth_mindset | Bajo (0.38) | | |

**Nota sobre `parental_support`.** El valor bajo (0.28) no indica ausencia de involucramiento parental sino presión excesiva. Levpušček y Zupančič (2009) documentaron que la presión parental excesiva correlaciona positivamente con ansiedad evaluativa (r = 0.35). El apoyo parental medido aquí es apoyo genuino versus presión percibida.

### 4.6.3 Journey map

1. **Descubrimiento.** Isidora descubre Renddi porque está buscando obsesivamente cualquier recurso que la ayude a subir su puntaje. Probablemente ya usa otros recursos (preuniversitario, videos de YouTube, PDTs anteriores).
2. **Descarga e instalación.** Descarga inmediatamente. Su actitud es "más herramientas = mejor preparación", sin evaluar si una herramienta adicional la beneficia o la sobrecarga.
3. **Primera Misión (diagnóstico).** Se angustia si el resultado del diagnóstico es menor al esperado. Puede interpretar un resultado de "nivel alto" como insuficiente ("alto no es suficiente, necesito excelente").
4. **Primera semana.** Usa la app intensivamente (sesiones de 30+ minutos, múltiples veces al día). Este patrón es una señal de alerta, no un indicador positivo: indica sobreestudio que degrada `sleep_quality` y eleva `fatigue`.
5. **Mes 1.** Si KAZE no interviene para moderar el uso, Isidora entra en espiral descendente: más estudio → menos sueño → más fatiga → menor rendimiento → más ansiedad → más estudio. MIYAGI debe activar protocolo de protección.
6. **Uso regular (con intervención).** Si el sistema logra moderar su uso a sesiones de 15 minutos con descansos obligatorios, e introduce técnicas de manejo de estrés vía KAZE, el perfil se estabiliza.

### 4.6.4 Pain points

- **Nunca es suficiente.** Cualquier resultado que no sea perfecto genera frustración. Un 85% de acierto se siente como fracaso.
- **Comparación ascendente.** Se compara con quienes rinden mejor, nunca con quienes rinden peor.
- **Presión parental.** Padres que preguntan diariamente "¿cuánto estudiaste?" sin preguntar "¿cómo estás?".
- **Culpa por descansar.** Percibe el descanso como tiempo perdido, lo que impide la recuperación.
- **Somatización.** Dolores de cabeza, problemas gastrointestinales, insomnio derivados del estrés crónico.

### 4.6.5 Motivadores y triggers

- **Motivador dominante:** Miedo (al fracaso, a decepcionar a sus padres, a no entrar a la carrera).
- **Trigger primario:** No se debe activar con triggers de productividad (generan más presión). El trigger debe ser de bienestar: "Llevas 25 minutos. Tu cerebro necesita un descanso para consolidar lo que aprendiste" (justificación científica que ella, perfeccionista, puede aceptar).
- **Trigger secundario:** Normalización por KAZE ("El estrés que sientes es normal y tiene nombre: se llama presión evaluativa. No significa que algo esté mal contigo").
- **Horario óptimo de prompt:** 19:00-20:00 (antes de que entre en espiral de estudio nocturno).

### 4.6.6 Diseño de experiencia personalizado

- **Tono:** Protector sin ser condescendiente. Científico cuando justifica descansos ("La consolidación de memoria requiere sueño de ondas lentas, Walker, 2017"). Firme cuando sugiere parar.
- **Interfaz:** Límite de uso diario configurable con recordatorio suave cuando se excede. Dashboard que incluya indicadores de bienestar junto a indicadores de rendimiento. Progreso mostrado como tendencia de largo plazo, no fluctuaciones diarias que generan ansiedad.
- **Contenido:** Sesiones con duración limitada. Después de 20 minutos continuos, MIYAGI sugiere pausa con ejercicio de respiración de KAZE. Bloques de contenido que no permitan scroll infinito.
- **Agentes priorizados:** KAZE (urgente: reducción de estrés y ansiedad, técnicas de respiración, reestructuración cognitiva), KAIZEN (mejora de sueño, introducción de actividad física como regulador de estrés).
- **Gamificación:** Mínima y orientada a bienestar, no a productividad. "Logro: completaste tu rutina de relajación 3 días seguidos". Sin leaderboards. Sin presión por XP. Racha que premia consistencia moderada (una sesión de 15 min cuenta igual que tres sesiones de 15 min).

### 4.6.7 Riesgo de abandono y estrategia de retención

- **Riesgo:** Medio-alto, pero por razones inversas a otros perfiles. El riesgo no es que use poco la app sino que la use demasiado y que el sistema no prevenga el burnout, perdiendo credibilidad cuando Isidora colapse.
- **Estrategia de retención:** (a) Posicionar Renddi como aliado de su bienestar, no como fuente de presión adicional. (b) Mostrar evidencia de que estudiar menos pero mejor produce mejores resultados. (c) KAZE como agente de confianza que la cuida. (d) Funcionalidad de "modo protegido" que limite sesiones cuando detecta patrones de sobreuso.

---

## 4.7 Arquetipo 6: El Deportista (Diego)

### 4.7.1 Descripción

Estudiante emocionalmente saludable cuya vida gira en torno a la actividad física (fútbol, atletismo, natación). Su alto `physical_activity` protege `emotional_state` y `sleep_quality`, pero la baja gestión del tiempo y la falta de motivación vocacional académica producen baja adherencia al estudio. No le falta capacidad sino dirección y hábito de estudio.

### 4.7.2 Valores típicos en las 21 variables

| Variable | Nivel | Variable | Nivel |
|----------|-------|----------|-------|
| mastery | Bajo (0.32) | study_adherence | Bajo (0.38) |
| attention_span | Medio (0.48) | time_management | Bajo (0.32) |
| metacognition | Bajo (0.28) | sleep_quality | Medio (0.62) |
| cognitive_load | Medio (0.55) | screen_time | Bajo (0.32) |
| anxiety | Bajo (0.32) | fatigue | Bajo (0.28) |
| confidence | Medio (0.58) | physical_activity | Alto (0.92) |
| emotional_state | Medio (0.62) | social_support | Alto (0.68) |
| self_efficacy | Medio (0.52) | parental_support | Medio (0.52) |
| frustration_tolerance | Medio (0.62) | vocational_clarity | Bajo (0.32) |
| stress_level | Bajo (0.28) | motivation | Bajo (0.38) |
| growth_mindset | Medio (0.48) | | |

### 4.7.3 Journey map

1. **Descubrimiento.** Diego probablemente no busca una app PAES por iniciativa propia. Descubre Renddi porque un entrenador la recomienda, un amigo la usa, o sus padres insisten.
2. **Descarga e instalación.** Descarga sin resistencia pero sin entusiasmo. "Si es rápido, dale."
3. **Primera Misión (diagnóstico).** Completa el diagnóstico si es breve. Se aburre si toma más de 10 minutos. No le angustia un resultado bajo --- lo espera.
4. **Primera semana.** La ventana de uso es mínima: entre entrenamientos, clases y vida social. Si Renddi no se adapta a sus horarios fragmentados, simplemente no la usa.
5. **Mes 1.** Si COMPASS logra conectar su pasión deportiva con una carrera (kinesiología, educación física, ingeniería deportiva, nutrición deportiva), la motivación se activa. Sin esta conexión, la app es "una más de las cosas que tengo que hacer pero no quiero".
6. **Uso regular.** Sesiones ultra-cortas (5-8 minutos) en ventanas específicas: en el bus al entrenamiento, en el camarín antes de la práctica, después de almorzar. Frecuencia: 3-4 días por semana si está motivado.

### 4.7.4 Pain points

- **Falta de tiempo.** Agenda dominada por entrenamiento y competencias. El estudio compite por tiempo que no tiene.
- **Contenido no contextualizado.** "¿Para qué necesito saber esto?" es una pregunta constante que la app debe responder.
- **Sesiones largas.** Cualquier sesión mayor a 10 minutos es percibida como un robo de tiempo que podría dedicar al deporte.
- **Desconexión entre mundo deportivo y mundo académico.** Siente que son mundos separados y que la PAES no tiene relevancia para su futuro deportivo.

### 4.7.5 Motivadores y triggers

- **Motivador dominante:** Aceptación social (padres, entrenador) + propósito si se activa la conexión deporte-carrera.
- **Trigger primario:** COMPASS: "¿Sabías que para Kinesiología en la Chile necesitas 650 puntos? Hoy estás en 455. Vamos a cerrar esa brecha".
- **Trigger secundario:** Analogía deportiva: "El estudio es como el entrenamiento: 15 minutos todos los días ganan al maratón de un día".
- **Horario óptimo de prompt:** 13:00-14:00 (después de almorzar, antes del entrenamiento) o 20:00-20:30 (breve ventana post-cena antes de acostarse temprano).

### 4.7.6 Diseño de experiencia personalizado

- **Tono:** Directo y motivacional en clave deportiva. Metáforas de entrenamiento. "Sesión de hoy: 5 reps de matemáticas. Vamos." No intelectualizar el proceso.
- **Interfaz:** Ultra-simple. Una pantalla, una acción. Sin menús complejos. Botón grande de "Empezar sesión" que lleve directo al contenido. Indicador de tiempo restante prominente ("3 minutos más").
- **Contenido:** Sesiones de 5 minutos máximo por defecto. Bloques de 3-5 preguntas. Explicaciones breves y visuales. Contenido contextualizado en deporte cuando sea posible ("Si un corredor mejora su marca un 8%, de 12 minutos en 3 km, ¿cuál es su nuevo tiempo?").
- **Agentes priorizados:** COMPASS (conexión deporte-carrera: kinesiología, educación física, ciencias del deporte, nutrición, entrenamiento deportivo), KAIZEN (integración del estudio en la rutina deportiva existente, micro-hábitos de 5 minutos).
- **Gamificación:** Moderada. Metáfora de entrenamiento: "Día de piernas" para matemáticas, "Día de brazos" para lenguaje. Logros deportivos: "Completaste tu semana de entrenamiento académico". Competencia con compañeros de equipo deportivo.

### 4.7.7 Riesgo de abandono y estrategia de retención

- **Riesgo:** Alto. La competencia por tiempo con el deporte es directa y el deporte siempre gana si no hay motivación vocacional.
- **Estrategia de retención:** (a) Sesiones tan cortas que no compitan con el entrenamiento (3-5 minutos). (b) COMPASS activado en la primera semana para construir motivación vocacional. (c) Integración con rutina deportiva ("Sesión de estudio en el bus al entrenamiento"). (d) Involucrar al entrenador como aliado (si el entrenador valida la app, Diego la respeta).

---

## 4.8 Arquetipo 7: TDAH (Francisca)

### 4.8.1 Descripción

Estudiante con trastorno por déficit de atención con hiperactividad, diagnosticada o sin diagnosticar. Attention span estructuralmente bajo, time management colapsado, metacognición deficitaria. Sin embargo, cuando el contenido la captura, muestra capacidad de hiperfoco. El déficit no es de inteligencia sino de función ejecutiva (Barkley, 1997).

### 4.8.2 Valores típicos en las 21 variables

| Variable | Nivel | Variable | Nivel |
|----------|-------|----------|-------|
| mastery | Bajo (0.28) | study_adherence | Bajo (0.28) |
| attention_span | Bajo (0.22) | time_management | Bajo (0.18) |
| metacognition | Bajo (0.22) | sleep_quality | Bajo (0.38) |
| cognitive_load | Alto (0.72) | screen_time | Alto (0.68) |
| anxiety | Medio (0.52) | fatigue | Alto (0.62) |
| confidence | Bajo (0.32) | physical_activity | Bajo (0.22) |
| emotional_state | Bajo (0.38) | social_support | Medio (0.42) |
| self_efficacy | Bajo (0.28) | parental_support | Medio (0.52) |
| frustration_tolerance | Bajo (0.28) | vocational_clarity | Bajo (0.22) |
| stress_level | Medio (0.55) | motivation | Bajo (0.32) |
| growth_mindset | Medio (0.42) | | |

### 4.8.3 Journey map

1. **Descubrimiento.** Francisca descubre Renddi por impulso (anuncio que capta su atención, recomendación casual) y la descarga inmediatamente (impulsividad como rasgo TDAH).
2. **Descarga e instalación.** Si la app tarda más de 5 segundos en cargar después de la instalación, la cierra y se olvida de que la descargó.
3. **Primera Misión (diagnóstico).** Comienza con entusiasmo (novedad = dopamina) pero puede abandonar a mitad si el diagnóstico es demasiado largo o monótono. La Primera Misión debe tener variedad visual, cambios de ritmo y duración máxima de 6-7 minutos para este perfil.
4. **Primera semana.** Usa la app de forma irregular: días de uso intenso intercalados con días de olvido completo. La notificación de recordatorio puede funcionar como trigger efectivo si es novedosa, pero pierde efecto si se repite idénticamente.
5. **Mes 1.** La retención de Francisca depende de que la app se adapte a su patrón cognitivo, no al revés. Si las sesiones son cortas, variadas y ofrecen novedad constante, puede construir un hábito irregular pero funcional.
6. **Uso regular.** Sesiones de 3-7 minutos, frecuencia variable (2-6 días por semana). Patrón irregular que el sistema debe aceptar y optimizar, no intentar corregir a un patrón regular.

### 4.8.4 Pain points

- **Sesiones largas e uniformes.** Cualquier sesión mayor a 8 minutos sin cambio de formato produce desconexión atencional.
- **Instrucciones complejas.** Textos largos de explicación que requieren lectura sostenida son inaccesibles.
- **Falta de estructura externa.** Sin recordatorios externos, la app simplemente no existe en su campo atencional.
- **Frustración acumulada.** Años de "no prestas atención", "eres floja", "si te esforzaras más" han erosionado su `self_efficacy` (v₈) y `confidence` (v₆).
- **Sobrecarga de opciones.** Demasiadas opciones de menú producen parálisis por análisis.

### 4.8.5 Motivadores y triggers

- **Motivador dominante:** Novedad (la dopamina de lo nuevo) + competencia (cuando algo captura su atención, quiere dominarlo).
- **Trigger primario:** Notificaciones variadas (nunca el mismo texto dos veces) con contenido intrigante ("Pregunta trampa del día: el 87% la responde mal. ¿Tú?").
- **Trigger secundario:** Sesiones ultra-cortas que no requieren decisión ("1 minuto. 3 preguntas. ¿Dale?").
- **Horario óptimo de prompt:** Variable --- el TDAH altera los ritmos circadianos. Optimizar mediante machine learning sobre sus patrones de respuesta reales, no sobre horarios estándar.

### 4.8.6 Diseño de experiencia personalizado

- **Tono:** Energético, breve, variado. Oraciones cortas. Cambios de ritmo. Humor. "Pregunta flash: ¿cuánto es log₂(8)? Tienes 10 segundos. Go."
- **Interfaz:** Minimalista extrema. Una pregunta por pantalla. Sin distracciones visuales. Transiciones rápidas. Colores de alto contraste para mantener la atención. Botón único prominente. Cero scrolling. Timer visual que muestre cuánto falta (reduce ansiedad temporal).
- **Contenido:** Micro-sesiones de 2-5 minutos. Variedad de formato dentro de la sesión (multiple choice, arrastrar y soltar, completar, verdadero/falso). Cambio de modalidad cada 3-4 preguntas para renovar atención. Explicaciones en formato visual/esquemático, no textual.
- **Agentes priorizados:** KOAN (estrategias metacognitivas compensatorias: preguntas de auto-monitoreo pre/post sesión, "¿Qué aprendiste hoy en una frase?"), KAIZEN (micro-hábitos de 2-3 minutos), SENPAI (con dificultad calibrada para producir éxitos frecuentes que construyan `self_efficacy`).
- **Gamificación:** Alta pero con recompensas variables (no predecibles). Sistema de "cajas sorpresa" donde la recompensa cambia. Logros inesperados ("Acabas de responder 5 seguidas bien --- no lo esperabas, ¿verdad?"). Rachas con tolerancia a días perdidos (la racha se mantiene con 4 de 7 días, no con 7 de 7).
- **Accesibilidad TDAH:** Timer configurable. Opción de pausar sin perder progreso. Recordatorios de medicación si el usuario lo activa. Modo "hiperfoco" que bloquea notificaciones de otras apps durante la sesión (si el OS lo permite).

### 4.8.7 Riesgo de abandono y estrategia de retención

- **Riesgo:** Muy alto. El TDAH produce inconsistencia como característica, no como falla. La retención debe diseñarse para patrones irregulares.
- **Estrategia de retención:** (a) Aceptar la irregularidad: la racha se mantiene con 3-4 sesiones semanales, no diarias. (b) Re-engagement creativo: notificaciones que sorprendan, contenido que cambie semanalmente. (c) Sesiones tan cortas que la barrera de inicio sea nula ("1 minuto. ¿Sí o no?"). (d) KOAN como herramienta metacognitiva que enseñe a Francisca a usar sus ventanas de atención, no a ampliarlas artificialmente.

---

## 4.9 Arquetipo 10: El Tardío (Joaquín)

### 4.9.1 Descripción

Estudiante con baja motivación inicial y potencial latente no activado. Mastery, adherencia y motivación en niveles mínimos. No tiene ansiedad alta (porque no le importa lo suficiente todavía) ni frustración particular (porque no lo intenta). El desafío no es reducir barreras emocionales sino activar motivación donde no existe.

### 4.9.2 Valores típicos en las 21 variables

| Variable | Nivel | Variable | Nivel |
|----------|-------|----------|-------|
| mastery | Bajo (0.22) | study_adherence | Bajo (0.18) |
| attention_span | Bajo (0.32) | time_management | Bajo (0.12) |
| metacognition | Bajo (0.18) | sleep_quality | Bajo (0.38) |
| cognitive_load | Medio (0.58) | screen_time | Medio (0.62) |
| anxiety | Medio (0.42) | fatigue | Medio (0.52) |
| confidence | Bajo (0.28) | physical_activity | Bajo (0.28) |
| emotional_state | Bajo (0.38) | social_support | Bajo (0.32) |
| self_efficacy | Bajo (0.22) | parental_support | Bajo (0.28) |
| frustration_tolerance | Bajo (0.38) | vocational_clarity | Bajo (0.12) |
| stress_level | Medio (0.45) | motivation | Bajo (0.22) |
| growth_mindset | Alto (0.78) | | |

### 4.9.3 Journey map

1. **Descubrimiento.** Joaquín descubre Renddi tarde (a meses de la PAES, no a un año). Probablemente por presión externa (padres, profesores, la inminencia de la prueba). También puede haber un evento catalizador: un amigo que recibió resultados de ensayo y le generó conciencia del problema.
2. **Descarga e instalación.** Descarga por presión, no por convicción. La primera impresión debe ser "esto no es tan terrible como esperaba" --- la barra debe estar baja.
3. **Primera Misión (diagnóstico).** Momento delicado. El resultado será bajo y Joaquín ya lo sabe. La clave es que el sistema no se limite a confirmar lo que él teme sino que muestre un camino: "Tu punto de partida es este. En 8 semanas, si practicas 10 minutos al día, puedes llegar hasta acá".
4. **Primera semana.** La probabilidad de abandono en la primera semana es altísima. Sin motivación intrínseca ni extrínseca activada, cualquier fricción produce deserción. Las primeras 3 sesiones deben ser experiencias de éxito obligatorio: preguntas calibradas para que acierte al menos 60%, feedback que celebre el primer paso.
5. **Mes 1.** Si sobrevive la primera semana, la inercia comienza a trabajar a favor. COMPASS es el agente clave: si logra conectar a Joaquín con una carrera o proyecto que le importe, la motivación se activa como combustible sostenible.
6. **Uso regular.** Sesiones mínimas (5-8 minutos) con frecuencia baja al inicio (3 días por semana) que se incrementa gradualmente. Cada semana que pasa sin abandonar es un logro que el sistema debe reconocer.

### 4.9.4 Pain points

- **Sensación de que es demasiado tarde.** "Ya no vale la pena, me queda muy poco tiempo". El sistema debe contrarrestar activamente esta narrativa con evidencia de progreso posible.
- **Vergüenza por el nivel bajo.** Si la app revela cuánto no sabe de forma agresiva, confirma su narrativa de fracaso y refuerza la evitación.
- **Ausencia de propósito.** No sabe qué quiere estudiar ni por qué debería esforzarse. Sin `vocational_clarity` (v₁₉), la motivación carece de combustible.
- **Entorno poco estimulante.** Bajo apoyo parental, bajo apoyo social, sin red que lo impulse.
- **Historial de fracaso académico.** Años de malos resultados han construido una identidad de "no soy bueno para estudiar" que se autoconfirma.

### 4.9.5 Motivadores y triggers

- **Motivador dominante:** Debe construirse. No hay motivador preexistente fuerte. COMPASS debe encontrar una chispa: un interés, una curiosidad, una carrera que no conocía, un futuro que le haga sentido.
- **Trigger primario:** Evidencia de capacidad latente. "Esa pregunta que acabas de responder bien la erraban el 60% de los estudiantes. Tu nivel no es tan bajo como crees".
- **Trigger secundario:** Conexión social. Si un amigo o grupo lo espera en la app, la presión social positiva funciona como trigger externo.
- **Horario óptimo de prompt:** 20:00-21:00 (horario estándar nocturno), pero sin insistencia si no responde --- la presión genera rechazo.

### 4.9.6 Diseño de experiencia personalizado

- **Tono:** Casual, sin juicio, sin presión. "Oye, ¿tienes 3 minutos? Hay algo que quiero mostrarte" es más efectivo que "Es hora de tu sesión de estudio". Nunca usar tono recriminatorio ni urgente.
- **Interfaz:** Extremadamente simple. Cero complejidad. Un botón para empezar, preguntas claras, feedback inmediato, fin de sesión rápido. Sin menús profundos, sin configuraciones complejas, sin dashboards con métricas que evidencien lo lejos que está de un buen puntaje.
- **Contenido:** Ruta de nivelación acelerada que priorice los KCs de mayor rendimiento (los que más puntaje PAES aportan por hora de estudio invertida). Explicaciones desde cero. Dificultad calibrada para producir tasa de éxito del 60-70% (umbral que construye confianza sin generar aburrimiento).
- **Agentes priorizados:** COMPASS (urgente: encontrar propósito vocacional), IKIGAI (activación motivacional, encontrar una razón para esforzarse), KAIZEN (construcción de micro-hábito mínimo: 3 preguntas al día).
- **Gamificación:** Progresión con efecto endowado agresivo: el diagnóstico inicial le muestra que "ya sabe algo" (nunca empezar desde cero absoluto). Logros frecuentes por pequeños hitos. Rachas muy tolerantes (contar racha por semana, no por día: "Semana 2 completada --- vas mejor que la mayoría que empieza tarde").
- **Intervención de activación:** COMPASS debe ofrecer exploración vocacional en la primera semana, no después de meses. Preguntas como "¿Qué te gustaría hacer si pudieras elegir cualquier trabajo?" → "¿Sabías que para [carrera X] necesitas [puntaje Y]? Vamos a armar un plan".

### 4.9.7 Riesgo de abandono y estrategia de retención

- **Riesgo:** Muy alto. La combinación de baja motivación + bajo soporte social + bajo autoconcepto académico produce la mayor tasa de abandono de todos los arquetipos.
- **Estrategia de retención:** (a) Eliminar toda barrera de entrada: sesiones de 2-3 minutos, sin obligación, sin consecuencias por faltar. (b) Celebrar cada regreso: "Volviste. Eso ya te pone adelante del 40% que no vuelve". (c) COMPASS como gancho motivacional sostenido. (d) NAKAMA para construir red de apoyo que compense el bajo `social_support` y `parental_support`. (e) Nunca juzgar, nunca recriminar, nunca comparar con otros.

---

## 4.10 Arquetipo 8: El Social (Tomás)

### 4.10.1 Descripción

Estudiante con alto capital social y red de apoyo sólida, cuyo principal recurso — las relaciones — actualmente se canaliza hacia la socialización y no hacia el estudio. Tomás es popular en su curso, tiene buen estado emocional y bajo estrés, pero su adherencia al estudio y claridad vocacional son bajas. Estudia en un colegio municipal o particular subvencionado. No tiene problemas emocionales severos: su riesgo es la dispersión, no la angustia.

### 4.10.2 Valores típicos en las 21 variables

| Variable | Nivel | Variable | Nivel |
|----------|-------|----------|-------|
| mastery | Medio-Bajo (0.42) | study_adherence | Medio-Bajo (0.42) |
| attention_span | Medio-Bajo (0.42) | time_management | Bajo (0.38) |
| metacognition | Bajo (0.38) | sleep_quality | Medio (0.48) |
| cognitive_load | Medio (0.48) | screen_time | Medio (0.55) |
| anxiety | Bajo (0.32) | fatigue | Medio-Bajo (0.42) |
| confidence | Medio (0.52) | physical_activity | Medio-Bajo (0.42) |
| emotional_state | Alto (0.62) | social_support | Muy Alto (0.88) |
| self_efficacy | Medio (0.48) | parental_support | Medio (0.62) |
| frustration_tolerance | Medio (0.48) | vocational_clarity | Bajo (0.38) |
| stress_level | Bajo (0.28) | motivation | Medio (0.48) |
| growth_mindset | Medio (0.52) | | |

### 4.10.3 Journey map

1. **Descubrimiento.** Tomás descubre Renddi porque un amigo o compañero la usa, no por búsqueda propia. La recomendación social es el canal dominante. Si un grupo de amigos la adopta, Tomás la adopta.
2. **Descarga e instalación.** Descarga por impulso social. No investiga la app antes: si su grupo la usa, suficiente validación.
3. **Primera Misión (diagnóstico).** La completa si un amigo lo acompaña (estudio grupal) o si hay elementos sociales visibles (ranking entre amigos, desafíos). Si el diagnóstico se siente solitario y escolar, pierde interés rápidamente.
4. **Primera semana.** Usa la app cuando sus amigos la usan. Si el grupo se engancha, Tomás se engancha. Si el grupo abandona, Tomás abandona. El engagement es social antes que individual.
5. **Mes 1.** Si NAKAMA activa estudio grupal (desafíos entre amigos, grupos de práctica) y COMPASS conecta la PAES con algo que le importe, puede desarrollar motivación propia. Sin estos ganchos, el uso se diluye.
6. **Uso regular.** Sesiones vinculadas a la actividad de su grupo. Desafíos entre amigos y rankings dentro de su círculo son los principales drivers.

### 4.10.4 Pain points

- **Experiencia solitaria.** Si la app se siente como estudiar solo, pierde interés. Necesita presencia social constante.
- **Falta de propósito.** No tiene claridad vocacional: estudiar para la PAES se siente abstracto e irrelevante.
- **Baja metacognición.** No sabe cómo estudiar eficientemente; cuando lo intenta solo, los resultados son pobres, lo que refuerza la preferencia por socializar en vez de estudiar.
- **Desconexión entre habilidades sociales y académicas.** Su inteligencia social no se traduce automáticamente en rendimiento académico, y el sistema escolar no valora sus fortalezas.

### 4.10.5 Motivadores y triggers

- **Motivador dominante:** Pertenencia (hacer lo que el grupo hace, no quedarse atrás socialmente).
- **Trigger primario:** Actividad de amigos ("Martín completó el desafío de geometría. ¿Te sumas?").
- **Trigger secundario:** Estudio grupal disponible ("Tu grupo de estudio está activo ahora").
- **Horario óptimo de prompt:** 17:00-19:00 (post-colegio, cuando se reúne con amigos).

### 4.10.6 Diseño de experiencia personalizado

- **Tono:** Cercano, social, inclusivo. "Tu grupo completó 15 preguntas hoy. Tú vas en 8 — un quiz más y los alcanzas."
- **Interfaz:** Feed social prominente: actividad de amigos, desafíos grupales, rankings dentro del círculo. El progreso individual importa menos que el progreso relativo al grupo.
- **Contenido:** Desafíos colaborativos y competitivos entre amigos. Enseñar para aprender (protégé effect): Tomás puede "explicar" temas a amigos virtuales, lo que consolida su propio aprendizaje (Nestojko et al., 2014).
- **Agentes priorizados:** NAKAMA (canalizar capital social hacia estudio), COMPASS (exploración vocacional), KAIZEN (hábitos de estudio básicos).
- **Gamificación:** Centrada en lo social: tabla de posiciones entre amigos, desafíos grupales, logros compartidos. XP por ayudar a otros. Streaks de grupo además de individuales.

### 4.10.7 Riesgo de abandono y estrategia de retención

- **Riesgo:** Medio. El riesgo es condicional a la retención del grupo. Si sus amigos usan la app, Tomás la usa. Si abandonan, Tomás abandona.
- **Estrategia de retención:** (a) Maximizar features sociales: desafíos entre amigos, estudio grupal, rankings internos. (b) NAKAMA como agente de activación grupal. (c) COMPASS para construir motivación individual que sobreviva la dependencia del grupo. (d) Protégé effect: gamificar la explicación de temas a otros como forma de estudio. (e) Involucrar al grupo completo: la retención de Tomás depende de la retención de sus amigos.

---

## 4.11 Arquetipo 9: La Quemada (Martina)

### 4.11.1 Descripción

Estudiante que comenzó su preparación con alto rendimiento y dedicación, pero ha entrado en un estado de burnout activo. Martina estudia en un colegio particular subvencionado o pagado, tiene capacidad académica demostrada (mastery medio-alto), pero la fatiga extrema, el colapso emocional y la pérdida de motivación amenazan con destruir todo el progreso acumulado. Es la antítesis de Isidora: mientras Isidora está en camino al burnout, Martina ya llegó.

### 4.11.2 Valores típicos en las 21 variables

| Variable | Nivel | Variable | Nivel |
|----------|-------|----------|-------|
| mastery | Medio (0.58) | study_adherence | Medio (0.52) |
| attention_span | Bajo (0.38) | time_management | Medio (0.48) |
| metacognition | Medio (0.48) | sleep_quality | Muy Bajo (0.28) |
| cognitive_load | Alto (0.68) | screen_time | Bajo (0.38) |
| anxiety | Alto (0.62) | fatigue | Muy Alto (0.88) |
| confidence | Bajo (0.38) | physical_activity | Muy Bajo (0.12) |
| emotional_state | Crítico (0.18) | social_support | Bajo (0.32) |
| self_efficacy | Bajo (0.32) | parental_support | Medio-Bajo (0.42) |
| frustration_tolerance | Muy Bajo (0.22) | vocational_clarity | Medio (0.52) |
| stress_level | Alto (0.72) | motivation | Bajo (0.38) |
| growth_mindset | Bajo (0.28) | | |

### 4.11.3 Journey map

1. **Descubrimiento.** Martina descubrió Renddi meses atrás, cuando estaba en plena forma de preparación. Fue una usuaria activa y comprometida en sus primeras semanas.
2. **Descarga e instalación.** Ya pasó. El problema no es la adopción sino la permanencia.
3. **Primera Misión (diagnóstico).** Ya la completó. Probablemente obtuvo un resultado decente que ahora siente que no puede mantener, lo que genera frustración adicional.
4. **Estado actual.** Las sesiones se sienten como una obligación que drena. Cada vez estudia menos, rinde peor, y la brecha entre su rendimiento anterior y el actual genera una espiral de culpa y desesperanza. Puede tener pensamientos de "ya perdí" o "da lo mismo".
5. **Punto crítico.** Sin intervención, Martina abandona en 2-4 semanas. Con intervención adecuada (protocolo de pausa + recuperación), puede estabilizarse y recuperar parcialmente su rendimiento anterior.
6. **Recuperación (si ocurre).** El retorno es gradual: primero bienestar físico (sueño, movimiento), luego estabilidad emocional, y solo entonces retorno al estudio activo.

### 4.11.4 Pain points

- **Fatiga extrema.** El cansancio domina todo. No es flojera sino agotamiento genuino que impide concentrarse incluso cuando quiere.
- **Colapso emocional.** Emotional_state en 0.18 significa que cualquier estímulo negativo (pregunta difícil, resultado bajo) puede provocar una reacción desproporcionada (llanto, abandono de sesión, rabia).
- **Pérdida de identidad académica.** Martina se identificaba como "buena estudiante". El burnout destruye esa identidad, generando crisis de autoconcepto.
- **Aislamiento social.** Se ha aislado de su grupo para estudiar más, perdiendo la red de apoyo que necesita para recuperarse (social_support 0.32).
- **Culpa por descansar.** Siente que cada minuto sin estudiar es un minuto perdido, lo que impide la recuperación real.

### 4.11.5 Motivadores y triggers

- **Motivador dominante:** Supervivencia (no colapsar, mantener lo que queda, llegar a la PAES funcionando).
- **Trigger primario:** Permiso para descansar ("Hoy tu sesión es no tener sesión. Descansa.").
- **Trigger secundario:** Evidencia de que el progreso previo no se perdió ("Tu mastery en álgebra sigue en 0.65. Eso no se pierde por una semana de pausa.").
- **Horario óptimo de prompt:** 16:00-17:00 (antes de que la espiral vespertina de culpa comience). Nunca después de las 21:00.

### 4.11.6 Diseño de experiencia personalizado

- **Tono:** Protector, gentil, firme en la pausa. "Hoy no vamos a estudiar. Vamos a hacer una sesión de 3 minutos de respiración y listo. Mañana vemos."
- **Interfaz:** Modo de recuperación: ocultar métricas de rendimiento y comparaciones. Mostrar únicamente indicadores de bienestar (horas de sueño, días de descanso tomados, actividad física). Dashboard simplificado que no genere ansiedad.
- **Contenido:** Fase 1 (semanas 1-4): sin contenido académico agresivo. Micro-sesiones de 3-5 minutos con ítems fáciles para mantener el hábito sin agotarse. Fase 2 (semanas 5-8): retorno gradual con dificultad moderada. Fase 3 (semanas 9+): normalización progresiva.
- **Agentes priorizados:** MIYAGI (protocolo de pausa y protección), KAZE (estabilización emocional), KAIZEN (reconstrucción de sueño y actividad física).
- **Gamificación:** Desactivada o mínima. Las rachas NO deben presionar. Celebrar el descanso, no el esfuerzo.

### 4.11.7 Riesgo de abandono y estrategia de retención

- **Riesgo:** Alto. Pero a diferencia de otros perfiles de riesgo alto (Benjamín, Francisca, Joaquín), el riesgo de Martina es por colapso total, no por desinterés. Si la app la presiona, abandona. Si la app la protege, se queda.
- **Estrategia de retención:** (a) Protocolo de pausa inmediato: MIYAGI reduce carga al 50% en la primera semana, sin opción de override por la estudiante. (b) KAZE activa contención emocional diaria con templates del Grupo D. (c) KAIZEN prioriza sueño y actividad física sobre cualquier métrica académica. (d) Ocultar temporalmente predicciones de puntaje y rankings. (e) Celebrar la recuperación: "Dormiste 7 horas. Eso vale más que 100 preguntas". (f) Monitoreo de recaída: si fatigue vuelve a subir de 0.70 después de bajar, MIYAGI reactiva protocolo de pausa.

---

## 4.12 Matriz comparativa de arquetipos

### 4.12.1 Priorización de agentes por arquetipo

| Arquetipo | Agente 1 | Agente 2 | Agente 3 |
|-----------|----------|----------|----------|
| Valentina (Aplicada) | SENPAI | DOJO | COMPASS |
| Matías (Ansioso) | KAZE | SENPAI | KOAN |
| Camila (Resiliente) | KAIZEN | NAKAMA | COMPASS |
| Benjamín (Gamer) | KAIZEN | COMPASS | DOJO |
| Isidora (Presionada) | KAZE | KAIZEN | MIYAGI |
| Diego (Deportista) | COMPASS | KAIZEN | SENPAI |
| Francisca (TDAH) | KOAN | KAIZEN | SENPAI |
| Joaquín (Tardío) | COMPASS | IKIGAI | KAIZEN |
| Tomás (Social) | NAKAMA | COMPASS | KAIZEN |
| Martina (Quemada) | MIYAGI | KAZE | KAIZEN |

### 4.12.2 Parámetros de sesión por arquetipo

| Arquetipo | Duración óptima | Frecuencia objetivo | Dificultad target | Tasa éxito target |
|-----------|----------------|---------------------|-------------------|-------------------|
| Valentina | 15-20 min | 6-7 días/sem | Alta (P80+) | 65-75% |
| Matías | 10-15 min | 4-5 días/sem | Media-Alta | 70-80% |
| Camila | 10-15 min | 5-6 días/sem | Media | 65-75% |
| Benjamín | 5-10 min | 4-6 días/sem (varias/día) | Media | 60-70% |
| Isidora | 15 min (límite) | 5-6 días/sem | Media-Alta | 70-80% |
| Diego | 5-8 min | 3-4 días/sem | Media-Baja | 65-75% |
| Francisca | 3-7 min | 3-5 días/sem | Media | 60-70% |
| Joaquín | 5-8 min | 3 días/sem (inicio) | Baja-Media | 60-70% |
| Tomás | 8-12 min | 4-5 días/sem | Media | 65-75% |
| Martina | 3-5 min (recuperación) / 10-15 min (post-recuperación) | 3-4 días/sem (recuperación) / 5-6 días/sem (post) | Baja (recuperación) / Media (post) | 80-85% (recuperación) / 70-80% (post) |

### 4.12.3 Riesgo de abandono y variables críticas

| Arquetipo | Riesgo | Variable crítica | Estrategia central |
|-----------|--------|-----------------|-------------------|
| Valentina | Bajo-medio | Contenido avanzado disponible | Optimización continua |
| Matías | Alto | anxiety (v₅), confidence (v₆) | Reducir ansiedad, construir confianza |
| Camila | Medio | social_support (v₁₇), vocational_clarity (v₁₉) | Construir red y propósito |
| Benjamín | Alto | study_adherence (v₁₁), sleep_quality (v₁₃) | Gamificar engagement, mejorar sueño |
| Isidora | Medio-alto | stress_level (v₁₀), fatigue (v₁₅) | Proteger del burnout |
| Diego | Alto | motivation (v₂₀), vocational_clarity (v₁₉) | Conectar deporte con carrera |
| Francisca | Muy alto | attention_span (v₂), time_management (v₁₂) | Adaptar formato a TDAH |
| Joaquín | Muy alto | motivation (v₂₀), vocational_clarity (v₁₉) | Activar motivación latente |
| Tomás | Medio | social_support (v₁₇), vocational_clarity (v₁₉) | Canalizar capital social hacia estudio |
| Martina | Alto | fatigue (v₁₅), emotional_state (v₇) | Protocolo de pausa, prevenir colapso |

### 4.12.4 Tabla de mapeo cruzado: arquetipos x personas comunicacionales x sesiones TAKUMI

Esta tabla resuelve la brecha entre el perfilamiento de SHOKUNIN (10 arquetipos basados en 21 variables del grafo) y la estrategia comunicacional de KOTODAMA (3 personas: Catalina/data-driven, Tomás/empático, Martín/competitivo). El mapeo no es arbitrario: se deriva de las variables emocionales dominantes de cada arquetipo y la ruta de procesamiento persuasivo (ELM) que cada perfil usa predominantemente.

**Criterios de asignación de persona comunicacional:**
- **Catalina (data-driven):** Se asigna a arquetipos con emotional_state >= 0.60, anxiety <= 0.40, y motivación por progreso medible. Procesan por ruta central (ELM): responden a datos concretos, estadísticas y estrategia.
- **Tomás (empático):** Se asigna a arquetipos con emotional_state < 0.40, anxiety > 0.60, fatigue > 0.60, o frustration_tolerance < 0.30. Procesan por ruta periférica (ELM): necesitan validación emocional antes que datos.
- **Martín (competitivo):** Se asigna a arquetipos con baja ansiedad, perfil conductual (no emocional) como barrera principal, y que responden a desafíos y gamificación. Procesan por ruta periférica selectiva: responden a urgencia positiva (desafíos), no a datos ni empatía.

| Arquetipo | Persona KOTODAMA | Justificación | Agentes priorizados | Sesión TAKUMI | Riesgo abandono | Estrategia retención |
|-----------|-----------------|---------------|---------------------|---------------|-----------------|---------------------|
| Valentina (Aplicada) | **Catalina** | emotional_state alto (0.75), anxiety bajo (0.25), motivada por optimización y datos. Ruta central ELM. Los datos de progreso son su combustible. | SENPAI, DOJO, COMPASS | 15-20 min, 6-7 días/sem, dificultad alta, formato analítico | Bajo-medio | Contenido avanzado, predicciones de puntaje, estadísticas detalladas |
| Matías (Ansioso) | **Tomás** | anxiety alto (0.68), emotional_state bajo (0.42), confidence bajo (0.38). Ruta periférica ELM: los datos agravan su ansiedad ("solo el 30% acierta" lo paraliza). Necesita validación y calma antes que métricas. | KAZE, SENPAI, KOAN, DOJO | 10-15 min, 4-5 días/sem, dificultad media-alta, formato protegido | Alto | Reducir ansiedad, normalizar errores, celebrar constancia sin presión |
| Camila (Resiliente) | **Catalina** (transición a Tomás si social_support cae) | emotional_state medio (0.48), frustration_tolerance alto (0.68). Resiliente y pragmática: responde a datos de progreso concretos. Pero si su red social se debilita (social_support < 0.30), necesita contención empática temporal. | KAIZEN, NAKAMA, COMPASS, DOJO | 10-15 min, 5-6 días/sem, dificultad media, formato progresivo | Medio | Construir red social, conectar con propósito vocacional, mostrar progreso relativo |
| Benjamín (Gamer) | **Martín** | anxiety bajo (0.32), emotional_state medio (0.52), perfil conductual como barrera. Responde a desafíos, XP, competencia. Los datos lo aburren, la empatía la percibe como innecesaria. Quiere adrenalina y recompensa inmediata. | KAIZEN, COMPASS, DOJO | 5-10 min, 4-6 días/sem (varias/día), dificultad media, formato gamificado | Alto | Desafíos entre amigos, XP, narrativa de juego, achievements |
| Isidora (Presionada) | **Tomás** | anxiety altísimo (0.72), stress_level extremo (0.78), emotional_state bajo (0.32). La persona más frágil emocionalmente después de Martina. Los datos de rendimiento amplifican su presión. Necesita permiso para bajar la intensidad. | KAZE, KAIZEN, MIYAGI | 15 min (límite estricto), 5-6 días/sem, dificultad media-alta, formato con guardrails anti-burnout | Medio-alto | Proteger del burnout, limitar sesiones, celebrar descanso, moderar expectativas |
| Diego (Deportista) | **Martín** | anxiety bajo (0.32), emotional_state alto (0.62), perfil conductual como barrera. Su mentalidad deportiva responde a desafíos, competencia y metas concretas. El formato empático lo aburre; los datos puros le son indiferentes. Quiere "entrenar" para la PAES como entrena para su deporte. | COMPASS, KAIZEN, SENPAI, DOJO | 5-8 min, 3-4 días/sem, dificultad media-baja, formato deportivo | Alto | Conectar deporte con carrera, sesiones ultra-cortas, metáforas deportivas |
| Francisca (TDAH) | **Martín** (con adaptaciones de accesibilidad) | anxiety moderado (0.52), emotional_state medio (0.38). Necesita novedad constante y engagement inmediato, no datos extensos ni empatía prolongada. Los desafíos rápidos y variados se alinean con su necesidad de estimulación. Pero los mensajes deben ser ultra-breves y las metas alcanzables en minutos. | KOAN, KAIZEN, SENPAI, DOJO | 3-7 min, 3-5 días/sem, dificultad media, formato micro-sesión con alta variedad | Muy alto | Sesiones ultra-cortas, novedad constante, re-engagement creativo, aceptar irregularidad |
| Joaquín (Tardío) | **Tomás** (transición a Martín si motivation sube) | motivation bajísimo (0.22), self_efficacy bajo (0.22), pero growth_mindset alto (0.78). Necesita validación primero: está convencido de que "es tarde" y cada dato de rendimiento confirma lo que teme. Cuando la motivación suba (motivation > 0.50), puede migrar a Martín para activar su competitividad latente. | COMPASS, IKIGAI, KAIZEN | 5-8 min, 3 días/sem (inicio), dificultad baja-media, formato sin presión | Muy alto | Eliminar barreras, celebrar cada regreso, COMPASS como gancho, nunca comparar |
| Tomás (Social) | **Martín** | anxiety bajo (0.32), emotional_state alto (0.62), motivación social. Responde a desafíos entre amigos, competencia grupal y rankings. Los datos individuales le son indiferentes; la empatía no la necesita. Su engagement es social y competitivo. | NAKAMA, COMPASS, KAIZEN, DOJO | 8-12 min, 4-5 días/sem, dificultad media, formato social-competitivo | Medio | Features sociales, desafíos grupales, retención del grupo como prioridad |
| Martina (Quemada) | **Tomás** | emotional_state crítico (0.18), fatigue extrema (0.88), frustration_tolerance colapsada (0.22). Es el caso más urgente de contención empática. Cualquier dato de rendimiento o desafío competitivo la destruye. Necesita permiso absoluto para descansar, validación sin condiciones, y protección activa contra su propia tendencia a sobre-estudiar. | MIYAGI, KAZE, KAIZEN | 3-5 min (recuperación), 3-4 días/sem, dificultad baja, formato de contención | Alto | Protocolo de pausa, ocultar métricas, celebrar descanso, monitoreo de recaída |

**Nota sobre transiciones dinámicas:** La persona comunicacional no es fija. MIYAGI recalcula la asignación cada 2 semanas junto con la reclasificación arquetipal. Los casos más comunes de transición:
- Joaquín (Tomás → Martín): cuando motivation sube de 0.22 a > 0.50 por intervención de COMPASS.
- Camila (Catalina → Tomás): si social_support cae por debajo de 0.30 (evento externo como conflicto familiar).
- Martina (Tomás → Catalina): cuando fatigue baja de 0.88 a < 0.50 y emotional_state sube a > 0.50 (recuperación exitosa).
- Isidora (Tomás → Catalina): si las intervenciones de KAZE reducen anxiety por debajo de 0.45 y stress_level baja de 0.78 a < 0.50.

---

# SENSEI — Tesis SHOKUNIN: Capitulos 5, 6 y 7
## Diseno de Interfaz, Flujos de Usuario y Engagement

### Equipo SHOKUNIN — Especialistas en UX/UI y Engagement Digital
### Marzo 2026

---

# Capitulo 5. Diseno de Interfaz

## 5.1 Principios de diseno

El diseno de la interfaz de Renddi opera bajo cinco principios rectores que conectan cada decision visual con el grafo causal de 21 variables del modelo SENSEI:

1. **Reduccion de friccion cognitiva.** Cada pantalla minimiza la carga cognitiva extrinseca (Sweller, 2011), preservando recursos atencionales para el aprendizaje. Esto incide directamente en `cognitive_load` (v₄) y `attention_span` (v₂).

2. **Retroalimentacion emocional continua.** La interfaz actua como espejo del estado emocional del estudiante, adaptando su expresion visual para reforzar estados positivos y amortiguar estados negativos. Variables afectadas: `emotional_state` (v₇), `anxiety` (v₅), `self_efficacy` (v₈).

3. **Celebracion del progreso.** Cada avance, por pequeno que sea, se hace visible y se celebra. Esto refuerza `confidence` (v₆), `self_efficacy` (v₈) y `motivation` (v₂₀) a traves del ciclo mastery → self_efficacy → confidence → mastery documentado en la Seccion 4.5 de la tesis principal.

4. **Autonomia controlada.** El estudiante percibe control sobre su experiencia sin verse abrumado por opciones. Fundamentado en la Self-Determination Theory (Deci y Ryan, 2000), que establece la autonomia como necesidad psicologica basica para la motivacion intrinseca.

5. **Inclusion sin friccion.** La accesibilidad no es una capa adicional sino una propiedad emergente del diseno. WCAG 2.1 AA como piso, no como techo.

---

## 5.2 Design System Renddi

### 5.2.1 Paleta de colores

La seleccion cromatica responde a tres criterios: resonancia con la Gen Z chilena, funcionalidad comunicativa y cumplimiento de ratios de contraste WCAG 2.1 AA (minimo 4.5:1 para texto normal, 3:1 para texto grande).

**Colores primarios:**

| Token | Hex | Uso | Justificacion |
|-------|-----|-----|---------------|
| `primary-500` | #FF6B35 | Acciones principales, CTAs, acentos | Naranja energetico: activa sin agredir. Asociado a entusiasmo y creatividad (Elliot y Maier, 2014). Diferencia de competidores que usan azul (Duolingo: verde, Khan Academy: azul) |
| `primary-400` | #FF8C5E | Hover states, secondary emphasis | Variante clara para interacciones |
| `primary-600` | #E55A2B | Active/pressed states | Variante oscura para feedback tactil |
| `primary-100` | #FFF0EB | Backgrounds sutiles, badges | Tint para superficies |

**Colores secundarios:**

| Token | Hex | Uso | Justificacion |
|-------|-----|-----|---------------|
| `secondary-500` | #1E3A5F | Headers, texto importante, navegacion | Azul confianza: transmite seriedad academica sin frialdad corporativa. Contraste con el naranja primario crea tension visual productiva |
| `secondary-400` | #2A4F7A | Links, iconos activos | Variante accesible |
| `secondary-700` | #0F1E33 | Background modo oscuro | Profundidad sin negro puro |

**Colores semanticos:**

| Token | Hex | Uso | Conexion con grafo |
|-------|-----|-----|-------------------|
| `success-500` | #4CAF50 | Respuesta correcta, dominio alcanzado, progreso | Refuerza `mastery` (v₁), `confidence` (v₆) |
| `success-100` | #E8F5E9 | Background de exito | Celebracion sutil |
| `warning-500` | #FF9800 | Atencion requerida, item por vencer | Alerta sin alarma. Comunica urgencia moderada |
| `warning-100` | #FFF3E0 | Background de advertencia | Contexto visual |
| `error-500` | #F44336 | Respuesta incorrecta, error critico | Usado con moderacion para evitar incremento de `anxiety` (v₅) |
| `error-100` | #FFEBEE | Background de error | Suaviza el impacto emocional del error |

**Escala de neutros:**

| Token | Hex (Light) | Hex (Dark) | Uso |
|-------|-------------|------------|-----|
| `neutral-50` | #FAFAFA | #1A1A2E | Background principal |
| `neutral-100` | #F5F5F5 | #16213E | Background cards |
| `neutral-200` | #EEEEEE | #0F3460 | Bordes, separadores |
| `neutral-400` | #BDBDBD | #8E8E9A | Texto placeholder |
| `neutral-600` | #757575 | #B8B8C8 | Texto secundario |
| `neutral-800` | #424242 | #E4E4EC | Texto primario |
| `neutral-900` | #212121 | #F0F0F8 | Texto de maximo enfasis |

**Colores emocionales (uso del agente KAZE):**

| Estado emocional | Color accent | Aplicacion |
|-----------------|-------------|------------|
| Positivo alto | `#FFD54F` (ambar calido) | Animaciones de celebracion |
| Positivo moderado | `primary-500` (#FF6B35) | Estado estandar de la app |
| Neutro | `neutral-400` | Interfaz sin enfasis emocional |
| Bajo moderado | `#7E57C2` (lavanda) | Tonos calidos y contenedores |
| Bajo critico | `#5C6BC0` (indigo suave) | Modo simplificado, sin estimulos fuertes |

*Justificacion:* Los colores calidos para estados bajos se fundamentan en la cromoterapia basada en evidencia revisada por Kurt y Osueke (2014), quienes documentaron que los tonos calidos producen respuestas emocionales mas positivas que los tonos frios en contextos de estres moderado.

### 5.2.2 Tipografia

Se adopta **Inter** (Rasmus Andersson, 2020) como familia tipografica principal. Inter fue disenada especificamente para pantallas y ofrece:

- Amplio soporte de caracteres (incluye tildes y ene para espanol)
- x-height elevada para legibilidad en tamanios pequenos
- OpenType features para numeros tabulares (critico en dashboards de progreso)
- Licencia SIL Open Font (sin costo)
- Excelente rendimiento en variable font (reduce bundle size)

**Escala tipografica:**

| Token | Tamano | Line-height | Weight | Uso |
|-------|--------|-------------|--------|-----|
| `display-lg` | 32px / 2rem | 40px / 1.25 | 700 (Bold) | Titulos de pantalla, cifras heroicas |
| `display-sm` | 24px / 1.5rem | 32px / 1.33 | 700 (Bold) | Subtitulos de seccion |
| `heading` | 20px / 1.25rem | 28px / 1.4 | 600 (SemiBold) | Headers de cards, nombres de modulo |
| `body-lg` | 16px / 1rem | 24px / 1.5 | 400 (Regular) | Texto principal, instrucciones |
| `body-sm` | 14px / 0.875rem | 20px / 1.43 | 400 (Regular) | Texto secundario, metadata |
| `caption` | 12px / 0.75rem | 16px / 1.33 | 500 (Medium) | Labels, badges, timestamps |
| `overline` | 10px / 0.625rem | 14px / 1.4 | 600 (SemiBold) | Categorias, tags (MAYUSCULAS) |

*Conexion con grafo:* Una tipografia bien jerarquizada reduce `cognitive_load` (v₄) al facilitar el escaneo visual y establecer una jerarquia clara de informacion (Rello y Baeza-Yates, 2013).

### 5.2.3 Iconografia

Sistema de iconos outline con stroke de 1.5px, estilo friendly y redondeado. Se utiliza un set basado en Phosphor Icons (licencia MIT), seleccionado por:

- Estilo geometrico-amigable (no corporativo, no infantil)
- 6 pesos disponibles (thin, light, regular, bold, fill, duotone)
- Consistencia en grid de 24x24px
- Soporte SVG para colorizacion dinamica

**Principios de uso:**

1. **Un icono, un significado.** Sin ambiguedad. El icono de check siempre indica completado, nunca seleccion.
2. **Iconos acompanados de label** en acciones criticas. No confiar en iconografia sola para acciones irreversibles.
3. **Tamano minimo 20x20px** para visibilidad y area tactil.
4. **Color semantico coherente:** iconos de exito en `success-500`, error en `error-500`, informacion en `secondary-400`.

**Iconos emocionales personalizados:**

Para el check-in emocional (agente KAZE), se utiliza un set de 5 emojis personalizados en el estilo visual de Renddi, evitando los emojis del sistema operativo para mantener consistencia cross-platform:

| Estado | Emoji Renddi | Significado |
|--------|-------------|-------------|
| Muy bien | Sol sonriente | `emotional_state` > 0.8 |
| Bien | Estrella tranquila | `emotional_state` 0.6-0.8 |
| Regular | Nube pensativa | `emotional_state` 0.4-0.6 |
| Bajo | Gota de lluvia | `emotional_state` 0.2-0.4 |
| Mal | Tormenta suave | `emotional_state` < 0.2 |

### 5.2.4 Sistema de espaciado

Grid base de 4px con escala de 8px para componentes mayores:

| Token | Valor | Uso |
|-------|-------|-----|
| `space-1` | 4px | Separacion intra-componente minima |
| `space-2` | 8px | Padding interno compacto, gap entre iconos y texto |
| `space-3` | 12px | Padding interno estandar |
| `space-4` | 16px | Gap entre elementos relacionados |
| `space-5` | 20px | Padding de cards compactas |
| `space-6` | 24px | Padding de cards estandar |
| `space-8` | 32px | Separacion entre secciones |
| `space-10` | 40px | Margen de pantalla mobile |
| `space-12` | 48px | Separacion entre bloques principales |
| `space-16` | 64px | Margen superior de pantalla |

*Justificacion:* El sistema de 4px/8px es el estandar de la industria mobile (Google Material Design, Apple HIG) y produce ritmo visual consistente que reduce la carga cognitiva perceptual (Lidwell, Holden y Butler, 2010).

### 5.2.5 Border radius y sombras

**Border radius:**

| Token | Valor | Uso | Justificacion |
|-------|-------|-----|---------------|
| `radius-sm` | 8px | Inputs, badges, chips | Suavidad sin perder definicion |
| `radius-md` | 12px | Cards, modales | Amigable, no corporativo |
| `radius-lg` | 16px | Contenedores principales | Coherente con estetica Gen Z |
| `radius-xl` | 24px | Botones de accion, pills | Invita al toque |
| `radius-full` | 9999px | Avatares, indicadores circulares | Circulos perfectos |

*Justificacion:* Los border radius redondeados (>8px) producen respuestas afectivas mas positivas que las esquinas rectas, un efecto documentado por Bar y Neta (2006), quienes demostraron mediante fMRI que los objetos curvos activan preferencia sobre los angulares. En un contexto donde se busca reducir `anxiety` (v₅), las formas redondeadas contribuyen a una percepcion de seguridad y amabilidad.

**Sombras:**

| Token | Valor | Uso |
|-------|-------|-----|
| `shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) | Elevacion sutil (inputs) |
| `shadow-md` | 0 4px 6px rgba(0,0,0,0.07) | Cards en reposo |
| `shadow-lg` | 0 10px 15px rgba(0,0,0,0.10) | Cards elevadas, dropdowns |
| `shadow-xl` | 0 20px 25px rgba(0,0,0,0.15) | Modales, bottom sheets |

En modo oscuro, las sombras se reemplazan por bordes sutiles de 1px en `neutral-200` (dark), ya que las sombras son imperceptibles sobre fondos oscuros.

---

## 5.3 Responsividad mobile-first

### 5.3.1 Breakpoints

| Breakpoint | Ancho | Dispositivo referencia | Porcentaje de usuarios PAES estimado |
|-----------|-------|----------------------|-------------------------------------|
| `xs` | 375px | iPhone SE, Samsung A series | 25% — segmento bajo, dispositivos compactos |
| `sm` | 428px | iPhone 14/15, Xiaomi Redmi | 45% — segmento principal Gen Z Chile |
| `md` | 768px | Tablets, iPad Mini | 15% — uso secundario |
| `lg` | 1024px | iPad, laptops | 15% — estudio en escritorio |

*Estrategia mobile-first:* El 70% del uso estimado ocurre en dispositivos con ancho ≤428px. La interfaz se disena primero para `xs` (375px) y se expande progresivamente. Esto es consistente con datos de penetracion movil en Chile, donde el 97% de los jovenes de 15-29 anos accede a internet via smartphone (Subtel, 2024).

### 5.3.2 Layout adaptativo

**Mobile (375-428px):**
- Layout de una columna
- Navegacion inferior (tab bar) con 4 items: Inicio, Estudiar, Progreso, Perfil
- Cards full-width con padding horizontal de 16px
- Bottom sheets para acciones secundarias

**Tablet (768px):**
- Layout de dos columnas donde aplique (ej: lista de modulos + detalle)
- Navegacion lateral colapsable
- Cards en grid de 2 columnas

**Desktop (1024px+):**
- Layout de tres columnas: nav lateral + contenido + panel contextual
- Experiencia enriquecida con visualizaciones expandidas del grafo
- Ideal para la revision semanal (radar de 21 variables)

### 5.3.3 Safe areas y notch handling

- Respeto de `env(safe-area-inset-*)` para dispositivos con notch
- Tab bar inferior posicionado sobre `safe-area-inset-bottom`
- Contenido scrolleable nunca queda oculto tras elementos de navegacion fijos

---

## 5.4 Modo oscuro y claro

### 5.4.1 Estrategia de temas

**Modo oscuro como default.** Fundamentacion:

1. **Preferencia Gen Z:** La preferencia por modo oscuro es mayoritaria en la Gen Z segun encuestas de la industria (UXCam, 2023). En Chile, plataformas dominantes entre jovenes (TikTok, Instagram, Spotify) utilizan interfaces oscuras por defecto.

2. **Reduccion de fatiga visual:** Para sesiones de estudio de 12-20 minutos, un fondo oscuro reduce la emision de luz que impacta la produccion de melatonina (Hale y Guan, 2015), particularmente relevante dado que el 43% de los estudiantes chilenos estudia despues de las 21:00 (segun patrones de uso de preuniversitarios online). Esto conecta con `sleep_quality` (v₁₃) y su efecto en `attention_span` (v₂, w = +0.45).

3. **Ahorro de bateria:** En pantallas AMOLED (predominantes en gama media-alta), el modo oscuro reduce el consumo energetico en un 40-60% (Google, 2018), relevante para estudiantes que dependen del celular como herramienta principal.

**Implementacion tecnica:**
- Variables CSS custom con prefijo `--color-` para todos los tokens
- Transicion suave entre temas (300ms ease-in-out) para evitar flash
- Respeto de `prefers-color-scheme` del sistema operativo
- Toggle manual accesible desde perfil y header

### 5.4.2 Contraste en modo oscuro

Todos los textos cumplen ratio de contraste WCAG 2.1 AA:
- Texto primario (`neutral-900` dark: #F0F0F8) sobre fondo (`neutral-50` dark: #1A1A2E): ratio 14.2:1
- Texto secundario (`neutral-600` dark: #B8B8C8) sobre fondo: ratio 7.8:1
- Primary sobre fondo oscuro: ratio 5.1:1 (cumple AA para texto grande)
- Success/Warning/Error ajustados con +10% luminosidad en dark mode para mantener ratios

---

## 5.5 Accesibilidad WCAG 2.1 AA

### 5.5.1 Touch targets

Tamano minimo de area tactil: **44x44px** (WCAG 2.5.5 Target Size, Level AAA adoptado como estandar interno). Este tamano es particularmente critico para:

- Opciones de respuesta en ejercicios (donde un toque erroneo por target insuficiente incrementa `anxiety`, v₅)
- Check-in emocional (donde la precision del input afecta la calidad del dato para `emotional_state`, v₇)
- Navegacion principal (donde la friccion reduce `study_adherence`, v₁₁)

Implementacion: padding transparente alrededor de elementos interactivos menores para alcanzar el area minima sin afectar el diseno visual.

### 5.5.2 Screen readers y semantica

- Roles ARIA apropiados en todos los componentes custom
- Labels descriptivos para iconos interactivos: `aria-label="Respuesta correcta: 67% de dominio en algebra"`
- Anuncios dinamicos via `aria-live="polite"` para resultados de ejercicios y cambios de estado
- Orden de tabulacion logico que sigue el flujo visual
- Skip links para navegacion rapida al contenido principal

### 5.5.3 Reduccion de movimiento

Para usuarios con `prefers-reduced-motion: reduce`:
- Animaciones de celebracion reemplazadas por feedback estatico (icono + texto)
- Transiciones de pantalla reducidas a fade simple (150ms)
- Breathing animation reemplazada por instrucciones textuales
- Progress bars sin animacion de llenado

### 5.5.4 Tamano de texto ajustable

- Soporte de `font-size` relativo (rem) en toda la aplicacion
- Respeto de la configuracion de tamano de texto del sistema operativo
- Layout flexible que no se quiebra hasta 200% de zoom (WCAG 1.4.4)
- Imagenes de texto evitadas completamente; todo texto es renderizado

---

## 5.6 Micro-interacciones con proposito

Cada micro-interaccion en Renddi esta vinculada a una variable del grafo causal. No existen animaciones decorativas.

### 5.6.1 Celebracion al completar ejercicio

**Trigger:** Estudiante responde correctamente un ejercicio.
**Animacion:** Confetti sutil (particulas naranja y dorada, 1.5s) + vibracion haptica corta (si disponible) + incremento numerico animado del porcentaje de dominio.
**Variable afectada:** `self_efficacy` (v₈), `confidence` (v₆).
**Mecanismo:** La celebracion inmediata activa el sistema de recompensa dopaminergico (Schultz, 1997), reforzando la asociacion esfuerzo → exito → placer. Bandura (1997) documento que las experiencias de maestria (mastery experiences) son la fuente mas poderosa de autoeficacia.
**Calibracion:** La intensidad de la celebracion escala con la dificultad del ejercicio. Un item facil produce feedback positivo sutil; un item dificil produce celebracion completa. Esto evita la habituacion (hedonic treadmill) documentada por Frederick y Loewenstein (1999).

### 5.6.2 Progreso visual

**Trigger:** Cambio en cualquier variable del grafo.
**Animacion:** Barra de progreso con llenado animado (ease-out, 600ms) + numero que incrementa en steps.
**Variable afectada:** `motivation` (v₂₀).
**Mecanismo:** La teoria del progreso de Amabile y Kramer (2011) establece que la percepcion de avance es el motivador intrinseco mas poderoso en el trabajo diario. Aplicado al contexto de estudio PAES, hacer visible el progreso (incluso pequeno) sostiene la motivacion durante la preparacion de meses.
**Implementacion:** Progress ring circular para dominio por materia, barra horizontal para avance en sesion, grafico de linea para tendencia semanal.

### 5.6.3 Transiciones suaves

**Trigger:** Navegacion entre pantallas, apertura de modales, cambio de estado.
**Animacion:** Transiciones shared-element donde aplique (ej: card de modulo se expande a pantalla de detalle), fade + slide para navegacion lateral (250ms ease-in-out).
**Variable afectada:** `cognitive_load` (v₄).
**Mecanismo:** Las transiciones animadas proporcionan continuidad espacial que reduce la desorientacion y la carga cognitiva extrinseca (Bederson y Boltman, 1999). El cerebro humano procesa mejor los cambios graduales que los abruptos, un principio de la Gestalt de continuidad.

### 5.6.4 Breathing animation

**Trigger:** Deteccion de estado emocional bajo (`emotional_state` < 0.3) o patron de errores consecutivos (>3 en 5 items) que sugiere `anxiety` elevada.
**Animacion:** Circulo que se expande y contrae con ritmo de 4s inhalar / 7s exhalar / 8s sostener (tecnica 4-7-8 de Weil, adaptada). Colores suaves (gradiente lavanda a azul cielo). Guia textual opcional: "Inhala... Exhala..."
**Variable afectada:** `anxiety` (v₅), `stress_level` (v₁₀).
**Mecanismo:** La respiracion diafragmatica lenta activa el sistema nervioso parasimpatico, reduciendo la respuesta de estres (Ma, Yue, Gong, Zhang, Duan, Shi y Li, 2017). La implementacion en la interfaz del estudiante permite una intervencion inmediata y no intrusiva del agente KAZE.
**Respeto:** La animacion es siempre opcional y nunca bloquea el uso de la app. Un boton "Seguir practicando" permanece visible.

---

## 5.7 Diseno emocional adaptativo

La interfaz de Renddi no es estatica: se adapta al estado emocional del estudiante, creando una experiencia que refleja y responde a como se siente. Este concepto extiende el diseno emocional de Norman (2004) hacia la personalizacion en tiempo real.

### 5.7.1 Estado positivo (emotional_state > 0.6)

- **Paleta:** Colores vibrantes, uso pleno del naranja primario y acentos en success-500
- **Animaciones:** Celebraciones completas, transiciones energeticas
- **Contenido:** Desafios ambiciosos, mensajes motivacionales orientados a metas ("Estas a 3 ejercicios de dominar este tema")
- **Musica/sonido:** Feedback sonico positivo habilitado (opcional)

### 5.7.2 Estado neutro (emotional_state 0.4-0.6)

- **Paleta:** Estandar del design system, sin enfasis emocional
- **Animaciones:** Transiciones normales, celebraciones moderadas
- **Contenido:** Ejercicios adaptativos regulares, progreso visible
- **Tonalidad:** Neutra y profesional

### 5.7.3 Estado bajo (emotional_state 0.2-0.4)

- **Paleta:** Tonos calidos predominan (lavanda, ambar suave), se reduce el uso de colores saturados
- **Animaciones:** Mas lentas y suaves, sin efectos abruptos
- **Contenido:** Ejercicios de menor dificultad para generar experiencias de exito rapido (quick wins). Mensajes de apoyo: "Todos tenemos dias asi. Lo importante es que estas aqui"
- **Agente activo:** KAZE monitorea e interviene si el estado persiste >2 sesiones
- **Conexion causal:** Quick wins incrementan `mastery` → `self_efficacy` (w = +0.30) → reduccion de `anxiety` (w = -0.35)

### 5.7.4 Estado critico (emotional_state < 0.2)

- **Paleta:** Modo simplificado, colores suaves sin saturacion, predominancia de neutros calidos
- **Animaciones:** Minimas, solo transiciones funcionales
- **Contenido:** Se ofrece opcion de cambiar de actividad, pausa guiada (breathing), o revisar logros pasados
- **Acceso directo:** Boton "Necesito ayuda" visible, que conecta con recursos de apoyo psicologico (lineas de ayuda, orientacion del establecimiento)
- **Seguridad:** El sistema nunca reemplaza atencion profesional. Si detecta patrones de crisis sostenidos, recomienda buscar apoyo humano
- **Variables monitoreadas:** `anxiety` (v₅), `stress_level` (v₁₀), `emotional_state` (v₇), `frustration_tolerance` (v₉)

*Nota etica:* La adaptacion emocional respeta la autonomia del estudiante. El estudiante puede desactivar el diseno emocional adaptativo en cualquier momento desde Configuracion. La deteccion emocional no utiliza reconocimiento facial ni datos biometricos — se basa exclusivamente en patrones de interaccion y auto-reporte voluntario, conforme a la Ley 21.719 de proteccion de datos personales de Chile.

---

## 5.8 Componentes UI clave

### 5.8.1 Card de ejercicio

```
┌─────────────────────────────────┐
│ [Icono materia]  Algebra        │  ← overline + icono
│                                 │
│ Si 3x + 5 = 20, entonces x =   │  ← body-lg, maximo 3 lineas
│                                 │
│  ┌─────┐  ┌─────┐  ┌─────┐     │
│  │  3  │  │  5  │  │  7  │     │  ← opciones, 44px min height
│  └─────┘  └─────┘  └─────┘     │
│                                 │
│  ┌─────┐                       │
│  │  15 │                       │
│  └─────┘                       │
│                                 │
│ ━━━━━━━━━━━░░░░░░  3/10        │  ← progress bar de sesion
└─────────────────────────────────┘
```

### 5.8.2 Check-in emocional

```
┌─────────────────────────────────┐
│                                 │
│     ¿Como te sientes hoy?      │  ← heading, centrado
│                                 │
│   ☀️    ⭐    ☁️    💧    🌧️     │  ← 5 emojis Renddi, 48px
│  Genial Bien Regular Bajo  Mal  │  ← caption debajo
│                                 │
│         [Omitir →]              │  ← siempre opcional
└─────────────────────────────────┘
```

### 5.8.3 Radar de progreso (21 variables)

Visualizacion de radar simplificada que agrupa las 21 variables en 5 dimensiones:

```
          Academica
             ╱╲
            ╱  ╲
   Social  ╱    ╲  Emocional
           ╲    ╱
            ╲  ╱
     Vocac.  ╲╱  Conductual
```

Cada eje muestra el promedio ponderado de las variables de su dimension. Al tocar un eje, se despliega el detalle de las variables individuales. Colores del area: gradiente de `primary-100` a `primary-500` segun el nivel.

---

# Capitulo 6. Flujos de Usuario Clave

## 6.1 Principios de diseno de flujos

Los flujos de usuario de Renddi se disenan bajo tres principios derivados del modelo SENSEI:

1. **Minimo viable de interaccion.** Cada flujo se optimiza para que el estudiante llegue al contenido de valor en el menor numero de toques posible. Fundamentado en la Ley de Hick-Hyman (Hick, 1952): el tiempo de decision aumenta logaritmicamente con el numero de opciones.

2. **Cierre emocional.** Cada flujo tiene un punto de cierre positivo, incluso cuando el resultado es negativo. Un ejercicio fallido cierra con una oportunidad de aprendizaje, no con un fracaso.

3. **Conexion con el grafo.** Cada flujo lee y/o escribe al menos una variable del grafo causal, asegurando que toda interaccion contribuye al modelo del estudiante.

---

## 6.2 Flujo 1: Onboarding (primera vez)

**Trigger:** Primera apertura de la app tras descarga.
**Duracion objetivo:** 8-10 minutos (max absoluto 10 min).
**Estructura:** Diagnostico progresivo en dos fases — medicion core en onboarding + stealth assessment diferido en sesiones 1-5 (ver Tesis TAKUMI, Capitulo 3).
**Variables medidas directamente:** 5 core (stress_level, sleep_quality, anxiety, motivation, mastery) + 4 stealth embebidas en CAT (attention_span, confidence, frustration_tolerance, metacognition).
**Variables inicializadas con priors:** 12 restantes (se refinan via stealth assessment en sesiones 1-5).

### 6.2.1 Secuencia de pantallas

**Pantalla 1 — Splash animado (3s)**
Logo Renddi con animacion de entrada. Fondo oscuro, naranja como acento. Sin accion requerida.

**Pantalla 2 — Bienvenida (10s)**
"Hola. Soy Renddi, tu coach para la PAES." Tono cercano, sin formalismos. Un unico boton: "Empezar". Sin pantallas de permisos ni login en este punto (se difiere para reducir friccion, siguiendo el principio de progressive disclosure de Nielsen, 1994).

**Pantalla 3 — Contexto rapido (4 toques, ~30 seg)**
Cuatro preguntas en formato de seleccion unica con animacion de tarjetas:
1. "¿En que curso vas?" → 3ro medio / 4to medio / Egresado
2. "¿Que materias vas a rendir?" → Multi-select: Lenguaje, Matematica, Historia, Ciencias
3. "¿Cuando rindes la PAES?" → Selector de fecha simplificado
4. "¿Tienes una carrera en mente?" → Si (input libre) / Aun no / Estoy explorando

Estas respuestas inicializan: `vocational_clarity` (v₁₉) a partir de la pregunta 4, y contextualizan la seleccion de contenido y la materia principal para el CAT.

**Pantalla 4 — Diagnostico core (7-9 min)**

El diagnostico se presenta como una experiencia fluida en dos bloques sin corte visible entre ellos. El estudiante percibe un unico flujo conversacional, no un "test + cuestionario".

*Bloque A — "Conocerte mejor" (90 seg):*
Secuencia rapida de 8 items en formato visual/Likert, presentados como conversacion:
- 2 items stress_level (v₁₀): estres percibido (PSS ultra-breve)
- 3 items sleep_quality (v₁₃): hora de dormir, despertar, calidad
- 2 items anxiety (v₅): preocupacion PAES (Spielberger ultra-breve)
- 2 items motivation (v₂₀): motivacion intrinseca vs externa (SDT reducido)

Diseno UX: formato de tarjetas deslizables (swipe), una pregunta por pantalla, transicion animada. Sin numeracion visible ("pregunta 3 de 8") que denote test — solo progreso sutil en barra inferior.

*Bloque B — "Desafios" / CAT reducido (5-7 min):*
Evaluacion adaptativa CAT con criterio de parada por precision (SEM <= 0.30), convergiendo en 8-12 items para la materia principal:
- "Vamos a ver donde estas. No es una prueba — es para que yo te conozca mejor"
- Items presentados como desafios, no como preguntas de examen
- Barra de progreso visible ("Desafio 5 de 12")
- Sin timer visible (reduce `anxiety`, v₅)
- Dificultad se adapta en tiempo real via IRT 2PL
- Cada 4 items, micro-break: dato curioso o fact motivacional (3 seg)
- Pregunta de confianza intercalada cada 4 items ("¿Que tan seguro/a estas?", 3 seg) → alimenta `confidence` (v₆)

*Mediciones stealth embebidas (sin costo temporal):*
- `attention_span` (v₂) — degradacion de rendimiento intra-sesion
- `confidence` (v₆) — calibracion confianza-precision
- `frustration_tolerance` (v₉) — persistencia ante items dificiles
- `metacognition` (v₃) — patron de revision de respuestas y uso de ayudas

*Nota sobre materias multiples:* Si el estudiante selecciono 2+ materias en Pantalla 3, solo se evalua la materia principal (la mas relevante para su carrera declarada). Las materias adicionales se evaluan via CAT embebido en las sesiones de practica 2 y 3, sin que el estudiante perciba un "segundo diagnostico".

**Pantalla 5 — Check-in emocional + perfil inicial (20 seg)**
Dos micro-interacciones en secuencia:
1. Check-in emocional: "¿Como te sentiste con estos desafios?" → 5 emojis Renddi (10 seg). Inicializa `emotional_state` (v₇).
2. Presentacion visual del estado inicial:
   - Radar de 5 dimensiones con resultados (solo las dimensiones con datos solidos, no las 21 variables)
   - Mensaje personalizado de MIYAGI: "Tienes buena base en Lenguaje y hay oportunidades en Algebra. Vamos a armar tu plan"
   - Tono: positivo, orientado a oportunidades, nunca a deficit
   - Boton: "Ver mi plan" → lleva a la primera recomendacion

**Pantalla 6 — Primera recomendacion**
El agente SENPAI presenta la primera sesion de estudio sugerida:
- "Te recomiendo empezar con [tema] — es donde mas rapido vas a ver progreso"
- Duracion estimada visible (ej: "10 min")
- Opciones: "Empezar ahora" / "Guardar para despues"

### 6.2.2 Stealth assessment diferido (sesiones 1-5)

Las 12 variables no medidas directamente en onboarding se inicializan con priors bayesianos y se refinan automaticamente durante el uso normal de la app:

- **Sesiones 1-2:** Observacion pasiva. El sistema recopila indicadores conductuales (adherencia, horarios, persistencia ante errores, uso de features sociales) y actualiza los priors via regla de Bayes.
- **Sesion 3:** Micro-check-in contextual (15 seg, 2 items) para las 2-3 variables con mayor incertidumbre residual. Se integra naturalmente en el flujo post-sesion, no como un "cuestionario extra".
- **Sesion 5:** Verificacion de convergencia. Objetivo: 90% de variables con sigma < 0.20. Si el perfil reclasificado difiere del provisional, el ajuste se refleja en recomendaciones graduales (no en un reset visible para el estudiante).

*Diseno UX del refinamiento:* El estudiante nunca percibe un "segundo diagnostico". Los micro-check-ins se presentan como curiosidad del coach ("Oye, una cosa rapida...") y nunca superan los 15 segundos. La experiencia se siente como una conversacion continua, no como una evaluacion diferida.

### 6.2.3 Metricas de exito del onboarding

| Metrica | Objetivo | Benchmark |
|---------|----------|-----------|
| Completion rate | **>85%** | Duolingo: ~65% en 15 min (Settles, LaFlair y Hagiwara, 2020). Con 8-10 min se espera mejora significativa |
| Tiempo total | **<10 min** (mediana) | Reduccion de 15 min anterior. P95 < 12 min |
| Primera sesion iniciada | >50% completa onboarding e inicia primera sesion | — |
| NPS post-onboarding | >40 | Promedio EdTech: 30-35 |
| Concordancia perfil onboarding vs perfil sesion 5 | >80% | Validacion interna del diagnostico progresivo |
| Convergencia stealth assessment (sigma < 0.20 en 90% vars) | Sesion 5 | Cold start bayesiano (Thai-Nghe et al., 2010) |

---

## 6.3 Flujo 2: Sesion de estudio diaria

**Trigger:** Push notification personalizada (coordinada por KOTODAMA) o apertura organica.
**Duracion objetivo:** 12-20 minutos (ajustable por el estudiante).
**Variables leidas:** `emotional_state` (v₇), `mastery` (v₁), `fatigue` (v₁₅), `attention_span` (v₂).
**Variables escritas:** `mastery` (v₁), `study_adherence` (v₁₁), `confidence` (v₆), `self_efficacy` (v₈).

### 6.3.1 Secuencia

**Paso 1 — Apertura (2s)**
La app abre directamente en la pantalla de sesion. Sin splash, sin dashboard intermedio. Principio: "del bolsillo al ejercicio en <5 segundos".

**Paso 2 — Check-in emocional rapido (5-10s)**
Los 5 emojis Renddi aparecen con animacion sutil. Un toque y se registra. "Omitir" siempre disponible. Sin texto explicativo innecesario — el estudiante ya sabe la mecanica tras la primera vez.

*Logica:* Si `emotional_state` reportado < 0.3, el sistema ajusta la sesion:
- Reduce dificultad esperada en 0.15 theta
- Ofrece opcion de sesion corta (5 min)
- Activa monitoreo KAZE reforzado

**Paso 3 — Ejercicio adaptativo (10-18 min)**
Serie de 8-15 items adaptados por SENPAI:
- Dificultad calibrada via BKT+IRT en la Zona de Desarrollo Proximo
- Intercalado de materias (interleaving) segun Rohrer (2012): mejora retencion a largo plazo
- Retroalimentacion inmediata tras cada item (no al final del bloque)
- Progreso visible: barra de sesion + dominio del tema
- Cada 5 items: micro-pausa de 3s con dato del tema o mensaje motivacional

**Paso 4 — Feedback de sesion (15s)**
Resumen visual:
- Items completados, precision, tiempo
- Cambio en dominio (delta visible: "+3% en Algebra")
- Celebracion proporcional al esfuerzo (no solo al resultado)
- Streak actualizado (si aplica)

**Paso 5 — Siguiente accion o descanso (5s)**
Dos opciones claras:
- "Seguir practicando" (10 min mas) — si `fatigue` < 0.6 y `attention_span` > 0.4
- "Suficiente por hoy" — cierre positivo con mensaje de MIYAGI

Si la sesion fue particularmente larga (>20 min), la opcion default es "Suficiente por hoy" para prevenir fatiga acumulada.

---

## 6.4 Flujo 3: Post-ejercicio

**Trigger:** Respuesta a un ejercicio individual.
**Duracion:** 5-15 segundos.
**Variables escritas:** `mastery` (v₁), `confidence` (v₆), `frustration_tolerance` (v₉).

### 6.4.1 Respuesta correcta

**Pantalla:**
```
┌─────────────────────────────────┐
│                                 │
│       ✓  ¡Correcto!             │  ← success-500, animacion check
│                                 │
│  Tu dominio en Algebra:         │
│  ━━━━━━━━━━━━━━━░░  78%  (+3%) │  ← progress bar animada
│                                 │
│  [Siguiente →]                  │
└─────────────────────────────────┘
```

- Feedback instantaneo (<200ms de latencia percibida)
- Haptic feedback corto (si disponible)
- Incremento de dominio visible y animado
- Sin explicacion extensa (el estudiante ya acerto — no necesita mas informacion)
- Auto-avance en 3s si no toca "Siguiente"

### 6.4.2 Respuesta incorrecta

**Pantalla:**
```
┌─────────────────────────────────┐
│                                 │
│  La respuesta correcta es 5     │  ← neutral, sin simbolo de error
│                                 │
│  Para resolver 3x + 5 = 20:    │  ← explicacion paso a paso
│  1. Resta 5: 3x = 15           │
│  2. Divide por 3: x = 5        │
│                                 │
│  [Entendido]   [Ver video →]   │
└─────────────────────────────────┘
```

- Sin iconografia de error agresiva (no X roja grande). El color es `neutral-600`, no `error-500`
- Explicacion paso a paso generada por SENPAI
- Opcion de profundizar (video, otro ejemplo) — no obligatoria
- El item se reprograma via FSRS para repeticion espaciada
- *Conexion causal:* Evitar refuerzo negativo excesivo protege `self_efficacy` (v₈) y `emotional_state` (v₇)

### 6.4.3 Conexion con progreso

Tras cada 5 respuestas, un mini-resumen conecta el ejercicio con la meta mayor:
"Llevas 5 ejercicios hoy. Cada uno te acerca a tu meta en [carrera/universidad]."
Este encuadre conecta `mastery` con `vocational_clarity` (v₁₉) → `motivation` (v₂₀).

---

## 6.5 Flujo 4: Check-in emocional

**Trigger:** Inicio de sesion (siempre), mitad de sesion (si patron de errores sugiere cambio emocional), o solicitud explicita del estudiante.
**Duracion:** 5-30 segundos (segun profundidad).
**Variables escritas:** `emotional_state` (v₇), `anxiety` (v₅), `stress_level` (v₁₀).

### 6.5.1 Check-in rapido (5s)

Los 5 emojis Renddi. Un toque registra el estado. Registro almacenado con timestamp para analisis longitudinal por KAZE.

### 6.5.2 Check-in profundo (30s, activado si estado < 0.4)

Si el estudiante selecciona "Bajo" o "Mal":

**Pantalla adicional:**
"¿Quieres contarme que pasa?"
Tres opciones rapidas + input libre:
- "Estoy estresado/a por la PAES"
- "Tuve un mal dia"
- "No tengo ganas de estudiar"
- [Escribir algo...] (opcional)

**Respuesta de KAZE:**
Mensaje empatico personalizado + una accion concreta:
- Si estres por PAES: "Es normal sentir eso. Tu progreso muestra que vas bien" + dato de avance real
- Si mal dia: "Todos tenemos dias asi. ¿Quieres una sesion corta y facil?" + ajuste de dificultad
- Si sin ganas: "¿Y si solo hacemos 3 ejercicios rapidos? Sin presion" + sesion mini

### 6.5.3 Intervencion KAZE (si estado bajo persiste >2 sesiones)

Si `emotional_state` < 0.3 durante 3+ sesiones consecutivas:
1. KAZE genera alerta interna al orquestador MIYAGI
2. MIYAGI ajusta plan: reduce carga, prioriza quick wins, activa modo de apoyo
3. Mensaje proactivo: "He notado que has estado con menos energia. ¿Hay algo en lo que pueda ayudarte?"
4. Oferta de breathing exercise o cambio de actividad
5. Si persiste >7 dias: recomendacion de buscar apoyo humano profesional

---

## 6.6 Flujo 5: Revision semanal

**Trigger:** Push notification dominical + badge en tab "Progreso".
**Duracion:** 3-5 minutos.
**Variables leidas:** Todas las 21 variables (snapshot semanal).
**Variables escritas:** `self_efficacy` (v₈), `motivation` (v₂₀).

### 6.6.1 Secuencia de pantallas

**Pantalla 1 — Resumen visual**
"Tu semana en Renddi":
- Dias activos (streak visual, no numerico para evitar presion)
- Tiempo total de estudio
- Ejercicios completados
- Precision promedio

**Pantalla 2 — Radar de 21 variables**
Visualizacion de radar de 5 ejes (dimensiones) con comparacion semana anterior:
- Area actual en `primary-500` (opacidad 0.3)
- Area semana anterior en `neutral-400` (opacidad 0.15)
- Flechas de tendencia en cada eje (↑ mejora, → estable, ↓ atencion)

Al tocar cada dimension, detalle de variables individuales:
"Tu ansiedad bajo esta semana (de 0.6 a 0.45). Las sesiones de respiracion ayudaron."

**Pantalla 3 — Celebraciones**
Logros de la semana presentados como tarjetas animadas:
- "Dominaste Ecuaciones Lineales" (mastery > 0.8 en KC)
- "5 dias seguidos estudiando" (study_adherence)
- "Tu confianza en Geometria subio 15%" (confidence)
Cada logro con animacion sutil y opcion de compartir (ver Seccion 7.4).

**Pantalla 4 — Plan de la semana siguiente**
MIYAGI presenta el plan adaptado:
- 3 focos de la semana (KCs prioritarios)
- Tiempo sugerido por dia
- Una meta emocional (si aplica): "Esta semana, intenta la respiracion antes de empezar"
- Boton: "Me gusta este plan" / "Quiero ajustarlo"

### 6.6.2 Metricas de exito

| Metrica | Objetivo |
|---------|----------|
| Apertura de revision semanal | >60% de usuarios activos |
| Tiempo en revision | 3-5 min promedio |
| Engagement post-revision (sesion dentro de 24h) | >40% |

---

## 6.7 Flujo 6: Consulta MIYAGI

**Trigger:** Estudiante toca el icono de chat o dice "Tengo una duda".
**Duracion:** Variable (1-10 min).
**Variables leidas:** Perfil completo del estudiante (21 variables).
**Variables escritas:** Depende de la consulta — potencialmente cualquiera.

### 6.7.1 Tipos de consulta y enrutamiento

MIYAGI opera como interfaz unificada que enruta al agente especializado:

| Tipo de consulta | Ejemplo | Agente destino |
|-----------------|---------|----------------|
| Duda academica | "No entiendo logaritmos" | SENPAI |
| Estado emocional | "Estoy muy nervioso" | KAZE |
| Orientacion vocacional | "¿Que carreras usan mate?" | COMPASS |
| Habitos de estudio | "No logro estudiar todos los dias" | KAIZEN |
| Metacognicion | "¿Como puedo aprender mejor?" | KOAN |
| Motivacion | "No se para que estudio esto" | IKIGAI |
| Social | "¿Puedo estudiar con alguien?" | NAKAMA |

### 6.7.2 Interfaz de chat

**Pantalla:**
```
┌─────────────────────────────────┐
│ ← MIYAGI                       │
│─────────────────────────────────│
│                                 │
│         [Avatar MIYAGI]         │
│   "Hola [nombre]. ¿En que te   │
│    puedo ayudar?"               │
│                                 │
│   ┌─────────────────────────┐   │
│   │ Tengo una duda de mate  │   │  ← sugerencias rapidas
│   └─────────────────────────┘   │
│   ┌─────────────────────────┐   │
│   │ No me siento bien       │   │
│   └─────────────────────────┘   │
│   ┌─────────────────────────┐   │
│   │ Quiero cambiar mi plan  │   │
│   └─────────────────────────┘   │
│                                 │
│ ┌───────────────────────┐ [📎]  │
│ │ Escribe tu mensaje... │ [→]  │
│ └───────────────────────┘       │
└─────────────────────────────────┘
```

**Caracteristicas:**
- Respuestas personalizadas basadas en el perfil completo del estudiante
- Tono adaptado al `emotional_state`: mas empatico si esta bajo, mas directo si esta bien
- Capacidad de generar explicaciones con ejemplos contextualizados al estudiante
- Historial de conversacion persistente (privacidad: solo local + backup cifrado)

---

## 6.8 Flujo 7: Momento de crisis/frustracion

**Trigger:** Deteccion automatica via stealth assessment.
**Indicadores de deteccion:**
- 4+ errores consecutivos en items de dificultad ≤ theta actual
- Tiempo de respuesta <2s en 3+ items consecutivos (respuestas aleatorias)
- Abandono de sesion antes del 30% de completitud
- Patron de respuesta A-A-A-A (misma opcion repetida)
**Variables monitoreadas:** `anxiety` (v₅), `frustration_tolerance` (v₉), `emotional_state` (v₇).

### 6.8.1 Secuencia de intervencion

**Paso 1 — Pausa sugerida (no forzada)**
La interfaz suaviza su ritmo:
- El siguiente ejercicio no aparece automaticamente
- Aparece un mensaje sutil: "¿Quieres tomar un respiro?"
- Dos opciones: "Si, hagamos una pausa" / "Estoy bien, seguir"

**Paso 2 — Si acepta pausa: Breathing exercise**
Animacion de respiracion guiada (60-90s):
- Circulo expandible con colores calidos
- Guia textual: "Inhala 4s... Sostiene 7s... Exhala 8s..."
- Sonido ambiental sutil (opcional)
- Al terminar: "¿Como te sientes ahora?" (check-in rapido)

**Paso 3 — Reencuadre cognitivo**
KAZE presenta un reencuadre basado en terapia cognitivo-conductual (Beck, 1976):
- "Los errores son parte del aprendizaje. Cada error le ensena al sistema como ayudarte mejor"
- Dato de progreso real: "La semana pasada tenias 45% en este tema, hoy tienes 62%"
- Normalizacion: "El 73% de los estudiantes encuentra dificil este tema"

**Paso 4 — Opcion de cambio de actividad**
"¿Quieres probar algo diferente?"
- Cambiar de materia
- Hacer una revision de temas dominados (quick wins → refuerza `self_efficacy`)
- Ver un video explicativo
- Terminar la sesion con cierre positivo

### 6.8.2 Metricas de exito

| Metrica | Objetivo |
|---------|----------|
| Deteccion correcta de crisis (precision) | >80% |
| Estudiantes que aceptan pausa | >40% |
| Retencion post-crisis (vuelve dentro de 24h) | >70% |
| Reduccion de abandono de sesion | -30% vs sin intervencion |

---

## 6.9 Flujo 8: Celebracion de logro

**Trigger:** Estudiante alcanza un hito predefinido.
**Tipos de hito:**
- Dominio de KC (mastery > 0.8)
- Streak de N dias
- Completar modulo
- Mejora significativa en variable del grafo (delta > 0.15 en una semana)
- Primer ejercicio, primera sesion completa, primer dia consecutivo
**Variables afectadas:** `self_efficacy` (v₈), `motivation` (v₂₀), `confidence` (v₆).

### 6.9.1 Secuencia

**Pantalla 1 — Animacion de celebracion (3s)**
- Animacion full-screen de confetti + badge animado
- Haptic feedback tipo "notificationSuccess"
- Sonido de logro (si habilitado)
- Intensidad proporcional a la magnitud del logro

**Pantalla 2 — Badge y detalle**
```
┌─────────────────────────────────┐
│                                 │
│        [Badge animado]          │
│                                 │
│     ¡Dominaste Algebra!         │  ← heading
│                                 │
│  "Has demostrado dominio en     │
│   ecuaciones lineales. Esto     │
│   te acerca a [carrera meta]"   │  ← conexion vocacional
│                                 │
│  [Compartir]  [Siguiente meta]  │
└─────────────────────────────────┘
```

**Pantalla 3 — Conexion con meta mayor**
El logro se contextualiza dentro de la trayectoria:
- Progreso hacia la meta PAES (barra de largo plazo)
- Impacto estimado en puntaje PAES (si hay suficientes datos)
- Siguiente hito visible: "Proximo logro: Dominar Funciones Cuadraticas (te faltan 3 ejercicios)"

### 6.9.2 Compartir (opcional, opt-in)

- Genera imagen personalizada con el logro (sin datos sensibles)
- Opciones: Instagram Stories, WhatsApp, guardar imagen
- El contenido compartido incluye branding Renddi (growth organico)
- Nunca se comparte automaticamente — siempre requiere accion explicita
- Mecanismo social: compartir logros con `social_support` (v₁₇) activa el efecto de accountability (Rogers, Milkman, John y Norton, 2015)

---

## 6.10 Tabla resumen de flujos

| # | Flujo | Trigger | Duracion | Variables clave | Metrica principal |
|---|-------|---------|----------|----------------|-------------------|
| 1 | Onboarding | Primera apertura | 8-10 min | 21 variables (init) | Completion rate >85% |
| 2 | Sesion diaria | Push/apertura | 12-20 min | mastery, study_adherence | Session completion >80% |
| 3 | Post-ejercicio | Respuesta a item | 5-15s | mastery, confidence | Tiempo de feedback <200ms |
| 4 | Check-in emocional | Inicio sesion | 5-30s | emotional_state, anxiety | Response rate >70% |
| 5 | Revision semanal | Push dominical | 3-5 min | 21 variables (snapshot) | Apertura >60% |
| 6 | Consulta MIYAGI | Accion del estudiante | 1-10 min | variable segun consulta | Satisfaccion >4/5 |
| 7 | Crisis/frustracion | Deteccion automatica | 1-3 min | anxiety, frustration_tol. | Retencion post-crisis >70% |
| 8 | Celebracion logro | Hito alcanzado | 10-30s | self_efficacy, motivation | Share rate >15% |

---

# Capitulo 7. Engagement y Retencion

## 7.1 Marco teorico: Hook Model adaptado

El diseno de engagement de Renddi se fundamenta en el Hook Model de Eyal (2014), adaptado con dos modificaciones criticas para el contexto educativo:

1. **Recompensa variable alineada con el aprendizaje.** A diferencia de aplicaciones de entretenimiento donde la recompensa variable puede ser puramente hedonica, en Renddi la variabilidad esta en el tipo y formato de la recompensa, no en su contingencia con el aprendizaje real.

2. **Investment que incrementa valor educativo.** La inversion del usuario no solo incrementa la probabilidad de retorno (como en redes sociales), sino que mejora la calidad del servicio adaptativo — cada interaccion produce un modelo mas preciso del estudiante.

### 7.1.1 Trigger: notificaciones calibradas

Las push notifications son coordinadas por el agente KOTODAMA (coordinador de comunicaciones) bajo reglas estrictas:

**Reglas de frecuencia:**
- Maximo 2 push notifications por dia
- Ventana horaria personalizada (aprendida del patron de uso del estudiante)
- Nunca entre 22:00 y 07:00 (protege `sleep_quality`, v₁₃)
- Respeto absoluto del "No molestar" del sistema operativo

**Tipos de trigger:**

| Tipo | Ejemplo | Frecuencia | Variable asociada |
|------|---------|------------|-------------------|
| Recordatorio de sesion | "Tu sesion de 10 min te espera" | 1x/dia | `study_adherence` (v₁₁) |
| Progreso | "Llevas 78% en Algebra. ¿Completamos hoy?" | 2x/semana | `motivation` (v₂₀) |
| Social | "[Amigo] acaba de completar un desafio" | 1x/semana max | `social_support` (v₁₇) |
| Reactivacion | "Tu streak de 5 dias corre peligro" | Solo si streak >3 | `study_adherence` (v₁₁) |
| Celebracion | "¡Ayer subiste 12% en Geometria!" | Post-logro | `self_efficacy` (v₈) |

**Personalizacion de tono:**
- Estudiante con alta `motivation` (>0.7): tono desafiante ("¿Listo para el proximo nivel?")
- Estudiante con baja `motivation` (<0.4): tono calido ("Un ejercicio rapido y ya")
- Estudiante con alta `anxiety` (>0.7): tono relajado, sin urgencia ("Cuando quieras, aqui estamos")

*Fundamentacion:* Pham y Wang (2022) documentaron que las notificaciones personalizadas en funcion del perfil emocional del usuario incrementan el engagement un 34% comparadas con notificaciones genericas, sin incrementar la percepcion de intrusividad.

### 7.1.2 Action: minima friccion

El principio de Fogg (2009) establece que el comportamiento ocurre cuando coinciden motivacion, habilidad y trigger. Renddi maximiza la habilidad (facilidad) para que incluso con motivacion baja, la accion ocurra:

- **Apertura directa a ejercicio:** La push notification lleva directamente al primer ejercicio, no a un dashboard. Cero toques intermedios.
- **Sesion minima de 3 min:** Siempre existe una opcion ultra-corta. "Solo 3 ejercicios" es suficiente para registrar `study_adherence` y mantener el streak.
- **Offline-first:** Los ejercicios se pre-descargan. Sin conexion, el estudiante puede practicar. Esto elimina la barrera de conectividad, critica para estudiantes rurales o con datos limitados.
- **Estado persistente:** Si el estudiante cierra la app a mitad de ejercicio, al volver encuentra exactamente donde estaba. Sin perdida de progreso.

### 7.1.3 Variable Reward: recompensas diversificadas

Siguiendo la taxonomia de Eyal (2014), Renddi implementa tres tipos de recompensa variable:

**Recompensa de la tribu (social):**
- Posicion en leaderboard de cohorte (ver Seccion 7.4)
- Reacciones de companeros en grupos de estudio
- Reconocimiento por ayudar a otros

**Recompensa de la caza (logro):**
- Badges por dominio de temas
- Desbloqueo de contenido avanzado
- Puntuacion PAES estimada (se actualiza con cada sesion)
- "Bonus items" sorpresa en sesiones (items especialmente interesantes o desafiantes)

**Recompensa del yo (competencia):**
- Comparacion con "tu yo de la semana pasada" (no con otros)
- Visualizacion de la curva de aprendizaje personal
- Mensajes de maestria: "Ahora resuelves en 30s lo que antes te tomaba 2 min"

*Conexion causal:* Las recompensas del yo son las mas potentes para `self_efficacy` (v₈) porque se basan en experiencias de maestria directas (Bandura, 1997). Las recompensas de la tribu refuerzan `social_support` (v₁₇). Las recompensas de la caza estimulan `motivation` (v₂₀) via satisfaccion de la necesidad de competencia (Deci y Ryan, 2000).

### 7.1.4 Investment: personalizacion progresiva

Cada interaccion del estudiante con Renddi incrementa el valor del servicio:

- **Datos de rendimiento:** El modelo BKT+IRT se vuelve mas preciso con cada respuesta. Despues de 50 items, las recomendaciones son sustancialmente mejores que al inicio.
- **Preferencias de estudio:** Horario preferido, duracion de sesion, materias favoritas — todo se aprende y se aplica.
- **Historial emocional:** KAZE construye un perfil emocional longitudinal que permite anticipar estados antes de que ocurran.
- **Red social:** Amigos, grupos de estudio, desafios compartidos — todo incrementa el costo de abandono percibido (switching cost).

---

## 7.2 Streak mechanics responsables

### 7.2.1 Diseno guilt-free

La mecanica de streaks en Renddi se disena bajo el principio de "celebracion, no obligacion". Las investigaciones de Deterding, Dixon, Khaled y Nacke (2011) sobre gamificacion advirtieron que las mecanicas punitivas producen motivacion extrinseca fragil que se desmorona bajo presion — exactamente lo contrario de lo que necesita un estudiante PAES estresado.

**Reglas de streak:**

1. **Streak freeze automatico:** Un dia libre por semana no rompe el streak. El estudiante puede configurar su "dia libre" o el sistema lo detecta. Sin costo, sin perdida.
2. **Sin castigo visible por romper streak:** Si el streak se rompe, no hay animacion de perdida ni notificacion punitiva. Simplemente se muestra: "Nuevo streak: dia 1. ¡Vamos!"
3. **Streak como celebracion:** Los hitos de streak (3, 7, 14, 30 dias) se celebran con badges y animaciones. El enfasis esta en lo logrado, no en lo que se perderia.
4. **Streak compuesto:** Ademas del streak de dias, existen streaks de dominio ("3 temas dominados esta semana") y de mejora ("Tu precision subio 5 semanas seguidas"). Esto diversifica la mecanica y reduce la dependencia del streak de dias.

### 7.2.2 Proteccion contra dismorfia de productividad

La cultura de productividad toxica es un riesgo documentado en apps de habitos (Stawarz, Cox y Blandford, 2015). Renddi implementa:

- **Limite de sesion sugerido:** Despues de 40 minutos continuos, el sistema sugiere un descanso. Si el estudiante ignora 2 sugerencias, KAIZEN registra el patron y ajusta recomendaciones futuras.
- **Celebracion del descanso:** "Hoy descansaste y eso tambien es parte del proceso" (mensaje en el dia libre del streak).
- **No hay leaderboard de tiempo:** Nunca se compite por quien estudia mas horas. La metrica visible es dominio, no tiempo.

*Conexion causal:* Estas mecanicas protegen `stress_level` (v₁₀), `fatigue` (v₁₅) y `sleep_quality` (v₁₃), previniendo la cascada stress_level → anxiety (w = +0.45) → mastery (w = -0.30).

---

## 7.3 Social features opt-in

### 7.3.1 Principio: lo social como amplificador, no como requisito

Todas las features sociales de Renddi son opt-in. El estudiante puede usar la app en modo completamente individual y recibir la misma calidad de servicio. Las features sociales amplifican el engagement pero nunca condicionan el acceso al contenido.

*Fundamentacion:* La Self-Determination Theory (Deci y Ryan, 2000) identifica la relacion social (relatedness) como necesidad psicologica basica, pero su satisfaccion en contextos digitales es altamente individual. Forzar la socialidad puede incrementar `anxiety` en estudiantes introvertidos (Caplan, 2007).

### 7.3.2 Leaderboards por cohorte

- **No globales:** Los leaderboards muestran solo la cohorte del estudiante (mismo colegio, mismo preuniversitario, o grupo creado por invitacion).
- **Tamano maximo de cohorte:** 30 personas. Cohortes mas grandes se subdividen.
- **Metrica del leaderboard:** Dominio ponderado (no tiempo ni ejercicios), actualizado semanalmente.
- **Anonimato opcional:** El estudiante puede aparecer con nickname.
- **Efecto en grafo:** Leaderboards calibrados incrementan `social_support` (v₁₇) sin elevar `stress_level` (v₁₀), siempre que no se perciban como amenaza competitiva (Murayama y Elliot, 2012).

### 7.3.3 Grupos de estudio (NAKAMA)

- Creacion por invitacion (codigo o link)
- Tamano: 3-8 miembros (optimo para accountability: Lount y Wilk, 2014)
- Features del grupo:
  - Chat asincronico (no tiempo real, para evitar distraccion)
  - Desafios grupales semanales ("Dominen Algebra entre todos")
  - Progreso grupal visible (sin exponer datos individuales detallados)
  - Celebraciones compartidas cuando un miembro alcanza un logro

### 7.3.4 Challenges semanales

- Desafios tematicos renovados cada lunes
- Ejemplo: "Semana de Geometria: resuelve 20 ejercicios de geometria"
- Participacion individual o grupal
- Recompensa: badge exclusivo + bonus de dominio
- Dificultad adaptada al nivel del estudiante (todos pueden completar)

### 7.3.5 Comparacion con uno mismo

La metrica social principal de Renddi es la comparacion consigo mismo:

- "Hace 2 semanas resolvias este tipo de ejercicio en 45s. Hoy lo haces en 22s"
- "Tu confianza en Matematica subio de 0.4 a 0.65 en un mes"
- "En tu diagnostico inicial, tu theta en Algebra era 350 PAES. Hoy es 480"

Esta mecanica es la mas potente para `self_efficacy` (v₈) porque se basa en experiencias de maestria verificables (Bandura, 1997), no en comparacion social que puede producir tanto motivacion como desmotivacion dependiendo de la direccion de la comparacion (Festinger, 1954).

---

## 7.4 Reactivacion de usuarios dormidos

### 7.4.1 Secuencia de reactivacion

La secuencia respeta el principio de escalamiento progresivo, comenzando con respeto absoluto y aumentando gradualmente la urgencia:

| Dia sin actividad | Accion | Canal | Tono | Conexion con grafo |
|-------------------|--------|-------|------|---------------------|
| D1 | Nada | — | — | Respeto. Un dia sin estudiar es normal |
| D2 | Push sutil | Notificacion | "Te extrañamos. ¿Un ejercicio rapido?" | `study_adherence` (v₁₁) |
| D3-D6 | Nada | — | — | Evitar fatiga de notificaciones |
| D7 | Push con progreso | Notificacion | "Llevas 70% del modulo de Algebra. ¿Seguimos?" | `motivation` (v₂₀) |
| D14 | Email con logros | Email | Resumen visual de logros + lo que falta | `self_efficacy` (v₈) |
| D21 | Nada | — | — | Espacio para que el estudiante decida |
| D30 | Encuesta de salida | Email | "¿Que podemos mejorar? Tu opinion nos importa" | Feedback para producto |
| D60+ | Mensaje final | Email | "Tu perfil sigue aqui. Cuando quieras, volvemos" | Puerta abierta |

### 7.4.2 Principios de la secuencia

1. **Nunca culpabilizar.** Los mensajes celebran lo logrado, no senalan la ausencia.
2. **Respetar ciclos naturales.** Periodos de examen escolar, feriados, y vacaciones se consideran. Si el calendario escolar indica periodo de pruebas, la reactivacion se pausa.
3. **Maxima frecuencia: 4 contactos en 30 dias.** Esto es menos de la mitad de lo que Duolingo utiliza (estimado: 10+ en 30 dias) y refleja el compromiso con el bienestar del estudiante.
4. **Opt-out respetado.** Si el estudiante desactiva notificaciones, cero contactos de reactivacion.

### 7.4.3 Reactivacion contextual

Si el estudiante vuelve despues de una ausencia:
- Sin culpa: "¡Que bueno verte!"
- Contextualizacion rapida: "La ultima vez estabas trabajando en Probabilidades"
- Ajuste de plan: MIYAGI recalibra el plan considerando el tiempo perdido y la curva de olvido (FSRS recalcula intervals)
- Opcion de re-diagnostico rapido: "¿Quieres que veamos como estas?" (5 items adaptativos)

---

## 7.5 Metricas de benchmark

### 7.5.1 Metricas objetivo

Las metricas de engagement y retencion de Renddi se establecen en relacion con benchmarks de la industria EdTech, ajustados al contexto de preparacion de examenes (uso mas intensivo pero temporalmente acotado):

| Metrica | Objetivo Renddi | Duolingo | Khan Academy | Photomath | Quizlet |
|---------|-----------------|----------|--------------|-----------|---------|
| DAU/MAU | >40% | ~50% | ~25% | ~20% | ~30% |
| Session length (mediana) | 12-20 min | 5-10 min | 15-25 min | 3-5 min | 8-12 min |
| Sessions per day | 1.2-1.5 | 1.5-2.0 | 1.0-1.3 | 2-3 | 1.0-1.5 |
| D1 retention | >60% | ~65% | ~55% | ~50% | ~55% |
| D7 retention | >40% | ~45% | ~30% | ~25% | ~30% |
| D30 retention | >25% | ~30% | ~15% | ~12% | ~18% |
| D90 retention | >15% | ~15% | ~8% | ~5% | ~10% |

*Fuentes:* Las metricas de Duolingo se derivan de sus reportes publicos como empresa cotizada en bolsa (Duolingo Inc., 2024) y analisis independientes. Las demas son estimaciones basadas en reportes de la industria (Sensor Tower, 2023; data.ai, 2024) y publicaciones academicas sobre engagement en EdTech.

### 7.5.2 Justificacion de objetivos

**DAU/MAU >40%:** Renddi tiene una ventaja contextual: la PAES es una fecha fija que genera urgencia intrinseca en los ultimos 3-6 meses. Se espera un DAU/MAU creciente a medida que se acerca la fecha, potencialmente superando el 60% en el mes previo. El target de 40% es el promedio anual.

**Session length 12-20 min:** Mas largo que Duolingo (que prioriza micro-sesiones de 5 min) porque la preparacion PAES requiere ejercicios de mayor profundidad cognitiva. Mas corto que Khan Academy porque Renddi prioriza sesiones completas sobre sesiones largas con abandono. La duracion optima se fundamenta en la literatura sobre atencion sostenida: Lim y Dinges (2010) documentaron que la degradacion atencional significativa comienza a los 15-20 minutos, y la Pomodoro Technique (Cirillo, 2018) sugiere ciclos de 25 minutos para adultos, ajustados a la baja para adolescentes.

**D30 retention >25%:** El benchmark de Duolingo (~30%) es alcanzable dado que Renddi tiene un motivador externo que Duolingo no tiene: la PAES tiene fecha fija. Estudiantes que abandonan Duolingo lo hacen por falta de meta tangible; estudiantes PAES tienen un deadline real.

### 7.5.3 North Star Metric

La metrica norte de Renddi no es engagement sino **incremento de puntaje PAES estimado por semana activa.** El engagement es un medio, no un fin. Un estudiante que usa la app 5 minutos diarios pero sube 10 puntos PAES por semana es mas exitoso que uno que usa la app 30 minutos pero no mejora.

Definicion formal:
```
North Star = Δθ_PAES / semana_activa
```

Donde:
- `Δθ_PAES` es el cambio en la estimacion de puntaje PAES basada en el modelo IRT
- `semana_activa` es una semana con ≥3 sesiones completadas

**Objetivo:** +5 puntos PAES por semana activa (equivalente a +100 puntos en 20 semanas de uso activo).

---

## 7.6 Framework de experimentacion

### 7.6.1 A/B testing continuo

Todas las mecanicas de engagement estan sujetas a experimentacion controlada:

- **Infraestructura:** Feature flags + asignacion aleatoria por usuario
- **Metricas primarias:** North Star (Δθ_PAES/semana), D7 retention, session completion rate
- **Metricas de proteccion (guardrails):** `anxiety` promedio, `stress_level` promedio, tasa de desinstalacion. Si una variante incrementa engagement pero tambien incrementa anxiety, se descarta.
- **Significancia estadistica:** p < 0.05, poder estadistico minimo 0.80, tamano de efecto minimo detectable d = 0.10

### 7.6.2 Experimentos prioritarios

| Experimento | Hipotesis | Metricas |
|------------|-----------|----------|
| Streak freeze vs no freeze | El streak freeze reduce la ansiedad sin afectar retention | D7 ret., anxiety promedio |
| Push timing: personalizado vs fijo | Timing personalizado incrementa apertura de push | Click-through rate, session start |
| Celebracion intensidad: alta vs baja | Celebraciones mas intensas refuerzan self_efficacy | Post-celebration engagement, self_efficacy delta |
| Session length: 10 vs 15 vs 20 min | 15 min es el optimo para completion + learning | Session completion rate, mastery delta |
| Check-in emocional: obligatorio vs opcional | El check-in obligatorio mejora la deteccion sin reducir retention | Response rate, D7 retention, emotional_state precision |

---

## 7.7 Consideraciones eticas del engagement

### 7.7.1 Engagement responsable

Renddi adopta el framework de "Ethical Engagement" propuesto por Lyngs, Lukoff, Slovak, Seymour, Webb, Coughlin, Van Kleek y Shadbolt (2019), que distingue entre engagement que sirve los intereses del usuario y engagement que los explota:

**Permitido:**
- Notificaciones que recuerdan al estudiante su meta personal
- Gamificacion que celebra progreso real de aprendizaje
- Social features que generan accountability voluntaria

**Prohibido en Renddi:**
- Dark patterns: urgencia falsa, culpabilizacion, FOMO artificial
- Notificaciones manipulativas: "Tus amigos te estan superando" (comparacion agresiva)
- Mecanicas de apuesta: loot boxes, recompensas aleatorias sin relacion con aprendizaje
- Engagement vacio: actividades que incrementan tiempo de uso sin incrementar aprendizaje

### 7.7.2 Derecho a desconectarse

El estudiante tiene derecho absoluto a:
- Desactivar todas las notificaciones sin penalizacion
- Eliminar su cuenta y datos en cualquier momento (GDPR/Ley 21.719)
- Usar la app sin features sociales
- Establecer limites de uso diario ("No me dejes estudiar mas de 30 min")

*Conexion causal:* El respeto por la autonomia del estudiante es en si mismo una intervencion sobre `motivation` (v₂₀), ya que la autonomia es una de las tres necesidades basicas de la SDT cuya satisfaccion sostiene la motivacion intrinseca (Deci y Ryan, 2000).

---

# SHOKUNIN: Diseno de Experiencia Adaptativa para Renddi.app

## Capitulos 8-12 — Tesis de Especializacion UX/UI

---

# Capitulo 8. Personalizacion Adaptativa Basada en el Grafo Causal

## 8.1 Introduccion: las 21 variables como motor de personalizacion

La personalizacion adaptativa en Renddi.app no opera como un sistema de recomendacion convencional que selecciona contenido segun preferencias declaradas. Opera como un sistema de inferencia continua que lee el estado multidimensional del estudiante --- representado por 21 variables normalizadas en [0,1] --- y toma decisiones de diseno en tiempo real: que mostrar, como mostrarlo, cuando mostrarlo y con que nivel de complejidad visual y cognitiva.

El grafo causal de SENSEI (Caro Bruna, Cerda y Gutierrez, 2026, Capitulo 4) define no solo las variables sino las relaciones causales entre ellas: 30 aristas ponderadas con coeficientes de path calibrados desde evidencia meta-analitica. SHOKUNIN utiliza este grafo como input, no lo modifica. Su funcion es traducir el estado del grafo en decisiones de experiencia de usuario.

La distincion es critica: TAKUMI decide que accion tomar (e.g., "el estudiante necesita un ejercicio de respiracion"), SHOKUNIN decide como presentar esa accion (animacion guiada con feedback haptico, modal centrado con fondo difuminado, duracion visual de 3 minutos). KOTODAMA decide que decir ("Parece que estas un poco tenso. Probemos algo rapido."), SHOKUNIN decide donde y cuando mostrarlo (push notification vs. in-app card, antes de la sesion vs. al detectar ansiedad intra-sesion).

### 8.1.1 Las cuatro capas de personalizacion

SHOKUNIN opera en cuatro capas simultaneas, cada una alimentada por un subconjunto diferente de las 21 variables:

**Capa 1: Dificultad Adaptativa**
Variables primarias: mastery (v1), anxiety (v5), confidence (v6), cognitive_load (v4).
Decide: nivel de dificultad de los items presentados, velocidad de progresion, densidad de informacion por pantalla.

**Capa 2: Contenido Adaptativo**
Variables primarias: metacognition (v3), emotional_state (v7), frustration_tolerance (v9), motivation (v20).
Decide: formato de presentacion (video, texto, interactivo, quiz), nivel de scaffolding, tipo de feedback.

**Capa 3: UI Adaptativa**
Variables primarias: attention_span (v2), fatigue (v15), cognitive_load (v4), stress_level (v10).
Decide: complejidad visual de la interfaz, cantidad de elementos en pantalla, uso de animaciones, contraste y tipografia.

**Capa 4: Timing Adaptativo**
Variables primarias: time_management (v12), sleep_quality (v13), fatigue (v15), study_adherence (v11).
Decide: cuando enviar notificaciones, duracion sugerida de sesion, cuando proponer descansos, que dias priorizar que contenido.

---

## 8.2 Dificultad Adaptativa: IRT + Estado Emocional

### 8.2.1 El problema de la dificultad pura

Los sistemas adaptativos convencionales calibran la dificultad exclusivamente con IRT: estiman theta (habilidad latente) y seleccionan items cuya dificultad b maximize la informacion de Fisher. Este enfoque es psicometricamente optimo pero pedagogicamente incompleto. Un estudiante con theta = 0.8 y anxiety = 0.9 no deberia recibir el mismo item que un estudiante con theta = 0.8 y anxiety = 0.2.

La Attentional Control Theory (Eysenck, Derakshan, Santos y Calvo, 2007) establece que la ansiedad consume recursos del ejecutivo central de la memoria de trabajo. En terminos operacionales: un estudiante ansioso tiene menos capacidad de procesamiento disponible para resolver problemas, independientemente de su dominio del contenido. El peso causal anxiety -> mastery (w = -0.30) cuantifica este efecto.

### 8.2.2 Ajuste de dificultad por estado emocional

SHOKUNIN modifica el rango de seleccion IRT segun el estado emocional:

```
ALGORITMO: Ajuste_Dificultad_Emocional

INPUT:
  theta_est      // habilidad estimada via IRT
  anxiety        // v5, [0,1]
  confidence     // v6, [0,1]
  stress_level   // v10, [0,1]
  emotional_state // v7, [0,1]

// Factor de ajuste emocional
emotional_penalty = 0.40 * anxiety + 0.25 * stress_level
                  + 0.20 * (1 - confidence) + 0.15 * (1 - emotional_state)
// Rango: [0, 1], donde 1 = maxima penalizacion

// Ajuste del rango de dificultad
base_range_low  = theta_est - 0.5   // limite inferior ZDP
base_range_high = theta_est + 1.5   // limite superior ZDP

adjusted_range_high = theta_est + 1.5 * (1 - 0.6 * emotional_penalty)
adjusted_range_low  = theta_est - 0.5 - 0.3 * emotional_penalty

// Limites de seguridad
adjusted_range_high = max(adjusted_range_high, theta_est + 0.3)
adjusted_range_low  = max(adjusted_range_low, theta_est - 1.0)

// Objetivo de tasa de acierto
target_accuracy = 0.85 + 0.10 * emotional_penalty
// Rango: [0.85, 0.95]
// Un estudiante ansioso recibe items mas faciles (target ~0.92)
// Un estudiante tranquilo recibe items en el optimo de Wilson et al. (~0.85)

RETURN (adjusted_range_low, adjusted_range_high, target_accuracy)
```

La logica subyacente: cuando el estado emocional es desfavorable, el sistema comprime la ZDP hacia abajo, aumentando la proporcion de items que el estudiante puede resolver correctamente. Esto genera experiencias de exito que, segun Bandura (1997), constituyen la fuente mas potente de autoeficacia (mastery experiences). El ciclo virtuoso es: items mas faciles -> mas aciertos -> mayor confianza -> menor ansiedad -> restauracion gradual de la ZDP completa.

### 8.2.3 Transicion de regreso al nivel optimo

La restauracion de la dificultad normal no es instantanea. SHOKUNIN implementa una rampa de 3 sesiones:

```
ALGORITMO: Restauracion_Dificultad

INPUT:
  sesiones_desde_crisis  // contador desde que emotional_penalty < 0.3
  emotional_penalty_actual

IF emotional_penalty_actual < 0.30:
  sesiones_desde_crisis += 1
  factor_restauracion = min(sesiones_desde_crisis / 3, 1.0)
  // Sesion 1 post-crisis: 33% del rango normal
  // Sesion 2: 67%
  // Sesion 3+: 100%
ELSE:
  sesiones_desde_crisis = 0
  factor_restauracion = 0
```

---

## 8.3 Contenido Adaptativo: Formato y Scaffolding

### 8.3.1 Seleccion de formato segun perfil

No todos los estudiantes aprenden igual, y el mismo estudiante no aprende igual en distintos momentos. SHOKUNIN selecciona el formato de presentacion basandose en una combinacion de variables del grafo:

| Condicion del grafo | Formato preferido | Justificacion |
|---------------------|-------------------|---------------|
| cognitive_load > 0.7 | Visual (infografia, diagrama) | Reduce carga extrinseca (Sweller, 2011) |
| fatigue > 0.6 | Video corto (< 3 min) | Menor esfuerzo de procesamiento activo |
| metacognition > 0.7 | Texto con ejercicios intercalados | Aprovecha capacidad de automonitoreo |
| frustration_tolerance < 0.3 | Paso a paso guiado con feedback inmediato | Previene abandono por frustracion |
| motivation > 0.7 y anxiety < 0.3 | Desafio abierto (problem-solving) | Capitaliza estado de flow (Csikszentmihalyi, 1990) |
| attention_span < 0.4 | Micro-contenido (< 90 seg) | Adapta a capacidad atencional reducida |
| emotional_state < 0.4 | Contenido de baja demanda + validacion | Prioriza regulacion emocional |

### 8.3.2 Nivel de scaffolding adaptativo

El scaffolding --- la cantidad de soporte estructural que acompaña al contenido --- se calibra segun metacognition y mastery:

```
ALGORITMO: Nivel_Scaffolding

INPUT:
  metacognition  // v3
  mastery_local  // mastery del KC especifico
  intentos_item  // numero de intentos en el item actual

// Scaffolding base
IF mastery_local < 0.3:
  nivel = "ALTO"     // instrucciones detalladas, pasos visibles, hints proactivos
ELIF mastery_local < 0.6:
  nivel = "MEDIO"    // estructura visible, hints bajo demanda
ELIF mastery_local < 0.85:
  nivel = "BAJO"     // solo feedback post-respuesta
ELSE:
  nivel = "MINIMO"   // feedback diferido, sin pistas

// Ajuste por metacognicion
IF metacognition > 0.7:
  // Estudiante con buena metacognicion necesita menos scaffolding
  nivel = bajar_un_nivel(nivel)  // ALTO -> MEDIO, etc.
ELIF metacognition < 0.3:
  // Estudiante con baja metacognicion necesita mas estructura
  nivel = subir_un_nivel(nivel)  // BAJO -> MEDIO, etc.

// Ajuste por intentos
IF intentos_item >= 2 AND nivel != "ALTO":
  nivel = subir_un_nivel(nivel)  // Multiples errores -> mas ayuda

RETURN nivel
```

### 8.3.3 Tipos de feedback

SHOKUNIN define cuatro tipos de feedback, seleccionados segun el perfil:

1. **Feedback inmediato simple:** correcto/incorrecto con respuesta correcta. Para estudiantes con frustration_tolerance alta y metacognition alta. Eficiente pero frio.

2. **Feedback elaborado:** explicacion del por que, con referencia al concepto subyacente. Para estudiantes en fase de aprendizaje (mastery < 0.6). Shute (2008) documento que el feedback elaborado produce mayor aprendizaje que el feedback simple cuando los estudiantes tienen conocimiento previo insuficiente.

3. **Feedback emocional-cognitivo:** combina validacion emocional ("Buena pregunta, este es un tema complejo") con la explicacion tecnica. Para estudiantes con anxiety > 0.5 o emotional_state < 0.5. Integra el principio de KAZE de normalizar la dificultad.

4. **Feedback metacognitivo:** en lugar de dar la respuesta, pregunta "¿Que estrategia usaste?" o "¿Donde crees que estuvo el error?". Para estudiantes con metacognition > 0.5 y frustration_tolerance > 0.5. Promueve la reflexion y la transferencia.

---

## 8.4 UI Adaptativa: Complejidad Visual Segun Perfil

### 8.4.1 Principio de reduccion progresiva

La interfaz de Renddi.app no es estatica. Siguiendo el principio de progressive disclosure (Nielsen, 2006), SHOKUNIN ajusta la complejidad visual de la interfaz en funcion del estado cognitivo y emocional del estudiante.

Un estudiante con fatigue = 0.8 y cognitive_load = 0.7 no deberia ver la misma pantalla que un estudiante descansado y en flow. La teoria de la carga cognitiva (Sweller, 1988, 2011) distingue tres tipos de carga: intrinseca (complejidad inherente del material), extrinseca (carga anadida por el diseno) y germane (carga productiva de construccion de esquemas). SHOKUNIN minimiza la carga extrinseca cuando la carga intrinseca es alta o cuando el estudiante presenta fatiga.

### 8.4.2 Tres modos de interfaz

**Modo Completo (defecto):**
- Barra de progreso global visible
- Indicadores de racha y puntos
- Menu de navegacion completo
- Boton de ayuda, historial, perfil
- Animaciones y transiciones
- Activacion: attention_span > 0.5, fatigue < 0.5, cognitive_load < 0.6

**Modo Enfocado:**
- Solo el contenido actual y controles esenciales
- Sin barra de progreso
- Sin notificaciones en-app
- Transiciones minimas
- Tipografia ligeramente mas grande
- Activacion: attention_span < 0.5 OR fatigue > 0.5 OR cognitive_load > 0.6

**Modo Zen:**
- Pantalla minimalista: solo el item actual
- Fondo uniforme sin distractores
- Sin gamificacion visible
- Sin temporizadores
- Un solo boton de accion
- Activacion: anxiety > 0.7 OR (fatigue > 0.7 AND emotional_state < 0.4)

```
ALGORITMO: Seleccion_Modo_UI

INPUT:
  attention_span, fatigue, cognitive_load, anxiety, emotional_state

// Prioridad: Zen > Enfocado > Completo
IF anxiety > 0.70 OR (fatigue > 0.70 AND emotional_state < 0.40):
  RETURN "ZEN"
ELIF attention_span < 0.50 OR fatigue > 0.50 OR cognitive_load > 0.60:
  RETURN "ENFOCADO"
ELSE:
  RETURN "COMPLETO"
```

### 8.4.3 Micro-ajustes de UI

Ademas de los tres modos, SHOKUNIN aplica ajustes granulares:

| Variable | Ajuste UI | Rango |
|----------|-----------|-------|
| fatigue > 0.6 | Aumentar tamano de fuente +2pt | 16pt -> 18pt |
| cognitive_load > 0.7 | Reducir elementos en pantalla a max 3 | Dinamico |
| attention_span < 0.4 | Activar indicadores de progreso intra-item | Barra por paso |
| stress_level > 0.6 | Suavizar paleta de colores (reducir saturacion 20%) | HSL adjustment |
| anxiety > 0.5 | Eliminar temporizadores visibles | Ocultar timer |
| emotional_state < 0.4 | Mostrar mensajes de validacion sutiles | Micro-copy |

---

## 8.5 Timing Adaptativo: Cuando Sugerir Que

### 8.5.1 El momento correcto importa mas que el contenido correcto

La efectividad de cualquier intervencion educativa depende criticamente del timing. Kahneman (2011) documento que las decisiones humanas estan moduladas por factores circadianos, estados de fatiga y carga emocional. En el contexto de Renddi.app, enviar una notificacion de practica a las 11 PM a un estudiante con sleep_quality = 0.3 no solo es inutil --- es contraproducente.

### 8.5.2 Ventanas de oportunidad

SHOKUNIN calcula ventanas de oportunidad para cada tipo de intervencion:

```
ALGORITMO: Ventanas_Timing

INPUT:
  time_management   // v12: patron de horarios del estudiante
  sleep_quality      // v13: calidad de sueno reciente
  fatigue            // v15: nivel de fatiga actual
  study_adherence    // v11: patron de adherencia
  hora_actual        // timestamp
  historial_sesiones // ultimas 14 sesiones con hora y duracion

// 1. Detectar horario habitual del estudiante
horario_preferido = moda(historial_sesiones.hora_inicio)
ventana_habitual = [horario_preferido - 30min, horario_preferido + 60min]

// 2. Ajustar por fatiga y sueno
IF fatigue > 0.6 OR sleep_quality < 0.3:
  // Sugerir sesion mas corta, mas tarde en el dia
  duracion_sugerida = duracion_habitual * 0.6
  ventana_ajustada = ventana_habitual + 60min  // posponer 1 hora
ELSE:
  duracion_sugerida = duracion_habitual
  ventana_ajustada = ventana_habitual

// 3. Restricciones de higiene del sueno
hora_dormir_estimada = inferir_hora_dormir(historial_sesiones)
limite_nocturno = hora_dormir_estimada - 90min
// No enviar notificaciones de estudio despues del limite nocturno

// 4. Priorizar contenido segun momento del dia
IF hora_actual < 12:00:
  tipo_contenido = "COGNITIVO_ALTO"  // materia nueva, problemas complejos
ELIF hora_actual < 17:00:
  tipo_contenido = "PRACTICA"         // consolidacion, DOJO
ELIF hora_actual < limite_nocturno:
  tipo_contenido = "REVISION_LIGERA"  // flashcards, repaso espaciado
ELSE:
  tipo_contenido = "NO_ENVIAR"        // respetar descanso

RETURN (ventana_ajustada, duracion_sugerida, tipo_contenido)
```

### 8.5.3 Cadencia de notificaciones

La fatiga de notificaciones es un riesgo real. Oulasvirta, Rattenbury, Ma y Raita (2012) documentaron que las notificaciones excesivas generan habituacion y rechazo. SHOKUNIN limita las notificaciones segun el perfil:

| study_adherence | Max notificaciones/dia | Tipo |
|-----------------|----------------------|------|
| > 0.8 (alta) | 1 | Recordatorio suave |
| 0.5 - 0.8 | 2 | Recordatorio + motivacional |
| 0.3 - 0.5 | 2 | Motivacional + social |
| < 0.3 (baja) | 1 | Solo re-engagement de alta relevancia |

La logica para baja adherencia es contraintuitiva: menos notificaciones, no mas. Un estudiante que no esta usando la app y recibe 5 notificaciones diarias desarrolla reactancia psicologica (Brehm, 1966) y desinstala la aplicacion. Un unico mensaje bien calibrado tiene mayor probabilidad de re-engagement.

---

## 8.6 Algoritmo Central de Personalizacion

### 8.6.1 Arquitectura del motor

El motor de personalizacion de SHOKUNIN opera como un pipeline de 4 etapas:

```
ALGORITMO: Motor_Personalizacion_SHOKUNIN

INPUT:
  V = [v1, v2, ..., v21]  // vector de 21 variables normalizado [0,1]
  W_wright = [w1, w2, ..., w21]  // pesos Wright (centralidad en el grafo)
  accion_propuesta  // accion decidida por TAKUMI
  historial_acciones  // ultimas 20 acciones presentadas
  timestamp

// ===== ETAPA 1: PRIORIZACION POR PESO WRIGHT =====
// Los pesos Wright reflejan la centralidad de cada variable
// (cuantas otras variables influye/es influida)
// Variables con mayor centralidad tienen mayor peso en decisiones

prioridades = []
FOR cada variable v_i en V:
  deficit_i = target_i - v_i  // que tan lejos esta del optimo
  impacto_i = W_wright[i] * abs(deficit_i)
  prioridades.append((i, impacto_i, deficit_i))

prioridades.sort(descending=True, key=impacto_i)

// ===== ETAPA 2: SELECCION DE ACCION =====
// argmax(impacto_esperado x probabilidad_engagement)

acciones_candidatas = generar_acciones(prioridades[:5])
// Genera acciones para las 5 variables con mayor impacto ponderado

FOR cada accion a en acciones_candidatas:
  impacto_esperado = calcular_impacto(a, V, grafo_causal)
  prob_engagement = calcular_engagement(a, V, historial_acciones)
  score_a = impacto_esperado * prob_engagement
  a.score = score_a

mejor_accion = argmax(acciones_candidatas, key=score)

// ===== ETAPA 3: CONSTRAINTS =====
// Restriccion 1: No repetir formato en las ultimas 3 acciones
IF mejor_accion.formato IN ultimas_3_formatos(historial_acciones):
  mejor_accion = siguiente_mejor_con_formato_diferente(acciones_candidatas)

// Restriccion 2: Balance cognitivo/emocional
ratio_cognitivo = count(historial_acciones[-10:], tipo="cognitivo") / 10
IF ratio_cognitivo > 0.7:
  forzar_accion_emocional_o_conductual()
ELIF ratio_cognitivo < 0.3:
  forzar_accion_cognitiva()

// Restriccion 3: Respetar energia
IF fatigue > 0.7 OR sleep_quality < 0.3:
  filtrar_acciones_alta_demanda(acciones_candidatas)

// ===== ETAPA 4: PRESENTACION =====
modo_ui = Seleccion_Modo_UI(V)
formato = seleccionar_formato(mejor_accion, V)
scaffolding = Nivel_Scaffolding(V)
timing = Ventanas_Timing(V, timestamp)

RETURN Experiencia(
  accion = mejor_accion,
  modo_ui = modo_ui,
  formato = formato,
  scaffolding = scaffolding,
  timing = timing
)
```

### 8.6.2 Calculo de probabilidad de engagement

La probabilidad de engagement se estima con un modelo basado en la historia del estudiante:

```
FUNCION: calcular_engagement(accion, V, historial)

// Factores positivos
f1 = 0.30 * V[motivation]
f2 = 0.20 * V[emotional_state]
f3 = 0.15 * (1 - V[fatigue])
f4 = 0.15 * similitud_formatos_exitosos(accion.formato, historial)
f5 = 0.10 * novedad(accion, historial)
f6 = 0.10 * V[study_adherence]

prob = f1 + f2 + f3 + f4 + f5 + f6

// Penalizaciones
IF hora_fuera_de_ventana(timestamp):
  prob *= 0.5
IF acciones_hoy >= 3:
  prob *= 0.7

RETURN clamp(prob, 0.05, 0.95)
```

---

## 8.7 Cold Start: Del Diagnostico Inicial al Perfil Base

### 8.7.1 El problema del arranque en frio

Cuando un estudiante nuevo ingresa a Renddi.app, las 21 variables estan en estado de incertidumbre. El sistema no sabe si el estudiante es ansioso, motivado, organizado o desorganizado. Cada variable tiene un prior (valor inicial) con un sigma (incertidumbre) alto.

El cold start problem en personalizacion educativa es mas critico que en e-commerce: un producto mal recomendado en Amazon genera un click perdido; un item de dificultad inadecuada en Renddi genera frustracion, desmotivacion y potencialmente abandono permanente.

### 8.7.2 Diagnostico inicial en tres fases

**Fase 1: Onboarding contextual (5 minutos)**
Preguntas rapidas que inicializan las variables mas dificiles de inferir via stealth assessment:
- Vocational_clarity: "¿Tienes claro que quieres estudiar?" (slider 1-5)
- Anxiety: "Del 1 al 5, ¿cuanto te estresa la idea de la PAES?"
- Sleep_quality: "¿A que hora te duermes habitualmente?"
- Study_adherence (historica): "¿Cuantas horas a la semana estudias actualmente?"
- Growth_mindset: "¿Crees que tu capacidad en matematicas puede mejorar con practica?"

Formato: cards deslizables con una pregunta por pantalla, progreso visible, opcion de saltar.

**Fase 2: CAT reducido (5-7 minutos)**
Testing adaptativo computarizado que inicializa mastery por KC y estima theta global.
Variables inicializadas: mastery (v1), confidence (v6, via calibracion), cognitive_load (v4, via tiempos de respuesta).
Stealth assessment paralelo: attention_span (degradacion intra-test), frustration_tolerance (persistencia ante items dificiles).

**Fase 3: Primera sesion guiada (10 minutos)**
Sesion de practica con scaffolding maximo que completa la inicializacion:
- Metacognition: observar si el estudiante revisa sus respuestas, pide ayuda, o avanza sin reflexionar
- Emotional_state: check-in emocional pre y post sesion
- Formato preferido: ofrecer 2-3 formatos y observar engagement

### 8.7.3 Perfil base y valores por defecto

Las variables no medidas en el diagnostico inicial reciben valores por defecto con sigma alto:

| Variable | Valor por defecto | Sigma | Justificacion |
|----------|-------------------|-------|---------------|
| social_support | 0.50 | 0.30 | Neutral, sin informacion |
| parental_support | 0.50 | 0.30 | Neutral, sin informacion |
| physical_activity | 0.40 | 0.25 | Sesgo conservador hacia sedentarismo adolescente |
| screen_time | 0.60 | 0.20 | Sesgo hacia uso alto (Twenge, 2017) |
| time_management | 0.40 | 0.25 | La mayoria de los estudiantes reporta dificultades |
| stress_level | 0.50 | 0.25 | Neutral |

### 8.7.4 Refinamiento progresivo con uso

El sigma de cada variable decrece con cada observacion. SHOKUNIN utiliza un modelo bayesiano simplificado donde cada dato nuevo actualiza el posterior:

```
FUNCION: actualizar_variable(v_i, observacion, sigma_actual)

// Factor de aprendizaje: cuanto pesa la observacion nueva
learning_rate = sigma_actual^2 / (sigma_actual^2 + sigma_observacion^2)

// Actualizacion del valor
v_i_nuevo = v_i + learning_rate * (observacion - v_i)

// Reduccion de incertidumbre
sigma_nuevo = sigma_actual * sqrt(1 - learning_rate)

RETURN (v_i_nuevo, sigma_nuevo)
```

Despues de 5 sesiones, la mayoria de las variables tiene sigma < 0.15 (confianza razonable). Despues de 15 sesiones, sigma < 0.10 (perfil estable).

---

## 8.8 Evolucion Temporal: Adaptacion al Cambio

### 8.8.1 El perfil del estudiante no es estatico

Un error comun en sistemas adaptativos es tratar el perfil del estudiante como una fotografia fija. En realidad, las 21 variables cambian continuamente:

- **Cambios rapidos (intra-sesion):** fatigue sube, attention_span baja, cognitive_load fluctua.
- **Cambios medios (dia a dia):** emotional_state, anxiety, sleep_quality varian segun circunstancias.
- **Cambios lentos (semanas):** mastery crece, study_adherence se estabiliza, metacognition mejora.
- **Cambios contextuales (por evento):** anxiety sube drasticamente antes de un simulacro, motivation cae despues de un resultado bajo.

### 8.8.2 Ventanas temporales de actualizacion

SHOKUNIN utiliza tres ventanas temporales para cada variable:

```
ALGORITMO: Actualizacion_Temporal

// Valor instantaneo: ultima observacion directa
v_instantaneo = ultima_observacion

// Valor tendencial: media movil ponderada de los ultimos 7 dias
v_tendencial = weighted_moving_average(observaciones_7d, decay=0.85)

// Valor estable: media de los ultimos 30 dias
v_estable = mean(observaciones_30d)

// El valor usado para decisiones depende del tipo de variable
IF variable IN variables_rapidas:  // fatigue, attention_span, cognitive_load
  v_decisional = 0.60 * v_instantaneo + 0.30 * v_tendencial + 0.10 * v_estable
ELIF variable IN variables_medias:  // anxiety, emotional_state, sleep_quality
  v_decisional = 0.30 * v_instantaneo + 0.45 * v_tendencial + 0.25 * v_estable
ELSE:  // mastery, metacognition, growth_mindset
  v_decisional = 0.15 * v_instantaneo + 0.35 * v_tendencial + 0.50 * v_estable
```

### 8.8.3 Deteccion de cambios bruscos

Cuando una variable cambia mas de 0.2 en menos de 48 horas, SHOKUNIN activa un protocolo de verificacion:

1. Si anxiety sube 0.3 en un dia: ¿hay simulacro proximo? ¿Periodo de examenes en el colegio?
2. Si motivation cae 0.25 en 3 dias: ¿resultado negativo reciente? ¿Conflicto social?
3. Si study_adherence cae de 0.8 a 0.3: ¿enfermedad? ¿Cambio de rutina?

El sistema no asume la causa --- la infiere del contexto (calendario escolar, historial de eventos) y, cuando la incertidumbre es alta, delega a MIYAGI para un check-in conversacional.

### 8.8.4 Arquetipos dinamicos

Los estudiantes no pertenecen permanentemente a un arquetipo. Un estudiante que empezo como Matias (Ansioso) puede evolucionar hacia Valentina (Aplicada) despues de 4 semanas de intervenciones de KAZE exitosas. SHOKUNIN recalcula la clasificacion arquetipal cada 2 semanas y ajusta la estrategia de personalizacion en consecuencia.

```
ALGORITMO: Recalculo_Arquetipo

// Cada 14 dias:
perfil_actual = V[1..21]  // vector completo
distancias = []

FOR cada arquetipo A en ARQUETIPOS:
  d = distancia_euclidiana(perfil_actual, A.centroide)
  distancias.append((A.nombre, d))

arquetipo_dominante = argmin(distancias, key=d)
arquetipo_secundario = segundo_minimo(distancias, key=d)

// El estudiante puede tener rasgos de dos arquetipos
IF distancias[segundo].d < 1.3 * distancias[primero].d:
  perfil = HIBRIDO(arquetipo_dominante, arquetipo_secundario)
ELSE:
  perfil = arquetipo_dominante
```

---

# Capitulo 9. Testing y Validacion UX

## 9.1 Plan de Usability Testing

### 9.1.1 Justificacion del testing iterativo

El diseno de una aplicacion educativa adaptativa no puede validarse exclusivamente mediante revision teorica. Nielsen (1993) establecio que el testing con usuarios es el metodo mas efectivo para identificar problemas de usabilidad, y que 5 usuarios descubren aproximadamente el 85% de los problemas. Krug (2014) enfatizo que un solo dia de testing con 3-4 usuarios es infinitamente mas valioso que meses de discusion interna sobre el diseno.

En el contexto de Renddi.app, el testing es particularmente critico porque:
1. El usuario objetivo (adolescente chileno de 16-18 anos) tiene expectativas de UX formadas por TikTok, Instagram y juegos moviles, no por plataformas educativas tradicionales.
2. La personalizacion adaptativa introduce complejidad invisible: el sistema se comporta diferente para cada usuario, lo que multiplica los escenarios a testear.
3. Las intervenciones emocionales (KAZE) y vocacionales (COMPASS) operan en dominios sensibles donde un error de tono puede generar rechazo permanente.

### 9.1.2 Fase 1: Guerrilla Testing (pre-lanzamiento)

**Objetivo:** Identificar problemas criticos de usabilidad antes del lanzamiento.
**Participantes:** 5-8 estudiantes de 3ro y 4to medio, reclutados de 2-3 establecimientos diferentes (municipal, subvencionado, particular).
**Duracion:** 1 semana de testing, 45 minutos por sesion por participante.
**Metodologia:** Think-aloud protocol (Ericsson y Simon, 1993), donde el participante verbaliza su pensamiento mientras interactua con la app.

**Tareas del protocolo:**

| # | Tarea | Metrica principal | Criterio de exito |
|---|-------|-------------------|-------------------|
| T1 | Completar onboarding | Tiempo, tasa de abandono | < 8 min, 0% abandono |
| T2 | Completar diagnostico CAT | Comprension, frustracion observada | Termina sin ayuda |
| T3 | Realizar primera sesion guiada | Engagement, comprension del flujo | Completa > 80% |
| T4 | Interpretar su dashboard de progreso | Precision de interpretacion | > 70% correcto |
| T5 | Navegar entre secciones | Errores de navegacion | < 2 errores |
| T6 | Responder a intervencion emocional | Naturalidad percibida | No reporta incomodidad |
| T7 | Configurar notificaciones | Completitud | Configura al menos 1 |

**Entregables:**
- Lista priorizada de problemas (severidad 1-4, segun Nielsen)
- Video highlights de momentos criticos (con consentimiento)
- Iteracion del diseno en ciclo de 3 dias

### 9.1.3 Fase 2: Beta Cerrada (post-lanzamiento temprano)

**Objetivo:** Validar la experiencia completa durante uso sostenido.
**Participantes:** 50 estudiantes, distribuidos:
- 20 de establecimientos municipales/SLEP
- 15 de establecimientos subvencionados
- 15 de establecimientos particulares
- Balanceados por genero, region (al menos 3 regiones), y nivel de rendimiento previo (auto-reportado)

**Duracion:** 2 semanas de uso libre.
**Recoleccion de datos:**
- Analytics automatico: sesiones, duracion, completion rate, flujos de navegacion
- SUS y NPS al dia 7 y dia 14
- Entrevista semi-estructurada al dia 14 (20 min, remota)
- Heatmaps y session recordings (con consentimiento informado)

**Metricas de exito beta:**

| Metrica | Objetivo dia 7 | Objetivo dia 14 | Fuente |
|---------|-----------------|------------------|--------|
| Retencion D7 | > 50% | — | Analytics |
| Retencion D14 | — | > 35% | Analytics |
| Sesiones/semana | > 3 | > 4 | Analytics |
| SUS | > 70 | > 75 | Cuestionario |
| NPS | > 30 | > 40 | Cuestionario |

### 9.1.4 Fase 3: A/B Testing en Produccion

**Objetivo:** Optimizar decisiones de diseno con significancia estadistica.
**Metodologia:** Experimentos controlados aleatorizados con dos o mas variantes.
**Infraestructura:** Feature flags con asignacion aleatoria por usuario, sin contaminacion entre grupos.

**Experimentos prioritarios:**

| # | Hipotesis | Variante A (control) | Variante B | Metrica primaria | Tamano de muestra |
|---|-----------|---------------------|------------|------------------|-------------------|
| E1 | El modo Zen reduce abandono en estudiantes ansiosos | UI estandar | UI Zen automatico | Completion rate | 200 (100/100) |
| E2 | Feedback emocional-cognitivo mejora retencion vs. feedback simple | Feedback simple | Feedback emocional | Retencion D14 | 300 (150/150) |
| E3 | Notificaciones personalizadas por horario mejoran adherencia | Horario fijo (9 AM) | Horario adaptativo | Sesiones/semana | 400 (200/200) |
| E4 | Micro-sesiones (5 min) mejoran engagement inicial vs. sesiones estandar (15 min) | 15 min default | 5 min default | D7 retention | 200 (100/100) |

**Criterio de significancia:** p < 0.05 bilateral, con correccion de Bonferroni para comparaciones multiples. Se usara calculo de poder estadistico (power analysis) previo para determinar duracion minima del experimento. Se requiere un minimo de 2 semanas de exposicion antes de evaluar resultados.

---

## 9.2 Metricas UX

### 9.2.1 System Usability Scale (SUS)

El SUS (Brooke, 1996) es el instrumento de evaluacion de usabilidad mas utilizado a nivel mundial, con mas de 10.000 aplicaciones documentadas. Consiste en 10 items con escala Likert de 5 puntos que producen un puntaje entre 0 y 100.

**Objetivo para Renddi.app: SUS > 80.**

Un SUS de 80 ubica al producto en el percentil 90 de usabilidad segun la base de datos normativa de Sauro y Lewis (2016). Dado que el usuario objetivo es un adolescente digital-native con alta exigencia de UX, un SUS inferior a 68 (promedio) seria insuficiente.

**Adaptacion al contexto chileno:**
- Traduccion al espanol con validacion semantica (back-translation)
- Reemplazo de terminos formales por lenguaje juvenil donde corresponda
- Administracion digital (formulario en-app), no en papel

### 9.2.2 Net Promoter Score (NPS)

**Objetivo: NPS > 50.**

El NPS (Reichheld, 2003) mide la probabilidad de recomendacion mediante una unica pregunta: "¿Que tan probable es que recomiendes Renddi a un amigo o companero?" (0-10). Un NPS > 50 es considerado excelente en cualquier industria; en EdTech es excepcional (el promedio del sector se ubica entre 20-30).

**Segmentacion del NPS:**
- Por arquetipo: ¿los Matias (Ansiosos) tienen NPS diferente que las Valentina (Aplicadas)?
- Por establecimiento: ¿hay diferencia municipal vs. particular?
- Por tiempo de uso: ¿el NPS mejora con el uso sostenido?

### 9.2.3 Task Completion Rate (TCR)

**Objetivo: TCR > 90%.**

El TCR mide la proporcion de tareas que el usuario completa exitosamente sin asistencia externa. Sauro y Lewis (2016) establecieron que un TCR del 78% es el promedio en estudios de usabilidad. Para una app de uso diario con tareas repetitivas (completar una sesion, revisar progreso), un TCR < 85% indica friccion significativa.

**Tareas monitoreadas:**
1. Completar sesion de practica: objetivo > 92%
2. Navegar al dashboard de progreso: objetivo > 95%
3. Configurar horario de estudio: objetivo > 85%
4. Completar check-in emocional: objetivo > 90%
5. Interpretar resultado de simulacro: objetivo > 80%

### 9.2.4 Time on Task (ToT)

Para cada tarea critica, se define un benchmark de tiempo:

| Tarea | Benchmark | Aceptable | Problematico |
|-------|-----------|-----------|--------------|
| Iniciar sesion de practica | < 15 seg | 15-30 seg | > 30 seg |
| Encontrar progreso por materia | < 10 seg | 10-20 seg | > 20 seg |
| Completar check-in emocional | < 30 seg | 30-60 seg | > 60 seg |
| Cambiar de materia en sesion | < 5 seg | 5-10 seg | > 10 seg |

### 9.2.5 Error Rate

**Objetivo: Error rate < 5% por sesion.**

Se define "error" como cualquier accion que el usuario debe deshacer o rehacer: tocar el boton equivocado, navegar al lugar incorrecto, enviar una respuesta no intencionada. Un error rate > 10% indica problemas de diseno de interaccion que requieren intervencion inmediata.

---

## 9.3 Herramientas de Medicion

### 9.3.1 Heatmaps y Session Recording

**Herramienta primaria: Microsoft Clarity (gratuito) o Hotjar (freemium).**

Clarity proporciona heatmaps de taps, scroll depth y grabaciones de sesion sin costo, lo que es relevante para una startup en etapa temprana. Hotjar ofrece funcionalidad similar con encuestas in-app integradas.

**Datos a recolectar:**
- Heatmaps de taps por pantalla: ¿donde tocan los usuarios? ¿Hay zonas muertas?
- Scroll depth: ¿hasta donde bajan en la pantalla de resultados?
- Rage clicks: toques repetidos en el mismo lugar (indicador de frustracion)
- Dead clicks: toques en elementos no interactivos (indicador de confision)
- Session recordings: muestra de 10% de las sesiones para analisis cualitativo

### 9.3.2 Analytics de Producto

**Herramienta primaria: Mixpanel o Amplitude.**

Ambas plataformas permiten analisis de eventos, funnels, cohortes y retencion. La eleccion depende del pricing al momento del lanzamiento.

**Eventos criticos a trackear:**

| Evento | Propiedades | Uso |
|--------|------------|-----|
| session_start | duracion, materia, tipo_contenido | Engagement |
| item_answered | correcto, tiempo, KC, dificultad_IRT | Aprendizaje |
| session_completed | duracion_real, completion_pct | Adherencia |
| session_abandoned | punto_abandono, tiempo_en_sesion | Puntos de friccion |
| emotional_checkin | valor, contexto | Estado emocional |
| notification_opened | tipo, hora, tiempo_desde_envio | Efectividad de push |
| feature_used | feature_name, tiempo_de_uso | Descubrimiento |
| onboarding_step | paso, completo, tiempo | Conversion |

### 9.3.3 Encuestas In-App

Encuestas breves (1-3 preguntas) desplegadas en momentos estrategicos:
- Post-sesion (cada 5 sesiones): "¿Que tan util fue esta sesion?" (1-5)
- Post-intervencion emocional: "¿Te sirvio este ejercicio?" (si/no/parcialmente)
- Semanal: micro-SUS (2 preguntas) o NPS

---

## 9.4 Entrevistas con Usuarios Chilenos

### 9.4.1 Guia de Entrevista Semi-Estructurada

**Duracion:** 20-25 minutos.
**Formato:** Remoto via videollamada o presencial.
**Grabacion:** Con consentimiento informado del participante y apoderado (menores de 18).

**Bloque 1: Contexto (5 min)**
1. "Cuentame como te estas preparando para la PAES actualmente."
2. "¿Usas alguna app o plataforma para estudiar? ¿Cual? ¿Que te gusta y que no?"
3. "¿Cuantas horas a la semana dedicas a prepararte?"

**Bloque 2: Experiencia con Renddi (10 min)**
4. "¿Que es lo primero que haces cuando abres la app?"
5. "¿Hay algo que te cuesta encontrar o entender?"
6. "Cuando la app te sugiere un ejercicio de respiracion o algo emocional, ¿como reaccionas?"
7. "¿Las notificaciones te parecen utiles o molestas?"
8. "¿Sientes que la app entiende como te va? ¿Por que?"

**Bloque 3: Emocional/Social (5 min)**
9. "¿Te sientes comodo compartiendo como te sientes con la app?"
10. "¿Hablas con amigos sobre la PAES? ¿Les recomendarias esta app?"
11. "¿Hay algo que la app no haga y te gustaria que hiciera?"

**Bloque 4: Cierre (3 min)**
12. "Si pudieras cambiar una sola cosa de la app, ¿cual seria?"
13. "¿Algo mas que quieras contarme?"

### 9.4.2 Reclutamiento

**Canal primario:** Redes sociales (Instagram, TikTok) con convocatoria abierta.
**Canal secundario:** Contacto con orientadores vocacionales y profesores de establecimientos.
**Incentivo:** Gift card de $5.000 CLP o equivalente en credito premium en Renddi.

**Criterios de inclusion:**
- 16-19 anos
- Inscrito o con intencion de rendir la PAES
- Al menos 3 sesiones completadas en Renddi (para entrevistas post-uso)
- Diversidad de NSE, region y genero

**Tamano de muestra por ronda:** 6-8 participantes (suficiente para saturacion tematica segun Guest, Bunce y Johnson, 2006).

### 9.4.3 Analisis de las entrevistas

Analisis tematico (Braun y Clarke, 2006) con codificacion inductiva:
1. Transcripcion de entrevistas
2. Codificacion abierta: identificar patrones emergentes
3. Agrupacion en temas: usabilidad, emocion, motivacion, contenido, social
4. Triangulacion con datos cuantitativos (analytics + SUS + NPS)

---

## 9.5 Analisis de Cohortes por Arquetipo

### 9.5.1 Segmentacion por arquetipo

Los 10 arquetipos definidos en la tesis principal (Capitulo 7) no son solo herramientas de simulacion: son segmentos de usuarios con necesidades UX diferenciadas. SHOKUNIN analiza las metricas por arquetipo para identificar que funciona para cada perfil:

| Arquetipo | Hipotesis UX | Metrica clave | Intervencion si falla |
|-----------|-------------|---------------|----------------------|
| Valentina (Aplicada) | Optimiza con datos y feedback analitico | Completion rate, mastery delta, uso de estadisticas | Contenido avanzado, predicciones de puntaje |
| Matias (Ansioso) | Se beneficia del modo Zen y validacion emocional | Completion rate en modo Zen vs. normal, ansiedad pre/post | Refinar triggers de activacion, normalizar errores |
| Camila (Resiliente) | Tolerancia alta, responde a progreso concreto | Rendimiento estable, engagement con NAKAMA | Construir red social, conectar con proposito vocacional |
| Benjamin (Gamer) | Alta engagement con gamificacion y desafios | Sesiones/semana, streak length, XP acumulado | Calibrar recompensas, desafios entre amigos |
| Isidora (Presionada) | Riesgo de sobre-estudio y burnout | Fatigue promedio, sesiones excesivas, stress_level | Limites de sesion suaves, celebrar descanso |
| Diego (Deportista) | Responde a metaforas deportivas y sesiones cortas | Adherencia post-entrenamiento, sesiones completadas | Conectar deporte con carrera, sesiones ultra-cortas |
| Francisca (TDAH) | Necesita variedad y micro-sesiones | Diversidad de formatos usados, session completion en micro vs. estandar | Rotar formatos activamente, re-engagement creativo |
| Joaquin (Tardio) | Responde a conexion vocacional y eliminacion de barreras | Engagement post-intervencion COMPASS, D7 retention | Activar motivacion latente, nunca comparar |
| Tomas (Social) | Se beneficia de features grupales y competencia | Uso de features NAKAMA, desafios grupales completados | Priorizar funciones sociales, retencion del grupo |
| Martina (Quemada) | Necesita protocolo de pausa y contencion | Fatigue, emotional_state, dias de descanso tomados | Ocultar metricas, celebrar descanso, monitoreo de recaida |

### 9.5.2 Dashboards de cohortes

Cada cohorte arquetipal tiene un dashboard interno con:
- Retencion D1, D7, D14, D30 segmentada
- SUS y NPS promedio del cohorte
- Funnel de conversion (onboarding -> primera sesion -> habito)
- Heatmap de funciones mas usadas
- Top 5 puntos de abandono

---

## 9.6 Iteracion: Ciclos de 2 Semanas

### 9.6.1 Cadencia de iteracion

SHOKUNIN opera en sprints de 2 semanas alineados con el proceso de desarrollo:

**Semana 1:**
- Lunes-martes: Analisis de datos del sprint anterior (metricas, entrevistas, heatmaps)
- Miercoles: Priorizacion de mejoras por impacto (framework RICE: Reach, Impact, Confidence, Effort)
- Jueves-viernes: Diseno de soluciones (wireframes, prototipos)

**Semana 2:**
- Lunes-miercoles: Implementacion de mejoras
- Jueves: Testing interno (dogfooding)
- Viernes: Release a produccion con feature flags

### 9.6.2 Priorizacion por impacto

Cada mejora se evalua con la formula RICE:

```
RICE_score = (Reach * Impact * Confidence) / Effort

// Reach: % de usuarios afectados (0-100)
// Impact: tamano del efecto esperado (0.25 = minimo, 3 = masivo)
// Confidence: nivel de certeza (0.5 = baja, 1.0 = alta)
// Effort: persona-dias estimados (1-20)
```

Ejemplo: "Eliminar temporizador visible para estudiantes ansiosos"
- Reach: 30% (estudiantes con anxiety > 0.5)
- Impact: 2 (mejora significativa en completion rate)
- Confidence: 0.8 (evidencia de guerrilla testing)
- Effort: 2 dias
- RICE = (30 * 2 * 0.8) / 2 = 24

### 9.6.3 Criterios de rollback

Si una mejora desplegada genera degradacion en metricas criticas, se revierte automaticamente:
- Completion rate cae > 5% respecto al baseline
- Error rate sube > 3% respecto al baseline
- NPS cae > 10 puntos en la cohorte afectada
- Tasa de desinstalacion sube > 2% en 48 horas

---

# Capitulo 10. Integracion con Equipos de Agentes

## 10.1 Con TAKUMI (Acciones): Como Presentar lo que TAKUMI Disena

### 10.1.1 Separacion de responsabilidades

TAKUMI disena las intervenciones: que accion ejecutar, sobre que variable, con que parametros. SHOKUNIN disena la presentacion: como se ve, como se siente, como transiciona. Esta separacion sigue el principio Model-View de la ingenieria de software, donde la logica de negocio (TAKUMI) se desacopla de la capa de presentacion (SHOKUNIN).

### 10.1.2 Protocolo de entrega TAKUMI -> SHOKUNIN

Cuando TAKUMI decide una accion, entrega a SHOKUNIN un objeto de intervencion:

```
IntervencionTAKUMI = {
  tipo: "emocional" | "cognitivo" | "conductual" | "social" | "vocacional",
  agente_origen: "KAZE" | "SENPAI" | "KAIZEN" | ...,
  accion: "breathing_exercise" | "practice_session" | "habit_reminder" | ...,
  variables_target: ["anxiety", "emotional_state"],
  urgencia: 0.0 - 1.0,
  duracion_estimada: minutos,
  parametros: { ... }  // especificos de la accion
}
```

SHOKUNIN recibe este objeto y genera una experiencia:

```
ExperienciaSHOKUNIN = {
  formato_visual: "modal_centrado" | "card_inline" | "pantalla_completa" | ...,
  animacion_entrada: "fade_in" | "slide_up" | "none",
  paleta_colores: adaptada_a_contexto_emocional,
  tipografia: ajustada_a_fatigue,
  duracion_visual: minutos,
  interacciones: ["tap_to_start", "swipe_to_dismiss", ...],
  feedback_haptico: true | false,
  sonido: "ambient_calm" | "none" | "success_chime",
  transicion_salida: "fade_to_session" | "return_to_dashboard"
}
```

### 10.1.3 Ejemplo: Breathing Exercise Pre-PAES

TAKUMI detecta: anxiety = 0.82, hay simulacro manana. Decide: breathing_exercise de 3 minutos.

SHOKUNIN decide la presentacion:

**Diseno visual:**
- Pantalla completa con fondo gradiente azul oscuro -> azul claro (colores asociados a calma, Elliot y Maier, 2014)
- Circulo central pulsante que se expande (inhalar) y contrae (exhalar)
- Texto minimo: solo "Inhala... Exhala..." con tipografia sans-serif suave
- Sin barra de progreso temporal (evitar presion de tiempo en contexto de ansiedad)
- Indicador sutil de ciclos completados (4 puntos que se llenan)

**Flujo de interaccion:**
1. Card in-app: "¿Quieres hacer un ejercicio de respiracion rapido?" (2 botones: "Si, vamos" / "Ahora no")
2. Si acepta: transicion slide-up a pantalla completa
3. Feedback haptico suave en cada transicion inhalar/exhalar (si el dispositivo lo soporta)
4. Al completar 4 ciclos: animacion de cierre con mensaje "Listo. Estas preparado."
5. Transicion fade a la pantalla anterior

**Adaptaciones por perfil:**
- Si fatigue > 0.6: reducir a 3 ciclos en vez de 4
- Si el estudiante ha rechazado breathing exercises 2 veces seguidas: no ofrecer, sustituir por mensaje de validacion de KOTODAMA
- Si es primera vez: agregar instruccion breve ("Sigue el circulo con tu respiracion")

---

## 10.2 Con KOTODAMA (Comunicacion): Contexto Visual de los Mensajes

### 10.2.1 Push Notifications

KOTODAMA redacta el copy de cada push notification. SHOKUNIN define el formato, preview y deep link:

| Tipo de mensaje | Formato push | Preview | Deep link |
|-----------------|-------------|---------|-----------|
| Recordatorio de estudio | Titulo + cuerpo (2 lineas) | "Tu sesion de hoy: Matematica (15 min)" | /sesion/nueva?materia=mat |
| Motivacional | Solo titulo | "3 dias seguidos, sigue asi." | /dashboard/progreso |
| Emocional | Titulo + emoji sutil | "¿Como te sientes hoy?" | /checkin/emocional |
| Social | Titulo + nombre de contacto | "Tu amigo completó su sesion hoy" | /social/actividad |
| Vocacional | Titulo + carrera | "Dato: Ingenieria Civil tiene 92% de empleabilidad" | /vocacional/explorar |

**Reglas de formato:**
- Maximo 50 caracteres en titulo, 100 en cuerpo
- No usar signos de exclamacion multiples
- No usar mayusculas completas (evitar percepcion de grito)
- Hora de envio: solo dentro de la ventana calculada por Timing Adaptativo
- Rich notifications (imagen): solo para hitos importantes (racha de 7 dias, mejora de puntaje)

### 10.2.2 In-App Messages

Los mensajes in-app tienen mas espacio y contexto. SHOKUNIN define ubicacion, timing y diseno:

**Ubicacion:**
- **Banner superior:** informacion no urgente (actualizaciones, tips). Descartable con swipe.
- **Card inline:** insercion en el flujo natural (entre ejercicios, al inicio de sesion). Mayor engagement.
- **Modal centrado:** intervencion que requiere atencion (check-in emocional, alerta importante). Usa fondo difuminado.
- **Bottom sheet:** opciones de accion (elegir materia, configurar horario). Gesto natural de arrastrar hacia arriba.

**Timing in-app:**
- No interrumpir durante un item de practica
- Mostrar mensajes motivacionales al completar sesion (momento de alta receptividad)
- Check-in emocional al inicio de sesion, no al final (para calibrar la sesion)
- Mensajes vocacionales en el dashboard, nunca durante practica

---

## 10.3 Con Agentes del Grafo: Visualizacion del Progreso

### 10.3.1 Radar Chart Simplificado

Las 21 variables del grafo son demasiadas para mostrar al usuario directamente. SHOKUNIN agrupa las variables en 5-7 dimensiones visuales:

| Dimension visual | Variables agrupadas | Etiqueta para el usuario |
|------------------|--------------------|-|
| Conocimiento | mastery (v1) | "Dominio" |
| Concentracion | attention_span (v2), cognitive_load (v4), fatigue (v15) | "Enfoque" |
| Bienestar | anxiety (v5), emotional_state (v7), stress_level (v10) | "Bienestar" |
| Habitos | study_adherence (v11), time_management (v12), sleep_quality (v13) | "Habitos" |
| Motivacion | motivation (v20), self_efficacy (v8), growth_mindset (v21) | "Motivacion" |
| Social | social_support (v17), parental_support (v18) | "Red de apoyo" |
| Vocacion | vocational_clarity (v19) | "Claridad vocacional" |

**Calculo de cada dimension:**
```
dimension_valor = weighted_average(variables_del_grupo)
// Pesos internos por variable segun su centralidad en el grafo
```

**Diseno del radar chart:**
- 5 o 7 ejes (configurable por el usuario, default 5: Dominio, Enfoque, Bienestar, Habitos, Motivacion)
- Escala 0-100 (no 0-1, para mejor comprension)
- Area sombreada con color asociado al nivel general (verde > 60, amarillo 40-60, rojo < 40)
- Comparacion temporal: superponer radar actual con radar de hace 2 semanas (linea punteada)
- Tap en cada eje: detalle de las variables que lo componen, con mini-grafico de tendencia

### 10.3.2 Barra de Progreso PAES Estimado

Una de las funciones mas esperadas por los usuarios: estimar su puntaje PAES actual. SHOKUNIN presenta esta estimacion con cuidado:

**Calculo (via SENPAI):**
```
puntaje_estimado = transformar_theta_a_escala_PAES(theta_global)
// Escala PAES: 100-1000, media ~500, DE ~110
intervalo_confianza = calcular_IC_95(theta_global, SE_theta)
```

**Diseno visual:**
- Barra horizontal con gradiente de color (rojo -> amarillo -> verde)
- Puntaje estimado como numero grande central
- Intervalo de confianza como rango sombreado
- Texto: "Tu puntaje estimado: 620 (rango probable: 580-660)"
- Flecha de tendencia: si mejoro, estable o empeoro respecto a la estimacion anterior
- Disclaimer sutil: "Esta es una estimacion basada en tu practica, no un puntaje oficial"

**Precauciones:**
- No mostrar la primera semana (insuficiente data para estimacion confiable)
- Actualizar semanalmente, no en tiempo real (evitar ansiedad por fluctuaciones)
- Si anxiety > 0.7: mostrar solo la tendencia ("Vas mejorando"), no el numero

### 10.3.3 Indicadores Emocionales Sutiles

SHOKUNIN no muestra al usuario un "nivel de ansiedad: 0.73". Eso seria clinico y potencialmente generador de ansiedad. En su lugar, usa indicadores sutiles:

- **Color del avatar/icono:** gradiente sutil que refleja emotional_state (tonos calidos si esta bien, tonos neutros si esta bajo)
- **Mensaje de bienvenida adaptativo:** "Hola de nuevo" (neutro) vs. "Buena racha, sigue asi" (positivo) vs. "Que bueno verte, vamos a tu ritmo hoy" (cuando emotional_state < 0.4)
- **Sugerencia de sesion:** la duracion sugerida refleja fatigue sin explicitarlo ("Sesion de 10 min" cuando fatigue > 0.6 vs. "Sesion de 25 min" cuando esta descansado)

---

## 10.4 Con MIYAGI: Diseno del Chat Interface

### 10.4.1 Personalidad Visual de MIYAGI

MIYAGI es el orquestador, pero para el usuario es el "coach". Su presencia visual debe transmitir confianza, cercania y competencia:

**Avatar:**
- Diseno: ilustracion minimalista, no fotografica ni hiperrealista
- Estilo: flat design con sombras suaves, colores institucionales de Renddi
- Genero: neutro/ambiguo (evitar sesgos de genero en la percepcion de autoridad)
- Expresion: calida, segura, no infantil (el usuario tiene 16-18 anos, no 10)

**Tipografia del chat:**
- Fuente sans-serif (Inter, SF Pro o similar) para mensajes de MIYAGI
- Tamano: 15pt (ligeramente mayor que el chat promedio, para legibilidad)
- Color del texto: gris oscuro (#333), no negro puro (menos agresivo visualmente)
- Burbujas de MIYAGI: fondo gris claro (#F0F0F0)
- Burbujas del usuario: fondo color primario de Renddi con texto blanco

### 10.4.2 Sugerencias Rapidas (Chips)

Para reducir la friccion de escribir, SHOKUNIN muestra chips de accion rapida:

**Contexto: Inicio de sesion**
- "Practicar Mate" | "Practicar Lectura" | "¿Que deberia estudiar hoy?"

**Contexto: Post-sesion**
- "Ver mi progreso" | "Otra sesion" | "Necesito un break"

**Contexto: Deteccion de estado emocional bajo**
- "Estoy estresado" | "No tengo ganas" | "Solo quiero hablar"

**Contexto: Exploracion vocacional**
- "Explorar carreras" | "¿Que me conviene?" | "Simular mi admision"

**Reglas de chips:**
- Maximo 3 chips visibles (4 genera indecision, paradoja de la eleccion, Schwartz, 2004)
- Texto maximo 20 caracteres por chip
- Siempre incluir opcion de texto libre ("Otra cosa...")
- Los chips cambian segun el contexto y el historial (no repetir los mismos 3 dias seguidos)

### 10.4.3 Multimedia en el Chat

MIYAGI puede enviar contenido multimedia inline:

- **Imagenes:** graficos de progreso, infografias de conceptos
- **Mini-graficos:** tendencia de las ultimas 7 sesiones (sparkline)
- **Cards interactivas:** ejercicios de respiracion, quizzes rapidos, encuestas
- **Links profundos:** "Ve a tu sesion de practica" con boton inline

**Restricciones:**
- No enviar mas de 1 elemento multimedia por mensaje
- No enviar multimedia si el estudiante esta en modo Zen
- Imagenes optimizadas para peso (< 200KB) y accesibilidad (alt text siempre)

---

# Capitulo 11. Limitaciones y Trabajo Futuro

## 11.1 Limitaciones del Presente Trabajo

### 11.1.1 Ausencia de testing real con usuarios

La limitacion mas significativa de esta tesis de especializacion es que los disenos propuestos no han sido validados empiricamente con usuarios reales. Los algoritmos de personalizacion (Capitulo 8), los planes de testing (Capitulo 9) y las integraciones con agentes (Capitulo 10) son propuestas teoricas basadas en la literatura y en principios de diseno establecidos, pero no tienen datos de uso real que confirmen o refuten sus hipotesis.

Esta limitacion es estructural: Renddi.app esta en fase pre-lanzamiento al momento de escritura. Sin embargo, el plan de testing en tres fases (guerrilla, beta, A/B) esta disenado para abordar esta brecha de manera sistematica una vez que el producto este disponible para usuarios.

### 11.1.2 Sesgos de diseno

El equipo de diseno tiene sesgos inherentes que pueden afectar las decisiones:
- **Sesgo de experticia:** los disenadores sobreestiman la capacidad del usuario para navegar interfaces que a ellos les parecen intuitivas.
- **Sesgo cultural:** el equipo esta ubicado en Santiago, lo que puede generar disenos que funcionan para el contexto urbano pero no para estudiantes de regiones rurales con conectividad limitada.
- **Sesgo de dispositivo:** el desarrollo se realiza en dispositivos de gama media-alta; los usuarios de establecimientos municipales pueden tener dispositivos de gama baja con pantallas mas pequenas y procesadores mas lentos.

Mitigacion: el plan de testing incluye diversidad de establecimiento, region y dispositivo. Las entrevistas con usuarios chilenos (Seccion 9.4) estan disenadas para capturar perspectivas diversas.

### 11.1.3 Accesibilidad limitada por plataforma

Renddi.app es una aplicacion movil. Esto excluye a estudiantes que solo tienen acceso a computadores de escritorio (laboratorios de informatica en colegios) y a estudiantes sin smartphone propio. Segun la encuesta CASEN 2022, la penetracion de smartphones en el quintil I de ingresos es alta (> 85% en jovenes de 15-19), pero no universal.

Ademas, la accesibilidad para usuarios con discapacidades visuales, auditivas o motoras requiere trabajo adicional que no esta cubierto en profundidad en esta tesis, aunque la tesis principal (Capitulo 8) aborda neurodivergencia y UDL.

### 11.1.4 Complejidad computacional de la personalizacion en tiempo real

El motor de personalizacion descrito en la Seccion 8.6 requiere calculos sobre las 21 variables en tiempo real. En dispositivos de gama baja, esto podria generar latencia perceptible. No se han realizado benchmarks de performance en condiciones reales.

### 11.1.5 Privacidad y percepcion del usuario

La personalizacion requiere recoleccion extensiva de datos conductuales y emocionales. Aunque la tesis principal (Capitulo 10) aborda el marco etico y la Ley 21.719 de proteccion de datos personales, no se ha investigado como los usuarios adolescentes chilenos perciben esta recoleccion. Existe un riesgo de que la personalizacion "demasiado precisa" genere incomodidad (el efecto "la app me lee la mente").

---

## 11.2 Trabajo Futuro

### 11.2.1 Realidad Aumentada y Realidad Virtual

Las tecnologias inmersivas ofrecen posibilidades para la personalizacion adaptativa:
- **AR para matematicas:** visualizacion de geometria 3D superpuesta al entorno real del estudiante
- **VR para simulacros:** ambiente de sala de prueba virtual para desensibilizacion de ansiedad ante examenes (Bouchard, St-Jacques, Robillard, Coté y Renaud, 2003, demostraron la efectividad de la VR para fobias especificas)
- **Espacios de estudio virtuales:** ambientes colaborativos donde los estudiantes del grupo NAKAMA puedan estudiar juntos

### 11.2.2 Integracion con Wearables

Los wearables (smartwatches, pulseras de actividad) proporcionan datos fisiologicos continuos:
- **Frecuencia cardiaca:** proxy de estres y ansiedad (complementa el auto-reporte)
- **Calidad de sueno medida:** reemplaza el auto-reporte por datos objetivos
- **Actividad fisica medida:** datos reales vs. estimacion
- **Variabilidad de frecuencia cardiaca (HRV):** indicador validado de estres cronico

Esto permitiria actualizar sleep_quality (v13), physical_activity (v16), stress_level (v10) y fatigue (v15) con datos objetivos en lugar de auto-reporte, reduciendo significativamente el sigma de estas variables.

### 11.2.3 Eye Tracking

El eye tracking en dispositivos moviles (via camara frontal) podria proporcionar:
- Medicion directa de attention_span (v2) mediante analisis de patrones de fijacion
- Deteccion de fatiga visual (frecuencia de parpadeo)
- Identificacion de zonas de confision en la interfaz (miradas repetidas sin accion)
- Inferencia de cognitive_load (dilatacion pupilar, documentada por Kahneman, 1973)

Las limitaciones actuales (precision, condiciones de iluminacion, privacidad) hacen que esta tecnologia sea viable a mediano plazo, no inmediato.

### 11.2.4 Voice UI y Asistentes de Voz

La interaccion por voz eliminaria la friccion de escribir en pantalla:
- Respuestas habladas a preguntas de MIYAGI
- Lectura en voz alta de contenido (para estudiantes con dislexia)
- Deteccion de estado emocional via prosodia (tono, velocidad, volumen)
- Sesiones hands-free para momentos de desplazamiento (micro en el transporte publico)

El procesamiento de lenguaje natural en espanol chileno (con modismos y jerga juvenil) es un desafio tecnico adicional.

### 11.2.5 Personalizacion predictiva

El estado actual del motor de personalizacion es reactivo: responde al estado presente del estudiante. El trabajo futuro apunta a personalizacion predictiva: anticipar estados futuros y actuar preventivamente.

Ejemplo: si el modelo detecta que cada lunes el estudiante tiene sleep_quality baja y motivation baja (patron de "bajón de lunes"), podria proactivamente sugerir sesiones mas cortas y contenido motivacional los domingos por la noche.

---

# Referencias

Amabile, T. M. y Kramer, S. J. (2011). *The progress principle: Using small wins to ignite joy, engagement, and creativity at work*. Harvard Business Review Press.

Ames, C. (1992). Classrooms: Goals, structures, and student motivation. *Journal of Educational Psychology*, 84(3), 261–271.

Andersson, R. (2020). *Inter typeface* (versión 3.19) [Fuente tipográfica de código abierto]. Recuperado de https://rsms.me/inter/

Bandura, A. (1997). *Self-efficacy: The exercise of control*. W. H. Freeman.

Bar, M. y Neta, M. (2006). Humans prefer curved visual objects. *Psychological Science*, 17(8), 645–648.

Barkley, R. A. (1997). Behavioral inhibition, sustained attention, and executive functions: Constructing a unifying theory of ADHD. *Psychological Bulletin*, 121(1), 65–94.

Beck, A. T. (1976). *Cognitive therapy and the emotional disorders*. International Universities Press.

Bederson, B. B. y Boltman, A. (1999). Does animation help users build mental maps of spatial information? *Proceedings of the 1999 IEEE Symposium on Information Visualization*, 28–35.

Biddle, S. J. H. y Asare, M. (2011). Physical activity and mental health in children and adolescents: A review of reviews. *British Journal of Sports Medicine*, 45(11), 886–895.

Bouchard, S., St-Jacques, J., Robillard, G., Coté, S. y Renaud, P. (2003). Efficacy of virtual reality exposure in the treatment of arachnophobia. *CyberPsychology & Behavior*, 6(2), 178–186.

Braun, V. y Clarke, V. (2006). Using thematic analysis in psychology. *Qualitative Research in Psychology*, 3(2), 77–101.

Brehm, J. W. (1966). *A theory of psychological reactance*. Academic Press.

Brignull, H. (2010). *Dark patterns: Deception vs. honesty in UI design*. A List Apart.

Brooke, J. (1996). SUS: A 'quick and dirty' usability scale. En P. W. Jordan, B. Thomas, B. A. Weerdmeester y I. L. McClelland (Eds.), *Usability evaluation in industry* (pp. 189–194). Taylor & Francis.

Brooks, A. W. (2014). Get excited: Reappraising pre-performance anxiety as excitement. *Journal of Experimental Psychology: General*, 143(3), 1144–1158.

Caplan, S. E. (2007). Relations among loneliness, social anxiety, and problematic internet use. *CyberPsychology & Behavior*, 10(2), 234–242.

Caro Bruna, F., Cerda, R. y Gutiérrez, A. (2026). SENSEI: Sistema multi-agente de coaching educativo con IA para la PAES. *Tesis doctoral, Versión 2.0*.

Cirillo, F. (2018). *The Pomodoro Technique: The acclaimed time-management system that has transformed how we work*. Currency.

Cohen, S. y Wills, T. A. (1985). Stress, social support, and the buffering hypothesis. *Psychological Bulletin*, 98(2), 310–357.

Credé, M. y Phillips, L. A. (2011). A meta-analytic review of the Motivated Strategies for Learning Questionnaire. *Learning and Individual Differences*, 21(4), 337–346.

Csikszentmihalyi, M. (1990). *Flow: The psychology of optimal experience*. Harper & Row.

data.ai. (2024). *State of mobile 2024* [Informe anual]. Recuperado de https://www.data.ai/en/go/state-of-mobile-2024

Deci, E. L., Koestner, R. y Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. *Psychological Bulletin*, 125(6), 627–668.

Deci, E. L. y Ryan, R. M. (2000). The "what" and "why" of goal pursuits: Human needs and the self-determination of behavior. *Psychological Inquiry*, 11(4), 227–268.

Desmet, P. M. A. y Hekkert, P. (2007). Framework of product experience. *International Journal of Design*, 1(1), 57–66.

Deterding, S., Dixon, D., Khaled, R. y Nacke, L. (2011). From game design elements to gamefulness: Defining "gamification". En *Proceedings of the 15th International Academic MindTrek Conference* (pp. 9–15). ACM.

Dewald, J. F., Meijer, A. M., Oort, F. J., Kerkhof, G. A. y Bögels, S. M. (2010). The influence of sleep quality, sleep duration and sleepiness on school performance in children and adolescents: A meta-analytic review. *Sleep Medicine Reviews*, 14(3), 179–189.

Duolingo Inc. (2024). *Duolingo Q4 2023 and full year 2023 results* [Reporte de resultados financieros]. Recuperado de https://investors.duolingo.com

Elliot, A. J. (1999). Approach and avoidance motivation and achievement goals. *Educational Psychologist*, 34(3), 169–189.

Elliot, A. J. y Maier, M. A. (2014). Color psychology: Effects of perceiving color on psychological functioning in humans. *Annual Review of Psychology*, 65, 95–120.

Ericsson, K. A. y Simon, H. A. (1993). *Protocol analysis: Verbal reports as data* (ed. revisada). MIT Press.

Eyal, N. (2014). *Hooked: How to build habit-forming products*. Portfolio/Penguin.

Eysenck, M. W., Derakshan, N., Santos, R. y Calvo, M. G. (2007). Anxiety and cognitive performance: Attentional control theory. *Emotion*, 7(2), 336–353.

Fan, X. y Chen, M. (2001). Parental involvement and students' academic achievement: A meta-analysis. *Educational Psychology Review*, 13(1), 1–22.

Festinger, L. (1954). A theory of social comparison processes. *Human Relations*, 7(2), 117–140.

Fogg, B. J. (2003). *Persuasive technology: Using computers to change what we think and do*. Morgan Kaufmann.

Fogg, B. J. (2009). A behavior model for persuasive design. En *Proceedings of the 4th International Conference on Persuasive Technology* (Article 40). ACM.

Fogg, B. J. (2019). *Tiny habits: The small changes that change everything*. Houghton Mifflin Harcourt.

Frederick, S. y Loewenstein, G. (1999). Hedonic adaptation. En D. Kahneman, E. Diener y N. Schwarz (Eds.), *Well-being: The foundations of hedonic psychology* (pp. 302–329). Russell Sage Foundation.

Fredrickson, B. L. (2001). The role of positive emotions in positive psychology: The broaden-and-build theory of positive emotions. *American Psychologist*, 56(3), 218–226.

Google. (2018). *Android dark theme impact on battery life* [Presentación en Android Dev Summit 2018]. Recuperado de https://developer.android.com

Gray, C. M., Kou, Y., Battles, B., Hoggatt, J. y Toombs, A. L. (2018). The dark (patterns) side of UX design. En *Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems* (Paper 534). ACM.

Guest, G., Bunce, A. y Johnson, L. (2006). How many interviews are enough? An experiment with data saturation and variability. *Field Methods*, 18(1), 59–82.

Hale, L. y Guan, S. (2015). Screen time and sleep among school-aged children and adolescents: A systematic literature review. *Sleep Medicine Reviews*, 21, 50–58.

Hamari, J. y Koivisto, J. (2014). Measuring flow in gamification: Dispositional Flow Scale-2. *Computers in Human Behavior*, 40, 133–143.

Hamari, J., Koivisto, J. y Sarsa, H. (2014). Does gamification work? A literature review of empirical studies on gamification. En *Proceedings of the 47th Hawaii International Conference on System Sciences* (pp. 3025–3034). IEEE.

Hembree, R. (1988). Correlates, causes, effects, and treatment of test anxiety. *Review of Educational Research*, 58(1), 47–77.

Hick, W. E. (1952). On the rate of gain of information. *Quarterly Journal of Experimental Psychology*, 4(1), 11–26.

Kahneman, D. (1973). *Attention and effort*. Prentice-Hall.

Kahneman, D. (2011). *Thinking, fast and slow*. Farrar, Straus and Giroux.

Kahneman, D. y Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica*, 47(2), 263–291.

Kelley, P., Lockley, S. W., Foster, R. G. y Kelley, J. (2015). Synchronizing education to adolescent biology: "Let teens sleep, start school later". *Learning, Media and Technology*, 40(2), 210–226.

Krug, S. (2014). *Don't make me think, revisited: A common sense approach to web usability* (3a ed.). New Riders.

Kurt, S. y Osueke, K. K. (2014). The effects of color on the moods of college students. *SAGE Open*, 4(1), 1–12.

Levpušček, M. P. y Zupančič, M. (2009). Math achievement in early adolescence: The role of parental involvement, teachers' behavior, and students' motivational beliefs about math. *The Journal of Early Adolescence*, 29(4), 541–570.

Lidwell, W., Holden, K. y Butler, J. (2010). *Universal principles of design* (2a ed.). Rockport Publishers.

Lim, J. y Dinges, D. F. (2010). A meta-analysis of the impact of short-term sleep deprivation on cognitive variables. *Psychological Bulletin*, 136(3), 375–389.

Lount, R. B., Jr. y Wilk, S. L. (2014). Working harder or hardly working? Posting performance eliminates social loafing and promotes social laboring in workgroups. *Management Science*, 60(5), 1098–1106.

Lyngs, U., Lukoff, K., Slovak, P., Seymour, W., Webb, H., Coughlin, M., Van Kleek, M. y Shadbolt, N. (2019). Self-control in cyberspace: Applying dual systems theory to a review of digital self-control tools. *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems*, Paper 131.

Ma, X., Yue, Z. Q., Gong, Z. Q., Zhang, H., Duan, N. Y., Shi, Y. T. y Li, Y. F. (2017). The effect of diaphragmatic breathing on attention, negative affect and stress in healthy adults. *Frontiers in Psychology*, 8, Article 874.

Murayama, K. y Elliot, A. J. (2012). The competition–performance relation: A meta-analytic review and test of the opposing processes model of competition and performance. *Psychological Bulletin*, 138(6), 1035–1070.

Nakamura, J. y Csikszentmihalyi, M. (2002). The concept of flow. En C. R. Snyder y S. J. Lopez (Eds.), *Handbook of positive psychology* (pp. 89–105). Oxford University Press.

Nielsen, J. (1993). *Usability engineering*. Academic Press.

Nielsen, J. (1994). Heuristic evaluation. En J. Nielsen y R. L. Mack (Eds.), *Usability inspection methods* (pp. 25-62). John Wiley & Sons.

Nielsen, J. (2006). Progressive disclosure. *Nielsen Norman Group*. Recuperado de https://www.nngroup.com/articles/progressive-disclosure/

Norman, D. A. (2004). *Emotional design: Why we love (or hate) everyday things*. Basic Books.

Norman, D. A. (2013). *The design of everyday things* (edición revisada y ampliada). Basic Books.

Nunes, J. C. y Drèze, X. (2006). The endowed progress effect: How artificial advancement increases effort. *Journal of Consumer Research*, 32(4), 504–512.

Orben, A. y Przybylski, A. K. (2019). The association between adolescent well-being and digital technology use. *Nature Human Behaviour*, 3(2), 173–182.

Oulasvirta, A., Rattenbury, T., Ma, L. y Raita, E. (2012). Habits make smartphone use more pervasive. *Personal and Ubiquitous Computing*, 16(1), 105–114.

Pham, X. L. y Wang, S. L. (2022). Personalized push notification systems for mobile learning: A review and future directions. *Educational Technology Research and Development*, 70(3), 987–1012.

Pintrich, P. R. (2000). The role of goal orientation in self-regulated learning. En M. Boekaerts, P. R. Pintrich y M. Zeidner (Eds.), *Handbook of self-regulation* (pp. 451–502). Academic Press.

Reichheld, F. F. (2003). The one number you need to grow. *Harvard Business Review*, 81(12), 46–54.

Rello, L. y Baeza-Yates, R. (2013). Good fonts for dyslexia. *Proceedings of the 15th International ACM SIGACCESS Conference on Computers and Accessibility*, Article 14.

Richardson, M., Abraham, C. y Bond, R. (2012). Psychological correlates of university students' academic performance: A systematic review and meta-analysis. *Psychological Bulletin*, 138(2), 353–387.

Rogers, T., Milkman, K. L., John, L. K. y Norton, M. I. (2015). Beyond good intentions: Prompting people to make plans improves follow-through on important tasks. *Behavioral Science & Policy*, 1(2), 33–41.

Rohrer, D. (2012). Interleaving helps students distinguish among similar concepts. *Educational Psychology Review*, 24(3), 355–367.

Ryan, R. M. y Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. *American Psychologist*, 55(1), 68–78.

Sailer, M. y Homner, L. (2020). The gamification of learning: A meta-analysis. *Educational Psychology Review*, 32(1), 77–112.

Sauro, J. y Lewis, J. R. (2016). *Quantifying the user experience: Practical statistics for user research* (2a ed.). Morgan Kaufmann.

Schultz, W. (1997). A neural substrate of prediction and reward. *Science*, 275(5306), 1593–1599.

Schwartz, B. (2004). *The paradox of choice: Why more is less*. Ecco.

Seemiller, C. y Grace, M. (2016). *Generation Z goes to college*. Jossey-Bass.

Sensor Tower. (2023). *State of education apps 2023* [Informe de mercado]. Recuperado de https://sensortower.com

Settles, B., LaFlair, G. T. y Hagiwara, M. (2020). Machine learning–driven language assessment. *Transactions of the Association for Computational Linguistics*, 8, 247–263.

Shute, V. J. (2008). Focus on formative feedback. *Review of Educational Research*, 78(1), 153–189.

Stawarz, K., Cox, A. L. y Blandford, A. (2015). Beyond self-tracking and reminders: Designing smartphone apps that support habit formation. *Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems*, 2653–2662.

Subsecretaría de Telecomunicaciones [SUBTEL]. (2023). *Informe de la industria de telecomunicaciones, primer semestre 2023*. Gobierno de Chile. Recuperado de https://www.subtel.gob.cl/estudios-y-estadisticas/informes-sectoriales/

Subsecretaría de Telecomunicaciones [SUBTEL]. (2024). *Encuesta nacional de acceso y uso de internet 2024*. Gobierno de Chile. Recuperado de https://www.subtel.gob.cl/estudios-y-estadisticas/internet/

Sung, Y.-T., Chang, K.-E. y Liu, T.-C. (2016). The effects of integrating mobile devices with teaching and learning on students' learning performance: A meta-analysis and research synthesis. *Computers & Education*, 94, 252–275.

Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science*, 12(2), 257–285.

Sweller, J. (2011). Cognitive load theory. En J. Mestre y B. Ross (Eds.), *The psychology of learning and motivation* (Vol. 55, pp. 37–76). Academic Press.

Thai-Nghe, N., Drumond, L., Krohn-Grimberghe, A. y Schmidt-Thieme, L. (2010). Recommender system for predicting student performance. *Procedia Computer Science*, 1(2), 2811-2819.

Twenge, J. M. (2017). *iGen: Why today's super-connected kids are growing up less rebellious, more tolerant, less happy---and completely unprepared for adulthood*. Atria Books.

UXCam. (2023). *Mobile UX trends: Dark mode adoption and user preferences* [Entrada de blog con datos de investigación]. Recuperado de https://uxcam.com/blog/

von der Embse, N., Jester, D., Roy, D. y Post, J. (2018). Test anxiety effects, predictors, and correlates: A 30-year meta-analytic review. *Journal of Affective Disorders*, 227, 483–493.

Walker, M. (2017). *Why we sleep: Unlocking the power of sleep and dreams*. Scribner.

Wilson, R. C., Shenhav, A., Straccia, M. y Cohen, J. D. (2019). The eighty five percent rule for optimal learning. *Nature Communications*, 10(1), 4646.

Wroblewski, L. (2011). *Mobile first*. A Book Apart.

---

*Fin de la tesis SHOKUNIN.*
