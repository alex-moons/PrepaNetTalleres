import React, { Component, useState, useEffect } from 'react';
import { Table, Form, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { FireStoreTablaAlumnosInfo, FireStoreTablaAlumnosPorTaller } from '../components/FireStoreData'
import { AddValueInscripcion } from '../components/Add'

import "bootstrap/dist/css/bootstrap.min.css";
import "./TablaAlumnosAdmin.css";

function TablaAlumnosAdmin() {


    return (<>
        <FireStoreTablaAlumnosInfo />
        {/* <AddValueInscripcion /> */}
        </>
    );
}

export function TablaAlumnoAdminTaller({ taller }) {
    return (
        <FireStoreTablaAlumnosPorTaller taller={taller} />
    );
}

export default TablaAlumnosAdmin;
