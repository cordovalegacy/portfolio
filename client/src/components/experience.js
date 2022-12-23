import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import NINJA from '../img/ninja.png';
import LOGO from '../img/logo.jpg';
import TOOLS from '../img/tools.png';

const Experience = () => {

    return (
        <div className="container-experience">
            <div className="experience-card">
                <Card id="trifold-1">
                    <Image className="icon-buttons" src={NINJA} alt="NINJA" />
                </Card>
                <Card id="trifold-2">
                    <Image className="icon-buttons" src={LOGO} alt="NINJA" />
                </Card>
                <Card id="trifold-3">
                    <Image className="icon-buttons" src={TOOLS} alt="NINJA" />
                </Card>
            </div>
            <div className="trifold-text">
                <Card.Text id="trifold-text-1">Coding Dojo</Card.Text>
                <Card.Text id="trifold-text-2">Legacy Builds, LLC.</Card.Text>
                <Card.Text id="trifold-text-3">Misc. & Projects</Card.Text>
            </div>
        </div>
    )
}

export default Experience;