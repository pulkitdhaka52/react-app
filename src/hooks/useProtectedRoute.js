import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function useProtectRoute(){
    const [storedValue, setValue] = useLocalStorage('token');
    
    if(!!storedValue){
        return true;
    }else{
        return false;
    }
}