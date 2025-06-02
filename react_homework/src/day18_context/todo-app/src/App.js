import React from 'react';
import { TodoProvider } from './context/ToDoContext';
import TodoList from './components/ToDoList';

function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

export default App;
