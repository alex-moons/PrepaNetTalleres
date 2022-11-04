import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from './Login';
import CoordAdminMenu from './CoordAdminMenu';
import TablaAlumnosAdmin from './TablaAlumnosAdmin';
import TablaAlumnosCoord from './TablaAlumnosCoord';
import InfoTaller from './InfoTaller';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path='/menu' element={<CoordAdminMenu />} />
                <Route path='/tablaAlumnosA' element={<TablaAlumnosAdmin />} />
                <Route path='/tablaAlumnosC' element={<TablaAlumnosCoord />} />
                <Route path='/InfoTaller' element={<InfoTaller />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
