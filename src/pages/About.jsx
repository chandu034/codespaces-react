import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


const blink = keyframes`
  50% { opacity: 0; }
`;

const slideIn = keyframes`
  0% { opacity: 0; transform: translateY(40px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const AboutSection = styled.div`
  max-width: 1000px;
  margin: 6rem auto 2rem auto;
  padding: 2rem 2.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(42, 157, 143, 0.4);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 20px rgba(42, 157, 143, 0.2);
  font-family: 'Fira Code', monospace;
  animation: ${slideIn} 0.6s ease-out both;
  position: relative;

  &::before {
    content: "_";
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: #2a9d8f;
    font-size: 1.25rem;
    animation: ${blink} 1s step-end infinite;
  }
`;

const Heading = styled.h2`
  color: #2a9d8f;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(42, 157, 143, 0.2);
  padding-bottom: 0.5rem;
  font-weight: 600;
  text-shadow: 0 0 5px #2a9d8f80;
`;

const Paragraph = styled.p`
  color: #b5f5ec;
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 1.2rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  border-left: 2px solid rgba(42, 157, 143, 0.4);
  padding-left: 1.5rem;
  position: relative;
`;

const TimelineItem = styled.div`
  position: relative;
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -1.15rem;
  top: 0.3rem;
  width: 12px;
  height: 12px;
  background-color: #2a9d8f;
  border-radius: 50%;
  box-shadow: 0 0 10px #2a9d8f88;
`;

const TimelineContent = styled.div`
  h4 {
    margin: 0 0 0.2rem;
    font-size: 1.2rem;
    color: #2a9d8f;
    text-shadow: 0 0 5px #2a9d8f33;
  }

  p {
    margin: 0.25rem 0;
    color: #b5f5ec;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const CollapsibleCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(42, 157, 143, 0.3);
  padding: 1.25rem;
  border-radius: 10px;
  backdrop-filter: blur(4px);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(42, 157, 143, 0.1);
    box-shadow: 0 0 10px rgba(42, 157, 143, 0.2);
  }

  h3 {
    margin: 0;
    font-size: 1.4rem;
    color: #2a9d8f;
    text-shadow: 0 0 4px #2a9d8f55;
  }

  p {
    color: #b5f5ec;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

const glitchCard = keyframes`
  0% { transform: translate(0); box-shadow: 0 0 12px rgba(42, 157, 143, 0.15); }
  20% { transform: translate(-1px, 1px); box-shadow: 2px 2px red; }
  40% { transform: translate(1px, -1px); box-shadow: -2px -2px blue; }
  60% { transform: translate(-1px, 1px); box-shadow: 1px -1px green; }
  80% { transform: translate(1px, -1px); box-shadow: -1px 1px cyan; }
  100% { transform: translate(0); box-shadow: 0 0 15px rgba(42, 157, 143, 0.3); }
`;

const SectionCard = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(42, 157, 143, 0.3);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(42, 157, 143, 0.05);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    animation: ${glitchCard} 0.5s linear;
  }
`;

const CardsWrapper = styled.div`
    display: flex;
  flex-direction: column;
  gap: 2remt
`;




const About = () => {
  const [showEducation, setShowEducation] = useState(false);
const [showExperience, setShowExperience] = useState(false);

const toggleEducation = () => setShowEducation(prev => !prev);
const toggleExperience = () => setShowExperience(prev => !prev);

  return (
    <AboutSection>
      <Heading>About Me</Heading>
      <Paragraph>
        Hello! I'm Chandra Sekhar, a frontend developer with 3.5+ years of experience building highly interactive,
        scalable web apps. I specialize in React and Next.js, blending performance with sleek UI/UX.
      </Paragraph>
      <Paragraph>
        Currently shaping UI magic at <strong>Ivoyant</strong>, I also served as a <strong>Graduate Teaching Assistant</strong> at
        Kennesaw State University, where I helped students understand software concepts and programming foundations.
      </Paragraph>
      <Paragraph>
        My stack includes <strong>React, Next.js, HTML, CSS, JavaScript, Firebase, GitHub, Ant Design</strong>
        and more. I enjoy building beautiful interfaces that are both functional and performant.
      </Paragraph>
      <Paragraph>
        Off duty? I explore AI/ML side quests, build planner apps, and experiment with glitch animations or creative
        projects for fun.
      </Paragraph>

      <CardsWrapper>
      {/* Education Section */}
      <SectionCard onClick={toggleEducation}>
  <Heading>🎓 Education</Heading>
  {!showEducation ? (
    <CollapsibleCard>
      <h3>Master's & Bachelor's</h3>
      <p>{showEducation ? "Click to collapse" : "Click to view full timeline"}</p>
    </CollapsibleCard>
  ) : (
    <Timeline>
      <TimelineItem>
        <TimelineDot />
        <TimelineContent>
          <h4>Master of Science in Information Technology</h4>
          <p>Kennesaw State University, Georgia, USA</p>
          <p><i>Aug 2023 – Present</i></p>
          <p>
            Graduate TA | Full-Stack, Cloud, Analytics
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot />
        <TimelineContent>
          <h4>Bachelor of Technology in Mechanical Engineering</h4>
          <p>JNTU Kakinada, India</p>
          <p><i>2017 – 2021</i></p>
          <p>
            CGPA: <strong>8.58</strong> | Core problem-solving foundation
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )}
</SectionCard>


      {/* Experience Section */}
      <SectionCard  onClick={toggleExperience}>
  <Heading>🧑‍💻 Experience</Heading>
  {!showExperience ? (
    <CollapsibleCard>
      <h3>Infosys, KSU, Ivoyant</h3>
      <p>{showExperience ? "Click to collapse" : "Click to view full timeline"}</p>
    </CollapsibleCard>
  ) : (
    <Timeline>
      <TimelineItem>
        <TimelineDot />
        <TimelineContent>
          <h4>Software Intern</h4>
          <p>Ivoyant, Atlanta</p>
          <p><i>Jan 2025 – Present</i></p>
          <p>
            Built real-time UIs using React/Next.js, Redux Toolkit, and Firebase. Created modular components and dynamic workflows.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot />
        <TimelineContent>
          <h4>Graduate Teaching Assistant</h4>
          <p>Kennesaw State University</p>
          <p><i>Aug 2023 – Dec 2024</i></p>
          <p>
            Guided undergrads in C#/Python/Java labs, assisted in grading/debugging.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot />
        <TimelineContent>
          <h4>Frontend Developer</h4>
          <p>Infosys, India</p>
          <p><i>Nov 2021 – Aug 2023</i></p>
          <p>
            Delivered UI components with React.js, collaborated with teams to build dashboards and business apps.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )}
</SectionCard>
</CardsWrapper>
    </AboutSection>
  );
};

export default About;
