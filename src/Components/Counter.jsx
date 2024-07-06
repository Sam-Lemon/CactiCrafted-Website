import React, { useState } from "react";

export default function Counter({ initialCount, onChange }) {
  const [count, setCount] = useState(initialCount);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (onChange) {
      onChange(newCount); //notifies parent component of quantity change
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      if (onChange) {
        onChange(newCount); //notifies parent component of quantity change
      }
    }
  };

  //returning the counter component.
  return (
    <div className="counter">
      <button onClick={handleDecrease}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}
