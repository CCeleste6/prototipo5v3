/* =========================
   App principal - prototipo5v2
  
   ========================= */

// --- Constantes de Chave ---
const PM_KEY = "cfg_pm_fixed";
const PC_FIXED_KEY = "cfg_pc_fixed"; // <-- NOVO: PC Fixo por atividade
const XP_PER_KEY = "cfg_xp_per_acerto";
const XP_NEEDED_KEY = "cfg_xp_needed";
const ALUNOS_KEY = "legado_alunos";
const INVENT_KEY = "legado_invent";
const LAST_ALUNO_KEY = "legado_last_aluno"; // <-- Lembrar último aluno

const DEFAULTS = {
  pmFixed: 10,
  pcFixed: 5, // <-- NOVO: Default PC Fixo
  xpPerAcerto: 10,
  xpNeeded: 100
};

/* RANKS: ordem crescente (baixo -> alto)
   mapeie nomes para arquivos em assets/ranks/
*/
const RANKS = [
  "estudante", "pesquisador", "academico", "mentor",
  "erudito", "filosofo", "sabio", "luminar", "oráculo"
];
// PM Mínimo para alcançar o Rank (índice corresponde a RANKS)
const RANK_THRESHOLDS = [0, 200, 600, 1400, 2600, 4200, 6200, 8800, 12000];

// --- Funções de Config e Vantagens ---
function cfg(key, fallback) {
  const v = localStorage.getItem(key);
  if (v === null) return fallback;
  return Number(v);
}

const VANTAGENS = window.VANTAGENS || {};

// --- Funções de Save/Load ---
function saveAlunos(obj) { localStorage.setItem(ALUNOS_KEY, JSON.stringify(obj)); }
function loadAlunos() { return JSON.parse(localStorage.getItem(ALUNOS_KEY) || "{}"); }
function saveInvent(arr) { localStorage.setItem(INVENT_KEY, JSON.stringify(arr)); }
function loadInvent() { return JSON.parse(localStorage.getItem(INVENT_KEY) || "[]"); }
function saveLastAluno(name) { localStorage.setItem(LAST_ALUNO_KEY, name || ""); }
function loadLastAluno() { return localStorage.getItem(LAST_ALUNO_KEY); }


/* ---------- UI refs ---------- */
const el = id => document.getElementById(id);
const qForm = el("quiz-form");

const state = {
  currentStudent: null
};

/* ---------- PERGUNTAS (10: 5 matemática, 5 português) ---------- */
const QUIZ = [
  /* matemática */
  { id: "q1", q: "Quanto é 7 × 8?", options: ["48", "54", "56", "64"], answer: 2 },
  { id: "q2", q: "A raiz quadrada de 81 é:", options: ["7", "8", "9", "10"], answer: 2 },
  { id: "q3", q: "Se João tem 12 balas e dá 5, fica com:", options: ["5", "7", "8", "9"], answer: 1 },
  { id: "q4", q: "1/4 + 1/4 =", options: ["1/2", "1/4", "3/4", "1"], answer: 0 },
  { id: "q5", q: "Próximo número: 2, 4, 8, 16, __", options: ["18", "20", "24", "32"], answer: 3 },
  /* português */
  { id: "q6", q: "Qual frase está correta?", options: ["Nós vai ao cinema", "Nós vamos ao cinema", "Nós iremos ao cinema"], answer: 1 },
  { id: "q7", q: "Classe de 'rapidamente':", options: ["Verbo", "Adjetivo", "Advérbio", "Substantivo"], answer: 2 },
  { id: "q8", q: "Em 'As flores foram colhidas', a voz é:", options: ["ativa", "passiva"], answer: 1 },
  { id: "q9", q: "Plural de 'cão':", options: ["cãos", "cães", "cões", "caoes"], answer: 1 },
  { id: "q10", q: "Sujeito em 'Vento forte derrubou a árvore':", options: ["vento forte", "árvore", "derrubou", "não tem"], answer: 0 }
];

/* ---------- helpers ranque e imagem ---------- */
function getRankByPM(pm) {
  for (let i = RANK_THRESHOLDS.length - 1; i >= 0; i--) {
    if (pm >= RANK_THRESHOLDS[i]) return RANKS[i];
  }
  return RANKS[0];
}
function rankImagePath(rankName) {
  const map = {
    "estudante": "estudante.png", "pesquisador": "pesquisador.png",
    "academico": "academico.png", "mentor": "mentor.png",
    "erudito": "erudito.png", "filosofo": "filosofo.png",
    "sabio": "sabio.png", "luminar": "luminar.png",
    "oráculo": "oráculo.png", "oraculo": "oráculo.png"
  };
  return `assets/ranks/${map[rankName] || "estudante.png"}`;
}
// NOVO: Achar o nome do Rank pelo PM Mínimo
function getRankNameByThreshold(pm) {
  const idx = RANK_THRESHOLDS.indexOf(pm);
  return RANKS[idx] || `Nível ${pm} PM`;
}

/* ---------- CRUD Aluno ---------- */
function createOrLoadStudent(name, casa) {
  const students = loadAlunos();
  if (!name) return alert("Digite um nome.");
  if (!students[name]) {
    students[name] = {
      nome: name,
      casa: casa,
      pm: 0,
      pc: 0,
      xp: 0,
      lvl: 0,
      chosenAdvantages: {}, // {rankThreshold: advId}
      inventory: [] // Obsoleto? (agora usa invent global)
    };
    saveAlunos(students);
  }
  state.currentStudent = name;
  saveLastAluno(name); // <-- Lembra dele
  el("setup-panel").hidden = true; // <-- Esconde setup
  renderMain();
}

// NOVO: Trocar de aluno
function switchStudent() {
  state.currentStudent = null;
  saveLastAluno(null);
  el("aluno-panel").hidden = true;
  el("setup-panel").hidden = false;
  el("input-nome").value = "";
}

// NOVO: Deletar aluno
function deleteStudent() {
  const current = getCurrent();
  if (!current) return;
  if (!confirm(`Tem certeza que deseja deletar permanentemente o aluno "${current.nome}"? Esta ação não pode ser desfeita.`)) {
    return;
  }
  const students = loadAlunos();
  delete students[current.nome];
  saveAlunos(students);
  alert("Aluno deletado.");
  switchStudent();
  el("config-panel").hidden = true;
}

function getCurrent() {
  const s = loadAlunos();
  return s[state.currentStudent];
}

/* ---------- RENDER PRINCIPAL ---------- */
function renderMain() {
  const current = getCurrent();
  if (!current) {
    el("aluno-panel").hidden = true;
    return;
  }
  el("aluno-panel").hidden = false;
  el("aluno-nome").textContent = current.nome;
  el("aluno-casa").textContent = current.casa;
  const rank = getRankByPM(current.pm);
  el("aluno-rank").textContent = rank;
  el("rank-badge").src = rankImagePath(rank);
  el("aluno-pm").textContent = current.pm;
  el("aluno-pc").textContent = current.pc;
  el("aluno-xp").textContent = current.xp;
  el("aluno-lvl").textContent = current.lvl;
  const xpNeeded = cfg(XP_NEEDED_KEY, DEFAULTS.xpNeeded);
  const pct = Math.min(100, (current.xp / xpNeeded) * 100);
  el("xp-fill").style.width = pct + "%";
}

/* ---------- RENDER QUIZ ---------- */
function renderQuizForm() {
  qForm.innerHTML = "";
  QUIZ.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "q";
    let html = `<p><b>${idx + 1}.</b> ${item.q}</p>`;
    item.options.forEach((opt, i) => {
      html += `<label><input type="radio" name="${item.id}" value="${i}"> ${opt}</label><br>`;
    });
    div.innerHTML = html;
    qForm.appendChild(div);
  });
}

/* ---------- RENDER VANTAGENS (escolhas) ---------- */
function renderVantagensPanel() {
  const current = getCurrent();
  if (!current) return;
  const casa = current.casa;
  const list = VANTAGENS[casa] || {};
  const container = el("vantagens-list");
  container.innerHTML = "";
  
  // Pega as chaves (ex: 0, 200, 600, etc), ordena, e renderiza
  const rankThresholds = Object.keys(list).map(Number).sort((a, b) => a - b);
  
  rankThresholds.forEach(rankPM => {
    const isUnlocked = current.pm >= rankPM;
    const rankName = getRankNameByThreshold(rankPM); // ex: "Pesquisador"

    const block = document.createElement("div");
    block.className = isUnlocked ? "vant-rank" : "vant-rank-locked";
    
    let html = `<h4>${rankName} (Requer ${rankPM} PM)</h4>`;
    if (!isUnlocked) {
      html += `<small>(Bloqueado. Você tem ${current.pm} PM)</small>`;
    }

    list[rankPM].forEach(v => {
      const id = `chk-${rankPM}-${v.id}`;
      const checked = current.chosenAdvantages && current.chosenAdvantages[rankPM] === v.id ? "checked" : "";
      const disabled = !isUnlocked ? "disabled" : "";
      
      // Renderiza o texto do requisito e os bônus
      html += `
        <div class="vant-item">
          <input type="radio" name="rank-${rankPM}" id="${id}" value="${v.id}" ${checked} ${disabled}>
          <label for="${id}">${v.nome}</label>
          <div class="vant-req-text">Requisito: ${v.req_text}</div>
          <div class="vant-effect">
            ${v.pc_gain ? `( Bônus Fixo: +${v.pc_gain} PC )` : ''}
            ${v.pc_multiplier ? `( Multiplica Pontuação por x${v.pc_multiplier} )` : ''}
          </div>
        </div>
      `;
    });
    block.innerHTML += html;
    container.appendChild(block);
  });
}

/* ---------- SALVAR escolhas de vantagens ---------- */
function saveChosenVantagens() {
  const current = getCurrent();
  if (!current) return;
  const casa = current.casa;
  const list = VANTAGENS[casa] || {};

  // Itera os ranques de PM (0, 200, 600, etc)
  Object.keys(list).forEach(rankPM => {
    // Só salva se o aluno pode (deveria estar desabilitado, mas é bom verificar)
    if (current.pm >= Number(rankPM)) {
      const radios = document.getElementsByName(`rank-${rankPM}`);
      for (const r of radios) {
        if (r.checked) {
          current.chosenAdvantages[rankPM] = r.value;
          break;
        }
      }
    }
  });
  
  const students = loadAlunos();
  students[current.nome] = current;
  saveAlunos(students);
  alert("Vantagens salvas. Lembre-se que bônus fixos (+PC) são aplicados manualmente, já que suas regras são externas ao quiz.");
  renderMain();
}

/* ---------- APLICAR PC MANUALMENTE (NOVO) ---------- */
function applyFixedPC() {
  const current = getCurrent();
  if (!current) return;
  
  const fixedPC = cfg(PC_FIXED_KEY, DEFAULTS.pcFixed);
  if (fixedPC <= 0) return alert("Configure o PC Fixo (na seção Configurações) para um valor maior que zero.");
  
  if (!confirm(`Deseja adicionar manualmente ${fixedPC} PC ao aluno ${current.nome}?`)) {
      return;
  }
  
  current.pc += fixedPC;
  
  const students = loadAlunos();
  students[current.nome] = current;
  saveAlunos(students);
  alert(`+${fixedPC} PC adicionados manualmente.`);
  renderMain();
}

/* ---------- APLICAR vantagens ao finalizar atividade (quiz) ---------- */
function applyAdvantagesOnResult(correctCount) {
  const current = getCurrent();
  if (!current) return 0;
  let pcGain = 0;
  
  for (const rankPM in current.chosenAdvantages) {
    const advId = current.chosenAdvantages[rankPM];
    
    // Encontra o objeto da vantagem
    const advList = VANTAGENS[current.casa] && VANTAGENS[current.casa][rankPM];
    if (!advList) continue;
    const adv = advList.find(a => a.id === advId);
    if (!adv) continue;
    
    // Aplicamos APENAS o multiplicador para o PC do quiz
    if (adv.pc_multiplier) {
      const xpPer = cfg(XP_PER_KEY, DEFAULTS.xpPerAcerto);
      pcGain += Math.round(adv.pc_multiplier * correctCount * (xpPer / 2));
    }
    
    // Registra no inventário global
    const inv = loadInvent();
    inv.push({
      id: Date.now(),
      aluno: current.nome,
      casa: current.casa,
      vantagem: adv.nome,
      pc_gain: adv.pc_gain || null, // Novo nome
      pc_multiplier: adv.pc_multiplier || null, // Novo nome
      timestamp: new Date().toISOString()
    });
    saveInvent(inv);
  }
  return pcGain;
}

/* ---------- SUBMETER QUIZ ---------- */
function submitQuiz() {
  const current = getCurrent();
  if (!current) return;
  let correct = 0;
  QUIZ.forEach(q => {
    const sel = qForm.querySelector(`input[name="${q.id}"]:checked`);
    if (sel && Number(sel.value) === q.answer) correct++;
  });
  
  // XP & PM
  const xpPer = cfg(XP_PER_KEY, DEFAULTS.xpPerAcerto);
  const gainedXP = correct * xpPer;
  const pmFixed = cfg(PM_KEY, DEFAULTS.pmFixed);
  
  // PC (via Vantagens) - Agora só aplica multiplicadores do quiz.
  const gainedPCFromVant = applyAdvantagesOnResult(correct);

  current.xp += gainedXP;
  current.pm += pmFixed;
  current.pc += gainedPCFromVant;
  
  // Level up
  const xpNeeded = cfg(XP_NEEDED_KEY, DEFAULTS.xpNeeded);
  while (current.xp >= xpNeeded) {
    current.xp -= xpNeeded;
    current.lvl++;
  }
  
  // Salva
  const students = loadAlunos();
  students[current.nome] = current;
  saveAlunos(students);

  // Mostrar modal de resultados em vez de alert
  showQuizResults(correct, pmFixed, gainedPCFromVant, gainedXP);
  renderMain(); // Atualiza painel principal após o save
}

// NOVO: Mostrar Modal de Resultados
function showQuizResults(correct, pm, pc, xp) {
  // CORREÇÃO: Usando document.getElementById() para garantir o funcionamento
  document.getElementById("results-score-num").textContent = correct;
  document.getElementById("results-pm").textContent = pm;
  document.getElementById("results-pc").textContent = pc;
  document.getElementById("results-xp").textContent = xp;
  
  document.getElementById("results-overlay").hidden = false;
}

// NOVO: Fechar Modal de Resultados
function closeQuizResults() {
  // CORREÇÃO: Usando document.getElementById() para garantir o funcionamento
  document.getElementById("results-overlay").hidden = true;
  closeQuiz(); // Fecha o painel do quiz
}

/* ---------- INVENTÁRIO UI ---------- */
function renderInventarioList() {
  const arr = loadInvent();
  const ul = el("inventario-list");
  ul.innerHTML = "";
  if (!arr.length) ul.innerHTML = "<li>(Nenhum registro)</li>";
  else arr.slice().reverse().forEach(it => {
    const li = document.createElement("li");
    // Inclui a informação do pc_gain e pc_multiplier na lista de vantagens
    const bonusText = it.pc_gain ? `+${it.pc_gain} PC` : '';
    const multiplierText = it.pc_multiplier ? `x${it.pc_multiplier}` : '';
    let effectText = [bonusText, multiplierText].filter(t => t).join(', ');
    if (effectText) effectText = `(Efeito: ${effectText})`;

    li.textContent = `${new Date(it.timestamp).toLocaleString()} — ${it.aluno} — ${it.vantagem} ${effectText} (${it.casa})`;
    ul.appendChild(li);
  });
}

/* ---------- RANKING ---------- */
function renderRanking() {
  const studentsObj = loadAlunos();
  const students = Object.values(studentsObj);
  // Ordenar por (PM + PC)
  students.sort((a, b) => (b.pm + b.pc) - (a.pm + a.pc));
  const aList = el("ranking-alunos");
  aList.innerHTML = students.map((s, i) => `<li>${i + 1}. ${s.nome} — ${s.casa} — <b>${s.pm + s.pc}</b></li>`).join("");
  
  // Ranking das Casas
  const casas = {};
  students.forEach(s => casas[s.casa] = (casas[s.casa] || 0) + (s.pm + s.pc));
  el("ranking-casas").innerHTML = Object.entries(casas).sort((a, b) => b[1] - a[1]).map((c, i) => `<li>${i + 1}. ${c[0]} — <b>${c[1]}</b></li>`).join("");
}

/* ---------- EXPORT INVENTARIO CSV ---------- */
function exportInventCSV() {
  const arr = loadInvent();
  if (!arr.length) return alert("Nenhum histórico.");
  // Usa os novos nomes de coluna
  let csv = "aluno,casa,vantagem,pc_gain,pc_multiplier,timestamp\n";
  arr.forEach(r => {
    csv += `"${r.aluno}","${r.casa}","${r.vantagem}","${r.pc_gain || ""}","${r.pc_multiplier || ""}","${r.timestamp}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "inventario.csv";
  a.click();
}

/* ---------- UI event wiring ---------- */
function wireEvents() {
  // Setup
  el("btn-criar").addEventListener("click", () => {
    const name = el("input-nome").value.trim();
    const casa = el("input-casa").value;
    createOrLoadStudent(name, casa);
  });
  el("btn-switch-student").addEventListener("click", switchStudent);

  // Quiz
  el("btn-iniciar-quiz").addEventListener("click", () => {
    renderQuizForm();
    el("quiz-panel").hidden = false;
    el("setup-panel").hidden = true; // esconde setup
    el("aluno-panel").hidden = true; // esconde painel do aluno
  });
  el("btn-cancel-quiz").addEventListener("click", closeQuiz);
  el("btn-submit-quiz").addEventListener("click", submitQuiz);
  
  // Resultados do Quiz
  document.getElementById("btn-close-results").addEventListener("click", closeQuizResults); 
  
  // Ações do Aluno
  el("btn-add-pc").addEventListener("click", applyFixedPC); // <-- NOVO: Aplica PC Fixo

  // Vantagens
  el("btn-vantagens").addEventListener("click", () => {
    el("vantagens-panel").hidden = false;
    renderVantagensPanel();
  });
  el("btn-save-vantagens").addEventListener("click", saveChosenVantagens);
  el("btn-close-vantagens").addEventListener("click", () => el("vantagens-panel").hidden = true);

  // Inventário
  el("btn-inventario").addEventListener("click", () => { renderInventarioList(); el("inventario-panel").hidden = false; });
  el("btn-close-inv").addEventListener("click", () => el("inventario-panel").hidden = true);
  el("btn-export-inv").addEventListener("click", exportInventCSV);
  el("btn-clear-inv").addEventListener("click", () => {
    if (confirm("Apagar TODO o histórico de vantagens?")) { saveInvent([]); renderInventarioList(); }
  });

  // Ranking
  el("btn-ranking").addEventListener("click", () => { renderRanking(); el("ranking-panel").hidden = false; });
  el("btn-close-ranking").addEventListener("click", () => el("ranking-panel").hidden = true);

  // Config
  el("btn-config").addEventListener("click", () => {
    el("config-panel").hidden = false;
    el("cfg-pm").value = cfg(PM_KEY, DEFAULTS.pmFixed);
    el("cfg-pc-fixed").value = cfg(PC_FIXED_KEY, DEFAULTS.pcFixed); // <-- NOVO: Carrega PC Fixo
    el("cfg-xp-per").value = cfg(XP_PER_KEY, DEFAULTS.xpPerAcerto);
    el("cfg-xp-needed").value = cfg(XP_NEEDED_KEY, DEFAULTS.xpNeeded);
  });
  el("btn-save-config").addEventListener("click", () => {
    localStorage.setItem(PM_KEY, Number(el("cfg-pm").value));
    localStorage.setItem(PC_FIXED_KEY, Number(el("cfg-pc-fixed").value)); // <-- NOVO: Salva PC Fixo
    localStorage.setItem(XP_PER_KEY, Number(el("cfg-xp-per").value));
    localStorage.setItem(XP_NEEDED_KEY, Number(el("cfg-xp-needed").value));
    alert("Configurações salvas.");
    el("config-panel").hidden = true;
  });
  el("btn-close-config").addEventListener("click", () => el("config-panel").hidden = true);
  el("btn-delete-student").addEventListener("click", deleteStudent); // NOVO
}

/* ---------- helpers UI ---------- */
function closeQuiz() {
  el("quiz-panel").hidden = true;
  // NÃO esconde o setup, pois o renderMain decide
  renderMain();
}

/* ---------- startup ---------- */
function init() {
  wireEvents();
  // Garante que os defaults existem
  if (localStorage.getItem(PM_KEY) === null) localStorage.setItem(PM_KEY, DEFAULTS.pmFixed);
  if (localStorage.getItem(PC_FIXED_KEY) === null) localStorage.setItem(PC_FIXED_KEY, DEFAULTS.pcFixed); // <-- NOVO: Default PC Fixo
  if (localStorage.getItem(XP_PER_KEY) === null) localStorage.setItem(XP_PER_KEY, DEFAULTS.xpPerAcerto);
  if (localStorage.getItem(XP_NEEDED_KEY) === null) localStorage.setItem(XP_NEEDED_KEY, DEFAULTS.xpNeeded);

  // Tenta carregar o último aluno logado
  const lastAluno = loadLastAluno();
  if (lastAluno && loadAlunos()[lastAluno]) {
    state.currentStudent = lastAluno;
    el("setup-panel").hidden = true;
  } else {
    el("setup-panel").hidden = false;
  }
  
  // CORREÇÃO DE SEGURANÇA para garantir que o pop-up está escondido na inicialização
  const resultsOverlay = document.getElementById("results-overlay");
  if (resultsOverlay) {
    resultsOverlay.hidden = true;
  }

  renderMain();
}

/* Run */
init();
