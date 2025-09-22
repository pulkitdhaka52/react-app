import React, { useEffect, useState } from "react";
import useApiCall from "../hooks/useApiCall";

export default function Pagination() {
    const {data=[], loading, error} = useApiCall("https://jsonplaceholder.typicode.com/users");
    const [pageNo, setPageNo] = useState(1);
    const perPage = 3;
    const [paginatedData, setPaginatedData] = useState([])
    
    const pageCount = Math.ceil(data.length/perPage);

    useEffect(()=>{
        if(data.length > 0){
             const start = (pageNo - 1) * perPage;
            const end = pageNo * perPage;
            setPaginatedData(data.slice(start, end));
        }
        
    }, [pageNo, data])
    return (
        error ? 
                <h2>{error}</h2> : 
                loading ? 
                    (<h2>Data loading....</h2>) : 
                paginatedData?.length > 0 && (
                    <>
                    <ul>
                    {paginatedData.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                    </ul>
                    {Array.from({ length: pageCount }, (_, index) => (
                        <button key={index} onClick={()=>setPageNo(index+1)}>
                            Page {index + 1}
                        </button>
                    ))}
                    </>
                )
                
    )
}