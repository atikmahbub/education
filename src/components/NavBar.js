import { Navbar, Nav, Button } from "react-bootstrap";
import LOGO from "../utils/assets/images/logo.png";

const NavigationBar = () => {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className="custom-nav"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <img src={LOGO} className="Logo" alt="LOGO" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/tutoring">tutoring</Nav.Link>
          <Nav.Link href="/hosting">hosting</Nav.Link>
          <Nav.Link href="/team">team</Nav.Link>
          <Nav.Link href="/contact">contact</Nav.Link>
          <Button className="green-button-nav">store</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
