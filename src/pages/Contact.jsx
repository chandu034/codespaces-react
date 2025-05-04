import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

const glitch = keyframes`
  0% { text-shadow: 2px 0 red, -2px 0 blue; }
  20% { text-shadow: -2px 0 red, 2px 0 blue; }
  40% { text-shadow: 2px 2px red, -2px -2px blue; }
  60% { text-shadow: -1px -1px red, 1px 1px blue; }
  80% { text-shadow: 1px -1px red, -1px 1px blue; }
  100% { text-shadow: none; }
`;

const ContactWrapper = styled.div`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Fira Code', monospace;
  color: #b5f5ec;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2a9d8f;
  text-shadow: 0 0 8px #2a9d8f88;
  margin-bottom: 0.5rem;
  border-left: 5px solid #2a9d8f;
  padding-left: 1rem;
  display: inline-block;

  &:hover {
    animation: ${glitch} 0.5s linear;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 3rem;
  padding-left: 1rem;
  color: #aaa;
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
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(42, 157, 143, 0.3);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(6px);
  box-shadow: 0 0 12px rgba(0, 255, 200, 0.08);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(42, 157, 143, 0.3);
  }
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: #2a9d8f;

  &:hover {
    animation: ${glitch} 0.5s linear;
  }
`;

const Label = styled.span`
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: #2a9d8f;

  &:hover {
    animation: ${glitch} 0.5s linear;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: #b5f5ec;
  font-size: 0.95rem;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

const Value = styled.span`
  color: #b5f5ec;
  font-size: 0.95rem;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <Title>📞 Contact Me</Title>
      <Subtitle>Feel free to reach out for opportunities, collaboration, or just a chat!</Subtitle>

      <Grid>
        <Card>
          <IconWrapper aria-label="LinkedIn"><FaLinkedin /></IconWrapper>
          <InfoWrapper>
            <Label>LinkedIn</Label>
            <Link
              href="https://www.linkedin.com/in/chandra-sekhar-pulaparthi-8023661b0/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chandra Sekhar on LinkedIn"
            >
              chandra-sekhar-pulaparthi
            </Link>
          </InfoWrapper>
        </Card>

        <Card>
          <IconWrapper aria-label="GitHub"><FaGithub /></IconWrapper>
          <InfoWrapper>
            <Label>GitHub</Label>
            <Link
              href="https://github.com/chandu034"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="chandu034 GitHub profile"
            >
              chandu034
            </Link>
          </InfoWrapper>
        </Card>

        <Card>
          <IconWrapper aria-label="Phone"><FaPhone /></IconWrapper>
          <InfoWrapper>
            <Label>Phone</Label>
            <Value>+1-470-954-6484</Value>
          </InfoWrapper>
        </Card>

        <Card>
          <IconWrapper aria-label="Email"><FaEnvelope /></IconWrapper>
          <InfoWrapper>
            <Label>Email</Label>
            <Link href="mailto:cspulap@gmail.com">cspulap@gmail.com</Link>
          </InfoWrapper>
        </Card>
      </Grid>
    </ContactWrapper>
  );
};

export default Contact;
