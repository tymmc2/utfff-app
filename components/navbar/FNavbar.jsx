import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

const FNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">UT Free Food Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className="nav-link" to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link className="nav-link" to="/feed">Feed</Link></Nav.Link>
                        <Nav.Link><Link className="nav-link" to="/resources">Resources</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default FNavbar;