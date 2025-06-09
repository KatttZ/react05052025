export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div>
      <span className={todo.completed ? "completed-item" : ""}>
        {todo.task}
      </span>
      <button onClick={() => onToggle(todo)}>✅</button>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>
  );
}
