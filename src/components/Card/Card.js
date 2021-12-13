import {useState} from "react";
import returnClass from "../../utils/returnClass.js";
import Front from "./Front.js";
import Back from "./Back.js";

export default function Card({deck: {cards}}) {
    const [cardsId, setCardsId] = useState(0)
    const [faceState, setFaceState] = useState(true);

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
