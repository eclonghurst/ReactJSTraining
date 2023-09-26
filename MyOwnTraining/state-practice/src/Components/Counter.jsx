import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);
    
    const handleClick = (e) => {
        if (e.target.innerText == '-5') {setCount(count - 5)}
        if (e.target.innerText == '-1') {setCount(count + -1)}
        if (e.target.innerText == 'RESET') {setCount(count = 0)}
        if (e.target.innerText == '+1') {setCount(count + 1)}
        if (e.target.innerText == '+5') {setCount(count + 5)}
    }

    return ( <>
        <input type="number" value={count} readOnly/>
        <br />
        <button onClick={handleClick}>-5</button>
        <button onClick={handleClick}>-1</button>
        <button onClick={handleClick}>RESET</button>
        <button onClick={handleClick}>+1</button>
        <button onClick={handleClick}>+5</button>
    </> );
}

export default Counter;