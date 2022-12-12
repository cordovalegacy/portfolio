import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Home from './components/home';
import Technologies from './components/technologies';

function App() {

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const getResume = () => {
    console.log('Downloading Resume');
    document.getElementById("resume-alert").style.display = "flex"
  }

  const closeAlert = () => {
    document.getElementById("resume-alert").style.display = "none"
  }

  const showSources = (e) => {
    document.getElementById("footer-sources").style.display = "block"
  }

  const hideSources = (e) => {
    document.getElementById("footer-sources").style.display = "none"
  }

  const openContactMeForm = (e) => {
    document.getElementById("contact-me-alert-form").style.display = "flex"
    document.getElementById("resume-alert-top").style.display = "none"
  }

  const closeForm = (e) => {
    document.getElementById("resume-alert").style.display = "none"
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const contactForm = {
      fullName,
      company,
      emailAddress,
      message
    }
    emailjs.send('service_id', 'Portfolio', contactForm, 'LW4RMYIvhRvf0Fz9c')
      .then((res) => {
        closeForm();
        console.log("Success!", res.data);
      }, (err) => {
        console.log("Email was not sent", err);
      });
  }

  return (
    <BrowserRouter>
      <div className='App-container'>
        <div className="App">
          <nav className='left-nav'>
            <Link to="/portfolio/technologies">Technologies</Link>
            <Link to="/portfolio/experience">Experience</Link>
            <Link to="/">Brendan</Link>
            <Link to="/portfolio/personality">Personality</Link>
            <Link to="/portfolio/contact">Contact Me</Link>
          </nav>
          <nav className='top-nav'>
            <a href='https://github.com/cordovalegacy?tab=repositories'>Github</a>
            <a href='https://www.linkedin.com/in/brendan-cordova-2874011ba/'>LinkedIn</a>
            <a href='resume.png' id='download-button' onClick={getResume} download>Resume</a>
            <a href='https://www.instagram.com/legacybuildspc/?next=%2F'>Instagram</a>
            <a href='http://35.164.101.114/'>Legacy Builds</a>
          </nav>
          <div className='block block-1'><h2>TENACITY | COURAGE | PERSISTANCE | WILL-POWER | GROWTH | KINDNESS | LOYALTY | LEADERSHIP | PASSION | DEDICATION | MINDSET | ENCOURAGEMENT | MENTORSHIP | ENGAGEMENT | CONSIDERATE | REFLECTIVE | OBSESSED | VALUE | COLLABERATION | AWARENESS | FUN | ATTENTIVE | CONSTRUCTIVE | PATIENT | EAGER | ATTITUDE | COMMUNICATION | COOPERATION | PREPERATION | INCLUSIVE | PERSPECTIVE | RESPECTFUL </h2></div>
          <div className='block block-2'><h2>RESPECTFUL | COURAGE | PERSISTANCE | INCLUSIVE | PERSPECTIVE | TENACITY | RELATABLE | TEAM-PLAYER | INTERESTED | IMPACT | LOGICAL | UNDERSTANDING | SMART | EXCELLENCE | HUMILITY | FAMILY | EFFORT | GRIT | EXPERIENCE | RESEARCH | FLEXIBLE | HARD-WORKING | RATIONAL | SEEKING | QUESTIONS | OBSERVANT | GRATEFUL | PLAYFUL | MATURE | EFFICIENT | REASONABLE | HONEST | CONFIDENT | FOCUS | TRAINING</h2></div>
          <div id='resume-alert'>
            <div id='resume-alert-top'>
              <h2>Thank you for viewing my resume!</h2>
              <h3>Please reach out to me if you have any questions.</h3>
              <div id='alert-button-row'>
                <button id='alert-button' onClick={closeAlert}>Continue</button>
                <button id='alert-button' onClick={openContactMeForm}>Contact Me</button>
              </div>
            </div>
            <form id='contact-me-alert-form' onSubmit={submitHandler}>
              <div className='contact-form-top-row'>
                <h2 style={{ textDecoration: "underline" }}>Contact Form</h2>
                <button id='close-form' onClick={closeForm}>X</button>
              </div>
              <label>Name:</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              <label>Company:</label>
              <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
              <label>Email Address:</label>
              <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
              <label>Message:</label>
              <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <hr />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className='nav-content-spacer'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio/technologies' element={<Technologies />} />
            </Routes>
          </div>
        </div>
        <footer onMouseOver={showSources} onMouseOut={hideSources}>
          Website by Brendan Cordova
          <div id='footer-sources'>
            <p>Source 1</p>
            <p>Source 2</p>
            <p>Source 3</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
