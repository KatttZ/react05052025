import { useSelector } from "react-redux";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useEffect } from "react";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`body-${theme}`)
  },[theme])

  return (
    <div className="App">
      <TodoForm />
      <ThemeToggle />
      <TodoList />
    </div>
  );
}

export default App;
