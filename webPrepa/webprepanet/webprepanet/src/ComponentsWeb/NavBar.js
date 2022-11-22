import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Sidebar from "./Sidebar";

const NavBar = () => {
    return (
        <div>
            <Navbar className="nav-bar" expand="lg">
                <Sidebar />
                <container-fluid>
                    <Nav className="navbar navbar-lg">
                        <Navbar.Brand className="nav_brand" href="/">
                            <img
                                className="logo-margin"
                                height="40em"
                                src="/img/prepanetLogo.png"
                            />
                            <img height="40em" src="/img/prepanet_blanco.png" />
                        </Navbar.Brand>
                    </Nav>
                </container-fluid>
            </Navbar>
        </div>
    );
};

export default NavBar;
