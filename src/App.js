import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Container className="body-bgBackground">
      <Navbar />
    </Container>
  );
}

export default App;

const Container = styled.div`
font-family: 'Poppins', sans-serif;
`;
