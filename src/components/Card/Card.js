import {useState} from "react";
import returnClass from "../../utils/returnClass.js";
import Front from "./Front.js";
import Back from "./Back.js";

export default function Card() {
    const [cardsId, setCardsId] = useState(0)
    const [faceState, setFaceState] = useState(true);

    const cards = [
        {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __", answer: "letra maiúscula"}
    ]

    function nextCard() {
        setCardsId(cardsId+1)
        setFaceState(true)
    }

    return (
        <section className="card">
            <Front side={returnClass(faceState)}>
                {cardsId}{setFaceState}{cards}
            </Front>

            <Back side={returnClass(!faceState)}>
                {cardsId}{nextCard}{cards}
            </Back>
        </section>
    )
}
