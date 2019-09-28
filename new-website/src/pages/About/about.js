import React from 'react';
import './about.css'
import {withRouter, Link} from 'react-router-dom';
import Rocks from './images/baker_beach.jpg'

function About(props) {
    return (
        <div className="Container">
        <div className="About">
            <div className="Header">
                Hello, my name is Shaurya.
            </div>
            <div className="Text-and-picture">
                
                <div className="Text">
                    🏖️ Fan of long walks on the beach <br />
                    🧗‍♂️ Rock climber <br />
                    ⚽ Soccer player <br />
                    🍩 Dessert connoisseur <br />
                    👨🏻‍💻 Software Engineer <br />
                </div>
                <img src={Rocks} alt="Picture of me on rocks by the beach" className="Picture" />
            </div>
        </div>
        </div>
    );
}

export default withRouter(About)