import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import useProtectRoute from "../../hooks/useProtectedRoute";

export default function ProtectedLayout(){
    const isAuth = useProtectRoute();


    return ( !!isAuth ? (
        <div>
        <header>

            <Link to="/dashboard">Dashboard</Link>
            <Link to="/user">User Module</Link>
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