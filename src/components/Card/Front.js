import Top from "./Top"

export default function Front({side, children: [cardsId, setFaceState, cards]}) {
    
    const {question} = cards[cardsId]

    return (
        <section className={`${side} face`}>
            <Top>{cardsId}{cards}{question}</Top>
            <section className="question">{question}</section>
            <footer className="card-footer">
                <span></span>
                <ion-icon name="arrow-undo" onClick={() => setFaceState(false)}></ion-icon>
            </footer>
        </section>
    )
}