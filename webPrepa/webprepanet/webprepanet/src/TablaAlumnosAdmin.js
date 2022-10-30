import React, { Component } from 'react';
import { Table, Form, Button, Container, Row, Col, Link, Dropdown } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";

import "./TablaAlumnosAdmin.css";

function TablaAlumnosAdmin() {
    return (
        <div className="bg-tablas">
            <Container>
                <Row className="tabla-row">
                    <Col>
                        <h1 className="tabla-titulo">Alumnos</h1>
                    </Col>
                    <Col className="tabla-filter">
                        <Form className="tabla-buscar">
                            <Form.Control type="email" placeholder="Buscar" />
                        </Form>
                    </Col>
                    <Col md="auto" className="tabla-filter">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <img height="30px" src="../img/filter-icon.png" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row className="tabla-datos">
                    <Table responsive striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Matricula</th>
                                <th>Alumno</th>
                                <th>Campus</th>
                                <th>Tetramestre</th>
                                <th>Periodo</th>
                                <th>Fechas</th>
                                <th>Taller inscrito</th>
                                <th>Grupo</th>
                                <th>Taller aprobado</th>
                                <th>Estatus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacobknsdlkfjsldjflksdjflkjsdlfjldkskjflkdsjflkdslfjskldf</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitterkfndslkfansdlfknsodfnwoefjfkejnofb dsknskndkjfsolfbneljfboejbfsnfe</td>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitterkfndslkfansdlfknsodfnwoefjfkejnofb dsknskndkjfsolfbneljfboejbfsnfe</td>
                                <td>@twitterkfndslkfansdlfknsodfnwoefjfkejnofb dsknskndkjfsolfbneljfboejbfsnfe</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    );
}

export default TablaAlumnosAdmin;
