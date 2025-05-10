import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import calendarImage from '../assets/CalendarPage-copy.png';
import mealBuddyProfileImage from '../assets/MealBuddyProfile.png';
import flaskAppScreenshot from '../assets/FlaskAppScreenshot.png';

const Projects = () => {
  return (
    <section id="projects" className="projects" style={{ padding: '40px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '10px' }}>Projects</h2>
        <h3 style={{ textAlign: 'center', color: '#ccc', fontSize: '14px' }}>Click cards for more information</h3>
        <div className="project-list" style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
          <ProjectCard
            image={calendarImage}
            title="HourBook"
            shortDescription="Web app for tracking, approving, and reporting work hours."
            githubUrl="https://github.com/kvilho/nowhitespaces.git"
            description="HourBook is a work hour tracking app. Users log hours under projects, submit entries for approval, and generate reports. I implemented authentication, role management, and frontend-backend integration. The app uses React for the frontend and Spring Boot for the backend, with PostgreSQL as the database. I also implemented JWT authentication for secure access."
            techStack={["React", "TypeScript", "Spring Boot", "Java", "JWT Auth", "PostgreSQL"]}
          />

          <ProjectCard
            image={mealBuddyProfileImage}
            title="MealBuddy"
            shortDescription="React Native app for discovering, saving, and managing food recipes."
            githubUrl="https://github.com/bhi049/MealBuddy.git"
            description="MealBuddy is a mobile app built with React Native and Expo for discovering, saving, and managing food recipes. Users can browse random recipes, search by keywords, view recipe details, and save favorites to their profile. The app also supports profile editing and uses Supabase for authentication and for data storage."
            techStack={["React Native", "Expo", "JavaScript", "Supabase"]}
          />

          <ProjectCard
            image={flaskAppScreenshot} // laita tähän kuvan polku assets-kansioon tallennetusta kuvasta
            title="Stock Data Analyzer"
            shortDescription="Web app for analyzing and visualizing stock market data."
            githubUrl="https://github.com/bhi049/ohke-teknologia-seminaari.git"
            description="Stock Data Analyzer is a Flask-based web app that allows users to upload CSV stock data, compute key statistics, visualize trends using matplotlib, and get AI-generated explanations of the analysis. I built the backend using Flask, handled CSV parsing with Pandas, generated graphs with Matplotlib, and integrated OpenAI API for natural language insights."
            techStack={["Python", "Flask", "Pandas", "Matplotlib", "OpenAI API", "HTML/CSS"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;