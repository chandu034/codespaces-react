import React from 'react';
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

const About = () => {
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

      <Heading style={{ marginTop: '2.5rem' }}>🎓 Education</Heading>
      <Timeline>
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <h4>Master of Science in Information Technology</h4>
            <p>Kennesaw State University, Georgia, USA</p>
            <p><i>Aug 2023 – Present</i></p>
            <p>
              Working as a Graduate Teaching Assistant. Involved in coursework related to Full-Stack Development,
              Project Management, Cloud Computing, and Data Analytics.
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
              Graduated with a CGPA of <strong>8.58</strong>. Developed strong analytical and problem-solving skills that still fuel my work as a developer today.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </AboutSection>
  );
};

export default About;
