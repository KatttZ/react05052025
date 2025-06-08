import ThemeToggle from "./components/ThemeToggle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllTodos from "./components/AllTodos";
import CompletedTodos from "./components/CompletedTodo";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";
export default function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`body-${theme}`);
  }, [theme]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeToggle />
        <nav>
          <Link to="/">All Todos</Link> | <Link to="/completed">Completed</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AllTodos />} />
          <Route path="/completed" element={<CompletedTodos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
