import {Navbar,Container,Nav }from 'react-bootstrap'
import {Link }from "react-router-dom"


function NavBar() {
    return (
      <div>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to ="/home">home</Link>
      <Link to ="/Userlist">userlist</Link>
      <Link to ="/Error">error</Link>
      <Link to ="/Admin">admin</Link>
      
    </Nav>
    <Nav>
      <button></button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    );
  }
export default NavBar;  









