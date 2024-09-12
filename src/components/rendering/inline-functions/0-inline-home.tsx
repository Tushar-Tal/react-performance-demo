// Create a react component which will act as a home page for compoents in same directory

import { Link } from "react-router-dom";

const InlineHome = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h1>Inline Functions</h1>
      <ul>
        <li>
          <Link to="/rendering/inline-1">Inline 1</Link>
        </li>
        <li>
          <Link to="/rendering/inline-1-fixed">Inline 1 Fixed</Link>
        </li>
        <li>
          <Link to="/rendering/inline-2">Inline with Props</Link>
        </li>
        <li>
          <Link to="/rendering/inline-3-fixed">Inline with Prop Fixed</Link>
        </li>
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
};

export default InlineHome;
