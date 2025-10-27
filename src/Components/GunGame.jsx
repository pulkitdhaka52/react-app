import React, {useCallback, useState} from "react";

function throttleFn (fn, delay){
    let flag = true;
    return function(...args){
        if(flag){
            fn.apply(this, args);
            flag = false;
        }
        setTimeout(()=>{
            flag = true;
        }, delay)
    }
}

function debounceFn (fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        console.log(args,"argsargs")
        timer = setTimeout(()=>{
            console.log(args,"argsargs-----")
            fn.apply(this, args);
        }, delay)
    }
}

function GunGame(){
    const [throttleText, setThrottleText] = useState("");
    const [debounceText, setDebounceText] = useState("");
    
    const handleThrottleChange =(e)=>{
        setThrottleText(e.target.value);
    }
    const handleDebounceChange =(e)=>{
        setDebounceText(e.target.value);
    }

    // const throttleChange = useCallback(throttleFn(handleThrottleChange, 500),[]);
    const debounceChange = useCallback(debounceFn(handleDebounceChange, 300),[]);
    
    return (
        <>
            {/* <div>
                <span>Throttle: {throttleText}</span>
                <input type="text" name="throtlleInput" onChange={throttleChange} value={throttleText}/>
            </div> */}
            <br/>
            <div>
                <span>Debounce: {debounceText}</span>
                <input type="text" name="debounceInput" onChange={debounceChange} value={debounceText}/>
            </div>
            <br/>
            
        </>
    )
}

export default GunGame;