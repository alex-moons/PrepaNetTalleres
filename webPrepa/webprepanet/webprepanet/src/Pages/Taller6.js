import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../ComponentsWeb/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { useGetDataAlumno, useGetDataGrupoTaller, useGetDataInscripcion, useGetDataTaller } from "../hooks/useGetData";

import "./Taller1.css";
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

function Taller6({ route, navigation }) {

    const location = useLocation();
    let alumno = location.state.alumno;
    let taller = location.state.taller

    // checar si hay inscripciones de un grupo que tenga el taller que se pide y si la fecha es buena, si si agregar la inscripcion
  return (
    <div>
      <MainPage />
          <TallerHero alumno={alumno} taller={taller} />
    </div>
  );
}

export default Taller6;
