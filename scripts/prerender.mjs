/*
 * Pré-render (SEO): injeta o HTML do app em dist/index.html para que buscadores
 * e redes sociais leiam o conteúdo sem executar JavaScript.
 */
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const ssrDir = path.resolve('dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const file = path.join(dist, 'index.html')
const template = fs.readFileSync(file, 'utf8')
const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
if (html === template) throw new Error('prerender: <div id="root"></div> não encontrado em dist/index.html')

fs.writeFileSync(file, html)
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`prerender: ${(html.length / 1024).toFixed(1)} kB escritos em dist/index.html`)
