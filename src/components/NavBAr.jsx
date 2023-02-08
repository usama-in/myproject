import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../Images/logo-black.png"

function NavBar() {
    return (
        <Navbar className="navbg" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand ><img src={Logo} alt="Logo" style={{ width: "50px", height: "50px" }} /></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'  }}
                        navbarScroll>
                       <Nav.Link className="nav-color">
                        <Link  to='/'  className="nav-color">Home</Link>
                        </Nav.Link>
                        

                        <Nav.Link  ><Link to="/AboutUs" className="nav-color" >About Us</Link> </Nav.Link>

                        <NavDropdown title="Our Serving" >
                        <Link  to="/OurServing"  id="navbarScrollingDropdown" className="nav-color"></Link>
                            <NavDropdown.Item href="#action3">
                            <Link  to="/OurServing"  id="navbarScrollingDropdown"  >Cloths</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Blankets
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5" >
                                Other
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link  >
                           <Link to="/ContactUs" className="nav-color">Contact Us</Link> 
                        </Nav.Link>
                     
                    </Nav>
                    

                    <Button className="bttn" variant="outline-light">Login</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}




export default NavBar