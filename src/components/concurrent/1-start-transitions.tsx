import React, { useState, startTransition } from "react";

const StartTransition: React.FC = () => {
  // State to store the input value for immediate updates
  const [inputValue, setInputValue] = useState<string>("");
  // State for the non-urgent update (simulating an expensive state)
  const [items, setItems] = useState<number[]>([]);

  // Handle input change with an urgent update
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Non-urgent update inside startTransition
    startTransition(() => {
      const newItems = Array.from({ length: 1000 }, (_, i) => {
        let startTime = performance.now();
        while (performance.now() - startTime < 1) {
          // Do nothing for 1 ms per item to emulate extremely slow code
        }
        return i * i;
      });
      setItems(newItems);
    });
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>React startTransition Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Urgent update: {inputValue}</p>

      <div>
        <h3>Non-Urgent Items List (Generated with startTransition)</h3>
        <ul>
          {items.slice(-20, -1).map((item) => (
            <li key={item}>Item {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StartTransition;
