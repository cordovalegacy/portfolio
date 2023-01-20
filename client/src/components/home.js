import React from "react";
import Home_Photo from '../img/home_photo.jpg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {

    const navigate = useNavigate();

    const [isOpenDev, setIsOpenDev] = useState(false);
    const [isOpenTech, setIsOpenTech] = useState(false);

    const handleOpenDev = (e) => {
        e.preventDefault();
        setIsOpenDev(!isOpenDev);
        setIsOpenTech(null);
    }

    const handleOpenTech = (e) => {
        e.preventDefault();
        setIsOpenDev(null);
        setIsOpenTech(!isOpenTech);
    }

    return (
        <div className="home-container">
            <div className="home-header-wrapper">
                <h1 id="home-header">Brendan<span id="red-text"> Cordova</span></h1>
                <div className="home-sub-header-wrapper">
                    <h2 onClick={handleOpenDev} id="software-header">Coding Dojo</h2>
                    <h2>||</h2>
                    <h2 onClick={handleOpenTech} id="technician-header">Legacy Builds, LLC</h2>
                </div>
                {!isOpenDev && !isOpenTech ? (
                    <div className="home-default-content">
                        <div>VIDEO GOES HERE</div>
                        {/* <video>VIDEO WILL GO HERE</video> */}
                    </div>
                ) : null}
                {isOpenDev ? (
                    <div className="home-sub-header-wrapper">
                        <div>
                            <h2 id="dev-sub-header">Software Developer - Teacher's Assistant</h2>
                            <ol>
                                <li>Daily practice debugging code</li>
                                <li>Teaching students programming fundamentals and concepts</li>
                                <li>Learns from senior programmers</li>
                                <li>Leads classes of up to 80 students at a time</li>
                                <li>Learns new languages on the job during "upskilling hours"</li>
                                <li>Handles administrative tasks to support instructors</li>
                            </ol>
                        </div>
                    </div>
                ) : null}
                {isOpenTech ? (
                    <div className="home-sub-header-wrapper">
                        <div>
                            <h2 id="tech-sub-header">Computer Technician - Full Stack Developer</h2>
                            <ol>
                                <li>Designs, develops, and maintains company E-commcerce site</li>
                                <li>Manages AWS EC2 Instance</li>
                                <li>Constructs new custom computers</li>
                                <li>Diagnosing computers with issues and reapiring them</li>
                                <li>Works as a consultant to help customers identify PC needs</li>
                                <li>Conistently learning new computer technology</li>
                            </ol>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="home-content-parent">
                <img id="home-photo" src={Home_Photo} alt="Home Page" />
                <button id="home-button" onClick={() => { navigate('/portfolio/personality') }}>Get to know me!</button>
            </div>
        </div>
    )
}

export default Home;