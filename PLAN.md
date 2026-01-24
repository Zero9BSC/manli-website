# MANLI S.A.S. — Plan de Desarrollo Web

## 1. Resumen del Proyecto

**Cliente:** MANLI S.A.S. — Servicios de limpieza  
**Ubicación:** Puerto Madryn, Argentina  
**Objetivo:** Sitio web corporativo de alto impacto, optimizado y orientado a conversión.

---

## 2. Stack Técnico

| Tecnología | Uso |
|------------|-----|
| **Astro** (latest) | Framework con Islands Architecture: HTML estático + hidratación selectiva |
| **Tailwind CSS** | Estilos, diseño responsive, tokens de diseño |
| **astro:assets** | Imágenes optimizadas (responsive, WebP/AVIF) para Lighthouse 100/100 |

---

## 3. Paleta y Estilo

- **Verde corporativo:** `#0D9488` (teal-600) — Confianza, limpieza, naturaleza  
- **Azul corporativo:** `#1E40AF` (blue-800) — Profesionalismo, seriedad  
- **Acentos:** `teal-500`, `blue-600` para CTAs y enlaces  
- **Neutros:** `slate-800`, `slate-600`, `slate-50`  
- **Estilo:** Moderno, formal, limpio. Tipografía clara (ej. `font-sans` system / Inter).

---

## 4. Estructura de Secciones (orden en página)

| # | Sección | ID | Contenido principal |
|---|---------|-----|--------------------|
| 1 | **Inicio (Hero)** | `#inicio` | Headline de alto impacto, subheadline, CTA principal, imagen/ilustración de servicios de limpieza |
| 2 | **Quiénes somos** | `#quienes-somos` | Misión, valores, años de experiencia, tono corporativo |
| 3 | **Servicios** | `#servicios` | Foco: *limpieza en edificios, instituciones y consorcios*. Cards por tipo de servicio |
| 4 | **Galería** | `#galeria` | Grid de imágenes (placeholders o astro:assets) mostrando resultados de trabajo |
| 5 | **Preguntas frecuentes** | `#faq` | Acordeón con FAQs típicas (precios, cobertura, contratación, etc.) |
| 6 | **Contacto** | `#contacto` | Formulario de correo electrónico + datos: teléfono, email, ubicación |

---

## 5. Componentes (`/src/components/`)

| Componente | Archivo | Responsabilidad |
|------------|---------|-----------------|
| **Header** | `Header.astro` | Nav con enlaces ancla, logo, menú móvil (hamburguesa). Sticky. |
| **Hero** | `Hero.astro` | Hero de Inicio con CTA |
| **About** | `About.astro` | Misión, valores, experiencia |
| **Services** | `Services.astro` | Cards de servicios (edificios, instituciones, consorcios) |
| **Gallery** | `Gallery.astro` | Grid de imágenes con astro:assets |
| **FAQ** | `FAQ.astro` | Acordeón (isla React/Vue o HTML+details o Alpine; se elegirá ligero para performance) |
| **Contact** | `Contact.astro` | Formulario + datos de contacto |
| **Footer** | `Footer.astro` | Links, redes, copyright, datos abreviados |
| **WhatsAppButton** | `WhatsAppButton.astro` | Botón flotante (href wa.me/542804601630) — isla mínima si hace falta animación |
| **SocialLinks** | `SocialLinks.astro` | Iconos enlazando a redes corporativas (cuando se definan; placeholder href) |

---

## 6. Datos de Contacto (integración)

- **Teléfono:** 2804601630 (formato link: `tel:+542804601630`)  
- **Email:** manlisas.001@gmail.com (mailto + formulario)  
- **Ubicación:** Puerto Madryn, Chubut, Argentina (texto + opcional link a maps)  
- **WhatsApp:** `https://wa.me/542804601630`

---

## 7. UX y Audiencia

- **Edad objetivo:** 18–30 → diseño moderno, rápido, mobile-first.  
- **Segmentos:** PyMEs, instituciones, consumidor final.  
- **Estrategia:**  
  - Carga rápida (HTML + CSS; JS solo en islas necesarias).  
  - CTAs visibles (Hero, Contact, WhatsApp flotante).  
  - Navegación por anclas suaves.  
  - Formulario simple (nombre, email, mensaje mínimo).

---

## 8. Optimización Lighthouse 100/100

- **astro:assets** para todas las imágenes (responsive, formatos modernos).  
- CSS crítico inline o en un único bundle mínimo.  
- Scripts solo donde haga falta (FAQ acordeón, menú móvil); preferir HTML/CSS puro cuando sea posible.  
- `preload` de fuentes si se usan webfonts; otherwise system fonts.  
- Meta `description`, `title`, Open Graph básico.  
- Semántica HTML5 (header, main, section, footer, nav).

---

## 9. Archivos Clave

```
manli-website/
├── PLAN.md
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   └── (favicon, imágenes estáticas si no van por astro:assets)
└── src/
    ├── layouts/
    │   └── Layout.astro
    ├── components/
    │   ├── Header.astro
    │   ├── Hero.astro
    │   ├── About.astro
    │   ├── Services.astro
    │   ├── Gallery.astro
    │   ├── FAQ.astro
    │   ├── Contact.astro
    │   ├── Footer.astro
    │   ├── WhatsAppButton.astro
    │   └── SocialLinks.astro
    ├── pages/
    │   └── index.astro
    └── assets/   (opcional, para astro:assets)
```

---

## 10. Orden de Implementación

1. Plan (este documento).  
2. Proyecto Astro + Tailwind (`tailwind.config.mjs` con colores corporativos).  
3. `Layout.astro` (meta, fuentes, estructura base).  
4. Componentes en `/src/components/` (Header, Hero, About, Services, Gallery, FAQ, Contact, Footer, WhatsAppButton, SocialLinks).  
5. `index.astro` ensamblando todas las secciones.  
6. Pruebas Lighthouse y ajustes finales.
