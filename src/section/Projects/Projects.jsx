import React from 'react';
import styles from './ProjectsStyle.module.css';
import trip from '../../assets/trip.png';
import medical from '../../assets/medical.png';
import tv from '../../assets/tv.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={trip} link="https://github.com/HiruRajapaksha/Trip-Organizing-web.git"
            h3="Trip Organizer"
            p="Trip Organizing Website"/>

            <ProjectCard src={medical} link="https://github.com/HiruRajapaksha/Sahana-Medical.git"
            h3="Sahana Medical Center"
            p="Medical Center  Website"/>

            <ProjectCard src={tv} link="https://github.com/HiruRajapaksha/Tv-Show-App.git"
            h3="TV-Shows"
            p="TV-Show App"/>
        </div>
    </section>
  );
}

export default Projects;