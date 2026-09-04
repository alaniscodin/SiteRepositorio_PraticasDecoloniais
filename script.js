
const TRILHAS = {
  afro:    { label: "Saberes afrocentrados",          color: "var(--afro)" },
  indigena:{ label: "Epistemologias indígenas",       color: "var(--indigena)" },
  diaspora:{ label: "Diáspora e ensino encantado",    color: "var(--diaspora)" },
  latam:   { label: "Perspectivas latino-americanas", color: "var(--latam)" },
  teorica: { label: "Formação docente",               color: "var(--teorica)" }
};

const IMG_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 15l-5-5-9 9"/></svg>';


const PRACTICES = [
  {
    id:1, trilha:"afro", titulo:"Tem dendê, tem axé, tem química",
    etapa:"1ª série · 2º bimestre", habilidade:"EM13CNT101 / EM13CNT102",
    conteudo:"Reações químicas, energia e mistura",
    referencia:"BENITE et al. (2017)",
    descricao:"A culinária afro-brasileira como ponto de partida para o ensino de transformações químicas: o preparo de pratos com dendê é usado para discutir reações, liberação de energia e formação de novas substâncias.",
    materiais:"Óleo de dendê, fogão ou infravermelho, ingredientes de receita afro-brasileira, roteiro de observação.",
    formato:"Slide + roteiro experimental (PDF editável)",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-01/view"
  },
  {
    id:2, trilha:"afro", titulo:"Dai-me agô para falar de saberes tradicionais…",
    etapa:"3ª série · 1º bimestre", habilidade:"EM13CNT104",
    conteudo:"Natureza da ciência e produção do conhecimento",
    referencia:"BENITE (2019)",
    descricao:"Debate estruturado sobre quem produz ciência e como o currículo seleciona (ou apaga) determinados saberes — usa o pedido de licença ritual afro-brasileiro como metáfora para pensar autoria e legitimidade científica.",
    materiais:"Roteiro de debate, textos de apoio, quadro comparativo de epistemologias.",
    formato:"Slide de discussão (PDF editável)",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-02/view"
  },
  {
    id:3, trilha:"afro", titulo:"Metalurgia do ferro em África",
    etapa:"2ª série · 3º bimestre", habilidade:"EM13CNT107",
    conteudo:"Oxirredução e corrosão",
    referencia:"ALVINO (2021)",
    descricao:"Reconstrói técnicas históricas africanas de fundição de ferro para introduzir reações de oxirredução, contextualizando a metalurgia como conhecimento científico africano anterior à industrialização europeia.",
    materiais:"Amostras de ferro/óxido de ferro, ímã, roteiro histórico ilustrado.",
    formato:"Slide + roteiro experimental",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-03/view"
  },
  {
    id:4, trilha:"afro", titulo:"A comida como prática social",
    etapa:"1ª série · 1º bimestre", habilidade:"EM13CNT101 / EM13CNT105",
    conteudo:"Fermentação e misturas",
    referencia:"BENITE (2020)",
    descricao:"Sequência didática usando alimentos fermentados de matriz afro-brasileira para explorar conceitos de mistura, fermentação e transformação da matéria em contexto sociocultural.",
    materiais:"Ingredientes fermentáveis, recipientes, termômetro, diário de observação.",
    formato:"PDF editável + roteiro de bancada",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-04/view"
  },
  {
    id:5, trilha:"afro", titulo:"Educação antirracista e osmose",
    etapa:"2ª série · 2º bimestre", habilidade:"EM13CNT103",
    conteudo:"Osmose e membranas",
    referencia:"BENITE (2022)",
    descricao:"Usa a osmose como metáfora e conteúdo científico simultâneo, relacionando o fenômeno de passagem seletiva a discussões sobre desigualdade de acesso e mobilidade social.",
    materiais:"Batata ou ovo, soluções salinas, béqueres, roteiro de bancada.",
    formato:"Slide + roteiro experimental",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-05/view"
  },
  {
    id:6, trilha:"afro", titulo:"Química experimental e Lei 10.639/03",
    etapa:"1ª série · 4º bimestre", habilidade:"EM13CNT106",
    conteudo:"Práticas experimentais contextualizadas",
    referencia:"BENITE (2020)",
    descricao:"Conjunto de práticas experimentais de bancada organizadas especificamente para atender à obrigatoriedade da Lei 10.639/03 dentro do componente de Química.",
    materiais:"Kit básico de laboratório, roteiro estruturado por etapas.",
    formato:"PDF editável",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-06/view"
  },
  {
    id:7, trilha:"teorica", titulo:"Descolonização dos currículos de ciências",
    etapa:"Formação docente · ATPC", habilidade:"Competências gerais 2 e 9 (BNCC)",
    conteudo:"Currículo crítico e decolonialidade",
    referencia:"BENITE (2018)",
    descricao:"Roteiro de formação para uso em ATPC: conduz o corpo docente por uma revisão crítica do currículo de Ciências da Natureza, identificando lacunas e oportunidades de inserção decolonial.",
    materiais:"Slide de formação, currículo vigente da escola, roteiro de discussão em grupo.",
    formato:"Slide de formação (apresentação)",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-07/view"
  },
  {
    id:8, trilha:"afro", titulo:"Cultura africana e ensino de química",
    etapa:"3ª série · 2º bimestre", habilidade:"EM13CNT104",
    conteudo:"História da ciência e representatividade",
    referencia:"BENITE (2018)",
    descricao:"Levantamento e discussão sobre cientistas negros historicamente invisibilizados nos currículos, articulado a conteúdos de química geral já previstos para a série.",
    materiais:"Fichas biográficas, linha do tempo, roteiro de seminário.",
    formato:"Slide + material de apoio",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-08/view"
  },
  {
    id:9, trilha:"indigena", titulo:"Extração e caracterização do sal do aguapé",
    etapa:"1ª série · 3º bimestre", habilidade:"EM13CNT101 / EM13CNT103",
    conteudo:"Separação de misturas e propriedades da matéria",
    referencia:"SILVA NETO et al. (2025)",
    descricao:"Roteiro experimental que reconstrói o processo indígena de extração de sal a partir das cinzas do aguapé, articulando saber tradicional e técnicas de separação de misturas.",
    materiais:"Aguapé (ou material substituto), recipiente para queima controlada, filtro, roteiro ilustrado.",
    formato:"Roteiro experimental (PDF editável)",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-09/view"
  },
  {
    id:10, trilha:"diaspora", titulo:"Ensino encantado: fermentação e encruzilhadas",
    etapa:"2ª série · 1º bimestre", habilidade:"EM13CNT101",
    conteudo:"Fermentação e transformação da matéria",
    referencia:"REBELLO; LIMA; MEIRELLES (2024)",
    descricao:"Sequência inspirada na epistemologia das macumbas e na pedagogia das encruzilhadas: parte de narrativas afrodiaspóricas sobre transformação para introduzir o conceito científico de fermentação.",
    materiais:"Roteiro narrativo, ingredientes fermentáveis, diário de observação.",
    formato:"Slide narrativo + roteiro experimental",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-10/view"
  },
  {
    id:11, trilha:"latam", titulo:"Bebidas fermentadas tradicionais e química popular",
    etapa:"2ª série · 4º bimestre", habilidade:"EM13CNT101 / EM13CNT106",
    conteudo:"Fermentação, educação popular",
    referencia:"GÓMEZ-FIERRO et al. (2022)",
    descricao:"Explora bebidas fermentadas tradicionais latino-americanas como fio condutor para discutir fermentação sob a ótica da educação popular, tensionando o modelo de ciência escolar puramente laboratorial.",
    materiais:"Amostras de bebidas fermentadas (ou registros), roteiro comparativo regional.",
    formato:"Slide + roteiro de discussão",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-11/view"
  },
  {
    id:12, trilha:"teorica", titulo:"[EXEMPLO] Como avaliar sequências didáticas decoloniais",
    etapa:"Formação docente · HTPC", habilidade:"Competência geral 9 (BNCC)",
    conteudo:"Avaliação formativa e critérios de análise curricular",
    referencia:"AUTOR, A. (ANO) [EXEMPLO]",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praticante e formador percorrem juntos um roteiro de critérios para avaliar se uma sequência didática de fato descentraliza referenciais eurocêntricos.",
    materiais:"Lorem ipsum, dolor sit amet, consectetur adipiscing elit, roteiro de rubrica.",
    formato:"Slide de formação (apresentação)",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-12/view"
  },
  {
    id:13, trilha:"teorica", titulo:"[EXEMPLO] Letramento racial na formação continuada",
    etapa:"Formação docente · ATPC", habilidade:"Competência geral 9 (BNCC)",
    conteudo:"Letramento racial e prática docente",
    referencia:"AUTOR, B. (ANO) [EXEMPLO]",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, aplicado à discussão sobre viés implícito no planejamento de aulas de ciências.",
    materiais:"Lorem ipsum, roteiro de dinâmica em grupo, textos de apoio.",
    formato:"Slide de formação + roteiro de dinâmica",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-13/view"
  },
  {
    id:14, trilha:"latam", titulo:"[EXEMPLO] Química e cosmovisão andina",
    etapa:"3ª série · 3º bimestre", habilidade:"EM13CNT104 [EXEMPLO]",
    conteudo:"Cosmovisão andina e classificação da matéria",
    referencia:"AUTOR, C. (ANO) [EXEMPLO]",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, relacionando cosmovisões originárias andinas a conceitos de classificação da matéria.",
    materiais:"Lorem ipsum, mapa conceitual, roteiro de seminário.",
    formato:"Slide + roteiro de seminário",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-14/view"
  },
  {
    id:15, trilha:"diaspora", titulo:"[EXEMPLO] Rituais de transformação: química e ancestralidade",
    etapa:"2ª série · 3º bimestre", habilidade:"EM13CNT101 [EXEMPLO]",
    conteudo:"Transformações físicas e químicas em narrativas ancestrais",
    referencia:"AUTOR, D. (ANO) [EXEMPLO]",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore, articulando narrativas ancestrais afrodiaspóricas a fenômenos de transformação da matéria.",
    materiais:"Lorem ipsum, roteiro narrativo, diário de observação.",
    formato:"Slide narrativo + roteiro experimental",
    linkCompleto:"https://drive.google.com/file/d/SUBSTITUA-LINK-15/view"
  }
];

/* ---------- Sobre mim (popup — edite os dados abaixo) ---------- */
const SOBRE_MIM = {
  nome:"[Nome da pessoa responsável]",
  papel:"[Cargo/afiliação — ex.: Mestrando(a) em Ensino de Química, PROFQUI/USP Ribeirão Preto]",
  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  contato:"[email@exemplo.com]",
  linkLattes:"https://SUBSTITUA-LINK-LATTES-OU-PORTFOLIO"
};

function openAbout(){
  const modal = document.getElementById('modalContent');
  modal.innerHTML = `
    <button class="modal-close" id="closeModal" aria-label="Fechar">&times;</button>
    <div class="modal-avatar img-placeholder">${IMG_ICON}</div>
    <span class="trilha-tag" style="color:var(--terracota)">Sobre mim</span>
    <h2>${SOBRE_MIM.nome}</h2>
    <div class="modal-meta">
      <span class="meta-pill">${SOBRE_MIM.papel}</span>
    </div>
    <div class="modal-section">
      <h4>Apresentação</h4>
      <p>${SOBRE_MIM.bio}</p>
    </div>
    <div class="modal-section">
      <h4>Contato</h4>
      <p>${SOBRE_MIM.contato}</p>
    </div>
    <div class="modal-section">
      <a class="drive-link" href="${SOBRE_MIM.linkLattes}" target="_blank" rel="noopener">Currículo / portfólio ↗</a>
    </div>
  `;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('closeModal').addEventListener('click', closeModal);
}

/* ---------- Índice de trilhas ---------- */
function buildTrailIndex(){
  const nav = document.getElementById('trailIndex');
  const total = PRACTICES.length;
  const items = [{ key:"todas", label:"Todas as práticas", color:"var(--terracota)", count: total }];
  Object.keys(TRILHAS).forEach(key=>{
    items.push({ key, label: TRILHAS[key].label, color: TRILHAS[key].color, count: PRACTICES.filter(p=>p.trilha===key).length });
  });

  const roman = ["I","II","III","IV","V","VI"];
  nav.innerHTML = `<div class="trail-index-title">Índice de trilhas</div>` + items.map((it,i)=>`
    <button class="trail-item ${it.key==='todas' ? 'active':''}" data-trilha="${it.key}" style="--accent:${it.color}">
      <span class="idx">${roman[i]}</span>
      <span class="name">${it.label}</span>
      <span class="leader"></span>
      <span class="count">${it.count}</span>
    </button>
  `).join('');

  nav.querySelectorAll('.trail-item').forEach(btn=>{
    btn.addEventListener('click', ()=> setTrilha(btn.dataset.trilha));
  });
}

/* ---------- Estado & renderização ---------- */
let currentTrilha = 'todas';
let currentSearch = '';

function setTrilha(t){
  currentTrilha = t;
  document.querySelectorAll('.tab').forEach(c=>{
    c.classList.toggle('active', c.dataset.trilha === t);
  });
  document.querySelectorAll('.trail-item').forEach(n=>{
    n.classList.toggle('active', n.dataset.trilha === t);
  });
  render();
}

function matches(p){
  const trilhaOk = currentTrilha === 'todas' || p.trilha === currentTrilha;
  const q = currentSearch.trim().toLowerCase();
  const searchOk = !q || [p.titulo, p.referencia, p.habilidade, p.conteudo].join(' ').toLowerCase().includes(q);
  return trilhaOk && searchOk;
}

function render(){
  const grid = document.getElementById('cardGrid');
  const list = PRACTICES.filter(matches);
  document.getElementById('resultCount').textContent = `${list.length} prática${list.length===1?'':'s'} encontrada${list.length===1?'':'s'}`;

  if(list.length === 0){
    grid.innerHTML = `<div class="empty"><strong>Nenhuma prática por aqui ainda</strong>Tente outra trilha ou limpe a busca.</div>`;
    return;
  }

  grid.innerHTML = list.map((p,i)=>{
    const t = TRILHAS[p.trilha];
    const delay = Math.min(i,10) * 0.05;
    return `<div class="card" style="--accent:${t.color}; animation-delay:${delay}s" data-id="${p.id}">
      <div class="card-thumb img-placeholder">${IMG_ICON}</div>
      <div class="card-top">
        <span class="trilha-tag">${t.label}</span>
        <span class="habilidade-tag">${p.habilidade.split(' / ')[0]}</span>
      </div>
      <h3>${p.titulo}</h3>
      <p>${p.conteudo}</p>
      <div class="card-foot">
        <span>${p.etapa}</span>
        <span>${p.referencia}</span>
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click', ()=> openModal(parseInt(card.dataset.id)));
  });
}

function openModal(id){
  const p = PRACTICES.find(x=>x.id===id);
  const t = TRILHAS[p.trilha];
  const modal = document.getElementById('modalContent');
  modal.innerHTML = `
    <button class="modal-close" id="closeModal" aria-label="Fechar">&times;</button>
    <span class="trilha-tag" style="color:${t.color}">${t.label}</span>
    <h2>${p.titulo}</h2>
    <div class="modal-meta">
      <span class="meta-pill">${p.etapa}</span>
      <span class="meta-pill">${p.habilidade}</span>
      <span class="meta-pill">${p.formato}</span>
    </div>
    <div class="modal-section">
      <h4>Resumo</h4>
      <p>${p.descricao}</p>
    </div>
    <div class="modal-section">
      <h4>Conteúdo científico</h4>
      <p>${p.conteudo}</p>
    </div>
    <div class="modal-section">
      <h4>Materiais</h4>
      <p>${p.materiais}</p>
    </div>
    <div class="modal-section">
      <h4>Referência de base</h4>
      <p class="ref-line">${p.referencia}</p>
    </div>
    <div class="modal-section">
      <a class="drive-link" href="${p.linkCompleto}" target="_blank" rel="noopener">Acessar trabalho completo ↗</a>
      <p class="drive-note">Este resumo é apenas um recorte; o link acima abre o arquivo completo no Google Drive.</p>
    </div>
  `;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('closeModal').addEventListener('click', closeModal);
}

function closeModal(){ document.getElementById('overlay').classList.remove('open'); }
document.getElementById('overlay').addEventListener('click', (e)=>{
  if(e.target.id === 'overlay') closeModal();
});
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

/* ---------- Abas de filtro & busca ---------- */
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click', ()=> setTrilha(tab.dataset.trilha));
});
document.getElementById('searchInput').addEventListener('input', (e)=>{
  currentSearch = e.target.value;
  render();
});
document.getElementById('aboutBtn').addEventListener('click', openAbout);

buildTrailIndex();
render();
