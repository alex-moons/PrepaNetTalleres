import React, { Component } from 'react';
import { Table, Form, Button, Container, Row, Col, Link } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";

import "./TablaAlumnosCoord.css";

function TablaAlumnosCoord() {
    return (
        <div class="bg-tablas">
            <Container>
                <Row>
                    <Col>
                        <h1 className="titulo">Campus AAA</h1>
                    </Col>
                    <Col>
                        <Form className="titulo">
                            <Form.Control className="buscar-width" type="email" placeholder="Buscar" />
                        </Form>
                    </Col>
                    <Col>
                        <Button className="filter-button">
                            <img height="30px" src="../img/filter-icon.png" />
                        </Button>
                    </Col>
                </Row>
            </Container>

            <div className="container-width-tabla">
                <Table responsive striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>Matricula</th>
                            <th>Alumno</th>
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
            </div>
        </div>
    );
}

export default TablaAlumnosCoord;
