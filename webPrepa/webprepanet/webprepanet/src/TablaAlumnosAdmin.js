import React, { Component, useState, useEffect } from 'react';
import { Table, Form, Button, Container, Row, Col, Link, Dropdown } from 'react-bootstrap';
import Alumno from "./Alumno"

import "bootstrap/dist/css/bootstrap.min.css";
import "./TablaAlumnosAdmin.css";



function TablaAlumnosAdmin() {
    const [listaAlumnos, setAlumnos] = useState([]);

    

    return (
        <div className="bg-tablas">
            <test/>
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
                                <Dropdown.Item href="#/action-1">Matricula</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Alumno</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Campus</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Tetramestre</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Periodo</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Taller inscrito</Dropdown.Item>
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
                            {/*listaAlumnos.length === 0 ? (
                                <p>No hay datos</p>
                            ) : (
                                listaAlumnos.map((item) => (
                                    <Alumno
                                        nombre={item.nombre}
                                        matricula={item.matricula}
                                        correo_institucional={item.correo_institucional}
                                        campus={item.campus}
                                        tetramestre={item.tetramestre}
                                        periodo_de_ingreso={item.periodo_de_ingreso}
                                        talleres_aprobados={item.talleres_aprobados}
                                    />
                                ))
                            )*/}
                            <tr>
                                <td>A01197723</td>
                                <td>Patricio Santos</td>
                                <td>Monterrey</td>
                                <td>4</td>
                                <td>EA2022</td>
                                <td>11/01/2022 - 22/04/2022</td>
                                <td>3</td>
                                <td>305</td>
                                <td>Si</td>
                                <td>Aprobado</td>
                            </tr>
                            <tr>
                                <td>A01721287</td>
                                <td>Alex Hernandez</td>
                                <td>Monterrey</td>
                                <td>4</td>
                                <td>MA2022</td>
                                <td>11/05/2022 - 22/08/2022</td>
                                <td>4</td>
                                <td>403</td>
                                <td>No</td>
                                <td>Cursando</td>
                            </tr>
                            <tr>
                                <td>A01197723</td>
                                <td>Patricio Santos</td>
                                <td>Monterrey</td>
                                <td>4</td>
                                <td>EA2022</td>
                                <td>11/01/2022 - 22/04/2022</td>
                                <td>3</td>
                                <td>305</td>
                                <td>Si</td>
                                <td>Aprobado</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    );
}

export default TablaAlumnosAdmin;
