import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Pages/Login";
import CoordAdminMenu from "./Pages/CoordAdminMenu";
import TablaAlumnosAdmin from "./Pages/TablaAlumnosAdmin";
import TablaAlumnosCoord from "./Pages/TablaAlumnosCoord";
import InfoTaller from "./Pages/InfoTaller";
import VistaAlumnos from "./Pages/VistaAlumnos";
import Inicio from "./Pages/Inicio";
import Taller1 from "./Pages/Taller1";
import Taller2 from "./Pages/Taller2";
import Taller3 from "./Pages/Taller3";
import Taller4 from "./Pages/Taller4";
import Taller5 from "./Pages/Taller5";
import Taller6 from "./Pages/Taller6";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/menu" element={<CoordAdminMenu />} />
                <Route path="/tablaAlumnosA" element={<TablaAlumnosAdmin />} />
                <Route path="/tablaAlumnosC" element={<TablaAlumnosCoord />} />
                <Route path="/InfoTaller" element={<InfoTaller />} />
                <Route path="/alumno" element={<VistaAlumnos />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/taller1" element={<Taller1 />} />
                <Route path="/taller2" element={<Taller2 />} />
                <Route path="/taller3" element={<Taller3 />} />
                <Route path="/taller4" element={<Taller4 />} />
                <Route path="/taller5" element={<Taller5 />} />
                <Route path="/taller6" element={<Taller6 />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
