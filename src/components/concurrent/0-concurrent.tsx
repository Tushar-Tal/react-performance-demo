import { Link } from "react-router-dom";

const ConcurrentHome = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h1>Concurrent Home</h1>
      <ul>
        <li>
          <Link to="/concurrent/start-transitions">Start Transitions</Link>
        </li>
        <li>
          <Link to="/concurrent/use-transitions">Use Transitions</Link>
        </li>
        <li>
          <Link to="/concurrent/use-deferred">Use Deferred</Link>
        </li>
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ConcurrentHome;
