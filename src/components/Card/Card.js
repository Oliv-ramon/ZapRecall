import {useState} from "react";
import returnClass from "../../utils/returnClass.js";
import Front from "./Front.js";
import Back from "./Back.js";

export default function Card({deck: {cards}, setHaveCards}) {
    const [cardsId, setCardsId] = useState(0)
    const [faceState, setFaceState] = useState(true);
    const [borderClass, setBorderClass] = useState("rgb(0 0 0 / 12%)")

    function putBorder(className) {
        if (cardsId < cards.length-1) {
            setBorderClass(className)
            setFaceState(true)
        } else {
            setHaveCards(false)
        }
    }

    return (
        <section className="card">
            <Front side={returnClass(faceState)} borderClass={borderClass}>
                {cardsId}{{setFaceState, setCardsId}}{cards}
            </Front>

            <Back side={returnClass(!faceState)} borderClass={borderClass}>
                {cardsId}{{setFaceState, putBorder}}{cards}
            </Back>
        </section>
    )
}
