import React, { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);

//increments the value of quantity by + 1
    const handleIncrement = () => {
        setCount(count + 1);
    };

//decrements the value of quantity by - 1
    const handleDecrement = () => {
        setCount(count - 1);
    };

//returning the counter component.
    return (
        <div>
            <h1>Quantity: {count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}