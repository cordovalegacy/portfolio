import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/portfolio/technologies">Technologies</Link>
          <Link to="/portfolio/experience">Experience</Link>
          <Link to="/">Brendan</Link>
          <Link to="/portfolio/personality">Personality</Link>
          <Link to="/portfolio/contact">Contact Me</Link>
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
