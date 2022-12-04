import React, { Component } from "react";
import { Card, Button, Container, Row, Col, Link } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import "./CoordAdminMenu.css";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NavBarAC } from "../ComponentsWeb/NavBar";

function CoordAdminMenu(admin) {
    const location = useLocation();
    const navigate = useNavigate();

    function irMenuCoordi() {
        if (sessionStorage.getItem("rol") == "Coordi") {
            navigate("/tablaAlumnosC");
        }
        else {
            navigate("/tablaAlumnosA");
        }
    }
    if (sessionStorage.getItem("rol") == "Admin" || sessionStorage.getItem("rol") == "Coordi") {
        return (
            <>
                <NavBarAC />
                <div class="bg-menu">
                    <Container>
                        <Row>
                            <Col className="row-align">
                                <Card className="cards-size">
                                    <Card.Link href="/infoTaller" className="link-format">
                                        <Card.Img variant="top" src="/img/imagenAlumnos.jpg" />
                                        <Card.Body>
                                            <Card.Title>Seleccionar Taller</Card.Title>
                                            <Card.Text>
                                                Selecciona un taller para revisar todos los alumnos que han
                                                solicitado inscripcion para un grupo.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card.Link>
                                </Card>
                            </Col>
                            <Col className="row-align">
                                <Card className="cards-size">
                                    <Card.Link onClick={() => irMenuCoordi()} className="link-format">
                                        <Card.Img variant="top" src="/img/imagenTalleres.jpg" />
                                        <Card.Body>
                                            <Card.Title>Todos los alumnos</Card.Title>
                                            <Card.Text>
                                                Observa una tabla con la informacion de todos los alumnos
                                                con sus estatus de inscripcion. Se puede filtrar la tabla
                                                con criterios.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card.Link>

                                    {/*<Card.Link href="/tablaAlumnosA" className="link-format">*/}
                                    {/*    <Card.Img variant="top" src="/img/imagenTalleres.jpg" />*/}
                                    {/*    <Card.Body>*/}
                                    {/*        <Card.Title>Todos los alumnos</Card.Title>*/}
                                    {/*        <Card.Text>*/}
                                    {/*            Observa una tabla con la informacion de todos los alumnos*/}
                                    {/*            con sus estatus de inscripcion. Se puede filtrar la tabla*/}
                                    {/*            con criterios.*/}
                                    {/*        </Card.Text>*/}
                                    {/*    </Card.Body>*/}
                                    {/*</Card.Link>*/}


                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div >
            </>
        );

    }
    else {
        return (
            <p style={{ color: "white" }}>No se puede compita</p>
        );
    }

}

export default CoordAdminMenu;
