import React, { useContext, useState } from 'react';
import TodoContext from '../context/ToDoContext';

function TodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useContext(TodoContext);
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = () => {
    if (newTitle.trim()) {
      addTodo(newTitle);
      setNewTitle('');
    }
  };

  const handleUpdate = (todo) => {
    const updatedTitle = prompt('Edit todo:', todo.title);
    if (updatedTitle && updatedTitle !== todo.title) {
      updateTodo({ ...todo, title: updatedTitle });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Todo List</h2>
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{' '}
            <button onClick={() => handleUpdate(todo)}>Edit</button>{' '}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
