import { Link } from "react-router-dom";

function NestedHome() {
  return (
    <>
      <h1>Nested Components</h1>
      <ul>
        <li>
          <Link to="/rendering/nested-1">Nested App</Link>
        </li>
        <li>
          <Link to="/rendering/nested-2">Nested App Fixed</Link>
        </li>
      </ul>
      <Link to="/">Home</Link>
    </>
  );
}

export default NestedHome;
