import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NavBar.scss'
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <div className='Header'>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
        <Link to="/"><Navbar.Brand href="#"><img src="./img/logo2.png" alt='logo' width="270" height="220"></img></Navbar.Brand></Link>
          <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"/>
              <Button variant="outline-primary">Search</Button>
            </Form>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Inicio</Nav.Link>
              <Nav.Link href="#">Productos</Nav.Link>
              <Nav.Link href="#">Nosotros</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"/>
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

