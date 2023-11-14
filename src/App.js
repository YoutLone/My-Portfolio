import styled from 'styled-components';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  return (
    <Container className="body-bgBackground">
      <Navbar />
      <Welcome />
      <About />
    </Container>
  );
}

export default App;

const Container = styled.div`
font-family: 'Poppins', sans-serif;
`;
