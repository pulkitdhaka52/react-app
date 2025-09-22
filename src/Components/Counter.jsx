import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/reducers/counterSlice";


export default function Counter(){
    const {count} = useSelector((state)=> state.counter);
    const dispatch = useDispatch();
    return (
        <>
            Hello this is a counter game....
            Count is {count}
            <button onClick={()=>dispatch(increment())}>Increement++</button>
            <button onClick={()=>dispatch(decrement())}>Decreement--</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </>
    )
}