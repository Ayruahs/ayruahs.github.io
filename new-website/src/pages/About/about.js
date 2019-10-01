import React from 'react';
import './about.css'
import {withRouter, Link} from 'react-router-dom';
import ReactGA from 'react-ga';
import funkWavBounces from "./images/baker_beach2.jpg"

ReactGA.initialize('UA-102330182-1');
ReactGA.pageview('/contact');

function About(props) {
    return (
        <div className="Home-page">
            <img className="LeftPicture" src={funkWavBounces} />
            
            <div className="Intro">
                <div className="Intro-1">
                    Hey! I am
                </div>
                <div className="Intro-2">
                    Shaurya Sinha
                </div>
                <div className="Pronunciation">
                    (SHAWR-yuh sin-HA)
                </div>
                <div className="Intro-3">
                    I'm a software developer from New Delhi.
                    <br />
                    <br />
                    I am currently a senior majoring in Computer Science at Purdue University, I will graduate in December 2019 with a minor in Math.
                    I have experience developing full stack web and iOS applications and am currently trying to pick up design. I am
                    looking for full-time SWE opportunities.  
                    <br />
                    <br />
                    I'm passionate about solving problems and making people's lives easier through software and technology. I enjoy pushing my boundaries and
                    getting out of my comfort zone. In my free time, I love rock climbing, playing soccer, eating dessert, and watching movies. 
                    <br />
                    <br />
                    <br />
                    <br />
                    Get in touch to know more!
                </div>
            </div>
        </div>
    );
}

export default withRouter(About)