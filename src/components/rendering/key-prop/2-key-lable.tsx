import { useState } from "react";

const fruitDescriptions = {
  Apple: "A fruit that is typically red, green, or yellow.",
  Banana:
    "A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.",
  Cherry: "A small, round stone fruit that is typically bright or dark red.",
  Date: "The fruit of the date palm, which is a type of palm tree.",
};

export const KeyLabel: React.FC = () => {
  const [fruit, setFruit] = useState("Apple");

  //React's key prop gives you the ability to control component instances.
  // 'key' prop allows you to return the exact same element type, but force React to unmount the previous instance, and mount a new one
  return (
    <div style={{ margin: "20px" }}>
      <form>
        <h2>Fruit Description</h2>
        <label htmlFor="fruit">Select a fruit: </label>
        <select
          id="fruit"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        >
          <option value="Apple">Apple</option>
          <option value="Banana">Banana</option>
          <option value="Cherry">Cherry</option>
          <option value="Date">Date</option>
        </select>
        <br />
        <br />
        <label htmlFor="fruit-description">Fruit Description : </label>

        <input
          type="text"
          id="fruit-description"
          key={fruit} // Comment this out and see what happens
          defaultValue={
            fruitDescriptions[fruit as keyof typeof fruitDescriptions]
          }
          style={{ width: "300px" }}
        />
      </form>
    </div>
  );
};
