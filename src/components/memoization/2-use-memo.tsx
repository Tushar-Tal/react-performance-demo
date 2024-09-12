import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // A function to simulate an expensive calculation
  const expensiveCalculation = (num: number) => {
    console.log("Expensive calculation...");
    for (let i = 0; i < 1000000000; i++) {} // Simulating delay
    return num * 2;
  };

  // Memoizing the expensive calculation result
  const computedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]); // Only recalculates if `count` changes

  return (
    <div style={{ margin: "20px" }}>
      <h1>useMemo Hook Example</h1>
      <div>
        <h3>Hello, {inputValue ?? "Guest"}</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
        />
      </div>
      <div>
        <p>Computed Value: {computedValue}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
      </div>
    </div>
  );
};

export default UseMemo;
