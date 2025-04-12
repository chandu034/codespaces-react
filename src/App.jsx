import './App.css';

function App() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <h1>CS</h1>
        <div className="nav-links">
          <h3>About</h3>
          <h3>Projects</h3>
          <h3>Contact</h3>
        </div>
      </nav>

      <section className="hero-section">
        <h1 className="glitch" data-text="I am Chandra Sekhar">
          I am Chandra Sekhar
        </h1>

        <p>
          This is my portfolio site with a glitch animated name effect.
        </p>
      </section>
    </div>
  );
}

export default App;
