import { useState } from "react";



export default function Counter() {
    let [count, setCount] = useState(0)
    
    // function incCount() {
    //     setCount(count+1);
    //     setCount(count+1);
    //     setCount(count+1);
    //     setCount(count+1);
    //     console.log(count+1);
    // }

    function incCount() {
        setCount( (currCount) => {
            return currCount += 1;
        });
        setCount( (currCount) => {
            return currCount += 1;
        });
    }

    return (
        <div>
            <h2>Without Hook/ useState</h2>
            <h3>Count: {count}</h3>
            <button onClick={incCount}>Increase Count</button>
            <hr />
        </div>
    )
}