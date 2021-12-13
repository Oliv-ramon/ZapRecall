import {useState} from "react";
import Start from "./Start";
import Running from "./Running";


export default function App() {
    const decks = [
        {name: "React", cards: [
            {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
            {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
            {question: "Componentes devem iniciar com __", answer: "letra maiúscula"}
        ]}];

    const [screen, setScreen] = useState(true);
    const [deck, setDeck] = useState([])
    const [zapGoal, setZapGoal] = useState(undefined)

    return (
        <main className="app">
           {screen ? <Start deks={decks} setScreen={setScreen} setDeck={setDeck} zapGoal={zapGoal} setZapGoal={setZapGoal}/> : <Running deck={deck} setScreen={setScreen} zapGoal={zapGoal}/>}
        </main>
    )
}

