import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="main-container">
        <nav className="navbar">
          <h1>CS</h1>
          <div className="nav-links">
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/about">About</Link></h3>
            <h3><Link to="/projects">Projects</Link></h3>
            <h3><Link to="/contact">Contact</Link></h3>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <section className="hero-section">
              <h1 className="glitch" data-text="I am Chandra Sekhar">
                I am Chandra Sekhar
              </h1>
              <p>
                I’m a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications. With hands-on experience in React.js and Next.js, I transform complex ideas into smooth, interactive interfaces. My journey blends creativity with performance, and I take pride in writing clean, maintainable code. Currently crafting UI magic at Ivoyant and constantly leveling up my skills.
              </p>
            </section>
          } />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
