import { useDispatch } from "react-redux";
import { deleteTodo,toggleTodo } from "../reducers/todoReducer";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: "DELETE",
    });
    dispatch(deleteTodo(todo.id));
  };
  return (
    <li>
      <input type="checkbox" onChange={() => dispatch(toggleTodo(todo.id))} />
      <span className={todo.completed?"todo-item":""}>
      {todo.task}

      </span>
      <button onClick={handleDelete}>🗑️</button>
    </li>
  );
}
