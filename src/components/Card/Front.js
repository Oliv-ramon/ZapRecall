import Top from "./Top"

export default function Front({side, faceClasses, children: [cardsId, setFaceState, cards]}) {
    
    const {question} = cards[cardsId]

    return (
        <section className={`${side} face ${faceClasses}`} style={{boxShadow: `0px 8px 24px ${faceClasses}`}}>
            <Top>{cardsId}{cards}{question}</Top>
            <section className="question">{question}</section>
            <footer className="card-footer">
                <span></span>
                <ion-icon name="arrow-undo" onClick={() => setFaceState(false)}></ion-icon>
            </footer>
        </section>
    )
}