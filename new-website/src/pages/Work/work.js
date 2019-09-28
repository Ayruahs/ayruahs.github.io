import React from 'react';
import './work.css'
import IGlogo from './images/glyph-logo_May2016.png'
import fulcrumLogo from './images/fulcrum.png'
import Resume from "../../Resources/Shaurya_Sinha_resume.pdf"

function onResumeClick() {
    window.open(Resume);
}

function Work() {
    return (
        <div className="Work">
            <div id="First-section" className="Work-Experience-Section">
                <a onClick={onResumeClick} className="Resume-button">Get PDF</a>
                <div className="Work-Experience-Header">
                    Education
                </div>
                <div className="Work-Experience-Subheader">
                    Purdue University | West Lafayette, IN
                </div>
                <div className="Work-Experience-Body" style={{marginTop: '10px'}}>
                    B.S. in Computer Science with a Minor in Math <br/>
                    Graduating December 2019
                </div>

                <div className="Work-Experience-Subheader">
                    Relevant Coursework
                </div>
                <div className="Work-Experience-Body" style={{marginTop: '10px'}}>
                    iOS Development in Swift, Computer Architecture, Systems Programming, Relational Databases, Operating Systems, 
                    Computer Security, Computer Networks, Introduction to Machine Learning, Data Structures and Algorithms, Analysis of Algorithms,
                    Software Engineering 
                </div>
            </div>

            <div className="Work-Experience-Section">
                <div className="Work-Experience-Header">
                    Experience
                </div>
                <div id="Instagram">
                <div className="Work-Experience-Subheader">
                    <img src={IGlogo} alt="Instagram logo" className="logo" />
                    <div >
                        Instagram | San Francisco, CA
                    </div>
                </div>
                <div className="Date"> Software Engineering Intern | May 2019 - August 2019 </div>
                <div className="Work-Experience-Body">
                    I worked as an iOS Developer on the Instagram Stories Interactivity and Feedback team during the summer of 2019 
                    where I collaborated with the Design and Instagram Direct teams to create new and expand existing user 
                    experiences to facilitate new ways of reacting to Instagram Stories. I took three different major features from 
                    conception to shipping to the production iOS app based on user research data.
                </div>
                </div>
                <div className="Work-Experience-Subheader">
                    <img src={fulcrumLogo} alt="Fulcrum GT logo" className="logo" style={{height: '10px',width: '50px', top: '5px'}} />
                    <div >
                        Fulcrum GT | Chicago, IL
                    </div>
                </div>
                <div className="Date"> Software Engineering Intern | May 2018 - August 2018 </div>
                <div className="Work-Experience-Body">
                    I collaborated with a team of 6 to develop a patent-pending web application that reduces the time taken to conduct
                    trademark research by IP attorneys and graphic designers using Content-based image retrieval (CBIR) which reduced 
                    time of determining whether a wordmark or logo is trademarkable from a few hours or days to a few minutes as tested by 
                    in-house attorneys and designers. I designed, secured, and tested the API for CBIR and user authentication in Python 
                    as well as implemented part of the frontend to UI/UX designer's specs using React.js
                </div>

                <div className="Work-Experience-Subheader">
                    Purdue University | West Lafayette, IN
                </div>
                <div className="Date"> Teaching Assistant | January 2019 - Present </div>
                <div className="Work-Experience-Body">
                    <b>CS 49000: iOS Development in Swift</b> <br />
                    I lectured and taught course material for a student-run course developed by 
                    Codepath.org on iOS development in the Swift programming language. I mentored around 45 students in the development of
                    8 full-fldged iOS apps. <br /><br />

                    <b>CS 30700: Software Engineering I</b> <br />
                    I served as the point of contact between engineering teams and the instructors for a semester-long project-based course
                    where I had to advise students on technologies and best practices as well as grade their assignments and sprint results.
                </div>
            </div>

            <div className="Work-Experience-Section">
                <div className="Work-Experience-Header">
                    Skills
                </div>
                <div style={{marginTop:'30px', marginBottom:'200px', width:'650px'}}>
                    <div style={{marginBottom:'8px'}}>
                        <b>Languages: </b> Java, C/C++, Python, Swift, Objective-C, Javascript
                    </div>
                    <div style={{marginBottom:'8px'}}>
                        <b>Technologies: </b> Git, AWS, Flask, React.js, HTML/CSS
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;