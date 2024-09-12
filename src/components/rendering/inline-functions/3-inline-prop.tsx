import { useState } from "react";

function Footer({ color }: { color: string }) {
  console.log("Footer rendered");
  return <footer style={{ color }}>I am the ({color}) footer</footer>;
}

function Body({ color }: { color: string }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <button onClick={increment}>The count is {count}</button>
      <Footer color={color} />
    </div>
  );
}

function InlineProp() {
  const [color, setColor] = useState("black");
  return (
    <div style={{ margin: "20px" }}>
      <div>
        <p>Set the footer color:</p>
        <div style={{ display: "flex", gap: 4 }}>
          <button onClick={() => setColor("red")}>Red</button>
          <button onClick={() => setColor("blue")}>Blue</button>
          <button onClick={() => setColor("green")}>Green</button>
        </div>
      </div>
      {/* 🐨 pass the footer prop instead of the color prop */}
      <Body color={color} />
    </div>
  );
}

export default InlineProp;
