
let decks = {


    "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        title: "React",
        questions: [
            {
                question: "What is ReactJS?",
                answer:
                    "ReactJS is an open-source frontend JavaScript library which is used for building user interfaces, specifically for single page applications.",
            },
            {
                question: "What is JSX?",
                answer:
                    "JSX is a syntax notation for JavaScript XML(XML-like syntax extension to ECMAScript). It stands for JavaScript XML.",
            },
            {
                question: "What is virtual DOM?",
                answer:
                    "The virtual DOM (VDOM) is an in-memory representation of Real DOM.",
            },
            {
                question: "What is Babel?",
                answer: "Babel is a JavaScript compiler",
            },
        ],
    },
    "6ni6ok3ym7mf1p33lnez": {
        id: "6ni6ok3ym7mf1p33lnez",
        title: "HTML",
        questions: [
            {
                question: "What does HTML stand for?",
                answer: "Hyper Text Markup Language",
            },
            {
                question: "What should values always be enclosed in?",
                answer: "Quotation marks",
            },
            {
                question:
                    "Where do all items for the same web site need to be saved?",
                answer: "In the same folder",
            },
            {
                question:
                    "What is always a welcome page, and explains the purpose or topic of the site?",
                answer: "Home Page",
            },
        ],
    },
    "am8ehyc8byjqgar0jgpub9": {
        id: "am8ehyc8byjqgar0jgpub9",
        title: "CSS",
        questions: [
            {
                question: "What is CSS?",
                answer: "It describes how the HTML content will be shown on screen.",
            },
            {
                question: "What are gradients in CSS?",
                answer:
                    "It is a property of CSS which allows you to display a smooth transformation between two or more than two specified colors.",
            },
            {
                question: "What is a CSS pseudo-class?",
                answer:
                    "It is a class that is used to define a special state of an HTML element.",
            },
            {
                question: "What is CSS opacity?",
                answer:
                    "It is the property that elaborates on the transparency of an element.",
            },
        ],
    },
    "loxhs1bqm25b708cmbf3g": {
        id: "loxhs1bqm25b708cmbf3g",
        title: "Capital Cities",
        questions: [
            {
                question: "What is the capital city of Saudi Arabia?",
                answer: "Riyadh",
            },
            {
                question: "What is the capital city of Germany?",
                answer: "Berlin",
            },
            {
                question: "What is the capital city of France?",
                answer: "Paris",
            },
            {
                question: "What is the capital city of Belgium?",
                answer: "Brüssel",
            },
            {
                question: "What is the capital city of Netherlands?",
                answer: "Amsterdam",
            },
        ],
    },
}


function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}


export function getDecks() {
    return decks;
}

export function getDeck(id) {
    return decks[id]
}

export function saveDeckTitle(title) {
    return new Promise((res, rej) => {
        const newId = generateUID();

        setTimeout(() => {
            decks = {
                ...decks,
                [newId]: {

                    id: newId,
                    title: title,
                    questions: null
                }
            }

            res(formattedQuestion)
        }, 1000)
    })
}

export function addCardDeck(did, card) {

    return new Promise((res, rej) => {
        setTimeout(() => {

            decks = {
                ...decks,
                [did]: {
                    ...questions,
                    card
                }
            }

            res()
        }, 500)
    })
}

export function removeDeck(did) {
    return new Promise((res, rej) => {
        setTimeout(() => {

            decks = {
                ...decks,
                [did]: null
            }
            res()
        }, 500)
    })
}

