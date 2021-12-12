import StartLogo from "./StartLogo";

export default function Start ({deks, setScreen}) {
    
    return (
        <section className="start">
            <StartLogo/>
            <section className="buttons">
            {deks.map(({name}) => <Button name={name} setScreen={setScreen}/>)}
            </section>
        </section>
    )
}

function Button({name, setScreen}) {
    return (
        <div className="button" onClick={() => setScreen(false)}>
            <span>Praticar {name}</span>
            <ion-icon name="play-forward-sharp"></ion-icon>
        </div>
    )
}