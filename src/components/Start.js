import StartLogo from "./StartLogo";

export default function Start ({deks, setScreen, setDeck}) {
    
    return (
        <section className="start">
            <StartLogo/>
            <section className="buttons">
            {deks.map((deck) => <Button deck={deck} setScreen={setScreen} setDeck={setDeck}/>)}
            </section>
        </section>
    )
}

function Button({deck, setScreen, setDeck}) {

    function selectDeck (deck) {
        setScreen(false)
        setDeck(deck)
    }

    return (
        <div className="button" onClick={() => selectDeck(deck)}>
            <span>Praticar</span><span>{deck.name}</span>
            <ion-icon name="play-forward-sharp"></ion-icon>
        </div>
    )
}