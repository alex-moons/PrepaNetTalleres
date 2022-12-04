import React, { Component } from 'react';
import { Card, Button, Container, Row, Col, Link } from 'react-bootstrap';
import { FireStoreDataGrupos } from '../components/FireStoreData'
import "bootstrap/dist/css/bootstrap.min.css";

import "./InfoTaller.css";

function InfoTaller() {
    if (sessionStorage.getItem("rol") == "Admin" || sessionStorage.getItem("rol") == "Coordi") {
        return (

            <div class="bg-taller">
                <Container >
                    <FireStoreDataGrupos />
                </Container>

            </div>
        );
    }
    else {
        return (
            <p style={{ color: "white" }}>No se puede compita</p>
        );
    }
    
}

export default InfoTaller;
