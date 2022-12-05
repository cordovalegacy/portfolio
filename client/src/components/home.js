import React from "react";
import Home_Photo from '../img/home_photo.jpg';

const Home = () => {

    return (
        <div>
            <h1>Hello World</h1>
            <div className="home-content-parent">
                <img id="home-photo" src={Home_Photo} alt="Home Page Photo"/>
                <div>
                    <h2>Hello</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;