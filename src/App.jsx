import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import About from './pages/About';
import Contact from './pages/Contact';
import PageWrapper from './Components/PageWrapper';
import Projects from './pages/Projects';

const MainContainer = styled.div`
  min-height: 100vh;
  padding: 1rem;
  background-color: #264653;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 80px 80px;
  font-family: 'Fira Code', monospace;
  color: white;
  overflow-x: hidden;
  cursor: url('/glitch-cursor.svg') 4 4, auto;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  background: rgba(38, 70, 83, 0.85);
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

const NavItem = styled.h3`
  position: relative;
  display: inline-block;
  margin: 0;
  font-size: 1rem;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover a {
    color: #2a9d8f;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 2px;
    background-color: #2a9d8f;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
`;

const HeroSection = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
`;

const GlitchHeading = styled.h1`
  position: relative;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
    color: white;
    background: #264653;
    clip: rect(0, 900px, 0, 0);
  }

  &::before {
    left: 2px;
    text-shadow: -2px 0 red;
    animation: glitchTop 0.5s infinite linear alternate-reverse;
  }

  &::after {
    left: -2px;
    text-shadow: -2px 0 blue;
    animation: glitchBottom 0.5s infinite linear alternate-reverse;
  }

  @keyframes glitchTop {
    0% { clip: rect(0, 9999px, 0, 0); }
    5% { clip: rect(0, 9999px, 20px, 0); }
    10% { clip: rect(0, 9999px, 0, 0); }
    15% { clip: rect(0, 9999px, 30px, 0); }
    20% { clip: rect(0, 9999px, 0, 0); }
  }

  @keyframes glitchBottom {
    0% { clip: rect(0, 9999px, 0, 0); }
    5% { clip: rect(10px, 9999px, 30px, 0); }
    10% { clip: rect(0, 9999px, 0, 0); }
    15% { clip: rect(20px, 9999px, 40px, 0); }
    20% { clip: rect(0, 9999px, 0, 0); }
    25% { clip: rect(0, 9999px, 0, 0); }
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  max-width: 950px;
  line-height: 1.6;
  color: #ddd;
  font-size: 1.1rem;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HeroSection>
                <GlitchHeading data-text="I am Chandra Sekhar">
                  I am Chandra Sekhar
                </GlitchHeading>
                <HeroText>
                  I’m a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications. With hands-on experience in React.js and Next.js, I transform complex ideas into smooth, interactive interfaces. My journey blends creativity with performance, and I take pride in writing clean, maintainable code. Currently crafting UI magic at Ivoyant and constantly leveling up my skills.
                </HeroText>
              </HeroSection>
            </PageWrapper>
          }
        />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route
  path="/projects"
  element={
    <PageWrapper>
      <Projects />
    </PageWrapper>
  }
/>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const location = useLocation();

  return (
    <MainContainer>
      <Navbar>
        <h1>CS</h1>
        <NavLinks>
          {location.pathname !== '/' && (
            <NavItem><Link to="/">Home</Link></NavItem>
          )}
          {location.pathname !== '/about' && (
            <NavItem><Link to="/about">About</Link></NavItem>
          )}
          {location.pathname !== '/projects' && (
            <NavItem><Link to="/projects">Projects</Link></NavItem>
          )}
          {location.pathname !== '/contact' && (
            <NavItem><Link to="/contact">Contact</Link></NavItem>
          )}
        </NavLinks>
      </Navbar>

      <AnimatedRoutes />
    </MainContainer>
  );
}

export default App;
