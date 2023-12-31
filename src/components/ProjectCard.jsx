import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import Button from './Button';

const ProjectCard = ({ project }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    window.open(project.link);
  };

  const mdFlexDirection = project.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row';
  return (
    <Li
      className={`m-6 p-4 flex flex-col gap-3 max-w-sm ${mdFlexDirection} md:gap-10 md:max-w-5xl`}
    >
      <div className="md:w-1/2 flex justify-center items-center rounded-lg">
        <a
          id="card-image"
          href={`${project.liveDemo}`}
          target="_blank"
          rel="noreferrer"
          className="relative"
        >
          <Image
            src={project.image}
            className="py-2 px-1 md:px-2 hover:p-0"
            alt={project.name}
          />
          <span className="absolute live-demo p-1">Live demo</span>
        </a>
      </div>
      <div className="flex flex-col md:gap-5 md:w-1/2">
        <h1 className="text-logoColor3">{project.name}</h1>
        <div>
          <span className="text-logoColor2 font-semibold">
            {project.type[0]}
          </span>
          <ion-icon name="ellipse" />
          <span className="text-projectCardText font-semibold">
            {project.type[1]}
          </span>
          <ion-icon name="ellipse" />
          <span className="text-projectCardText font-semibold">
            {project.type[2]}
          </span>
        </div>
        <p>{project.description}</p>
        <div className="flex gap-2 items-center flex-wrap">
          {project.technology.map((tech) => (
            <span
              key={tech}
              className="bg-logoColor4 px-4 py-1 rounded-lg text-sm text-logoColor font-medium tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex">
          <Button button handleClick={handleButtonClick}>
            Project at GitHub
          </Button>
        </div>
      </div>
    </Li>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
    technology: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveDemo: PropTypes.string.isRequired,
  }).isRequired,
};

const Li = styled.li`
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin: 0.5rem 0;
  }

  ion-icon {
    font-size: 0.7rem;
    margin: 0 0.5rem;
    color: #c1c7d0;
  }

  #card-image {
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      border: 2px solid #234261;
    }
  }

  .live-demo {
    background: #6936f5;
    color: white;
    bottom: 0.5rem;
    left: 0.25rem;
    @media (min-width: 768px) {
      left: 0.5rem;
    }
  }
`;
