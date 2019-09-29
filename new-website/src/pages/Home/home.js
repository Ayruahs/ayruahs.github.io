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
                    I'm an undergraduate student studying Computer Science at Purdue University where I am currently a senior. I have experience developing
                    full stack web and iOS applications and am trying to learn design. I will graduate in December 2019 after which I'll be joining Facebook as 
                    a full-time Software Engineer.  Get in touch!
                </div>

                <div className="Intro-logos">
                    <a href="https://github.com/Ayruahs" target="_blank"><img src={GitHub} alt="Github logo" className="gitHubLogo" /></a>
                    <a href="https://www.linkedin.com/in/shaurya-sinha/" target="_blank"><img src={LinkedIn} alt="LinkedIn logo" className="linkedInLogo" /></a>
                    <a href="https://www.instagram.com/shauryasinha/" target="_blank"><img src={IG} alt="Instagram logo" className="gitHubLogo" /></a>
                </div>
            </div>
        </div>
    );
}

export default Home;