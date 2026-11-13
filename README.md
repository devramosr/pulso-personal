# Pulso Personal: site modelo para personal trainer

Modelo de site demonstrativo para **personal trainer**. Todos os nomes, preços, endereço e depoimentos são **fictícios**.

![Desktop](docs/screenshot-desktop.png)

<img src="docs/screenshot-mobile.png" alt="Versão mobile" width="260" />

## O que tem

- **Monte seu plano**: o visitante escolhe objetivo, local (estúdio, casa ou online), frequência semanal e período. O valor mensal é calculado na hora (com desconto por frequência) e o plano vai pronto para o WhatsApp.
- Bilíngue: português em `/` e inglês em `/en/`, com seletor PT | EN.
- Todo o conteúdo em um só arquivo: `src/data.js`.
- Botão de contato que abre o WhatsApp com mensagem pronta.
- Pré-renderização estática (HTML pronto no build), Open Graph, JSON-LD e `hreflang`/`canonical` (quando `site.url` estiver preenchido).
- Responsivo (testado em 360, 390 e 1280 px) e acessível: botões com `aria-pressed`, foco visível, link "pular para o conteúdo", FAQ com `<details>` e `prefers-reduced-motion` respeitado.

## Tecnologia

Vite 5 + React 18. Fontes Space Grotesk e DM Sans, hospedadas no próprio projeto (sem CDN).

## Como rodar

```bash
npm install
npm run dev       # desenvolvimento
npm run build     # build + pré-renderização em dist/
npm run preview   # servir o build
```

## Como adaptar para um cliente real

1. Troque os textos em PT e EN, os preços (`prices`, `discounts`) e as modalidades em `src/data.js`.
2. Troque `site.whatsapp` (formato internacional, só dígitos) e `site.instagram`.
3. Preencha `site.url` com o endereço final e faça o redeploy. Isso liga canonical, hreflang, og:url, og:image absoluto, sitemap e robots.txt.
4. **Apague a linha `<meta name="robots" content="noindex, nofollow">`** em `index.html`. Ela existe só porque os dados do modelo são fictícios.
5. Troque as imagens `public/og.png` e `public/og-en.png` (1200 x 630) e o `public/favicon.svg`.
6. Troque a ilustração da treinadora (`TrainerArt` em `src/App.jsx`) por uma foto real, se houver.

## Publicação

Deploy na Vercel (projeto próprio): framework Vite, comando `npm run build`, pasta de saída `dist`.
Para clientes reais, use Cloudflare Pages ou Netlify (o plano gratuito da Vercel é só para uso não comercial).

## Estrutura

```
src/data.js            conteúdo PT/EN, preços e contato
src/App.jsx            componentes e lógica do montador de plano
src/styles.css         estilos (tokens de cor no :root)
src/entry-client.jsx   entrada do navegador (hidratação)
src/entry-server.jsx   entrada da pré-renderização
scripts/prerender.mjs  gera dist/index.html e dist/en/index.html
public/                favicon, og.png, og-en.png
docs/                  prints usados neste README
```
