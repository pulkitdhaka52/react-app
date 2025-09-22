import React from "react";
import protectedRouteHoc from "../hoc/ProtectRouteHoc";
import useProtectRoute from "../hooks/useProtectedRoute";
import { Navigate } from "react-router";


export default function Dashboard(){

    // const isAuth = useProtectRoute();
    return(
        // isAuth ? (
            <div>
                <h2>Dashboard </h2>
                <p>
                        Welcome to the user login
                </p>
            </div> 
            
        // ) : (
            // <Navigate to="/login" replace />   
        // )
    )
}

// export default protectedRouteHoc(Dashboard);