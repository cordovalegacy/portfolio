import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import NINJA from '../img/ninja.png';
import LOGO from '../img/logo.jpg';
import TOOLS from '../img/tools.png';
import Godzilla from '../img/supertier.JPG';
import Naruto from '../img/highend.JPG';
import Punisher from '../img/enthusiast.JPG';
import Thanos from '../img/thanos.jpg';
import Crystal from '../img/crystal.png';
import Batman from '../img/batman.png';
import LB from '../img/lbproject.png';
import Specialist from '../img/specialist.png';
import Buster from '../img/buster.JPG';
import Icc from '../img/icc.JPG';
import Washington from  '../img/washington.JPG';
import Art from '../img/art.png';

const Experience = () => {

    const [isOpenCodingDojo, setIsOpenCodingDojo] = useState(false);
    const [isOpenLB, setIsOpenLB] = useState(false);
    const [isOpenMiscProj, setIsOpenMiscProj] = useState(false);

    const handleTriOne = (e) => {
        e.preventDefault()
        setIsOpenCodingDojo(!isOpenCodingDojo)
        setIsOpenLB(null)
        setIsOpenMiscProj(null)
        console.log("Coding Dojo Tab Clicked... useState is: ", isOpenCodingDojo)
    }
    const handleTriTwo = (e) => {
        e.preventDefault()
        setIsOpenCodingDojo(null)
        setIsOpenLB(!isOpenLB)
        setIsOpenMiscProj(null)
        console.log("Legacy Builds Tab Clicked...useState is: ", isOpenLB)
    }
    const handleTriThree = (e) => {
        e.preventDefault()
        setIsOpenCodingDojo(null)
        setIsOpenLB(null)
        setIsOpenMiscProj(!isOpenMiscProj)
        console.log("Misc & Projects Tab Clicked...useState is: ", isOpenMiscProj)
    }

    return (
        <div className="container-experience">
            {isOpenCodingDojo === false || isOpenLB === false || isOpenMiscProj === false ?
                (
                    <>
                        <div className="experience-card">
                            <Card id="trifold-1" onClick={handleTriOne}>
                                <Image className="icon-buttons" src={NINJA} alt="NINJA" />
                            </Card>
                            <Card id="trifold-2" onClick={handleTriTwo}>
                                <Image className="icon-buttons" src={LOGO} alt="NINJA" />
                            </Card>
                            <Card id="trifold-3" onClick={handleTriThree}>
                                <Image className="icon-buttons" src={TOOLS} alt="NINJA" />
                            </Card>
                        </div>
                        <div className="trifold-text">
                            <Card.Text id="trifold-text-1" onClick={handleTriOne}>Coding Dojo</Card.Text>
                            <Card.Text id="trifold-text-2" onClick={handleTriTwo}>Legacy Builds, LLC.</Card.Text>
                            <Card.Text id="trifold-text-3" onClick={handleTriThree}>Misc. & Projects</Card.Text>
                        </div>
                    </>
                )
                : null}
            {isOpenCodingDojo && !isOpenLB && !isOpenMiscProj ?
                (
                    <div className="experience-open-tabs">
                        <a href="/portfolio/experience" className="experience-link">Back To Experience</a>
                        <div className="profession-tab">
                            <div className="profession-col-dojo">
                                <h4>Mentor</h4>
                                <h6 className="col-experience-description-dojo">I value not only helping others grow into better people and developers, but I also believe you must be teachable to be a teacher</h6>
                                <hr />
                                <h6 class="col-sub-head">Things I Teach:</h6>
                                <p className="col-experience-description-dojo">Web Fundamentals, MERN, Python, Version Control, GitHub, Deployment, Best Practices</p>
                                <hr />
                                <h6 className="col-sub-head">Mentor Stats:</h6>
                                <ul>
                                    <li>1000+ hours of development</li>
                                    <li>200+ students</li>
                                    <li>80+ students in class environments</li>
                                    <li>100+ repositories to draw from</li>
                                </ul>
                            </div>
                            <div className="profession-col-dojo">
                                <h4>Full Stack Developer</h4>
                                <h6 className="col-experience-description-dojo">I am passionate about technology. I am especially interested in, Front End Development and functionality</h6>
                                <hr />
                                <h6 class="col-sub-head">My favorite frameworks and libraries:</h6>
                                <p className="col-experience-description-dojo">Anything CSS, React, JavaScript, Python, React Native</p>
                                <hr />
                                <h6 className="col-sub-head">Dev Stats:</h6>
                                <ul>
                                    <li>50+ React Apps</li>
                                    <li>50+ Python Apps</li>
                                    <li>50+ JavaScript Apps</li>
                                    <li>Two cumualative years of development experience</li>
                                </ul>
                            </div>
                            <div className="profession-col-dojo">
                                <h4>Learner</h4>
                                <h6 className="col-experience-description-dojo">While I definitely enjoy teaching, learning is just as essential. A master learner will grow into a master teacher
                                </h6>
                                <hr />
                                <h6 class="col-sub-head">Things I am learning</h6>
                                <p className="col-experience-description-dojo">React Native, Redux, Next.JS, Tailwind, JQuery, UX/UI Design</p>
                                <hr />
                                <h6 className="col-sub-head">Learning Stats:</h6>
                                <ul>
                                    <li>Top of class with perfect score during time and Coding Dojo Bootcamp</li>
                                    <li>10+ Senior Software Engineers I am mentored by</li>
                                    <li>800+ hours of instructional/classroom environments</li>
                                    <li>Udemy certificates in progress</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
                : null}
            {!isOpenCodingDojo && isOpenLB && !isOpenMiscProj ?
                (
                    <div className="experience-open-tabs">
                        <a href="/portfolio/experience" className="experience-link">Back To Experience</a>
                        <div className="profession-tab">
                            <div className="profession-col-lb">
                                <h4>Hardware</h4>
                                <h6 className="col-experience-description-lb">Whether it's through a keyboard at my finger tips or a PC component in the palm of my hand, I love to craft science with art</h6>
                                <hr />
                                <h6 class="col-sub-head">Favorite Hardware</h6>
                                <p className="col-experience-description-lb">Lian Li Chassis', Asus Motherboards, Corsair Coolers, AMD Processors</p>
                                <hr />
                                <h6 className="col-sub-head">Hardware Stats:</h6>
                                <ul>
                                    <li>1000+ hours of computer building</li>
                                    <li>100+ clients through new assembly, consulting, and repair</li>
                                    <li>60+ custom builds from scratch</li>
                                    <li>80+ repair tickets</li>
                                </ul>
                            </div>
                            <div className="profession-col-lb">
                                <h4>Software</h4>
                                <h6 className="col-experience-description-lb">Software allows a business to run. I have developed and maintain a Full-Stack E-Commerce Site to support this small business</h6>
                                <hr />
                                <h6 class="col-sub-head">Features:</h6>
                                <p className="col-experience-description-lb">Responsive Design, Media Queries for Mobile, Dynamic Functionality, Custom PC Configuration Tool, Authentication and Security, AWS EC2 Instance, Automatic Emails, PayPal SDK Integration, and Unique Design</p>
                                <hr />
                                <h6 className="col-sub-head">Software Stats:</h6>
                                <ul>
                                    <li>React Components, Client Facing</li>
                                    <li>MongoDB, a NoSQL Database</li>
                                    <li>JS Functions, Functionality</li>
                                    <li>CSS, Dynamic Webpage Animations</li>
                                </ul>
                            </div>
                            <div className="profession-col-lb">
                                <h4>Problem Solving</h4>
                                <h6 className="col-experience-description-lb">A technical mindset is of utmost importance in the technology industry. I have spent my fair share of time honing my critical thinking skills
                                </h6>
                                <hr />
                                <h6 class="col-sub-head">Problems I have overcome:</h6>
                                <p className="col-experience-description-lb">Faulty Components, Client Requests, Sourcing, Challenging Web Features, and Difficult PC Builds</p>
                                <hr />
                                <h6 className="col-sub-head">Technical Stats:</h6>
                                <ul>
                                    <li>Dominate the Snohomish County Market in Sales</li>
                                    <li>100+ Online Technical Tickets Resolved</li>
                                    <li>30+ Physical PC Repairs</li>
                                    <li>10+ Newly Learned Features for Site Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
                : null}
            {!isOpenCodingDojo && !isOpenLB && isOpenMiscProj ?
                (
                    <div className="experience-open-tabs-misc">
                        <div className="profession-tab">
                            <div className="profession-col-misc">
                                <h6 className="col-sub-head-misc">Favorite Projects:</h6>
                                <hr />
                                <div className="experience-project-layout">
                                    <a href="http://www.legacybuildspc.com"><img className="proj-pic" src={LB} alt="legacy builds" /></a>
                                    <a href='#'><img className="proj-pic" src={Specialist} alt="specialist" /></a>
                                    <a href='https://github.com/cordovalegacy/Met_Art_Api'><img className="proj-pic" src={Art} alt="art api" /></a>
                                </div>
                            </div>
                            <div className="profession-col-misc">
                                <h6 className="col-sub-head-misc">Favorite Computers:</h6>
                                <hr />
                                <div className="experience-pic-layout">
                                    <a href="https://www.instagram.com/legacybuildspc/?next=%2F"><img src={Godzilla} alt="PC" /></a>
                                    <a href='https://www.instagram.com/legacybuildspc/?next=%2F'><img src={Naruto} alt="PC" /></a>
                                    <a href='https://www.instagram.com/legacybuildspc/?next=%2F'><img src={Thanos} alt="PC" /></a>
                                    <a href='https://www.instagram.com/legacybuildspc/?next=%2F'><img src={Punisher} alt="PC" /></a>
                                    <a href='https://www.instagram.com/legacybuildspc/?next=%2F'><img src={Crystal} alt="PC" /></a>
                                    <a href='https://www.instagram.com/legacybuildspc/?next=%2F'><img src={Batman} alt="PC" /></a>
                                    <a href='https://www.instagram.com/legacybuildspc/?next=%2F'><img src={Icc} alt="PC" /></a>
                                    <a href='https://www.instagram.com/legacybuildspc/?next=%2F'><img src={Buster} alt="PC" /></a>
                                    <a href='https://www.instagram.com/legacybuildspc/?next=%2F'><img src={Washington} alt="PC" /></a>
                                </div>
                            </div>
                        </div>
                        <a href="/portfolio/experience" className="experience-link-misc">Back To Experience</a>
                    </div>
                )
                : null}
        </div>
    )
}

export default Experience;