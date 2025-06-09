import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = "http://localhost:5000/todos";
const initialState = [];

//Thunks:
export const fetchTodosThunk = createAsyncThunk(
  "todos/fetchTodos,",
  async () => {
    const res = await fetch(API);
    const data = await res.json();
    return data;
  }
);

export const addTodoThunk = createAsyncThunk("todos/addTodo", async (task) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task, complete: false }),
  });
  const data = await res.json();
  return data;
});

export const toggleTodoThunk = createAsyncThunk(
  "todos/toggleTodo",
  async (todo) => {
    const res = await fetch(`${API}/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    const data = await res.json();
    return data;
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosThunk.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(toggleTodoThunk.fulfilled, (state, action) => {
        return state.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        return state.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
