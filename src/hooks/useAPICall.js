import React, { useEffect, useState } from "react";

export default function useApiCall(url){
    const [data,setData] = useState("");
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const controller = new AbortController();

        async function fetchApi() {
            try {
            const response = await fetch(url, { signal: controller.signal });
            const result = await response.json();
            setData(result);
            } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message);
            }
            } finally {
            setLoading(false);
            }
        }

        fetchApi();

        return () => {
            controller.abort(); // cancels the fetch if unmounted
        };
    }, [url]);


    return {
        data, 
        loading, 
        error
    }
}