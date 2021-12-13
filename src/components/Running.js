import StartLogo from "./StartLogo"
import Card from "./Card/Card"
import FinalScreen from "./FinalScreen"

export default function Running({deck}) {
    return (
        <>
            <header className="running-top">
                <StartLogo/>
            </header>
            <Card deck={deck}/>
            {/* <FinalScreen/> */}
        </>
    )
}