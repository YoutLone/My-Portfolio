import styled from 'styled-components';

const Connect = () => (
  <Div className="w-full">
    <h3 className="text-logoColor">LET&apos;S CONNECT</h3>
    <div className="flex gap-4 my-2">
      <a
        href="https://github.com/YoutLone"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <ion-icon size="large" name="logo-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/thanmyohtet"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <ion-icon size="large" name="logo-linkedin" />
      </a>
    </div>
  </Div>
);

export default Connect;

const Div = styled.div`
  ion-icon {
    color: #505f79;
    z-index: 0;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #6936f5;
    }
  }
`;
