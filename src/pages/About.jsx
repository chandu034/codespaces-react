import React from 'react';

function About() {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p>
        Hello! I'm Chandra Sekhar, a frontend developer with 3.5+ years of experience building highly interactive,
        scalable web apps. I specialize in React and Next.js, blending performance with sleek UI/UX.
      </p>
      <p>
        Currently shaping UI magic at <strong>Ivoyant</strong>, I also served as a <strong>Graduate Teaching Assistant</strong> at
        Kennesaw State University, where I helped students understand software concepts and programming foundations.
      </p>
      <p>
        My stack includes <strong>React, Next.js, HTML, CSS, JavaScript, Firebase, GitHub, Ant Design</strong>
        and more. I enjoy building beautiful interfaces that are both functional and performant.
      </p>
      <p>
        Off duty? I explore AI/ML side quests, build planner apps, and experiment with glitch animations or cringe
        video scripts for fun.
      </p>

      <h2 style={{ marginTop: '2.5rem' }}>🎓 Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h4>Master of Science in Information Technology</h4>
            <p>Kennesaw State University, Georgia, USA</p>
            <p><i>Aug 2023 – Present</i></p>
            <p>
              Working as a Graduate Teaching Assistant. Involved in coursework related to Full-Stack Development,
              Project Management, Cloud Computing, and Data Analytics.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h4>Bachelor of Technology in Mechanical Engineering</h4>
            <p>JNTU Kakinada, India</p>
            <p><i>2017 – 2021</i></p>
            <p>Graduated with a CGPA of <strong>8.58</strong>. Developed strong analytical and problem-solving skills that still fuel my work as a developer today.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
