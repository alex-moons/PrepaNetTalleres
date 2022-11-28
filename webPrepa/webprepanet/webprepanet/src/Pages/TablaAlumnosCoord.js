import React, { Component } from 'react';
import { Table, Form, Button, Container, Row, Col, Link } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./TablaAlumnosCoord.css";
import styles from "./TablaAlumnosCoord.css";
import { FireStoreTablaAlumnosInfoCoordi, FireStoreTablaAlumnosPorTallerCoordi } from '../components/FireStoreData';

function TablaAlumnosCoord() {

    return (<>
        <FireStoreTablaAlumnosInfoCoordi />
        {/* <AddValueInscripcion /> */}
    </>
    );
}

export function TablaAlumnoAdminTaller({ taller }) {
    return (
        <FireStoreTablaAlumnosPorTallerCoordi taller={taller} />
    );
}

export default TablaAlumnosCoord;
