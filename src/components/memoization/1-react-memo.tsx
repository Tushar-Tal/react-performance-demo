import { memo, useState } from "react";

const ReactMemo = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div style={{ margin: "20px" }}>
      <label>
        Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <br />
      <Greeting name={name} />
      <br />
      <br />
      <GreetingWithMemo name={name} />
      <br />
      <br />
      <CustomGreeting name={name} />
    </div>
  );
};

const Greeting = ({ name }: { name: string }) => {
  console.log("Greeting is rendered at", new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{name && ", "}
      {name}! via Greeting
    </h3>
  );
};

const GreetingWithMemo = memo(function Greeting({ name }: { name: string }) {
  console.log(
    "GreetingWithMemo is rendered at",
    new Date().toLocaleTimeString()
  );
  return (
    <h3>
      Hello{name && ", "}
      {name}! via GreetingWithMemo
    </h3>
  );
});

// Even when a component is memoized, it will still re-render when its own state changes.

const CustomGreeting = memo(function Greeting({ name }: { name: string }) {
  console.log(
    "CustomGreeting was rendered at",
    new Date().toLocaleTimeString()
  );
  const [greeting, setGreeting] = useState("Hello");
  return (
    <>
      <h3>
        {greeting}
        {name && ", "}
        {name}! via CustomGreeting
      </h3>
      <GreetingSelector value={greeting} onChange={setGreeting} />
    </>
  );
});

interface GreetingSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

function GreetingSelector({ value, onChange }: GreetingSelectorProps) {
  return (
    <>
      <label>
        <input
          type="radio"
          checked={value === "Hello"}
          onChange={(e) => onChange("Hello")}
        />
        Regular greeting
      </label>
      <label>
        <input
          type="radio"
          checked={value === "Hello and welcome"}
          onChange={(e) => onChange("Hello and welcome")}
        />
        Enthusiastic greeting
      </label>
    </>
  );
}

export default ReactMemo;
