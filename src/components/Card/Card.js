import {useState} from "react";
import returnClass from "../../utils/returnClass.js";
import Front from "./Front.js";
import Back from "./Back.js";

export default function Card({deck: {cards}, setHaveCards, setHaveMistake, zapGoal}) {
    const [cardsId, setCardsId] = useState(0)
    const [faceState, setFaceState] = useState(true);
    const [borderClass, setBorderClass] = useState("rgb(0 0 0 / 12%)")
    const [zapCounter, setZapCounter] = useState(0)
    
    function respond(className) {

        if (className === "yellow") setZapCounter(zapCounter+1)

        if (cardsId < cards.length-1) {
            setBorderClass(className)
            setFaceState(true)
        } else {
            if (zapGoal === "") {
                if (zapCounter < 1) setHaveMistake(true)
            } else {
                if(zapCounter < zapGoal) setHaveMistake(true)
            }
            setHaveCards(false)
        }

        console.log(zapCounter + " acertos")
        console.log(zapGoal + " meta")
    }

    return (
        <section className="card" data-identifier="flashcard">
            <Front side={returnClass(faceState)} borderClass={borderClass}>
                {cardsId}{{setFaceState, setCardsId}}{cards}
            </Front>

            <Back side={returnClass(!faceState)} borderClass={borderClass}>
                {cardsId}{respond}{cards}
            </Back>
        </section>
    )
}
