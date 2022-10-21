import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar';

function Login() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Card.Text>
                        Pantalla Login
                    </Card.Text>
                    <Button href="menu" variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;
