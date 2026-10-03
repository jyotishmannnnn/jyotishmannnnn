// Generates the SVG assets used by README.md. Run: node scripts/build-assets.js
const fs = require("fs");
const path = require("path");

const out = (p, s) => {
  const f = path.join(__dirname, "..", "assets", p);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, s);
};
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const C = { void: "#0a0a0b", bone: "#e9e4d8", ash: "#8d887c", signal: "#ff4d2e" };
const MONO = `"JetBrains Mono",Consolas,"Courier New",monospace`;
const SERIF = `Georgia,"Times New Roman",serif`;
const REDUCED = `@media (prefers-reduced-motion:reduce){*{animation:none!important}}`;

const frame = (w, h) => `<rect width="${w}" height="${h}" rx="14" fill="${C.void}"/>
<rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" rx="14" fill="none" stroke="${C.bone}" stroke-opacity=".14"/>`;

// ---------- terminal: lines type themselves out, hold, then loop ----------
// rows: [key, value, highlight?]
function terminal({ file, title, cmd, rows, keyX = 190, step = 1.3, type = 1, total }) {
  const w = 1200, top = 96, lh = 34;
  const h = top + rows.length * lh + 40;
  total = total || 2 + rows.length * step + 6;
  const pct = (t) => ((t / total) * 100).toFixed(2);
  // a void-coloured shutter slides right off each line, which reads as typing
  let keys = "";
  const body = rows.map(([k, v, hot], i) => {
    const s = 0.8 + i * step, y = top + i * lh;
    keys += `@keyframes r${i}{0%,${pct(s)}%{transform:translateX(0)}${pct(s + type)}%,95%{transform:translateX(1120px)}100%{transform:translateX(0)}}.r${i}{animation:r${i} ${total}s linear infinite}`;
    return `<text x="48" y="${y}" class="m"><tspan fill="${C.signal}">${esc(k)}</tspan><tspan x="${keyX}" fill="${C.bone}" ${hot ? "" : `fill-opacity=".85"`}>${esc(v)}</tspan>${hot ? `<tspan fill="${C.signal}">  ${esc(hot)}</tspan>` : ""}</text>
<rect x="40" y="${y - 24}" width="1120" height="34" fill="${C.void}" class="r${i}"/>`;
  });
  const cy = top + rows.length * lh;
  out(file, `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}: ${esc(rows.map(([k, v]) => `${k} ${v}`).join("; "))}">
<style>${keys}.m{font:400 17px ${MONO}}.cur{animation:b 1s steps(1) infinite}@keyframes b{50%{opacity:0}}${REDUCED}</style>
${frame(w, h)}
<circle cx="30" cy="26" r="6" fill="${C.signal}"/><circle cx="50" cy="26" r="6" fill="${C.ash}" fill-opacity=".5"/><circle cx="70" cy="26" r="6" fill="${C.ash}" fill-opacity=".5"/>
<text x="${w / 2}" y="31" text-anchor="middle" class="m" font-size="13" fill="${C.ash}">${esc(title)}</text>
<line x1="0" y1="46" x2="${w}" y2="46" stroke="${C.bone}" stroke-opacity=".1"/>
<text x="48" y="${top - 30}" class="m" fill="${C.ash}">$ ${esc(cmd)}</text>
${body.join("\n")}
<rect x="48" y="${cy - 18}" width="10" height="20" fill="${C.signal}" class="cur"/>
</svg>`);
}

terminal({
  file: "boot.svg",
  title: "~/boot.log",
  cmd: "cat ~/boot.log",
  keyX: 150,
  rows: [
    ["[age 7]", "Watched Iron Man in Guwahati. Locked in on exoskeletons and robots."],
    ["[2015]", "First robotics workshop. First real hardware in my hands. No going back."],
    ["[2017]", "National bronze at IIT Guwahati. The first time a judge said yes."],
    ["[2023]", "Led a team at a world robotics championship. Started my first company."],
    ["[2024]", "Left Assam for Chennai. Mechatronics at VIT."],
    ["[2025]", "Co-founded Sentrix. Burned out, restructured, came back sharper."],
    ["[2026]", "Teaching robots to feel.", "● running"],
  ],
});

terminal({
  file: "now.svg",
  title: "~/now.log",
  cmd: "tail -f ~/now.log",
  rows: [
    ["[building]", "gloves that record how human hands actually touch things"],
    ["[tuning]", "taxel grids until the noise floor stops lying to me"],
    ["[soldering]", "more ESP32-S3s than is probably healthy"],
    ["[learning]", "what a robot needs to feel before it can be trusted with an egg"],
    ["[open to]", "tactile datasets · haptics · humanoids · anything with a sense of touch"],
  ],
});

// ---------- off the bench: six tiles about life outside the lab ----------
{
  const w = 1200, tw = 380, th = 176, gap = 30, pad = 0;
  const icons = {
    // stopwatch with a sweeping hand
    watch: `<circle r="17" fill="none" stroke="${C.bone}" stroke-width="2"/><rect x="-4" y="-25" width="8" height="5" rx="1.5" fill="${C.bone}"/>
      <line y2="-12" stroke="${C.signal}" stroke-width="2.4" stroke-linecap="round" class="spin"/>`,
    // crossed swords (Dyrroth is a fighter)
    sword: `<g stroke="${C.bone}" stroke-width="2.2" stroke-linecap="round"><line x1="-15" y1="15" x2="13" y2="-13"/><line x1="15" y1="15" x2="-13" y2="-13"/>
      <line x1="-15" y1="7" x2="-7" y2="15"/><line x1="15" y1="7" x2="7" y2="15"/></g><circle r="3.5" fill="${C.signal}" class="pulse"/>`,
    // gavel striking
    gavel: `<g class="strike"><rect x="-14" y="-16" width="20" height="10" rx="2" fill="${C.bone}" transform="rotate(-35)"/><line x1="0" y1="-6" x2="14" y2="12" stroke="${C.bone}" stroke-width="3" stroke-linecap="round"/></g>
      <rect x="-18" y="14" width="22" height="5" rx="1.5" fill="${C.signal}"/>`,
    // open book
    book: `<path d="M0 -10 C-8 -15 -16 -15 -20 -12 V14 C-16 11 -8 11 0 16 C8 11 16 11 20 14 V-12 C16 -15 8 -15 0 -10 Z" fill="none" stroke="${C.bone}" stroke-width="2" stroke-linejoin="round"/>
      <line y1="-10" y2="16" stroke="${C.bone}" stroke-width="2"/><g class="pulse"><line x1="-15" y1="-4" x2="-5" y2="-2" stroke="${C.signal}" stroke-width="2"/><line x1="-15" y1="3" x2="-5" y2="5" stroke="${C.signal}" stroke-width="2"/></g>`,
    // padlock clicking open
    lock: `<rect x="-14" y="-3" width="28" height="22" rx="3" fill="none" stroke="${C.bone}" stroke-width="2.2"/>
      <path d="M-8 -3 V-10 A8 8 0 0 1 8 -10 V-3" fill="none" stroke="${C.signal}" stroke-width="2.4" class="shackle"/><circle cy="8" r="2.6" fill="${C.bone}"/>`,
    // spotlight
    stage: `<path d="M-6 -20 L6 -20 L22 18 L-22 18 Z" fill="${C.signal}" fill-opacity=".18" class="pulse"/><circle cy="-21" r="5" fill="${C.bone}"/>
      <path d="M-9 18 l3 -12 h12 l3 12" fill="none" stroke="${C.bone}" stroke-width="2"/>`,
  };
  const tiles = [
    { icon: "watch", big: "10.89 s", line: "100 m sprint. Gold, and a record." },
    { icon: "sword", big: "#1 in India", line: "Dyrroth main, Mobile Legends." },
    { icon: "gavel", big: "Order.", line: "Chaired the UNSC and ICJ at MUN." },
    { icon: "book", big: "Words too", line: "Started the Assam Literary Association at VIT." },
    { icon: "lock", big: "ex-pentester", line: "Broke into systems, legally, for a while." },
    { icon: "stage", big: "Best Actor", line: "Yes, on an actual stage." },
  ];
  const h = th * 2 + gap;
  const body = tiles.map((t, i) => {
    const x = pad + (i % 3) * (tw + (w - 3 * tw) / 2), y = Math.floor(i / 3) * (th + gap);
    return `<g transform="translate(${x} ${y})">${frame(tw, th)}
      <g transform="translate(46 50)">${icons[t.icon]}</g>
      <text x="${tw - 26}" y="46" text-anchor="end" font-family='${MONO}' font-size="11" fill="${C.ash}" letter-spacing="2">0${i + 1}</text>
      <text x="28" y="122" font-family='${SERIF}' font-size="34" fill="${C.bone}">${esc(t.big)}</text>
      <text x="28" y="152" font-family='${SERIF}' font-size="15.5" fill="${C.bone}" fill-opacity=".7">${esc(t.line)}</text></g>`;
  });
  out("bench.svg", `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Off the bench: ${esc(tiles.map((t) => `${t.big}, ${t.line}`).join(" "))}">
<style>
.spin{animation:spin 2s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}
.pulse{animation:pulse 2.4s ease-in-out infinite}@keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}
.strike{transform-origin:14px 12px;animation:strike 2.4s ease-in infinite}@keyframes strike{0%,60%,100%{transform:rotate(0)}75%{transform:rotate(-28deg)}85%{transform:rotate(4deg)}}
.shackle{animation:open 3s ease-in-out infinite}@keyframes open{0%,40%,100%{transform:translateY(0)}55%,85%{transform:translateY(-6px)}}
${REDUCED}</style>
${body.join("\n")}
</svg>`);
}

// ---------- divider: a pressure trace with a travelling pulse ----------
{
  const w = 1200, mid = 20;
  let d = `M0 ${mid}`;
  for (let x = 0; x <= w; x += 6) {
    const bump = Math.exp(-(((x % 300) - 150) ** 2) / 260) * -14;
    d += ` L${x} ${(mid + bump + Math.sin(x / 7) * 0.8).toFixed(1)}`;
  }
  out("divider.svg", `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="40" viewBox="0 0 ${w} 40" role="img" aria-label="">
<style>.p{animation:p 4s linear infinite}@keyframes p{from{stroke-dashoffset:1600}to{stroke-dashoffset:0}}${REDUCED}</style>
<path d="${d}" fill="none" stroke="${C.ash}" stroke-opacity=".35" stroke-width="1.2"/>
<path d="${d}" fill="none" stroke="${C.signal}" stroke-width="2" stroke-linecap="round" stroke-dasharray="140 1460" class="p"/>
</svg>`);
}

console.log("assets written");
