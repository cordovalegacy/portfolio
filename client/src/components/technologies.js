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
import BOOTSTRAP from '../img/bootstrap.png';
import NATIVE from '../img/native.png';
import GITLAB from '../img/gitlab.png';
import HEROKU from '../img/heroku.png';
import MYSQL from '../img/mysql.png';
import CardHeader from "react-bootstrap/esm/CardHeader";

const Technologies = () => {
    const techDescriptions = (iconDescriptions, color) => {
        const header = document.getElementById('description');
        header.innerText = iconDescriptions;
        header.style.borderStyle = "ridge";
        header.style.borderWidth = "1px";
        header.style.borderColor = color;
    }

    return (
        <div className="technologies-container">
            <br />
            <Card className="bootstrap-card">
                <CardHeader id="description">Explore Brendan's Languages</CardHeader>
            </Card>
            <div>
                <Card className="bootstrap-card">
                    <Card.Title style={{justifyContent: "center"}}>Front End</Card.Title>
                    <Card.Body className="bootstrap-card-body">
                        <img id="react" onMouseOver={(e) => { techDescriptions("REACT NATIVE", 'blue') }} src={NATIVE} alt="react" />
                        <img id="react" onMouseOver={(e) => { techDescriptions("REACT.JS", 'dodgerBlue') }} src={REACT} alt="react" />
                        <img id="css" onMouseOver={(e) => { techDescriptions("CSS", "deepSkyBlue") }} src={CSS} alt="css" />
                        <img id="js" onMouseOver={(e) => { techDescriptions("JAVASCRIPT", "yellow") }} src={JS} alt="js" />
                        <img id="bootstrap" onMouseOver={(e) => { techDescriptions("BOOTSTRAP", "purple") }} src={BOOTSTRAP} alt="bootstrap" />
                        <img id="html" onMouseOver={(e) => { techDescriptions("HTML", "orange") }} src={HTML} alt="html" />
                    </Card.Body>
                </Card>
                <Card className="bootstrap-card">
                    <Card.Title style={{justifyContent: "center"}}>Back End</Card.Title>
                    <Card.Body className="bootstrap-card-body">
                        <img id="express" onMouseOver={(e) => { techDescriptions("EXPRESS.JS", "gray") }} src={EXPRESS} alt="express" />
                        <img id="python" onMouseOver={(e) => { techDescriptions("PYTHON", "skyBlue") }} src={PYTHON} alt="python" />
                        <img id="nodejs" onMouseOver={(e) => { techDescriptions("NODE.JS", "green") }} src={NODEJS} alt="nodejs" />
                        <img id="flask" onMouseOver={(e) => { techDescriptions("FLASK", "darkGray") }} src={FLASK} alt="flask" />
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className="bootstrap-card">
                    <Card.Title style={{justifyContent: "center"}}>Database</Card.Title>
                    <Card.Body className="bootstrap-card-body">
                        <img id="mongodb" onMouseOver={(e) => { techDescriptions("MONGODB", "forestGreen") }} src={MONGODB} alt="mongodb" />
                        <img id="mongodb" onMouseOver={(e) => { techDescriptions("MYSQL", "orange") }} src={MYSQL} alt="my sql" />
                    </Card.Body>
                </Card>
                <Card className="bootstrap-card">
                    <Card.Title style={{justifyContent: "center"}}>Deployment</Card.Title>
                    <Card.Body className="bootstrap-card-body">
                        <img id="aws" onMouseOver={(e) => { techDescriptions("AWS", "goldenrod") }} src={AWS} alt="aws" />
                        <img id="aws" onMouseOver={(e) => { techDescriptions("HEROKU", "rebeccapurple") }} src={HEROKU} alt="heroku" />
                        <img id="git" onMouseOver={(e) => { techDescriptions("GIT", "orangeRed") }} src={GIT} alt="git" />
                        <img id="github" onMouseOver={(e) => { techDescriptions("GITLAB", "yellow") }} src={GITLAB} alt="gitlab" />
                        <img id="github" onMouseOver={(e) => { techDescriptions("GITHUB", "black") }} src={GITHUB} alt="github" />
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Technologies;