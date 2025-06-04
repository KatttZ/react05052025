import { useContext, useRef, useState } from "react";
import TodoContext from "../context/ToDoContext";

function TodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useContext(TodoContext);
  const [newTitle, setNewTitle] = useState("");
  const InputRef = useRef();

  const handleAdd = () => {
    if (newTitle.trim()) {
      addTodo(newTitle);
      setNewTitle("");
    } else {
      InputRef.current.focus()
    }
  };

  const handleUpdate = (todo) => {
    const updatedTitle = prompt("Edit todo:", todo.title);
    if (updatedTitle && updatedTitle !== todo.title) {
      updateTodo({ ...todo, title: updatedTitle });
    }
  };

  return (
    <div className="to-do-list">
      <h2>Todo List</h2>
      <input
        ref={InputRef}
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAdd}>Add</button>

      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span>{todo.title}</span>
          <div className="button-group">
            <button onClick={() => handleUpdate(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
