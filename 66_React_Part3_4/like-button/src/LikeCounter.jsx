import { useState } from "react";

export default function LikeCounter() {

    let [count, setCount] = useState(0);

    function incCount() {
        setCount(count+1);
        console.log(`Total Like: ${count+1}`);
    }

    return (
        <div>
            <h3>Total Likes: {count}</h3>
            <button onClick={incCount}> Clike here to Like </button>
        </div>
    )
}