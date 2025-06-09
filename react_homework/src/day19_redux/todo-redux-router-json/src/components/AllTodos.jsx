import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodosThunk, addTodoThunk, deleteTodoThunk, toggleTodoThunk } from "../reducers/todoReducer";
import TodoItem from "../components/TodoItem";

export default function AllTodos() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [task, setTask] = useState("");

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodoThunk(task));
      setTask("");
    }
  };

  return (
    <div>
      <h1>All Todos</h1>
      <input className='add-todo-input' value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleAdd} className="add-button">+</button>

      {todos.map(todo => (
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
