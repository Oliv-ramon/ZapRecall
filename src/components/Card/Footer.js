export default function Footer({side, children: functions}) {
    const {setfaceState, nextCard} = functions

    console.log(functions)
    if(side === "front") {

        return (
            <footer className="card-footer">
                <span></span>
                <ion-icon name="arrow-undo" onClick={() => setfaceState(false)}></ion-icon>
            </footer>
        )
    } else {
        return (
            <footer className="card-footer">
                <span></span>
                <ion-icon name="arrow-undo" onClick={nextCard}></ion-icon>
            </footer>
        )
    }

    
}