import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Navigate } from "react-router-dom";

export default function protectedRouteHoc(WrappedComponent){
    return function(props){
        const [storedValue] = useLocalStorage('token');
        if(!!storedValue){
            return <WrappedComponent 
                {...props}
            />
        }else{
            return <Navigate to='/login' replace />
        }
    }
}