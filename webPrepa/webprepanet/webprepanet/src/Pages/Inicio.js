import React from "react";
import CardTaller from "../ComponentsWeb/CardsTaller";
import Sidebar from "../ComponentsWeb/Sidebar";
import { Stack } from '@mui/material';
import NavBar from "../ComponentsWeb/NavBar";
import { useLocation } from "react-router-dom";
import MainPage from "../ComponentsWeb/MainPage";
import { useGetDataAlumno, useGetDataGrupoTaller, useGetDataInscripcion, useGetDataTaller } from "../hooks/useGetData";

const Inicio = ({ route, navigation }) => {
    const location = useLocation();
    const [alumnos] = useGetDataAlumno();
    // get userId
    let userId = sessionStorage.getItem("usuario");
    let doc = alumnos[1];
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].value.correo_institucional == userId) {
            doc = alumnos[i];
        }
    }
    if (sessionStorage.getItem("usuario") !== null) {
        return (
            <div>
                <MainPage />
                <div className="titulo">Bienvenido </div>
                <Stack spacing={10} justifyContent="center" alignItems="center" direction="column">
                    <CardTaller doc={doc} />
                </Stack>
            </div>
        );
    }
    else {
        return (
            <p style={{ color: "white" }}>No se puede compita</p>
        );
    }

};

export default Inicio;
