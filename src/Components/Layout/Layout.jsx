import React from "react";
import { Link, Outlet } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function Layout(){
    const {theme} = useSelector((state) => state.theme)
    const dispatch = useDispatch();

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