// ===================================================
// Genie · SAT Prep — Shared Question Engine
// ===================================================

let state = {
  currentQuestion: null,
  completed: new Set(),
  poll: { A: 0, B: 0, C: 0, D: 0 },
  revealed: false,
  selectedChoice: null,
  timer: { interval: null, seconds: 60, remaining: 60, mode: 'off' }
};

function loadCompleted() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(`sat-genie-${SKILL_KEY}`) || '[]');
    state.completed = new Set(saved);
  } catch(e) {}
}
function saveCompleted() {
  try { sessionStorage.setItem(`sat-genie-${SKILL_KEY}`, JSON.stringify([...state.completed])); } catch(e) {}
}

function renderBank() {
  const container = document.getElementById('qbank');
  if (!container) return;
  container.innerHTML = '';
  questions.forEach(q => {
    const isDone = state.completed.has(q.n);
    const chip = document.createElement('button');
    chip.className = 'qchip' + (isDone ? ' done' : '');
    chip.style.setProperty('--card-color', `var(${CARD_COLOR_VAR})`);
    chip.innerHTML = `<div class="ribbon"></div><div class="qchip-num">${String(q.n).padStart(2,'0')}</div><div class="qchip-diff ${q.difficulty}">${q.difficulty}</div>`;
    chip.addEventListener('click', () => openQuestion(q.n));
    container.appendChild(chip);
  });
}

function openQuestion(n) {
  const q = questions.find(x => x.n === n);
  if (!q) return;
  state.currentQuestion = q;
  state.poll = { A: 0, B: 0, C: 0, D: 0 };
  state.revealed = false;
  state.selectedChoice = null;
  stopTimer();
  state.timer.remaining = state.timer.seconds;
  document.getElementById('qbank-section').style.display = 'none';
  document.getElementById('qview').classList.add('active');
  renderQuestion();
  window.scrollTo({ top: document.getElementById('qview').offsetTop - 80, behavior: 'smooth' });
}
function backToBank() {
  document.getElementById('qview').classList.remove('active');
  document.getElementById('qbank-section').style.display = 'block';
  renderBank();
  window.scrollTo({ top: document.getElementById('qbank-section').offsetTop - 80, behavior: 'smooth' });
}

function renderChart(chart) {
  const W = 600, H = 320;
  const pad = { top: 44, right: 20, bottom: 80, left: 80 };
  const innerW = W - pad.left - pad.right;
  const innerH = H - pad.top - pad.bottom;
  const maxVal = Math.max(...chart.series.flatMap(s => s.values));
  const yMax = Math.ceil(maxVal / 20000) * 20000;
  const yTicks = [];
  for (let v = 0; v <= yMax; v += 20000) yTicks.push(v);
  const groupW = innerW / chart.groups.length;
  const barW = Math.min(36, (groupW * 0.7) / chart.series.length);

  let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:${W}px;height:auto;display:block;margin:0 auto;">`;
  svg += `<rect width="${W}" height="${H}" fill="#fffdf8" rx="6"/>`;
  svg += `<text x="${W/2}" y="22" text-anchor="middle" font-family="DM Sans" font-size="13" font-weight="600" fill="#14182b">${chart.title}</text>`;

  yTicks.forEach(v => {
    const y = pad.top + innerH - (v / yMax) * innerH;
    if (v > 0) svg += `<line x1="${pad.left}" y1="${y}" x2="${pad.left + innerW}" y2="${y}" stroke="#e8e0cc" stroke-dasharray="2,3" stroke-width="0.7"/>`;
    svg += `<line x1="${pad.left - 4}" y1="${y}" x2="${pad.left}" y2="${y}" stroke="#8a8170"/>`;
    svg += `<text x="${pad.left - 8}" y="${y + 3.5}" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="#4a5468">${v.toLocaleString()}</text>`;
  });

  svg += `<line x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${pad.top + innerH}" stroke="#4a5468"/>`;
  svg += `<line x1="${pad.left}" y1="${pad.top + innerH}" x2="${pad.left + innerW}" y2="${pad.top + innerH}" stroke="#4a5468"/>`;
  svg += `<text transform="translate(22,${pad.top + innerH/2}) rotate(-90)" text-anchor="middle" font-family="JetBrains Mono" font-size="10" font-weight="600" fill="#4a5468" letter-spacing="0.04em">${chart.ylabel.toUpperCase()}</text>`;

  chart.groups.forEach((group, gi) => {
    const groupCenter = pad.left + gi * groupW + groupW / 2;
    const totalBarsW = chart.series.length * barW;
    chart.series.forEach((s, si) => {
      const barX = groupCenter - totalBarsW / 2 + si * barW;
      const v = s.values[gi];
      const barH = (v / yMax) * innerH;
      const barY = pad.top + innerH - barH;
      svg += `<rect x="${barX + 1}" y="${barY}" width="${barW - 2}" height="${barH}" fill="${s.color}" rx="1"/>`;
    });
    svg += `<text x="${groupCenter}" y="${pad.top + innerH + 20}" text-anchor="middle" font-family="JetBrains Mono" font-size="11" font-weight="600" fill="#14182b">${group}</text>`;
  });
  svg += `<text x="${pad.left + innerW/2}" y="${pad.top + innerH + 40}" text-anchor="middle" font-family="JetBrains Mono" font-size="10" font-weight="600" fill="#4a5468" letter-spacing="0.04em">${chart.xlabel.toUpperCase()}</text>`;

  const legendY = H - 20;
  const legendItemW = innerW / chart.series.length;
  chart.series.forEach((s, i) => {
    const lx = pad.left + i * legendItemW + 20;
    svg += `<rect x="${lx}" y="${legendY - 9}" width="12" height="12" fill="${s.color}" rx="1"/>`;
    svg += `<text x="${lx + 17}" y="${legendY}" font-family="DM Sans" font-size="11" fill="#4a5468">${s.name}</text>`;
  });
  svg += `</svg>`;
  return svg;
}

function renderQuestion() {
  const q = state.currentQuestion;
  if (!q) return;
  const container = document.getElementById('qview');
  container.style.setProperty('--card-color', `var(${CARD_COLOR_VAR})`);

  let passageHtml;
  if (q.type === 'synthesis') {
    passageHtml = `<div class="passage"><div class="notes-intro">${q.notesIntro}</div><ul class="notes-list">${q.notes.map(n => `<li>${n}</li>`).join('')}</ul></div>`;
  } else if (q.chart) {
    passageHtml = `<div class="passage">${(q.passage || '').replace(/\n/g,'<br>')}</div><div class="chart-wrap">${renderChart(q.chart)}</div>`;
  } else {
    passageHtml = `<div class="passage">${(q.passage || '').replace(/\n/g,'<br>')}</div>`;
  }

  container.innerHTML = `
    <div class="qview-header">
      <div class="qview-header-left">
        <button class="qview-back" onclick="backToBank()">← Bank</button>
        <div class="qview-num">N° ${String(q.n).padStart(2,'0')}</div>
        <span class="qview-skill">${q.skillLabel}</span>
        <span class="qview-diff">${q.difficulty}</span>
      </div>
      <div class="qview-tools">
        <button class="icon-btn" data-mode="60">60s</button>
        <button class="icon-btn" data-mode="90">90s</button>
        <button class="icon-btn" data-mode="off">Off</button>
        <span class="timer-display" id="timer-display">—</span>
        <button class="icon-btn" id="timer-toggle">▶</button>
      </div>
    </div>
    <div class="qview-body">
      ${passageHtml}
      <div class="question-prompt">${q.question}</div>
      <div class="poll-bar" id="poll-bar">
        <span class="poll-bar-label">chat poll</span>
        ${['A','B','C','D'].map(l => `<button class="poll-btn" onclick="addVote('${l}')"><span class="ltr">${l}</span> <span id="vote-${l}">0</span></button>`).join('')}
        <button class="poll-reset" onclick="resetPoll()">reset</button>
      </div>
      <div class="choices" id="choices">
        ${q.choices.map(c => `
          <div class="choice-block">
            <button class="choice" data-letter="${c.letter}" onclick="selectChoice('${c.letter}')">
              <span class="choice-letter">${c.letter}</span>
              <span class="choice-text">${c.text}</span>
              <span class="vote-tally" id="tally-${c.letter}" style="display:none;">0</span>
            </button>
            <div class="why" id="why-${c.letter}"><div class="why-inner"><span class="why-tag" id="why-tag-${c.letter}"></span><span id="why-text-${c.letter}"></span></div></div>
          </div>`).join('')}
      </div>
      <div class="hack" id="hack">
        <div class="hack-header"><div class="hack-icon">!</div><span class="hack-label">The Hack</span></div>
        <div class="hack-text">${q.hack}</div>
      </div>
      <div class="controls">
        <button class="btn btn-ghost" onclick="togglePoll()" id="poll-toggle-btn">Class Poll</button>
        <button class="btn btn-correct" onclick="revealAnswer()" id="reveal-btn">Reveal Answer</button>
        <div class="controls-spacer"></div>
        <button class="btn btn-ghost" onclick="navQuestion(-1)">← Prev</button>
        <button class="btn btn-primary" onclick="navQuestion(1)">Next →</button>
      </div>
    </div>`;

  document.querySelectorAll('.icon-btn[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => setTimerMode(btn.dataset.mode));
    if (btn.dataset.mode === state.timer.mode) btn.classList.add('active');
  });
  document.getElementById('timer-toggle').addEventListener('click', toggleTimer);
  updateTimerDisplay();
}

function selectChoice(letter) {
  if (state.revealed) return;
  state.selectedChoice = letter;
  document.querySelectorAll('.choice').forEach(c => c.classList.toggle('selected', c.dataset.letter === letter));
}
function revealAnswer() {
  if (state.revealed) return;
  state.revealed = true;
  const q = state.currentQuestion;
  document.querySelectorAll('.choice').forEach(c => {
    c.classList.add('locked');
    const letter = c.dataset.letter;
    const why = document.getElementById('why-' + letter);
    const whyTag = document.getElementById('why-tag-' + letter);
    const whyText = document.getElementById('why-text-' + letter);
    if (letter === q.correct) {
      c.classList.add('correct'); why.classList.add('show', 'correct');
      whyTag.textContent = '✓ Correct'; whyText.innerHTML = q.whyCorrect;
    } else {
      c.classList.add('wrong'); why.classList.add('show', 'wrong');
      whyTag.textContent = '✘ Wrong'; whyText.innerHTML = q.whyWrong[letter] || '';
    }
  });
  document.getElementById('reveal-btn').style.display = 'none';
  document.getElementById('hack').classList.add('show');
  state.completed.add(q.n);
  saveCompleted();
  stopTimer();
}
function navQuestion(dir) {
  const q = state.currentQuestion;
  const idx = questions.findIndex(x => x.n === q.n);
  const next = idx + dir;
  if (next < 0 || next >= questions.length) { backToBank(); return; }
  openQuestion(questions[next].n);
}
function togglePoll() {
  document.getElementById('poll-bar').classList.toggle('active');
  document.getElementById('poll-toggle-btn').classList.toggle('active');
}
function addVote(letter) {
  state.poll[letter]++;
  document.getElementById('vote-' + letter).textContent = state.poll[letter];
  ['A','B','C','D'].forEach(l => {
    const t = document.getElementById('tally-' + l);
    if (t) { t.style.display = 'inline-block'; t.textContent = state.poll[l]; }
  });
}
function resetPoll() {
  state.poll = { A: 0, B: 0, C: 0, D: 0 };
  ['A','B','C','D'].forEach(l => {
    const v = document.getElementById('vote-' + l); if (v) v.textContent = '0';
    const t = document.getElementById('tally-' + l); if (t) { t.textContent = '0'; t.style.display = 'none'; }
  });
}
function setTimerMode(mode) {
  state.timer.mode = mode;
  document.querySelectorAll('.icon-btn[data-mode]').forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
  if (mode === 'off') { stopTimer(); state.timer.remaining = 0; }
  else { state.timer.seconds = parseInt(mode); state.timer.remaining = state.timer.seconds; }
  updateTimerDisplay();
}
function toggleTimer() {
  if (state.timer.mode === 'off') setTimerMode('60');
  if (state.timer.interval) stopTimer(); else startTimer();
}
function startTimer() {
  if (state.timer.remaining <= 0) state.timer.remaining = state.timer.seconds;
  document.getElementById('timer-toggle').textContent = '❚❚';
  state.timer.interval = setInterval(() => {
    state.timer.remaining--; updateTimerDisplay();
    if (state.timer.remaining <= 0) stopTimer();
  }, 1000);
}
function stopTimer() {
  if (state.timer.interval) { clearInterval(state.timer.interval); state.timer.interval = null; }
  const btn = document.getElementById('timer-toggle'); if (btn) btn.textContent = '▶';
}
function updateTimerDisplay() {
  const display = document.getElementById('timer-display'); if (!display) return;
  if (state.timer.mode === 'off') { display.textContent = '—'; display.classList.remove('urgent'); return; }
  const s = Math.max(0, state.timer.remaining);
  const m = Math.floor(s / 60); const sec = s % 60;
  display.textContent = `${m}:${String(sec).padStart(2,'0')}`;
  display.classList.toggle('urgent', s <= 10 && s > 0);
}

document.addEventListener('DOMContentLoaded', () => { loadCompleted(); renderBank(); });
