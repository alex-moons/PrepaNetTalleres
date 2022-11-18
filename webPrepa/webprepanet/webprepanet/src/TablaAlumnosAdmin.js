import React, { Component, useState, useEffect } from 'react';
import { Table, Form, Button, Container, Row, Col, Link, Dropdown } from 'react-bootstrap';
import {  FireStoreTablaAlumnosInfo } from './components/FireStoreData'
import { AddValue } from './components/Add'

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
                    <Table responsive striped bordered hover variant="light" style={{overflow: "auto"} }>
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

                                <th>Actualizar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <FireStoreTablaAlumnosInfo />
                        </tbody>
                    </Table>
                </Row>
          
            </Container>
        </ div >
    );
}

export default TablaAlumnosAdmin;
