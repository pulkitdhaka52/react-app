import React, { useReducer, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { generateRandomToken } from "../utils/common";
import { Navigate } from "react-router-dom"; 

const initialState = {
    email:"",
    password:""
}

const formReducer = (state, action) =>{
    switch (action.type){
        case "updateField":{
            return {...state,
                [action.field] : action.value
            }
        }
        case "reset":{
            return initialState;
        }
    }
}

export default function LoginForm() {
    const [formState, dispatch] = useReducer(formReducer,initialState );
    const [error, setError] = useState("");
    const [token, setValue] = useLocalStorage('token','');

    if(token !=''){
        return <Navigate to='/' replace />
    }
    
    const handleInputField = (e) =>{
        dispatch({
            type: "updateField",
            field: e.target.name,
            value: e.target.value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(formState.email && formState.password){
            setValue(generateRandomToken(32));
            <Navigate to="/" replace />
        }else{
            setError("Please enter values...")
        }
    }
    return(
        <>
            <h2>Login Form Component</h2>
            {error && <div><span style={{ fontSize: "15px",color: "red", margin: "10px 0px 20px 5px" }}>{error}</span></div>}
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={formState.email}  onChange={handleInputField}/>
                <input type ="password" name="password" placeholder="Password" value={formState.password}  onChange={handleInputField} />
                <button type="submit">Login</button>
            </form>
        </>
    )
}