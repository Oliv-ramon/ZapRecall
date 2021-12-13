import Top from "./Top"

export default function Back({side, borderClass, children: [cardsId, respond, cards]}) {
    
    const {question, answer} = cards[cardsId]

    const situations = [
        {situation: "Aprendi agora", className: "black"}, 
        {situation: "Não lembrei", className: "red"}, 
        {situation: "Lembrei com esforço", className: "green"}, 
        {situation: "Zap", className: "yellow"}
    ]

    return (
        <section className={`${side} face ${borderClass}`} style={{boxShadow: `0px 8px 24px ${borderClass}`}}>
            <Top>{cardsId}{cards}{question}</Top>
            <section className="question">{answer}</section>
            <footer className="card-footer">
                <ul>
                    {situations.map(({situation, className}) => <li className={className} onClick={() => respond(className)}>{situation}</li>)}
                </ul>
            </footer>
        </section>
    )
}