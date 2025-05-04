import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './pages/About';
import PageWrapper from './Components/PageWrapper';
import Contact from './pages/Contact';


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <section className="hero-section">
                <h1 className="glitch" data-text="I am Chandra Sekhar">
                  I am Chandra Sekhar
                </h1>
                <p>
                  I’m a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications. With hands-on experience in React.js and Next.js, I transform complex ideas into smooth, interactive interfaces. My journey blends creativity with performance, and I take pride in writing clean, maintainable code. Currently crafting UI magic at Ivoyant and constantly leveling up my skills.
                </p>
              </section>
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
  path="/contact"
  element={
    <PageWrapper>
      <Contact />
    </PageWrapper>
  }
/>

        {/* Add more routes like Projects or Contact here if needed */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="main-container">
      <nav className="navbar">
        <h1>CS</h1>
        <div className="nav-links">
          {location.pathname !== '/' && (
            <h3><Link to="/">Home</Link></h3>
          )}
          {location.pathname !== '/about' && (
            <h3><Link to="/about">About</Link></h3>
          )}
          {location.pathname !== '/projects' && (
            <h3><Link to="/projects">Projects</Link></h3>
          )}
          {location.pathname !== '/contact' && (
            <h3><Link to="/contact">Contact</Link></h3>
          )}
        </div>
      </nav>

      <AnimatedRoutes />
    </div>
  );
}

export default App;
