import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Pages/Login";
import CoordAdminMenu from "./Pages/CoordAdminMenu";
import TablaAlumnosAdmin, { TablaAlumnoAdminTaller } from "./Pages/TablaAlumnosAdmin";
import TablaAlumnosCoord from "./Pages/TablaAlumnosCoord";
import InfoTaller from "./Pages/InfoTaller";
import VistaAlumnos from "./Pages/VistaAlumnos";
import Inicio from "./Pages/Inicio";
import Taller1 from "./Pages/Taller1";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/menu" element={<CoordAdminMenu />} />
                <Route path="/tablaAlumnosA" element={<TablaAlumnosAdmin />} />
                <Route path="/tablaAlumnosTaller1" element={<TablaAlumnoAdminTaller taller={1} />} />
                <Route path="/tablaAlumnosTaller2" element={<TablaAlumnoAdminTaller taller={2} />} />
                <Route path="/tablaAlumnosTaller3" element={<TablaAlumnoAdminTaller taller={3} />} />
                <Route path="/tablaAlumnosTaller4" element={<TablaAlumnoAdminTaller taller={4} />} />
                <Route path="/tablaAlumnosTaller5" element={<TablaAlumnoAdminTaller taller={5} />} />
                <Route path="/tablaAlumnosC" element={<TablaAlumnosCoord />} />
                <Route path="/InfoTaller" element={<InfoTaller />} />
                <Route path="/alumno" element={<VistaAlumnos />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/taller1" element={<Taller1 />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
