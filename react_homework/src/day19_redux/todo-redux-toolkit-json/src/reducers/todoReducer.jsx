
const API = "http://localhost:5000/todos";

//Actions

const SET_TODOS = 'setTodos';
const ADD_TODO = 'addTodo';
const DELETE_TODO = 'deleteTodo';
const TOGGLE_TODO = 'toggleTodo';


//Action Creators
export const setTodos = (payload) => {
    return {
        type:SET_TODOS,
        payload
    }
}

export const addTodo = (payload) => {
    return {
        type:ADD_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type:DELETE_TODO,
        payload
    }
}

export const toggleTodo = (payload) => {
    return {
        type:TOGGLE_TODO,
        payload
    }
}

//thunk:
export const fetchTodosThunk = () => async (dispatch) => {
    const res = await fetch(API);
    const data = await res.json();
    dispatch({type:SET_TODOS, payload:data})
}

export const addTodoThunk = (task) => async (dispatch) => {
    const res = await fetch(API, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({task,completed:false})
    })
    const data = await res.json();
    dispatch({type:ADD_TODO, payload:data})
}

export const toggleTodoThunk = (todo) => async (dispatch) => {
    const res = await fetch(`${API}/${todo.id}`, {
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({completed:!todo.completed})
    })
    const data = await res.json();
    dispatch({type:TOGGLE_TODO, payload:data})
}

export const deleteTodoThunk = (id) => async (dispatch) => {
    await fetch(`${API}/${id}`, {
        method:"DELETE",
    })
    dispatch({type:DELETE_TODO, payload:id})
}

// Reducer 
const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.payload;
    case ADD_TODO:
      return [...state,action.payload];
    case DELETE_TODO:
        return state.filter(todo => todo.id !== action.payload)
    case TOGGLE_TODO:
        return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
    default:
      return state;
  }
};


export default todoReducer;