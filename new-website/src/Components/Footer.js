import React from 'react';
import './Footer.css'

function Footer(props) {
    return (
        <div className="Footer-Container">
            <div className="Footer-Content">
                <div className="NameLogo">
                    © 2019 Shaurya Sinha
                </div>
                <div className="Social-Media">
                    <div className="Social-Media-Link">
                        <a href="mailto: sinha35@purdue.edu">Email</a>
                    </div>
                    <div className="Social-Media-Link">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shaurya-sinha/">LinkedIn</a>
                    </div>
                    <div className="Social-Media-Link">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ayruahs">Github</a>
                    </div>
                    <div className="Social-Media-Link">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shauryasinha/">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;