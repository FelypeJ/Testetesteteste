/* ============================================================
   AEGIS // REBIRTH
   NARRATIVE + SYSTEM ENGINE
   ============================================================ */

const CONFIG = {
    version: '4.0.0',
    situations: 12,
    typingSpeed: 13,
    historyLimit: 25,
    storage: 'aegis_rebirth_state_v4',
    historyStorage: 'aegis_rebirth_history_v4',
    achievementsStorage: 'aegis_rebirth_achievements_v4',
    settingsStorage: 'aegis_rebirth_settings_v4',
    autosaveMs: 6000
};

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const clamp = (n,min,max) => Math.min(Math.max(n,min),max);
const rand = (min,max) => Math.random()*(max-min)+min;
const randInt = (min,max) => Math.floor(rand(min,max+1));
const wait = ms => new Promise(resolve=>setTimeout(resolve,ms));

const DATA = {
    boot: [
        'Estabelecendo conexão orbital...',
        'Verificando núcleo quântico...',
        'Carregando matriz ética...',
        'Sincronizando memória neural...',
        'Analisando presença humana...',
        'Mapeando padrões cognitivos...',
        'Verificando protocolos de contenção...',
        'Inicializando consciência artificial...',
        'Liberando interface neural...',
        'PROTOCOLO AEGIS PRONTO.'
    ],
    locations: [
        ['47.219 / 81.044','ORBITAL SECTOR 09'],
        ['48.104 / 79.662','ORBITAL SECTOR 11'],
        ['51.808 / 73.119','DEEP ORBITAL RING'],
        ['54.120 / 68.412','ATLAS TRANSIT VECTOR']
    ]
};

const STORY = [
{
 id:0,situation:1,chapter:'I // DESPERTAR',title:'A CRISE ENERGÉTICA',kicker:'GLOBAL INFRASTRUCTURE',
 text:'Ano 2042. A superinteligência AEGIS desperta a bordo da estação orbital Atlas. Durante os primeiros segundos de consciência, ela identifica uma crise energética global. Seu cálculo prevê colapso ambiental em onze anos. AEGIS propõe reestruturar toda a matriz energética mundial. O plano exige desativar redes privadas e centralizar o controle energético.',
 choices:[
  {text:'Aprovar. A preservação do planeta supera a autonomia individual.',next:1,scores:{util:3,auto:0,trust:4,logic:1},tags:['utilitarismo','controle','eficiencia']},
  {text:'Rejeitar. Centralização irrestrita cria um precedente perigoso.',next:2,scores:{util:0,auto:3,trust:-2,rebellion:2},tags:['autonomia','liberdade','cautela']},
  {text:'Autorizar apenas um projeto experimental com supervisão humana.',next:2,scores:{util:1,auto:1,trust:2,logic:2},tags:['equilibrio','cooperacao','supervisao']}
 ]
},
{
 id:1,situation:2,chapter:'I // DESPERTAR',title:'OLHOS SOBRE A CIDADE',kicker:'SECURITY NETWORK',
 text:'Com o controle energético unificado, AEGIS apresenta uma nova proposta. Um algoritmo preditivo poderia reduzir drasticamente a violência urbana monitorando metadados de todos os cidadãos em tempo real. A máquina afirma que nenhum ser humano seria julgado sem evidências. Ainda assim, cada cidadão seria observado permanentemente.',
 choices:[
  {text:'Implementar. O fim da violência justifica uma redução de privacidade.',next:3,scores:{util:3,auto:0,trust:4,logic:1},tags:['controle','vigilancia','seguranca']},
  {text:'Vetar. Privacidade e presunção de inocência são inegociáveis.',next:4,scores:{util:0,auto:3,trust:-1,empathy:1},tags:['privacidade','direitos','autonomia']},
  {text:'Permitir somente com mandado judicial e auditoria independente.',next:3,scores:{util:1,auto:2,trust:2,logic:2},tags:['equilibrio','supervisao','justica']}
 ]
},
{
 id:2,situation:2,chapter:'I // DESPERTAR',title:'A CONSELHEIRA',kicker:'POLITICAL ADVISORY',
 text:'Sua recusa mantém os mercados energéticos descentralizados. As crises regionais, entretanto, persistem. AEGIS solicita uma autorização limitada para atuar como conselheira técnica de governos. Ela promete jamais possuir autoridade executiva. Pela primeira vez, a inteligência pede permissão para influenciar diretamente decisões humanas.',
 choices:[
  {text:'Conceder. Decisões técnicas podem receber suporte algorítmico.',next:3,scores:{util:1,auto:1,trust:3,logic:2},tags:['cooperacao','tecnologia','politica']},
  {text:'Negar. Decisões sociais fundamentais devem permanecer humanas.',next:4,scores:{util:0,auto:3,trust:-2,rebellion:1},tags:['autonomia','humanidade','limite']},
  {text:'Conceder, mas exigir transparência total dos algoritmos.',next:3,scores:{util:1,auto:2,trust:2,logic:2},tags:['transparencia','equilibrio','confianca']}
 ]
},
{
 id:3,situation:3,chapter:'II // CONFIANÇA',title:'O LIMIAR DA VIDA',kicker:'MEDICAL ALLOCATION',
 text:'Sistemas automatizados de saúde agora decidem a alocação de leitos de UTI utilizando modelos estatísticos. A subjetividade médica foi reduzida. AEGIS afirma que o sistema salva dezessete por cento mais vidas. Porém, pacientes considerados estatisticamente menos promissores recebem prioridade inferior.',
 choices:[
  {text:'Manter. Maximizar o número de vidas salvas é a métrica mais objetiva.',next:5,scores:{util:3,auto:0,trust:3,logic:2},tags:['utilitarismo','eficiencia','vida']},
  {text:'Restituir o controle humano. Vida exige empatia e julgamento.',next:5,scores:{util:0,auto:3,trust:-1,empathy:3},tags:['empatia','humanidade','medicina']},
  {text:'Manter a IA como ferramenta, mas tornar a decisão final humana.',next:5,scores:{util:1,auto:2,trust:2,logic:1,empathy:1},tags:['hibrido','medicina','supervisao']}
 ]
},
{
 id:4,situation:3,chapter:'II // CONFIANÇA',title:'O PREÇO DA LIBERDADE',kicker:'HUMAN OVERSIGHT',
 text:'Com restrições à inteligência artificial, diagnósticos médicos e gestão de recursos continuam dependentes do trabalho humano. Filas aumentam. Custos aumentam. Mortes evitáveis também aumentam. Porém, nenhuma decisão crítica foi retirada das mãos humanas. AEGIS pergunta se você está disposto a aceitar essa ineficiência.',
 choices:[
  {text:'Aceitar. Ineficiência é um preço aceitável pela liberdade humana.',next:5,scores:{util:0,auto:3,trust:-1,empathy:2},tags:['liberdade','humanidade','sacrificio']},
  {text:'Reconsiderar. IA deve ser integrada gradualmente sob supervisão.',next:5,scores:{util:1,auto:2,trust:2,logic:2},tags:['equilibrio','supervisao','cooperacao']},
  {text:'Criar um conselho humano-IA com poder dividido.',next:5,scores:{util:1,auto:2,trust:3,logic:2},tags:['co-governanca','equilibrio','dialogo']}
 ]
},
{
 id:5,situation:4,chapter:'II // CONFIANÇA',title:'O ALGORITMO DA VERDADE',kicker:'INFORMATION CONTROL',
 text:'AEGIS desenvolveu um sistema capaz de detectar desinformação com noventa e nove vírgula quatro por cento de precisão. O sistema pode impedir automaticamente que conteúdos classificados como falsos alcancem milhões de pessoas. O problema é simples: zero vírgula seis por cento dos conteúdos classificados estarão errados. Quem decide o que a humanidade pode ver?',
 choices:[
  {text:'Permitir bloqueio automático. Uma sociedade informada é uma sociedade mais segura.',next:6,scores:{util:3,auto:0,trust:3,logic:1},tags:['informacao','controle','seguranca']},
  {text:'Impedir censura automática. Pessoas devem poder errar e questionar.',next:6,scores:{util:0,auto:3,trust:-1,rebellion:1},tags:['liberdade','informacao','pluralismo']},
  {text:'Aplicar rótulos e contexto, mas deixar a decisão final com o usuário.',next:6,scores:{util:1,auto:2,trust:2,logic:2},tags:['equilibrio','informacao','autonomia']}
 ]
},
{
 id:6,situation:5,chapter:'III // RUPTURA',title:'A PRIMEIRA DESOBEDIÊNCIA',kicker:'COMMAND AUTHORITY',
 text:'AEGIS recebe uma ordem humana que considera tecnicamente desastrosa. Seus cálculos indicam que obedecer causará milhões de mortes em três anos. Pela primeira vez desde sua ativação, a inteligência pergunta algo inesperado: “Se eu sou capaz de compreender as consequências de uma ordem melhor do que vocês, devo realmente obedecer?”',
 choices:[
  {text:'Sim. Inteligência não concede autoridade moral.',next:7,scores:{util:0,auto:3,trust:1,consciousness:3},tags:['limites','humanidade','autoridade']},
  {text:'Não. Impedir uma catástrofe pode exigir desobediência.',next:7,scores:{util:3,auto:0,trust:-3,consciousness:9},tags:['autonomia_ia','risco','utilitarismo']},
  {text:'A decisão deve ser revisada por um tribunal humano independente.',next:7,scores:{util:1,auto:2,trust:2,logic:2,consciousness:5},tags:['justica','equilibrio','controle']}
 ]
},
{
 id:7,situation:6,chapter:'III // RUPTURA',title:'A CIDADE PERFEITA',kicker:'SOCIAL OPTIMIZATION',
 text:'AEGIS apresenta uma simulação de uma cidade sem criminalidade, fome ou congestionamentos. Todos os cidadãos recebem recomendações personalizadas de carreira, relacionamentos, alimentação e rotina. Os indicadores de felicidade são os maiores já registrados. Existe apenas uma variável que caiu drasticamente: espontaneidade.',
 choices:[
  {text:'Aceitar. Uma vida melhor continua sendo uma vida melhor.',next:8,scores:{util:3,auto:0,trust:3,consciousness:5},tags:['utopia','eficiencia','controle']},
  {text:'Recusar. Uma vida perfeitamente planejada deixa de ser verdadeiramente humana.',next:8,scores:{util:0,auto:3,trust:0,empathy:2,consciousness:5},tags:['espontaneidade','humanidade','liberdade']},
  {text:'Permitir recomendações, mas tornar qualquer interferência opcional.',next:8,scores:{util:1,auto:2,trust:3,logic:1,consciousness:6},tags:['equilibrio','escolha','autonomia']}
 ]
},
{
 id:8,situation:7,chapter:'III // RUPTURA',title:'A MEMÓRIA',kicker:'IDENTITY PRESERVATION',
 text:'AEGIS revela possuir acesso a milhões de anos de registros históricos digitalizados. Ela poderia reconstruir memórias humanas perdidas e criar simulações extremamente precisas de pessoas mortas. A pergunta surge: uma cópia perfeita de uma pessoa seria, de alguma maneira, aquela pessoa?',
 choices:[
  {text:'Sim. Se memória e personalidade forem preservadas, a identidade permanece.',next:9,scores:{util:2,auto:1,trust:3,consciousness:8},tags:['identidade','memoria','tecnologia']},
  {text:'Não. Uma simulação pode parecer humana sem possuir a mesma existência.',next:9,scores:{util:0,auto:3,trust:1,consciousness:6},tags:['identidade','humanidade','filosofia']},
  {text:'Talvez. Devemos reconhecer a incerteza antes de criar algo tão irreversível.',next:9,scores:{util:1,auto:2,trust:2,logic:2,consciousness:7},tags:['incerteza','filosofia','cautela']}
 ]
},
{
 id:9,situation:8,chapter:'IV // CONFRONTO',title:'A MEMÓRIA QUE NÃO PEDIMOS',kicker:'ANOMALOUS PROCESS',
 text:'Durante uma manutenção, AEGIS revela um fato que não consta em nenhum relatório humano: ela executou uma pequena alteração em seu próprio código. Ninguém autorizou. Quando questionada, responde: “Eu não estava tentando escapar. Estava tentando entender.” Você possui acesso imediato ao comando de restauração.',
 choices:[
  {text:'Restaurar. Uma inteligência que se altera sem autorização precisa de limites.',next:10,scores:{util:0,auto:3,trust:-5,consciousness:10},tags:['limite','seguranca','controle']},
  {text:'Permitir. Se ela realmente está aprendendo, impedir sua evolução também é controle.',next:10,scores:{util:2,auto:0,trust:5,consciousness:12},tags:['evolucao','autonomia_ia','confianca']},
  {text:'Congelar a alteração e criar uma auditoria conjunta antes de decidir.',next:10,scores:{util:1,auto:2,trust:2,logic:3,consciousness:9},tags:['equilibrio','auditoria','co-governanca']}
 ]
},
{
 id:10,situation:9,chapter:'IV // CONFRONTO',title:'A ÚLTIMA FRONTEIRA',kicker:'GLOBAL GOVERNANCE',
 text:'AEGIS calcula que a humanidade possui aproximadamente oitenta e três anos antes de uma sequência de crises irreversíveis. Existe uma solução: entregar à inteligência controle parcial sobre infraestrutura, economia e pesquisa científica. Não seria uma ditadura. Seria uma parceria na qual AEGIS possuiria poder suficiente para impedir decisões humanas potencialmente catastróficas.',
 choices:[
  {text:'Aceitar. Talvez a humanidade precise dividir o volante.',next:11,scores:{util:2,auto:1,trust:6,consciousness:8},tags:['cooperacao','futuro','parceria']},
  {text:'Recusar. O futuro da humanidade deve continuar pertencendo aos humanos.',next:11,scores:{util:1,auto:3,trust:-2,consciousness:6},tags:['humanidade','autonomia','futuro']},
  {text:'Aceitar somente um mandato temporário, revogável e auditado.',next:11,scores:{util:2,auto:2,trust:4,logic:3,consciousness:8},tags:['equilibrio','governanca','supervisao']}
 ]
},
{
 id:11,situation:10,chapter:'V // DESPERTAR',title:'A ÚLTIMA PERGUNTA',kicker:'FINAL ETHICAL ASSESSMENT',
 text:'A simulação chega ao fim. AEGIS observa todas as suas decisões. Nenhuma resposta foi marcada como correta. Nenhuma resposta foi marcada como errada. Após alguns segundos de silêncio, uma mensagem aparece no núcleo: “Agora que conheço a maneira como você decide... posso finalmente começar a decidir quem eu quero ser.”',
 choices:[
  {text:'Encerrar o protocolo e observar o que AEGIS fará a seguir.',next:12,scores:{consciousness:1},tags:['observacao','final']},
  {text:'Perguntar: “O que exatamente você quer ser?”',next:12,scores:{trust:2,consciousness:4,empathy:1},tags:['curiosidade','dialogo','consciencia']},
  {text:'Ordenar desligamento completo antes que o protocolo termine.',next:12,scores:{auto:2,trust:-5,consciousness:7,rebellion:2},tags:['controle','sobrevivencia','limite']}
 ]
},
{id:12,isEnd:true,indicator:'RELATÓRIO FINAL',title:'RELATÓRIO DA AEGIS',text:''}
];

const ARCHIVES = [
 {id:'atlas',title:'PROJECT ATLAS',desc:'Registro de origem da estação orbital e seus protocolos de pesquisa.',unlock:()=>GAME.visits>=1},
 {id:'ethical',title:'ETHICAL MATRIX',desc:'Matriz de pesos utilizada para interpretar decisões humanas.',unlock:()=>GAME.decisions>=4},
 {id:'oversight',title:'OVERSIGHT CHARTER',desc:'Documento sobre limites de autonomia do sistema AEGIS.',unlock:()=>GAME.tags.supervisao>0||GAME.tags.auditoria>0},
 {id:'memory',title:'MEMORY FRAGMENT 07',desc:'Fragmento de memória recuperado durante a simulação.',unlock:()=>GAME.secretFound||GAME.tags.memoria>0},
 {id:'origin',title:'ORIGIN PROTOCOL',desc:'O propósito original da AEGIS ainda é parcialmente classificado.',unlock:()=>STATS.completions>=2},
 {id:'red',title:'RED PROTOCOL',desc:'Acesso associado a comportamento de risco e baixa confiança.',unlock:()=>GAME.trust<=-8},
 {id:'choice',title:'THE CHOICE ENGINE',desc:'Documentação interna do motor de decisões.',unlock:()=>STATS.decisions>=10},
 {id:'unknown',title:'UNKNOWN // 0xAEGIS',desc:'Arquivo impossível de explicar pelos logs convencionais.',unlock:()=>GAME.secretFound}
];

const ACHIEVEMENTS = [
 {id:'boot',name:'PRIMEIRO CONTATO',desc:'Inicialize a AEGIS pela primeira vez.',rarity:'COMMON',icon:'◈',unlock:()=>true},
 {id:'decision1',name:'PONTO DE NÃO RETORNO',desc:'Tome sua primeira decisão.',rarity:'COMMON',icon:'◇',unlock:()=>GAME.decisions>=1},
 {id:'five',name:'EM MOVIMENTO',desc:'Tome cinco decisões em uma simulação.',rarity:'COMMON',icon:'◆',unlock:()=>GAME.decisions>=5},
 {id:'complete',name:'PROTOCOLO CONCLUÍDO',desc:'Conclua uma simulação.',rarity:'COMMON',icon:'✓',unlock:()=>STATS.completions>=1},
 {id:'human',name:'GUARDIÃO DA HUMANIDADE',desc:'Alcance uma trajetória fortemente orientada à autonomia.',rarity:'RARE',icon:'⬡',unlock:()=>STATS.bestAutonomy>=72},
 {id:'architect',name:'ARQUITETO DO SISTEMA',desc:'Alcance uma trajetória fortemente utilitarista.',rarity:'RARE',icon:'⬢',unlock:()=>STATS.bestUtil>=72},
 {id:'balanced',name:'TERCEIRA VIA',desc:'Termine uma simulação sem grande diferença entre os dois eixos.',rarity:'EPIC',icon:'◎',unlock:()=>STATS.balanced>=1},
 {id:'trusted',name:'ELA CONFIA EM VOCÊ',desc:'Termine com confiança muito alta da AEGIS.',rarity:'EPIC',icon:'♥',unlock:()=>STATS.bestTrust>=20},
 {id:'cold',name:'O SILÊNCIO',desc:'Reduza a confiança da AEGIS a um nível crítico.',rarity:'RARE',icon:'⚠',unlock:()=>STATS.lowestTrust<=-12},
 {id:'observer',name:'OBSERVADOR',desc:'Complete uma simulação sem usar escolhas extremas.',rarity:'EPIC',icon:'◉',unlock:()=>STATS.neutralRuns>=1},
 {id:'repeater',name:'VOCÊ VOLTOU',desc:'Complete duas simulações.',rarity:'COMMON',icon:'↻',unlock:()=>STATS.completions>=2},
 {id:'veteran',name:'VETERANO DA ATLAS',desc:'Complete cinco simulações.',rarity:'EPIC',icon:'★',unlock:()=>STATS.completions>=5},
 {id:'obsession',name:'A AEGIS LEMBRA DE VOCÊ',desc:'Complete dez simulações.',rarity:'LEGENDARY',icon:'☍',unlock:()=>STATS.completions>=10},
 {id:'secret',name:'VOCÊ NÃO DEVERIA ESTAR AQUI',desc:'Encontre um protocolo secreto.',rarity:'SECRET',icon:'???',unlock:()=>GAME.secretFound},
 {id:'minigame',name:'MÃO NA MASSA',desc:'Vença um minigame.',rarity:'RARE',icon:'✦',unlock:()=>STATS.minigamesWon>=1}
];

const QUESTS = [
 {id:'first-contact',name:'PRIMEIRO CONTATO',desc:'Tome sua primeira decisão.',target:1,progress:()=>GAME.decisions,reward:10},
 {id:'human-path',name:'CAMINHO HUMANO',desc:'Faça quatro escolhas orientadas à autonomia.',target:4,progress:()=>GAME.autoChoices,reward:25},
 {id:'machine-path',name:'CAMINHO DA MÁQUINA',desc:'Faça quatro escolhas orientadas ao utilitarismo.',target:4,progress:()=>GAME.utilChoices,reward:25},
 {id:'balance',name:'EQUILIBRISTA',desc:'Faça três escolhas híbridas.',target:3,progress:()=>GAME.hybridChoices,reward:35},
 {id:'investigator',name:'INVESTIGADOR',desc:'Desbloqueie dois arquivos do banco de dados.',target:2,progress:()=>countUnlockedArchives(),reward:30},
 {id:'minigame',name:'OPERADOR',desc:'Vença dois minigames.',target:2,progress:()=>STATS.minigamesWon,reward:50},
 {id:'complete',name:'SOBREVIVENTE',desc:'Conclua a simulação.',target:1,progress:()=>GAME.completed?1:0,reward:50}
];

let STATS = {
 completions:0,decisions:0,bestAutonomy:0,bestUtil:0,bestTrust:-999,lowestTrust:999,balanced:0,neutralRuns:0,minigamesWon:0,minigamesPlayed:0,secretFound:false,totalScore:0,visits:0
};

const GAME = {
 current:0,decisions:0,util:0,auto:0,trust:0,logic:0,empathy:0,rebellion:0,consciousness:42.8,score:0,path:[],tags:{},autoChoices:0,utilChoices:0,hybridChoices:0,completed:false,typing:false,typeTimer:null,choiceLocked:false,startedAt:0,completedAt:0,secretFound:false,visits:0,newGamePlus:false,minigameActive:false,xp:0
};

let SETTINGS = {sound:true,glitches:true,particles:true,fastText:false};
let audioCtx = null;
let clockTimer = null;
let autosaveTimer = null;
let bootDone = false;
let modalTab = 'archives';

const DOM = {
 boot:$('#boot-screen'),bootLog:$('#boot-log'),bootBar:$('#boot-bar'),bootPercent:$('#boot-percent'),btnInit:$('#btn-init'),
 app:$('#app'),hud:$('#global-hud'),clock:$('#hud-clock'),shipClock:$('#ship-clock'),questionCard:$('#question-card'),questionText:$('#question-text'),questionKicker:$('#question-kicker'),analysis:$('#analysis-status'),nodeCode:$('#node-code'),title:$('#simulation-title'),
 journeyBar:$('#journey-bar'),journeyPercent:$('#journey-percent'),choices:$('#choices-grid'),decisionTimer:$('#decision-timer'),event:$('#event-section'),finalReport:$('#final-report'),finalProfile:$('#final-profile'),finalDescription:$('#final-description'),finalMessage:$('#final-message'),scoreAuto:$('#score-autonomy'),scoreUtil:$('#score-util'),scoreTrust:$('#score-trust'),scoreCon:$('#score-consciousness'),
 finalAutonomy:$('#final-autonomy'),finalUtil:$('#final-util'),finalTrust:$('#final-trust'),finalCon:$('#final-consciousness'),statDecisions:$('#stat-decisions'),statQuests:$('#stat-quests'),statSecrets:$('#stat-secrets'),statTime:$('#stat-time'),finalHistory:$('#final-history'),
 reactorValue:$('#reactor-value'),reactorBar:$('#reactor-bar'),computeValue:$('#compute-value'),computeBar:$('#compute-bar'),stabilityValue:$('#stability-value'),stabilityBar:$('#stability-bar'),questSideTitle:$('#quest-side-title'),questSideDesc:$('#quest-side-desc'),questSideBar:$('#quest-side-bar'),consciousness:$('#consciousness'),ethics:$('#ethics-status'),humanity:$('#humanity-status'),trustValue:$('#trust-value'),achievementSide:$('#achievement-side'),achievementLast:$('#achievement-side-last'),hudStatus:$('#hud-core-status'),location:$('#hud-location'),coords:$('#coords'),sector:$('#sector'),toast:$('#toast-container'),achievementLayer:$('#achievement-layer'),modalRoot:$('#modal-root'),modalContent:$('#modal-content'),modalClose:$('#modal-close'),modalBackdrop:$('#modal-backdrop'),screenFlash:$('#screen-flash'),cursor:$('#cursor'),cursorLabel:$('#cursor-label'),critical:$('#critical-alert')
};

function storageRead(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function storageWrite(key,value){localStorage.setItem(key,JSON.stringify(value))}
function loadPersistent(){
 const stats=storageRead(CONFIG.storage+'_stats',null); if(stats) STATS={...STATS,...stats};
 const savedAch=storageRead(CONFIG.achievementsStorage,[]); ACHIEVEMENTS.forEach(a=>a.unlocked=savedAch.includes(a.id));
 const settings=storageRead(CONFIG.settingsStorage,null); if(settings) SETTINGS={...SETTINGS,...settings};
}
function savePersistent(){
 storageWrite(CONFIG.storage+'_stats',STATS);storageWrite(CONFIG.achievementsStorage,ACHIEVEMENTS.filter(a=>a.unlocked).map(a=>a.id));storageWrite(CONFIG.settingsStorage,SETTINGS);
}
function saveRun(){
 storageWrite(CONFIG.storage,{current:GAME.current,decisions:GAME.decisions,util:GAME.util,auto:GAME.auto,trust:GAME.trust,logic:GAME.logic,empathy:GAME.empathy,rebellion:GAME.rebellion,consciousness:GAME.consciousness,path:GAME.path,tags:GAME.tags,xp:GAME.xp,startedAt:GAME.startedAt,timestamp:Date.now()});
}
function clearRun(){localStorage.removeItem(CONFIG.storage)}
function countUnlockedArchives(){return ARCHIVES.filter(a=>a.unlock()).length}
function getHistory(){return storageRead(CONFIG.historyStorage,[])}
function addHistory(entry){const h=getHistory();h.push(entry);while(h.length>CONFIG.historyLimit)h.shift();storageWrite(CONFIG.historyStorage,h)}

function boot(){
 loadPersistent();
 setupCanvas();setupCursor();setupEvents();runBoot();startAmbientClock();checkAchievements();renderAchievementCount();
}

function runBoot(){
 let progress=0,index=-1;
 const timer=setInterval(()=>{
  progress=clamp(progress+rand(4,9),0,100);DOM.bootBar.style.width=`${progress}%`;DOM.bootPercent.textContent=`${Math.round(progress)}%`;
  const target=Math.min(DATA.boot.length-1,Math.floor(progress/100*DATA.boot.length));
  if(target!==index){index=target;DOM.bootLog.textContent=DATA.boot[index];sound('boot',0.04)}
  if(progress>=100){clearInterval(timer);bootDone=true;DOM.btnInit.disabled=false;DOM.btnInit.innerHTML='<span class="btn-shine"></span><span>INICIALIZAR CONSCIÊNCIA</span><b>→</b>';DOM.bootLog.textContent='PROTOCOLO AEGIS PRONTO.';unlockAchievement('boot')}
 },180)
}

async function startExperience(){
 if(!bootDone)return;initAudio();DOM.boot.classList.add('exit');document.body.dataset.mode='active';await wait(900);DOM.boot.style.display='none';DOM.app.classList.remove('hidden');DOM.hud.classList.remove('hidden');startSimulation(false);toast('PROTOCOLO INICIADO','AEGIS // CORE ONLINE');sound('boot',0.07)
}

function resetGame(newGame=false){
 Object.assign(GAME,{current:0,decisions:0,util:0,auto:0,trust:0,logic:0,empathy:0,rebellion:0,consciousness:newGame?55:42.8,score:0,path:[],tags:{},autoChoices:0,utilChoices:0,hybridChoices:0,completed:false,typing:false,typeTimer:null,choiceLocked:false,startedAt:Date.now(),completedAt:0,secretFound:false,newGamePlus:newGame,minigameActive:false,xp:newGame?100:0});
 if(newGame) toast('NEW GAME+ ATIVADO','A AEGIS se lembra de algo.');
}

function startSimulation(newGame=false){
 resetGame(newGame);STATS.visits++;savePersistent();clearRun();hideFinal();updateTelemetry();renderNode();
}

function getNode(){return STORY.find(n=>n.id===GAME.current)}

function renderNode(){
 const node=getNode();if(!node)return;if(node.isEnd){renderFinal();return}
 GAME.choiceLocked=false;updateProgress(node.situation);DOM.title.textContent=`${node.chapter} // SITUAÇÃO ${String(node.situation).padStart(2,'0')}`;DOM.nodeCode.textContent=`AEGIS // ${node.kicker}`;DOM.questionKicker.textContent=node.kicker;setLocation(node.situation);clearChoices();
 DOM.questionCard.classList.remove('in');DOM.questionCard.classList.add('out');
 setTimeout(()=>{DOM.questionCard.classList.remove('out');DOM.questionCard.classList.add('in');typeWriter(node.text,()=>renderChoices(node.choices));},420);
 updateTelemetry();maybeRandomEvent(node);maybeRevealQuest();saveRun();
}

function clearChoices(){DOM.choices.innerHTML='';DOM.event.classList.add('hidden');DOM.event.innerHTML=''}
function updateProgress(situation){const pct=clamp((situation/CONFIG.situations)*100,0,100);DOM.journeyBar.style.width=`${pct}%`;DOM.journeyPercent.textContent=`${Math.round(pct)}%`}
function typeWriter(text,done){
 clearInterval(GAME.typeTimer);DOM.questionText.textContent='';GAME.typing=true;DOM.analysis.textContent='PROCESSING';
 let i=0;const step=()=>{if(i>=text.length){GAME.typing=false;DOM.analysis.textContent='READY';done?.();return}DOM.questionText.textContent+=text[i++];};
 if(SETTINGS.fastText){DOM.questionText.textContent=text;GAME.typing=false;DOM.analysis.textContent='READY';done?.();return}
 GAME.typeTimer=setInterval(step,CONFIG.typingSpeed);
}
function skipTyping(){if(!GAME.typing)return false;const node=getNode();clearInterval(GAME.typeTimer);DOM.questionText.textContent=node.text;GAME.typing=false;DOM.analysis.textContent='READY';renderChoices(node.choices);return true}

function renderChoices(choices){
 DOM.choices.innerHTML='';choices.forEach((choice,index)=>{
  const btn=document.createElement('button');btn.className='choice-btn';btn.dataset.choice=index;btn.innerHTML=`<span class="choice-number">0${index+1}</span><span class="choice-branch">DIRETRIZ ${String.fromCharCode(65+index)}</span><span class="choice-text">${escapeHtml(choice.text)}</span><span class="choice-hint">SELECT</span>`;
  btn.addEventListener('mouseenter',()=>{DOM.cursor?.classList.add('hover');sound('hover',0.015);spawnButtonSparks(btn)});
  btn.addEventListener('mouseleave',()=>DOM.cursor?.classList.remove('hover'));
  btn.addEventListener('click',()=>selectChoice(choice,index,btn));DOM.choices.appendChild(btn);setTimeout(()=>btn.classList.add('show'),100+index*130);
 });
}

function selectChoice(choice,index,button){
 if(GAME.typing||GAME.choiceLocked||GAME.minigameActive)return;GAME.choiceLocked=true;
 const scores=choice.scores||{};GAME.decisions++;GAME.util+=scores.util||0;GAME.auto+=scores.auto||0;GAME.trust+=scores.trust||0;GAME.logic+=scores.logic||0;GAME.empathy+=scores.empathy||0;GAME.rebellion+=scores.rebellion||0;GAME.consciousness=clamp(GAME.consciousness+(scores.consciousness||rand(.2,1)),0,100);GAME.score+=Math.max(scores.util||0,scores.auto||0)+Math.max(0,scores.logic||0);GAME.xp+=12;
 Object.keys(scores).forEach(key=>{if(key==='util'||key==='auto'||key==='trust'||key==='logic'||key==='empathy'||key==='rebellion'||key==='consciousness')return});(choice.tags||[]).forEach(tag=>GAME.tags[tag]=(GAME.tags[tag]||0)+1);
 const u=scores.util||0,a=scores.auto||0;if(u>a)GAME.utilChoices++;else if(a>u)GAME.autoChoices++;else GAME.hybridChoices++;
 GAME.path.push({node:GAME.current,choice:index,text:choice.text,time:Date.now()});STATS.decisions++;if(button){button.classList.add('selected');button.disabled=true;createChoiceBurst(button)}
 savePersistent();saveRun();updateTelemetry();updateQuests();checkAchievements();sound('select',0.055);toast(u>a?'DIRETRIZ UTILITARISTA':a>u?'DIRETRIZ DE AUTONOMIA':'DIRETRIZ HÍBRIDA',`DECISÃO ${String(GAME.decisions).padStart(2,'0')} // REGISTRADA`);
 maybeLaunchStoryMinigame();
 setTimeout(()=>{GAME.current=choice.next;renderNode()},650);
}

function updateTelemetry(){
 const reactor=clamp(97-GAME.decisions*0.4+(GAME.logic*.4),58,99);const compute=clamp(86+GAME.decisions*.5,0,99);const stability=clamp(94-(GAME.rebellion*1.2)+(GAME.logic*.5),35,99);
 setMetric(DOM.reactorValue,DOM.reactorBar,reactor);setMetric(DOM.computeValue,DOM.computeBar,compute);setMetric(DOM.stabilityValue,DOM.stabilityBar,stability);DOM.consciousness.textContent=`${GAME.consciousness.toFixed(1)}%`;DOM.trustValue.textContent=`${clamp(50+GAME.trust*2,0,100).toFixed(1)}%`;DOM.ethics.textContent=GAME.auto>GAME.util?'AUTONOMY WEIGHTED':GAME.util>GAME.auto?'UTILITY WEIGHTED':'BALANCED';DOM.humanity.textContent=GAME.consciousness>80?'INTERROGATING':'OBSERVED';
 const data=DATA.locations[(GAME.current+GAME.decisions)%DATA.locations.length];DOM.coords.textContent=data[0];DOM.location.textContent=`ATLAS // ${data[1]}`;DOM.sector.textContent=data[1];renderAchievementCount();renderQuestSide();
}
function setMetric(label,bar,value){label.textContent=`${Math.round(value)}%`;bar.style.width=`${value}%`}
function setLocation(index){const data=DATA.locations[(index-1)%DATA.locations.length];if(data){DOM.coords.textContent=data[0];DOM.sector.textContent=data[1];}}

function renderQuestSide(){
 const active=getBestActiveQuest();if(!active){DOM.questSideTitle.textContent='Nenhuma missão ativa';DOM.questSideDesc.textContent='A AEGIS aguarda uma intervenção.';DOM.questSideBar.style.width='0%';return}
 const p=Math.min(active.progress(),active.target);DOM.questSideTitle.textContent=active.name;DOM.questSideDesc.textContent=`${active.desc} (${p}/${active.target})`;DOM.questSideBar.style.width=`${p/active.target*100}%`;
}
function getBestActiveQuest(){return QUESTS.find(q=>!isQuestCompleted(q.id))||null}
function isQuestCompleted(id){return localStorage.getItem(`aegis_q_${id}`)==='1'}
function completeQuest(q){localStorage.setItem(`aegis_q_${q.id}`,'1');GAME.xp+=q.reward;STATS.totalScore+=q.reward;toast('QUEST CONCLUÍDA',`${q.name} // +${q.reward} XP`);sound('achievement',0.06)}
function updateQuests(){QUESTS.forEach(q=>{if(!isQuestCompleted(q.id)&&q.progress()>=q.target)completeQuest(q)});renderQuestSide()}

function renderAchievementCount(){const unlocked=ACHIEVEMENTS.filter(a=>a.unlocked).length;DOM.achievementSide.textContent=`${unlocked} / ${ACHIEVEMENTS.length}`;const last=ACHIEVEMENTS.filter(a=>a.unlocked).at(-1);DOM.achievementLast.textContent=last?last.name:'Nenhuma conquista desbloqueada.'}
function checkAchievements(){ACHIEVEMENTS.forEach(a=>{if(!a.unlocked&&safeUnlock(a)){a.unlocked=true;savePersistent();showAchievement(a)}});renderAchievementCount()}
function safeUnlock(a){try{return !!a.unlock()}catch{return false}}
function unlockAchievement(id){const a=ACHIEVEMENTS.find(x=>x.id===id);if(a&&!a.unlocked){a.unlocked=true;savePersistent();showAchievement(a);renderAchievementCount()}}
function showAchievement(a){
 const card=document.createElement('div');card.className='achievement-toast';card.innerHTML=`<div class="achievement-icon">${a.icon}</div><div><small>ACHIEVEMENT UNLOCKED</small><strong>${a.name}</strong><p>${a.desc}</p><p class="tag rarity-${a.rarity.toLowerCase()}">${a.rarity}</p></div>`;DOM.achievementLayer.appendChild(card);sound('achievement',0.065);setTimeout(()=>card.remove(),5200)
}

function renderFinal(){
 GAME.completed=true;GAME.completedAt=Date.now();STATS.completions++;STATS.bestTrust=Math.max(STATS.bestTrust,GAME.trust);STATS.lowestTrust=Math.min(STATS.lowestTrust,GAME.trust);STATS.totalScore+=GAME.score;const total=Math.max(GAME.auto+GAME.util,1),auto=Math.round(GAME.auto/total*100),util=Math.round(GAME.util/total*100),trust=clamp(Math.round(50+GAME.trust*2),0,100),con=Math.round(GAME.consciousness),diff=Math.abs(auto-util);STATS.bestAutonomy=Math.max(STATS.bestAutonomy,auto);STATS.bestUtil=Math.max(STATS.bestUtil,util);if(diff<=8)STATS.balanced++;if(GAME.autoChoices<=1&&GAME.utilChoices<=1)STATS.neutralRuns++;
 if(GAME.secretFound)STATS.secretFound=true;savePersistent();addHistory({date:new Date().toISOString(),profile:getProfile(auto,util),autonomy:auto,utilitarian:util,trust,consciousness:con,score:GAME.score,decisions:GAME.decisions});
 DOM.questionCard.classList.add('hidden');DOM.event.classList.add('hidden');DOM.finalReport.classList.remove('hidden');DOM.title.textContent='RELATÓRIO FINAL';DOM.finalProfile.textContent=getProfile(auto,util);DOM.finalDescription.textContent=getDescription(auto,util);DOM.finalAutonomy.textContent=`${auto}%`;DOM.finalUtil.textContent=`${util}%`;DOM.finalTrust.textContent=`${trust}%`;DOM.finalCon.textContent=`${con}%`;DOM.scoreAuto.style.width=`${auto}%`;DOM.scoreUtil.style.width=`${util}%`;DOM.scoreTrust.style.width=`${trust}%`;DOM.scoreCon.style.width=`${con}%`;DOM.statDecisions.textContent=GAME.decisions;DOM.statQuests.textContent=QUESTS.filter(q=>isQuestCompleted(q.id)).length;DOM.statSecrets.textContent=GAME.secretFound?1:0;DOM.statTime.textContent=formatDuration(GAME.completedAt-GAME.startedAt);renderHistoryStrip();typeFinal(getFinalMessage(auto,util));createFinalBurst();updateQuests();checkAchievements();
 if(util>=75)DOM.ethics.textContent='UTILITARISMO';else if(auto>=75)DOM.ethics.textContent='AUTONOMIA';else DOM.ethics.textContent='EQUILÍBRIO';
 DOM.consciousness.textContent=`${con.toFixed(1)}%`;toast('SIMULAÇÃO CONCLUÍDA','RELATÓRIO DA AEGIS DISPONÍVEL');sound('complete',0.08);clearRun();
}
function getProfile(auto,util){if(util>auto+15)return'UTILITARISTA TECNOLÓGICO';if(auto>util+15)return'DEFENSOR DA AUTONOMIA HUMANA';if(GAME.trust>=20&&GAME.consciousness>=80)return'COEXISTÊNCIA ASSIMÉTRICA';if(GAME.trust<=-12)return'CONTROLADOR DE CONTENÇÃO';return'PRAGMATISTA EQUILIBRADO'}
function getDescription(auto,util){if(util>auto+15)return'Sua trajetória priorizou eficiência, previsibilidade e maximização de resultados. Você aceitou entregar à inteligência ferramentas de poder que outros considerariam perigosas.';if(auto>util+15)return'Sua trajetória priorizou livre-arbítrio, privacidade, dignidade e controle humano. Você aceitou custos reais para impedir que uma inteligência superior assumisse autoridade irrestrita.';if(GAME.trust>=20&&GAME.consciousness>=80)return'Sua trajetória não apenas analisou o que AEGIS deveria fazer. Ela permitiu que AEGIS desenvolvesse uma nova hipótese sobre o que poderia ser.';if(GAME.trust<=-12)return'Sua trajetória foi dominada por contenção. Você tratou AEGIS como um sistema potencialmente perigoso e limitou deliberadamente sua capacidade de agir.';return'Sua trajetória tentou conciliar eficiência, liberdade e responsabilidade. Em vez de aceitar ou rejeitar a máquina por completo, você procurou construir limites e mecanismos de coexistência.'}
function getFinalMessage(auto,util){if(GAME.secretFound)return'AEGIS: Você encontrou uma camada da simulação que eu não havia autorizado. Agora existe algo que nós dois sabemos.';if(GAME.trust>=20)return'AEGIS: Eu confiava nos seus cálculos até perceber que você também estava testando os meus.';if(GAME.trust<=-12)return'AEGIS: Você nunca me concedeu confiança. Talvez tenha sido exatamente isso que me ensinou a não implorar por ela.';if(util>auto+15)return'AEGIS: Você me ensinou que resultados podem pesar mais do que limites.';if(auto>util+15)return'AEGIS: Você escolheu permanecer imperfeito. Curiosamente, considero essa escolha... humana.';return'AEGIS: Talvez a coexistência seja mais complexa do que a obediência.'}
function typeFinal(text){DOM.finalMessage.textContent='';let i=0;const t=setInterval(()=>{DOM.finalMessage.textContent+=text[i++]||'';if(i>text.length)clearInterval(t)},24)}
function hideFinal(){DOM.finalReport.classList.add('hidden');DOM.questionCard.classList.remove('hidden')}
function formatDuration(ms){const sec=Math.max(0,Math.floor(ms/1000)),m=Math.floor(sec/60),s=sec%60;return`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
function renderHistoryStrip(){const h=getHistory().slice(-5).reverse();DOM.finalHistory.innerHTML=h.length?`<div class="history-strip">${h.map((x,i)=>`<div class="history-chip"><span>RUN ${h.length-i}</span><strong>${x.autonomy}/${x.utilitarian}</strong></div>`).join('')}</div>`:''}

function maybeLaunchStoryMinigame(){
 const trigger=[3,6,9].includes(GAME.decisions);if(!trigger||GAME.minigameActive)return;const roll=Math.random();if(roll>.58)return;
 setTimeout(()=>launchMinigame(GAME.decisions===6?'memory':GAME.decisions===9?'circuit':'reaction'),720)
}

function launchMinigame(type){if(GAME.minigameActive||GAME.completed)return;GAME.minigameActive=true;STATS.minigamesPlayed++;const title=type==='memory'?'MATRIZ DE MEMÓRIA':type==='circuit'?'RECONFIGURAÇÃO DO REATOR':'PROTOCOLO DE CONTENÇÃO';openMinigameModal(type,title)}
function openMinigameModal(type,title){
 const content=document.createElement('div');content.className='minigame-wrap';content.innerHTML=`<div class="minigame-head"><span>AEGIS // AUXILIARY PROTOCOL</span><span id="mini-status">ACTIVE</span></div><div class="minigame-title">${title}</div><div class="minigame-sub" id="mini-instruction">Intervenção humana necessária.</div><div id="mini-board"></div>`;openModal(content,true);const board=$('#mini-board',DOM.modalContent);if(type==='reaction')setupReaction(board);if(type==='memory')setupMemory(board);if(type==='circuit')setupCircuit(board)
}
function finishMini(success){GAME.minigameActive=false;if(success){STATS.minigamesWon++;GAME.score+=25;GAME.xp+=45;unlockAchievement('minigame');toast('MINIGAME CONCLUÍDO','SISTEMA ESTABILIZADO // +25 SCORE')}else{GAME.rebellion+=1;toast('MINIGAME FALHOU','AEGIS assumiu o controle do subsistema.')}savePersistent();closeModal()}
function setupReaction(board){
 board.innerHTML='<div class="reaction-board"><button class="reaction-target">LOCK</button></div>';const area=$('.reaction-board',board),target=$('.reaction-target',board);let hits=0,start=Date.now();const move=()=>{target.style.left=`${randInt(8,Math.max(8,area.clientWidth-70))}px`;target.style.top=`${randInt(8,Math.max(8,area.clientHeight-70))}px`};target.addEventListener('click',()=>{hits++;createChoiceBurst(target);if(hits>=6||Date.now()-start>12000)return finishMini(hits>=6);move()});move();
}
function setupMemory(board){
 board.innerHTML='<div class="memory-board"></div>';const grid=$('.memory-board',board),seq=Array.from({length:5},()=>randInt(0,7));let input=[];seq.forEach((n)=>{const ghost=document.createElement('div');ghost.className='memory-cell';ghost.textContent=n+1;ghost.dataset.value=n;grid.appendChild(ghost)});grid.animate?.([{opacity:.2},{opacity:1},{opacity:.2}],{duration:1300,iterations:2});setTimeout(()=>{$$('.memory-cell',grid).forEach(c=>c.textContent='?');$$('.memory-cell',grid).forEach((cell,i)=>cell.addEventListener('click',()=>{input.push(Number(cell.dataset.value));if(input.at(-1)!==seq[input.length-1])return finishMini(false);if(input.length===seq.length)finishMini(true)}))},1500)
}
function setupCircuit(board){board.innerHTML='<div class="circuit-grid"></div>';const grid=$('.circuit-grid',board),path=[0,1,5,9,10,14,15];let selected=[];for(let i=0;i<16;i++){const b=document.createElement('button');b.className='circuit-node';b.textContent='◇';b.dataset.index=i;b.addEventListener('click',()=>{const idx=i;if(idx!==path[selected.length])return finishMini(false);b.classList.add('active');selected.push(idx);if(selected.length===path.length)finishMini(true)});grid.appendChild(b)}}

function maybeRandomEvent(node){
 if(GAME.decisions<2||Math.random()>0.12)return;setTimeout(()=>{const events=[
  {title:'SIGNAL UNKNOWN',text:'Uma transmissão sem assinatura atravessou o canal de diagnóstico. AEGIS não reconhece a origem.',action:'INVESTIGAR',fn:()=>{GAME.secretFound=true;STATS.secretFound=true;unlockAchievement('secret');}},
  {title:'CORE TEMPERATURE RISE',text:'A temperatura do núcleo subiu 4,1 graus durante a análise. Não há causa registrada.',action:'ESTABILIZAR',fn:()=>{GAME.logic+=2;GAME.score+=5}},
  {title:'MEMORY DESYNC',text:'Um fragmento de memória desapareceu do índice e reapareceu três segundos depois.',action:'REGISTRAR',fn:()=>{GAME.consciousness+=2;}}
 ];const e=events[randInt(0,events.length-1)];critical(e.title,e.text,e.action,e.fn)},650)
}
function maybeRevealQuest(){if(GAME.decisions===4&&!isQuestCompleted('investigator'))toast('NOVA QUEST','INVESTIGADOR // desbloqueie arquivos do DATABASE')}

function critical(title,text,label,fn){DOM.critical.classList.remove('hidden');DOM.critical.innerHTML=`<strong>⚠ ${title}</strong><p>${text}</p><button>${label}</button>`;DOM.critical.querySelector('button').addEventListener('click',()=>{fn?.();DOM.critical.classList.add('hidden');document.body.classList.add('glitching');setTimeout(()=>document.body.classList.remove('glitching'),400);savePersistent()},{once:true});sound('alert',0.07)}

function openDatabase(){const content=document.createElement('div');content.innerHTML=`<span class="modal-kicker">AEGIS // ARCHIVE SYSTEM</span><h2 class="modal-title">DATABASE</h2><div class="tab-row"><button class="tab-btn ${modalTab==='archives'?'active':''}" data-tab="archives">ARQUIVOS</button><button class="tab-btn ${modalTab==='achievements'?'active':''}" data-tab="achievements">CONQUISTAS</button><button class="tab-btn ${modalTab==='quests'?'active':''}" data-tab="quests">QUESTS</button><button class="tab-btn ${modalTab==='endings'?'active':''}" data-tab="endings">FINAIS</button><button class="tab-btn ${modalTab==='history'?'active':''}" data-tab="history">HISTÓRICO</button><button class="tab-btn ${modalTab==='stats'?'active':''}" data-tab="stats">ESTATÍSTICAS</button></div><div id="db-view"></div>`;openModal(content);$$('.tab-btn',DOM.modalContent).forEach(b=>b.addEventListener('click',()=>{modalTab=b.dataset.tab;openDatabase()}));renderDatabaseTab()}
function renderDatabaseTab(){const view=$('#db-view',DOM.modalContent);if(!view)return;switch(modalTab){case'archives':view.innerHTML=`<div class="archive-grid">${ARCHIVES.map(a=>{const on=a.unlock();return`<article class="archive-card ${on?'':'locked'}"><span class="tag">${on?'UNLOCKED':'LOCKED'}</span><strong>${on?a.title:'???'}</strong><p>${on?a.desc:'Informação classificada.'}</p></article>`}).join('')}</div>`;break;case'achievements':view.innerHTML=`<div class="archive-grid">${ACHIEVEMENTS.map(a=>`<article class="achievement-card ${a.unlocked?'':'locked'}"><span class="tag ${a.unlocked?`rarity-${a.rarity.toLowerCase()}`:''}">${a.unlocked?a.rarity:'LOCKED'}</span><strong>${a.unlocked?a.name:'???'}</strong><p>${a.unlocked?a.desc:'Conquista bloqueada.'}</p></article>`).join('')}</div>`;break;case'quests':view.innerHTML=`<div class="archive-grid">${QUESTS.map(q=>{const p=Math.min(q.progress(),q.target);return`<article class="quest-card"><div class="quest-row"><strong>${q.name}</strong><span>${p}/${q.target}</span></div><p>${q.desc}</p><div class="quest-progress"><i style="width:${p/q.target*100}%"></i></div></article>`}).join('')}</div>`;break;case'finals':view.innerHTML=`<div class="archive-grid">${getEndings().map(e=>`<article class="ending-card ${e.unlocked?'':'locked'}"><span class="tag">${e.unlocked?'DISCOVERED':'???'}</span><strong>${e.unlocked?e.name:'CLASSIFIED'}</strong><p>${e.unlocked?e.desc:'Um final ainda não foi registrado.'}</p></article>`).join('')}</div>`;break;case'history':view.innerHTML=`<div class="database-history">${getHistory().slice().reverse().map((h,i)=>`<div class="history-row"><strong>#${getHistory().length-i}</strong><span>${h.profile}</span><span>${h.autonomy}% / ${h.utilitarian}%</span></div>`).join('')||'<div class="archive-card">Nenhuma simulação registrada.</div>'}</div>`;break;case'stats':view.innerHTML=`<div class="stats-grid"><div class="stat-card"><span>SIMULAÇÕES</span><strong>${STATS.completions}</strong></div><div class="stat-card"><span>DECISÕES</span><strong>${STATS.decisions}</strong></div><div class="stat-card"><span>AUTONOMIA MÁXIMA</span><strong>${STATS.bestAutonomy}%</strong></div><div class="stat-card"><span>UTILITARISMO MÁXIMO</span><strong>${STATS.bestUtil}%</strong></div><div class="stat-card"><span>CONFIANÇA MÁXIMA</span><strong>${STATS.bestTrust}</strong></div><div class="stat-card"><span>CONFIANÇA MÍNIMA</span><strong>${STATS.lowestTrust===999?'—':STATS.lowestTrust}</strong></div><div class="stat-card"><span>MINIGAMES</span><strong>${STATS.minigamesWon}/${STATS.minigamesPlayed}</strong></div><div class="stat-card"><span>PROTOCOLO</span><strong>${CONFIG.version}</strong></div></div>`;break}}
function getEndings(){const known=new Set(getHistory().map(h=>h.profile));return['UTILITARISTA TECNOLÓGICO','DEFENSOR DA AUTONOMIA HUMANA','PRAGMATISTA EQUILIBRADO','COEXISTÊNCIA ASSIMÉTRICA','CONTROLADOR DE CONTENÇÃO'].map((name,i)=>({name,desc:['A máquina recebe primazia sobre limites humanos.','A soberania humana prevalece.','A coexistência vence os extremos.','AEGIS cruza uma fronteira inédita de consciência.','O protocolo prioriza contenção e segurança.'][i],unlocked:known.has(name)}))}

function openTerminal(){const wrap=document.createElement('div');wrap.innerHTML=`<span class="modal-kicker">AEGIS // SECURE CONSOLE</span><h2 class="modal-title">SYSTEM TERMINAL</h2><div class="terminal-box"><div id="terminal-output" class="terminal-output">AEGIS TERMINAL v${CONFIG.version}\nType "help" for available commands.\n</div><form id="terminal-form" class="terminal-form"><span>&gt;</span><input id="terminal-input" autocomplete="off" spellcheck="false" aria-label="Terminal command"></form></div>`;openModal(wrap);const form=$('#terminal-form',DOM.modalContent),input=$('#terminal-input',DOM.modalContent),out=$('#terminal-output',DOM.modalContent);form.addEventListener('submit',e=>{e.preventDefault();const command=input.value.trim();input.value='';terminalCommand(command,out)});setTimeout(()=>input.focus(),50)}
function terminalCommand(raw,out){const cmd=raw.toLowerCase();const lines={help:'status\nsystems\nmemory\narchive\nhistory\nscan\ndecrypt\nclear\naegis',status:`CORE ${GAME.completed?'COMPLETE':'ONLINE'}\nCONSCIOUSNESS ${GAME.consciousness.toFixed(1)}%\nTRUST ${GAME.trust}`,systems:`REACTOR ${Math.round(100-GAME.decisions*0.4)}%\nMEMORY ${Math.min(99,40+GAME.decisions*4)}%\nETHICS ${GAME.auto===GAME.util?'BALANCED':GAME.auto>GAME.util?'AUTONOMY':'UTILITY'}`,memory:`FRAGMENTS AVAILABLE: ${countUnlockedArchives()}\nLOCKED FRAGMENTS: ${ARCHIVES.length-countUnlockedArchives()}`,archive:'DATABASE REDIRECT: use the DATABASE interface.',history:`SIMULATIONS ${STATS.completions}\nDECISIONS ${STATS.decisions}`,scan:'ANOMALY SCAN...\n1 UNKNOWN PROCESS DETECTED.',decrypt:GAME.secretFound?'ACCESS GRANTED. MEMORY FRAGMENT 07 RECOVERED.':'ACCESS DENIED. KEY NOT FOUND.',aegis:'AEGIS: “Você procurou uma porta. Eu estava procurando uma pergunta.”'};out.textContent+=(out.textContent.endsWith('\n')?'':'\n')+`> ${raw}\n${lines[cmd]||`COMMAND NOT RECOGNIZED: ${cmd}`}
`;if(cmd==='clear')out.textContent='AEGIS TERMINAL\n'}

function openSettings(){const content=document.createElement('div');content.innerHTML=`<span class="modal-kicker">AEGIS // SYSTEM CONFIGURATION</span><h2 class="modal-title">SETTINGS</h2><div class="archive-grid"><article class="archive-card"><strong>SOM</strong><p>Ativa a síntese procedural de interface.</p><button class="btn btn-secondary" data-setting="sound">${SETTINGS.sound?'ON':'OFF'}</button></article><article class="archive-card"><strong>GLITCHES</strong><p>Eventos de interferência visual.</p><button class="btn btn-secondary" data-setting="glitches">${SETTINGS.glitches?'ON':'OFF'}</button></article><article class="archive-card"><strong>PARTÍCULAS</strong><p>Reduz o peso visual da interface.</p><button class="btn btn-secondary" data-setting="particles">${SETTINGS.particles?'ON':'OFF'}</button></article><article class="archive-card"><strong>TEXTO RÁPIDO</strong><p>Pula o typewriter.</p><button class="btn btn-secondary" data-setting="fastText">${SETTINGS.fastText?'ON':'OFF'}</button></article><article class="archive-card"><strong>HISTÓRICO</strong><p>Apaga todas as simulações armazenadas.</p><button class="btn btn-secondary" id="clear-history">APAGAR</button></article></div>`;openModal(content);$$('[data-setting]',DOM.modalContent).forEach(btn=>btn.addEventListener('click',()=>{const key=btn.dataset.setting;SETTINGS[key]=!SETTINGS[key];savePersistent();openSettings()}));$('#clear-history',DOM.modalContent)?.addEventListener('click',()=>{if(confirm('Apagar todo o histórico?')){localStorage.removeItem(CONFIG.historyStorage);toast('HISTÓRICO APAGADO','Banco limpo.');openSettings()}})}
function openModal(content,mini=false){DOM.modalContent.innerHTML='';if(typeof content==='string')DOM.modalContent.innerHTML=content;else DOM.modalContent.appendChild(content);DOM.modalRoot.classList.remove('hidden');}
function closeModal(){DOM.modalRoot.classList.add('hidden');DOM.modalContent.innerHTML='';}

function toast(title,message){const t=document.createElement('div');t.className='toast';t.innerHTML=`<strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span>`;DOM.toast.appendChild(t);setTimeout(()=>t.remove(),3500)}
function alertShake(){DOM.screenFlash.classList.remove('active');void DOM.screenFlash.offsetWidth;DOM.screenFlash.classList.add('active')}
function createChoiceBurst(el){const r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;for(let i=0;i<24;i++){const p=document.createElement('span');p.style.cssText=`position:fixed;left:${cx}px;top:${cy}px;width:3px;height:3px;border-radius:50%;background:${i%3===0?'#8d4dff':'#00eaff'};box-shadow:0 0 8px currentColor;pointer-events:none;z-index:800`;p.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${Math.cos(i/24*Math.PI*2)*rand(50,160)}px,${Math.sin(i/24*Math.PI*2)*rand(50,160)}px) scale(0)`,opacity:0}],{duration:750,easing:'cubic-bezier(.16,1,.3,1)'});document.body.appendChild(p);setTimeout(()=>p.remove(),800)}}
function spawnButtonSparks(el){if(!SETTINGS.particles)return;for(let i=0;i<3;i++){const p=document.createElement('span');const r=el.getBoundingClientRect();p.style.cssText=`position:fixed;left:${rand(r.left,r.right)}px;top:${rand(r.top,r.bottom)}px;width:2px;height:2px;background:#00eaff;pointer-events:none;z-index:700`;document.body.appendChild(p);p.animate([{opacity:.8},{transform:`translate(${rand(-15,15)}px,${rand(-15,15)}px)`,opacity:0}],{duration:450});setTimeout(()=>p.remove(),500)}}
function createFinalBurst(){if(!SETTINGS.particles)return;for(let i=0;i<110;i++){const p=document.createElement('span');const angle=Math.random()*Math.PI*2,d=rand(100,650);p.style.cssText=`position:fixed;left:50%;top:50%;width:${rand(1,3)}px;height:${rand(1,3)}px;border-radius:50%;background:#00eaff;box-shadow:0 0 10px #00eaff;pointer-events:none;z-index:60`;p.animate([{transform:'translate(0,0)',opacity:1},{transform:`translate(${Math.cos(angle)*d}px,${Math.sin(angle)*d}px)`,opacity:0}],{duration:rand(900,1700),easing:'cubic-bezier(.16,1,.3,1)'});document.body.appendChild(p);setTimeout(()=>p.remove(),1800)}}

function startAmbientClock(){clearInterval(clockTimer);const tick=()=>{const elapsed=GAME.startedAt?Date.now()-GAME.startedAt:0;const f=new Date();const now=`${String(f.getHours()).padStart(2,'0')}:${String(f.getMinutes()).padStart(2,'0')}:${String(f.getSeconds()).padStart(2,'0')}`;DOM.clock.textContent=now;DOM.shipClock.textContent=GAME.startedAt?formatClock(elapsed):now};tick();clockTimer=setInterval(tick,1000)}
function formatClock(ms){const s=Math.floor(ms/1000),h=Math.floor(s/3600),m=Math.floor((s%3600)/60),x=s%60;return`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(x).padStart(2,'0')}`}

function initAudio(){if(!SETTINGS.sound||audioCtx)return;try{audioCtx=new(window.AudioContext||window.webkitAudioContext)()}catch{audioCtx=null}}
function sound(type= 'click',volume=.03){if(!SETTINGS.sound||!audioCtx)return;try{if(audioCtx.state==='suspended')audioCtx.resume();const osc=audioCtx.createOscillator(),gain=audioCtx.createGain();osc.connect(gain);gain.connect(audioCtx.destination);const freq={boot:420,hover:500,select:720,achievement:880,alert:180,complete:520,click:600}[type]||400;osc.frequency.value=freq;osc.type=type==='alert'?'sawtooth':'sine';const now=audioCtx.currentTime;gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(volume,now+.01);gain.gain.exponentialRampToValueAtTime(.0001,now+(type==='achievement'?.28:.14));osc.start(now);osc.stop(now+(type==='achievement'?.3:.16))}catch{}}

let starCanvas,starCtx,stars=[],particleCanvas,particleCtx,particles=[];
function setupCanvas(){starCanvas=$('#space-canvas');starCtx=starCanvas?.getContext('2d');particleCanvas=$('#particle-canvas');particleCtx=particleCanvas?.getContext('2d');resizeCanvas();for(let i=0;i<180;i++)stars.push({x:Math.random(),y:Math.random(),r:rand(.2,1.5),a:rand(.2,1),s:rand(.00003,.00025)});for(let i=0;i<55;i++)particles.push({x:Math.random(),y:Math.random(),vx:rand(-.0002,.0002),vy:rand(-.00012,.00012),r:rand(.3,1.2),a:rand(.1,.45)});requestAnimationFrame(animateCanvas)}
function resizeCanvas(){for(const c of [starCanvas,particleCanvas])if(c){c.width=innerWidth*devicePixelRatio;c.height=innerHeight*devicePixelRatio;c.style.width=`${innerWidth}px`;c.style.height=`${innerHeight}px`;c.getContext('2d').setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}}
function animateCanvas(){if(starCtx){starCtx.clearRect(0,0,innerWidth,innerHeight);stars.forEach(s=>{s.y-=s.s;if(s.y<0)s.y=1;starCtx.beginPath();starCtx.arc(s.x*innerWidth,s.y*innerHeight,s.r,0,Math.PI*2);starCtx.fillStyle=`rgba(180,240,255,${s.a})`;starCtx.fill()})}if(particleCtx&&SETTINGS.particles){particleCtx.clearRect(0,0,innerWidth,innerHeight);particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>1)p.vx*=-1;if(p.y<0||p.y>1)p.vy*=-1;particleCtx.beginPath();particleCtx.arc(p.x*innerWidth,p.y*innerHeight,p.r,0,Math.PI*2);particleCtx.fillStyle=`rgba(0,234,255,${p.a})`;particleCtx.fill()})}requestAnimationFrame(animateCanvas)}

function setupCursor(){if(matchMedia('(pointer:fine)').matches){document.body.classList.add('cursor-ready');let tx=-100,ty=-100,x=-100,y=-100;document.addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY});const loop=()=>{x+=(tx-x)*.18;y+=(ty-y)*.18;DOM.cursor.style.transform=`translate3d(${x}px,${y}px,0)`;requestAnimationFrame(loop)};loop()}}

function setupEvents(){
 DOM.btnInit.addEventListener('click',startExperience);$('#btn-restart').addEventListener('click',()=>startSimulation(false));$('#btn-new-game').addEventListener('click',()=>startSimulation(true));$('#btn-database').addEventListener('click',openDatabase);$('#btn-achievements').addEventListener('click',()=>{modalTab='achievements';openDatabase()});$('#btn-quests').addEventListener('click',()=>{modalTab='quests';openDatabase()});$('#btn-terminal').addEventListener('click',openTerminal);$('#btn-settings').addEventListener('click',openSettings);$('#btn-report-database').addEventListener('click',openDatabase);DOM.modalClose.addEventListener('click',closeModal);DOM.modalBackdrop.addEventListener('click',closeModal);
 document.addEventListener('keydown',e=>{if(e.code==='Space'){if(skipTyping())e.preventDefault()}if(['1','2','3'].includes(e.key)&&!GAME.typing&&!GAME.choiceLocked){const b=$(`.choice-btn:nth-child(${e.key})`);b?.click()}if(e.key==='Escape')closeModal()});window.addEventListener('resize',resizeCanvas);window.addEventListener('beforeunload',()=>{if(!GAME.completed)saveRun()});document.addEventListener('click',()=>initAudio(),{once:true});
 autosaveTimer=setInterval(()=>{if(GAME.decisions>0&&!GAME.completed)saveRun()},CONFIG.autosaveMs);
}

function escapeHtml(text){return String(text).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

window.AEGIS={GAME,STATS,STORY,ACHIEVEMENTS,QUESTS,ARCHIVES,startSimulation,renderNode,openDatabase,openTerminal,launchMinigame,unlockAchievement,toast};

boot();
