import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/portfolio/a">Technologies</Link>
          <Link to="/portfolio/b">Experience</Link>
          <Link to="/">Picture</Link>
          <Link to="/portfolio/d">Personality</Link>
          <Link to="/portfolio/e">Contact Me</Link>
        </nav>
        <Routes>
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
