# Site — Next Level Contabilidade

Site institucional em HTML/CSS/JS puro (sem build, sem framework, sem dependências de
Node/npm). Pode ser publicado como está em qualquer hospedagem de arquivos estáticos
(Turbocloud, Vercel, Netlify, S3, etc.) — basta subir o conteúdo desta pasta `site/`.

Conteúdo e identidade visual baseados em:
- `../Textos-do-Site-Next-Level.html` (textos aprovados por página)
- `../Manual-de-Marca-Next-Level.html` (paleta, tipografia, logotipo, direção de imagem)
- `../Briefing/` (transcrição da reunião de alinhamento, logos originais, banco de imagens)

---

## Estrutura de pastas

```
site/
├── index.html          Home
├── sobre.html           Sobre
├── servicos.html         Serviços
├── contato.html          Contato
├── clinicas-medicas.html Clínicas Médicas (redução de tributos para clínicas)
├── README.md            este arquivo
└── assets/
    ├── css/
    │   └── style.css     folha de estilos única, usada pelas 4 páginas
    ├── js/
    │   └── main.js       menu mobile, links de WhatsApp, animações, FAQ
    └── img/
        ├── logo-horizontal.svg   logo usada no header/footer (Variação 02 do briefing)
        ├── logo-vertical.svg     logo empilhada (Variação 01 do briefing) — não usada ainda, disponível para materiais futuros
        ├── simbolo.svg           símbolo isolado (seta) — disponível para materiais futuros
        ├── favicon.svg           favicon gerado a partir do símbolo + fundo azul principal
        ├── hero-home.jpg         fachada desfocada, diagonal (Home — hero)
        ├── hero-sobre.jpg        prédios desfocados à noite (Sobre — hero; gerada no Magnific)
        ├── hero-servicos.jpg     mesa com relatórios desfocada (Serviços — hero; gerada no Magnific)
        ├── hero-clinicas.jpg     corredor de clínica desfocado (Clínicas Médicas — hero e faixa em Serviços; gerada no Magnific)
        ├── hero-contato.jpg      sala de reunião desfocada (Contato — hero; gerada no Magnific)
        ├── dados-still-01.jpg    still-life de relatórios/gráficos (Home "Diferencial", Serviços "Planos")
        ├── dados-still-02.jpg    still-life de documentos/óculos (Sobre "Missão")
        ├── vidro-predio.jpg      detalhe de fachada de vidro escura (Sobre "Time", Home "Planos teaser")
        ├── dados-abstrato.jpg    composição abstrata de gráficos (Serviços "Parceria")
        └── icons/                ícones vetoriais gerados sob medida (linha, azul da marca)
            ├── icon-impostos.svg
            ├── icon-relatorios.svg
            ├── icon-folha.svg
            ├── icon-reducao.svg
            ├── icon-email.svg
            └── icon-endereco.svg
```

### Linguagem visual (redesign fotográfico)

O site foi desenhado para nunca encadear duas dobras brancas seguidas e para que o
header de toda página sempre mostre uma foto real (não apenas um gradiente flat).
Cada página alterna três tipos de seção:

- **`.photo-section`** — foto full-bleed com overlay (`.overlay-brand` para fotos de
  arquitetura/clima, `.overlay-dark` para fotos mais escuras/still-life), usada para
  blocos de conteúdo de alto impacto (Diferencial, Planos, Time, Missão, Parceria).
  Cards brancos (`.float-card`) podem flutuar por cima com sombra reforçada.
- **`.section`** (branco) — blocos de leitura mais simples (listas, tags, FAQ),
  sempre intercalados por uma seção fotográfica ou escura antes e depois.
- **`.gradient-section`** — fecho de página em gradiente azul cheio (sem foto),
  usado nos CTAs finais e na seção de contato.

Sequência por página (P = foto, B = branco, G = gradiente, D = rodapé escuro):
- Home: P → B → P → B → P → G → D
- Sobre: P → B → P → P → G → D
- Serviços: P → B → P → B → P → B → G → D
- Contato: P → G → D

Ao editar ou adicionar seções, manter essa alternância — nunca dois `B` seguidos.

Os ícones em `assets/img/icons/` foram gerados sob medida (vetor, cor sólida
`#123B73`) para combinar com a paleta da marca, em vez de usar um pacote de ícones
genérico. Ficam como `<img>` comuns — para trocar algum, basta substituir o arquivo
SVG mantendo o mesmo nome.

Não há processo de build: os arquivos podem ser abertos/publicados diretamente. Os únicos
recursos externos carregados são as fontes do Google Fonts (Sora + Inter), via `<link>` no
`<head>` de cada página.

---

## Pendências de conteúdo antes de publicar

Estão sinalizadas no próprio site com um estilo de "nota de produção" (fundo bege,
borda tracejada laranja) ou com a classe `.todo` (texto laranja sublinhado tracejado),
para ficarem visíveis durante a revisão. **Buscar por `[a confirmar]` e por `todo` nos
arquivos HTML para encontrar todos os pontos.**

1. **Número de WhatsApp** — ✅ definido: (19) 98287-4127 (`5519982874127`), já aplicado
   em todos os `href` e na constante `whatsappNumber` de `assets/js/main.js`. Para trocar
   no futuro, substitua `5519982874127` nos `.html` e na constante.
2. **E-mail de contato** — placeholder `XXXXXXX` (`mailto:XXXXXXX`) em `contato.html` e nos
   rodapés de todas as páginas.
3. **Endereço** — ✅ Rua Rafael Andrade Duarte, 452 — Nova Campinas, Campinas – SP, 13092-180.
4. **Planos (Bronze / Prata / Ouro)** — nomes, composição e valores em revisão interna
   (Elber e João, conforme reunião de 21/09/2026). Ver nota em `servicos.html`.
5. **Perguntas frequentes** — perguntas de exemplo; validar com João/Eduarda e
   completar com dúvidas reais recebidas pelo time.
6. **Fotos da equipe (João e Gabriel)** — a página `sobre.html` usa iniciais como
   avatar provisório. Substituir por fotos reais quando disponíveis.
   **Importante:** não incluir nome ou imagem do Elber na página Sobre (conflito
   ético entre advocacia e contabilidade, combinado em reunião — a imagem da marca
   fica vinculada ao João).
7. **Página para o público da área médica** (especialidade do Elber) — não faz parte
   deste site institucional. Deve ser uma página própria e discreta, usada só em
   campanhas, e fica para uma etapa seguinte.

Depois de resolver os itens acima, as classes `.todo` e os blocos `.note-inline`
podem ser removidos do HTML (ou deixados — eles só aparecem como texto normal, não
quebram o layout).

---

## Padrões técnicos

- **Sem framework**: HTML5 semântico + CSS puro com variáveis (`:root`) + JS vanilla
  (um único arquivo, sem dependências externas).
- **Fontes**: Sora (títulos) e Inter (texto), carregadas via Google Fonts — as mesmas
  do manual de marca.
- **Cores**: variáveis CSS em `assets/css/style.css` (topo do arquivo), extraídas
  diretamente do manual de marca (`--blue1`, `--blue2`, `--blue3`, `--blue-soft`,
  `--graphite`, etc.). Alterar a paleta é trocar essas variáveis num único lugar.
- **Responsivo**: layout fluido com breakpoints em `960px` e `820px` (menu vira
  hambúrguer abaixo de `820px`) e `640px`. Testado em desktop e mobile.
- **Acessibilidade**: link "pular para o conteúdo", `aria-label`/`aria-expanded` no
  menu mobile, texto alternativo em imagens de conteúdo, FAQ com `<details>/<summary>`
  nativos (funciona mesmo sem JS).
- **Degradação sem JavaScript**: os links de WhatsApp já têm `href` funcional direto
  no HTML (o JS só reforça/mensagens customizadas), e o efeito de "fade-in" ao rolar
  a página só é ativado se o JS carregar (`html.js`) — sem JS, todo o conteúdo já
  aparece normalmente, sem ficar invisível.
- **SEO básico**: `<title>` e `<meta name="description">` únicos por página.

---

## Rodar localmente para revisar

Como o site é 100% estático, qualquer servidor de arquivos serve. Não é necessário
`npm install` nem build. Alguns exemplos (escolher um, conforme o que estiver
disponível na máquina):

```bash
# Node
npx serve site

# Python 3
python -m http.server 8080 --directory site

# VS Code
# Extensão "Live Server" → botão direito em site/index.html → "Open with Live Server"
```

Abrir o navegador em `http://localhost:<porta>/index.html`. Evitar abrir os arquivos
`.html` direto do disco (`file://`) para revisar — alguns navegadores restringem
requisições relativas de CSS/JS/imagens nesse modo.

---

## Publicação (migração para hospedagem)

O conteúdo da pasta `site/` (mantendo a estrutura de subpastas `assets/`) pode ser
publicado como está, como site estático puro:

- Subir a pasta inteira para a raiz do domínio.
- `index.html` já é o arquivo de entrada padrão.
- Não há variáveis de ambiente, chaves de API nem backend — é só HTML/CSS/JS/imagens.
- Se a hospedagem oferecer otimização automática de imagens/CSS/JS (minificação,
  compressão, CDN), pode ser aplicada sem alterar o código-fonte.

---

## Tela de login (acesso restrito)

Enquanto o site está em revisão, todas as páginas pedem uma senha: **next2026**.
A senha fica em `assets/js/main.js` (`SITE_PASSWORD`) e vale para a aba até ela ser fechada
(sessionStorage). **Não é segurança real** — a senha está no código-fonte; serve só para
afastar visitas casuais. Para publicar o site aberto, remova o trecho `nl-locked` do
`<script>` no `<head>` de cada página.
