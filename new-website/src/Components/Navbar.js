import React from 'react';
import './Navbar.css'
import Button from './Button.js'
import {withRouter, Link} from 'react-router-dom';

function Navbar(props) {
    // var navbarClassName = (props.location.pathname === "/") ? "Navbar-no-shadow" : "Navbar-no-shadow";
    var homeButtonColor = (props.location.pathname === "/") ? "#16acac" : "black";
    var workButtonColor = (props.location.pathname === "/resume") ? "#16acac" : "black";
    var aboutButtonColor = (props.location.pathname === "/about") ? "#16acac" : "black";

    return (
        <nav className="Navbar-no-shadow">
            <div className="Navbar-Left">
                <div className="NameLeft">
                    <a href="/">shaurya sinha</a>
                </div>
            </div>

            <div className="Navbar-Right">
                <label for="hamburger">&#9776;</label>
                <input type="checkbox" id="hamburger" />
                <ul>
                    <li><Link to="/" style={{ textDecoration: 'none' }}> <Button onClick={uncheck} color={homeButtonColor} text="Work" /> </Link></li>
                    <li><Link to="/resume" style={{ textDecoration: 'none' }}> <Button onClick={uncheck} color={workButtonColor} text="Resume" /> </Link></li>
                    <li><Link to="/about" style={{ textDecoration: 'none' }}><Button onClick={uncheck} color={aboutButtonColor} text="About"  /></Link></li>
                </ul>
            </div>
        </nav>
    );
}

function uncheck() {
    document.getElementById("hamburger").checked = false;
 }

export default withRouter(Navbar)