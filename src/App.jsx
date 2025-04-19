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
        I’m a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications. With hands-on experience in React.js and Next.js, I transform complex ideas into smooth, interactive interfaces. My journey blends creativity with performance, and I take pride in writing clean, maintainable code. Currently crafting UI magic at Ivoyant and constantly leveling up my skills.
        </p>
      </section>
    </div>
  );
}

export default App;
