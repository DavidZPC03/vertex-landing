/* ============================================================
   Vertex Core — Interacciones
   0. Cambio de idioma (ES/EN) y de tema (claro/oscuro)
   1. Estado de la nav y velo de desvanecido al hacer scroll
   2. Menú móvil
   3. Animaciones fade-in escalonadas (IntersectionObserver)
   4. Títulos con revelado de máscara al hacer scroll
   5. Efecto "spotlight": brillo que sigue al cursor en tarjetas
   6. Parallax: aurora con el cursor y retícula con el scroll
   7. Botones primarios con efecto magnético
   8. Envío del formulario de contacto (FormSubmit + mailto)
   9. FAQ: acordeón
   ============================================================ */

// ============================================================
// 0. IDIOMA Y TEMA
// ============================================================

// ---------- Diccionario de traducciones ----------
const i18n = {
  es: {
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.process": "Proceso",
    "nav.about": "Nosotros",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.cta": "Agendar una reunión",
    "hero.eyebrow": "Servicios de tecnología para PyMEs · México",
    "hero.l1": "Tecnología sólida para",
    "hero.l2": 'operar con <span class="text-gradient">confianza</span>',
    "hero.subtitle": "Desarrollamos, modernizamos y damos soporte a la infraestructura digital de su empresa, con procesos claros y resultados medibles.",
    "hero.cta1": "Agendar una reunión",
    "hero.cta2": "Conocer servicios",
    "mq.1": "Desarrollo web",
    "mq.2": "Modernización de sistemas",
    "mq.3": "Infraestructura IT",
    "mq.4": "Soporte técnico",
    "mq.5": "Consultoría digital",
    "mq.6": "Portales empresariales",
    "pillars.1t": "Adaptabilidad",
    "pillars.1d": "Nos ajustamos a su operación, no al revés.",
    "pillars.2t": "Trazabilidad",
    "pillars.2d": "Avances y entregables visibles en cada etapa.",
    "pillars.3t": "Comunicación",
    "pillars.3d": "Trato directo con el equipo, sin intermediarios.",
    "services.label": "Servicios",
    "services.title": "Capacidades que respaldan su operación",
    "services.1t": "Desarrollo web y portales",
    "services.1d": "Creamos sitios web, portales de clientes, puntos de venta (POS), sistemas a la medida y aplicaciones SaaS: software que funciona desde el navegador, sin instalar nada.",
    "services.1l1": "Portales de clientes y proveedores para consultar pedidos, facturas y estatus en línea.",
    "services.1l2": "Sistemas a la medida: punto de venta (POS), inventarios, control de yardas y patios (YMS), citas y reservaciones.",
    "services.1l3": "Plataformas SaaS: su propio producto de software por suscripción.",
    "services.2t": "Modernización de sistemas",
    "services.2d": "¿Su sistema actual es lento, obsoleto o ya nadie sabe darle mantenimiento? Lo actualizamos por fases, sin detener su operación diaria.",
    "services.2l1": "Más velocidad y mejor rendimiento para su equipo y sus clientes.",
    "services.2l2": "Control de usuarios, productos y procesos en un solo lugar.",
    "services.2l3": "Escalable y más barato de mantener: crece con su empresa y se adapta a futuros requerimientos.",
    "services.3t": "Soporte e infraestructura IT",
    "services.3d": "Nos hacemos cargo de su tecnología día a día: mantenimiento preventivo y correctivo, monitoreo, respaldos y atención a sus usuarios.",
    "services.3l1": "Monitoreo y respaldos automáticos para prevenir caídas y pérdida de información.",
    "services.3l2": "Soporte técnico a sus usuarios con tiempos de respuesta definidos.",
    "services.3l3": "Actualizaciones de seguridad y mejoras continuas de sus sistemas.",
    "services.4t": "Consultoría digital",
    "services.4d": "Le ayudamos a decidir en qué tecnología invertir (y en cuál no), con un diagnóstico claro de sus procesos y una hoja de ruta realista.",
    "services.4l1": "Diagnóstico de sus procesos y sistemas actuales.",
    "services.4l2": "Recomendación de herramientas con costo-beneficio claro.",
    "services.4l3": "Hoja de ruta digital por etapas, priorizada por impacto.",
    "process.label": "Proceso",
    "process.title": "Un método de trabajo probado y transparente",
    "process.1t": "Descubrimiento",
    "process.1d": "Analizamos sus necesidades y su operación actual para definir con precisión lo que su empresa requiere.",
    "process.2t": "Propuesta",
    "process.2d": "Recibirá un plan detallado con alcance, tiempos y costos definidos desde el primer día.",
    "process.3t": "Ejecución y soporte",
    "process.3d": "Implementamos la solución y acompañamos a su equipo con soporte continuo después del lanzamiento.",
    "about.label": "Nosotros",
    "about.title": "Un socio tecnológico de confianza, no un proveedor más",
    "about.text": "En Vertex Core creemos que la tecnología debe trabajar para su negocio, no al revés. Somos una empresa mexicana que acompaña a las PyMEs con soluciones prácticas y medibles: desarrollamos lo que necesita, modernizamos lo que ya tiene y damos soporte cuando lo requiere. Sin procesos opacos, sin jerga innecesaria y sin fricciones.",
    "about.v1": "Comunicación directa y trato cercano en cada etapa del proyecto.",
    "about.v2": "Alcance, tiempos y costos definidos por escrito desde el inicio.",
    "about.v3": "Soporte continuo después de la entrega: no desaparecemos.",
    "faq.label": "Preguntas frecuentes",
    "faq.title": "Resolvemos sus dudas",
    "faq.q1": "¿Trabajan con empresas de cualquier tamaño?",
    "faq.a1": "Nos especializamos en PyMEs. Nuestros procesos, tiempos y costos están pensados para empresas que necesitan avanzar sin fricciones ni estructuras corporativas complejas.",
    "faq.q2": "¿Cuánto tiempo toma un proyecto típico?",
    "faq.a2": "Depende del alcance, pero siempre lo definimos por escrito en la propuesta, antes de iniciar. Un sitio web puede tomar semanas; una modernización de sistemas se planea por fases para no detener su operación.",
    "faq.q3": "¿Ofrecen soporte después de la entrega?",
    "faq.a3": "Sí. Todos nuestros proyectos incluyen acompañamiento posterior al lanzamiento, y contamos con planes de soporte continuo para mantenimiento, monitoreo y mejoras evolutivas.",
    "faq.q4": "¿Cómo iniciamos?",
    "faq.a4": "Con una reunión o mensaje de descubrimiento, sin costo ni compromiso. Escuchamos sus necesidades y le presentamos una propuesta clara con alcance, tiempos y costos definidos.",
    "contact.label": "Contacto",
    "contact.title": "Hablemos de su proyecto",
    "contact.text": "Cuéntenos qué necesita su empresa a través del formulario, o escríbanos directamente. Nuestro equipo le responderá en menos de 24 horas.",
    "form.name": "Nombre",
    "form.namePh": "Su nombre",
    "form.company": "Empresa",
    "form.companyPh": "Nombre de su empresa",
    "form.email": "Correo electrónico",
    "form.emailPh": "nombre@empresa.com",
    "form.message": "Mensaje",
    "form.messagePh": "¿Qué necesita su empresa?",
    "form.submit": "Enviar mensaje",
    "form.sending": "Enviando…",
    "form.success": "Mensaje enviado. Le responderemos en menos de 24 horas.",
    "form.mailto": "Abriendo su cliente de correo…",
    "footer.copy": "© 2026 Vertex Core. Todos los derechos reservados.",

    /* ---- Migas de pan (páginas de proyecto) ---- */
    "bc.home": "Inicio",
    "bc.projects": "Proyectos",

    /* ---- Listado de proyectos ---- */
    "pl.label": "Proyectos",
    "pl.title": "Trabajo entregado, no promesas",
    "pl.text": "Cada caso incluye su contexto real: si fue para un cliente en operación, para una competencia o si se trata de un producto propio. Preferimos mostrar poco y que sea verificable.",
    "pl.view": "Ver caso",
    "pl.note": "Parte de nuestro trabajo está bajo acuerdo de confidencialidad y no puede publicarse. Con gusto lo comentamos en una llamada.",

    /* ---- Encabezados compartidos de las páginas de proyecto ---- */
    "pr.mClient": "Cliente",
    "pr.mType": "Tipo",
    "pr.mStatus": "Estado",
    "pr.mRole": "Rol de Vertex",
    "pr.challengeT": "El reto",
    "pr.builtT": "Qué construimos",
    "pr.resultsT": "Resultados medidos",
    "pr.scopeT": "Alcance técnico",
    "pr.stackT": "Stack técnico",
    "pr.prev": "Caso anterior",
    "pr.next": "Caso siguiente",
    "pr.before": "Antes",
    "pr.after": "Después",
    "pr.ctaT": "¿Tiene una operación parecida?",
    "pr.ctaText": "Si su empresa enfrenta un problema similar, cuéntenos. La primera conversación es para entender su operación, no para venderle nada.",

    /* ---- Caso: Urbabus ---- */
    "u.tag": "Cliente · En producción",
    "u.name": "Urbabus",
    "u.summary": "Mapa público de rutas con la posición de las unidades en vivo, para que el pasajero sepa cuándo pasa su camión.",
    "u.vClient": "Urbabus — transporte urbano en Nuevo Laredo",
    "u.vType": "Plataforma web y rastreo de flota",
    "u.vStatus": "En producción",
    "u.vRole": "Desarrollo y operación de la plataforma",
    "u.challengeP": "El pasajero no tenía forma de saber cuándo iba a pasar su camión: esperaba en la parada sin información. Del lado del operador tampoco había visibilidad de la flota, así que no se podía responder un reclamo ni verificar si una unidad estaba realmente en ruta.",
    "u.b1": "Mapa público de rutas con la posición de cada unidad en vivo, abierto a cualquier pasajero desde el navegador.",
    "u.b2": "Backend de sincronización GPS que funciona como único consumidor de los proveedores, en lugar de que cada visitante consulte por su cuenta.",
    "u.b3": "Indicador de conexión de cuatro estados que distingue si el equipo transmitió de si el equipo realmente supo dónde estaba.",
    "u.b4": "Integración con dos proveedores GPS, Traccar y Flespi, sobre equipos ST-906L con SIM Telcel.",
    "u.b5": "Panel interno de unidades y rutas para el operador.",
    "u.r1": "De 65 minutos a 30 segundos entre reportes",
    "u.r1d": "El equipo de una unidad reportaba cada 65.5 minutos en promedio. Se diagnosticó el modo de suspensión del dispositivo con una medición A/B en producción y, una vez corregido, pasó a reportar cada 30 segundos.",
    "u.r2": "La carga dejó de crecer con la audiencia",
    "u.r2d": "El mapa hacía una petición por unidad desde cada navegador. Se reemplazó por una sola petición agrupada al backend, así que la carga ya no aumenta con la cantidad de personas mirando el mapa.",
    "u.r3": "Velocidad corregida",
    "u.r3d": "La API entregaba la velocidad en nudos y el mapa la mostraba con la etiqueta km/h. Se corrigió la conversión en ambos extremos.",
    "u.r4": "Caída de 8 h 34 min documentada y cerrada",
    "u.r4d": "Se realizó el análisis posterior de una caída del servicio: agotamiento de memoria de la máquina virtual de Java en una instancia de 1 GB sin espacio de intercambio. Se corrigió el dimensionamiento y se agregó monitoreo para detectarlo antes.",
    "u.figVisitor": "Visitante",
    "u.fig1Cap": "Antes, cada navegador consultaba a los proveedores GPS por su cuenta y hacía una petición por unidad. Ahora el backend es el único consumidor y el mapa recibe todo en una sola respuesta.",
    "u.fig1aAlt": "Esquema: cada visitante consultaba directamente a los proveedores GPS, una petición por unidad",
    "u.fig1aN1": "Una petición por unidad, desde cada navegador",
    "u.fig1aN2": "La carga crece con la audiencia",
    "u.fig1bAlt": "Esquema: los visitantes hacen una sola petición al backend de Vertex, que es el único que consulta a los proveedores GPS",
    "u.fig1bBk1": "Backend",
    "u.fig1bBk2": "de Vertex",
    "u.fig1bN1": "Una sola petición agrupada",
    "u.fig1bN2": "La carga ya no depende de la audiencia",
    "u.fig2Alt": "Leyenda de los cuatro estados de conexión de una unidad",
    "u.fig2Cap": "El indicador separa dos cosas que antes se confundían: que el equipo haya transmitido y que el equipo haya sabido dónde estaba. Un equipo sin señal satelital ya no se reporta como si estuviera bien.",
    "u.fig2s1": "En línea",
    "u.fig2s1d": "Transmite y sabe dónde está",
    "u.fig2s2": "Retrasado",
    "u.fig2s2d": "Transmite, pero con demora",
    "u.fig2s3": "Sin señal GPS",
    "u.fig2s3d": "Transmite, pero sin fijar posición",
    "u.fig2s4": "Fuera de línea",
    "u.fig2s4d": "No transmite",
    "u.fig3Alt": "Comparación a escala del intervalo entre reportes GPS: antes 65.5 minutos, después 30 segundos",
    "u.fig3Cap": "El equipo entraba en modo de suspensión y dejaba de reportar. Una vez corregido, el intervalo entre reportes cayó dos órdenes de magnitud.",
    "u.fig3BeforeV": "≈ 65.5 min entre reportes",
    "u.fig3AfterV": "30 s",
    "u.fig3Note": "Medición A/B en producción. Barras a escala real:",
    "u.fig3Note2": "30 s es 1/131 del intervalo anterior.",

    /* ---- Caso: CTPAT-QR ---- */
    "c.tag": "Proyecto de competencia · InnovaTec",
    "c.name": "CTPAT-QR",
    "c.summary": "Plataforma de inspecciones CTPAT con códigos QR, visor 3D del camión y registro no alterable de cada revisión.",
    "c.vClient": "Equipos de alumnos de InnovaTec clasificados a etapa regional y nacional. No es un cliente de pago.",
    "c.vType": "Plataforma web de inspecciones",
    "c.vStatus": "Proyecto de competencia",
    "c.vRole": "Desarrollo de la plataforma",
    "c.challengeP": "La verificación de inspecciones CTPAT se llevaba en papel. No había trazabilidad ni forma de auditar quién revisó qué zona del camión, ni cuándo. Un registro en papel se puede rehacer, y eso es justamente lo que un esquema de seguridad no debe permitir.",
    "c.b1": "Gestión de inspecciones mediante códigos QR, cada uno ligado a la unidad y a la revisión correspondiente.",
    "c.b2": "Módulo de personal con credencial con foto, para saber quién realizó cada inspección.",
    "c.b3": "Visor 3D del camión que marca las zonas de inspección definidas por CTPAT.",
    "c.b4": "Registro de cada inspección en un contrato inteligente, de modo que el historial no se pueda alterar después.",
    "c.b5": "Cobros con Stripe y endurecimiento de seguridad del backend: lista blanca de orígenes y autenticación.",
    "c.scopeP": "Frontend en Next.js, API REST en Node.js con Express y base de datos PostgreSQL. Los pagos se procesan con Stripe. El contrato se desarrolló con Hardhat y se desplegó en la red de pruebas Sepolia.",
    "c.fig1Alt": "Flujo de una inspección: escaneo del QR, revisión por zonas, sello de tiempo y asiento en contrato inteligente",
    "c.fig1Cap": "Cada inspección queda ligada a una unidad, a una persona y a un momento. El último paso la asienta en un contrato, que es lo que impide rehacer un registro después de los hechos.",
    "c.fig1s1": "Escaneo del QR",
    "c.fig1s1d": "Identifica la unidad y la revisión",
    "c.fig1s2": "Inspección por zonas",
    "c.fig1s2d": "Se registra cada zona del camión",
    "c.fig1s3": "Sello de tiempo y responsable",
    "c.fig1s3d": "Queda quién revisó y cuándo",
    "c.fig1s4": "Asiento en contrato inteligente",
    "c.fig1s4d": "El historial ya no se puede alterar",
    "c.fig2Alt": "Esquema lateral de un tractocamión con las zonas de revisión numeradas",
    "c.fig2Cap": "El visor 3D del sistema marca las zonas que hay que revisar sobre la unidad. Este esquema las representa de forma simplificada; el orden y el alcance de la revisión los define el programa de seguridad de cada empresa.",
    "c.fig2z1": "Defensa y motor",
    "c.fig2z2": "Llantas y ejes",
    "c.fig2z3": "Tanques de combustible",
    "c.fig2z4": "Cabina y compartimentos",
    "c.fig2z5": "Quinta rueda y bajos",
    "c.fig2z6": "Piso, paredes y techo",
    "c.fig2z7": "Puertas",

    /* ---- Caso: SOIA ---- */
    "s.tag": "Producto propio · MVP",
    "s.name": "SOIA",
    "s.summary": "Portal multi-tenant para agencias aduanales: seguimiento de pedimentos y sus eventos en un solo lugar.",
    "s.vClient": "Producto propio de Vertex Core. No es un despliegue en cliente.",
    "s.vType": "Portal web multi-tenant",
    "s.vStatus": "MVP",
    "s.vRole": "Diseño y desarrollo del producto",
    "s.challengeP": "En una agencia aduanal el seguimiento de un pedimento vive repartido entre correo, hojas de cálculo y portales externos. El cliente de la agencia no tiene dónde consultar el estatus, así que termina llamando por teléfono, y alguien tiene que interrumpir su trabajo para contestar.",
    "s.b1": "Portal multi-tenant donde cada agencia ve únicamente su información, con aislamiento por identificador de inquilino.",
    "s.b2": "Seguimiento de pedimentos con la línea de eventos de cada uno.",
    "s.b3": "Adaptador degradable que integra SOIA como una fuente de datos más: si la fuente externa falla, el portal sigue operando.",
    "s.b4": "Autenticación con roles, de modo que cada perfil ve y hace solo lo que le corresponde.",
    "s.scopeP": "Next.js 15 con App Router y server actions, React 19 y Tailwind CSS 4. La sesión se maneja con Auth.js v5 mediante JWT que transporta el inquilino y el rol. Persistencia con Prisma 6 sobre PostgreSQL 16 y pruebas unitarias con Vitest.",
    "s.fig1Alt": "Esquema: tres agencias entran al mismo portal y cada una alcanza únicamente sus propios pedimentos",
    "s.fig1Cap": "Todas las agencias usan la misma aplicación, pero la sesión carga el identificador de inquilino y el rol, así que cada consulta queda acotada a los datos de quien la hace.",
    "s.fig1a1": "Agencia A",
    "s.fig1a2": "Agencia B",
    "s.fig1a3": "Agencia C",
    "s.fig1Portal": "Un solo portal",
    "s.fig1PortalSub": "La sesión lleva el inquilino y el rol",
    "s.fig1d1": "Pedimentos A",
    "s.fig1d2": "Pedimentos B",
    "s.fig1d3": "Pedimentos C",
    "s.fig1Note": "Ninguna sesión alcanza los datos de otra agencia",
    "s.fig2Alt": "Esquema: el adaptador consulta la fuente externa y, si no responde, el portal sigue operando con los datos ya sincronizados",
    "s.fig2Cap": "La fuente externa es una integración más, no el corazón del sistema. Si deja de responder, el portal no se cae: sigue mostrando lo último que alcanzó a sincronizar.",
    "s.fig2Portal": "Portal",
    "s.fig2Adapter": "Adaptador",
    "s.fig2Src": "Fuente externa",
    "s.fig2Cache1": "Datos ya",
    "s.fig2Cache2": "sincronizados",
    "s.fig2Leg1": "Ruta normal: consulta a la fuente",
    "s.fig2Leg2": "Si la fuente falla: sigue con lo ya sincronizado",
    "pr.shotsT": "El sistema en operación",
    "u.shot1Alt": "Página pública de la Ruta TEC de Urbabus: el trazo de la ruta sobre el mapa de Nuevo Laredo con sus paradas numeradas, el desglose de tramos con distancia y tiempo, y el panel de unidades activas.",
    "u.shot1Cap": "Ruta TEC en el sitio público: el trazo con sus paradas numeradas, la distancia y el tiempo de cada tramo, y el panel de unidades activas donde cada proveedor GPS reporta su propio estado de conexión.",
    "c.shot1Alt": "Portal de acceso de CTPAT-QR: formulario de inicio de sesión junto al resumen de auditoría inmutable, gestión multiusuario y checklists del estándar CTPAT.",
    "c.shot1Cap": "Portal de acceso en el ambiente de QA, con el resumen de las tres capacidades del sistema: auditoría inmutable en la red Sepolia, gestión multiusuario de inspectores y checklists del estándar CTPAT.",
    "c.shot2Alt": "Formulario de inspección CTPAT-QR con el visor 3D del tractocamión a un costado; la zona Frente aparece resaltada y los puntos se marcan como conformes o con anomalía.",
    "c.shot2Cap": "Formulario de inspección con el visor 3D al costado: la zona que se está revisando se resalta sobre el modelo del tractocamión, y cada punto se marca como conforme o con anomalía, con foto de evidencia opcional.",
    "c.shot3Alt": "Detalle de la inspección número 36 en estado confirmado, con los diecisiete puntos de control aprobados y el certificado con código QR de verificación.",
    "c.shot3Cap": "Inspección confirmada: los 17 puntos de control aprobados y el certificado con su código QR, generado al aprobar y respaldado por el contrato inteligente.",
    "c.shot4Alt": "Panel de control de CTPAT-QR con el total de inspecciones, pendientes, alertas críticas, la gráfica de estatus global y la actividad reciente.",
    "c.shot4Cap": "Panel de control: totales de inspecciones, pendientes y alertas, estatus global y actividad reciente. Arriba a la derecha, la dirección del contrato inteligente que respalda los registros.",

    "meta.title": "Vertex Core — Tecnología sólida para operar con confianza",
    "meta.desc": "Vertex Core: desarrollo web, modernización de sistemas, soporte e infraestructura digital para PyMEs en México. Procesos claros y resultados medibles.",

    /* Títulos y descripciones por página (ver data-title-key / data-desc-key en <html>) */
    "pl.metaTitle": "Proyectos — Vertex Core",
    "pl.metaDesc": "Casos reales construidos por Vertex Core: rastreo GPS en vivo para transporte urbano, inspecciones CTPAT con trazabilidad y portal para agencias aduanales.",
    "u.metaTitle": "Urbabus — Rastreo GPS en vivo para transporte urbano | Vertex Core",
    "u.metaDesc": "Caso Urbabus: mapa público de rutas con posición en vivo, integración con dos proveedores GPS y un diagnóstico en producción que llevó el reporte de las unidades de 65 minutos a 30 segundos.",
    "c.metaTitle": "CTPAT-QR — Inspecciones con trazabilidad | Vertex Core",
    "c.metaDesc": "Caso CTPAT-QR: plataforma de inspecciones CTPAT con códigos QR, visor 3D del camión y registro en contrato inteligente. Proyecto desarrollado para la competencia InnovaTec.",
    "s.metaTitle": "SOIA — Portal de seguimiento aduanero | Vertex Core",
    "s.metaDesc": "SOIA, producto propio de Vertex Core: portal multi-tenant para agencias aduanales en México, con seguimiento de pedimentos y adaptador degradable de fuentes de datos.",
  },
  en: {
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.process": "Process",
    "nav.about": "About",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Book a meeting",
    "hero.eyebrow": "Technology services for SMBs · Mexico",
    "hero.l1": "Solid technology to",
    "hero.l2": 'operate with <span class="text-gradient">confidence</span>',
    "hero.subtitle": "We develop, modernize and support your company's digital infrastructure, with clear processes and measurable results.",
    "hero.cta1": "Book a meeting",
    "hero.cta2": "Explore services",
    "mq.1": "Web development",
    "mq.2": "Systems modernization",
    "mq.3": "IT infrastructure",
    "mq.4": "Technical support",
    "mq.5": "Digital consulting",
    "mq.6": "Business portals",
    "pillars.1t": "Adaptability",
    "pillars.1d": "We adapt to your operation, not the other way around.",
    "pillars.2t": "Traceability",
    "pillars.2d": "Visible progress and deliverables at every stage.",
    "pillars.3t": "Communication",
    "pillars.3d": "Direct contact with the team, no middlemen.",
    "services.label": "Services",
    "services.title": "Capabilities that back your operation",
    "services.1t": "Web development & portals",
    "services.1d": "We build websites, customer portals, point-of-sale systems (POS), custom systems and SaaS applications: software that runs in the browser, with nothing to install.",
    "services.1l1": "Customer and supplier portals to check orders, invoices and status online.",
    "services.1l2": "Custom systems: point of sale (POS), inventory, yard management (YMS), appointments and bookings.",
    "services.1l3": "SaaS platforms: your own subscription-based software product.",
    "services.2t": "Systems modernization",
    "services.2d": "Is your current system slow, outdated or impossible to maintain? We upgrade it in phases, without stopping your daily operation.",
    "services.2l1": "More speed and better performance for your team and your customers.",
    "services.2l2": "Control of users, products and processes in one place.",
    "services.2l3": "Scalable and cheaper to maintain: grows with your company and adapts to future requirements.",
    "services.3t": "IT support & infrastructure",
    "services.3d": "We take care of your technology day to day: preventive and corrective maintenance, monitoring, backups and user support.",
    "services.3l1": "Monitoring and automatic backups to prevent downtime and data loss.",
    "services.3l2": "Technical support for your users with defined response times.",
    "services.3l3": "Security updates and continuous improvements to your systems.",
    "services.4t": "Digital consulting",
    "services.4d": "We help you decide which technology to invest in (and which to skip), with a clear diagnosis of your processes and a realistic roadmap.",
    "services.4l1": "Diagnosis of your current processes and systems.",
    "services.4l2": "Tool recommendations with a clear cost-benefit view.",
    "services.4l3": "A staged digital roadmap, prioritized by impact.",
    "process.label": "Process",
    "process.title": "A proven, transparent way of working",
    "process.1t": "Discovery",
    "process.1d": "We analyze your needs and current operations to define precisely what your company requires.",
    "process.2t": "Proposal",
    "process.2d": "You receive a detailed plan with scope, timelines and costs defined from day one.",
    "process.3t": "Delivery & support",
    "process.3d": "We implement the solution and support your team continuously after launch.",
    "about.label": "About us",
    "about.title": "A trusted technology partner, not just another vendor",
    "about.text": "At Vertex Core we believe technology should work for your business, not the other way around. We are a Mexican company that supports SMBs with practical, measurable solutions: we build what you need, modernize what you already have and provide support when you need it. No opaque processes, no unnecessary jargon, no friction.",
    "about.v1": "Direct communication and a close relationship at every stage of the project.",
    "about.v2": "Scope, timelines and costs defined in writing from the start.",
    "about.v3": "Ongoing support after delivery: we don't disappear.",
    "faq.label": "Frequently asked questions",
    "faq.title": "Your questions, answered",
    "faq.q1": "Do you work with companies of any size?",
    "faq.a1": "We specialize in SMBs. Our processes, timelines and pricing are designed for companies that need to move forward without friction or complex corporate structures.",
    "faq.q2": "How long does a typical project take?",
    "faq.a2": "It depends on the scope, but we always define it in writing in the proposal before starting. A website can take weeks; a systems modernization is planned in phases so your operation never stops.",
    "faq.q3": "Do you offer support after delivery?",
    "faq.a3": "Yes. All our projects include post-launch support, and we offer ongoing support plans for maintenance, monitoring and continuous improvement.",
    "faq.q4": "How do we start?",
    "faq.a4": "With a free, no-commitment discovery meeting or message. We listen to your needs and present a clear proposal with defined scope, timelines and costs.",
    "contact.label": "Contact",
    "contact.title": "Let's talk about your project",
    "contact.text": "Tell us what your company needs through the form, or write to us directly. Our team will reply within 24 hours.",
    "form.name": "Name",
    "form.namePh": "Your name",
    "form.company": "Company",
    "form.companyPh": "Your company's name",
    "form.email": "Email",
    "form.emailPh": "name@company.com",
    "form.message": "Message",
    "form.messagePh": "What does your company need?",
    "form.submit": "Send message",
    "form.sending": "Sending…",
    "form.success": "Message sent. We'll reply within 24 hours.",
    "form.mailto": "Opening your email client…",
    "footer.copy": "© 2026 Vertex Core. All rights reserved.",

    /* ---- Migas de pan (páginas de proyecto) ---- */
    "bc.home": "Home",
    "bc.projects": "Projects",

    /* ---- Listado de proyectos ---- */
    "pl.label": "Projects",
    "pl.title": "Delivered work, not promises",
    "pl.text": "Every case states its real context: whether it was built for a client in production, for a competition, or as one of our own products. We would rather show less and have it hold up to scrutiny.",
    "pl.view": "View case",
    "pl.note": "Part of our work is covered by confidentiality agreements and cannot be published. We are happy to walk you through it on a call.",

    /* ---- Encabezados compartidos de las páginas de proyecto ---- */
    "pr.mClient": "Client",
    "pr.mType": "Type",
    "pr.mStatus": "Status",
    "pr.mRole": "Vertex's role",
    "pr.challengeT": "The challenge",
    "pr.builtT": "What we built",
    "pr.resultsT": "Measured results",
    "pr.scopeT": "Technical scope",
    "pr.stackT": "Tech stack",
    "pr.prev": "Previous case",
    "pr.next": "Next case",
    "pr.before": "Before",
    "pr.after": "After",
    "pr.ctaT": "Running a similar operation?",
    "pr.ctaText": "If your company faces a comparable problem, tell us about it. The first conversation is about understanding how you operate, not about selling you anything.",

    /* ---- Caso: Urbabus ---- */
    "u.tag": "Client · In production",
    "u.name": "Urbabus",
    "u.summary": "A public route map showing live vehicle positions, so riders know when their bus is actually coming.",
    "u.vClient": "Urbabus — urban transit in Nuevo Laredo",
    "u.vType": "Web platform and fleet tracking",
    "u.vStatus": "In production",
    "u.vRole": "Platform development and operations",
    "u.challengeP": "Riders had no way of knowing when their bus would arrive; they waited at the stop with no information. The operator had no visibility into the fleet either, so it was impossible to answer a complaint or confirm whether a vehicle was actually running its route.",
    "u.b1": "A public route map with the live position of every vehicle, open to any rider straight from the browser.",
    "u.b2": "A GPS sync backend that acts as the single consumer of the providers, instead of every visitor querying them independently.",
    "u.b3": "A four-state connection indicator that separates whether the device transmitted from whether the device actually knew where it was.",
    "u.b4": "Integration with two GPS providers, Traccar and Flespi, over ST-906L units with Telcel SIMs.",
    "u.b5": "An internal dashboard of vehicles and routes for the operator.",
    "u.r1": "From 65 minutes to 30 seconds between reports",
    "u.r1d": "One vehicle's device was reporting every 65.5 minutes on average. We diagnosed the unit's sleep mode with an A/B measurement in production and, once corrected, it began reporting every 30 seconds.",
    "u.r2": "Load stopped scaling with the audience",
    "u.r2d": "The map made one request per vehicle from every browser. We replaced it with a single batched request to the backend, so load no longer grows with the number of people watching the map.",
    "u.r3": "Speed reporting corrected",
    "u.r3d": "The API returned speed in knots and the map displayed it labelled as km/h. We fixed the conversion at both boundaries.",
    "u.r4": "An 8 h 34 min outage documented and closed",
    "u.r4d": "We ran the postmortem on a service outage: the Java virtual machine ran out of memory on a 1 GB instance with no swap space. We corrected the sizing and added monitoring to catch it earlier.",
    "u.figVisitor": "Visitor",
    "u.fig1Cap": "Before, every browser queried the GPS providers on its own and made one request per unit. Now the backend is the only consumer and the map gets everything in a single response.",
    "u.fig1aAlt": "Diagram: each visitor queried the GPS providers directly, one request per unit",
    "u.fig1aN1": "One request per unit, from every browser",
    "u.fig1aN2": "Load grows with the audience",
    "u.fig1bAlt": "Diagram: visitors make a single request to the Vertex backend, which is the only client of the GPS providers",
    "u.fig1bBk1": "Vertex",
    "u.fig1bBk2": "backend",
    "u.fig1bN1": "One batched request",
    "u.fig1bN2": "Load no longer depends on the audience",
    "u.fig2Alt": "Legend of the four connection states of a unit",
    "u.fig2Cap": "The indicator separates two things that used to be conflated: whether the device transmitted, and whether the device actually knew where it was. A unit with no satellite fix is no longer reported as healthy.",
    "u.fig2s1": "Online",
    "u.fig2s1d": "Transmitting and knows its position",
    "u.fig2s2": "Delayed",
    "u.fig2s2d": "Transmitting, but behind schedule",
    "u.fig2s3": "No GPS fix",
    "u.fig2s3d": "Transmitting, but cannot fix a position",
    "u.fig2s4": "Offline",
    "u.fig2s4d": "Not transmitting",
    "u.fig3Alt": "To-scale comparison of the GPS reporting interval: 65.5 minutes before, 30 seconds after",
    "u.fig3Cap": "The device was entering sleep mode and stopped reporting. Once corrected, the interval between reports dropped by two orders of magnitude.",
    "u.fig3BeforeV": "≈ 65.5 min between reports",
    "u.fig3AfterV": "30 s",
    "u.fig3Note": "A/B measurement in production. Bars to real scale:",
    "u.fig3Note2": "30 s is 1/131 of the previous interval.",

    /* ---- Caso: CTPAT-QR ---- */
    "c.tag": "Competition project · InnovaTec",
    "c.name": "CTPAT-QR",
    "c.summary": "A CTPAT inspection platform with QR codes, a 3D truck viewer and a tamper-proof record of every check.",
    "c.vClient": "Student teams from InnovaTec that advanced to the regional and national stages. Not a paying client.",
    "c.vType": "Web inspection platform",
    "c.vStatus": "Competition project",
    "c.vRole": "Platform development",
    "c.challengeP": "CTPAT inspection checks were tracked on paper. There was no traceability and no way to audit who inspected which zone of the truck, or when. A paper record can be redone after the fact, and that is precisely what a security scheme must not allow.",
    "c.b1": "Inspection management through QR codes, each one tied to a specific vehicle and check.",
    "c.b2": "A personnel module with photo credentials, so every inspection has a verifiable author.",
    "c.b3": "A 3D truck viewer that highlights the inspection zones defined by CTPAT.",
    "c.b4": "Each inspection recorded on a smart contract, so the history cannot be altered afterwards.",
    "c.b5": "Stripe payments and backend security hardening: origin allowlisting and authentication.",
    "c.scopeP": "Next.js frontend, a REST API on Node.js with Express, and a PostgreSQL database. Payments run through Stripe. The contract was built with Hardhat and deployed to the Sepolia test network.",
    "c.fig1Alt": "Inspection flow: QR scan, zone-by-zone review, timestamp and smart-contract record",
    "c.fig1Cap": "Every inspection is tied to a unit, a person and a moment. The final step writes it to a contract, which is what stops a record from being redone after the fact.",
    "c.fig1s1": "QR scan",
    "c.fig1s1d": "Identifies the unit and the inspection",
    "c.fig1s2": "Zone-by-zone inspection",
    "c.fig1s2d": "Each area of the truck is recorded",
    "c.fig1s3": "Timestamp and inspector",
    "c.fig1s3d": "Who inspected it, and when",
    "c.fig1s4": "Smart-contract record",
    "c.fig1s4d": "The history can no longer be altered",
    "c.fig2Alt": "Side schematic of a tractor-trailer with the inspection zones numbered",
    "c.fig2Cap": "The 3D viewer in the system highlights the zones to inspect on the unit. This schematic is a simplified representation; the order and scope of the inspection are set by each company’s security programme.",
    "c.fig2z1": "Bumper and engine",
    "c.fig2z2": "Tyres and axles",
    "c.fig2z3": "Fuel tanks",
    "c.fig2z4": "Cab and compartments",
    "c.fig2z5": "Fifth wheel and undercarriage",
    "c.fig2z6": "Floor, walls and roof",
    "c.fig2z7": "Doors",

    /* ---- Caso: SOIA ---- */
    "s.tag": "In-house product · MVP",
    "s.name": "SOIA",
    "s.summary": "A multi-tenant portal for customs brokers: shipment declarations and their events tracked in one place.",
    "s.vClient": "An in-house Vertex Core product. Not a client deployment.",
    "s.vType": "Multi-tenant web portal",
    "s.vStatus": "MVP",
    "s.vRole": "Product design and development",
    "s.challengeP": "At a customs agency, tracking a shipment declaration is scattered across email, spreadsheets and third-party portals. The agency's own client has nowhere to check status, so they end up calling on the phone, and somebody has to drop what they are doing to answer.",
    "s.b1": "A multi-tenant portal where each agency sees only its own data, isolated by tenant identifier.",
    "s.b2": "Tracking of shipment declarations along with the event timeline for each one.",
    "s.b3": "A gracefully degrading adapter that treats SOIA as just one more data source: if the external source fails, the portal keeps running.",
    "s.b4": "Role-based authentication, so each profile only sees and does what it should.",
    "s.scopeP": "Next.js 15 with App Router and server actions, React 19 and Tailwind CSS 4. Sessions are handled by Auth.js v5 with a JWT carrying tenant and role. Persistence via Prisma 6 on PostgreSQL 16, with unit tests in Vitest.",
    "s.fig1Alt": "Diagram: three agencies sign in to the same portal and each one reaches only its own customs entries",
    "s.fig1Cap": "Every agency uses the same application, but the session carries the tenant identifier and the role, so each query is scoped to the data of whoever makes it.",
    "s.fig1a1": "Agency A",
    "s.fig1a2": "Agency B",
    "s.fig1a3": "Agency C",
    "s.fig1Portal": "One single portal",
    "s.fig1PortalSub": "The session carries tenant and role",
    "s.fig1d1": "Entries A",
    "s.fig1d2": "Entries B",
    "s.fig1d3": "Entries C",
    "s.fig1Note": "No session can reach another agency’s data",
    "s.fig2Alt": "Diagram: the adapter queries the external source and, if it does not respond, the portal keeps running on already-synced data",
    "s.fig2Cap": "The external source is one more integration, not the heart of the system. If it stops responding the portal does not go down: it keeps showing the last data it managed to sync.",
    "s.fig2Portal": "Portal",
    "s.fig2Adapter": "Adapter",
    "s.fig2Src": "External source",
    "s.fig2Cache1": "Already-synced",
    "s.fig2Cache2": "data",
    "s.fig2Leg1": "Normal path: query the source",
    "s.fig2Leg2": "If the source fails: keep already-synced data",
    "pr.shotsT": "The system in operation",
    "u.shot1Alt": "Public page for Urbabus TEC route: the route drawn over the Nuevo Laredo map with numbered stops, a segment breakdown with distance and time, and the active-units panel.",
    "u.shot1Cap": "The TEC route on the public site: the path with its numbered stops, the distance and time of every segment, and the active-units panel where each GPS provider reports its own connection state.",
    "c.shot1Alt": "CTPAT-QR sign-in portal: the login form next to a summary of immutable auditing, multi-user management and CTPAT standard checklists.",
    "c.shot1Cap": "The sign-in portal in the QA environment, summarising the system three capabilities: immutable auditing on the Sepolia network, multi-user management of inspectors, and CTPAT standard checklists.",
    "c.shot2Alt": "CTPAT-QR inspection form with the 3D truck viewer alongside; the Front zone is highlighted and each point is marked as compliant or as an anomaly.",
    "c.shot2Cap": "The inspection form with the 3D viewer alongside: the zone under review is highlighted on the truck model, and every point is marked compliant or as an anomaly, with an optional evidence photo.",
    "c.shot3Alt": "Detail of inspection number 36 in confirmed state, with all seventeen control points approved and the certificate with its verification QR code.",
    "c.shot3Cap": "A confirmed inspection: all 17 control points approved and the certificate with its QR code, generated on approval and backed by the smart contract.",
    "c.shot4Alt": "CTPAT-QR control panel showing total inspections, pending items, critical alerts, the global status chart and recent activity.",
    "c.shot4Cap": "Control panel: inspection totals, pending items and alerts, global status and recent activity. Top right, the address of the smart contract backing the records.",

    "meta.title": "Vertex Core — Solid technology to operate with confidence",
    "meta.desc": "Vertex Core: web development, systems modernization, IT support and digital infrastructure for SMBs in Mexico. Clear processes and measurable results.",

    /* Títulos y descripciones por página (ver data-title-key / data-desc-key en <html>) */
    "pl.metaTitle": "Projects — Vertex Core",
    "pl.metaDesc": "Real work built by Vertex Core: live GPS tracking for urban transit, traceable CTPAT inspections, and a portal for customs brokers.",
    "u.metaTitle": "Urbabus — Live GPS tracking for urban transit | Vertex Core",
    "u.metaDesc": "Urbabus case study: a public route map with live positions, integration with two GPS providers, and a production diagnosis that took vehicle reporting from 65 minutes to 30 seconds.",
    "c.metaTitle": "CTPAT-QR — Traceable inspections | Vertex Core",
    "c.metaDesc": "CTPAT-QR case study: a CTPAT inspection platform with QR codes, a 3D truck viewer and smart-contract records. Built for the InnovaTec competition.",
    "s.metaTitle": "SOIA — Customs tracking portal | Vertex Core",
    "s.metaDesc": "SOIA, an in-house Vertex Core product: a multi-tenant portal for Mexican customs brokers with declaration tracking and a gracefully degrading data-source adapter.",
  },
};

let currentLang = localStorage.getItem("vc-lang") || "es";

const langToggle = document.getElementById("langToggle");
const metaDesc = document.getElementById("metaDesc");

// Aplica un idioma a todos los elementos con data-i18n / data-i18n-html / data-i18n-ph
function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = dict[el.dataset.i18nHtml];
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const value = dict[el.dataset.i18nPh];
    if (value != null) el.placeholder = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = dict[el.dataset.i18nAlt];
    if (value != null) el.alt = value;
  });

  document.documentElement.lang = lang === "es" ? "es-MX" : "en";

  // Cada página declara sus claves de título/descripción en <html data-title-key/data-desc-key>;
  // si no las declara, se usan las de la landing.
  const titleKey = document.documentElement.dataset.titleKey || "meta.title";
  const descKey = document.documentElement.dataset.descKey || "meta.desc";
  document.title = dict[titleKey] ?? dict["meta.title"];
  if (metaDesc) {
    metaDesc.setAttribute("content", dict[descKey] ?? dict["meta.desc"]);
  }

  // El botón muestra el idioma al que se puede cambiar
  langToggle.textContent = lang === "es" ? "EN" : "ES";
  langToggle.setAttribute(
    "aria-label",
    lang === "es" ? "Switch to English" : "Cambiar a español"
  );

  localStorage.setItem("vc-lang", lang);
}

langToggle.addEventListener("click", () => {
  applyLang(currentLang === "es" ? "en" : "es");
});

// Idioma inicial (el HTML ya viene en español)
if (currentLang !== "es") applyLang(currentLang);

// ---------- Tema claro / oscuro ----------
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("vc-theme", next);
});

// ============================================================
// 1. Nav con sombra + velo de desvanecido
// ============================================================
const nav = document.getElementById("nav");
const navFade = document.getElementById("navFade");
const heroGrid = document.getElementById("heroGrid");

function updateOnScroll() {
  const scrolled = window.scrollY > 10;
  nav.classList.toggle("is-scrolled", scrolled);
  navFade.classList.toggle("is-scrolled", scrolled);

  // Parallax sutil de la retícula del hero (ver sección 6)
  if (heroGrid && window.scrollY < window.innerHeight) {
    heroGrid.style.backgroundPosition = `0 ${window.scrollY * 0.25}px`;
  }
}

window.addEventListener("scroll", updateOnScroll, { passive: true });
updateOnScroll();

// ============================================================
// 2. Menú móvil
// ============================================================
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

navToggle.addEventListener("click", () => {
  const isOpen = navMobile.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

// Cierra el menú al tocar un enlace
navMobile.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMobile.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================================================
// 3. Aparición escalonada al hacer scroll
// ============================================================
document.querySelectorAll(".grid").forEach((grid) => {
  grid.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.setProperty("--d", `${i * 0.12}s`);
  });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

// ============================================================
// 4. Títulos con revelado de máscara
// ============================================================
const titles = document.querySelectorAll(".title-reveal");

if ("IntersectionObserver" in window) {
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          titleObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  titles.forEach((el) => titleObserver.observe(el));
} else {
  titles.forEach((el) => el.classList.add("is-visible"));
}

// ============================================================
// 5. Spotlight que sigue al cursor en las tarjetas
// ============================================================
document.querySelectorAll(".card, .step").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  });
});

// ============================================================
// 6. Parallax de la aurora con el cursor
// ============================================================
const aurora = document.querySelector(".hero__aurora");
const finePointer = window.matchMedia("(pointer: fine)").matches;

if (aurora && finePointer) {
  document.querySelector(".hero").addEventListener("pointermove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;  // ±20px
    const y = (e.clientY / window.innerHeight - 0.5) * 24; // ±12px
    aurora.style.setProperty("--px", `${x}px`);
    aurora.style.setProperty("--py", `${y}px`);
  });
}

// ============================================================
// 7. Botones primarios con efecto magnético
// ============================================================
if (finePointer) {
  document.querySelectorAll(".btn--primary").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
      btn.style.translate = `${x}px ${y}px`;
    });

    btn.addEventListener("pointerleave", () => {
      btn.style.translate = "0 0";
    });
  });
}

// ============================================================
// 8. Formulario de contacto
// ============================================================
// Envío principal: FormSubmit (servicio gratuito para sitios estáticos).
// IMPORTANTE: la primera vez que se use, FormSubmit enviará un correo de
// activación a CONTACT_EMAIL; hay que confirmarlo para que lleguen los mensajes.
// Respaldo: si el envío falla, se abre el cliente de correo con los datos.
const CONTACT_EMAIL = "contacto@vertexcore.mx"; // TODO: correo definitivo (Zoho Mail)

const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validación nativa (required, type="email")
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = {
      nombre: form.nombre.value.trim(),
      empresa: form.empresa.value.trim(),
      email: form.email.value.trim(),
      mensaje: form.mensaje.value.trim(),
    };

    const dict = i18n[currentLang];
    const submitBtn = form.querySelector(".contact__submit");
    submitBtn.disabled = true;
    submitBtn.textContent = dict["form.sending"];
    formStatus.textContent = "";
    formStatus.className = "contact__status";

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Contacto web — ${data.nombre}`,
          ...data,
        }),
      });

      if (!res.ok) throw new Error("Error en el envío");

      formStatus.textContent = dict["form.success"];
      formStatus.classList.add("is-success");
      form.reset();
    } catch {
      // Respaldo: abrir el cliente de correo con el mensaje redactado
      const subject = encodeURIComponent(`Contacto web — ${data.nombre}`);
      const body = encodeURIComponent(
        `Nombre: ${data.nombre}\nEmpresa: ${data.empresa}\nCorreo: ${data.email}\n\n${data.mensaje}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      formStatus.textContent = dict["form.mailto"];
      formStatus.classList.add("is-success");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = dict["form.submit"];
    }
  });
}

// ============================================================
// 9. FAQ: acordeón (se abre uno a la vez)
// ============================================================
document.querySelectorAll(".faq__item").forEach((item) => {
  const button = item.querySelector(".faq__question");

  button.addEventListener("click", () => {
    const willOpen = !item.classList.contains("is-open");

    // Cierra los demás
    document.querySelectorAll(".faq__item.is-open").forEach((open) => {
      open.classList.remove("is-open");
      open.querySelector(".faq__question").setAttribute("aria-expanded", "false");
    });

    item.classList.toggle("is-open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
  });
});
