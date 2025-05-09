import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import calendarImage from '../assets/CalendarPage-copy.png';

const Projects = () => {
  return (
    <section id="projects" className="projects" style={{ padding: '40px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '10px' }}>Projects</h2>
        <h3 style={{ textAlign: 'center', color: '#ccc', fontSize: '14px' }}>Click cards for more information</h3>
        <div className="project-list" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <ProjectCard
            image={calendarImage}
            title="HourBook"
            shortDescription="Web app for tracking, approving, and reporting work hours."
            githubUrl="https://github.com/kvilho/nowhitespaces.git"
            description="HourBook is a work hour tracking app. Users log hours under projects, submit entries for approval, and generate reports. I implemented authentication, role management, and frontend-backend integration. The app uses React for the frontend and Spring Boot for the backend, with PostgreSQL as the database. I also implemented JWT authentication for secure access."
            techStack={["React", "TypeScript", "Spring Boot", "Java", "JWT Auth", "PostgreSQL"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;