import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className='text-decoration-none text-white fw-bold mx-5' to="/">Home</Link>
            <Link className='text-decoration-none text-white fw-bold mx-5' to="/From">From</Link>
            <Link className='text-decoration-none text-white fw-bold mx-5' to="/List">List</Link>
          </Nav>
        </Container>
      </Navbar>
    </>

    </div>
  );
}

export default App;
