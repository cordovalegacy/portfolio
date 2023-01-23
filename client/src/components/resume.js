import React from "react";
import RESUME from '../img/resume.png';

const Resume = () => {
    return (
        <div className="resume-container">
            <button id="downloading-resume"><a href={RESUME} download>Download Resume</a></button>
            <img src={RESUME} alt="Brendan Cordova Resume" id="resume" />
        </div>
    )
}

export default Resume;