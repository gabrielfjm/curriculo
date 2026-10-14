# curriculo

Currículo online de **Gabriel Felipe Jess Meira**, Engenheiro de Software e CEO & Founder da [JESS Branding](https://www.jessbranding.com.br).

🌐 [gabrielfjm.com.br](https://gabrielfjm.com.br)

## Stack

React + Vite · GSAP (ScrollTrigger) · Lenis (smooth scroll) · CSS puro, tema preto e branco · PT/EN

## Desenvolvimento

```bash
npm install
npm run dev      # servidor local
npm run build    # gera dist/
npm run preview  # testa o build
```

## Onde editar

- **Textos e dados** (experiências, projetos, cases da JESS, stack…): `src/data/content.js`
- **Estilos**: `src/styles.css`
- **Seções**: `src/components/`
- **Arquivos estáticos** (foto, PDF do currículo, CNAME): `public/`

## SEO

- O `npm run build` **pré-renderiza** a página (`src/entry-server.jsx` + `scripts/prerender.mjs`), então o HTML publicado já contém todo o texto para o Google.
- Título, descrição, Open Graph e dados estruturados (schema.org `Person`, `Organization`, `ProfilePage`) ficam no `index.html`.
- `public/robots.txt`, `public/sitemap.xml` (atualize o `lastmod` quando mudar o conteúdo) e `public/og.png` (imagem de compartilhamento).

## Deploy

Todo push na `main` dispara o workflow `.github/workflows/deploy.yml`, que faz o build e publica no GitHub Pages.
Em *Settings → Pages*, a fonte precisa estar como **GitHub Actions**.
