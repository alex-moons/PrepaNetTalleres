import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';

function App() {
    return (
        <div>
            <NavBar />
            <AppRoutes />
        </div>
    );
}

export default App;
