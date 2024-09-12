import { Link } from "react-router-dom";

const LazyMountingHome = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h1>Lazy Mounting</h1>
      <ul>
        <li>
          <Link to="/rendering/lazy-1">Lazy Loading</Link>
        </li>
        <li>
          <Link to="/rendering/lazy-2">Eager Loading</Link>
        </li>
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
};

export default LazyMountingHome;
