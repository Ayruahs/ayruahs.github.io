import React from 'react';
import './insta.css'
import ReactGA from 'react-ga';
import {withRouter} from 'react-router-dom';
import leafyIG from '../images/Instahero.png'
import colorIG from '../images/InstaMPK.png'

ReactGA.initialize('UA-102330182-1');
ReactGA.pageview('/insta');

function Insta(props) {
    return (
        <div className="Insta-page">
            <div className="InstaHero">
                <img className="InstaHeroImage" src={leafyIG} />
            </div>

            <div className="DetailContainer">
                <div className="Title">Instagram</div>

                <div className="Details">
                    I was a software engineering intern at Instagram during the summer of 2019. I worked as an iOS developer on the IG 
                    Stories Interactivity and Feedback team in San Francisco. With more than 500 million daily active users, IG Stories
                    provided an amazing opportunity to make an impact at a scale very few products can achieve.
                    <br/>
                    <br/>
                    It was my first time working at a large tech company and it took some time getting used to industry practices and 
                    the vast array of internal tools. I was able to learn and grow more than I thought possible before starting
                    my internship. I regularly met with engineers from different teams and UX designers to complete my project which also
                    allowed me to improve my cross-functional communication skills. It was extremely exciting seeing my features actually
                    be launched in the wild with real users testing them. The most rewarding part of the entire summer was simply the
                    number of supremely talented engineers, designers, product managers, data scientists, and fellow interns that I got to
                    live and work with, making it my favorite summer yet!
                </div>
                <div className="InstaMPK">
                    <img className="InstaMPKImage" src={colorIG} />
                </div>
            </div>
        </div>
    );
}

export default withRouter(Insta)