//Action

const TOGGLE_THEME = 'toggleTheme';


//Action creator
export const toggleTheme = () => {
    return {
        type: TOGGLE_THEME
    }
}

//Reducer
const initialState = 'light';

export default function themeReducer(state=initialState, action){
    switch(action.type){
        case TOGGLE_THEME:
            return state === 'light' ? 'dark' : 'light';
        default:
            return state;
    }
}