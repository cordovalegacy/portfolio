import React from "react";
import Home_Photo from '../img/home_photo.jpg';
import { Link, useNavigate } from "react-router-dom";
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
                            <div id="dev-ninja">
                                <h3>Designing</h3>
                                <h3>Debugging</h3>
                                <h3>Teaching</h3>
                                <h3>Testing</h3>
                                <h3>Innovating</h3>
                                <h3>Security</h3>
                                <h3>Solutions</h3>
                                <h3>Communicating</h3>
                                <h3>Creating</h3>
                            </div>
                            <div id="tech-ninja">
                                <h3>Troubleshooting</h3>
                                <h3>Technician</h3>
                                <h3>Consulting</h3>
                                <h3>Crafting</h3>
                                <h3>Relations</h3>
                                <h3>Sales</h3>
                                <h3>Software</h3>
                                <h3>Hardware</h3>
                                <h3>Optimization</h3>
                            </div>
                        </div>
                    ) : null}
                    {isOpenDev ? (
                        <div className="home-sub-header-wrapper">
                            <h2 id="dev-sub-header">Software Developer - Teacher's Assistant</h2>
                        </div>
                    ) : null}
                    {isOpenTech ? (
                        <div className="home-sub-header-wrapper">
                            <h2 id="tech-sub-header">Computer Technician - Full Stack Developer</h2>
                        </div>
                    ) : null}
                </div>
                <div className="home-content-parent">
                    <img id="home-photo" src={Home_Photo} alt="Home Page Photo" />
                    <button id="home-button" onClick={() => { navigate('/technologies') }}>Get to know me!</button>
                </div>
            </div>
    )
}

export default Home;