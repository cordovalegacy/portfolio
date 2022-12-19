import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import GEAR from '../img/gear.png';
import GITHUB from '../img/gitclouds.png';
import INSTA from '../img/instaclouds.png';
import LINKEDIN from '../img/linkedin.png';
import WEDDING from '../img/wedding.jpg';
import VALUES from '../img/values.jpg';
import INTERESTS from '../img/interests.jpg';
import DREAMS from '../img/dreams.jpg';
import STRUGGLES from '../img/struggles.jpg';

const Personality = () => {
    const traitList = document.getElementById('personality-tab');
    const valueList = document.getElementById('values-tab');
    const interestList = document.getElementById('interests-tab');
    const dreamList = document.getElementById('dreams-tab');
    const struggleList = document.getElementById('struggles-tab');
    const traitHandler = (id) => {
        if(id === 1){
            traitList.style.display = "none";
            interestList.style.display = "none";
            dreamList.style.display = "none";
            struggleList.style.display = "none";

            valueList.style.display = "flex";
            valueList.style.flexDirection = "column";
            valueList.style.alignItems = "center";
        }
        else if(id === 2){
            traitList.style.display = "none";
            valueList.style.display = "none";
            dreamList.style.display = "none";
            struggleList.style.display = "none";

            interestList.style.display = "flex";
            interestList.style.flexDirection = "column";
            interestList.style.alignItems = "center";
        }
        else if(id === 3){
            valueList.style.display = "none";
            dreamList.style.display = "none";
            struggleList.style.display = "none";
            interestList.style.display = "none";

            traitList.style.display = "flex";
            traitList.style.flexDirection = "column";
            traitList.style.alignItems = "center";
        }
        else if(id === 4){
            traitList.style.display = "none";
            valueList.style.display = "none";
            struggleList.style.display = "none";
            interestList.style.display = "none";

            dreamList.style.display = "flex";
            dreamList.style.flexDirection = "column";
            dreamList.style.alignItems = "center";
        }
        else if(id === 5){
            traitList.style.display = "none";
            valueList.style.display = "none";
            dreamList.style.display = "none";
            interestList.style.display = "none";

            struggleList.style.display = "flex";
            struggleList.style.flexDirection = "column";
            struggleList.style.alignItems = "center";
        }
        else{
            console.log('at home');
        }
        
    }

    return (
        <Card className="personality-container">
            <br />
            <div className="personality-row-headers">
                <Card.Text onClick={(e) => {traitHandler(1)}} className="personality-traits">Values</Card.Text>
                <Card.Text onClick={(e) => {traitHandler(2)}} className="personality-traits">Interests</Card.Text>
                <Card.Title onClick={(e) => {traitHandler(3)}} style={{ textShadow: "0px 0px 5px white", borderBottom: "1.5px solid black", fontSize: "1.75em" }}>Brendan <span style={{ color: "red" }}>Cordova</span></Card.Title>
                <Card.Text onClick={(e) => {traitHandler(4)}} className="personality-traits">Dreams</Card.Text>
                <Card.Text onClick={(e) => {traitHandler(5)}} className="personality-traits">Struggles</Card.Text>
            </div>
            <Image id="gear-background-spin" src={GEAR} alt="gear"></Image>
            <Card.Body className="personality-body">
                <div id="personality-tab">
                    <Image roundedCircle="true" id="wedding-photo-personality" src={WEDDING}></Image>
                    <hr/>
                    <Card.Subtitle>Full Stack Developer | Entrepreneur | Computer Technician</Card.Subtitle>
                    <Card.Body className="personality-row">
                        <Card.Link href="https://github.com/cordovalegacy?tab=repositories">
                            <Image src={GITHUB}></Image>
                        </Card.Link>
                        <Card.Link href="https://www.instagram.com/legacybuildspc/?next=%2F">
                            <Image src={INSTA}></Image>
                        </Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/brendan-cordova-2874011ba/">
                            <Image src={LINKEDIN}></Image>
                        </Card.Link>
                    </Card.Body>
                </div>
                <div id="values-tab">
                    <Image roundedCircle="true" id="wedding-photo-personality" src={VALUES}></Image>
                    <hr/>
                    <Card.Subtitle>Values</Card.Subtitle>
                    <Card.Text>God | Marriage | Family | Friends | Growth | Craft | Freedom | Experiences </Card.Text>
                    <Card.Body className="personality-row">
                        <Card.Link href="https://github.com/cordovalegacy?tab=repositories">
                            <Image src={GITHUB}></Image>
                        </Card.Link>
                        <Card.Link href="https://www.instagram.com/legacybuildspc/?next=%2F">
                            <Image src={INSTA}></Image>
                        </Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/brendan-cordova-2874011ba/">
                            <Image src={LINKEDIN}></Image>
                        </Card.Link>
                    </Card.Body>
                </div>
                <div id="interests-tab">
                    <Image roundedCircle="true" id="wedding-photo-personality" src={INTERESTS}></Image>
                    <hr/>
                    <Card.Subtitle>Interests</Card.Subtitle>
                    <Card.Text>Front End Development | UX/UI | Computers | Crafting | Traveling | Food | Nature | People </Card.Text>
                    <Card.Body className="personality-row">
                        <Card.Link href="https://github.com/cordovalegacy?tab=repositories">
                            <Image src={GITHUB}></Image>
                        </Card.Link>
                        <Card.Link href="https://www.instagram.com/legacybuildspc/?next=%2F">
                            <Image src={INSTA}></Image>
                        </Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/brendan-cordova-2874011ba/">
                            <Image src={LINKEDIN}></Image>
                        </Card.Link>
                    </Card.Body>
                </div>
                <div id="dreams-tab">
                    <Image roundedCircle="true" id="wedding-photo-personality" src={DREAMS}></Image>
                    <hr/>
                    <Card.Subtitle>Dreams</Card.Subtitle>
                    <Card.Text>Building Dream House | Travel the World | Live off the Land | Successful Start-Up</Card.Text>
                    <Card.Body className="personality-row">
                        <Card.Link href="https://github.com/cordovalegacy?tab=repositories">
                            <Image src={GITHUB}></Image>
                        </Card.Link>
                        <Card.Link href="https://www.instagram.com/legacybuildspc/?next=%2F">
                            <Image src={INSTA}></Image>
                        </Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/brendan-cordova-2874011ba/">
                            <Image src={LINKEDIN}></Image>
                        </Card.Link>
                    </Card.Body>
                </div>
                <div id="struggles-tab">
                    <Image roundedCircle="true" id="wedding-photo-personality" src={STRUGGLES}></Image>
                    <hr/>
                    <Card.Subtitle>Struggles</Card.Subtitle>
                    <Card.Text>
                        I debated on whether I should throw this tab in here. 
                        But every great person is molded through hardship. 
                        I have suffered loss, illness, and heartbreak. 
                        Three years ago I lost my best friend, my Brother. 
                        From that came a lot of suffering, but also breakthrough!
                        I found my love of technology when he passed.
                        I overcame life-threatening surgery.
                        Lost more people, both friends and family.
                        All while the world was on lockdown.
                        But the strongest rock in the world...
                        Was formed under great pressure...
                        And is now the most beautiful and valuable gem known to man.
                        The Diamond.
                        Thank you for visiting my page and getting to know me, I hope I can get to know you as well!
                        </Card.Text>
                    
                </div>
            </Card.Body>
        </Card>
    )
}

export default Personality;