// Add link to inline home page

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h1>React Rendering Demo</h1>
      <h2> Rendering Components</h2>
      <ul>
        <li>
          <Link to="/rendering/inline">Inline</Link>
        </li>
        <li>
          <Link to="/rendering/key">Key Prop</Link>
        </li>
        <li>
          <Link to="/rendering/nested">Nested Components</Link>
        </li>
        <li>
          <Link to="/rendering/lazy-mounting">Lazy Mounting</Link>
        </li>
      </ul>
      <h2>Memoization</h2>
      <ul>
        <li>
          <Link to="/memoization/memo-home">Memoization Home</Link>
        </li>
      </ul>
      <h2>Concurrent</h2>
      <ul>
        <li>
          <Link to="/concurrent/home">Concurrent Home</Link>
        </li>
      </ul>
      <h2>Virtualization</h2>
      <ul>
        <li>
          <a
            href="https://bvaughn.github.io/react-virtualized/#/components/List"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Virtualized
          </a>
        </li>
        <li>
          <a
            href="https://react-window.vercel.app/#/examples/list/fixed-size"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Window
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
