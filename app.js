// Interactive 3D viewer, 2-level hints, multi-check Rédaction Bac, mastery gating, and localStorage

const STORAGE_KEY = "geometrie_espace_trainer_v2";

let state = {
  lang: "sk",
  variant: "A",
  activeModule: 0,
  activePhase: 0,
  progress: {
    A: { unlockedModule: 0, completedModules: [], stepsDone: {} },
    B: { unlockedModule: 0, completedModules: [], stepsDone: {} }
  }
};

let rotX = 0.42;
let rotY = -0.68;
let dragging = false;
let lastMouse = { x: 0, y: 0 };
const attemptCounts = {};
const calcSolvedLocal = {};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.progress) {
        state = { ...state, ...parsed };
      }
    }
  } catch (_) {}
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) {}
}

function getVarProgress() {
  return state.progress[state.variant];
}

function stepKey(modIdx, phaseIdx) {
  return `${modIdx}_p${phaseIdx}`;
}

function isPhaseDone(modIdx, phaseIdx) {
  return Boolean(getVarProgress().stepsDone[stepKey(modIdx, phaseIdx)]);
}

function markPhaseDone(modIdx, phaseIdx) {
  const vp = getVarProgress();
  vp.stepsDone[stepKey(modIdx, phaseIdx)] = true;
  if (phaseIdx === 2 && !vp.completedModules.includes(modIdx)) {
    vp.completedModules.push(modIdx);
    const total = VARIANTS[state.variant].modules.length;
    if (vp.unlockedModule < modIdx + 1 && modIdx + 1 < total) {
      vp.unlockedModule = modIdx + 1;
    }
  }
  saveState();
}

function switchVariant(v) {
  state.variant = v;
  state.activeModule = Math.min(getVarProgress().unlockedModule, VARIANTS[v].modules.length - 1);
  state.activePhase = 0;
  saveState();
  renderAll();
}

function switchLang(l) {
  state.lang = l;
  saveState();
  renderAll();
}

function confirmReset() {
  if (confirm(UI_TEXT[state.lang].resetConfirm)) {
    state.progress[state.variant] = { unlockedModule: 0, completedModules: [], stepsDone: {} };
    state.activeModule = 0;
    state.activePhase = 0;
    saveState();
    renderAll();
  }
}

function selectModule(idx) {
  if (idx > getVarProgress().unlockedModule) return;
  state.activeModule = idx;
  state.activePhase = 0;
  renderAll();
}

function toggleRefModal(open) {
  const modal = document.getElementById("ref-modal");
  if (open) {
    document.getElementById("lbl-ref-title").textContent = UI_TEXT[state.lang].refTitle;
    document.getElementById("ref-body").innerHTML = REF_CONTENT[state.lang];
    modal.classList.add("open");
    renderKaTeX(modal);
  } else {
    modal.classList.remove("open");
  }
}

function normalizeMath(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/−/g, "-")
    .replace(/√/g, "sqrt")
    .replace(/^\((.*)\)$/, "$1");
}

function isAnswerMatch(userInput, acceptedList) {
  const norm = normalizeMath(userInput);
  return acceptedList.some(ans => normalizeMath(ans) === norm);
}

function renderKaTeX(el) {
  if (typeof renderMathInElement === "function") {
    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}

function renderAll() {
  const t = UI_TEXT[state.lang];
  const vData = VARIANTS[state.variant];
  const vp = getVarProgress();

  document.getElementById("btn-var-A").classList.toggle("active", state.variant === "A");
  document.getElementById("btn-var-B").classList.toggle("active", state.variant === "B");
  document.getElementById("btn-lang-sk").classList.toggle("active", state.lang === "sk");
  document.getElementById("btn-lang-fr").classList.toggle("active", state.lang === "fr");

  document.getElementById("app-title").textContent = t.appTitle;
  document.getElementById("app-subtitle").textContent = t.appSubtitle;
  document.getElementById("btn-ref").textContent = t.refBtn;
  document.getElementById("lbl-roadmap").textContent = t.roadmap;
  document.getElementById("lbl-viewer").textContent = t.viewer;
  document.getElementById("lbl-drag").textContent = t.drag;
  document.getElementById("lbl-chk-plane").innerHTML = t.chkPlane;
  document.getElementById("lbl-chk-normal").innerHTML = t.chkNormal;
  document.getElementById("lbl-chk-proj").innerHTML = t.chkProj;
  document.getElementById("lbl-chk-extra").innerHTML = t.chkExtra;
  document.getElementById("lbl-step-1").textContent = t.step1;
  document.getElementById("lbl-step-2").textContent = t.step2;
  document.getElementById("lbl-step-3").textContent = t.step3;
  document.getElementById("footer-note").textContent = t.footer;

  const totalMods = vData.modules.length;
  const doneCount = vp.completedModules.length;
  document.getElementById("progress-badge").textContent = `${doneCount} / ${totalMods}`;
  document.getElementById("progress-bar").style.width = `${(doneCount / totalMods) * 100}%`;

  const listEl = document.getElementById("module-list");
  listEl.innerHTML = "";
  vData.modules.forEach((m, idx) => {
    const isLocked = idx > vp.unlockedModule;
    const isDone = vp.completedModules.includes(idx);
    const isActive = idx === state.activeModule;
    const li = document.createElement("li");
    li.className = `module-item ${isActive ? "active" : ""} ${isDone ? "done" : ""} ${isLocked ? "locked" : ""}`;
    li.onclick = () => selectModule(idx);
    const icon = isDone ? "✓" : isLocked ? "🔒" : "▶";
    li.innerHTML = `<span>${m.title[state.lang]}</span><span class="status-icon">${icon}</span>`;
    listEl.appendChild(li);
  });

  document.getElementById("solid-coords").innerHTML = vData.coordsHtml;

  const mod = vData.modules[state.activeModule];
  document.getElementById("module-header").innerHTML = `
    <h2>${mod.title[state.lang]}</h2>
    <p>${mod.desc[state.lang]}</p>
  `;

  for (let p = 0; p < 3; p++) {
    const tab = document.getElementById(`step-tab-${p}`);
    tab.className = "step";
    if (isPhaseDone(state.activeModule, p)) tab.classList.add("done");
    if (p === state.activePhase) tab.classList.add("active");
    tab.style.cursor = (p === 0 || isPhaseDone(state.activeModule, p - 1)) ? "pointer" : "not-allowed";
    tab.onclick = () => {
      if (p === 0 || isPhaseDone(state.activeModule, p - 1)) {
        state.activePhase = p;
        renderAll();
      }
    };
  }

  renderStage(mod, t);
  draw3D();
  renderKaTeX(document.body);
}

// Deterministic shuffle so the right answer is never predictably first
function seededIndices(len, seedStr) {
  const arr = Array.from({ length: len }, (_, i) => i);
  let h = 2166136261;
  for (let i = 0; i < seedStr.length; i++) {
    h ^= seedStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
    const j = Math.abs(h) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderStage(mod, t) {
  const container = document.getElementById("stage-container");
  const modIdx = state.activeModule;
  const phase = state.activePhase;

  if (phase === 0) {
    let html = "";
    mod.heuristic.forEach((q, qi) => {
      const solved = isPhaseDone(modIdx, 0);
      const order = seededIndices(q.options.length, `h_${state.variant}_${modIdx}_${qi}`);
      html += `<div class="question-block ${solved ? "solved" : ""}">
        <div class="q-title">${q.prompt[state.lang]}</div>
        <div class="mcq-options">`;
      order.forEach(oi => {
        const opt = q.options[oi];
        const cls = solved && opt.ok ? "correct" : "";
        html += `<button class="mcq-btn ${cls}" onclick="answerHeuristic(${qi}, ${oi}, ${opt.ok})">${opt[state.lang]}</button>`;
      });
      html += `</div><div id="heur-fb-${qi}">`;
      if (solved) html += `<div class="feedback ok">${q.explain[state.lang]}</div>`;
      html += `</div></div>`;
    });
    const canNext = isPhaseDone(modIdx, 0);
    html += `<div class="stage-actions">
      <span style="font-size:0.84rem;color:#64748b">${canNext ? "" : t.phaseLocked}</span>
      <button class="btn-primary" ${canNext ? "" : "disabled"} onclick="goPhase(1)">${t.nextPhase}</button>
    </div>`;
    container.innerHTML = html;
  } else if (phase === 1) {
    let html = "";
    const allSolved = isPhaseDone(modIdx, 1);
    mod.calcs.forEach((c, ci) => {
      const key = `${state.variant}_${modIdx}_${ci}`;
      const isSolvedItem = allSolved || Boolean(calcSolvedLocal[key]);
      const val = isSolvedItem ? c.answers[0] : "";
      html += `<div class="question-block ${isSolvedItem ? "solved" : ""}" id="calc-blk-${ci}">
        <div class="q-title">${ci + 1}. ${c.label[state.lang]} <span class="format-tag">${c.format[state.lang]}</span></div>
        <div class="input-row">
          <input type="text" class="math-input" id="calc-in-${ci}" value="${val}" onkeydown="if(event.key==='Enter') checkCalc(${ci})"/>
          <button class="btn-secondary" onclick="checkCalc(${ci})">${t.checkBtn}</button>
        </div>
        <div id="calc-fb-${ci}">${isSolvedItem ? `<div class="feedback ok">✓ ${state.lang === "sk" ? "Výborne!" : "Parfait !"}</div>` : ""}</div>
      </div>`;
    });
    html += `<div class="stage-actions">
      <button class="btn-secondary" onclick="goPhase(0)">← ${t.step1}</button>
      <button id="btn-to-red" class="btn-primary" ${allSolved ? "" : "disabled"} onclick="goPhase(2)">${t.nextPhase}</button>
    </div>`;
    container.innerHTML = html;
  } else {
    const r = mod.redaction;
    const solved = isPhaseDone(modIdx, 2);
    const order = seededIndices(r.items.length, `r_${state.variant}_${modIdx}`);
    let html = `<p style="margin-top:0;font-size:0.9rem;color:#475569">${t.redactionIntro}</p>`;
    html += `<div class="question-block ${solved ? "solved" : ""}">
      <div class="mcq-options">`;
    order.forEach(ii => {
      const it = r.items[ii];
      const checked = solved && it.req ? "checked" : "";
      html += `<label class="checklist-item">
        <input type="checkbox" id="red-chk-${ii}" ${checked} ${solved ? "disabled" : ""}/>
        <span>${it[state.lang]}</span>
      </label>`;
    });
    html += `</div>
      <div style="margin-top:10px;">
        <button class="btn-secondary" ${solved ? "disabled" : ""} onclick="checkRedactionChecklist()">${t.checkRedBtn}</button>
      </div>
      <div id="red-fb"></div>
    </div>`;

    if (solved) {
      html += `<div class="redaction-box">
        <div style="font-weight:700;color:#1b2a4a;margin-bottom:6px;">✍ Modèle de rédaction (Bac / Terminale) :</div>
        <div>${r.modelFr.replace(/\n/g, "<br>")}</div>
      </div>`;
    }

    const isLastMod = modIdx === VARIANTS[state.variant].modules.length - 1;
    html += `<div class="stage-actions">
      <button class="btn-secondary" onclick="goPhase(1)">← ${t.step2}</button>`;
    if (isLastMod) {
      html += `<span style="font-weight:700;color:#2d6a4f">${solved ? t.finishAll : ""}</span>`;
    } else {
      html += `<button class="btn-primary" ${solved ? "" : "disabled"} onclick="nextModule()">${t.nextModule}</button>`;
    }
    html += `</div>`;
    container.innerHTML = html;
  }
}

function answerHeuristic(qi, oi, ok) {
  const fb = document.getElementById(`heur-fb-${qi}`);
  if (ok) {
    markPhaseDone(state.activeModule, 0);
    renderAll();
  } else {
    fb.innerHTML = `<div class="feedback err">${state.lang === "sk" ? "Skús sa zamyslieť znova a pozri sa na 3D model vľavo." : "Réessaie en observant le modèle 3D à gauche."}</div>`;
  }
}

function checkCalc(ci) {
  const mod = VARIANTS[state.variant].modules[state.activeModule];
  const item = mod.calcs[ci];
  const inp = document.getElementById(`calc-in-${ci}`);
  const fb = document.getElementById(`calc-fb-${ci}`);
  const blk = document.getElementById(`calc-blk-${ci}`);
  const key = `${state.variant}_${state.activeModule}_${ci}`;

  if (isAnswerMatch(inp.value, item.answers)) {
    blk.classList.add("solved");
    fb.innerHTML = `<div class="feedback ok">✓ ${state.lang === "sk" ? "Výborne!" : "Parfait !"}</div>`;
    calcSolvedLocal[key] = true;
    const allDone = mod.calcs.every((_, i) =>
      calcSolvedLocal[`${state.variant}_${state.activeModule}_${i}`] || isPhaseDone(state.activeModule, 1)
    );
    if (allDone) {
      markPhaseDone(state.activeModule, 1);
      document.getElementById("btn-to-red").disabled = false;
    }
  } else {
    attemptCounts[key] = (attemptCounts[key] || 0) + 1;
    const hintObj = attemptCounts[key] === 1 ? item.hint1 : item.hint2;
    fb.innerHTML = `<div class="feedback hint">💡 ${hintObj[state.lang]}</div>`;
    renderKaTeX(fb);
  }
}

function checkRedactionChecklist() {
  const items = VARIANTS[state.variant].modules[state.activeModule].redaction.items;
  const fb = document.getElementById("red-fb");
  let allCorrect = true;
  items.forEach((it, ii) => {
    const chk = document.getElementById(`red-chk-${ii}`).checked;
    if (chk !== it.req) allCorrect = false;
  });

  if (allCorrect) {
    markPhaseDone(state.activeModule, 2);
    renderAll();
  } else {
    fb.innerHTML = `<div class="feedback err">${state.lang === "sk" ? "Pozor! Buď si vynechal povinný krok, alebo si označil chyták. Skús znova." : "Attention ! Tu as oublié une étape obligatoire ou coché un piège."}</div>`;
  }
}

function goPhase(p) {
  state.activePhase = p;
  renderAll();
}

function nextModule() {
  if (state.activeModule + 1 < VARIANTS[state.variant].modules.length) {
    state.activeModule += 1;
    state.activePhase = 0;
    renderAll();
  }
}

function project3D(pt, scale, cx, cy) {
  let [x, y, z] = pt;
  const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
  const x1 = x * cosY - y * sinY;
  const y1 = x * sinY + y * cosY;
  const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
  const z2 = z * cosX - y1 * sinX;
  const y2 = z * sinX + y1 * cosX;
  return [cx + x1 * scale, cy - z2 * scale, y2];
}

function draw3D() {
  const canvas = document.getElementById("canvas3d");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width, Hc = canvas.height;
  ctx.clearRect(0, 0, W, Hc);

  const v = VARIANTS[state.variant];
  const maxCoord = state.variant === "A" ? 2.5 : 6.5;
  const scale = 190 / maxCoord;
  const cx = W * 0.44, cy = Hc * 0.68;

  const pO = project3D(v.O, scale, cx, cy);
  const pA = project3D(v.A, scale, cx, cy);
  const pB = project3D(v.B, scale, cx, cy);
  const pC = project3D(v.C, scale, cx, cy);
  const pH = project3D(v.H, scale, cx, cy);
  const pD = project3D(v.D, scale, cx, cy);

  const showPlane = document.getElementById("chk-plane").checked;
  const showNormal = document.getElementById("chk-normal").checked;
  const showProj = document.getElementById("chk-proj").checked;
  const showExtra = document.getElementById("chk-extra").checked;

  if (showPlane) {
    ctx.beginPath();
    ctx.moveTo(pA[0], pA[1]);
    ctx.lineTo(pB[0], pB[1]);
    ctx.lineTo(pC[0], pC[1]);
    ctx.closePath();
    ctx.fillStyle = "rgba(27, 42, 74, 0.12)";
    ctx.fill();
  }

  ctx.lineWidth = 1.6;
  [[pA, "#475569"], [pB, "#475569"], [pC, "#475569"]].forEach(([pt, col]) => {
    ctx.beginPath();
    ctx.moveTo(pO[0], pO[1]);
    ctx.lineTo(pt[0], pt[1]);
    ctx.strokeStyle = col;
    ctx.setLineDash([4, 3]);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  ctx.lineWidth = 2;
  ctx.strokeStyle = "#1b2a4a";
  ctx.beginPath();
  ctx.moveTo(pA[0], pA[1]);
  ctx.lineTo(pB[0], pB[1]);
  ctx.lineTo(pC[0], pC[1]);
  ctx.closePath();
  ctx.stroke();

  if (showProj) {
    ctx.beginPath();
    ctx.moveTo(pO[0], pO[1]);
    ctx.lineTo(pH[0], pH[1]);
    ctx.strokeStyle = "#9e2a2b";
    ctx.lineWidth = 2.2;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(pH[0], pH[1], 4.2, 0, Math.PI * 2);
    ctx.fillStyle = "#9e2a2b";
    ctx.fill();
    ctx.font = "bold 12px Georgia, serif";
    ctx.fillText("H", pH[0] + 6, pH[1] + 4);
  }

  if (showNormal) {
    const nScale = state.variant === "A" ? 0.55 : 0.9;
    const tip = [v.H[0] + v.n[0]*nScale, v.H[1] + v.n[1]*nScale, v.H[2] + v.n[2]*nScale];
    const pTip = project3D(tip, scale, cx, cy);
    ctx.beginPath();
    ctx.moveTo(pH[0], pH[1]);
    ctx.lineTo(pTip[0], pTip[1]);
    ctx.strokeStyle = "#2d6a4f";
    ctx.lineWidth = 2.2;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(pTip[0], pTip[1], 3.2, 0, Math.PI * 2);
    ctx.fillStyle = "#2d6a4f";
    ctx.fill();
    ctx.font = "italic bold 12px Georgia, serif";
    ctx.fillText("n", pTip[0] + 6, pTip[1] - 3);
  }

  if (showExtra) {
    ctx.beginPath();
    ctx.arc(pD[0], pD[1], 4.2, 0, Math.PI * 2);
    ctx.fillStyle = "#b45309";
    ctx.fill();
    ctx.font = "bold 12px Georgia, serif";
    ctx.fillText("D", pD[0] + 6, pD[1] - 4);
  }

  [[pO, "O"], [pA, "A"], [pB, "B"], [pC, "C"]].forEach(([pt, lbl]) => {
    ctx.beginPath();
    ctx.arc(pt[0], pt[1], 3.5, 0, Math.PI * 2);
    ctx.fillStyle = "#1b2a4a";
    ctx.fill();
    ctx.font = "bold 12px Georgia, serif";
    ctx.fillText(lbl, pt[0] + 6, pt[1] - 5);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadState();
  const canvas = document.getElementById("canvas3d");
  canvas.addEventListener("mousedown", e => {
    dragging = true;
    lastMouse = { x: e.clientX, y: e.clientY };
  });
  window.addEventListener("mouseup", () => { dragging = false; });
  window.addEventListener("mousemove", e => {
    if (!dragging) return;
    rotY += (e.clientX - lastMouse.x) * 0.01;
    rotX += (e.clientY - lastMouse.y) * 0.01;
    lastMouse = { x: e.clientX, y: e.clientY };
    draw3D();
  });
  renderAll();
});
