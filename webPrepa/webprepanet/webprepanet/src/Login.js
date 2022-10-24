import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';

function Login() {
    return (
        <div className="bg">
            <Stack className="content-center col-md-5 mx-auto">
                <div>
                    <img className="prepanet-center" height="100em" src='./img/prepanet_blanco.png' />
                </div>
                <div className="prepanet-input">
                    <input type="text" class="form-control" placeholder="Matricula" />
                </div>
                <div className="prepanet-input">
                    <input type="password" class="form-control" placeholder="Contrasena" />
                </div>
                <Button href="/menu" className="prepanet-button" type="submit">Ingresar</Button>
            </Stack>
        </div>
    );
}

export default Login;
