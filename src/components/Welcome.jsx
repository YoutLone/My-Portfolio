import styled, { keyframes } from 'styled-components';
import Connect from './Connect';
import headlineShapes from '../assets/banner-bg.png';
import headerImg from '../assets/header-img.svg';

const borderRadiusValue = '0 0 0 4rem';

const upDownAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Welcome = () => (
  <Section
    id="headline"
    className="p-6 flex flex-col justify-center items-center pt-40 pb-32 md:p-56 mt-14"
  >
    <Title className="text-xl sm:text-4xl text-left w-full font-bold leading-relaxed">
      <TypingAnimation>
        I&apos;M THAN MYO HTET 👋
        <br />
        Hello there! Nice to meet you 🤝
      </TypingAnimation>
    </Title>
    <Description className="text-lg text-left py-4">
      I&apos;m a software developer with a unique blend of carrier backgrounds
      from Electrical Engineer to Software Engineer. I&apos;m passionate about
      creating digital solutions with code. Explore my work, and let&apos;s
      bring your projects to life. Got a coding project in mind? Let&apos;s
      chat! 🚀
    </Description>
    <Connect />
  </Section>
);

export default Welcome;

const Section = styled.section`
  position: relative;
  border-radius: ${(props) => props.borderRadius};
  background-image: 
    url(${headlineShapes}), 
    url(${headerImg}); 

  background-repeat: no-repeat;
  background-size: cover, 350px 350px;

  &:before {
    content: '';
    position: absolute;
    top: 30px;
    right: 0;
    width: 370px;
    height: 370px;
    background-image: url(${headerImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    animation: ${upDownAnimation} 3s linear infinite;
    z-index: 1;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }
  }
`;

Section.defaultProps = {
  borderRadius: borderRadiusValue,
};

const Title = styled.h1`
  color: #a2c934;
  overflow: hidden;
`;

const TypingAnimation = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: ${typingAnimation} 5s steps(50) infinite;
`;

const Description = styled.p`
  color: #a6f5a9;
`;
