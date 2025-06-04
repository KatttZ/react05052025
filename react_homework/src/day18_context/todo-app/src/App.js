import { TodoProvider } from "./context/ToDoContext";
import TodoList from "./components/ToDoList";
import './App.css'

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
