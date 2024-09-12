import { Link } from "react-router-dom";

const MemoizationHome = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h1>Memoization Home</h1>
      <ul>
        <li>
          <Link to="/memoization/react-memo">React.memo</Link>
        </li>
        <li>
          <Link to="/memoization/use-memo">useMemo</Link>
        </li>
        <li>
          <Link to="/memoization/use-callback">useCallback</Link>
        </li>
        <li>
          <Link to="/memoization/use-ref">useRef</Link>
        </li>
        <li>
          <Link to="/memoization/use-ref-new">useRef New</Link>
        </li>
        <li>
          <Link to="/memoization/context">Context</Link>
        </li>
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
};

export default MemoizationHome;
