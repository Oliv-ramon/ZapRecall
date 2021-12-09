import StartLogo from "./StartLogo";

export default function Start ({abouts}) {
    
    return (
        <section className="start">
            <StartLogo/>
            <section className="buttons">
            {abouts.map((about) => <Button about={about}/>)}
            </section>
        </section>
    )
}

function Button({about}) {
    return (
        <div className="button" onClick={""}>
            <span>Praticar {about}</span>
            <ion-icon name="play-forward-sharp"></ion-icon>
        </div>
    )
}