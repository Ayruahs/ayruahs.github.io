import React from 'react';
import './home.css'
import Footer from '../../Components/Footer.js'
import IG from '../Work/images/glyph-logo_May2016.png'
import face from './images/baker_beach4.jpg'
import fulcrumLogo from '../Work/images/fulcrum.png'
import PurdueLogo from './images/PurdueAppLogo.png'

function Home() {
    return (
        <div>
        <div className="Home">
            <div className="face-header">
                <div>
                <img className="Face" src={face} />
                </div>
                <div className="Name">Shaurya Sinha</div>
            </div>
            <div className="Work-Section">
                <div className="Work-Text">
                    <div className="Work-Title">
                        Instagram - Software Engineering Internship
                    </div>
                    <div className="Work-Body">
                        At Instagram I was part of the Instagram Stories Interactivity and Feedback 
                        Team. I worked on the iOS app to create new user experiences for users to 
                        facilitate reacting to IG Stories in new ways.
                    </div>
                    <div className="Work-Date">
                        Summer 2019
                    </div>
                </div>
                <div className="Insta">
                    <img className="Instalogo" src={IG} />
                </div>
            </div>

            <div className="Work-Section">
                <div className="Work-Text">
                    <div className="Work-Title">
                        Fulcrum GT - Software Engineering Internship
                    </div>
                    <div className="Work-Body">
                        I developed an application using React.js for IP attorneys and graphic designers 
                        to allow them to swiftly determine if their logo is likely to infringe on any 
                        trademarks using Content-Based Image Retrieval and Computer Vision.
                    </div>
                    <div className="Work-Date">
                        Summer 2018
                    </div>
                </div>
                <div className="fulcrum">
                    <img className="fulcrumLogo" src={fulcrumLogo} />
                </div>
            </div>

            <div className="Work-Section">
                <div className="Work-Text">
                    <div className="Work-Title">
                        Purdue iOS App - Backend Developer
                    </div>
                    <div className="Work-Body">
                        As part of the iOS Development Club, I worked on the backend of the Purdue App
                        on iOS that has thousands of daily active users and more downloads than the 
                        official Purdue app.
                    </div>
                </div>
                <div className="fulcrum">
                    <img className="purdueLogo" src={PurdueLogo} />
                </div>
            </div>
        </div>
        {/* <Footer /> */}
        </div>
    );
}

export default Home;