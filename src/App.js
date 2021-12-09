import {useState} from "react";
import Start from "./Start";
import Running from "./Running";

const abouts = ["React"]

export default function App() {

    return (
        <main className="app">
           {/* {<Start abouts={abouts}/>} */}
            <Running/>
        </main>
    )
}

