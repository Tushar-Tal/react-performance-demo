import { memo, useDeferredValue, useState } from "react";

const SlowItem = memo(({ text }: { text: string }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return <li className="item">Text: {text}</li>;
});

const SlowList = memo(function SlowList({ text }: { text: string }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");

  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

const UseDeferredValue = () => {
  const [inputValue, setInputValue] = useState("");
  const deferredValue = useDeferredValue(inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <SlowList text={deferredValue} />
    </div>
  );
};

export default UseDeferredValue;
