import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useGetDataAdmin, useGetDataCoordinador } from "../hooks/useGetData"
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = React.useState("");
    const [errorcillo, setErrorcillo] = React.useState("");
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
    const [admins] = useGetDataAdmin();
    const [coordis] = useGetDataCoordinador();

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
                    let seVa = false;
                    for (let i = 0; i < admins.length; i++) {
                        if (admins[i].value.correo_institucional == usuario) {
                            navigate('/menu', {
                                state: {
                                    admin: true,
                                }
                            });
                            seVa = true;
                        }
                    }
                    if (seVa == false) {
                        navigate('/menu', {
                            state: {
                                admin: false,
                            }
                        });
                    }



                }
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setErrorcillo("Correo o contraseña incorrecto");
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
                <p style={{color:"red"} }>{errorcillo}</p>
                <Button onClick={logear} className="prepanet-button" type="submit">Ingresar</Button>
            </Stack>
        </div>
    );
}

export default Login;
