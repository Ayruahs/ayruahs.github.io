import React from 'react';
import './Navbar.css'
import Button from './Button.js'
import {withRouter, Link} from 'react-router-dom';

function Navbar(props) {
    var navbarClassName = (props.location.pathname === "/") ? "Navbar-no-shadow" : "Navbar-no-shadow";
    var homeButtonColor = (props.location.pathname === "/") ? "#16acac" : "black";
    var workButtonColor = (props.location.pathname === "/resume") ? "#16acac" : "black";
    var aboutButtonColor = (props.location.pathname === "/about") ? "#16acac" : "black";

    return (
        <div className={navbarClassName}>
            <div className="Navbar-Left">
                <div className="NameLeft">
                    <a href="/">Shaurya Sinha</a>
                </div>
            </div>
            <div className="Navbar-Right">
                <Link to="/" style={{ textDecoration: 'none' }}> <Button color={homeButtonColor} text="Work" /> </Link>
                <Link to="/resume" style={{ textDecoration: 'none' }}> <Button color={workButtonColor} text="Resume" /> </Link>
                <Link to="/about" style={{ textDecoration: 'none', marginRight:'25px' }}><Button color={aboutButtonColor} text="About"  /></Link>
            </div>
        </div>
    );
}

export default withRouter(Navbar)