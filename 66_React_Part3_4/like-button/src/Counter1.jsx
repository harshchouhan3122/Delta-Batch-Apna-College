export default function Counter1() {
    let count = 0;

    function incCount() {
        count += 1;
        // console.log("Button Clicked");
        console.log(count);
    }

    return (
        <div>
            <h2>Without Hook/ useState</h2>
            <h3>Count: {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}