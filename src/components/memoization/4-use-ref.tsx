import React, { useRef, useState } from "react";

// Define a type for the ToDo item
type Todo = {
  id: number;
  task: string;
};

const UseRef: React.FC = () => {
  // State to store the list of to-dos
  const [todos, setTodos] = useState<Todo[]>([]);

  // useRef to reference the input field
  const taskInputRef = useRef<HTMLInputElement>(null);

  // Handler to add a new ToDo item
  const addTodo = () => {
    const taskValue = taskInputRef.current?.value;
    if (taskValue && taskValue.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), task: taskValue },
      ]);
      // Clear the input field after adding a task
      if (taskInputRef.current) {
        taskInputRef.current.value = "";
      }
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>ToDo List</h1>

      {/* Input field with ref */}
      <input type="text" ref={taskInputRef} placeholder="Enter a new task" />

      {/* Button to add task */}
      <button onClick={addTodo} style={{ margin: "10px" }}>
        Add Task
      </button>

      {/* Render the list of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseRef;
