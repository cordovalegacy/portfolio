import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import NINJA from '../img/ninja.png';
import LOGO from '../img/logo.jpg';
import TOOLS from '../img/tools.png';

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
                            <Card.Text id="trifold-text-2" onClick={handleTriOne}>Legacy Builds, LLC.</Card.Text>
                            <Card.Text id="trifold-text-3" onClick={handleTriOne}>Misc. & Projects</Card.Text>
                        </div>
                    </>
                )
                : null}
            {isOpenCodingDojo && !isOpenLB && !isOpenMiscProj ?
                (
                    <div className="experience-open-tabs">
                        <div>
                            <h2 className="experience-tab-header" id="tab-header-one">Coding Dojo</h2>
                            <hr/>
                            <div className="profession-tab">
                                <div className="profession-col">
                                    <h3>Mentor</h3>
                                    <hr/>
                                    <h5>I value not only helping others grow into better people and developers, but I also believe you must be teachable to be a teacher</h5>
                                    <hr/>
                                    <h6 class="col-sub-head">Things I Teach:</h6>
                                    <p>Web Fundamentals, MERN, Python, Version Control, GitHub, Deployment, Best Practices</p>
                                    <hr/>
                                    <h6 className="col-sub-head">Mentor Stats:</h6>
                                    <ul>
                                        <li>1000+ hours of development</li>
                                        <li>200+ students</li>
                                        <li>80+ students in class environments</li>
                                        <li>100+ repositories to draw from</li>
                                    </ul>
                                    <hr/>
                                </div>
                                <div className="profession-col">
                                    <h3>Full Stack Developer</h3>
                                    <hr/>
                                    <h5>I value not only helping others grow into better people and developers, but I also believe you must be teachable to be a teacher</h5>
                                    <hr/>
                                    <h6 class="col-sub-head">Things I Teach:</h6>
                                    <p>Web Fundamentals, MERN, Python, Version Control, GitHub, Deployment, Best Practices</p>
                                    <hr/>
                                    <h6 className="col-sub-head">Mentor Stats:</h6>
                                    <ul>
                                        <li>1000+ hours of development</li>
                                        <li>200+ students</li>
                                        <li>80+ students in class environments</li>
                                        <li>100+ repositories to draw from</li>
                                    </ul>
                                    <hr/>
                                </div>
                                <div className="profession-col">
                                    <h3>Learner</h3>
                                    <hr/>
                                    <h5>I value not only helping others grow into better people and developers, but I also believe you must be teachable to be a teacher</h5>
                                    <hr/>
                                    <h6 class="col-sub-head">Things I Teach:</h6>
                                    <p>Web Fundamentals, MERN, Python, Version Control, GitHub, Deployment, Best Practices</p>
                                    <hr/>
                                    <h6 className="col-sub-head">Mentor Stats:</h6>
                                    <ul>
                                        <li>1000+ hours of development</li>
                                        <li>200+ students</li>
                                        <li>80+ students in class environments</li>
                                        <li>100+ repositories to draw from</li>
                                    </ul>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="/portfolio/experience">Back To Experience</a>
                        </div>
                    </div>
                )
                : null}
            {!isOpenCodingDojo && isOpenLB && !isOpenMiscProj ?
                (
                    <div className="experience-open-tabs">
                        <div>
                            <h2 className="experience-tab-header" id="tab-header-two">Legacy Builds, LLC.</h2>
                            <div className="profession-col">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <a href="/portfolio/experience">Back To Experience</a>
                        </div>
                    </div>
                )
                : null}
            {!isOpenCodingDojo && !isOpenLB && isOpenMiscProj ?
                (
                    <div className="experience-open-tabs">
                        <div>
                            <h2 className="experience-tab-header" id="tab-header-three">Misc & Projects</h2>
                            <div className="profession-col">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <button><a href="/portfolio/experience">Back To Experience</a></button>
                        </div>
                    </div>
                )
                : null}
        </div>
    )
}

export default Experience;