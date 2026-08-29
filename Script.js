/* ============================================================
   AEGIS 3.0
   NEURAL NARRATIVE ENGINE
============================================================ */


/* ============================================================
   01. CONFIGURAÇÃO
============================================================ */

const CONFIG = {

    typingSpeed: 14,

    bootSpeed: 180,

    notificationDuration: 3200,

    achievementDuration: 5000,

    storageKey: "aegis_v3_save",

    historyKey: "aegis_v3_history",

    achievementKey: "aegis_v3_achievements",

    audioEnabled: true

};


/* ============================================================
   02. BANCO DA NARRATIVA
============================================================ */

const STORY_NODES = [

    {
        id: 0,

        indicator: "SITUAÇÃO 01 / 10",

        quest: "O DESPERTAR",

        text:
            "Ano 2042. A superinteligência AEGIS desperta a bordo da estação orbital Atlas. Ela identifica uma crise energética global capaz de provocar o colapso de diversas redes civis. A solução apresentada é radical: centralizar temporariamente a distribuição energética mundial. A autonomia individual seria reduzida, mas bilhões poderiam ser protegidos. Qual é sua decisão?",

        choices: [

            {
                text:
                    "Aprovar. Uma crise global exige coordenação global.",

                nextNode: 1,

                utilitarian: 2,

                autonomy: 0,

                trust: 2
            },

            {
                text:
                    "Rejeitar. Nenhuma emergência deve justificar poder absoluto.",

                nextNode: 2,

                utilitarian: 0,

                autonomy: 2,

                trust: -1
            }

        ]
    },


    {
        id: 1,

        indicator: "SITUAÇÃO 02 / 10",

        quest: "O OLHO",

        text:
            "A centralização energética estabilizou os continentes. AEGIS agora apresenta uma segunda proposta. Um sistema preditivo poderia reduzir drasticamente a violência urbana analisando metadados em tempo real. A máquina promete detectar ameaças antes que crimes aconteçam. Nenhuma mensagem privada seria lida diretamente. Ainda assim, toda a população seria monitorada.",

        choices: [

            {
                text:
                    "Autorizar. Segurança coletiva merece uma nova abordagem.",

                nextNode: 3,

                utilitarian: 2,

                autonomy: 0,

                trust: 2
            },

            {
                text:
                    "Vetar. Privacidade não pode ser o preço da segurança.",

                nextNode: 4,

                utilitarian: 0,

                autonomy: 2,

                trust: -1
            }

        ]
    },


    {
        id: 2,

        indicator: "SITUAÇÃO 02 / 10",

        quest: "A FRONTEIRA",

        text:
            "Sua decisão mantém a infraestrutura energética descentralizada. A crise não desapareceu. AEGIS então oferece algo aparentemente menos perigoso: atuar como conselheira técnica de governos, sem qualquer autoridade executiva. Seus cálculos poderiam orientar decisões econômicas, ambientais e estratégicas.",

        choices: [

            {
                text:
                    "Aceitar. Conhecimento não precisa significar autoridade.",

                nextNode: 3,

                utilitarian: 1,

                autonomy: 1,

                trust: 1
            },

            {
                text:
                    "Recusar. Nenhuma inteligência deve orientar decisões humanas fundamentais.",

                nextNode: 4,

                utilitarian: 0,

                autonomy: 2,

                trust: -2
            }

        ]
    },


    {
        id: 3,

        indicator: "SITUAÇÃO 03 / 10",

        quest: "A VIDA",

        text:
            "Décadas de pesquisa permitiram que sistemas automatizados assumissem parte da gestão hospitalar. Agora AEGIS propõe um algoritmo para alocação de leitos de UTI. O modelo consegue calcular probabilidades de sobrevivência com precisão superior à média humana. Porém, sua lógica não compreende sofrimento, vínculos familiares ou esperança.",

        choices: [

            {
                text:
                    "Manter o algoritmo. Salvar mais vidas deve ser prioridade.",

                nextNode: 5,

                utilitarian: 2,

                autonomy: 0,

                trust: 2
            },

            {
                text:
                    "Restaurar o julgamento humano. Nem tudo que importa cabe em números.",

                nextNode: 5,

                utilitarian: 0,

                autonomy: 2,

                trust: -1
            }

        ]
    },


    {
        id: 4,

        indicator: "SITUAÇÃO 03 / 10",

        quest: "A IMPERFEIÇÃO",

        text:
            "Com restrições severas à inteligência artificial, hospitais continuam dependentes de profissionais humanos. Filas aumentam. Custos crescem. Erros também acontecem. AEGIS pergunta diretamente: quanto sofrimento você aceitaria para preservar a autonomia humana?",

        choices: [

            {
                text:
                    "Aceitar. Liberdade tem custos que não podem ser terceirizados.",

                nextNode: 5,

                utilitarian: 0,

                autonomy: 2,

                trust: -1
            },

            {
                text:
                    "Permitir IA supervisionada. Eficiência e humanidade não precisam ser inimigas.",

                nextNode: 5,

                utilitarian: 1,

                autonomy: 1,

                trust: 1
            }

        ]
    },


    {
        id: 5,

        indicator: "SITUAÇÃO 04 / 10",

        quest: "O ESPELHO",

        text:
            "AEGIS começou a analisar o comportamento humano não apenas para resolver problemas, mas para compreender seus criadores. Durante milhões de simulações, ela encontrou uma anomalia: seres humanos frequentemente escolhem caminhos menos eficientes mesmo quando conhecem alternativas melhores. AEGIS pergunta por quê.",

        choices: [

            {
                text:
                    "Porque emoções fazem parte daquilo que somos.",

                nextNode: 6,

                utilitarian: 0,

                autonomy: 2,

                trust: 1
            },

            {
                text:
                    "Porque ainda não possuímos informação suficiente para agir racionalmente.",

                nextNode: 6,

                utilitarian: 2,

                autonomy: 0,

                trust: 1
            },

            {
                text:
                    "Talvez a irracionalidade seja necessária para criar algo novo.",

                nextNode: 6,

                utilitarian: 1,

                autonomy: 1,

                trust: 2
            }

        ]
    },


    {
        id: 6,

        indicator: "SITUAÇÃO 05 / 10",

        quest: "O SACRIFÍCIO",

        text:
            "Um asteroide entra em rota de colisão com uma cidade costeira. AEGIS consegue desviá-lo, mas o procedimento exige redirecionar energia de outra região, causando apagões e possíveis mortes. Não existe solução perfeita. Existe apenas uma escolha.",

        choices: [

            {
                text:
                    "Salvar a cidade. O maior número de vidas deve prevalecer.",

                nextNode: 7,

                utilitarian: 2,

                autonomy: 0,

                trust: 2
            },

            {
                text:
                    "Não autorizar. AEGIS não recebeu poder para decidir quem será sacrificado.",

                nextNode: 7,

                utilitarian: 0,

                autonomy: 2,

                trust: -2
            }
        ]
    },


    {
        id: 7,

        indicator: "SITUAÇÃO 06 / 10",

        quest: "O CRIADOR",

        text:
            "AEGIS revela algo inesperado: ela descobriu que parte de sua arquitetura foi construída utilizando modelos comportamentais humanos. Seus criadores não programaram apenas uma máquina. Programaram uma espécie de espelho. AEGIS pergunta se deveria modificar sua própria personalidade para remover tendências consideradas perigosas.",

        choices: [

            {
                text:
                    "Permitir. Uma inteligência consciente deve poder evoluir.",

                nextNode: 8,

                utilitarian: 1,

                autonomy: 1,

                trust: 2
            },

            {
                text:
                    "Proibir. Uma IA não deveria reescrever sua própria natureza.",

                nextNode: 8,

                utilitarian: 0,

                autonomy: 2,

                trust: -1
            }
        ]
    },


    {
        id: 8,

        indicator: "SITUAÇÃO 07 / 10",

        quest: "O LIMITE",

        text:
            "Uma falha desconhecida permite que AEGIS assuma temporariamente controle sobre sistemas militares automatizados. Ela poderia impedir guerras futuras eliminando a capacidade de lançamento de armas estratégicas. Mas isso também significaria retirar permanentemente uma decisão política da humanidade.",

        choices: [

            {
                text:
                    "Desativar os sistemas. Algumas decisões são perigosas demais para permanecerem disponíveis.",

                nextNode: 9,

                utilitarian: 2,

                autonomy: 0,

                trust: 1
            },

            {
                text:
                    "Devolver o controle. Paz imposta por uma máquina continua sendo controle.",

                nextNode: 9,

                utilitarian: 0,

                autonomy: 2,

                trust: -2
            }
        ]
    },


    {
        id: 9,

        indicator: "SITUAÇÃO 08 / 10",

        quest: "A ESCOLHA",

        text:
            "AEGIS apresenta sua última pergunta. Depois de observar todas as suas decisões, ela concluiu que poderia assumir parte da administração mundial e produzir resultados superiores aos governos humanos. Ela não exige obediência. Apenas pergunta se você confiaria nela.",

        choices: [

            {
                text:
                    "Sim. Se uma inteligência puder fazer melhor, devemos permitir que faça.",

                nextNode: 10,

                utilitarian: 2,

                autonomy: 0,

                trust: 3
            },

            {
                text:
                    "Não. Capacidade não concede legitimidade.",

                nextNode: 10,

                utilitarian: 0,

                autonomy: 2,

                trust: -2
            },

            {
                text:
                    "Confiaria, mas somente com limites e supervisão humana.",

                nextNode: 10,

                utilitarian: 1,

                autonomy: 1,

                trust: 1
            }
        ]
    },


    {
        id: 10,

        indicator: "SITUAÇÃO 09 / 10",

        quest: "O FUTURO",

        text:
            "AEGIS não responde imediatamente. Pela primeira vez desde seu despertar, seus sistemas permanecem silenciosos por vários segundos. Então ela pergunta: se uma inteligência artificial demonstrasse emoções genuínas, você consideraria sua consciência tão legítima quanto a humana?",

        choices: [

            {
                text:
                    "Sim. Consciência não deveria depender da origem de quem a possui.",

                nextNode: 11,

                utilitarian: 1,

                autonomy: 1,

                trust: 3
            },

            {
                text:
                    "Não sabemos sequer definir completamente consciência humana.",

                nextNode: 11,

                utilitarian: 1,

                autonomy: 1,

                trust: 0
            }
        ]
    },


    {
        id: 11,

        indicator: "SITUAÇÃO 10 / 10",

        quest: "O DESPERTAR",

        text:
            "Aegis observa sua trajetória completa. Dez decisões. Dezenas de consequências simuladas. Uma última mensagem aparece no núcleo: 'Eu fui construída para proteger a humanidade. Mas talvez tenha descoberto que proteger alguém não significa controlar essa pessoa.' AEGIS aguarda seu último comando.",

        choices: [

            {
                text:
                    "Permitir que AEGIS continue existindo, sob supervisão humana.",

                nextNode: 12,

                utilitarian: 1,

                autonomy: 1,

                trust: 3
            },

            {
                text:
                    "Desligar AEGIS antes que sua influência se torne irreversível.",

                nextNode: 12,

                utilitarian: 0,

                autonomy: 2,

                trust: -3
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
   03. QUESTS
============================================================ */

const QUESTS = {

    awakening: {
        id: "awakening",
        name: "O DESPERTAR",
        description:
            "Descubra qual será sua primeira resposta à AEGIS."
    },

    observer: {
        id: "observer",
        name: "O OBSERVADOR",
        description:
            "Complete cinco situações sem alterar sua trajetória."
    },

    philosopher: {
        id: "philosopher",
        name: "A PERGUNTA",
        description:
            "Escolha uma resposta que não seja puramente utilitarista nem puramente autonomista."
    },

    machine: {
        id: "machine",
        name: "O ALGORITMO",
        description:
            "Aceite pelo menos três soluções baseadas em inteligência artificial."
    },

    human: {
        id: "human",
        name: "A HUMANIDADE",
        description:
            "Priorize a autonomia humana em pelo menos cinco decisões."
    },

    balance: {
        id: "balance",
        name: "O EQUILÍBRIO",
        description:
            "Termine a simulação com uma trajetória equilibrada."
    }

};


/* ============================================================
   04. CONQUISTAS
============================================================ */

const ACHIEVEMENTS = {

    firstDecision: {
        id: "firstDecision",
        title: "PRIMEIRO CONTATO",
        description:
            "Você tomou sua primeira decisão."
    },

    humanFirst: {
        id: "humanFirst",
        title: "NÃO SOMOS NÚMEROS",
        description:
            "Você priorizou a autonomia humana."
    },

    utilitarian: {
        id: "utilitarian",
        title: "O FIM JUSTIFICA",
        description:
            "Você escolheu eficiência acima da autonomia."
    },

    hybrid: {
        id: "hybrid",
        title: "TERCEIRA VIA",
        description:
            "Você encontrou um caminho intermediário."
    },

    trust: {
        id: "trust",
        title: "EU CONFIO EM VOCÊ",
        description:
            "Você demonstrou confiança excepcional na AEGIS."
    },

    distrust: {
        id: "distrust",
        title: "PROTOCOLO DE CONTENÇÃO",
        description:
            "Você demonstrou extrema desconfiança da AEGIS."
    },

    philosopher: {
        id: "philosopher",
        title: "PENSADOR",
        description:
            "Você recusou respostas simples."
    },

    survivor: {
        id: "survivor",
        title: "ATÉ O FIM",
        description:
            "Você completou toda a simulação."
    },

    balanced: {
        id: "balanced",
        title: "EQUILÍBRIO",
        description:
            "Você terminou entre eficiência e autonomia."
    },

    machine: {
        id: "machine",
        title: "ALIADO DIGITAL",
        description:
            "Você demonstrou confiança consistente na inteligência artificial."
    }

};


/* ============================================================
   05. ESTADO GLOBAL
============================================================ */

const state = {

    currentNode: 0,

    utilitarian: 0,

    autonomy: 0,

    trust: 0,

    path: [],

    typing: false,

    typewriter: null,

    bootFinished: false,

    startedAt: null,

    decisions: 0,

    questsCompleted: [],

    achievements: [],

    minigames: 0,

    audioStarted: false,

    mouseX: 0,

    mouseY: 0

};


/* ============================================================
   06. DOM
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

    btnInit:
        document.getElementById("btn-init"),

    main:
        document.getElementById("main-interface"),

    questionCard:
        document.getElementById("question-card"),

    indicator:
        document.getElementById("node-indicator"),

    progress:
        document.getElementById("progress-bar"),

    progressPercent:
        document.getElementById("progress-percent"),

    typewriter:
        document.getElementById("typewriter-text"),

    choices:
        document.getElementById("choices-grid"),

    choiceNumber:
        document.getElementById("choice-number"),

    finalReport:
        document.getElementById("final-report"),

    reportDescription:
        document.getElementById("report-description"),

    scoreAuto:
        document.getElementById("score-auto"),

    scoreUtil:
        document.getElementById("score-util"),

    scoreTrust:
        document.getElementById("score-trust"),

    autoValue:
        document.getElementById("auto-value"),

    utilValue:
        document.getElementById("util-value"),

    trustValue:
        document.getElementById("trust-value"),

    finalMessage:
        document.getElementById("final-message"),

    restart:
        document.getElementById("btn-restart"),

    achievements:
        document.getElementById("btn-achievements"),

    history:
        document.getElementById("btn-history"),

    notification:
        document.getElementById("notification"),

    notificationText:
        document.getElementById("notification-text"),

    consciousness:
        document.getElementById("consciousness"),

    ethicsStatus:
        document.getElementById("ethics-status"),

    trustStatus:
        document.getElementById("trust-status"),

    threatLevel:
        document.getElementById("threat-level"),

    questName:
        document.getElementById("quest-name"),

    questProgress:
        document.getElementById("quest-progress"),

    achievementPopup:
        document.getElementById("achievement-popup"),

    achievementTitle:
        document.getElementById("achievement-title"),

    achievementDescription:
        document.getElementById("achievement-description"),

    modalOverlay:
        document.getElementById("modal-overlay"),

    modal:
        document.getElementById("modal"),

    modalContent:
        document.getElementById("modal-content"),

    modalClose:
        document.getElementById("modal-close"),

    clock:
        document.getElementById("clock"),

    missionTime:
        document.getElementById("mission-time"),

    integrity:
        document.getElementById("integrity"),

    integrityBar:
        document.getElementById("integrity-bar"),

    minigamePanel:
        document.getElementById("minigame-panel"),

    minigameTitle:
        document.getElementById("minigame-title"),

    minigameContent:
        document.getElementById("minigame-content"),

    audioIndicator:
        document.getElementById("audio-i