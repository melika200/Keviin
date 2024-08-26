import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import './header.css'
function Header() {
  const expand = "md";
  return (
    <>
    
      <Navbar style={{position:'fixed',textAlign:'center'}} expand={expand} className=" mb-3 w-100 headerItem">
        <Container >
          <Navbar.Brand href="index.html" className="smith">Smith</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Smith
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/about'>About</NavLink>
              <NavLink className='nav-link' to='/skill'>Skills</NavLink>
              <NavLink className='nav-link' to='/portfolio'>Portfolio</NavLink>
              <NavLink className='nav-link' to='/services'>Services</NavLink>
              <NavLink className='nav-link' to='/contact'>Contact</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
