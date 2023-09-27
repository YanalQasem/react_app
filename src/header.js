import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Everything is yummy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://www.tripadvisor.com/Restaurants-g293986-Amman_Amman_Governorate.html" target="_blank">Resturants</Nav.Link>
            <NavDropdown title="Jordanian food" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Falafel" target="_blank">Falafel</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Mansaf" target="_blank">
                Mansaf
              </NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Maqluba" target="_blank"> Maqluba </NavDropdown.Item>
            
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header