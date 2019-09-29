import React from 'react';
import './about.css'
import {withRouter, Link} from 'react-router-dom';
import Park from './images/dolores.jpg'
import LinkedIn from '../Home/images/LinkedIn.png'
import IG from '../Work/images/glyph-logo_May2016.png'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-102330182-1');
ReactGA.pageview('/contact');

function About(props) {
    return (
        <div className="Container">
        <div className="About">
            <div className="Header">
                Hello, my name is Shaurya.
            </div>
            <div className="Pronunciation">
                (SHAWR-yuh)
            </div>
            <div className="Text-and-picture">
                <img src={Park} alt="Picture of me sitting on grass in a park" className="Picture" />
                <div className="Text">
                    I like: <br />
                    🏖️ long walks on the beach <br />
                    🧗‍ climbing <br />
                    ⚽ playing soccer <br />
                    🍩 eating dessert <br />
                    🎵 music festivals <br />
                    👨🏻‍💻 software engineering <br />
                    <br />
                    <br />
                    Connect with me to know more: 
                    <br />
                    <br />
                    <a href="mailto: sinha35@purdue.edu"><img src="https://img.icons8.com/ios/50/000000/email-open.png" className="logos" /></a>
                    <a href="https://www.linkedin.com/in/shaurya-sinha/" target="_blank"><img src={LinkedIn} alt="LinkedIn logo" className="LinkedInlogo" /></a>
                    <a href="https://www.instagram.com/shauryasinha/" target="_blank"><img src={IG} alt="Instagram logo" className="logos" /></a>
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default withRouter(About)