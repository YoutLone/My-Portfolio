import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import Button from './Button';

const FeedbackCard = ({ feedback }) => {
  const handleGitHubClick = (e) => {
    e.preventDefault();
    window.open(feedback.Github);
  };

  const handleLinkedInClick = (e) => {
    e.preventDefault();
    window.open(feedback.linkedin);
  };

  return (
    <Li className="m-6 p-4 flex flex-col gap-3">
      <div className="flex flex-col">
        <div>
          <Image
            src={feedback.image}
            className="rounded-full w-20 h-20 object-cover mx-auto"
            alt={feedback.name}
          />
        </div>
        <div className="flex flex-col items-center mt-4">
          <h2 className="text-logoColor3">{feedback.name}</h2>
          <p className="text-center">{feedback.description}</p>
          <div className="flex gap-2 items-center mt-4">
            <a href={feedback.Github} target="_blank" rel="noreferrer">
              <Button handleClick={handleGitHubClick}>
                GitHub
              </Button>
            </a>
            <a href={feedback.linkedin} target="_blank" rel="noreferrer">
              <Button handleClick={handleLinkedInClick}>
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Li>
  );
};

export default FeedbackCard;

FeedbackCard.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    Github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

const Li = styled.li`
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.5rem 0;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    margin: 0.5rem 0;
  }
`;
