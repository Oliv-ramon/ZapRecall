import StartLogo from "./StartLogo";

export default function Start ({deks, setScreen, setDeck, zapGoal, setZapGoal}) {

    return (
        <section className="start">
            <StartLogo/>
            <section className="buttons">
                <input placeholder="Sua meta de zaps (mínimo 1)" onChange={({target: {value}}) => 
                {setZapGoal(value)
                console.log(zapGoal)}} value={zapGoal}></input>
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
        <div className="button" onClick={() => selectDeck(deck)} data-identifier="start-zap-recall">
            <span>Praticar</span><span>{deck.name}</span>
            <ion-icon name="play-forward-sharp"></ion-icon>
        </div>
    )
}