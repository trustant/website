# Trustant landing page specification

## Purpose and sources

Create a responsive, single-page `index.html` presenting Trustant as a coding assistant for Private AI. Help visitors understand where their AI runs, how they build and publish applications, why the integrated application platform matters, and which deployment package fits their needs.

This specification expands the original logo, headline, and video page according to `spec/2-metaspec.md`.

- Use concepts from `oldsite/`, particularly `oldsite/presentation/pitch/pitch.md`. The metaspec's `oldwebsite/` refers to the available `oldsite/` directory.
- Use the visual language and components from `landing/index1.html`, `landing/pricing.html`, and `landing/css/`.
- Use **Trustant** consistently. Older material uses Trustable and Nuvolaris; do not carry those names into Trustant product names.
- Treat the copy quoted below as literal page copy. Implementation notes and unresolved commercial details are not public page content.

## Core message

Trustant combines a coding assistant for Private AI with a full-stack, private, cloud-native environment based on Apache OpenServerless. Build an application on your PC using AI running on infrastructure you control, then publish it to a compatible environment of your choice.

Private AI includes four clearly explained configurations: AI on the PC itself, an AI workstation such as NVIDIA DGX Spark, a private server, or sovereign AI in a data center you control. The workstation is an alternative place to run AI, not a requirement for every installation.

Distinguish the AI inference location from the application's deployment location. Publishing an application does not imply publishing its source code, prompts, or private AI endpoint publicly. Privacy depends on the models, services, integrations, and deployment configuration chosen by the operator; avoid unconditional claims that nothing can ever leave the machine.

## Visual direction

Use LaunchKit's component language with the **Terracotta** dark theme: a warm near-black background (`#100c0a`), a subtle orange bloom behind the hero, light headings, muted warm-grey body text, burnt-orange actions (`#e2703a`, the mascot's own tone sampled from `images/trusty-ant.png`), softly tinted cards (`#1c1512`), thin borders, and rounded corners. A sage second accent (`#8fb996`) carries technical labels and the hero eyebrow. Buttons use dark ink (`#17100c`) on the orange, since white on `#e2703a` does not reach AA. The Trustant logo is dark artwork, so invert it on this ground. Preserve generous spacing and clear typography from `landing/`.

Implement the theme by overriding LaunchKit's CSS custom properties in `css/trustant.css`, leaving the template's own files unmodified so they stay upgradeable.

Use locally hosted Inter Variable for interface and body text. Reserve JetBrains Mono for technical labels where useful. Use a centered content container, approximately 1,120–1,200 px wide, with comfortable side padding. Desktop hero headings may reach approximately 66 px; scale them down fluidly on mobile. Use approximately 60 px between major sections, increasing space around the hero when appropriate.

Use the template's navigation, centered hero, wide media panel, feature grids, pricing cards, FAQ, and final call-to-action patterns. Replace template content and imagery with Trustant material. Do not include sample customer logos, invented testimonials, GitHub star counts, release badges, or unsupported adoption metrics.

## Page structure and literal copy

### 1. Header

Place the Trustant logo on the left, section navigation in the middle, and a primary action on the right.

Navigation: “Private AI”, “How it works”, “Platform”, “Pricing”, “FAQ”. Link these to `#private-ai`, `#how-it-works`, `#platform`, `#pricing`, and `#faq`.

Primary action: “Explore pricing” → `#pricing`.

Logo: `images/logo-trustant.png`, linking to the top of the page, with alt text “Trustant”. Preserve its proportions and keep the original artwork legible on the light background.

On mobile, use an accessible collapsible menu. The toggle must expose its expanded state, work from the keyboard, and close when a section is selected.

### 2. Hero and introduction video

Eyebrow: “Your AI. Your infrastructure.”

H1: “A Trustable Code Assistant for Private AI”

Supporting paragraph:

> Build full-stack applications on your PC with AI you control. Run your AI locally, on a workstation such as NVIDIA DGX Spark, on a private server, or in your own sovereign data center. Then publish your application wherever you need it.

Primary action: “Explore pricing” → `#pricing`.

Secondary action: “Watch a video” → `#demo`.

Below the actions, show a wide, rounded video panel with ID `demo`:

- Poster: `images/trusty-ant.png`.
- Video: `https://videos.nuvolaris.download/simple-intro.mp4`.
- Use native controls, inline playback, `preload="none"`, and a responsive 16:9 frame.
- Do not autoplay. The hero link moves to the player; playback remains a deliberate user action.
- Display the literal caption “Watch a video” below the player.
- Provide a direct video link as a playback fallback. Include captions when a caption asset is available; do not invent a transcript.

Below the video, add a small technology foundation line with `images/apache-openserverless.png`:

> Built on Apache OpenServerless

Use alt text “Apache OpenServerless”. Present this as a technology attribution, not an endorsement.

### 3. Private AI, wherever you run it

Section ID: `private-ai`.

H2: “Private AI, on infrastructure you control”

Introduction:

> Choose where your coding assistant's AI runs. Start on your own PC or connect to dedicated infrastructure for your team.

Show four equally weighted cards, in this order:

| Card title | Body copy |
| --- | --- |
| On your PC | Use local AI on your own computer to build applications in a personal development environment. |
| On an AI workstation | Connect to a dedicated AI workstation, such as NVIDIA DGX Spark, while building from your PC. |
| On a private server | Use AI hosted on a server your organization controls, with access managed for your team. |
| In a sovereign data center | Connect to AI in a data center you control, with infrastructure and operations governed by your own requirements. |

Use simple, consistent icons for PC, workstation, server, and data center. Use four columns on wide screens, two on tablet, and one on narrow mobile screens.

Supporting line:

> Keep prompts, code, and data within your chosen private environment by using private models and services throughout your workflow.

Do not describe sovereign hosting as an automatic compliance certification or imply every model runs on every device.

### 4. Build on your PC. Publish anywhere.

Section ID: `how-it-works`.

H2: “Build on your PC. Publish anywhere.”

Introduction:

> Move from an idea to a running application with a coding assistant and an integrated application environment.

Use three numbered steps:

1. **“Choose your Private AI”** — “Connect Trustant to AI running on your PC, an AI workstation, a private server, or your sovereign infrastructure.”
2. **“Build and run your application”** — “Describe what you need. Use Trustant to create and refine your frontend, backend, and data connections, then run and test the application on your PC.”
3. **“Publish where you need it”** — “Deploy your application to a compatible environment on your own server, a private cluster, or infrastructure in a data center you control.”

Supporting line:

> Choose the AI environment and the application destination independently, while keeping control of both.

Add a simple flow graphic: PC with Trustant → Private Server / Private Cluster / Sovereign Data Center. Show the Private AI connection separately so inference and application hosting are not confused. Keep these labels as real text. “Publish anywhere” expresses deployment choice, not compatibility with every hosting service without configuration.

### 5. The platform behind the assistant

Section ID: `platform`.

H2: “A coding assistant with a complete application platform”

Introduction:

> Trustant is built on a full-stack, private, cloud-native environment based on Apache OpenServerless. Your assistant works alongside the environment where your application runs, bringing development and deployment together.

Use a prominent feature panel with a stack diagram and three supporting cards:

| Card title | Body copy |
| --- | --- |
| Build the full application | Bring the frontend, backend actions, APIs, and data connections into one development workflow. |
| Run on a private foundation | Use Apache OpenServerless as the foundation for application execution and platform services on infrastructure you control. |
| Carry your work into deployment | Develop locally, then prepare and publish your application to your chosen compatible server or cluster environment. |

Stack diagram, top to bottom:

- Trustant coding assistant, connected to your chosen Private AI.
- Your application: frontend, backend actions, and APIs.
- Apache OpenServerless: application runtime, data, and storage services.
- Your infrastructure: PC, server, cluster, or data center.

Use the Apache OpenServerless logo near its layer. Keep technology details secondary to the benefit: the assistant and the application environment work together. Do not add specific database versions, runtime compatibility lists, security certifications, or availability guarantees without validated product documentation.

### 6. Applications you can build

H2: “Build tools for the work that stays private”

Introduction:

> Turn your own workflows into applications, using your chosen Private AI and application infrastructure.

Show three illustrative use cases:

- **“Internal business tools”** — “Build customer management tools, project dashboards, and operational workflows for your team.”
- **“Document applications”** — “Create applications around internal documents and knowledge, with data access managed in your environment.”
- **“APIs and automation”** — “Connect systems, expose application services, and automate repetitive work on your private stack.”

These are examples of intended uses, not customer endorsements or promises that prebuilt templates are included. Existing screenshots from `oldsite/` may be used only if accurate for Trustant; otherwise use simple diagrams. Do not display old product branding as the current interface.

### 7. Pricing

Section ID: `pricing`.

H2: “Start self-hosted. Grow to a private cluster.”

Introduction:

> Choose the Trustant setup that fits your infrastructure.

Use three aligned pricing cards. Keep all three prices and key inclusions visible without a toggle. Highlight the middle card with a restrained accent border; do not label it “most popular” without evidence.

| | Open Source | Desktop + Server | Desktop + Cluster |
| --- | --- | --- | --- |
| Display price | Free | $1,000 | $10,000 |
| Summary | Install and manage your own open-source environment. | Build on your desktop and deploy to one private server. | Run a resilient private deployment across three servers. |
| Includes | Trustant OpenSource; Apache OpenServerless; self-hosted installation | Trustant Desktop; Trustant Server; 1 server | Trustant Desktop; Trustant Cluster; 3 servers; 6 virtual machines; self-healing; backups included |
| Button | View installation guide | Contact us about Server | Contact us about Cluster |

Do not infer a monthly, annual, per-user, or one-time billing basis from the supplied prices. Do not add a billing switch, discount, trial period, tax statement, hardware inclusion, support agreement, backup retention schedule, or uptime guarantee.

Interpret the metaspec's “including back” as **backups included** and its resilience wording as **self-healing**. Confirm these commercial descriptions before publication, along with currency, billing basis, license scope, hardware inclusion, and support terms. Treat prices as the supplied offer values, not independently researched market prices.

The installation button needs the confirmed Trustant installation documentation URL. Paid-package buttons need a confirmed sales destination, with the selected package included if the destination supports it. These destinations are publication dependencies: do not invent URLs, email addresses, checkout flows, or working purchase actions. Until supplied, a preview may show clearly unavailable buttons with an adjacent explanation; the production acceptance criteria require working destinations.

### 8. Frequently asked questions

Section ID: `faq`.

Use accessible disclosure elements with these questions and answers:

**“What is Trustant?”**

> Trustant is a coding assistant for Private AI, built on a full-stack, private, cloud-native environment based on Apache OpenServerless. It brings application development and the environment where your application runs into one workflow.

**“Does Private AI have to run on my PC?”**

> No. You can use AI on your PC, an AI workstation such as NVIDIA DGX Spark, a private server, or sovereign infrastructure in a data center you control.

**“Do I need an AI workstation?”**

> An AI workstation is one option. Your setup depends on the model you choose and the resources it needs; you can also use local AI or a private AI server.

**“What does Apache OpenServerless provide?”**

> Apache OpenServerless provides the foundation for the private application environment underneath Trustant, including application execution and platform services. Trustant adds the coding assistant experience to that foundation.

**“Can I build locally and deploy elsewhere?”**

> Yes. Build and test on your PC, then deploy to a compatible server, cluster, or data center environment. Choose the deployment destination and configure its services and access for your application.

**“Is there a free option?”**

> Yes. Install Trustant OpenSource and Apache OpenServerless yourself for a free, self-hosted software setup. You provide and operate the infrastructure.

**“What is included in the cluster package?”**

> The $10,000 package includes Trustant Desktop and Trustant Cluster for three servers and six virtual machines, with self-healing and backups included.

**“Will my data stay private?”**

> Trustant is designed for AI and applications running on infrastructure you control. Keeping data within that environment also depends on your chosen models, connected services, access settings, and deployment configuration.

### 9. Final call to action

Use a softly tinted, rounded panel.

H2: “Build with Private AI. Publish on your terms.”

Supporting copy:

> Start on your PC and choose the infrastructure that fits your application, from a private server to your own sovereign data center.

Primary action: “Explore pricing” → `#pricing`.

Secondary action: “Watch a video” → `#demo`.

### 10. Footer

Show the Trustant logo and this short description:

> A coding assistant for Private AI, built on Apache OpenServerless.

Repeat the main section links. Add documentation, source repository, contact, and legal links only when their destinations are confirmed. Preserve applicable template and asset license notices; do not copy unrelated LaunchKit marketing links into the product navigation.

## Responsive behavior, accessibility, and delivery

- Deliver the page as static HTML, CSS, and minimal JavaScript, following the existing repository's hosting approach.
- Keep section order identical across screen sizes. Collapse feature and pricing grids into one column on small screens without horizontal scrolling.
- Keep headings readable, buttons comfortably tappable, and tables out of the final mobile layout: specification tables describe card content, not required page tables.
- Use semantic header, navigation, main, section, and footer elements; one H1; ordered heading levels; a skip link; visible focus; and descriptive link text.
- Meet WCAG AA contrast targets. Respect reduced-motion preferences and avoid unnecessary animation.
- Give meaningful images appropriate alt text and decorative graphics empty alt text. Reserve image dimensions to prevent layout shifts and lazy-load images below the fold.
- Keep core copy and anchor links usable without JavaScript. Use native video controls and native FAQ disclosure behavior where possible.
- Use existing assets at their actual paths or copy them into the implementation's chosen asset structure. Verify every resulting local URL; assets currently under `landing/` must not be referenced as if they existed at the repository root.
- Do not load remote fonts. The introductory video is externally hosted; explain any additional external dependencies in implementation notes.
- Page title: “Trustant — A Trustable Code Assistant for Private AI”.
- Meta description: “Build full-stack applications with Private AI on your PC, workstation, private server, or sovereign infrastructure. Powered by Apache OpenServerless.”
- Set social metadata to Trustant copy and an appropriate available image. Use confirmed canonical and public asset URLs when preparing the page for publication.

## Acceptance criteria

1. The original headline “A Trustable Code Assistant for Private AI” and caption “Watch a video” appear literally, alongside the Trustant logo and specified video poster/source.
2. Visitors can identify all four Private AI configurations: PC, AI workstation including DGX Spark, private server, and sovereign data center under their control.
3. The page explicitly explains the full-stack, private, cloud-native foundation based on Apache OpenServerless.
4. The build-on-PC and publish-anywhere workflow is clear, including the distinction between AI hosting and application deployment.
5. Pricing displays Free, $1,000, and $10,000 with the exact package components and server/VM counts above; no unsupported billing cadence is added.
6. Visual styling follows `landing/`, with Trustant assets and original product copy replacing all template placeholders.
7. Navigation, mobile menu, FAQ controls, video playback/fallback, and CTA destinations work with keyboard and pointer input. Production pricing links use confirmed destinations.
8. Check layouts at approximately 375 px, 768 px, and 1,440 px, plus 200% zoom. No content overlaps, clipped controls, or unintended horizontal scrolling occur.
9. Check all local assets and internal anchors. No broken paths, fake testimonials, template branding, unsupported guarantees, or invented commercial terms remain.
10. Before publication, confirm the pricing assumptions and supply the missing installation and sales destinations identified above.

---

## Nota: rimozione del template sorgente (25 settembre 2026)

La cartella `landing/` — la copia intatta del template LaunchKit citata sopra come
riferimento di design — è stata rimossa dopo l'implementazione. Il suo linguaggio visivo
è già interamente trasferito nei file alla radice del repository: `css/index.css`,
`css/mobile.css`, `css/tablet.css`, `css/pricing.css` e `vendor/font-awesome-6.7.2/`,
con le personalizzazioni Trustant in `css/trustant.css`. I riferimenti a `landing/`
in questo documento vanno quindi letti come storici.

Rimossi nella stessa occasione perché non referenziati da alcuna pagina:
`images/apache-openserverless-orig.png` (originale pre-modifica del logo),
`fonts/InterVariable-Italic.woff2` con la sua regola `@font-face` (la pagina non usa
corsivi) e `out.json` (risposta API di un Gist, estranea al sito).

Conservata `oldsite/`, che resta la fonte delle immagini e dei testi usati in
`spec/3-from-trustable.md`.
