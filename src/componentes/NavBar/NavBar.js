import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss'
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <div className='Header'>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
        <Link to="/"><img src="./img/logo2.png" alt='logo' width="270" height="220"></img></Link>
          <div className='buscador'>
            <input placeholder="Buscar producto" class="input" name="text" type="text"/>
            <button> Buscar </button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

