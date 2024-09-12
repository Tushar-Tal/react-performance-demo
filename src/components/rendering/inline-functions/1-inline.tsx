// Create a react component App that call a component Footer

import { useState } from "react";

function Footer() {
  console.log("Footer rendered");
  return <div>This is footer</div>;
}

const Inline = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div style={{ margin: "20px" }}>
      <button onClick={increment}>The count is {count}</button>
      <Footer />
    </div>
  );
};

// When you click the counter button, both the App and Footer components rerender.

export default Inline;
