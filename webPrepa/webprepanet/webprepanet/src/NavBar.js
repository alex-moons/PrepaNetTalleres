import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar className='nav-bar' expand="lg">
            <Container>
                <Nav >
                    <Navbar.Brand href="/">
                        <img className="logo-margin" height="40em" src="/img/prepanetLogo.png" />
                        <img height="40em" src="/img/prepanet_blanco.png" />
                    </Navbar.Brand>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
