import React, { Component } from "react";
import Button from "react-bootstrap";
import Card from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./ComponentsWeb/NavBar";
import AppRoutes from "./AppRoutes";
import Sidebar from "./ComponentsWeb/Sidebar";

function App() {
    return (
        <div>
            <AppRoutes>
                {/* <AppRoutes /> */}
                <NavBar />
                <Sidebar />
            </AppRoutes>
        </div>
    );
}

export default App;
