// 📁 src/context/TodoContext.js
import React, { createContext, useReducer, useEffect } from 'react';

const TodoContext = createContext();
const API_URL = 'http://localhost:5000/todos';

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'SET_TODOS':
      return action.payload;
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Fetch all todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        dispatch({ type: 'SET_TODOS', payload: data });
      } catch (err) {
        console.error('Failed to fetch todos:', err);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    const newTodo = { title };
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    dispatch({ type: 'ADD_TODO', payload: data });
  };

  const updateTodo = async (todo) => {
    const res = await fetch(`${API_URL}/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    const data = await res.json();
    dispatch({ type: 'UPDATE_TODO', payload: data });
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <TodoContext.Provider value={{ todos: state, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
