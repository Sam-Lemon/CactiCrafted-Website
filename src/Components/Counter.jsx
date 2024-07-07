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
      <button className="decrease-btn" onClick={handleDecrease}>-</button>
      <span>{count}</span>
      <button className="increase-btn" onClick={handleIncrease}>+</button>
    </div>
  );
}
