import {useState} from "react";
import Start from "./Start";

const about = {react: "React"}

export default function App() {
    const {react} = about

    const [appContent, setAppContent] = useState(<Start about={react}/>);

    return (
        <main className="app">
            {appContent}
        </main>
    )
}

