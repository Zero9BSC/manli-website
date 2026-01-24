# MANLI S.A.S. — Sitio web

Sitio corporativo para MANLI S.A.S., servicios de limpieza en edificios, instituciones y consorcios. Puerto Madryn, Chubut, Argentina. Responsable: Pereda Fabiana Damaris.

## Stack

- **Astro** (Islands) + **Tailwind CSS**
- Colores: verde `#0D9488` y azul `#1E40AF`

## Comandos

```bash
npm install
npm run dev    # http://localhost:4321
npm run build
npm run preview
```

## Despliegue

1. **Formulario de contacto**  
   En `src/components/Contact.astro` reemplace `YOUR_FORM_ID` en `formAction` por el ID de su formulario en [Formspree](https://formspree.io) (registre manlisas.001@gmail.com como destinatario). Alternativa: Netlify Forms u otro proveedor.

2. **Logo**  
   Sustituya `public/logo.svg` por el logo oficial de la empresa (el actual es un wordmark de respaldo).

3. **Galería**  
   Reemplace los placeholders en `src/components/Gallery.astro` por imágenes reales usando `astro:assets`:

   ```astro
   import img1 from '../assets/galeria/1.jpg';
   // ...
   <Image src={img1} alt="..." />
   ```

4. **Redes sociales**  
   Actualice los `href` en `src/components/SocialLinks.astro` con las URLs de los perfiles corporativos.

5. **Dominio**  
   En `astro.config.mjs` ajuste `site` a la URL final.

## Estructura

- `src/layouts/Layout.astro` — Layout base
- `src/components/` — Header, Hero, About, Services, Gallery, FAQ, Contact, Footer, WhatsAppButton, SocialLinks
- `src/pages/index.astro` — Página de inicio

Ver `PLAN.md` para el plan completo.
