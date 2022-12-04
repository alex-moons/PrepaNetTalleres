import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../ComponentsWeb/Button";
import Typography from "@mui/material/Typography";
import "./Taller1.css";
import { useLocation } from "react-router-dom";
import TallerHero from "../ComponentsWeb/TallerHero";
import MainPage from "../ComponentsWeb/MainPage";

const item = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5
};

const number = {
    fontSize: 24,
    fontFamily: "default",
    color: "#f8f8f8",
    fontWeight: "medium"
};

const image = {
    height: 55,
    my: 4
};

function Taller1({ route, navigation }) {

    const location = useLocation();
    //let alumno = location.state.alumno;
    //let taller = location.state.taller;
    //console.log(alumno);
    //console.log(taller);
    var alumno1 = sessionStorage.getItem("alumno_doc");
    var taller1 = sessionStorage.getItem("taller");
    var alumno = JSON.parse(alumno1);
    var taller = JSON.parse(taller1);
    var aprobado = sessionStorage.getItem("aprobar")
    //console.log(alumno);
    if (sessionStorage.getItem("usuario") !== null) {
        return (
            <div>
                <MainPage />
                <TallerHero alumno={alumno} taller={taller} aprobado={aprobado} />
            </div>
        );
    }
    else {
        return (
            <p style={{ color: "white" }}>No se puede compita</p>
        );
    }
}

export default Taller1;
