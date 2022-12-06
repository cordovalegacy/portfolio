import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';

function App() {

  const getResume = () => {
    console.log('Downloading Resume');
  }

  return (
    <BrowserRouter>
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
          <a href='resume.png' id='download-button' download>Resume</a>
          <a href='https://www.instagram.com/legacybuildspc/?next=%2F'>Instagram</a>
          <a href='http://35.164.101.114/'>Legacy Builds</a>
        </nav>
        <div className='nav-content-spacer'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
