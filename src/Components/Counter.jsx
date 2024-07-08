import React, { useState } from "react";

/**This is a counter function, it takes the props initialCount and onChange.
 * First I set the state for the variable count to the initial count.*/
export default function Counter({ initialCount, onChange }) {
  const [count, setCount] = useState(initialCount);

  /**This function creates a new variable, newCount to increase count by 1.
   * Then it sets the count to the newCount and if it changes it will
   * notify the parent component of the quantity change.*/
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (onChange) {
      onChange(newCount); //notifies parent component of quantity change
    }
  };

  /**This function does basically the same thing as handleIncrease, but
   * instead of increasing count by 1, it decreases it by 1.*/
  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      if (onChange) {
        onChange(newCount); //notifies parent component of quantity change
      }
    }
  };

  /**returning the counter component.*/
  return (
    <div className="counter">
      <button className="decrease-btn" onClick={handleDecrease}>
        -
      </button>
      <span>{count}</span>
      <button className="increase-btn" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
