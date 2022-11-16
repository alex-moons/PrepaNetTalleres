import React, { Component } from 'react';
import { Card, Button, Container, Row, Col, Link } from 'react-bootstrap';
import { FireStoreDataGrupos } from './components/FireStoreData'
import "bootstrap/dist/css/bootstrap.min.css";

import "./InfoTaller.css";

function InfoTaller() {
    return (
        <div class="bg-taller">
            <Container >
                <FireStoreDataGrupos />
            </Container>

        </div>
    );
}

export default InfoTaller;
