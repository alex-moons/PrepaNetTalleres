import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../Pages/Inicio";

const NavPage = () => {
    return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/inicio" element={<Inicio />} />
                </Routes>
            </section>
        </React.Fragment>
    );
};

export default NavPage;
