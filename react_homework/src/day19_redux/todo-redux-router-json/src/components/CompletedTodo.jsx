import { useSelector,useDispatch } from "react-redux";
import { toggleTodoThunk,deleteTodoThunk } from "../reducers/todoReducer";
import TodoItem from "../components/TodoItem";

export default function CompletedTodos() {
  const dispatch = useDispatch();
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
          onToggle={() => dispatch(toggleTodoThunk(todo))}
          onDelete={() => dispatch(deleteTodoThunk(todo.id))}
        />
      ))}
    </div>
  );
}
