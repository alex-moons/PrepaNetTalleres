import React, { Component } from 'react';
import { Table, Form, Button, Container, Row, Col, Link } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./TablaAlumnosCoord.css";
import styles from "./TablaAlumnosCoord.css";
import { FireStoreTablaAlumnosInfoCoordi } from '../components/FireStoreData';

function TablaAlumnosCoord() {

    return (<>
        <FireStoreTablaAlumnosInfoCoordi />
        {/* <AddValueInscripcion /> */}
    </>
    );
    //return (
    //    <div class="bg-tablas">
    //        <Container>
    //            <Row>
    //                <Col>
    //                    <h1 className="titulo">Campus MTY</h1>
    //                </Col>
    //                <Col>
    //                    <Form className="titulo">
    //                        <Form.Control className="buscar-width" type="email" placeholder="Buscar" />
    //                    </Form>
    //                </Col>
    //                <Col>
    //                    <Button className="filter-button">
    //                        <img height="30px" src="../img/filter-icon.png" />
    //                    </Button>
    //                </Col>
    //            </Row>
    //        </Container>

    //        <div class="container-width-tabla tabla-alumnos">
    //            <Table responsive striped bordered hover variant="light" >
    //                <thead>
    //                    <tr>
    //                        <th>Matricula</th>
    //                        <th>Alumno</th>
    //                        <th>Tetramestre</th>
    //                        <th>Periodo</th>
    //                        <th>Fechas</th>
    //                        <th>Taller inscrito</th>
    //                        <th>Grupo</th>
    //                        <th>Taller aprobado</th>
    //                        <th>Estatus</th>
    //                    </tr>
    //                </thead>
    //                <tbody>
    //                    <tr>
    //                        <td>A01197723</td>
    //                        <td>Patricio Santos</td>
    //                        <td>4</td>
    //                        <td>EA2022</td>
    //                        <td>11/01/2022 - 22/04/2022</td>
    //                        <td>3</td>
    //                        <td>305</td>
    //                        <td>Si</td>
    //                        <td>Aprobado</td>
    //                    </tr>
    //                    <tr>
    //                        <td>A01721287</td>
    //                        <td>Alex Hernandez</td>
    //                        <td>4</td>
    //                        <td>MA2022</td>
    //                        <td>11/05/2022 - 22/08/2022</td>
    //                        <td>4</td>
    //                        <td>403</td>
    //                        <td>No</td>
    //                        <td>Cursando</td>
    //                    </tr>
    //                    <tr>
    //                        <td>A01197723</td>
    //                        <td>Patricio Santos</td>
    //                        <td>4</td>
    //                        <td>EA2022</td>
    //                        <td>11/01/2022 - 22/04/2022</td>
    //                        <td>3</td>
    //                        <td>305</td>
    //                        <td>Si</td>
    //                        <td>Aprobado</td>
    //                    </tr>
    //                </tbody>
    //            </Table>
    //        </div>
    //    </div>
    //);
}

export default TablaAlumnosCoord;
