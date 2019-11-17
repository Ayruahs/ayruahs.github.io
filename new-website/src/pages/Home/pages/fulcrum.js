import React from 'react';
import './fulcrum.css'
import ReactGA from 'react-ga';
import {withRouter} from 'react-router-dom';
import FulcrumLogo from '../images/FulcrumBanner.JPG'
import ChicagoLastDay from '../images/ChicagoLastDay.gif'
import Hancock from '../images/Hancock.png'
import LollaOdesza from '../images/LollaOdesza.png'

ReactGA.initialize('UA-102330182-1');
ReactGA.pageview('/fulcrum');

function Fulcrum(props) {
    return (
        <div className="Fulcrum-page">
            <div className="FulcrumHero">
                <img alt="My team at Fulcrum GT" className="FulcrumHeroImage" src={FulcrumLogo} />
            </div>

            <div className="FulcrumDetailContainer">
                <div className="Title">Fulcrum GT</div>

                <div className="Details">
                    I worked at Fulcrum GT during the summer of 2018 as a software engineering intern. Over the course of 12 weeks my team
                    developed a patent-pending web application that uses Content-Based Image Retrieval to allow IP attorneys and
                    graphic designers to determine if their logo is unique enough to be trademarked.
                    <br/>
                    <br/>
                    This was my first real work experience as a software engineer where I learnt how to work as a team on a large project. 
                    I worked as a full-stack engineer, developing features for both the front and back ends in a team of four developers,
                    one designer and one product manager. It was an incredibly enriching experience living and working with my team.
                    I collaborated with multiple stakeholders like designers, product managers, and executives to develop a real
                    software product that was demoed at ILTACON 2018. I learned a ton from the engineers and made some great friendships 
                    with fellow interns that summer and got to live and experience an amazingly beautiful city, making it one of my most
                    cherished experiences so far!
                </div>

                <div className="Lolla">
                    <img alt="Fireworks during Odesza at Lollapalooza" className="LollaImage" src={LollaOdesza} />
                </div>

                <div className="LastDay">
                    <img alt="Downtown on my last day in Chicago" className="LastDayImage" src={ChicagoLastDay} />
                </div>

                <div className="Hancock">
                    <img alt="Looking down from the Hancock Tower" className="HancockImage" src={Hancock} />
                </div>
            </div>
        </div>
    );
}

export default withRouter(Fulcrum)