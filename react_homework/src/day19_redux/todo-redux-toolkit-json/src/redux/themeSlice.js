import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name:"theme",
    initialState:"light",
    reducers:{
        toggleTheme:(state,action) => {
            return state === 'light' ? 'dark' : 'light'
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;