/*
 * Modelo do CV em PDF. Gera HTML a partir de src/data/content.js.
 *
 * Pensado para a triagem automática (Gupy, LinkedIn, ATS em geral):
 * uma coluna, texto real (nada em imagem), títulos de seção padrão,
 * datas MM/AAAA, contatos escritos por extenso e ligaduras desligadas.
 */
import { profile, company, cv, experience, education, publications, projects } from '../../src/data/content.js'

const L = {
  pt: {
    summary: 'Resumo Profissional', experience: 'Experiência Profissional', education: 'Formação Acadêmica',
    publications: 'Publicações Científicas', skills: 'Competências Técnicas', projects: 'Projetos em Destaque',
    languages: 'Idiomas', soft: 'Competências Comportamentais', awards: 'Prêmios', volunteering: 'Voluntariado',
    extra: 'Informações Adicionais', tech: 'Tecnologias e competências', phone: 'Telefone', email: 'E-mail', site: 'Site', location: 'Local',
    firstAuthor: 'Primeiro autor', coAuthor: 'Coautor', current: 'Atual',
  },
  en: {
    summary: 'Professional Summary', experience: 'Professional Experience', education: 'Education',
    publications: 'Publications', skills: 'Technical Skills', projects: 'Featured Projects',
    languages: 'Languages', soft: 'Soft Skills', awards: 'Awards', volunteering: 'Volunteering',
    extra: 'Additional Information', tech: 'Technologies & skills', phone: 'Phone', email: 'Email', site: 'Website', location: 'Location',
    firstAuthor: 'First author', coAuthor: 'Co-author', current: 'Present',
  },
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const rich = (s) => esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
const bare = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export function renderCV(lang, { iconDataUri, photoDataUri, fontCss }) {
  const t = (v) => (v && typeof v === 'object' && !Array.isArray(v) && 'pt' in v ? v[lang] : v)
  const l = L[lang]
  const section = (title, body) => `<section><h2>${esc(title)}</h2>${body}</section>`
  const list = (items) => `<ul>${items.map((i) => `<li>${rich(i)}</li>`).join('')}</ul>`
  const link = (url, text = bare(url)) => `<a href="${esc(url)}">${esc(text)}</a>`

  const contact = [
    [l.location, esc(t(cv.location))],
    [l.phone, esc(profile.phone)],
    [l.email, link(`mailto:${profile.email}`, profile.email)],
    ['LinkedIn', link(profile.linkedin)],
    ['GitHub', link(profile.github)],
    [l.site, link('https://gabrielfjm.com.br')],
  ].map(([k, v]) => `<span class="c"><span class="k">${esc(k)}:</span> ${v}</span>`).join('')

  const exp = experience.map((x) => `
    <div class="item">
      <div class="row"><h3>${esc(t(x.title))}</h3><span class="date">${esc(t(x.period))}</span></div>
      <p class="org">${esc(t(x.orgName))}${x.place ? ` · ${esc(t(x.place))}` : ''}${x.orgUrl ? ` · ${link(x.orgUrl)}` : ''}</p>
      ${list(t(x.bullets))}
      ${x.stack ? `<p class="stack"><span class="k">${l.tech}:</span> ${x.stack.map((s) => esc(t(s))).join(', ')}</p>` : ''}
    </div>`).join('')

  const edu = education.items.map((e) => `
    <div class="item tight">
      <div class="row"><h3>${esc(t(e.cvTitle || e.title))}</h3><span class="date">${esc(t(e.date).replace(' · ', ' - ').replace(' a ', ' - ').replace(' to ', ' - '))}</span></div>
      <p class="org">${esc(e.inst)}${e.badge ? ` · ${e.badge.icon === 'fa-star' ? `<strong>${lang === 'en' ? 'Marcelino Champagnat Award, sole outstanding student of the class' : 'Prêmio Aluno Marcelino Champagnat, destaque único da turma'}</strong>` : esc(t(e.badge.label))}` : ''}</p>
    </div>`).join('')

  const pubs = publications.map((p) => {
    const authors = p.authors.map((a) => (a.me ? `<strong>${esc(a.name)}</strong>` : esc(a.name))).join(', ')
    return `
    <div class="item">
      <div class="row"><h3>${esc(p.title)}</h3><span class="date">${esc(p.short)}</span></div>
      <p class="org">${p.featured ? l.firstAuthor : l.coAuthor} · ${esc(p.venue)} · ${esc(t(p.cite).split(', ').slice(1).join(', '))}</p>
      <p class="authors">${authors}</p>
      <p class="desc">${esc(t(p.cvSummary))} DOI: ${link(p.doiUrl || `https://doi.org/${p.doi}`, p.doi)}</p>
    </div>`
  }).join('')

  const skills = cv.skills.map((g) => `<p class="skill"><span class="k">${esc(t(g.name))}:</span> ${g.items.map((i) => esc(t(i))).join(', ')}</p>`).join('')

  const projs = projects.map((p) => `
    <div class="item tight">
      <div class="row"><h3>${esc(t(p.name))} <span class="kind">· ${esc(t(p.kind))} · ${p.year}</span></h3><span class="date">${link(p.url)}</span></div>
      <p class="desc">${esc(t(p.cvDesc || p.desc))}</p>
    </div>`).join('')


  return `<!doctype html>
<html lang="${lang === 'en' ? 'en' : 'pt-BR'}">
<head>
<meta charset="utf-8">
<title>${esc(profile.name)} | ${esc(t(cv.headline))}</title>
<style>
  /* Fontes estáticas embutidas: o Chrome grava como TrueType (fontes variáveis viram Tipo 3 e ficam estranhas em vários leitores de PDF) */
${fontCss}
  @page { size: A4; margin: 9.5mm 13mm 12mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body {
    font-family: 'Inter', Arial, sans-serif; font-size: 8.8pt; line-height: 1.37; color: #161616;
    font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0; hyphens: none;
  }
  a { color: inherit; text-decoration: none; border-bottom: .5pt solid #b5b5b5; }
  strong { font-weight: 600; color: #000; }

  /* Cabeçalho */
  .hd { display: flex; align-items: center; gap: 5mm; padding-top: 1mm; }
  .hd-text { flex: 1; }
  .mono-logo { align-self: flex-start; }
  /* Foto com cantoneiras, como no site */
  .photo { width: 24mm; height: 24mm; padding: 1.2mm; border: .5pt solid #c9c9c9; flex: none; background: linear-gradient(#000, #000) no-repeat 0 0 / 3mm .8pt, linear-gradient(#000, #000) no-repeat 0 0 / .8pt 3mm, linear-gradient(#000, #000) no-repeat 100% 100% / 3mm .8pt, linear-gradient(#000, #000) no-repeat 100% 100% / .8pt 3mm; }
  .photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
  h1 { font-family: 'Space Grotesk', Arial, sans-serif; font-weight: 700; font-size: 24pt; line-height: 1; letter-spacing: -.03em; color: #000; }
  .headline { margin-top: 2.2mm; font-size: 10.5pt; font-weight: 500; color: #333; }
  .mono-logo { width: 15mm; height: 15mm; border-radius: 3mm; flex: none; }
  .contact {
    display: flex; flex-wrap: wrap; gap: 1.2mm 5mm; margin-top: 3.4mm; padding: 2.2mm 0;
    border-top: 1.2pt solid #000; border-bottom: .5pt solid #cfcfcf; font-size: 8.4pt;
  }
  .c { white-space: nowrap; }
  .k { font-family: 'JetBrains Mono', monospace; font-size: 7.4pt; letter-spacing: 0; text-transform: uppercase; color: #6b6b6b; }

  /* Seções */
  section { margin-top: 3.3mm; }
  h2 {
    display: flex; align-items: center; gap: 2.4mm; margin-bottom: 2.4mm;
    font-family: 'JetBrains Mono', monospace; font-weight: 500; font-size: 8.6pt; letter-spacing: .04em; text-transform: uppercase; color: #000;
    break-after: avoid;
  }
  h2::before { content: ''; width: 2.2mm; height: 2.2mm; background: #000; flex: none; }
  h2::after { content: ''; flex: 1; height: .5pt; background: #cfcfcf; }
  .summary { color: #2a2a2a; }

  .item { margin-bottom: 2.2mm; }
  .item.tight { break-inside: avoid; }
  .row, .org { break-after: avoid; }
  li { break-inside: avoid; }
  .item.tight { margin-bottom: 1.8mm; }
  .item:last-child { margin-bottom: 0; }
  .row { display: flex; justify-content: space-between; align-items: baseline; gap: 4mm; }
  h3 { font-family: 'Inter', Arial, sans-serif; font-weight: 600; font-size: 10pt; color: #000; letter-spacing: -.005em; }
  .kind { font-family: 'Inter', Arial, sans-serif; font-weight: 400; font-size: 8.6pt; color: #6b6b6b; letter-spacing: 0; }
  .date { flex: none; font-family: 'JetBrains Mono', monospace; font-size: 8pt; color: #444; }
  .org { margin-top: .4mm; font-size: 8.8pt; color: #555; }
  .authors { margin-top: .6mm; font-size: 8.6pt; color: #444; }
  .desc { margin-top: .8mm; color: #2a2a2a; }
  .stack { margin-top: .8mm; font-size: 8.4pt; color: #444; }
  .stack-inline { font-size: 8.4pt; color: #444; }
  ul { list-style: none; margin-top: 1.2mm; }
  /* Marcador desenhado como fundo: elementos posicionados iriam para o fim do texto do PDF e bagunçariam a ordem de leitura dos ATS */
  li { padding-left: 4mm; margin-top: .35mm; color: #2a2a2a; background: linear-gradient(#000, #000) no-repeat .6mm 1.6mm / 1.3mm 1.3mm; }
  .skill { margin-top: .9mm; }
  .skill:first-child { margin-top: 0; }
  .inline p + p { margin-top: .9mm; }
</style>
</head>
<body>
  <header class="hd">
    <div class="photo"><img src="${photoDataUri}" alt=""></div>
    <div class="hd-text">
      <h1>${esc(profile.name)}</h1>
      <p class="headline">${esc(t(cv.headline))}</p>
    </div>
    <img class="mono-logo" src="${iconDataUri}" alt="">
  </header>
  <div class="contact">${contact}</div>

  ${section(l.summary, `<p class="summary">${rich(t(cv.summary))}</p>`)}
  ${section(l.experience, exp)}
  ${section(l.education, edu)}
  ${section(l.publications, pubs)}
  ${section(l.skills, skills)}
  ${section(l.projects, projs)}
  ${section(l.extra, `<div class="inline">
    <p><span class="k">${l.languages}:</span> ${cv.languages.map((x) => `${esc(t(x.name))} (${esc(t(x.level))})`).join(', ')}</p>
    <p><span class="k">${l.soft}:</span> ${t(cv.softSkills).map(esc).join(', ')}</p>
    <p><span class="k">${l.volunteering}:</span> ${esc(t(cv.volunteering))}</p>
  </div>`)}
</body>
</html>`
}

export const footerTemplate = (lang) => `
<div style="width:100%;padding:0 14mm;font-family:Arial,sans-serif;font-size:7pt;color:#8a8a8a;display:flex;justify-content:space-between;">
  <span>${esc(profile.name)} · ${lang === 'en' ? 'Resume' : 'Currículo'} · gabrielfjm.com.br · ${esc(company.name)}</span>
  <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
</div>`
