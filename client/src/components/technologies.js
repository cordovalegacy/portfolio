import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import AWS from '../img/aws.png';
import CSS from '../img/css.png';
import EXPRESS from '../img/express.png';
import FLASK from '../img/flask.png';
import GIT from '../img/git.png';
import GITHUB from '../img/github.png';
import HTML from '../img/html.png';
import JS from '../img/js.png';
import MONGODB from '../img/mongodb.png';
import NODEJS from '../img/nodejs.png';
import PYTHON from '../img/python.png';
import REACT from '../img/react.png';
import TAILWIND from '../img/tailwind.png';
import BOOTSTRAP from '../img/bootstrap.png';

const Technologies = () => {
    return (
        <div className="technologies-container">
            <Card className="bootstrap-card">
                <Card.Title>Front End</Card.Title>
                <Card.Body className="bootstrap-card-body">
                    <img src={REACT} alt="react" />
                    <img src={CSS} alt="css" />
                    <img src={JS} alt="js" />
                    <img src={BOOTSTRAP} alt="bootstrap" />
                    <img src={TAILWIND} alt="tailwind" />
                    <img src={HTML} alt="html" />
                </Card.Body>
            </Card>
            <Card className="bootstrap-card">
                <Card.Title>Back End</Card.Title>
                <Card.Body className="bootstrap-card-body">
                    <img src={EXPRESS} alt="express" />
                    <img src={PYTHON} alt="python" />
                    <img src={NODEJS} alt="nodejs" />
                </Card.Body>
            </Card>
            <Card className="bootstrap-card">
                <Card.Title>Database</Card.Title>
                <Card.Body className="bootstrap-card-body">
                    <img src={MONGODB} alt="mongodb" />
                    <img src={FLASK} alt="flask" />
                </Card.Body>
            </Card>
            <Card className="bootstrap-card">
                <Card.Title>Deployment</Card.Title>
                <Card.Body className="bootstrap-card-body">
                    <img src={AWS} alt="aws" />
                    <img src={GIT} alt="git" />
                    <img src={GITHUB} alt="github" />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Technologies;