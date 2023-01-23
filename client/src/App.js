import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Home from './components/home';
import Technologies from './components/technologies';
import ContactMe from './components/contact_me';
import Experience from './components/experience';
import Personality from './components/personality';
import Resume from './components/resume';

function App() {

  const showSources = (e) => {
    document.getElementById("footer-sources").style.display = "flex"
    document.getElementById("footer-sources").style.flexWrap = "wrap"
    document.getElementById("footer-sources").style.gap = "1em"

    document.querySelector('h5').style.display = "none"
    document.getElementById('icons-credit').style.display = "block"

    let links = document.querySelectorAll('.footer-links');
    [].forEach.call(links, function (link) {
      link.style.alignSelf = "center"
      link.style.justifyContent = "space-between"
      link.style.textShadow = "0px 0px 5px white"
      link.style.textDecoration = "none"
    });
  }

  const hideSources = (e) => {
    document.getElementById("footer-sources").style.display = "none"
    document.getElementById('icons-credit').style.display = "none"
    document.querySelector('h5').style.display = "block"
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
            <Link to="/portfolio/resume" id='download-button'>Resume</Link>
            <a href='https://www.instagram.com/legacybuildspc/?next=%2F'>Instagram</a>
            <a href='http://legacybuildspc.com'>Legacy Builds</a>
          </nav>
          <div className='block block-1'><h2>TENACITY | COURAGE | PERSISTANCE | WILL-POWER | GROWTH | KINDNESS | LOYALTY | LEADERSHIP | PASSION | DEDICATION | MINDSET | ENCOURAGEMENT | MENTORSHIP | ENGAGEMENT | CONSIDERATE | REFLECTIVE | OBSESSED | VALUE | COLLABERATION | AWARENESS | FUN | ATTENTIVE | CONSTRUCTIVE | PATIENT | EAGER | ATTITUDE | COMMUNICATION | COOPERATION | PREPERATION | INCLUSIVE | PERSPECTIVE | RESPECTFUL </h2></div>
          {/* <div className='block block-2'><h2>RESPECTFUL | COURAGE | PERSISTANCE | INCLUSIVE | PERSPECTIVE | TENACITY | RELATABLE | TEAM-PLAYER | INTERESTED | IMPACT | LOGICAL | UNDERSTANDING | SMART | EXCELLENCE | HUMILITY | FAMILY | EFFORT | GRIT | EXPERIENCE | RESEARCH | FLEXIBLE | HARD-WORKING | RATIONAL | SEEKING | QUESTIONS | OBSERVANT | GRATEFUL | PLAYFUL | MATURE | EFFICIENT | REASONABLE | HONEST | CONFIDENT | FOCUS | TRAINING</h2></div> */}
          {/* <div id='resume-alert'>
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
              <p id='resume-warning'></p>
              <hr />
              <input type="submit" value="Submit" />
            </form>
          </div> */}
          <div className='nav-content-spacer'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio/technologies' element={<Technologies />} />
              <Route path='/portfolio/experience' element={<Experience />} />
              <Route path='/portfolio/personality' element={<Personality />} />
              <Route path='/portfolio/contact' element={<ContactMe />} />
              <Route path='/portfolio/resume' element={<Resume />} />
            </Routes>
          </div>
        </div>
        <footer onMouseOver={showSources} onMouseOut={hideSources}>
          <h5>Website by Brendan Cordova</h5>
          <p id='icons-credit' className='footer-links'><a href='https://icons8.com/' style={{ color: "black", fontWeight: "bolder", textDecoration: "underline", padding: "15px", fontSize: "1em", textShadow: "0px 0px 5px gold" }}>All Icons by Icons8</a></p>
          <div id='footer-sources'>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/hGdCwhSHUe6L/python">| Python |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/Nlsua06Gvxel/react">| React |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/74402/mongodb">| MongoDB |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/Lk2Q5FRKDWGI/express">| Express |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/54087/nodejs">| Nodejs |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/AqYCfGyGXlO7/flask">| Flask |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/mRiGJYwO8l6B/bootstrap-logo">| Bootstrap |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/4PiNHtUJVbLs/tailwind-css">| Tailwind CSS |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/33039/amazon-web-services">| Amazon Web Services |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/rw7MSQeIdPoM/html-filetype">| HTML |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/10452/css-filetype">| CSS |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/42769/javascript-logo">| JavaScript |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/LoL4bFzqmAa0/github">| GitHub |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/20906/git">| Git |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/43454/engineering">| Gear |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/64154/linkedin">| LinkedIn |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/hFoVFpm6gl9A/instagram">| Instagram Clouds |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/118557/github">| Github Clouds |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/fYIVCtGl787B/ninja">| Ninja |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/XXGiIxpBslLo/hammer-and-pick">| Hammer and Pick |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/UFXRpPFebwa2/mysql-logo">| MySQL Logo |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/qZYHC6vOz8sc/gitlab">| Gitlab |</a></p>
            <p className='footer-links'><a target="_blank" href="https://icons8.com/icon/69454/heroku">| Heroku |</a></p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
