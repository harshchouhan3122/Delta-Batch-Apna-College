import { useState} from 'react'

export default function LudoBoard () {

    // Initialize stateVariable with Object to reduce no. of stateVariables
    let [moves, setMoves] = useState({blue: 0, green: 0, red: 0, yellow: 0});

    function updateBlue() {
        // console.log(`BlueMove updated.`);

        // Using Callback to update values based on current values
        // using spread operator to create copy of previous object to change its address so that reRendering took Place
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1}
        })

    };

    function updateRed() {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1}
        })
    };

    function updateGreen() {
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1}
        })
    };

    function updateYellow() {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1}
        })
    };

    return (
        <>
            <h3>Object and State : LudoBoard</h3>
            <div>
                <b>Red Moves: {moves.red}</b> <br />
                <button style={{backgroundColor:"red", color:"white"}} onClick={updateRed}>+1</button>
            </div>
            <div>
                <b>Blue Moves: {moves.blue}</b> <br />
                <button style={{backgroundColor:"blue", color:"white"}} onClick={updateBlue}>+1</button>
            </div>
            <div>
                <b>Green Moves: {moves.green}</b> <br />
                <button style={{backgroundColor:"green", color:"white"}} onClick={updateGreen}>+1</button>
            </div>
            <div>
                <b>Yellow Moves: {moves.yellow}</b> <br />
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
            </div>
        </>
    )
}