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

    const traitHandler = (id) => {
        //
        const traitList = document.getElementById('personality-tab');
        const valueList = document.getElementById('values-tab');
        const interestList = document.getElementById('interests-tab');
        const dreamList = document.getElementById('dreams-tab');
        const struggleList = document.getElementById('struggles-tab');
        //
        if (id === 1) {
            traitList.style.display = "none";
            interestList.style.display = "none";
            dreamList.style.display = "none";
            struggleList.style.display = "none";

            valueList.style.display = "flex";
            valueList.style.flexDirection = "column";
            valueList.style.alignItems = "center";
        }
        else if (id === 2) {
            traitList.style.display = "none";
            valueList.style.display = "none";
            dreamList.style.display = "none";
            struggleList.style.display = "none";

            interestList.style.display = "flex";
            interestList.style.flexDirection = "column";
            interestList.style.alignItems = "center";
        }
        else if (id === 3) {
            valueList.style.display = "none";
            dreamList.style.display = "none";
            struggleList.style.display = "none";
            interestList.style.display = "none";

            traitList.style.display = "flex";
            traitList.style.flexDirection = "column";
            traitList.style.alignItems = "center";
        }
        else if (id === 4) {
            traitList.style.display = "none";
            valueList.style.display = "none";
            struggleList.style.display = "none";
            interestList.style.display = "none";

            dreamList.style.display = "flex";
            dreamList.style.flexDirection = "column";
            dreamList.style.alignItems = "center";
        }
        else if (id === 5) {
            traitList.style.display = "none";
            valueList.style.display = "none";
            dreamList.style.display = "none";
            interestList.style.display = "none";

            struggleList.style.display = "flex";
            struggleList.style.flexDirection = "column";
            struggleList.style.alignItems = "center";
        }
        else {
            console.log('at home');
        }

    }

    return (
        <Card className="personality-container">
            <br />
            <div className="personality-row-headers">
                <Card.Text onClick={(e) => { traitHandler(1) }} className="personality-traits" id="value">Values</Card.Text>
                <Card.Text onClick={(e) => { traitHandler(2) }} className="personality-traits" id="interest">Interests</Card.Text>
                <Card.Title onClick={(e) => { traitHandler(3) }} style={{ textShadow: "0px 0px 5px white", borderBottom: "1.5px solid black", fontSize: "1.75em" }}>Brendan <span style={{ color: "red" }}>Cordova</span></Card.Title>
                <Card.Text onClick={(e) => { traitHandler(4) }} className="personality-traits" id="dream">Dreams</Card.Text>
                <Card.Text onClick={(e) => { traitHandler(5) }} className="personality-traits" id="struggle">Struggles</Card.Text>
            </div>
            <Image id="gear-background-spin" src={GEAR} alt="gear"></Image>
            <Card.Body className="personality-body">
                <div id="personality-tab">
                    <Image roundedCircle="true" id="wedding-photo-personality" src={WEDDING}></Image>
                    <hr />
                    <Card.Subtitle style={{fontSize: "larger"}}>Full Stack Developer | Entrepreneur | Computer Technician</Card.Subtitle>
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
                    <hr />
                    <Card.Subtitle style={{fontSize: "larger"}}>Values</Card.Subtitle>
                    <Card.Text>God | Marriage | Family | Friends | Growth | Craft | Freedom | Experiences </Card.Text>
                    <Card.Text className="blue">
                        My values are a cornerstone of who I am.
                        They are the <span style={{ color: "red" }}>foundation</span> to how I treat people, what I prioritize, and how I make decisions.
                        Although I feel strongly about my values,
                        I will <span style={{ color: "red" }}>always </span>
                        respect other people's values even if they do not align with my own</Card.Text>
                </div>
                <div id="interests-tab">
                    <Image roundedCircle="true" id="wedding-photo-personality" src={INTERESTS}></Image>
                    <hr />
                    <Card.Subtitle style={{fontSize: "larger"}}>Interests</Card.Subtitle>
                    <Card.Text>Front End Development | UX/UI | Computers | Crafting | Traveling | Food | Nature | People </Card.Text>
                    <Card.Text className="blue">My interests are what make me excited to get out of bed in the morning!
                        They nourish my mind, body and soul.
                        When I am doing what I <span style={{ color: "red" }}>love</span> I get immense joy and energy as a result.
                        I have developed an obession with become a better developer,
                        which is one reason why yuou should consider me at your company...
                        I am <span style={{ color: "red" }}>vested.</span>
                    </Card.Text>
                </div>
                <div id="dreams-tab">
                    <Image roundedCircle="true" id="wedding-photo-personality" src={DREAMS}></Image>
                    <hr />
                    <Card.Subtitle style={{fontSize: "larger"}}>Dreams</Card.Subtitle>
                    <Card.Text>Building Dream House | Travel the World | Live off the Land | Successful Start-Up</Card.Text>
                    <Card.Text className="blue">My dreams are what God put on my heart to set out and do in my life.
                        I have an <span style={{ color: 'red' }}>endless</span> reservoir of things I want to achieve and accomplish.
                        Which is why I am very <span style={{ color: "red" }}>intentional</span> about my thoughts, actions, habits, and actions.
                    </Card.Text>
                    <Card.Text className="quotes">
                        “Don’t downgrade your dreams just to fit your reality.
                        Upgrade your conviction to match your destiny.”
                        —Stuart W. Scott
                    </Card.Text>
                </div>
                <div id="struggles-tab">
                    <Image roundedCircle="true" id="wedding-photo-personality" src={STRUGGLES}></Image>
                    <hr />
                    <Card.Subtitle style={{fontSize: "larger"}}>Struggles</Card.Subtitle>
                    <Card.Text>
                        I debated on whether I should throw this tab in here.
                        But every great person is molded through hardship.
                        I have suffered loss, illness, and heartbreak.
                        Three years ago I lost my best friend, my Brother.
                        From that came a lot of suffering, but also breakthrough!
                        I found my love of technology when he passed.
                        I overcame life-threatening surgery.
                        Lost friends and family..
                        All while the world was on lockdown.
                        But the strongest rock in the world
                        is formed under great pressure...
                        And is now the most beautiful and valuable gem known to man.
                        The Diamond.
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Personality;