import {useState} from "react";
import StartLogo from "./StartLogo"
import Card from "./Card/Card"
import FinalScreen from "./FinalScreen"

export default function Running({deck, setScreen, zapGoal}) {

    const [haveCards, setHaveCards] = useState(true)
    const [haveMistake, setHaveMistake] = useState(false)

    return (
        <>
            <header className="running-top">
                <StartLogo setScreen={setScreen}/>
            </header>
            {haveCards ? <Card deck={deck} setHaveCards={setHaveCards} setHaveMistake={setHaveMistake} zapGoal={zapGoal}/> : <FinalScreen haveMistake={haveMistake}/>}
        </>
    )
}