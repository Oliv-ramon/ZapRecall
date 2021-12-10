import {useState} from "react";

const cards = [
    {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __", answer: "letra maiúscula"}
]

function returnClass(value) {
    if(value) {
        return "front"
    } else {
        return "back"
    }
}


export default function Card() {
    const [cardsId, setCardsId] = useState(0)

    const [faceState, setfaceState] = useState(true);

    const {question, answer} = cards[cardsId]

    function nextCard() {
        setCardsId(cardsId+1)
        setfaceState(true)
    }

    return (
        <section className="card">
            <Front side={returnClass(faceState)} >{cardsId}{question}{setfaceState}</Front>

            <Back side={returnClass(!faceState)}>{cardsId}{question}{answer}{nextCard}</Back>
        </section>
    )
}

function Front({side, children: [cardsId, question, setfaceState]}) {
    console.log(question)
    return (
        <section className={`${side} face`}>
            <header className="card-top">
                <span>{cardsId+1}/{cards.length}</span>
                <span className="tittle">
                    {question}</span>
                <span className="counter">{cardsId+1}/{cards.length}</span>
            </header>
            <section className="question">
                {question}
            </section>
            <footer className="card-footer">
                <span></span>
                <ion-icon name="arrow-undo" onClick={() => setfaceState(false)}></ion-icon>
            </footer>
        </section>
    )
}

function Back({side, children: [cardsId,question,  answer, nextCard]}) {
    console.log(cardsId)
    return (
        <section className={`${side} face`}>
            <header className="card-top">
                <span>{cardsId+1}/{cards.length}</span>
                <span className="tittle">
                    {question}</span>
                <span className="counter">{cardsId+1}/{cards.length}</span>
            </header>
            <section className="question">
                {answer}
            </section>
            <footer className="card-footer">
                <span></span>
                <ion-icon name="arrow-undo" onClick={nextCard}></ion-icon>
            </footer>
        </section>
    )
}