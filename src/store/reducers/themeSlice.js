import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: "theme",
    initialState:{value: "dark"},
    reducers:{
        changeTheme: (state)=>{
            state.value = state.value =='dark' ? 'light': 'dark';
        },
        resetTheme: (state)=>{
            state.value = 'light'
        }
    }
})


export default themeSlice.reducer;

export const {changeTheme, resetTheme} = themeSlice.actions;