import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";

export default function CompletedTodos() {
  const completed = useSelector(state =>
    state.todos.filter(todo => todo.completed)
  );

  return (
    <div>
      <h1>Completed Todos</h1>
      {completed.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => {}}
          onDelete={() => {}}
        />
      ))}
    </div>
  );
}
