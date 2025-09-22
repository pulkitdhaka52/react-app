import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div>
            <header>

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact-us">Contact Us</Link>
            </header>
                <Outlet />
            <footer>
                Site Footer     
            </footer>            
        </div>
    )
}