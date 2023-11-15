import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import Yacht from '../assets/projects/yacht.png';
import Space from '../assets/projects/space.png';
import Magician from '../assets/projects/magician.png';
import Movie from '../assets/projects/movie.png';

const projects = [
  {
    id: 1,
    name: 'Yacht Rental App',
    type: ['SOLO', 'Full-Stack Dev', '2023'],
    description:
    'Yacht Rental is the react client of a full stack yacht reservation web application built on the rails API.The main function of the app is to allow users to book reservations for renting a yacht.',
    technology: ['React', 'CSS', 'Ruby on Rails', 'Tailwind'],
    image: Yacht,
    link: 'https://github.com/YoutLone/yacht_rental_front_end.git',
    liveDemo: 'https://beta-yacht-rental.netlify.app/',
  },
  {
    id: 2,
    name: 'MovieVerse',
    type: ['SOLO', 'Front End Dev', '2023'],
    description:
      'This application, known as the MovieVerse, is developed as part of the Microverse REACT-REDUX capstone project.Its primary function is to serve as a TV show database, with all shows being sourced from an API.',
    technology: ['HTML', 'CSS', 'Redux', 'React'],
    image: Movie,
    link: 'https://github.com/YoutLone/MovieVerse.git',
    liveDemo: 'https://movieverse-rzc1.onrender.com/',
  },
  {
    id: 3,
    name: 'Space Travellers App',
    type: ['SOLO', 'Front End Dev', '2023'],
    description:
      'A Space-Travelers gateway app for Rockets reserving and participating in captivating space missions.',
    technology: ['HTML', 'CSS', 'Redux', 'React'],
    image: Space,
    link: 'https://github.com/YoutLone/space-travellers-hub.git',
    liveDemo: 'https://space-travellers-hub-uw83.onrender.com/',
  },
  {
    id: 4,
    name: 'Math-Magicians',
    type: ['Microverse', 'Front End Dev', '2023'],
    description:
      'Math Magicians is a website for all fans of mathematics.It serves as a Single Page Application (SPA).',
    technology: ['HTML', 'JavaScript', 'CSS', 'React'],
    image: Magician,
    link: 'https://github.com/YoutLone/math-magicians.git',
    liveDemo: 'https://math-magicians-5nkr.onrender.com/',
  },
];

const Projects = () => (
  <Section id="projects" className="py-28">
    <ul className="flex flex-col items-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  </Section>
);

export default Projects;

const Section = styled.section``;
