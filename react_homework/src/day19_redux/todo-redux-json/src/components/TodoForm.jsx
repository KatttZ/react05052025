import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todoReducer";

export default function TodoForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) {
      inputRef.current.focus();
      return;
    }

    const res = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    });

    const data = await res.json();
    dispatch(addTodo(data));
    setTask("");
  };

  return (
    <div>
      <h2>React Redux Todo App</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}
