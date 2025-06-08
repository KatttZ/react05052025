import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../reducers/todoReducer";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("http://localhost:5000/todos");
      const data = await res.json();
      dispatch(setTodos(data));
    };
    fetchTodos();
  }, [dispatch]);

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}
