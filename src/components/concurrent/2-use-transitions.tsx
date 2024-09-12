// import React, { useState, useTransition } from "react";

// const UseTransitions: React.FC = () => {
//   // State for input value (urgent update)
//   const [inputValue, setInputValue] = useState<string>("");
//   // State for non-urgent items list
//   const [items, setItems] = useState<number[]>([]);

//   // useTransition hook to mark non-urgent updates
//   const [isPending, startTransition] = useTransition();

//   // Handle input change (urgent update)
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setInputValue(value);

//     // Non-urgent update using startTransition from useTransition
//     startTransition(() => {
//       const newItems = Array.from({ length: 100000 }, (_, i) => i*i);
//       setItems(newItems);
//     });
//   };

//   return (
//     <div style={{ margin: "20px" }}>
//       <h1>React useTransition Example</h1>

//       {/* Input field updates the inputValue state (urgent) */}
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Type something..."
//       />
//       <p>Urgent update: {inputValue}</p>

//       {/* Display loading state if the non-urgent update is still in progress */}
//       {isPending ? <p>Loading items...</p> : null}

//       <div>
//         <h3>Non-Urgent Items List (Generated with useTransition)</h3>
//         <ul>
//           {items.slice(-20, -1).map((item) => (
//             <li key={item}>Item {item}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default UseTransitions;


import React, { useState, useTransition } from 'react';

const UseTransitions: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [items, setItems] = useState<string[]>(Array.from(Array(20000).keys()).map(i => `Item ${i}`));
  const [filteredItems, setFilteredItems] = useState<string[]>(items);

  // useTransition hook for concurrent rendering
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      // Simulate filtering that takes time
      const filtered = items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
      setFilteredItems(filtered);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleFilterChange}
        placeholder="Filter items..."
        style={{ padding: '10px', marginBottom: '20px', width: '300px' }}
      />

      {isPending ? <p>Loading filtered items...</p> : null}

      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseTransitions;
