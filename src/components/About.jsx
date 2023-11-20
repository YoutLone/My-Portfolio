import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Connect from './Connect';
import DropdownMenu from './Dropdown';

const borderRadiusValue = '0 4rem 0 0';
const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(true);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen1(false);
    setIsOpen2(true);
    setIsOpen3(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(true);
  };
  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(
      'https://drive.google.com/file/d/1Q2bqNkbYtGvpmO_JnD3RLBB7pzrebkZ7/view?usp=drive_link',
    );
  };
  return (
    <Section
      id="about-me"
      className="p-6 flex flex-col justify-center items-center md:flex-row md:p-32"
    >
      <article>
        <h1 className="text-4xl text-left w-full font-bold leading-relaxed">
          About Me
        </h1>
        <p className="text-lg text-left py-4">
          Hello, I&apos;m Htet, a recent graduate of Microverse&apos;s
          Full-Stack development program, and my path to becoming a software
          engineer is a unique one. With a background in Electrical Engineer
          my journey into the world of software development.Through my experiences and
          relentless pursuit of knowledge, I&apos;ve transitioned into a
          full-stack software engineer.
          {showFullText ? (
            <>
              <br />
              <br />
              Throughout my journey at Microverse, I refined my expertise in software engineering
              by investing more than 1,300 hours in mastering foundational concepts. This involved
              active participation in global coding projects through pair programming, contributing
              to the completion of over 30 projects. I extensively explored the realms of Algorithms
              & Data Structures and enthusiastically embraced a diverse set of technologies,
              equipping myself for the dynamic and continually evolving technological landscape.
              <br />
              <br />
              Transitioning from electrical engineering to software development has been a natural
              progression driven by my passion for innovative solutions. As a software engineer
              in Microverse, I bring the same dedication and enthusiasm to my journey.
              <br />
              <br />
              If you are interested in connecting or discussing potential
              collaborations, please feel free to reach out. Let&apos;s embark
              on this exciting journey together.
            </>
          ) : null}
        </p>
        <button
          className="underline pb-10"
          type="button"
          onClick={handleReadMoreClick}
        >
          {showFullText ? 'Read Less' : 'Read More'}
        </button>

        <Connect />
        <Button button handleClick={handleResumeClick}>
          Get my resume
        </Button>
      </article>
      <article className="md:flex-col md:pl-5 w-full">
        <DropdownMenu
          title="Languages"
          items={['JavaScript', 'SQL', 'Ruby', 'HTML', 'CSS']}
          isOpen={isOpen1}
          toggleDropdown={toggleDropdown1}
        />
        <DropdownMenu
          title="Frameworks"
          items={[
            'ReactJS',
            'Ruby on Rails',
            'Bootstrap',
            'Tailwind CSS',
          ]}
          isOpen={isOpen2}
          toggleDropdown={toggleDropdown2}
        />
        <DropdownMenu
          title="Tools"
          items={[
            'Git',
            'GitHub',
            'VS Code',
            'Chrome Dev Tools',
            'PostgreSQL',
            'Webpack',
          ]}
          isOpen={isOpen3}
          toggleDropdown={toggleDropdown3}
        />
      </article>
    </Section>
  );
};

export default About;

const Section = styled.section`
  border-radius: ${(props) => props.borderRadius};
`;

Section.defaultProps = {
  borderRadius: borderRadiusValue,
};
