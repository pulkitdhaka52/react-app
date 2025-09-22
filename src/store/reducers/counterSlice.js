import { createSlice } from "@reduxjs/toolkit";
/**
 * 
 * Redux toolkit uses immer library because of that it looks like we are directly 
 * mutating the data, but not actually under the hood it is doing so.
 */
const counterSlice = createSlice({
    name: "counter",
    initialState:{count:0},
    reducers:{
        increment: (state) =>{
             state.count++; //return { ...state, count: state.count + 1 }; // immutable update
        },
        decrement:(state)=>{
             state.count--;
        },
        reset:(state)=>{
            state.count =0
        }
    }
})

export default counterSlice.reducer;
export const {increment, decrement, reset} = counterSlice.actions;