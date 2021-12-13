export default function StartLogo({setScreen}) {
    return (
    <section className="start-logo" onClick={() => setScreen(true)}>
        <img src="./assets/Vector.svg"alt="imagem de um raio"/>
        <span>ZapRecall</span>
    </section>
    )
}