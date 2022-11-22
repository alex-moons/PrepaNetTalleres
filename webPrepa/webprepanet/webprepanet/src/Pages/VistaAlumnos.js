import React, { Children } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "../ComponentsWeb/Sidebar";

import "./VistaAlumnos.css";

function VistaAlumnos() {
  return (
    <div className="VistaAlumnos">
      <section>
        <div>
          <Sidebar />
        </div>
      </section>
    </div>
  );
}

export default VistaAlumnos;
