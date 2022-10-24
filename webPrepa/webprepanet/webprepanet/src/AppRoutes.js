import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from './Login';
import CoordAdminMenu from './CoordAdminMenu';
import TablaAlumnosAdmin from './TablaAlumnosAdmin';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path='/menu' element={<CoordAdminMenu />} />
                <Route path='/tablaAlumnosA' element={<TablaAlumnosAdmin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
