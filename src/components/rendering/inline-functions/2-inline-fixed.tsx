// Create a react component App that call a component Footer

import { useState } from "react";

function Footer() {
  console.log("Footer rendered");
  return <div>This is footer</div>;
}

const footer = <Footer />;

const InlineFixed = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div style={{ margin: "20px" }}>
      <button onClick={increment}>The count is {count}</button>
      {footer}
    </div>
  );
};

// Footer component is inline, so it will be re-created on every render.

export default InlineFixed;
