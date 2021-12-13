import {useState} from "react";
import returnClass from "../../utils/returnClass.js";
import Front from "./Front.js";
import Back from "./Back.js";

export default function Card({deck: {cards}, setHaveCards}) {
    const [cardsId, setCardsId] = useState(0)
    const [faceState, setFaceState] = useState(true);
    const [faceClasses, setFaceClasses] = useState()

    function nextCard(className) {
        if (cardsId < cards.length-1) {
            setFaceClasses(className)
            setCardsId(cardsId+1)
            setFaceState(true)
        } else {
            setHaveCards(false)
        }
    }

    return (
        <section className="card">
            <Front side={returnClass(faceState)} faceClasses={faceClasses}>
                {cardsId}{setFaceState}{cards}
            </Front>

            <Back side={returnClass(!faceState)} faceClasses={faceClasses}>
                {cardsId}{nextCard}{cards}
            </Back>
        </section>
    )
}
