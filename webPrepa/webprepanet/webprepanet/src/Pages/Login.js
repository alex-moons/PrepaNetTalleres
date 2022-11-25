import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = React.useState("");
    const [pass, setPass] = React.useState("");
    const getUsuario = (event) => {
        setUsuario(event.target.value); // se pone el valor del field
    };
    const getPass = (event) => {
        setPass(event.target.value); // se pone el valor del field
    };
    const app = firebase.initializeApp({
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        databaseURL: process.env.REACT_APP_databaseURL,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId,
        measurementId: process.env.REACT_APP_measurementId,
    });
    const auth = getAuth(app);

    function logear() {

        firebase.auth().signInWithEmailAndPassword(usuario, pass)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                if (usuario.substring(0, 2) == "A0" || usuario.substring(0, 2) == "a0") {
                    navigate('/inicio', {
                        state: {
                            userId: usuario,
                        }
});

                }
                else {
                navigate('/menu');

                }
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    

    return (
        <div className="bg">
            <Stack className="content-center col-md-5 mx-auto">
                <div>
                    <img className="prepanet-center" height="100em" src='./img/prepanet_blanco.png' />
                </div>
                <div className="prepanet-input">
                    <input onBlur={getUsuario} type="text" class="form-control" placeholder="Matricula" />
                </div>
                <div className="prepanet-input">
                    <input onBlur={getPass} type="password" class="form-control" placeholder="Contrasena" />
                </div>
                <Button onClick={logear} className="prepanet-button" type="submit">Ingresar</Button>
            </Stack>
        </div>
    );
}

export default Login;
