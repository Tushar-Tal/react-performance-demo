// src/context/MyContext.tsx
import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of the context value
interface MyContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create a context with a default value
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

const Counter: React.FC = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Counter must be used within a MyProvider");
  }

  const { count, increment, decrement } = context;

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const Context = () => {
  return (
    <div style={{ margin: "20px" }}>
      <MyProvider>
        <Counter />
      </MyProvider>
    </div>
  );
};

export default Context;
