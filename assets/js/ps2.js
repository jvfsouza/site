/* Portfólio estilo PS2 (ps2.html) — código */
/* =========================================================
   EDITE AQUI: todo o conteúdo do portfólio fica neste objeto.
   ========================================================= */
const PORTFOLIO = {
  nome: "João",
  cargo: "Desenvolvedor Front-end",
  local: "Brasil",
  bio: "Olá! Sou desenvolvedor e gosto de criar interfaces que parecem vivas — com movimento, som e detalhes que lembram os consoles com que cresci. Este texto é um exemplo: troque pela sua bio.",
  info: [
    ["Nome", "João"],
    ["Função", "Desenvolvedor Front-end"],
    ["Localização", "Brasil"],
    ["Idiomas", "Português, Inglês"],
    ["Disponível para", "Freelas e vagas"],
    ["Versão do sistema", "2.0 · Browser 2.10"],
  ],
  habilidades: [
    ["HTML & CSS", 90],
    ["JavaScript", 80],
    ["React", 70],
    ["Node.js", 60],
    ["UI / Design", 65],
  ],
  projetos: [
    {
      titulo: "Projeto Alpha",
      ano: "2026",
      descricao: "Aplicação web de exemplo. Descreva aqui o problema, o que você construiu e o resultado.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      links: { demo: "#", codigo: "https://github.com/jvfsouza" },
      cor: 215,
    },
    {
      titulo: "Projeto Beta",
      ano: "2025",
      descricao: "Dashboard com gráficos em tempo real. Substitua por um projeto seu.",
      tecnologias: ["React", "TypeScript"],
      links: { demo: "#", codigo: "https://github.com/jvfsouza" },
      cor: 265,
    },
    {
      titulo: "Projeto Gamma",
      ano: "2025",
      descricao: "API REST com autenticação e banco de dados. Texto de exemplo.",
      tecnologias: ["Node.js", "PostgreSQL"],
      links: { codigo: "https://github.com/jvfsouza" },
      cor: 180,
    },
    {
      titulo: "Projeto Delta",
      ano: "2024",
      descricao: "Jogo de navegador feito com Canvas. Texto de exemplo.",
      tecnologias: ["Canvas", "JavaScript"],
      links: { demo: "#" },
      cor: 320,
    },
    {
      titulo: "Este site",
      ano: "2026",
      descricao: "Portfólio inspirado no boot e no menu do PlayStation 2: canvas, CSS 3D e som sintetizado com Web Audio.",
      tecnologias: ["Canvas", "CSS 3D", "Web Audio"],
      links: { codigo: "https://github.com/jvfsouza/site" },
      cor: 200,
    },
    {
      titulo: "Portfólio PS3",
      ano: "2026",
      descricao: "A versão deste portfólio inspirada no menu do PlayStation 3: a onda que muda de cor com o mês e os projetos no lugar dos jogos.",
      tecnologias: ["Canvas", "CSS", "Web Audio"],
      links: { demo: "index.html", codigo: "https://github.com/jvfsouza/site" },
      cor: 275,
    },
  ],
  contatos: [
    { rotulo: "E-mail", valor: "seuemail@exemplo.com", url: "mailto:seuemail@exemplo.com" },
    { rotulo: "GitHub", valor: "github.com/jvfsouza", url: "https://github.com/jvfsouza" },
    { rotulo: "LinkedIn", valor: "linkedin.com/in/seu-perfil", url: "https://www.linkedin.com/" },
  ],
};

/* ========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const BOOT_MS = reduceMotion ? 1000 : 3000;
const store = {
  get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
  set(k, v, s = localStorage) { try { s.setItem(k, v); } catch {} },
};
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------------- Áudio ---------------- */
const audio = {
  ctx: null,
  master: null,
  muted: store.get("ps2-muted") === "1",
  file: null,
  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.7;
    this.master.connect(this.ctx.destination);
  },
  setMuted(m) {
    this.muted = m;
    store.set("ps2-muted", m ? "1" : "0");
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.7, this.ctx.currentTime, 0.05);
    if (this.file) this.file.muted = m;
  },
  reverb() {
    const c = this.ctx, len = c.sampleRate * 2.6;
    const buf = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    }
    const conv = c.createConvolver();
    conv.buffer = buf;
    return conv;
  },
  // Recriação sintetizada do clima do boot (~3s): drone grave + whoosh + acorde etéreo.
  bootSynth() {
    if (!this.ctx) return;
    const c = this.ctx, t0 = c.currentTime + 0.02;
    const out = c.createGain();
    out.gain.value = 0.9;
    const rev = this.reverb();
    const wet = c.createGain();
    wet.gain.value = 0.55;
    out.connect(this.master);
    out.connect(rev); rev.connect(wet); wet.connect(this.master);

    // Drone grave que cresce
    [[36.71, "sine", 0.5], [73.42, "sawtooth", 0.08], [55, "sine", 0.25]].forEach(([f, type, v]) => {
      const o = c.createOscillator(), g = c.createGain(), lp = c.createBiquadFilter();
      o.type = type; o.frequency.value = f;
      o.frequency.linearRampToValueAtTime(f * 1.02, t0 + 1.4);
      lp.type = "lowpass"; lp.frequency.setValueAtTime(200, t0); lp.frequency.linearRampToValueAtTime(900, t0 + 1.3);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(v, t0 + 1.25);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 3.2);
      o.connect(lp); lp.connect(g); g.connect(out);
      o.start(t0); o.stop(t0 + 3.3);
    });

    // Whoosh de ruído subindo
    const nLen = c.sampleRate * 1.6, nb = c.createBuffer(1, nLen, c.sampleRate), nd = nb.getChannelData(0);
    for (let i = 0; i < nLen; i++) nd[i] = Math.random() * 2 - 1;
    const ns = c.createBufferSource(), bp = c.createBiquadFilter(), ng = c.createGain();
    ns.buffer = nb;
    bp.type = "bandpass"; bp.Q.value = 1.4;
    bp.frequency.setValueAtTime(180, t0 + 0.2);
    bp.frequency.exponentialRampToValueAtTime(4200, t0 + 1.45);
    ng.gain.setValueAtTime(0.0001, t0 + 0.2);
    ng.gain.exponentialRampToValueAtTime(0.18, t0 + 1.3);
    ng.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.6);
    ns.connect(bp); bp.connect(ng); ng.connect(out);
    ns.start(t0 + 0.2);

    // Acorde etéreo (Ré maior com 9ª) a partir de ~1.45s
    const tc = t0 + 1.45;
    [146.83, 293.66, 440, 587.33, 659.25, 739.99, 880, 1174.66].forEach((f, i) => {
      [-4, 4].forEach((det) => {
        const o = c.createOscillator(), g = c.createGain();
        o.type = i < 2 ? "triangle" : "sine";
        o.frequency.value = f; o.detune.value = det;
        const v = (i < 2 ? 0.07 : 0.045) / (1 + i * 0.12);
        g.gain.setValueAtTime(0.0001, tc);
        g.gain.exponentialRampToValueAtTime(v, tc + 0.06 + i * 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, tc + 2.4);
        o.connect(g); g.connect(out);
        o.start(tc); o.stop(tc + 2.5);
      });
    });

    // Brilhos agudos
    [0, 0.12, 0.22, 0.38, 0.5].forEach((d, i) => {
      const o = c.createOscillator(), g = c.createGain(), t = tc + d;
      o.type = "sine"; o.frequency.value = [2349.3, 2959.96, 3520, 2637, 4698.6][i];
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.025, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
      o.connect(g); g.connect(out);
      o.start(t); o.stop(t + 0.8);
    });
  },
  // Tenta usar assets/sounds/ps2-boot.mp3 (se existir); senão, usa o sintetizado.
  playBoot() {
    return new Promise((resolve) => {
      let done = false;
      const fallback = () => { if (done) return; done = true; this.file = null; this.bootSynth(); resolve(); };
      try {
        const el = new Audio();
        el.preload = "auto";
        el.muted = this.muted;
        el.addEventListener("canplay", () => {
          if (done) return;
          el.play().then(() => { done = true; this.file = el; resolve(); }).catch(fallback);
        }, { once: true });
        el.addEventListener("error", fallback, { once: true });
        el.src = "assets/sounds/ps2-boot.mp3";
        setTimeout(fallback, 600);
      } catch { fallback(); }
    });
  },
  blip(kind = "move") {
    if (!this.ctx || this.muted) return;
    const c = this.ctx, t = c.currentTime;
    const seq = { move: [[1046.5, 0]], ok: [[880, 0], [1318.5, 0.06]], back: [[784, 0], [523.25, 0.06]] }[kind];
    seq.forEach(([f, d]) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = "sine"; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + d);
      g.gain.exponentialRampToValueAtTime(0.08, t + d + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.14);
      o.connect(g); g.connect(this.master);
      o.start(t + d); o.stop(t + d + 0.16);
    });
  },
};

const muteBtn = $("#mute");
const syncMute = () => {
  muteBtn.setAttribute("aria-pressed", String(audio.muted));
  muteBtn.setAttribute("aria-label", audio.muted ? "Ativar som" : "Silenciar som");
};
syncMute();
muteBtn.addEventListener("click", (e) => { e.stopPropagation(); audio.setMuted(!audio.muted); syncMute(); });

/* ---------------- Canvas de efeitos ---------------- */
const cv = $("#fx"), g = cv.getContext("2d");
let W = 0, H = 0, S = 1, menuBg = null;

// Desempenho: os efeitos são suaves, então o canvas é desenhado em resolução menor
// e o navegador amplia. No menu, 30 quadros por segundo bastam (tudo anda devagar).
const RES = 0.6;
const MENU_FRAME_MS = 1000 / 30;

// Imagens pré-desenhadas uma vez (antes eram degradês novos a cada quadro)
function makeGlow(size, inner, outer) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const x = c.getContext("2d"), gr = x.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gr.addColorStop(0, inner); gr.addColorStop(1, outer);
  x.fillStyle = gr; x.fillRect(0, 0, size, size);
  return c;
}
const dotSprite = makeGlow(32, "rgba(190,220,255,1)", "rgba(60,120,255,0)");
const fogSprite = makeGlow(256, "rgba(40,110,255,1)", "rgba(40,110,255,0)");

function resize() {
  S = Math.min(devicePixelRatio || 1, 1.5) * RES;
  W = innerWidth; H = innerHeight;
  cv.width = Math.round(W * S); cv.height = Math.round(H * S);
  g.setTransform(S, 0, 0, S, 0, 0);
  // Fundo do menu desenhado uma vez por tamanho de tela
  menuBg = document.createElement("canvas");
  menuBg.width = cv.width; menuBg.height = cv.height;
  const b = menuBg.getContext("2d"), lin = b.createLinearGradient(0, 0, 0, menuBg.height);
  lin.addColorStop(0, "#020814"); lin.addColorStop(0.6, "#061a3a"); lin.addColorStop(1, "#0a2a5c");
  b.fillStyle = lin; b.fillRect(0, 0, menuBg.width, menuBg.height);
}
addEventListener("resize", resize);
resize();

const particles = Array.from({ length: reduceMotion ? 0 : 110 }, () => ({
  x: Math.random(), y: Math.random(), z: Math.random(),
  vx: (Math.random() - 0.5) * 0.02, vy: -0.01 - Math.random() * 0.03,
  tw: Math.random() * Math.PI * 2,
}));

function drawParticles(dt, alpha) {
  g.globalCompositeOperation = "lighter";
  for (const p of particles) {
    p.x += p.vx * dt; p.y += p.vy * dt; p.tw += dt * 2;
    if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
    if (p.x < -0.05) p.x = 1.05; else if (p.x > 1.05) p.x = -0.05;
    const r = (0.6 + p.z * 2.2) * 4;
    g.globalAlpha = alpha * (0.25 + 0.5 * p.z) * (0.6 + 0.4 * Math.sin(p.tw));
    g.drawImage(dotSprite, p.x * W - r, p.y * H - r, r * 2, r * 2);
  }
  g.globalAlpha = 1;
  g.globalCompositeOperation = "source-over";
}

// Torres de cubos translúcidos (o momento clássico do boot)
const towers = [];
for (let i = -4; i <= 4; i++) for (let j = -4; j <= 4; j++) {
  if (Math.random() < 0.35) continue;
  const dist = Math.hypot(i, j);
  towers.push({ x: i * 1.7, z: j * 1.7, h: 1 + Math.floor(Math.random() * Math.max(1, 7 - dist)), delay: dist * 0.07 + Math.random() * 0.15 });
}

function makeProj(theta, R, camY) {
  const ct = Math.cos(theta), st = Math.sin(theta);
  const p = Math.atan2(camY - 1.2, R), cp = Math.cos(p), sp = Math.sin(p);
  const f = Math.min(W, H) * 1.1, cx = W / 2, cy = H * 0.45;
  return (x, y, z) => {
    const X = x * ct - z * st;
    let Z = x * st + z * ct + R;
    const Y = y - camY;
    const Y2 = Y * cp + Z * sp, Z2 = -Y * sp + Z * cp;
    if (Z2 < 0.2) return null;
    return [cx + (f * X) / Z2, cy - (f * Y2) / Z2, Z2];
  };
}

function drawTowers(t, alpha) {
  const ease = (k) => 1 - Math.pow(1 - Math.min(Math.max(k, 0), 1), 3);
  const proj = makeProj(0.7 + t * 0.3, 24 - t * 1.6, 9 - t * 0.6);
  g.globalCompositeOperation = "lighter";
  g.lineWidth = 1;
  const s = 0.5;
  for (const tw of towers) {
    const grow = ease((t - 0.6 - tw.delay) / 1.1);
    if (grow <= 0) continue;
    const h = tw.h * grow;
    const levels = Math.ceil(h);
    for (let k = 0; k < levels; k++) {
      const y0 = k, y1 = Math.min(k + 1, h) - 0.06;
      if (y1 <= y0) continue;
      const c = [
        [tw.x - s, y0, tw.z - s], [tw.x + s, y0, tw.z - s], [tw.x + s, y0, tw.z + s], [tw.x - s, y0, tw.z + s],
        [tw.x - s, y1, tw.z - s], [tw.x + s, y1, tw.z - s], [tw.x + s, y1, tw.z + s], [tw.x - s, y1, tw.z + s],
      ].map((v) => proj(...v));
      if (c.some((v) => !v)) continue;
      const fog = Math.max(0.15, 1 - (c[0][2] - 8) / 22);
      const top = k === levels - 1 ? 1.6 : 1;
      g.fillStyle = `rgba(40,100,255,${0.05 * alpha * fog * top})`;
      g.strokeStyle = `rgba(130,185,255,${0.32 * alpha * fog})`;
      [[0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7], [4, 5, 6, 7]].forEach((face) => {
        g.beginPath();
        face.forEach((idx, n) => (n ? g.lineTo(c[idx][0], c[idx][1]) : g.moveTo(c[idx][0], c[idx][1])));
        g.closePath(); g.fill(); g.stroke();
      });
    }
  }
  g.globalCompositeOperation = "source-over";
}

let scene = "black", sceneStart = performance.now(), last = performance.now();
function setScene(s) { scene = s; sceneStart = performance.now(); }

function frame(now) {
  requestAnimationFrame(frame);
  if (scene === "menu" && now - last < MENU_FRAME_MS - 2) return;
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  const t = (now - sceneStart) / 1000;
  g.clearRect(0, 0, W, H);

  if (scene === "boot") {
    const k = Math.min(t / (BOOT_MS / 1000), 1);
    // Escuro → névoa azul
    const bg = g.createRadialGradient(W / 2, H * 0.55, 0, W / 2, H * 0.55, Math.max(W, H) * 0.8);
    bg.addColorStop(0, `rgba(20,60,170,${0.15 + k * 0.45})`);
    bg.addColorStop(1, "rgba(0,0,0,1)");
    g.fillStyle = "#000"; g.fillRect(0, 0, W, H);
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    // Brilho central do começo
    const flare = Math.max(0, 1 - Math.abs(t - 0.5) / 0.6);
    if (flare > 0) {
      const fl = g.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.min(W, H) * 0.5);
      fl.addColorStop(0, `rgba(160,200,255,${0.35 * flare})`);
      fl.addColorStop(1, "rgba(30,90,255,0)");
      g.fillStyle = fl; g.fillRect(0, 0, W, H);
    }
    if (!reduceMotion) drawTowers(t, 1);
    drawParticles(dt * 3, 0.9);
  } else if (scene === "menu") {
    const fade = Math.min(t / 0.8, 1);
    g.drawImage(menuBg, 0, 0, W, H);
    // Névoa / luzes se movendo devagar
    g.globalCompositeOperation = "lighter";
    const tt = reduceMotion ? 0 : now / 1000;
    [[0.25, 0.7, 0.55, 0.11], [0.75, 0.35, 0.45, 0.07], [0.5, 1.0, 0.8, 0.08]].forEach(([x, y, r, a], i) => {
      const px = W * (x + Math.sin(tt * 0.12 + i * 2) * 0.08), py = H * (y + Math.cos(tt * 0.1 + i) * 0.05);
      const rad = Math.max(W, H) * r;
      g.globalAlpha = a * fade;
      g.drawImage(fogSprite, px - rad, py - rad, rad * 2, rad * 2);
    });
    g.globalAlpha = 1;
    g.globalCompositeOperation = "source-over";
    drawParticles(dt, 0.55 * fade);
  } else {
    g.fillStyle = "#000"; g.fillRect(0, 0, W, H);
  }
}
requestAnimationFrame(frame);

/* ---------------- Conteúdo ---------------- */
function render() {
  const P = PORTFOLIO;
  $("#brand").innerHTML = `<strong>${esc(P.nome)}</strong> · ${esc(P.cargo)}`;
  $("#boot-company").textContent = "PORTFOLIO ENTERTAINMENT";
  $("#boot-logo").innerHTML = `${esc(P.nome.toUpperCase())}<small>${esc(P.cargo.toUpperCase())}</small>`;

  $("#slots").innerHTML = P.projetos.map((p, i) => {
    const letter = esc(p.titulo.trim()[0] || "?");
    return `<button class="slot" role="listitem" data-i="${i}" aria-label="${esc(p.titulo)}">
      <div class="cube" style="--h:${Number(p.cor) || 210}"><i>${letter}</i><i>${letter}</i><i>${letter}</i><i>${letter}</i><i></i><i></i></div>
      <div class="slot-name">${esc(p.titulo)}</div>
    </button>`;
  }).join("");

  $("#bio").textContent = P.bio;
  $("#config-rows").innerHTML = P.info.map(([k, v]) => `<li><span>${esc(k)}</span><strong>${esc(v)}</strong></li>`).join("");
  $("#skills").innerHTML = P.habilidades.map(([n, v]) => `
    <div><div class="skill-head"><span>${esc(n)}</span><span>${Number(v)}%</span></div>
    <div class="bar" role="progressbar" aria-label="${esc(n)}" aria-valuenow="${Number(v)}" aria-valuemin="0" aria-valuemax="100"><div data-w="${Number(v)}"></div></div></div>`).join("");

  $("#contacts").innerHTML = P.contatos.map((c) => `
    <li><a class="contact-item" href="${esc(c.url)}" ${c.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
      <span class="orb"></span><span><b>${esc(c.rotulo)}</b><span>${esc(c.valor)}</span></span></a></li>`).join("");
}

function showProject(i) {
  const p = PORTFOLIO.projetos[i];
  if (!p) return;
  const L = p.links || {};
  // Links externos abrem em nova aba; páginas deste site (ex.: index.html) abrem na mesma
  const ext = (u) => (/^https?:/.test(u) ? ' target="_blank" rel="noopener"' : "");
  const has = (u) => u && u !== "#";   // "#" = link ainda não definido
  const links = [
    has(L.demo) ? `<a class="btn" href="${esc(L.demo)}"${ext(L.demo)}>▶ Ver demo</a>` : L.demo ? `<span class="btn soon">▶ Demo em breve</span>` : "",
    has(L.codigo) ? `<a class="btn" href="${esc(L.codigo)}"${ext(L.codigo)}>⌘ Código</a>` : "",
  ].join("");
  $("#detail").innerHTML = `
    <div class="meta">Slot ${String(i + 1).padStart(2, "0")} · ${esc(p.ano || "")}</div>
    <h3>${esc(p.titulo)}</h3>
    <p>${esc(p.descricao)}</p>
    <ul class="tags">${(p.tecnologias || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    <div class="links">${links}</div>`;
}

/* ---------------- Navegação ---------------- */
let current = "menu";
const lastFocus = {};

function navItems(view) {
  const v = $(`#view-${view}`);
  if (view === "projects") return $$(".slot", v);
  return $$(".menu-item, .contact-item", v);
}

function select(el, sound = true) {
  if (!el) return;
  const items = navItems(current);
  items.forEach((x) => x.classList.toggle("sel", x === el));
  lastFocus[current] = items.indexOf(el);
  if (document.activeElement !== el) el.focus({ preventScroll: false });
  if (current === "projects") showProject(Number(el.dataset.i));
  if (sound) audio.blip("move");
}

function go(view, sound = true) {
  if (!$(`#view-${view}`)) return;
  if (sound) audio.blip(view === "menu" ? "back" : "ok");
  $$(".view").forEach((v) => v.classList.toggle("active", v.id === `view-${view}`));
  current = view;
  $("#ctl-back").hidden = view === "menu";
  if (view === "about") {
    $$("#skills .bar > div").forEach((b) => (b.style.width = "0"));
    requestAnimationFrame(() => requestAnimationFrame(() => $$("#skills .bar > div").forEach((b) => (b.style.width = b.dataset.w + "%"))));
  }
  const items = navItems(view);
  if (items.length) {
    select(items[lastFocus[view] || 0], false);
  } else {
    const title = $(`#view-${view} .view-title`);
    title.setAttribute("tabindex", "-1");
    title.focus();
  }
  if (history.replaceState) history.replaceState(null, "", view === "menu" ? location.pathname : `#${view}`);
}

function back() { if (current !== "menu") go("menu"); }

function move(dir) {
  const items = navItems(current);
  if (!items.length) return;
  let i = items.indexOf(document.activeElement);
  if (i < 0) i = lastFocus[current] || 0;
  if (current === "projects") {
    const top = items[0].offsetTop;
    const cols = Math.max(1, items.filter((x) => x.offsetTop === top).length);
    const step = { left: -1, right: 1, up: -cols, down: cols }[dir];
    const n = i + step;
    if (n >= 0 && n < items.length) select(items[n]);
  } else {
    const step = dir === "up" || dir === "left" ? -1 : 1;
    select(items[(i + step + items.length) % items.length]);
  }
}

function wireApp() {
  $$("[data-go]").forEach((b) => b.addEventListener("click", () => go(b.dataset.go)));
  $("#ctl-back").addEventListener("click", back);
  $("#ctl-enter").addEventListener("click", () => {
    const el = navItems(current)[lastFocus[current] || 0];
    if (el) el.click();
  });
  $$(".menu-item, .contact-item, .slot").forEach((el) => {
    el.addEventListener("mouseenter", () => { if (!el.classList.contains("sel")) select(el); });
    el.addEventListener("focus", () => { if (!el.classList.contains("sel")) select(el, false); });
  });
  $$(".slot").forEach((el) => el.addEventListener("click", () => {
    audio.blip("ok");
    $("#detail a")?.focus();
  }));
  $$(".contact-item").forEach((el) => el.addEventListener("click", () => audio.blip("ok")));

  addEventListener("keydown", (e) => {
    if ($("#app").hidden) return;
    const k = e.key;
    const map = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };
    if (map[k]) {
      // Dentro do painel de detalhes, as setas voltam para a grade
      e.preventDefault();
      move(map[k]);
    } else if (k === "Escape" || k === "Backspace") {
      e.preventDefault();
      back();
    }
  });

  // Roda do mouse: troca a seleção (em "Sobre" a página rola normalmente)
  let wheelLock = 0;
  addEventListener("wheel", (e) => {
    if ($("#app").hidden || current === "about") return;
    e.preventDefault();
    const now = performance.now();
    if (now < wheelLock) return;
    const d = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (Math.abs(d) < 8) return;
    wheelLock = now + 140;
    // Nos projetos anda um slot por vez; nas listas, para cima/baixo
    if (current === "projects") move(d > 0 ? "right" : "left");
    else move(d > 0 ? "down" : "up");
  }, { passive: false });
}

/* ---------------- Relógio ---------------- */
function tick() {
  const d = new Date();
  $("#clock-time").textContent = d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  $("#clock-date").textContent = d.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" }).toUpperCase();
}

/* ---------------- Fluxo: start → boot → menu ---------------- */
function showApp() {
  setScene("menu");
  const app = $("#app");
  app.hidden = false;
  app.classList.add("is-fading");
  requestAnimationFrame(() => app.classList.remove("is-fading"));
  const initial = location.hash.slice(1);
  go(["projects", "about", "contact"].includes(initial) ? initial : "menu", false);
}

let booting = false;
async function startBoot() {
  if (booting) return;
  booting = true;
  audio.init();
  if (audio.ctx && audio.ctx.state === "suspended") {
    // Sem interação o navegador costuma recusar; espera no máximo 150ms pela resposta.
    await Promise.race([audio.ctx.resume().catch(() => {}), new Promise((r) => setTimeout(r, 150))]);
  }
  // Só toca o som do boot se o áudio foi liberado; senão ele tocaria atrasado no primeiro clique.
  if (audio.ctx && audio.ctx.state === "running") await audio.playBoot();

  const boot = $("#boot");
  boot.hidden = false;
  boot.style.setProperty("--d", BOOT_MS + "ms");
  boot.classList.add("run");
  setScene("boot");

  let ended = false;
  const end = () => {
    if (ended) return;
    ended = true;
    store.set("ps2-booted", "1", sessionStorage);
    boot.classList.add("is-fading");
    setTimeout(() => { boot.hidden = true; showApp(); }, 450);
    removeEventListener("keydown", skipKey);
  };
  const skipKey = (e) => { if (["Enter", " ", "Escape"].includes(e.key)) { e.preventDefault(); end(); } };
  boot.addEventListener("click", end, { once: true });
  addEventListener("keydown", skipKey);
  setTimeout(end, BOOT_MS);
}

addEventListener("hashchange", () => {
  if ($("#app").hidden) return;
  const v = location.hash.slice(1);
  go(["projects", "about", "contact"].includes(v) ? v : "menu", false);
});

render();
wireApp();
tick();
setInterval(tick, 15000);

// Sem tela de "PRESS START": o boot começa sozinho. O navegador pode bloquear
// o som até o primeiro clique/tecla; a partir daí os sons de navegação funcionam.
const unlock = () => {
  audio.init();
  if (audio.ctx && audio.ctx.state === "suspended") audio.ctx.resume();
  removeEventListener("pointerdown", unlock, true);
  removeEventListener("keydown", unlock, true);
};
addEventListener("pointerdown", unlock, true);
addEventListener("keydown", unlock, true);

if (store.get("ps2-booted", sessionStorage) === "1") showApp();
else startBoot();
