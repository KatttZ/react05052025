import Checkbox from "../ControlledComponents/Checkbox";
import RadioGroup from "../ControlledComponents/RadioGroup";
import Select from "../ControlledComponents/Select";
import { useState } from "react";

export default function TodoListApp() {
  // write your todo list app here
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    // @ts-ignore
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  // @ts-ignore
  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };
  // @ts-ignore
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index]);
  };

  const handleSave = () => {
    if (editingText.trim() === "") return;
    const updated = todos.map((item, i) =>
      i === editingIndex ? editingText : item
    );
    // @ts-ignore
    setTodos(updated);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <Checkbox />
      <RadioGroup />
      <Select />
    </div>
  );
}
