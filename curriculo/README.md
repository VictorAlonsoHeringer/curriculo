# Victor Heringer — Portfolio

Portfólio profissional bilíngue de Victor Alonso Heringer, Backend Developer em Vitória, Brasil. O projeto foi reconstruído como um produto estático, acessível e de alto desempenho.

## Stack

- Astro para geração estática, metadata e composição das páginas.
- React somente na command palette interativa.
- TypeScript em modo estrito para contratos de conteúdo e componentes.
- CSS nativo com design tokens e temas configuráveis.
- Vitest e Playwright para testes.
- ESLint, Prettier, Husky e lint-staged para qualidade contínua.

## Arquitetura

```text
src/
├── components/
│   ├── features/        # Ilhas interativas, como a command palette
│   ├── resume/          # Documento semântico e imprimível do currículo
│   ├── sections/        # Composição das páginas
│   └── ui/              # Primitivos visuais reutilizáveis
├── data/                # Conteúdo tipado em português e inglês
├── layouts/             # Documento, SEO, schema e comportamento global
├── pages/               # Portfólio e currículo em português e inglês
├── styles/              # Design system e responsividade
├── types/               # Contratos de domínio
└── utils/               # Funções puras e testáveis
```

O conteúdo é independente dos componentes:

- `src/data/profile.ts`: nome, cargo, localização, email e links compartilhados;
- `src/data/portfolio.ts`: experiências, projetos, competências e formação em português e inglês;
- `src/data/resume.ts`: adaptação, seleção e rótulos específicos do currículo.

Para atualizar informações profissionais, altere essas fontes tipadas. A página e o currículo consomem os mesmos dados; não adicione informações diretamente aos componentes.

## Decisões importantes

### Astro com React islands

O conteúdo principal não precisa de hidratação. Astro entrega HTML pronto, enquanto React é carregado apenas para a command palette.

Benefícios:

- menor JavaScript inicial;
- melhor LCP e SEO;
- menos estados e efeitos no runtime;
- interatividade preservada onde agrega valor.

Trade-off: componentes Astro e React convivem na base, exigindo limites explícitos entre conteúdo estático e estado interativo.

### Currículo em HTML e CSS de impressão

As rotas `/resume/` e `/en/resume/` geram um documento próprio em formato A4. O botão de exportação abre a rota do idioma atual com a impressão automática; no navegador, escolha **Salvar como PDF**. O título do documento define os nomes sugeridos:

```text
Victor-Alonso-Heringer-Curriculo-PT.pdf
Victor-Alonso-Heringer-Resume-EN.pdf
```

A implementação usa HTML semântico, `@page`, `@media print` e `window.print()`. Isso mantém texto selecionável, links clicáveis, ordem de leitura linear e compatibilidade com ATS. Menus, botões e feedbacks usam a classe `no-print` e não aparecem no PDF.

Nenhuma dependência de PDF foi adicionada. O trade-off é que o usuário confirma **Salvar como PDF** na interface nativa do navegador e pequenas diferenças de renderização podem existir entre mecanismos de impressão. Chromium é a referência validada.

### CSS próprio em vez de framework visual

O design system utiliza custom properties, `@layer` e breakpoints definidos pelo produto. Isso elimina classes repetitivas e permite que tema, contraste e motion sejam tratados como decisões sistêmicas.

Trade-off: os estilos iniciais são mais extensos, mas não adicionam runtime ou dependência de framework.

### Métricas verificáveis

Commits totais, resultados comerciais e contribuições privadas não são exibidos sem fonte confiável. O portfólio prefere uma informação menor e correta a uma estatística atraente, porém enganosa.

## Executando localmente

Requisitos:

- Node.js 22.12 ou superior;
- npm 9.6 ou superior.

```bash
npm install
npm run dev
```

A aplicação estará em `http://localhost:4321`.

## Qualidade

```bash
npm run lint
npm run check
npm test
npm run build
npm run test:e2e
```

Antes do primeiro teste E2E:

```bash
npx playwright install --with-deps chromium
```

Metas:

- Performance Lighthouse ≥ 95;
- Accessibility = 100;
- Best Practices = 100;
- SEO ≥ 95;
- CLS ≤ 0,05.

Os resultados podem variar conforme hardware, rede e ambiente de auditoria.

## Conteúdo e idiomas

- Português: `/`
- Inglês: `/en/`
- Currículo em português: `/resume/`
- Résumé em inglês: `/en/resume/`
- Alternância por link real, com páginas indexáveis e `hreflang`.
- Preferência de tema persistida em `localStorage`.
- `Ctrl/Cmd + K` abre a command palette.

## Testando a exportação do currículo

1. Execute `npm run dev`.
2. Acesse `/` ou `/en/`.
3. Selecione **Exportar currículo** ou **Download résumé**.
4. Confira a prévia e escolha **Salvar como PDF**.

Os testes unitários validam montagem dos dados, idioma, nome do arquivo, campos opcionais, períodos, ordenação e seleção de projetos. O Playwright valida os botões, estados, erro de popup, teclado, rotas bilíngues, responsividade, mídia de impressão e geração de um PDF A4 real.

A validação de extração foi feita sobre o PDF gerado pelo Chromium: duas páginas, texto pesquisável em ordem lógica, conteúdo equilibrado e links preservados.

## Deploy

O resultado de `npm run build` é gerado em `dist/`.

### Vercel

Configure `curriculo` como Root Directory. O arquivo `vercel.json` já define build e saída.

### Netlify

O `netlify.toml` na raiz do repositório executa o projeto a partir da pasta correta.

### Cloudflare Pages

- Root directory: `curriculo`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22.12`

### GitHub Pages

```bash
SITE_URL=https://victoralonsoheringer.github.io \
BASE_PATH=/curriculo \
npm run build
```

## Segurança e privacidade

- Nenhuma chave é incluída no bundle.
- Links externos usam `rel="noreferrer"`.
- Headers recomendados estão em `public/_headers`.
- Telefone e WhatsApp não são publicados.
- O projeto não inventa dados profissionais ausentes.

## Licença

O código pode ser estudado como referência. Textos, fotografia, identidade visual e informações pessoais permanecem de propriedade de Victor Heringer.
