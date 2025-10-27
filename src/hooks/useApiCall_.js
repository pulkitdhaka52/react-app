import React, {useEffect, useState} from "react";


export default function useApiCall(api){
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response= await fetch(api);
                const result = await response.json();
                setData(result);
                setLoading(false)
            }catch(ex){
                setError(ex.message)
            }
        }
        fetchData();
    }, [
        api
    ])

    return {
        data, 
        loading,
        error
    }
}


