# Brief: Landing Page de Vertex Core

> Instrucciones de uso: abre Kimi Code dentro de una carpeta vacía del proyecto (ej. `vertex-landing`), ejecuta `/init` si lo deseas, y pega el prompt de la sección 2 tal cual.

---

## 1. Pasos previos (una sola vez)

**Instalar Kimi Code CLI**

- macOS / Linux:
  ```bash
  curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash
  ```
- Windows (PowerShell):
  ```powershell
  irm https://code.kimi.com/kimi-code/install.ps1 | iex
  ```
- Alternativa con npm (requiere Node.js 22.19+):
  ```bash
  npm install -g @moonshot-ai/kimi-code
  ```

**Primer arranque**

```bash
mkdir vertex-landing && cd vertex-landing
kimi
```

1. Dentro de la interfaz, escribe `/login` y elige **Kimi Code (OAuth)** para entrar con tu cuenta (requiere membresía Kimi activa) o una API key de platform.kimi.ai.
2. Pega el prompt de la sección 2 y deja que trabaje.
3. Comandos útiles: `/help` (ayuda), `/new` (nueva sesión), `/exit` (salir).

Referencia oficial: https://www.kimi.com/help/kimi-code/cli-getting-started

---

## 2. Prompt listo para pegar en Kimi Code

```
Construye la landing page de Vertex Core, una empresa mexicana de servicios
de tecnología/IT (desarrollo web, modernización de portales, soporte e
infraestructura digital para PyMEs). El sitio estará en español (México).

ESTILO VISUAL (inspirado en el template "Arion" de Framer, estilo dark SaaS):
- Tema oscuro minimalista: fondo casi negro (#0A0A0A), texto blanco/gris claro.
- Tipografía sans-serif grande y protagonista en el hero (tipo Inter o similar,
  carga desde Google Fonts).
- Acento visual sutil tipo "aurora": un degradado difuminado de fondo en el
  hero (verdes/azules suaves, con blur), sin saturar.
- Bordes visibles finos (1px, gris oscuro) separando secciones y tarjetas.
- Botones tipo "pill" redondeados: primario blanco con texto negro, secundario
  con borde.
- Footer grande con el nombre "Vertex Core" en tipografía enorme.
- Espacios generosos, diseño limpio, nada de clutter.
- Animaciones sutiles al hacer scroll (fade-in) y hover en botones/tarjetas.

STACK Y REQUISITOS TÉCNICOS:
- HTML + CSS + JavaScript puro, sin frameworks ni build step (se va a hostear
  gratis en Cloudflare Pages como sitio estático).
- Un solo index.html (puede separarse styles.css y script.js si lo prefieres).
- 100% responsive (móvil primero).
- Rápido: sin librerías pesadas, imágenes optimizadas o generadas con CSS/SVG.
- Meta tags básicos de SEO y Open Graph (título, descripción).
- Favicon simple con la "V" de Vertex en SVG.

ESTRUCTURA DE LA PÁGINA (una sola página con navegación por anclas):
1. Nav fija: logo "Vertex Core", links a Servicios / Proceso / Nosotros /
   Contacto, botón CTA "Agenda una llamada".
2. Hero: titular grande (propón un copy tipo "Tecnología que impulsa tu
   negocio"), subtítulo breve, dos botones (primario "Agenda una llamada",
   secundario "Ver servicios") y el fondo aurora.
3. Servicios: grid de 3-4 tarjetas (Desarrollo web y portales, Modernización
   de sistemas, Soporte e infraestructura IT, Consultoría digital) con ícono,
   título y descripción de una línea.
4. Proceso: 3 pasos numerados (Descubrimiento, Propuesta, Ejecución y soporte).
5. Nosotros: párrafo corto sobre Vertex Core como socio tecnológico cercano
   para PyMEs, enfoque práctico y sin fricciones.
6. Contacto / CTA final: bloque con titular "¿Hablamos?", botón mailto a
   contacto@vertexcore.mx (placeholder, lo ajustamos después) y nota de que
   respondemos en menos de 24 horas.
7. Footer grande: "Vertex Core" en tipografía gigante, links y copyright 2026.

Contenido de ejemplo en español neutro mexicano, tono profesional pero
cercano. Deja el código limpio y comentado para poder editarlo fácil.
```

---

## 3. Después de generar el sitio

1. Pide a Kimi Code ajustes iterando en lenguaje natural: "haz el hero más alto", "cambia el acento a azul", "agrega sección de testimonios".
2. Revisa el resultado abriendo `index.html` en tu navegador.
3. Para publicarlo gratis con tu dominio:
   - Sube la carpeta a un repo de GitHub.
   - En Cloudflare Pages: **Create project → Connect to Git** y despliega (sin build command).
   - En **Custom domains**, agrega tu dominio; como ya está en Cloudflare, el DNS se configura solo y el SSL es automático.

## 4. Pendientes de contenido (ajustar antes de publicar)

- [ ] Correo de contacto definitivo (el de Zoho Mail que configures)
- [ ] Copy final del hero y servicios (podemos redactarlo juntos)
- [ ] Logo de Vertex Core (por ahora se usa la "V" tipográfica)
- [ ] Foto o datos de Felipe y tú si agregan sección de equipo
