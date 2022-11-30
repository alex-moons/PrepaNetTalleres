import React, { Component, useState, useEffect } from 'react';
import { Table, Form, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { FireStoreTablaAlumnosInfo, FireStoreTablaAlumnosPorTaller } from '../components/FireStoreData'
import { AddValueInscripcion } from '../components/Add'

import "bootstrap/dist/css/bootstrap.min.css";
import "./TablaAlumnosAdmin.css";

function TablaAlumnosAdmin() {
    if(sessionStorage.getItem("rol") == "Admin") {

        return (<>
            <FireStoreTablaAlumnosInfo />
            {/* <AddValueInscripcion /> */}
        </>
        );
    }
    else {
        return (
            <p style={{ color: "white" }}>No se puede compita</p>
        );
    }
}

export function TablaAlumnoAdminTaller({ taller }) {
    if (sessionStorage.getItem("rol") == "Admin") {
        return (
            <FireStoreTablaAlumnosPorTaller taller={taller} />
        );
    }
    else {
        return (
            <p style = {{ color: "white" }} >No se puede compita</p>
        );
    }
}

export default TablaAlumnosAdmin;
