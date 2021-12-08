export default function Start ({about}) {
    console.log(about)
    return (
        <section className="start">
            <section className="start-logo">
                <ion-icon name="flash-outline"></ion-icon>
                <span>ZapRecall</span>
            </section>
            <div className="button" onClick="">
                <span>Praticar {about}</span>
                <ion-icon name="play-forward-sharp"></ion-icon>
            </div>
        </section>
    )
}