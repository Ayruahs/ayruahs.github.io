import React from 'react';
import './home.css'
import IG from '../Work/images/glyph-logo_May2016.png'
import fulcrumLogo from '../Work/images/fulcrum.png'
import PurdueLogo from './images/PurdueAppLogo.png'
import CelebrityRecognition from './images/CelebrityRecognition.png'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
        <div className="HomePage">
            <div className="Work-Section-Row">
                <div className="face-header">
                    <div className="IntroBlurb">
                        <div style={{fontFamily: 'Montserrat', fontSize: "40px", lineHeight: "50px"}}>
                        Hi! I am Shaurya <span role="img" aria-label="Handwave emoji">👋🏽</span> <br/>
                        </div>
                        Incoming Software Engineer at Facebook/Instagram. <br/>
                        CS Student at Purdue University.
                    </div>
                </div>
            </div>

            <div className="Work-Section-Row">
                <div className="Work-Section" id="Insta">
                    <Link to="/insta"> 
                        <div className="Work-Text">
                            <div className="Work-Title">
                                Instagram
                            </div>
                            <div className="Work-Body">
                                Software Engineering Internship
                            </div>
                            
                        </div>
                    </Link>
                    <div>
                        <img alt="Instagram logo" className="Instalogo" src={IG} />
                    </div>
                </div>
                    <div className="Work-Section" id="Fulcrum">
                        <Link to="/fulcrum"> 
                            <div className="Work-Text">
                                <div className="Work-Title">
                                    Fulcrum GT 
                                </div>
                                <div className="Work-Body">
                                Software Engineering Internship
                                </div>
                            </div>
                        </Link>
                        <div>
                            <img alt="Fulcrum GT logo" className="fulcrumLogo" src={fulcrumLogo} />
                        </div>
                    </div>
            </div>

            <div className="Work-Section-Row">
                    <div className="Work-Section Work-Section-Purdue" id="Purdue">
                        <div className="Work-Text">
                            <div className="Work-Title">
                                Purdue iOS App 
                            </div>
                            <div className="Work-Body">
                                Backend Developer
                            </div>
                        </div>
                        <div>
                            <img alt="Purdue App logo" className="purdueLogo" src={PurdueLogo} />
                        </div>
                    </div>

                    <div className="Work-Section" id="CelebrityRecognition">
                        <div className="Work-Text">
                            <div className="Work-Title">
                                Celebrity Recognition
                            </div>
                            <div className="Work-Body">
                                iOS Developer
                            </div>
                        </div>
                        <div>
                            <img alt="Side project logo" className="celebRecogLogo" src={CelebrityRecognition} />
                        </div>
                    </div>
            </div>
        </div>
        {/* <Footer /> */}
        </div>
    );
}

export default Home;