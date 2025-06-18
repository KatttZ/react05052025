const express = require("express");
const shortid = require("shortid");

const app = express();
const PORT = 3000;

// middleware to parse JSON body
app.use(express.json());

const todos = [{ id: shortid.generate(), name: "Wash", completed: false }];

app.get("/todos", (req, res) => {
  // res.send(todos)  same like json
  res.status(200).json({ message: "get todos successfully", todos });
});

app.post("/todos", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Todo name is required" });
  }
  const newTodo = { id: shortid.generate(), name, completed: false };
  todos.push(newTodo);
  res
    .status(200)
    .json({ message: "Data received successfully", todo: newTodo });
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { name, completed } = req.body;

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (name) todo.name = name;
  if (completed) todo.completed = completed;

  res.status(200).json({ message: "Todo updated successfully", todo });
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  //array.splice return a new array so need to destructure it 
  const [deletedTodo] = todos.splice(index, 1);

  res.status(200).json({
    message: "Todo deleted successfully",
    data: deletedTodo,
  });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
