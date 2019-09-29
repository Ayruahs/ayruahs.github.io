import React from 'react';
import './Navbar.css'
import Button from './Button.js'
import {withRouter, Link} from 'react-router-dom';

function Navbar(props) {
    var navbarClassName = (props.location.pathname === "/") ? "Navbar-no-shadow" : "Navbar-no-shadow";
    var homeButtonColor = (props.location.pathname === "/") ? "#16acac" : "black";
    var workButtonColor = (props.location.pathname === "/work") ? "#16acac" : "black";
    var aboutButtonColor = (props.location.pathname === "/contact") ? "#16acac" : "black";

    return (
        <div className={navbarClassName}>
            <div className="Navbar-Left">
                {/* <div className="Name">
                    Shaurya Sinha
                </div> */}
            </div>
            <div className="Navbar-Right">
                <Link to="/" style={{ textDecoration: 'none' }}> <Button color={homeButtonColor} text="Home" /> </Link>
                <Link to="/work" style={{ textDecoration: 'none' }}> <Button color={workButtonColor} text="Work" /> </Link>
                <Link to="/contact" style={{ textDecoration: 'none', marginRight:'25px' }}><Button color={aboutButtonColor} text="Contact"  /></Link>
            </div>
        </div>
    );
}

export default withRouter(Navbar)