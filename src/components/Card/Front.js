import { useState } from "react"
import Top from "./Top"

export default function Front({side, borderClass, children: [cardsId, {setFaceState, setCardsId}, cards]}) {
    const [first, setFirst] = useState(true)
    
    const {question} = cards[cardsId]

    function turnCard(first) {
        if (first) {
            setFaceState(false)
            setFirst(false)
        } else {
            setCardsId(cardsId+1) 
            setFirst(true)
        }
    }

    return (
        <section className={`${side} face ${borderClass}`} style={{boxShadow: `0px 8px 24px ${borderClass}`}}>
            <Top>{cardsId}{cards}{question}</Top>
            <section className="question">{question}</section>
            <footer className="card-footer">
                <span></span>
                <ion-icon name="arrow-undo" onClick={() => turnCard(first)} data-identifier="arrow"></ion-icon>
            </footer>
        </section>
    )
}