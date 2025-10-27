import React from 'react';
import {Link} from 'react-router-dom'

export default function NotFound(){
    return(
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404</h1>
            <h2>Oops! Page not found.</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Go to Home</Link>
        </div>
    )
}