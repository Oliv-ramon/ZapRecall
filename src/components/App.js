import {useState} from "react";
import Start from "./Start";
import Running from "./Running";


export default function App() {
    const decks = [{name: "React", card:""}];

    const [screen, setScreen] = useState(true);

    return (
        <main className="app">
           {screen ? <Start deks={decks} setScreen={setScreen}/> : <Running/>}
            {/* <Running/> */}
        </main>
    )
}

