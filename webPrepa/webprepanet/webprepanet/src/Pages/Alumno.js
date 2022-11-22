import React, { Component } from "react";
import {
  Table,
  Form,
  Button,
  Container,
  Row,
  Col,
  Link,
  Dropdown
} from "react-bootstrap";

const Alumno = (properties) => {
  return (
    <tr>
      <td>{properties.nombre}</td>
      <td>{properties.matricula}</td>
      <td>{properties.correo_institucional}</td>
      <td>{properties.campus}</td>
      <td>{properties.tetramestre}</td>
      <td>{properties.periodo_de_ingreso}</td>
      <td>{properties.talleres_aprobados}</td>
    </tr>
  );
};

export default Alumno;
