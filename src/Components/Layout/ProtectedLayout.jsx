import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import useProtectRoute from "../../hooks/useProtectedRoute";

export default function ProtectedLayout(){
    const isAuth = useProtectRoute();


    return ( !!isAuth ? (
        <div>
        <header>
            <div style={{display:"flex", gap: "20px", border: "2px solid black", margin: "10px 0px", padding:"10px 0px"}}>

                <Link  to="/dashboard">Dashboard</Link>
                <Link  to="/user">User Module</Link>
                <Link  to="/pagination">Pagination</Link>
                <Link  to="/lift">Lift</Link>
                <Link  to="/todo">Todo</Link>
                <Link  to="/counter">Counter</Link>
                <Link  to="/upload">Upload</Link>
            </div>
            
        </header>
            <Outlet />
        <footer>
            Site Footer     
        </footer>            
    </div>
    ): (
        <Navigate to="/login" replace/>
    )
        
    )
}