import styled from 'styled-components';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Welcome from './components/Welcome';
import Feedback from './components/Feedback';

function App() {
  return (
    <Container className="body-bgBackground">
      <Navbar />
      <Welcome />
      <Projects />
      <About />
      <Feedback />
      <Contact />
    </Container>
  );
}

export default App;

const Container = styled.div`
font-family: 'Poppins', sans-serif;
`;
