import React, { Component } from 'react';
import { Card, Button, Container, Row, Col, Link } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";

import "./InfoTaller.css";

function InfoTaller() {
    return (
        <div class="bg-taller">
            <Container>
                <Row className="taller-row">
                    <Col className="flex">
                        <h1 className="taller-titulo">Nombre_Taller</h1>
                    </Col>
                    <Col>
                        <h2 className="taller-fecha">Fechas</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="taller-texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Col>
                    <Col className="taller-texto">
                        <p><b>Inicio de inscripciones:</b> 0000-0000</p>
                        <p><b>Fin de inscripciones:</b> 0000-0000</p>
                        <p><b>Inicio del curso:</b> 0000-0000</p>
                        <p><b>Fin del curso:</b> 0000-0000</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-taller">
                        <Button className="taller-button">Lista</Button>
                    </Col>
                    <Col className="center-taller">
                        <Button className="taller-button">Editar</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default InfoTaller;
