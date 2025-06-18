const express = require('express')
const shortid = require("shortid")
const app = express()
const PORT = 3000;


// middleware to parse JSON request bodies
app.use(express.json())


let todos = [];


// Get all todos routes

app.get("/todos", (req, res) => {
  res.status(200).json({ message: "Todos fetched", todos });
});



// POST a new todo
app.post("/todos", (req, res) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({message:"Name is required!"})
    }

    const newTodo = {
        id: shortid.generate(),
        name,
        completed:false
    }

    todos.push(newTodo)
    res.status(201).json({message:"Todo created", todo:newTodo})
})


// PUT (update) a todo by ID
app.put("/todos/:id", (req, res) => {
    const {id} = req.params;
    const {name, completed} = req.body;

    const todo = todos.find(t => t.id === id);
    if(!todo){
        return res.status(404).json({message:"Todo not found"})
    }
    if(name) todo.name = name;
    if(completed) todo.completed = completed;

    res.status(200).json({message:"Todo updated successfully", todo})

})


// DELETE a todo by ID
app.delete("/todos/:id", (req, res) => {
    const {id} = req.params;
    const index = todos.findIndex(t => t.id === id)

    if(index === -1){
        res.status(404).json({message:"Todo not found"})
    }
    // splice return a new array, so will be the first element
    const deletedTodo = todos.splice(index, 1)[0]

    res.status(200).json({message:"Todo deleted", todo:deletedTodo})
})













// start server
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})