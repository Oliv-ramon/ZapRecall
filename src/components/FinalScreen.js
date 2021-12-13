export default function FinalScreen({haveMistake}) {
    function Congrats() {
        return (
            <>
                <span>PARABÉNS! 🥳</span>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </>
        )
    }

    function NotThisTime() {
        return (
            <>
                <span>Putz... 😢</span>
                <p>Você esqueceu alguns flashcards..<br/>
                    Não desanime! Na próxima você consegue!</p>
            </>
        )
    }

        return (
            <section className="final-screen">
                {!haveMistake ? <Congrats/>: <NotThisTime/>}
            </section>
        )  
}
