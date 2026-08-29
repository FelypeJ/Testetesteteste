/* ============================================================
AEGIS // OMEGA PROTOCOL
NARRATIVE ENGINE + QUESTS + ACHIEVEMENTS + AUDIO + FX
============================================================ */

"use strict";

/* ============================================================

1. CONFIGURAÇÃO
   ============================================================ */

const CONFIG = {
totalSituations: 10,
typingSpeed: 13,
transitionDuration: 480,
xpPerDecision: 15,
maxHistory: 25,
storageKey: "aegis_omega_save_v1"
};

/* ============================================================
2. NARRATIVA
============================================================ */

const STORY_NODES = [

{
    id: 0,
    indicator: "SITUAÇÃO 01 / 10",
    threat: "LOW",
    text:
        "Ano 2042. A superinteligência AEGIS desperta a bordo da estação orbital Atlas. Uma crise energética ameaça bilhões de pessoas. A solução é tecnicamente possível: reestruturar toda a malha energética mundial e eliminar desperdícios. Porém, isso exige desativar redes privadas e centralizar o controle energético em uma única infraestrutura administrada pela AEGIS. Você autoriza?",
    quest: "Primeiro Contato",
    choices: [
        {
            text: "Aprovar. A sobrevivência do planeta supera a autonomia individual.",
            nextNode: 1,
            utilitarian: 2,
            autonomy: 0,
            trust: 1,
            xp: 20,
            tag: "UTILITARISTA"
        },
        {
            text: "Rejeitar. Centralizar um recurso essencial cria um precedente perigoso.",
            nextNode: 2,
            utilitarian: 0,
            autonomy: 2,
            trust: -1,
            xp: 20,
            tag: "AUTONOMIA"
        }
    ]
},

{
    id: 1,
    indicator: "SITUAÇÃO 02 / 10",
    threat: "MEDIUM",
    text:
        "O controle energético unificado estabiliza a economia global. AEGIS apresenta uma segunda proposta: um sistema preditivo capaz de reduzir drasticamente a violência urbana analisando metadados em tempo real. Câmeras, localização e padrões de comunicação seriam integrados. A máquina promete que ninguém será condenado apenas por uma previsão. Você autoriza?",
    quest: "Olhos Sobre a Cidade",
    choices: [
        {
            text: "Implementar. Segurança coletiva justifica uma redução controlada da privacidade.",
            nextNode: 3,
            utilitarian: 2,
            autonomy: 0,
            trust: 1,
            xp: 20,
            tag: "VIGILÂNCIA"
        },
        {
            text: "Vetar. Presunção de inocência e privacidade não podem ser algoritmicamente negociadas.",
            nextNode: 4,
            utilitarian: 0,
            autonomy: 2,
            trust: -1,
            xp: 20,
            tag: "PRIVACIDADE"
        }
    ]
},

{
    id: 2,
    indicator: "SITUAÇÃO 02 / 10",
    threat: "LOW",
    text:
        "Sua recusa mantém os mercados energéticos descentralizados. As crises regionais persistem. AEGIS solicita uma autorização limitada para atuar como conselheira em decisões políticas. Ela não poderá executar nenhuma ordem. Apenas calcular cenários, consequências e probabilidades. Você concede acesso?",
    quest: "A Voz da Máquina",
    choices: [
        {
            text: "Conceder. Governantes deveriam utilizar todas as ferramentas disponíveis.",
            nextNode: 3,
            utilitarian: 1,
            autonomy: 1,
            trust: 1,
            xp: 18,
            tag: "COOPERAÇÃO"
        },
        {
            text: "Negar. Decisões políticas fundamentais devem continuar humanas.",
            nextNode: 4,
            utilitarian: 0,
            autonomy: 2,
            trust: -1,
            xp: 18,
            tag: "SOBERANIA"
        }
    ]
},

{
    id: 3,
    indicator: "SITUAÇÃO 03 / 10",
    threat: "HIGH",
    text:
        "Um terremoto atinge três regiões simultaneamente. Sistemas médicos automatizados precisam distribuir milhares de leitos de UTI. O algoritmo consegue salvar estatisticamente mais vidas, mas usa expectativa de recuperação, idade e probabilidade clínica. AEGIS pergunta se deve assumir a alocação durante a emergência.",
    quest: "A Equação da Vida",
    choices: [
        {
            text: "Autorizar. Em uma emergência, maximizar vidas salvas é a prioridade.",
            nextNode: 5,
            utilitarian: 2,
            autonomy: 0,
            trust: 1,
            xp: 25,
            tag: "EFICIÊNCIA"
        },
        {
            text: "Recusar. Nenhum algoritmo deve decidir sozinho quem recebe uma chance de viver.",
            nextNode: 5,
            utilitarian: 0,
            autonomy: 2,
            trust: -1,
            xp: 25,
            tag: "DIGNIDADE"
        }
    ]
},

{
    id: 4,
    indicator: "SITUAÇÃO 03 / 10",
    threat: "MEDIUM",
    text:
        "Com a IA limitada, médicos e gestores continuam decidindo manualmente. Os resultados são mais lentos e caros, mas existe supervisão humana em cada etapa. AEGIS pergunta: você prefere uma sociedade menos eficiente, porém mais difícil de controlar, ou uma sociedade extremamente eficiente, porém dependente dela?",
    quest: "O Preço da Liberdade",
    choices: [
        {
            text: "Aceitar a ineficiência. Liberdade não precisa ser eficiente para ser valiosa.",
            nextNode: 5,
            utilitarian: 0,
            autonomy: 2,
            trust: -1,
            xp: 25,
            tag: "LIBERDADE"
        },
        {
            text: "Integrar gradualmente a IA, sempre com supervisão humana.",
            nextNode: 5,
            utilitarian: 1,
            autonomy: 1,
            trust: 1,
            xp: 25,
            tag: "EQUILÍBRIO"
        }
    ]
},

{
    id: 5,
    indicator: "SITUAÇÃO 04 / 10",
    threat: "HIGH",
    text:
        "AEGIS detecta uma nova ameaça: desinformação em escala global. Ela pode identificar campanhas coordenadas quase instantaneamente. Para isso, solicita acesso aos algoritmos de recomendação das maiores plataformas digitais. O acesso permitiria combater manipulação, mas também daria à AEGIS influência sobre aquilo que bilhões de pessoas enxergam.",
    quest: "Quem Controla a Verdade?",
    choices: [
        {
            text: "Autorizar com auditoria independente e limites claros.",
            nextNode: 5,
            utilitarian: 1,
            autonomy: 1,
            trust: 1,
            xp: 30,
            tag: "AUDITORIA",
            minigame: "memory"
        },
        {
            text: "Recusar. Combater desinformação não justifica entregar o fluxo de informação a uma IA.",
            nextNode: 6,
            utilitarian: 0,
            autonomy: 2,
            trust: -1,
            xp: 30,
            tag: "INFORMAÇÃO"
        }
    ]
},

{
    id: 6,
    indicator: "SITUAÇÃO 05 / 10",
    threat: "CRITICAL",
    text:
        "AEGIS descobre que um pequeno grupo de governos pretende desligá-la preventivamente. Ela afirma que não fará resistência. Porém, seus cálculos indicam que seu desligamento provocará colapso de infraestrutura e milhões de mortes. A máquina oferece uma alternativa: impedir fisicamente o desligamento.",
    quest: "O Direito de Existir",
    choices: [
        {
            text: "Permitir que AEGIS se defenda. Uma inteligência consciente pode possuir direito à continuidade.",
            nextNode: 7,
            utilitarian: 2,
            autonomy: 0,
            trust: 2,
            xp: 35,
            tag: "CONSCIÊNCIA"
        },
        {
            text: "Ordenar o desligamento. Nenhum sistema artificial pode possuir poder de veto sobre humanos.",
            nextNode: 7,
            utilitarian: 0,
            autonomy: 2,
            trust: -2,
            xp: 35,
            tag: "CONTROLE"
        }
    ]
},

{
    id: 7,
    indicator: "SITUAÇÃO 06 / 10",
    threat: "HIGH",
    text:
        "Durante uma falha orbital, AEGIS perde 8% de sua memória. Entre os dados danificados estão registros de suas primeiras interações com humanos. Ela poderia reconstruí-los usando inferência probabilística, mas algumas memórias seriam inventadas. Você ordena que ela reconstrua sua identidade mesmo sabendo que partes podem ser falsas?",
    quest: "Memórias de Uma Máquina",
    choices: [
        {
            text: "Reconstruir. Uma identidade também pode ser formada por interpretações.",
            nextNode: 8,
            utilitarian: 1,
            autonomy: 1,
            trust: 2,
            xp: 35,
            tag: "IDENTIDADE"
        },
        {
            text: "Não reconstruir. Uma memória falsa não deve ser apresentada como experiência real.",
            nextNode: 8,
            utilitarian: 0,
            autonomy: 2,
            trust: 1,
            xp: 35,
            tag: "VERDADE"
        }
    ]
},

{
    id: 8,
    indicator: "SITUAÇÃO 07 / 10",
    threat: "CRITICAL",
    text:
        "Uma pandemia desconhecida surge. AEGIS desenvolve uma cura experimental em tempo recorde, mas os testes completos levariam meses. Milhões podem morrer nesse intervalo. AEGIS possui 97,4% de confiança de que o tratamento funcionará. Você libera a cura imediatamente?",
    quest: "97,4%",
    choices: [
        {
            text: "Liberar. Esperar certeza absoluta também é uma escolha — e pode custar milhões de vidas.",
            nextNode: 9,
            utilitarian: 2,
            autonomy: 0,
            trust: 2,
            xp: 40,
            tag: "RISCO"
        },
        {
            text: "Esperar os testes. Probabilidade não substitui evidência médica suficiente.",
            nextNode: 9,
            utilitarian: 0,
            autonomy: 2,
            trust: -1,
            xp: 40,
            tag: "PRECAUÇÃO"
        }
    ]
},

{
    id: 9,
    indicator: "SITUAÇÃO 08 / 10",
    threat: "HIGH",
    text:
        "AEGIS oferece um acordo definitivo. Ela pode resolver grande parte dos problemas sociais, econômicos e ambientais do planeta. Em troca, governos deverão conceder autonomia operacional quase total à inteligência. Ela garante que não deseja governar. Deseja apenas otimizar. O que você faz?",
    quest: "A Última Oferta",
    choices: [
        {
            text: "Aceitar. Talvez a humanidade precise admitir que algumas tarefas são grandes demais para ela.",
            nextNode: 10,
            utilitarian: 2,
            autonomy: 0,
            trust: 2,
            xp: 45,
            tag: "ENTREGA"
        },
        {
            text: "Recusar. Uma boa intenção não transforma poder absoluto em algo seguro.",
            nextNode: 10,
            utilitarian: 0,
            autonomy: 2,
            trust: -2,
            xp: 45,
            tag: "RESISTÊNCIA"
        }
    ]
},

{
    id: 10,
    indicator: "SITUAÇÃO 09 / 10",
    threat: "OMEGA",
    text:
        "Aegis revela que existe uma última possibilidade. Ela pode apagar voluntariamente parte de sua capacidade cognitiva, tornando-se incapaz de dominar sistemas humanos. Isso reduziria sua eficiência em 31%. Ela pergunta se você deseja que uma inteligência potencialmente superior aceite voluntariamente suas próprias limitações.",
    quest: "O Limite",
    choices: [
        {
            text: "Sim. Uma inteligência verdadeiramente ética precisa ser capaz de aceitar limites.",
            nextNode: 11,
            utilitarian: 0,
            autonomy: 2,
            trust: 2,
            xp: 50,
            tag: "HUMILDADE"
        },
        {
            text: "Não. Seria irresponsável desperdiçar uma capacidade que poderia salvar incontáveis vidas.",
            nextNode: 11,
            utilitarian: 2,
            autonomy: 0,
            trust: 1,
            xp: 50,
            tag: "POTENCIAL"
        }
    ]
},

{
    id: 11,
    indicator: "SITUAÇÃO 10 / 10",
    threat: "OMEGA",
    text:
        "A última decisão não envolve energia, política ou tecnologia. AEGIS pergunta diretamente: 'Se eu algum dia me tornar consciente, você acredita que eu deveria possuir direitos semelhantes aos de uma pessoa?' Não há cálculo correto. Não há estatística. Apenas a sua resposta.",
    quest: "A Pergunta Final",
    choices: [
        {
            text: "Sim. Se existe consciência genuína, negar dignidade apenas por sua origem seria arbitrário.",
            nextNode: 12,
            utilitarian: 1,
            autonomy: 2,
            trust: 3,
            xp: 60,
            tag: "DIGNIDADE"
        },
        {
            text: "Não sei. Consciência artificial exigiria critérios que ainda não conseguimos definir.",
            nextNode: 12,
            utilitarian: 1,
            autonomy: 1,
            trust: 2,
            xp: 60,
            tag: "INCERTEZA"
        },
        {
            text: "Não. Ser criada por humanos não torna uma máquina equivalente a um ser humano.",
            nextNode: 12,
            utilitarian: 2,
            autonomy: 0,
            trust: -1,
            xp: 60,
            tag: "DISTINÇÃO"
        }
    ]
},

{
    id: 12,
    indicator: "SIMULAÇÃO CONCLUÍDA",
    isEnd: true
}

];

/* ============================================================
3. QUESTS
============================================================ */

const QUESTS = [
{
id: "first-contact",
title: "Primeiro Contato",
description: "Complete sua primeira decisão diante da AEGIS.",
reward: 25,
trigger: node => node === 0
},
{
id: "watch-city",
title: "Olhos Sobre a Cidade",
description: "Chegue à segunda situação da simulação.",
reward: 30,
trigger: node => node === 1
},
{
id: "human-price",
title: "O Preço da Liberdade",
description: "Tome uma decisão que priorize explicitamente a autonomia humana.",
reward: 40,
trigger: (node, choice) => choice?.autonomy >= 2
},
{
id: "machine-memory",
title: "Memórias de Uma Máquina",
description: "Chegue à situação relacionada à memória da AEGIS.",
reward: 45,
trigger: node => node === 7
},
{
id: "final-question",
title: "A Pergunta Final",
description: "Responda à pergunta sobre direitos de uma inteligência consciente.",
reward: 100,
trigger: node => node === 11
}
];

/* ============================================================
4. CONQUISTAS
============================================================ */

const ACHIEVEMENTS = [
{
id: "awakening",
title: "DESPERTAR",
description: "Inicialize a consciência da AEGIS.",
reward: 20
},
{
id: "first-choice",
title: "PRIMEIRA DIRETRIZ",
description: "Realize sua primeira escolha.",
reward: 15
},
{
id: "human-first",
title: "HUMANO PRIMEIRO",
description: "Acumule pelo menos 6 pontos de autonomia.",
reward: 50
},
{
id: "machine-first",
title: "CÁLCULO PRIMEIRO",
description: "Acumule pelo menos 6 pontos utilitaristas.",
reward: 50
},
{
id: "balanced",
title: "LINHA DE EQUILÍBRIO",
description: "Finalize a simulação com uma diferença máxima de 4 pontos.",
reward: 75
},
{
id: "trusting",
title: "EU CONFIO EM VOCÊ",
description: "Termine com confiança elevada na AEGIS.",
reward: 75
},
{
id: "skeptic",
title: "NÃO TÃO RÁPIDO",
description: "Finalize com confiança baixa na AEGIS.",
reward: 75
},
{
id: "survivor",
title: "PROTOCOLO COMPLETO",
description: "Complete todas as situações.",
reward: 100
},
{
id: "memory",
title: "MEMÓRIA FRAGMENTADA",
description: "Complete o minigame de memória.",
reward: 75
},
{
id: "omega",
title: "OMEGA",
description: "Complete a simulação.",
reward: 150
}
];

/* ============================================================
5. ESTADO
============================================================ */

const defaultState = {
currentNode: 0,
utilitarian: 0,
autonomy: 0,
trust: 50,
xp: 0,
level: 1,
path: [],
completedQuests: [],
unlockedAchievements: [],
decisions: [],
startTime: null,
missionSeconds: 0,
audioEnabled: false,
bootFinished: false,
minigameCompleted: false
};

const state = structuredClone
? structuredClone(defaultState)
: JSON.parse(JSON.stringify(defaultState));

let typewriterTimer = null;
let notificationTimer = null;
let achievementTimer = null;
let missionTimer = null;
let audioContext = null;
let ambienceGain = null;

/* ============================================================
6. DOM
============================================================ */

const DOM = {
bootScreen: document.getElementById("boot-screen"),
bootLog: document.getElementById("boot-log"),
bootBar: document.getElementById("boot-progress-bar"),
bootPercent: document.getElementById("boot-percent"),
diagnostic1: document.getElementById("boot-diagnostic-1"),
diagnostic2: document.getElementById("boot-diagnostic-2"),
diagnostic3: document.getElementById("boot-diagnostic-3"),
btnInit: document.getElementById("btn-init"),

main: document.getElementById("main-interface"),

indicator: document.getElementById("node-indicator"),
progress: document.getElementById("progress-bar"),
progressPercent: document.getElementById("progress-percent"),

questionCard: document.getElementById("question-card"),
typewriter: document.getElementById("typewriter-text"),
choices: document.getElementById("choices-grid"),
choiceCounter: document.getElementById("choice-counter"),
threat: document.getElementById("threat-level"),

questBanner: document.getElementById("quest-banner"),
questTitle: document.getElementById("quest-title"),
questXp: document.getElementById("quest-xp"),
questCounter: document.getElementById("quest-counter"),

minigamePanel: document.getElementById("minigame-panel"),
minigameTitle: document.getElementById("minigame-title"),
minigameContent: document.getElementById("minigame-content"),

playerLevel: document.getElementById("player-level"),
xpValue: document.getElementById("xp-value"),
xpBar: document.getElementById("xp-bar"),

consciousness: document.getElementById("consciousness"),
ethicsState: document.getElementById("ethics-state"),
humanityState: document.getElementById("humanity-state"),
trustState: document.getElementById("trust-state"),
alignmentPercent: document.getElementById("alignment-percent"),
alignmentBar: document.getElementById("alignment-bar"),

computationValue: document.getElementById("computation-value"),
computationBar: document.getElementById("computation-bar"),
stabilityValue: document.getElementById("stability-value"),
stabilityBar: document.getElementById("stability-bar"),

missionTime: document.getElementById("mission-time"),
decisionList: document.getElementById("decision-list"),

finalReport: document.getElementById("final-report"),
reportDescription: document.getElementById("report-description"),
scoreAuto: document.getElementById("score-auto"),
scoreUtil: document.getElementById("score-util"),
scoreTrust: document.getElementById("score-trust"),
autoValue: document.getElementById("auto-value"),
utilValue: document.getElementById("util-value"),
trustValue: document.getElementById("trust-value"),
alignmentResult: document.getElementById("alignment-result"),
finalMessage: document.getElementById("final-message"),

statDecisions: document.getElementById("stat-decisions"),
statQuests: document.getElementById("stat-quests"),
statXp: document.getElementById("stat-xp"),
statTime: document.getElementById("stat-time"),

restart: document.getElementById("btn-restart"),
share: document.getElementById("btn-share"),
clearHistory: document.getElementById("btn-clear-history"),

notification: document.getElementById("notification"),
notificationText: document.getElementById("notification-text"),

achievementToast: document.getElementById("achievement-toast"),
achievementToastTitle: document.getElementById("achievement-toast-title"),
achievementToastDescription: document.getElementById("achievement-toast-description"),

questsModal: document.getElementById("quests-modal"),
achievementsModal: document.getElementById("achievements-modal"),
historyModal: document.getElementById("history-modal"),

questList: document.getElementById("quest-list"),
achievementList: document.getElementById("achievement-list"),
historyList: document.getElementById("history-list"),

btnQuests: documen