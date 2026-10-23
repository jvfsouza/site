/* Portfólio estilo PS3 (index.html) — código */
/* =========================================================
   EDITE AQUI: todo o conteúdo do portfólio fica neste objeto.
   ========================================================= */
// Textos com duas versões usam { pt: "...", en: "..." }; textos simples valem para os dois idiomas.
const PORTFOLIO = {
  nome: "João Victor",
  // Currículo: coloque o arquivo em assets/docs/ com este nome (ou troque o caminho).
  // Deixe "" para esconder o item.
  curriculo: "assets/docs/curriculo.pdf",
  cargo: { pt: "Desenvolvedor FullStack", en: "Fullstack Developer" },
  bio: {
    pt: "faço programa por dinheiro. me contrate.",
    en: "Hi! I'm a developer who likes building interfaces that feel alive — with motion, sound and details that remind me of the consoles I grew up with. This is sample text: replace it with your bio.",
  },
  info: [
    [{ pt: "Nome", en: "Name" }, "João Victor"],
    [{ pt: "Função", en: "Role" }, { pt: "Desenvolvedor Fullstack", en: "Fullstack Developer" }],
    [{ pt: "Localização", en: "Location" }, { pt: "Brasil", en: "Brazil" }],
    [{ pt: "Idiomas", en: "Languages" }, { pt: "Português, Inglês", en: "Portuguese, English" }],
    [{ pt: "Disponível para", en: "Available for" }, { pt: "Freelance e vagas", en: "Freelance and jobs" }],
    [{ pt: "Versão do sistema", en: "System version" }, "6.70"],
  ],
  habilidades: [
    ["HTML & CSS", 90],
    ["JavaScript", 80],
    ["Aquelas la tlgd", "kkk"],
    ["Node.js", 60],
    ["UI / Design", 65],
  ],
  projetos: [
    { titulo: { pt: "Projeto Alpha", en: "Project Alpha" }, ano: "2026", descricao: { pt: "Aplicação web de exemplo. Descreva aqui o problema, o que você construiu e o resultado.", en: "Sample web app. Describe the problem, what you built and the result." }, tecnologias: ["HTML", "CSS", "JavaScript"], links: { demo: "#", codigo: "https://github.com/jvfsouza" }, cor: 215 },
    { titulo: { pt: "Projeto Beta", en: "Project Beta" }, ano: "2025", descricao: { pt: "Dashboard com gráficos em tempo real. Substitua por um projeto seu.", en: "Real-time charts dashboard. Replace it with one of your projects." }, tecnologias: ["React", "TypeScript"], links: { demo: "#", codigo: "https://github.com/jvfsouza" }, cor: 265 },
    { titulo: { pt: "Projeto Gamma", en: "Project Gamma" }, ano: "2025", descricao: { pt: "API REST com autenticação e banco de dados. Texto de exemplo.", en: "REST API with authentication and a database. Sample text." }, tecnologias: ["Node.js", "PostgreSQL"], links: { codigo: "https://github.com/jvfsouza" }, cor: 160 },
    { titulo: { pt: "Projeto Delta", en: "Project Delta" }, ano: "2024", descricao: { pt: "Jogo de navegador feito com Canvas. Texto de exemplo.", en: "Browser game made with Canvas. Sample text." }, tecnologias: ["Canvas", "JavaScript"], links: { demo: "#" }, cor: 330 },
    { titulo: { pt: "Portfólio PS2", en: "PS2 Portfolio" }, ano: "2026", descricao: { pt: "A versão anterior deste portfólio, inspirada no boot e no menu do PlayStation 2.", en: "The previous version of this portfolio, inspired by the PlayStation 2 boot and menu." }, tecnologias: ["Canvas", "CSS 3D", "Web Audio"], links: { demo: "ps2.html", codigo: "https://github.com/jvfsouza/site" }, cor: 225 },
  ],
  contatos: [
    { rotulo: "E-mail", valor: "jvfs.ferreira@gmail.com", url: "mailto:jvfs.ferreira@gmail.com", icone: "mail" },
    { rotulo: "GitHub", valor: "github.com/jvfsouza", url: "https://github.com/jvfsouza", icone: "code" },
    { rotulo: "LinkedIn", valor: "linkedin.com/joaovfsouza", url: "https://www.linkedin.com/in/joaovfsouza/", icone: "link" },
  ],
};
/* ========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = {
  get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
  set(k, v, s = localStorage) { try { s.setItem(k, v); } catch {} },
};
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------------- Ícones (traço branco) ---------------- */
// Os ícones ficam em assets/icons/<nome>.svg (traço branco)
const icon = (name) => `<img class="ico" src="assets/icons/${name}.svg" alt="" draggable="false">`;

/* ---------------- Idioma ---------------- */
const STR = {
  pt: {
    locale: "pt-BR", title: "João · Portfólio", portfolio: "portfólio", skip: "clique para pular",
    hint: "← → categorias · ↑ ↓ itens · Enter abrir", back: "Voltar", cats: "Categorias",
    intro: "Abertura (clique para pular)", mute: "Silenciar som", unmute: "Ativar som",
    user: "Usuário", profile: "Perfil", settings: "Configurações", skills: "Habilidades", skill: "Habilidade",
    projects: "Projetos", project: "Projeto", contact: "Contato",
    sysinfo: "Informações do sistema", sysinfoSub: "Dados do perfil e versão", level: "Nível",
    resume: "Currículo", resumeSub: "Abrir em PDF", resumeSoon: "Ainda não adicionado",
    play: "▶ Iniciar (ver demo)", soon: "▶ Demo em breve", code: "⌘ Ver código",
    ps2: "Versão PS2", ps2Sub: "Abrir o portfólio no estilo PlayStation 2",
    language: "Idioma", volume: "Volume", volumeSub: (v) => (v ? `${v}%` : "Sem som"), mutedLvl: "Sem som",
  },
  en: {
    locale: "en-US", title: "João · Portfolio", portfolio: "portfolio", skip: "click to skip",
    hint: "← → categories · ↑ ↓ items · Enter open", back: "Back", cats: "Categories",
    intro: "Intro (click to skip)", mute: "Mute sound", unmute: "Unmute sound",
    user: "User", profile: "Profile", settings: "Settings", skills: "Skills", skill: "Skill",
    projects: "Projects", project: "Project", contact: "Contact",
    sysinfo: "System information", sysinfoSub: "Profile details and version", level: "Level",
    resume: "CV", resumeSub: "Open as PDF", resumeSoon: "Not added yet",
    play: "▶ Start (view demo)", soon: "▶ Demo coming soon", code: "⌘ View code",
    ps2: "PS2 version", ps2Sub: "Open the PlayStation 2 style portfolio",
    language: "Language", volume: "Volume", volumeSub: (v) => (v ? `${v}%` : "Muted"), mutedLvl: "Muted",
  },
};
const LANGS = [["pt", "Português"], ["en", "English"]];
const VOLUMES = [0, 25, 50, 75, 100];
let lang = store.get("ps3-lang") === "en" ? "en" : "pt";
const T = () => STR[lang];
// Texto no idioma atual: { pt, en } vira a versão certa; texto simples fica igual
const tr = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.pt : v);

/* ---------------- Categorias (XMB) ---------------- */
const P = PORTFOLIO;
const backBtn = () => `<li><button type="button" data-close>${T().back}</button></li>`;
const panelProject = (p) => {
  const L = p.links || {};
  const ext = (u) => (/^https?:/.test(u) ? ' target="_blank" rel="noopener"' : "");
  const has = (u) => u && u !== "#";   // "#" = link ainda não definido
  return `
    <div class="hero" style="--h:${Number(p.cor) || 215}"></div>
    <div class="kicker">${T().project} · ${esc(p.ano || "")}</div>
    <h2>${esc(tr(p.titulo))}</h2>
    <p>${esc(tr(p.descricao))}</p>
    <ul class="tags">${(p.tecnologias || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    <ul class="opts">
      ${has(L.demo) ? `<li><a href="${esc(L.demo)}"${ext(L.demo)}>${T().play}</a></li>` : L.demo ? `<li><span class="soon">${T().soon}</span></li>` : ""}
      ${has(L.codigo) ? `<li><a href="${esc(L.codigo)}"${ext(L.codigo)}>${T().code}</a></li>` : ""}
      ${backBtn()}
    </ul>`;
};
// Lista de opções com ✓ na atual (usada em Idioma e Volume)
const choiceList = (attr, options, current) => `<ul class="opts">
  ${options.map(([val, label]) => `<li><button type="button" ${attr}="${val}"${val === current ? ' aria-current="true"' : ""}><span class="check">${val === current ? "✓" : ""}</span>${esc(label)}</button></li>`).join("")}
  ${backBtn()}</ul>`;

// O arquivo do currículo existe? null = ainda não sabemos (ou abriu sem servidor)
let resumeOk = null;

function makeCats() {
  const vol = audio.volume;
  return [
    {
      id: "user", label: T().user, icon: "user",
      items: [
        {
          title: P.nome, sub: tr(P.cargo), icon: "user",
          panel: `<div class="kicker">${T().profile}</div><h2>${esc(P.nome)}</h2><p>${esc(tr(P.bio))}</p>
                  <ul class="opts">${backBtn()}</ul>`,
        },
        ...(P.curriculo ? [resumeOk === false
          ? { title: T().resume, sub: T().resumeSoon, icon: "doc",
              panel: `<div class="kicker">${T().user}</div><h2>${T().resume}</h2><p>${T().resumeSoon}.</p><ul class="opts">${backBtn()}</ul>` }
          : { title: T().resume, sub: T().resumeSub, icon: "doc", href: P.curriculo, newTab: true }] : []),
        {
          title: T().sysinfo, sub: T().sysinfoSub, icon: "info",
          panel: `<div class="kicker">${T().user}</div><h2>${T().sysinfo}</h2>
                  <ul class="rows">${P.info.map(([k, v]) => `<li><span>${esc(tr(k))}</span><strong>${esc(tr(v))}</strong></li>`).join("")}</ul>
                  <ul class="opts">${backBtn()}</ul>`,
        },
      ],
    },
    {
      id: "settings", label: T().settings, icon: "gear",
      items: [
        {
          id: "lang", title: T().language, sub: LANGS.find(([k]) => k === lang)[1], icon: "globe",
          panel: `<div class="kicker">${T().settings}</div><h2>${T().language}</h2>${choiceList("data-lang", LANGS, lang)}`,
        },
        {
          id: "volume", title: T().volume, sub: T().volumeSub(vol), icon: "speaker", meter: vol,
          panel: `<div class="kicker">${T().settings}</div><h2>${T().volume}</h2>
                  ${choiceList("data-vol", VOLUMES.map((v) => [String(v), v ? v + "%" : T().mutedLvl]), String(vol))}`,
        },
      ],
    },
    {
      id: "skills", label: T().skills, icon: "pencil",
      items: [
        ...P.habilidades.map(([n, v]) => ({
          title: tr(n), sub: `${T().level} ${Number(v)}%`, icon: "star", meter: Number(v),
          panel: `<div class="kicker">${T().skill}</div><h2>${esc(tr(n))}</h2>
                  <div class="meter big"><i style="width:${Number(v)}%"></i></div>
                  <p>${T().level} ${Number(v)}%</p>
                  <ul class="opts">${backBtn()}</ul>`,
        })),
      ],
    },
    {
      id: "projects", label: T().projects, icon: "bricks", wide: true,
      items: P.projetos.map((p) => ({
        title: tr(p.titulo), sub: [p.ano, (p.tecnologias || []).join(" · ")].filter(Boolean).join(" · "),
        hue: Number(p.cor) || 215, panel: panelProject(p),
      })),
    },
    {
      id: "contact", label: T().contact, icon: "globe",
      items: [
        ...P.contatos.map((c) => ({ title: tr(c.rotulo), sub: tr(c.valor), icon: c.icone || "link", href: c.url })),
        { title: T().ps2, sub: T().ps2Sub, icon: "ps2", href: "ps2.html" },
      ],
    },
  ];
}

/* ---------------- Áudio ---------------- */
const audio = {
  ctx: null, master: null, file: null,
  muted: store.get("ps3-muted") === "1",
  // Volume em % (0, 25, 50, 75, 100), salvo no navegador; padrão 50%
  volume: (() => { const v = Number(store.get("ps3-volume") ?? 50); return VOLUMES.includes(v) ? v : 50; })(),
  gain() { return this.muted ? 0 : 0.7 * (this.volume / 100); },
  applyLevel() {
    if (this.master) this.master.gain.setTargetAtTime(this.gain(), this.ctx.currentTime, 0.05);
    if (this.file) { this.file.muted = this.muted; this.file.volume = this.volume / 100; }
  },
  setVolume(v) {
    this.volume = v;
    store.set("ps3-volume", String(v));
    this.applyLevel();
  },
  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.gain();
    this.master.connect(this.ctx.destination);
  },
  setMuted(m) {
    this.muted = m;
    store.set("ps3-muted", m ? "1" : "0");
    this.applyLevel();
  },
  reverb(sec = 3) {
    const c = this.ctx, len = c.sampleRate * sec, buf = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
    }
    const conv = c.createConvolver();
    conv.buffer = buf;
    return conv;
  },
  // Recriação sintetizada do som de abertura (~4,5 s): "cordas" que crescem com o
  // filtro abrindo. Usada só se assets/sounds/ps3-boot.mp3 não carregar.
  bootSynth() {
    if (!this.ctx) return;
    const c = this.ctx, t0 = c.currentTime + 0.03;
    const out = c.createGain(), rev = this.reverb(), wet = c.createGain();
    out.gain.value = 0.8; wet.gain.value = 0.7;
    out.connect(this.master); out.connect(rev); rev.connect(wet); wet.connect(this.master);

    const lp = c.createBiquadFilter();
    lp.type = "lowpass"; lp.Q.value = 0.7;
    lp.frequency.setValueAtTime(250, t0 + 0.3);
    lp.frequency.exponentialRampToValueAtTime(2600, t0 + 2.3);
    lp.frequency.exponentialRampToValueAtTime(900, t0 + 4.4);
    const pad = c.createGain();
    pad.gain.setValueAtTime(0.0001, t0 + 0.3);
    pad.gain.exponentialRampToValueAtTime(0.1, t0 + 2.3);
    pad.gain.exponentialRampToValueAtTime(0.0001, t0 + 4.7);
    lp.connect(pad); pad.connect(out);
    [65.41, 130.81, 196, 261.63, 329.63, 392, 493.88, 587.33].forEach((f) => {
      [-7, 0, 7].forEach((det) => {
        const o = c.createOscillator();
        o.type = "sawtooth"; o.frequency.value = f; o.detune.value = det;
        const g = c.createGain(); g.gain.value = 0.12;
        o.connect(g); g.connect(lp);
        o.start(t0 + 0.3); o.stop(t0 + 4.8);
      });
    });
  },
  // Som de abertura: assets/sounds/ps3-boot.mp3 (ou o sintetizado, se o arquivo faltar).
  // Tenta tocar uma vez, no começo da abertura. Se o navegador bloquear som
  // automático, não toca (para não começar atrasado, já no menu).
  startup: null,
  startupDone: false,
  playStartup() {
    if (this.startupDone) return;
    const el = new Audio("assets/sounds/ps3-boot.mp3");
    el.muted = this.muted;
    el.volume = this.volume / 100;
    this.startup = el;
    const synth = () => {
      if (this.startupDone || !this.ctx || this.ctx.state !== "running") return;
      this.startupDone = true;
      this.bootSynth();
    };
    el.addEventListener("error", synth, { once: true });
    el.play().then(() => { this.startupDone = true; this.file = el; }).catch(() => {});
  },
  // Fim da abertura: se o som ainda não começou (carregando/bloqueado), cancela.
  cancelStartup() {
    if (!this.startupDone && this.startup) this.startup.pause();
    this.startupDone = true;
  },
  tick(kind = "move") {
    if (!this.ctx || this.muted || !this.volume) return;
    const c = this.ctx, t = c.currentTime;
    const notes = { move: [[1567.98, 0, 0.05]], cat: [[1174.66, 0, 0.06]], ok: [[1318.5, 0, 0.07], [1975.5, 0.07, 0.07]], back: [[1318.5, 0, 0.06], [880, 0.06, 0.06]] }[kind];
    notes.forEach(([f, d, v]) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = "triangle"; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + d);
      g.gain.exponentialRampToValueAtTime(v, t + d + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.09);
      o.connect(g); g.connect(this.master);
      o.start(t + d); o.stop(t + d + 0.1);
    });
  },
};

let CATS = makeCats();
const state = { cat: CATS.findIndex((c) => c.id === "projects"), item: CATS.map(() => 0), panel: false };

const muteBtn = $("#mute");
const syncMute = () => {
  muteBtn.setAttribute("aria-pressed", String(audio.muted));
  muteBtn.setAttribute("aria-label", audio.muted ? T().unmute : T().mute);
};
syncMute();
muteBtn.addEventListener("click", (e) => { e.stopPropagation(); audio.setMuted(!audio.muted); syncMute(); });

/* ---------------- Onda (fundo) ---------------- */
// Como no console, a cor do fundo muda conforme o mês.
const MONTHS = [
  ["#9a9a9a", "#2e2e2e"], ["#c9a53a", "#4a3608"], ["#76b33a", "#1d4508"], ["#d987aa", "#5c1e3a"],
  ["#4aa067", "#103a20"], ["#9b70cc", "#2f1752"], ["#38aaa4", "#0c3d3a"], ["#3d9fd6", "#0d3352"],
  ["#4466cc", "#111f55"], ["#8a55c4", "#26104d"], ["#a3764a", "#3a2310"], ["#c94444", "#450b0b"],
];
const [colA, colB] = MONTHS[new Date().getMonth()];
document.querySelector('meta[name="theme-color"]').content = colB;

const cv = $("#wave"), g = cv.getContext("2d");
let W = 0, H = 0, S = 1, bgLayer = null;

// Desempenho: a onda é suave, então o canvas é desenhado em resolução menor
// e o navegador amplia. Telas de alta densidade (DPR 2) não pagam o preço cheio.
const RES = 0.6;
const FRAME_MS = 1000 / 30;   // a onda anda devagar: 30 quadros por segundo bastam

// Brilho pré-desenhado uma vez (antes era um degradê novo por brilho, a cada quadro)
const sprite = document.createElement("canvas");
sprite.width = sprite.height = 64;
{
  const sg = sprite.getContext("2d"), gr = sg.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(1, "rgba(255,255,255,0)");
  sg.fillStyle = gr; sg.fillRect(0, 0, 64, 64);
}

// Fundo (degradê do mês + vinheta) desenhado uma vez por tamanho de tela
function buildBg() {
  bgLayer = document.createElement("canvas");
  bgLayer.width = cv.width; bgLayer.height = cv.height;
  const b = bgLayer.getContext("2d");
  b.setTransform(S, 0, 0, S, 0, 0);
  const lin = b.createLinearGradient(0, 0, W * 0.4, H);
  lin.addColorStop(0, colA); lin.addColorStop(1, colB);
  b.fillStyle = lin; b.fillRect(0, 0, W, H);
  const vg = b.createRadialGradient(W * 0.5, H * 0.35, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.75);
  vg.addColorStop(0, "rgba(255,255,255,0.10)"); vg.addColorStop(1, "rgba(0,0,0,0.35)");
  b.fillStyle = vg; b.fillRect(0, 0, W, H);
}

function resize() {
  W = innerWidth; H = innerHeight;
  S = Math.min(devicePixelRatio || 1, 1.5) * RES;
  cv.width = Math.round(W * S); cv.height = Math.round(H * S);
  g.setTransform(S, 0, 0, S, 0, 0);
  buildBg();
  if (!$("#xmb").hidden) layout();
}
addEventListener("resize", resize);
resize();

const sparkles = Array.from({ length: reduceMotion ? 0 : 46 }, () => ({
  x: Math.random(), o: (Math.random() - 0.5) * 0.18, s: 0.4 + Math.random() * 1.4,
  v: 0.004 + Math.random() * 0.012, tw: Math.random() * 6.28,
}));

// Opacidade do fundo e da onda. Durante a abertura seguem uma linha do tempo
// (onda surge no preto, depois o fundo colorido); fora dela ficam em 1.
let introStart = 0, introScale = 1;   // introStart 0 = sem abertura
const ramp = (e, a, b) => { const k = Math.min(Math.max((e - a) / (b - a), 0), 1); return k * k * (3 - 2 * k); };
function waveAlphas(now) {
  if (!introStart) return [1, 1];
  const e = ((now - introStart) / 1000) * introScale;   // segundos na escala da abertura de 3,9 s
  return [ramp(e, 0.4, 1.6), ramp(e, 1.2, 2.6)];        // [linhas, fundo]
}
const waveY = (x, t, k) => {
  const ph = k * 0.045;
  return H * 0.6
    + Math.sin(x * 0.0026 + t * 0.32 + ph * 2.2) * H * 0.075
    + Math.sin(x * 0.0061 - t * 0.21 + ph * 4.5) * H * 0.028
    + Math.sin(x * 0.0013 + t * 0.12) * H * 0.04
    + (k - 20) * 1.6 * (0.6 + 0.4 * Math.sin(x * 0.003 + t * 0.4));
};

let lastDraw = 0;
function frame(now) {
  requestAnimationFrame(frame);
  if (now - lastDraw < FRAME_MS - 2) return;
  const dt = Math.min((now - lastDraw) / 1000, 0.1);
  lastDraw = now;
  const t = reduceMotion ? 0 : now / 1000;
  const [lineAlpha, bgAlpha] = waveAlphas(now);

  g.globalAlpha = 1;
  g.fillStyle = "#000";
  g.fillRect(0, 0, W, H);
  if (lineAlpha <= 0.003 && bgAlpha <= 0.003) return;

  if (bgAlpha > 0.003) {
    g.globalAlpha = bgAlpha;
    g.drawImage(bgLayer, 0, 0, W, H);
  }
  g.globalAlpha = lineAlpha;

  // Fita principal: várias linhas finas quase paralelas
  g.globalCompositeOperation = "lighter";
  g.lineWidth = 1;
  const step = W > 900 ? 14 : 10;
  for (let k = 0; k <= 40; k++) {
    const mid = 1 - Math.abs(k - 20) / 20;
    g.strokeStyle = `rgba(255,255,255,${0.025 + 0.13 * mid * mid})`;
    g.beginPath();
    for (let x = -step; x <= W + step; x += step) {
      const y = waveY(x, t, k);
      x < 0 ? g.moveTo(x, y) : g.lineTo(x, y);
    }
    g.stroke();
  }
  // Segunda fita mais fraca: todas as linhas no mesmo traço
  g.strokeStyle = "rgba(255,255,255,0.035)";
  g.beginPath();
  for (let k = 0; k <= 14; k++) {
    for (let x = -step; x <= W + step; x += step) {
      const y = H * 0.66 + Math.sin(x * 0.0034 - t * 0.27 + k * 0.08) * H * 0.06 + Math.sin(x * 0.0009 + t * 0.15) * H * 0.05 + k * 2.2;
      x < 0 ? g.moveTo(x, y) : g.lineTo(x, y);
    }
  }
  g.stroke();
  // Brilhos perto da onda
  for (const p of sparkles) {
    p.x += p.v * dt; p.tw += dt * 3;
    if (p.x > 1.02) p.x = -0.02;
    const x = p.x * W, y = waveY(x, t, 20) + p.o * H;
    const r = p.s * 3;
    g.globalAlpha = (0.35 + 0.65 * Math.max(0, Math.sin(p.tw))) * 0.7 * lineAlpha;
    g.drawImage(sprite, x - r, y - r, r * 2, r * 2);
  }
  g.globalCompositeOperation = "source-over";
  g.globalAlpha = 1;
}
requestAnimationFrame(frame);

/* ---------------- XMB: montar e posicionar ---------------- */
function build() {
  $("#cats").innerHTML = CATS.map((c, i) => `
    <button class="cat" type="button" data-cat="${i}" style="animation-delay:${i * 60}ms" aria-label="${esc(c.label)}">
      ${icon(c.icon)}<span class="label">${esc(c.label)}</span>
    </button>`).join("");
  $("#lists").innerHTML = CATS.map((c, ci) => `
    <div class="list" data-list="${ci}" role="listbox" aria-label="${esc(c.label)}">
      ${c.items.map((it, ii) => `
        <button class="item" type="button" role="option" data-cat="${ci}" data-item="${ii}">
          ${c.wide
            ? `<span class="thumb game" style="--h:${it.hue}"><b>${esc(it.title)}</b></span>`
            : `<span class="thumb">${icon(it.icon || "star")}</span>`}
          <span class="txt"><b>${esc(it.title)}</b><span class="sub"><small>${esc(it.sub || "")}</small>
            ${it.meter != null ? `<span class="meter"><i style="width:${it.meter}%"></i></span>` : ""}
          </span></span>
        </button>`).join("")}
    </div>`).join("");
}

function metrics() {
  const m = W < 640;
  return {
    ox: m ? 104 : Math.max(140, W * 0.22),
    cy: m ? Math.max(120, H * 0.22) : Math.max(150, H * 0.27),
    gap: m ? 92 : 140,
    row: m ? 62 : 74,
    wide: m ? { sw: 150, sh: 84, w: 92, h: 52 } : { sw: 200, sh: 112, w: 118, h: 66 },
    icon: m ? { sw: 60, sh: 60, w: 44, h: 44 } : { sw: 76, sh: 76, w: 54, h: 54 },
  };
}

function layout() {
  const M = metrics();
  $$(".cat").forEach((el) => {
    const i = Number(el.dataset.cat);
    const x = M.ox + (i - state.cat) * M.gap;
    el.style.transform = `translate(${x - el.offsetWidth / 2}px, ${M.cy - 36}px)`;
    el.classList.toggle("sel", i === state.cat);
    el.style.opacity = i === state.cat ? "" : String(Math.max(0, 0.85 - Math.abs(i - state.cat) * 0.12));
    el.setAttribute("aria-current", i === state.cat ? "true" : "false");
  });
  $$(".list").forEach((list) => {
    const ci = Number(list.dataset.list);
    list.classList.toggle("active", ci === state.cat);
    const dims = CATS[ci].wide ? M.wide : M.icon;
    const s = state.item[ci];
    $$(".item", list).forEach((el) => {
      const i = Number(el.dataset.item);
      const sel = i === s;
      const k = sel ? 1 : dims.w / dims.sw;       // escala da capa/ícone
      const top0 = M.cy + 62;
      let yc;                                     // centro vertical do item
      if (sel) yc = top0 + dims.sh / 2;
      else if (i > s) yc = top0 + dims.sh + 14 + (i - s - 1) * M.row + M.row / 2;
      else yc = M.cy - 70 - dims.h / 2 - (s - i - 1) * M.row;
      const tx = dims.sw / 2 + (dims.sw * k) / 2 + 18;   // texto logo à direita da capa
      const ts = sel ? 1 : 0.8;
      el.style.setProperty("--sw", dims.sw + "px");
      el.style.setProperty("--sh", dims.sh + "px");
      el.style.setProperty("--k", k);
      el.style.setProperty("--tx", tx + "px");
      el.style.setProperty("--maxw", Math.max(60, (W - (M.ox + (dims.sw * k) / 2 + 18) - 24) / ts) + "px");
      el.style.transform = `translate(${M.ox - dims.sw / 2}px, ${yc - dims.sh / 2}px)`;
      const y = yc - dims.sh / 2;
      el.classList.toggle("sel", sel);
      el.classList.toggle("above", i < s);
      el.classList.toggle("far", i < s - 2 || y > H + 40);
      el.setAttribute("aria-selected", String(sel));
      el.tabIndex = ci === state.cat && sel ? 0 : -1;
    });
  });
  $$(".cat").forEach((el) => (el.tabIndex = -1));
}

function focusCurrent() {
  if (state.panel) return;
  const el = $(`.item[data-cat="${state.cat}"][data-item="${state.item[state.cat]}"]`) || $(`.cat[data-cat="${state.cat}"]`);
  el?.focus({ preventScroll: true });
}

function moveCat(d) {
  const n = state.cat + d;
  if (n < 0 || n >= CATS.length) return;
  state.cat = n;
  audio.tick("cat");
  layout(); focusCurrent();
}
function moveItem(d) {
  const n = state.item[state.cat] + d;
  if (n < 0 || n >= CATS[state.cat].items.length) return;
  state.item[state.cat] = n;
  audio.tick("move");
  layout(); focusCurrent();
}

function activate() {
  const it = CATS[state.cat].items[state.item[state.cat]];
  if (!it) return;
  if (it.href) {
    audio.tick("ok");
    if (it.newTab || /^https?:/.test(it.href)) window.open(it.href, "_blank", "noopener");
    else location.href = it.href;
  } else if (it.panel) {
    openPanel(it.panel);
  }
}

const panel = $("#panel");
function openPanel(html) {
  audio.tick("ok");
  panel.innerHTML = html;
  panel.scrollTop = 0;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  $("#controls").hidden = false;
  state.panel = true;
  setTimeout(() => (panel.querySelector(".opts a, .opts button") || panel).focus(), 60);
}
function closePanel() {
  if (!state.panel) return;
  audio.tick("back");
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  $("#controls").hidden = true;
  state.panel = false;
  focusCurrent();
}

function wire() {
  $("#cats").addEventListener("click", (e) => {
    const b = e.target.closest(".cat");
    if (!b) return;
    const i = Number(b.dataset.cat);
    if (i !== state.cat) { state.cat = i; audio.tick("cat"); layout(); focusCurrent(); }
  });
  $("#lists").addEventListener("click", (e) => {
    const b = e.target.closest(".item");
    if (!b || state.panel) return;
    const ci = Number(b.dataset.cat), ii = Number(b.dataset.item);
    if (ci !== state.cat) return;
    if (ii !== state.item[ci]) { state.item[ci] = ii; audio.tick("move"); layout(); focusCurrent(); }
    else activate();
  });
  panel.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return closePanel();
    // Configurações: idioma e volume valem na hora e ficam salvos no navegador
    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) {
      lang = langBtn.dataset.lang;
      store.set("ps3-lang", lang);
      applyTexts();
      refresh(`[data-lang="${lang}"]`);
      audio.tick("ok");
      return;
    }
    const volBtn = e.target.closest("[data-vol]");
    if (volBtn) {
      audio.init();
      audio.setVolume(Number(volBtn.dataset.vol));
      refresh(`[data-vol="${volBtn.dataset.vol}"]`);
      audio.tick("ok");   // toca no volume novo, como prévia
    }
  });
  $("#ctl-back").addEventListener("click", closePanel);

  addEventListener("keydown", (e) => {
    if ($("#xmb").hidden) return;
    if (state.panel) {
      if (e.key === "Escape" || e.key === "Backspace") { e.preventDefault(); closePanel(); }
      else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const opts = $$(".opts a, .opts button", panel);
        if (!opts.length) return;
        e.preventDefault();
        const i = opts.indexOf(document.activeElement);
        const n = e.key === "ArrowDown" ? Math.min(i + 1, opts.length - 1) : Math.max(i - 1, 0);
        opts[n].focus();
        audio.tick("move");
      }
      return;
    }
    const k = e.key;
    if (k === "ArrowLeft") { e.preventDefault(); moveCat(-1); }
    else if (k === "ArrowRight") { e.preventDefault(); moveCat(1); }
    else if (k === "ArrowUp") { e.preventDefault(); moveItem(-1); }
    else if (k === "ArrowDown") { e.preventDefault(); moveItem(1); }
    else if (k === "Enter" || k === " ") { e.preventDefault(); activate(); }
  });

  // Roda do mouse
  let wheelLock = 0;
  addEventListener("wheel", (e) => {
    if ($("#xmb").hidden || state.panel) return;
    const now = performance.now();
    if (now < wheelLock) return;
    const ax = Math.abs(e.deltaX), ay = Math.abs(e.deltaY);
    if (Math.max(ax, ay) < 8) return;
    wheelLock = now + 140;
    if (ax > ay || e.shiftKey) moveCat(Math.sign(e.deltaX || e.deltaY));
    else moveItem(Math.sign(e.deltaY));
  }, { passive: true });

  // Deslizar no celular
  let sx = 0, sy = 0, tracking = false;
  $("#xmb").addEventListener("touchstart", (e) => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; tracking = true; }, { passive: true });
  $("#xmb").addEventListener("touchend", (e) => {
    if (!tracking || state.panel) return;
    tracking = false;
    const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 30) return;
    if (Math.abs(dx) > Math.abs(dy)) moveCat(dx < 0 ? 1 : -1);
    else moveItem(dy < 0 ? 1 : -1);
  }, { passive: true });
}

/* ---------------- Relógio ---------------- */
function tick() {
  const d = new Date();
  $("#clock-date").textContent = d.toLocaleDateString(T().locale, { day: "2-digit", month: "2-digit" });
  $("#clock-time").textContent = d.toLocaleTimeString(T().locale, { hour: "2-digit", minute: "2-digit" });
}

// Textos fixos da página no idioma atual
function applyTexts() {
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  document.title = T().title;
  $("#boot-logo .sub").textContent = T().portfolio;
  $("#intro .skip").textContent = T().skip;
  $("#intro").setAttribute("aria-label", T().intro);
  $(".hint").textContent = T().hint;
  $("#cats").setAttribute("aria-label", T().cats);
  $("#ctl-back").innerHTML = `<span class="sym o">◯</span> ${esc(T().back)}`;
  syncMute();
  tick();
}

// Remonta categorias e itens (depois de trocar idioma/volume) mantendo a seleção
// e, se o painel estiver aberto, atualiza o conteúdo dele no lugar.
function refresh(focusSel) {
  CATS = makeCats();
  const x = $("#xmb");
  x.classList.add("no-anim");
  build();
  layout();
  void x.offsetWidth;   // aplica as posições sem transição
  requestAnimationFrame(() => x.classList.remove("no-anim"));
  if (state.panel) {
    panel.innerHTML = CATS[state.cat].items[state.item[state.cat]].panel;
    (panel.querySelector(focusSel) || panel.querySelector(".opts button"))?.focus();
  }
}

/* ---------------- Fluxo: abertura → XMB ---------------- */
function showXMB(animate) {
  const x = $("#xmb");
  x.hidden = false;
  if (animate) { x.classList.add("enter"); setTimeout(() => x.classList.remove("enter"), 1200); }
  layout();
  focusCurrent();
}

// Abertura parecida com a do PS3 Slim, mais curta: preto → onda surge → fundo
// colorido → nome à direita → menu. Clique, toque, Enter, Espaço ou Esc pulam.
function runIntro() {
  const INTRO_MS = reduceMotion ? 1000 : 3900;
  const intro = $("#intro");
  introScale = 3900 / INTRO_MS;
  introStart = performance.now();
  $("#boot-name").textContent = PORTFOLIO.nome.toUpperCase();
  intro.style.setProperty("--d", INTRO_MS + "ms");
  intro.hidden = false;
  intro.classList.add("run");
  audio.playStartup();

  let ended = false;
  const end = () => {
    if (ended) return;
    ended = true;
    clearTimeout(timer);
    // Mesmo "true" (captura) do addEventListener; sem ele o atalho continuaria
    // ativo depois da abertura e engoliria Enter/Espaço/Esc.
    removeEventListener("keydown", skipKey, true);
    audio.cancelStartup();
    store.set("ps3-booted", "1", sessionStorage);
    introStart = 0;              // fundo e onda em opacidade total
    intro.hidden = true;
    showXMB(true);
  };
  const skipKey = (e) => {
    if (["Enter", " ", "Escape"].includes(e.key)) { e.preventDefault(); e.stopImmediatePropagation(); end(); }
  };
  intro.addEventListener("click", end, { once: true });
  addEventListener("keydown", skipKey, true);
  const timer = setTimeout(end, INTRO_MS);
}

build();
wire();
applyTexts();

// Confere se o currículo já foi colocado; se não, o item mostra "Ainda não adicionado"
if (P.curriculo) {
  fetch(P.curriculo, { method: "HEAD", cache: "no-store" })
    .then((r) => { if (!r.ok) { resumeOk = false; refresh(); } else resumeOk = true; })
    .catch(() => {});   // sem servidor (file://): mantém o link
}
setInterval(tick, 15000);

// O navegador só libera som depois de um clique/tecla; a partir daí os
// "ticks" de navegação funcionam.
const unlock = () => {
  audio.init();
  if (audio.ctx && audio.ctx.state === "suspended") audio.ctx.resume();
  removeEventListener("pointerdown", unlock, true);
  removeEventListener("keydown", unlock, true);
};
addEventListener("pointerdown", unlock, true);
addEventListener("keydown", unlock, true);

// Abertura uma vez por sessão; depois, menu direto.
if (store.get("ps3-booted", sessionStorage) === "1") showXMB(false);
else runIntro();
