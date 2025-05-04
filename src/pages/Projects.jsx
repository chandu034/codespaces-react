import React from 'react';
import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
  0% { text-shadow: 2px 0 red, -2px 0 blue; }
  20% { text-shadow: -2px 0 red, 2px 0 blue; }
  40% { text-shadow: 2px 2px red, -2px -2px blue; }
  60% { text-shadow: -1px -1px red, 1px 1px blue; }
  80% { text-shadow: 1px -1px red, -1px 1px blue; }
  100% { text-shadow: none; }
`;

const glitchCard = keyframes`
  0% { transform: translate(0); box-shadow: 0 0 12px rgba(42, 157, 143, 0.15); }
  20% { transform: translate(-1px, 1px); box-shadow: 2px 2px red; }
  40% { transform: translate(1px, -1px); box-shadow: -2px -2px blue; }
  60% { transform: translate(-1px, 1px); box-shadow: 1px -1px green; }
  80% { transform: translate(1px, -1px); box-shadow: -1px 1px cyan; }
  100% { transform: translate(0); box-shadow: 0 0 15px rgba(42, 157, 143, 0.3); }
`;

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 4rem auto 2rem auto;
  padding: 2rem 1rem;
  font-family: 'Fira Code', monospace;
  color: #b5f5ec;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2a9d8f;
  margin-bottom: 2rem;
  text-shadow: 0 0 8px #2a9d8f88;
  border-left: 5px solid #2a9d8f;
  padding-left: 1rem;

  &:hover {
    animation: ${glitch} 0.6s linear;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    padding-left: 0.75rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(42, 157, 143, 0.4);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 0 15px rgba(42, 157, 143, 0.1);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    animation: ${glitchCard} 0.5s linear;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #2a9d8f;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`;

const TechStack = styled.p`
  font-size: 0.85rem;
  font-style: italic;
  color: #87f1eb;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #ddd;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const DemoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DemoLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  background-color: #2a9d8f;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #21867a;
    box-shadow: 0 0 8px rgba(42, 157, 143, 0.5);
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: '🗓️ Planora – Daily Planner App',
      tech: 'React, Firebase, Styled-Components',
      description:
        'A personal planning tool for managing tasks, time blocks, and Pomodoro timers. Built with Firebase Firestore, custom priority sorting, and responsive UI.',
      demo: 'https://planora-three.vercel.app/'
    },
    {
      title: '🍽️ Dine-N-Go – Capstone Project Website',
      tech: 'HTML, CSS, JavaScript, Google Sites',
      description:
        'A dynamic capstone project website for stakeholders and faculty to track milestones, presentations, and progress. Included team bios, timelines, and reports.'
    },
    {
      title: '🌐 Portfolio Website',
      tech: 'React, Vite, Framer Motion, Styled-Components',
      description:
        'This very site you’re exploring now. Designed to showcase my frontend skills with glitch animation, dynamic routing, and responsive design.',
      demo: 'https://portfolio-chandra-nine.vercel.app/'
    },
    {
      title: '🎬 Movie Genre Classification (NLP)',
      tech: 'Python, Hugging Face Transformers, Scikit-learn',
      description:
        'Built an ML model to predict movie genres from plot summaries using NLP and DistilBERT. Trained on IMDb dataset with text classification and regression.'
    }
  ];

  return (
    <ProjectsWrapper>
      <Title>💻 Projects</Title>
      <Grid>
        {projects.map((proj, idx) => (
          <Card key={idx}>
            <ProjectTitle>{proj.title}</ProjectTitle>
            <TechStack>{proj.tech}</TechStack>
            <Description>{proj.description}</Description>
            {proj.demo && (
              <DemoWrapper>
                <DemoLink href={proj.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </DemoLink>
              </DemoWrapper>
            )}
          </Card>
        ))}
      </Grid>
    </ProjectsWrapper>
  );
};

export default Projects;
