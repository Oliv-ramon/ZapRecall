export default function Top({children: [cardsId, cards, question]}) {
    return (
        <header className="card-top">
            <span data-identifier="counter">{cardsId+1}/{cards.length}</span>
            <span className="tittle">{question}</span>
            <span className="counter">{cardsId+1}/{cards.length}</span>
        </header>
    )
}