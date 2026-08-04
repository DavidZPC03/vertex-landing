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
    "meta.title": "Vertex Core — Tecnología sólida para operar con confianza",
    "meta.desc": "Vertex Core: desarrollo web, modernización de sistemas, soporte e infraestructura digital para PyMEs en México. Procesos claros y resultados medibles.",
  },
  en: {
    "nav.services": "Services",
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
    "meta.title": "Vertex Core — Solid technology to operate with confidence",
    "meta.desc": "Vertex Core: web development, systems modernization, IT support and digital infrastructure for SMBs in Mexico. Clear processes and measurable results.",
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

  document.documentElement.lang = lang === "es" ? "es-MX" : "en";
  document.title = dict["meta.title"];
  if (metaDesc) metaDesc.setAttribute("content", dict["meta.desc"]);

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
