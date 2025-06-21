const shortid = require("shortid");

const todos = [];

// GET all todos for current user
const getUserTodos = async (req, res) => {
  const userTodos = todos.filter((todo) => todo.userId === req.userId);
  res.status(200).json({ message: "Todos fetched", todos: userTodos });
};

// GET todo by ID
const getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (todo.userId !== req.userId) {
    return res.status(403).json({ message: "Access not allowed" });
  }

  res.status(200).json({ message: "Todo fetched", todo });
};

// POST a new todo for current user
const createTodo = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required!" });
  }

  const newTodo = {
    userId: req.userId,
    id: shortid.generate(),
    title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json({ message: "Todo created", todo: newTodo });
};

// PUT update a todo by ID for current user, if todo not belongs to current user will be forbidden
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  if (todo.userId !== req.userId) {
    return res.status(403).json({ message: "Access not allowed" });
  }
  if (title) todo.title = title;
  if (typeof completed === "boolean") todo.completed = completed;

  res.status(200).json({ message: "Todo updated successfully", todo });
};

// DELETE a todo by ID for current user, if todo not belongs to current user will be forbidden
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === id);
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Todo not found" });
  }
  if (todo.userId !== req.userId) {
    return res.status(403).json({ message: "Access not allowed" });
  }
  // splice return a new array, so will be the first element
  const deletedTodo = todos.splice(index, 1)[0];

  res.status(200).json({ message: "Todo deleted", todo: deletedTodo });
};

module.exports = {
  getUserTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
