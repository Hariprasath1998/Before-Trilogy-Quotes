import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

export default function AppNav() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Before Trilogy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto ">
                        <Nav.Link href="https://boiling-bayou-58132.herokuapp.com" text="light" >API</Nav.Link>
                        <Nav.Link href="https://github.com/Hariprasath1998/Before-Trilogy-Quotes">GitHub</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
