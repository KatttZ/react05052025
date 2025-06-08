export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.task}
      </span>
      <button onClick={() => onToggle(todo)}>✅</button>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>
  );
}
