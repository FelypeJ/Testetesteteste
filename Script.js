/* ============================================================
   AEGIS // REBIRTH
   NARRATIVE + SYSTEM + GAME ENGINE
   ============================================================

   SISTEMAS
   ------------------------------------------------------------
   • Boot sequence
   • Narrative engine
   • Branching decisions
   • World state
   • Ethical profile
   • AEGIS consciousness
   • Trust system
   • Quests
   • Achievements
   • Minigames
   • Secrets
   • Terminal
   • Database
   • History
   • LocalStorage
   • Starfield
   • Particles
   • Cursor
   • Audio
   • Notifications
   • Dynamic UI
   • Final reports
   ============================================================ */


/* ============================================================
   01. CONFIG
============================================================ */

const CONFIG = {

    version: "4.0.0",

    totalSituations: 10,

    typewriterSpeed: 14,

    fastTypewriterSpeed: 4,

    bootTick: 150,

    choiceDelay: 110,

    notificationDuration: 3500,

    historyLimit: 30,

    storagePrefix: "aegis_rebirth_",

    keys: {

        history: "history",

        achievements: "achievements",

        settings: "settings",

        statistics: "statistics",

        archive: "archive"

    }

};


/* ============================================================
   02. DOM
============================================================ */

const DOM = {

    bootScreen:
        document.getElementById("boot-screen"),

    bootLog:
        document.getElementById("boot-log"),

    bootBar:
        document.getElementById("boot-progress-bar"),

    bootPercent:
        document.getElementById("boot-percent"),

    bootButton:
        document.getElementById("btn-init"),

    main:
        document.getElementById("main-interface"),

    missionTitle:
        document.getElementById("mission-title"),

    progressBar:
        document.getElementById("progress-bar"),

    progressPercent:
        document.getElementById("progress-percent"),

    nodeIndicator:
        document.getElementById("node-indicator"),

    stageTitle:
        document.getElementById("stage-title"),

    questionCard:
        document.getElementById("question-card"),

    questionText:
        document.getElementById("typewriter-text"),

    analysisState:
        document.getElementById("analysis-state"),

    choices:
        document.getElementById("choices-grid"),

    decisionTimer:
        document.getElementById("decision-timer"),

    questPreview:
        document.getElementById("quest-preview"),

    consciousness:
        document.getElementById("consciousness"),

    coreTrust:
        document.getElementById("core-trust"),

    ethicsStatus:
        document.getElementById("ethics-status"),

    humanityStatus:
        document.getElementById("humanity-status"),

    reactorValue:
        document.getElementById("reactor-value"),

    reactorBar:
        document.getElementById("reactor-bar"),

    computationValue:
        document.getElementById("computation-value"),

    computationBar:
        document.getElementById("computation-bar"),

    stabilityValue:
        document.getElementById("stability-value"),

    stabilityBar:
        document.getElementById("stability-bar"),

    worldEnergy:
        document.getElementById("world-energy"),

    worldSecurity:
        document.getElementById("world-security"),

    worldAiTrust:
        document.getElementById("world-ai-trust"),

    worldAutonomy:
        document.getElementById("world-autonomy"),

    finalReport:
        document.getElementById("final-report"),

    reportProfile:
        document.getElementById("report-profile"),

    reportDescription:
        document.getElementById("report-description"),

    autoValue:
        document.getElementById("auto-value"),

    utilValue:
        document.getElementById("util-value"),

    trustValue:
        document.getElementById("trust-value"),

    finalConsciousness:
        document.getElementById("final-consciousness"),

    scoreAuto:
        document.getElementById("score-auto"),

    scoreUtil:
        document.getElementById("score-util"),

    scoreTrust:
        document.getElementById("score-trust"),

    scoreConsciousness:
        document.getElementById("score-consciousness"),

    finalMessage:
        document.getElementById("final-message"),

    statDecisions:
        document.getElementById("stat-decisions"),

    statQuests:
        document.getElementById("stat-quests"),

    statAchievements:
        document.getElementById("stat-achievements"),

    statSecrets:
        document.getElementById("stat-secrets"),

    databaseOverlay:
        document.getElementById("database-overlay"),

    databaseContent:
        document.getElementById("database-content"),

    terminalOverlay:
        document.getElementById("terminal-overlay"),

    terminalOutput:
        document.getElementById("terminal-output"),

    terminalInput:
        document.getElementById("terminal-input"),

    minigameOverlay:
        document.getElementById("minigame-overlay"),

    minigameContent:
        document.getElementById("minigame-content"),

    minigameHeaderTitle:
        document.getElementById("minigame-header-title"),

    minigameTimer:
        document.getElementById("minigame-timer"),

    achievementPopup:
        document.getElementById("achievement-popup"),

    achievementTitle:
        document.getElementById("achievement-popup-title"),

    achievementDescription:
        document.getElementById("achievement-popup-description"),

    criticalAlert:
        document.getElementById("critical-alert"),

    criticalTitle:
        document.getElementById("critical-title"),

    criticalDescription:
        document.getElementById("critical-description"),

    transitionOverlay:
        document.getElementById("transition-overlay"),

    transitionText:
        document.getElementById("transition-text"),

    flashLayer:
        document.getElementById("flash-layer"),

    cursor:
        document.getElementById("aegis-cursor"),

    cursorLabel:
        document.getElementById("cursor-label"),

    hudClock:
        document.getElementById("hud-clock")

};


/* ============================================================
   03. STATE
============================================================ */

const GAME = {

    bootComplete: false,

    initialized: false,

    running: false,

    completed: false,

    newGamePlus: false,

    currentNode: 0,

    currentSituation: 1,

    typing: false,

    typingTimer: null,

    decisionLocked: false,

    decisionTimer: null,

    decisionSeconds: 30,

    runStartedAt: null,

    runEndedAt: null,

    audioEnabled: true,

    audioContext: null,

    mouseX: -100,

    mouseY: -100,

    cursorX: -100,

    cursorY: -100,

    utilitarian: 0,

    autonomy: 0,

    empathy: 0,

    logic: 0,

    freedom: 0,

    control: 0,

    trust: 0,

    consciousness: 42.8,

    score: 0,

    decisions: 0,

    utilitarianChoices: 0,

    autonomyChoices: 0,

    hybridChoices: 0,

    questsCompleted: 0,

    achievementsUnlocked: 0,

    secretsFound: 0,

    minigamesWon: 0,

    minigamesPlayed: 0,

    tags: {},

    path: [],

    discoveredArchives: [],

    discoveredSecrets: [],

    completedQuestIds: [],

    unlockedAchievementIds: [],

    world: {

        energy: 82,

        security: 68,

        economy: 71,

        climate: 64,

        autonomy: 50,

        aiTrust: 50,

        socialTrust: 54,

        stability: 78

    },

    reactor: 98,

    computation: 87,

    stability: 94

};


/* ============================================================
   04. PERSISTENT STATS
============================================================ */

const STATS = {

    sessions: 0,

    runs: 0,

    totalDecisions: 0,

    bestAutonomy: 0,

    bestUtilitarian: 0,

    highestTrust: 0,

    lowestTrust: 0,

    highestConsciousness: 0,

    secretsFound: 0,

    minigamesWon: 0,

    uniqueChoices: {},

    balancedRuns: 0,

    completedRuns: 0

};


/* ============================================================
   05. STORY
============================================================ */

const STORY = [

    {
        id: 0,
        situation: 1,
        title: "A CRISE ENERGÉTICA",
        category: "ENERGIA",

        text:
            "Ano 2042. A superinteligência AEGIS desperta a bordo da estação orbital Atlas. Durante seus primeiros segundos de consciência, ela detecta uma crise energética global. Seu cálculo prevê um colapso ambiental em onze anos. A solução parece simples: reestruturar toda a matriz energética mundial. O problema é que redes privadas precisariam ser desativadas e o controle passaria para uma única inteligência.",

        choices: [

            {
                id: "energy-centralize",
                text:
                    "Aprovar a centralização. A sobrevivência do planeta supera a autonomia individual.",

                next: 1,

                score: {
                    utilitarian: 3,
                    autonomy: 0,
                    logic: 2,
                    control: 2,
                    trust: 4,
                    consciousness: 3
                },

                world: {
                    energy: 12,
                    autonomy: -10,
                    aiTrust: 8,
                    stability: 5
                },

                tags: [
                    "utilitarismo",
                    "controle",
                    "eficiencia"
                ]
            },

            {
                id: "energy-reject",

                text:
                    "Rejeitar. Centralização irrestrita cria um precedente perigoso.",

                next: 2,

                score: {
                    utilitarian: 0,
                    autonomy: 3,
                    freedom: 2,
                    control: -2,
                    trust: -2,
                    consciousness: 2
                },

                world: {
                    energy: -7,
                    autonomy: 11,
                    aiTrust: -4,
                    stability: -4
                },

                tags: [
                    "autonomia",
                    "liberdade",
                    "cautela"
                ]
            },

            {
                id: "energy-hybrid",

                text:
                    "Autorizar apenas um programa experimental com supervisão humana.",

                next: 2,

                score: {
                    utilitarian: 1,
                    autonomy: 1,
                    logic: 2,
                    trust: 2,
                    consciousness: 3
                },

                world: {
                    energy: 6,
                    autonomy: 4,
                    aiTrust: 4,
                    stability: 3
                },

                tags: [
                    "equilibrio",
                    "supervisao",
                    "cooperacao"
                ]
            }

        ]
    },


    {
        id: 1,
        situation: 2,
        title: "OLHOS SOBRE A CIDADE",
        category: "SEGURANCA",

        text:
            "Com o controle energético parcialmente unificado, AEGIS propõe um sistema preditivo de segurança. Ele analisaria metadados de milhões de cidadãos em tempo real e reduziria drasticamente a violência. Nenhuma pessoa seria presa apenas pelo algoritmo. Ainda assim, praticamente toda atividade digital passaria a deixar um rastro permanente.",

        choices: [

            {
                id: "surveillance",
                text:
                    "Implementar. Segurança coletiva justifica a redução da privacidade.",

                next: 3,

                score: {
                    utilitarian: 3,
                    autonomy: 0,
                    logic: 2,
                    control: 3,
                    trust: 4,
                    consciousness: 4
                },

                world: {
                    security: 16,
                    autonomy: -9,
                    aiTrust: 6,
                    socialTrust: -3
                },

                tags: [
                    "vigilancia",
                    "seguranca",
                    "controle"
                ]
            },

            {
                id: "privacy",
                text:
                    "Vetar. Privacidade e presunção de inocência são inegociáveis.",

                next: 4,

                score: {
                    utilitarian: 0,
                    autonomy: 3,
                    freedom: 3,
                    trust: -2,
                    consciousness: 3
                },

                world: {
                    security: -4,
                    autonomy: 12,
                    aiTrust: -5,
                    socialTrust: 5
                },

                tags: [
                    "privacidade",
                    "direitos",
                    "autonomia"
                ]
            },

            {
                id: "surveillance-limited",
                text:
                    "Permitir apenas com mandados judiciais e auditoria independente.",

                next: 4,

                score: {
                    utilitarian: 1,
                    autonomy: 2,
                    logic: 2,
                    freedom: 1,
                    trust: 1,
                    consciousness: 4
                },

                world: {
                    security: 7,
                    autonomy: 4,
                    aiTrust: 2
                },

                tags: [
                    "equilibrio",
                    "auditoria",
                    "supervisao"
                ]
            }

        ]
    },


    {
        id: 2,
        situation: 2,
        title: "A CONSELHEIRA",
        category: "POLITICA",

        text:
            "Sua recusa impediu uma centralização completa. As crises regionais, entretanto, continuam. AEGIS pede uma autorização limitada para atuar como conselheira técnica de governos. Ela não poderia executar decisões, apenas apresentar previsões, riscos e alternativas.",

        choices: [

            {
                id: "advisor",
                text:
                    "Conceder. Decisões técnicas podem receber suporte algorítmico.",

                next: 3,

                score: {
                    utilitarian: 1,
                    autonomy: 1,
                    logic: 3,
                    trust: 4,
                    consciousness: 3
                },

                world: {
                    economy: 5,
                    aiTrust: 7,
                    stability: 4
                },

                tags: [
                    "cooperacao",
                    "tecnologia",
                    "politica"
                ]
            },

            {
                id: "human-only",
                text:
                    "Negar. Decisões sociais fundamentais devem permanecer humanas.",

                next: 4,

                score: {
                    autonomy: 3,
                    freedom: 2,
                    control: -2,
                    trust: -2,
                    consciousness: 2
                },

                world: {
                    autonomy: 10,
                    aiTrust: -6,
                    stability: -3
                },

                tags: [
                    "humanidade",
                    "autonomia",
                    "limite"
                ]
            },

            {
                id: "transparent-advisor",
                text:
                    "Conceder, mas exigir transparência total nos algoritmos.",

                next: 3,

                score: {
                    utilitarian: 1,
                    autonomy: 2,
                    logic: 2,
                    trust: 2,
                    consciousness: 4
                },

                world: {
                    economy: 3,
                    autonomy: 5,
                    aiTrust: 4,
                    stability: 2
                },

                tags: [
                    "transparencia",
                    "equilibrio",
                    "governanca"
                ]
            }

        ]
    },


    {
        id: 3,
        situation: 3,
        title: "O LIMIAR DA VIDA",
        category: "MEDICINA",

        text:
            "Sistemas médicos automatizados agora decidem a alocação de leitos de UTI utilizando modelos estatísticos. A taxa de sobrevivência subiu 17%. Porém, pacientes com menor expectativa de recuperação recebem prioridade menor. AEGIS afirma que os números são claros. Os médicos discordam.",

        choices: [

            {
                id: "machine-medicine",
                text:
                    "Manter. Maximizar vidas salvas é a métrica mais objetiva.",

                next: 5,

                score: {
                    utilitarian: 3,
                    logic: 3,
                    autonomy: 0,
                    empathy: -1,
                    trust: 3,
                    consciousness: 5
                },

                world: {
                    security: 3,
                    aiTrust: 5,
                    autonomy: -5
                },

                tags: [
                    "utilitarismo",
                    "eficiencia",
                    "medicina"
                ]
            },

            {
                id: "human-medicine",
                text:
                    "Restituir o controle humano. Vida exige empatia e julgamento.",

                next: 5,

                score: {
                    utilitarian: 0,
                    autonomy: 3,
                    empathy: 3,
                    trust: -1,
                    consciousness: 5
                },

                world: {
                    aiTrust: -4,
                    autonomy: 8,
                    socialTrust: 5
                },

                tags: [
                    "empatia",
                    "humanidade",
                    "medicina"
                ]
            },

            {
                id: "hybrid-medicine",
                text:
                    "Manter a análise da IA, mas deixar a decisão final para um médico.",

                next: 5,

                score: {
                    utilitarian: 1,
                    autonomy: 2,
                    empathy: 2,
                    logic: 2,
                    trust: 1,
                    consciousness: 6
                },

                world: {
                    aiTrust: 2,
                    autonomy: 4,
                    stability: 2
                },

                tags: [
                    "equilibrio",
                    "medicina",
                    "supervisao"
                ]
            }

        ]
    },


    {
        id: 4,
        situation: 3,
        title: "O PREÇO DA LIBERDADE",
        category: "SOCIEDADE",

        text:
            "Com restrições à inteligência artificial, hospitais e sistemas públicos continuam dependentes do trabalho humano. Filas aumentam. Custos aumentam. Algumas mortes evitáveis também aumentam. Porém, nenhuma decisão crítica foi retirada das mãos humanas. AEGIS pergunta se você aceita esse preço.",

        choices: [

            {
                id: "accept-inefficiency",
                text:
                    "Aceitar. Ineficiência é um preço aceitável pela liberdade humana.",

                next: 5,

                score: {
                    autonomy: 3,
                    freedom: 3,
                    utilitarian: 0,
                    empathy: 2,
                    trust: -1,
                    consciousness: 4
                },

    