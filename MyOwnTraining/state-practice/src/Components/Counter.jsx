import { useState } from "react";

function Counter() {
    // Create state using the useState hook
    let [count, setCount] = useState(99);

    const handleClick = () => {
        // count++; HAVE TO USE THE SETTER
        setCount(count + 1); // changes count and re-renders
        // console.log("Count:", count);
    }
    return ( <>
        <input type="number" value={count} readOnly/>
        <br />
        <button>-5</button>
        <button>-1</button>
        <button>RESET</button>
        {/* DON'T include the () after handleClick */}
        <button onClick={handleClick}>+1</button>
        <button>+5</button>
    </> );
}

export default Counter;