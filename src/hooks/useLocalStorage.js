import React, {useState, useEffect} from "react";

export default function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState(()=>{
        const item = localStorage.getItem(key);
        return item !== null ? item : initialValue;
    });

    const setValue =(value) =>{
        setStoredValue(value);
        localStorage.setItem(key, value);
    }

    return [storedValue, setValue];
    
}