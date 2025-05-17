import React, { useState } from "react";

function Counter() {
    const[count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleDecrement = () => {
        setCount(count-1);
    }
    const handleReset = () => {
        setCount(0);
    }
    const handleIncrementFive = () => {
        setCount(count+5);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrementFive}>Increment by 5</button>
        </div>
    )
}

export default Counter;