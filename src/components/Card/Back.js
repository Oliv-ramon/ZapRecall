import Top from "./Top"

export default function Back({side, children: [cardsId, nextCard, cards]}) {
    
    const {question, answer} = cards[cardsId]

    const situations = [
        {situation: "Aprendi agora", className: "black"}, 
        {situation: "Não lembrei", className: "red"}, 
        {situation: "Lembrei com esforço", className: "green"}, 
        {situation: "Zap", className: "yellow"}
    ]

    return (
        <section className={`${side} face`}>
            <Top>{cardsId}{cards}{question}</Top>
            <section className="question">{answer}</section>
            <footer className="card-footer">
                <ul>
                    {situations.map(({situation, className}) => <li className={className} onClick={nextCard}>{situation}</li>)}
                </ul>
            </footer>
        </section>
    )
}