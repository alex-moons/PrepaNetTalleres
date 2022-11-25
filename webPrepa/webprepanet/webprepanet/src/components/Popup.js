import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button, Modal } from 'react-bootstrap';
import "../Pages/InfoTaller.css";
import { UpdateGrupo } from "./Update"

export default ({ doc }) => (
    <Popup trigger={<Button className="taller-button"> Editar grupo: {doc.value.numero_grupo }</Button>} position="right center">
        <div><UpdateGrupo doc={doc}/></div>
    </Popup>
);