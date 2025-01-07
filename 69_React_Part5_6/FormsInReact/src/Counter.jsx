import { useState, useEffect } from "react";



export default function Counter() {
    let [countX, setCountX] = useState(0);
    let [countY, setCountY] = useState(0);
    

    function incCountX() {
        setCountX((count) => count+1);
    }

    function incCountY() {
        setCountY((count) => count+1);
    }

    // useEffect(()=>{
    //     console.log("Count Increased.")
    // })

    useEffect(()=>{
        console.log("Count Increased.")
    }, [countX]);

    return (
        <div>
            <h3>Count: {countX}</h3>
            <button onClick={incCountX}>Increase Count</button>
            <h3>Count: {countY}</h3>
            <button onClick={incCountY}>Increase Count</button>
        </div>
    )
}