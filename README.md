# Site — Next Level Contabilidade

Site institucional em HTML/CSS/JS puro (sem build, sem framework, sem dependências de
Node/npm). Pode ser publicado como está em qualquer hospedagem de arquivos estáticos
(Turbocloud, Vercel, Netlify, S3, etc.) — basta subir o conteúdo desta pasta `site/`.

Conteúdo e identidade visual baseados em:
- `../Textos-do-Site-Next-Level.html` (textos finais de cada página, espelhando o site)
- `../Manual-de-Marca-Next-Level.html` (paleta, tipografia, logotipo, direção de imagem)
- `../Briefing/` (transcrição da reunião de alinhamento, logos originais, banco de imagens)

---

## Estrutura de pastas

```
site/
├── index.html             Home
├── sobre.html             Sobre
├── servicos.html          Serviços (planos, segmentos, parceria RP2C, FAQ)
├── clinicas-medicas.html  Clínicas Médicas (equiparação hospitalar, serviços para a área da saúde)
├── contato.html           Contato
├── README.md              este arquivo
└── assets/
    ├── css/
    │   └── style.css      folha de estilos única, usada pelas 5 páginas
    ├── js/
    │   └── main.js        menu mobile, links de WhatsApp, animações, FAQ, tela de login
    └── img/
        ├── logo-horizontal.svg   logo horizontal — não usada no site hoje
        ├── logo-vertical.svg     logo empilhada — header, rodapé e tabela de planos
        ├── simbolo.svg           símbolo isolado (seta) — disponível para materiais futuros
        ├── favicon.svg           favicon gerado a partir do símbolo + fundo azul principal
        ├── hero-home.jpg         fachada desfocada, diagonal (Home — hero)
        ├── hero-sobre.jpg        prédios desfocados à noite (Sobre — hero; gerada no Magnific)
        ├── hero-servicos.jpg     mesa com relatórios desfocada (Serviços — hero; gerada no Magnific)
        ├── hero-clinicas.jpg     corredor de clínica desfocado (Clínicas — hero; faixa de Clínicas em Serviços)
        ├── hero-contato.jpg      sala de reunião desfocada (Contato — hero; gerada no Magnific)
        ├── dados-still-01.jpg    still-life de relatórios/gráficos (Serviços "Planos", Clínicas "Requisitos")
        ├── dados-still-02.jpg    still-life de documentos/óculos (Home "Recuperação tributária")
        ├── dados-abstrato.jpg    composição abstrata de gráficos (Serviços "Parceria RP2C")
        ├── cta-bg.png            fundo das faixas de CTA final
        ├── vidro-predio.jpg      fachada de vidro escura — não usada hoje
        ├── segmentos/            fotos da grade de segmentos (Home e Serviços; cigarros e distribuidora não usadas)
        └── icons/                ícones vetoriais gerados sob medida (linha, azul da marca)
```

### Linguagem visual

O header de toda página mostra uma foto real, e nunca há branco sobre branco. Cada
página alterna quatro tipos de seção:

- **`.photo-section`** — foto full-bleed com overlay (`.overlay-brand` ou `.overlay-dark`),
  para blocos de alto impacto (Recuperação tributária, Planos, Clínicas, Parceria, Requisitos).
- **`.section.section-alt`** — fundo Azul Névoa (`--blue-mist`, #D2E6F4), usado sempre que a
  seção tem cards brancos (features, estatísticas, contato).
- **`.section`** — fundo branco, para blocos sem cards brancos (segmentos, FAQ). Se houver
  cards numa seção branca, o CSS os pinta de Azul Suave automaticamente.
- **`.gradient-section`** — fecho de página em gradiente azul, usado nos CTAs finais.

Sequência por página (P = foto, A = Azul Névoa, B = branco, G = gradiente, D = rodapé escuro):
- Home: P → A → P → B → G → D
- Sobre: P → A → B → G → D
- Serviços: P → A → P → B → P → P → B → G → D
- Clínicas: P → A → P → A → B → G → D
- Contato: P → A → D

Ao editar ou adicionar seções, manter a alternância — nunca duas seções claras iguais seguidas.

Os ícones em `assets/img/icons/` foram gerados sob medida (vetor, cor sólida
`#123B73`). Ficam como `<img>` comuns — para trocar algum, basta substituir o arquivo
SVG mantendo o mesmo nome.

Não há processo de build: os arquivos podem ser abertos/publicados diretamente. Os únicos
recursos externos carregados são as fontes do Google Fonts (Sora + Inter).

---

## Conteúdo — decisões e pendências

1. **WhatsApp** — (19) 98287-4127 (`5519982874127`), em todos os `href` e na constante
   `whatsappNumber` de `assets/js/main.js`. Texto padrão dos botões: **"Atendimento pelo WhatsApp"**.
2. **E-mail** — contato@nextlevelcontabilidade.com.br (Contato e rodapés).
3. **Endereço** — Rua Rafael Andrade Duarte, 452 — Nova Campinas, Campinas – SP, 13092-180.
4. **Planos** — Bronze, Prata (selo "Recomendado"), Ouro e Diamante, com valores publicados em
   `servicos.html`. Certificado digital incluso em todos; folha/pró-labore de 1 sócio inclusa
   (Diamante: 2 sócios + 1 funcionário); pessoas adicionais custam R$ 50,00/mês.
5. **Abertura de empresas** — a Next Level abre o CNPJ e cuida dos registros fiscais; a RP2C
   define a estrutura societária e elabora os atos societários.
6. **Clínicas Médicas** — página própria no menu (Serviços › Clínicas Médicas) e no rodapé,
   com chamada dentro de Serviços. Substitui a ideia inicial de página só para campanhas.
7. **Equipe** — o site não cita nomes. **Não incluir nome ou imagem do Elber** (conflito ético
   entre advocacia e contabilidade, combinado em reunião).
8. **A confirmar com o cliente** — a afirmação "escritórios em vários estados do Brasil" no FAQ
   de abertura de empresa em `servicos.html`.

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
