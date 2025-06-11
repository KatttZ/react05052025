import { Link } from "react-router-dom";

export default function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <Link to={`/todos/${todo.id}`}>
        <strong>{todo.task}</strong> - {todo.completed ? "Completed" : "Not Completed"}
      </Link>
    </div>
  );
}
