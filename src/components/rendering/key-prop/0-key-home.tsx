import { Link } from "react-router-dom";

const KeyHome = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h1>Key Prop Home</h1>
      <ul>
        <li>
          <Link to="/rendering/key-1">Key Prop: List</Link>
        </li>
        <li>
          <Link to="/rendering/key-2">Key Prop: Input</Link>
        </li>
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
};

export default KeyHome;
