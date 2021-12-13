import Top from "./Top"

export default function Back({side, faceClasses, children: [cardsId, nextCard, cards]}) {
    
    const {question, answer} = cards[cardsId]

    const situations = [
        {situation: "Aprendi agora", className: "black"}, 
        {situation: "Não lembrei", className: "red"}, 
        {situation: "Lembrei com esforço", className: "green"}, 
        {situation: "Zap", className: "yellow"}
    ]

    return (
        <section className={`${side} face ${faceClasses}`} style={{boxShadow: `0px 8px 24px ${faceClasses}`}}>
            <Top>{cardsId}{cards}{question}</Top>
            <section className="question">{answer}</section>
            <footer className="card-footer">
                <ul>
                    {situations.map(({situation, className}) => <li className={className} onClick={() => nextCard(className)}>{situation}</li>)}
                </ul>
            </footer>
        </section>
    )
}