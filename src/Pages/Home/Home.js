import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import Blackhole from "../../Components/BlackHole/Blackhole"
import me from "../../Image/icon.png"
import {info} from "../../Info/Info";
import "./Home.scss"

function Home(){
    const [showContent, setShowContent] = useState(false);

    const handleEnterClick = () => {
        setShowContent(true);
    }

    return(
        <div className="main">
            <Blackhole onEnterClick={handleEnterClick}/>
            <div className={`content ${showContent ? "show" : "hidden"}`}>
                <div className="avatar">
                    <img src={me} alt="Moi"/>
                </div>
                <div>
                    <h1>Bonjour, Je suis <span>{info.firstName}</span><span className="fusee">🚀</span></h1>
                    <h2>Je suis {info.position}</h2>
                    <ul className="liste">
                        {info.miniBio.map((bio, index) => 
                        <li key={index}><span>{bio.emoji}</span> {bio.text}</li>)}
                    </ul>
                    <div className="social">
                        {info.socials.map((social, index) =>
                            <a key={index} target="_blank" aria-label={social.label} rel="noopener noreferrer" href={social.link}><i className={social.icon} aria-hidden="true" /></a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home