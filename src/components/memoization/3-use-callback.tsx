import { useState, useCallback, useMemo } from "react";

const Todos = ({
  todos,
  addTodo,
}: {
  todos: string[];
  addTodo: () => void;
}) => {
  console.log("Rendering Todos ");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // useCallback is a hook that returns a memoized callback
  const addTodo = useCallback(() => {
    console.log("addTodo");
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  // without useCallback, the Todos component will re-render on every increment
  //   const addTodo = () => {
  //     console.log("addTodo");
  //     setTodos((t) => [...t, "New Todo"]);
  //   };

  const todoComponent = useMemo(
    () => <Todos todos={todos} addTodo={addTodo} />,
    [todos, addTodo]
  );

  return (
    <div style={{ margin: "20px" }}>
      {todoComponent}
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default UseCallback;
