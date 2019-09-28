import React from 'react';
import './home.css'
import LinkedIn from './images/LinkedIn.png'
import GitHub from './images/GitHub-Dark.png'
import IG from '../Work/images/glyph-logo_May2016.png'

function Home() {
    return (
        <div className="Home-page">
            <div className="LeftPicture">
            </div>
            <div className="Intro">
                <div className="Intro-1">
                    Hey! I am
                </div>
                <div className="Intro-2">
                    Shaurya Sinha
                </div>
                <div className="Intro-3">
                    I'm an undergraduate student studying Computer Science at Purdue University where I am currently a senior. I will graduate 
                    in December 2019 after which I'll be joining Facebook as a full-time Software Engineer. I have full stack web
                    development and iOS development experience. Get in touch!
                </div>

                <div className="Intro-logos">
                    <img src={GitHub} alt="Github logo" className="gitHubLogo" />
                    <img src={LinkedIn} alt="LinkedIn logo" className="linkedInLogo" />
                    <img src={IG} alt="Instagram logo" className="gitHubLogo" />
                </div>
            </div>
        </div>
    );
}

export default Home;