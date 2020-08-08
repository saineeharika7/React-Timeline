import React from 'react'
import './App.css';

function Navs() {
    return (
        <div>
        <nav class="navbar bg-light"></nav>
        <ul className="navbar-nav">
            <li className="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a class="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a class="nav-link" href="#">Privacy</a></li>
            <li className="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
            <li className="nav-item"><a class="nav-link" href="#">Copyright 2020</a></li>
        </ul>
        </div>
    )
}

export default Navs
