import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path='/pages/login' element={<Login />} />
                <Route path='/pages/items' element={<Items />} />
                <Route path='/pages/dashboard' element={<Dashboard />} />
                <Route path='/pages/users' element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
