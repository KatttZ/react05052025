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

// Reducer 
const initialState = [];

export default function todoReducer(state=initialState, action){
    switch (action.type){
        case SET_TODOS:
            return action.payload;
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.payload ? {...todo, completed:!todo.completed} : todo )
        default:
            return state;
    }
}