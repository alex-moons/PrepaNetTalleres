import React from "react";
import { useGetDataAlumno, useGetDataGrupoTaller, useGetDataInscripcion, useGetDataTaller } from "../hooks/useGetData";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col, Link, Dropdown } from 'react-bootstrap';
import { UpdateEstatus } from "./Update";
import { AddValueInscripcion } from "./Add";
import "../InfoTaller.css";

// Estos metodos enseñan datos
export const FireStoreDataAlumno = () => {

    // los documentos son del metodo useGetData
    const [documents] = useGetDataAlumno();


    return (
        <div>
            <span>Values</span>
            {/*se corre lo de adentro por cada elemento dentro de documents*/}
            {documents.map((documents) => (
                <div key={documents.id}> {/*key es importante para identificar cada iteracion*/}
                    <div>
                        Document: {documents.id} Value: {documents.value.nombre}
                    </div>
                </div>
            ))}
        </div>
    );
};

// construir la tabla de los alumnos de TableAlumnosAdmin.js
export const FireStoreTablaAlumnosInfo = () => {
    const [alumnos] = useGetDataAlumno();
    const [inscripciones] = useGetDataInscripcion();
    const [grupos] = useGetDataGrupoTaller();
    const [talleres] = useGetDataTaller();

    function InfoAlumno(props) {
        let alumnoId = props.myId;

        for (let i = 0; i < alumnos.length; i++) {
            if (alumnos[i].id == alumnoId) {
                return (
                    <>
                        <td>{alumnos[i].value.matricula}</td>
                        <td>{alumnos[i].value.nombre}</td>
                        <td>{alumnos[i].value.campus}</td>
                        <td>{alumnos[i].value.tetramestre}</td>
                        <td>{alumnos[i].value.periodo_de_ingreso}</td>
                    </>
                );
            }
        }

    }

    function InfoGrupo(props) {
        let grupoId = props.myId;

        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }

        function formatDate(date) {
            return [
                padTo2Digits(date.getDate()),
                padTo2Digits(date.getMonth() + 1),
                date.getFullYear(),
            ].join('/');
        }

        for (let i = 0; i < grupos.length; i++) {
            if (grupos[i].id == grupoId) {
                let fechaInicio = grupos[i].value.fecha_inicio.toDate()
                let fechaFin = grupos[i].value.fecha_fin.toDate()
                for (let j = 0; j < talleres.length; j++) {

                    if (talleres[j].id == grupos[i].value.taller_idStr) {
                        return (
                            <>
                                <td> {formatDate(fechaInicio)} - {formatDate(fechaFin)}</td>
                                <td>{talleres[j].value.id}</td>
                                <td>{grupos[i].value.numero_grupo}</td>
                            </>
                        );

                    }

                }
            }
        }

    }


    return (
        < >

            {inscripciones.map((inscripciones) => (
                <React.Fragment key={inscripciones.id}>
                    <tr>
                        <InfoAlumno myId={inscripciones.value.alumno_idStr} />
                        <InfoGrupo myId={inscripciones.value.grupo_idStr} />
                        <td>{inscripciones.value.taller_aprobado ? 'Verdadero' : 'Falso'}</td>
                        
                            <UpdateEstatus doc={inscripciones}  />
                            
                        
                    </tr>
                </React.Fragment>

            ))}

        </>

    );


};

// Construir la tabla de los talleres
export const FireStoreDataGrupos = () => {

    // los documentos son del metodo useGetData
    const [grupos] = useGetDataGrupoTaller();
    const [talleres] = useGetDataTaller();
    let idTaller = ''

    let cont = 0;

    function Fecha(props) {

        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }

        function formatDate(date) {
            return [
                padTo2Digits(date.getDate()),
                padTo2Digits(date.getMonth() + 1),
                date.getFullYear(),
            ].join('/');
        }

        let tallerId = props.myID;
        let tallerIdgrupo = props.myIDgrupo
        let ind = props.index


        if (tallerId == tallerIdgrupo) {
            cont = cont + 1;
            return (
                <>
                    <p><b>Grupo: {grupos[ind].value.numero_grupo}</b></p>
                    <p><b>Inicio de inscripciones:</b> {formatDate(grupos[ind].value.inscripcion_inicio.toDate())}</p>
                    <p><b>Fin de inscripciones:</b> {formatDate(grupos[ind].value.inscripcion_fin.toDate())}</p>
                    <p><b>Inicio del curso:</b> {formatDate(grupos[ind].value.fecha_inicio.toDate())}</p>
                    <p><b>Fin del curso:</b> {formatDate(grupos[ind].value.fecha_fin.toDate())}</p>

                </>
            );
        }



    }


    // HAY QUE COMPLETAR LA TABLA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    return (
        <>
            {talleres.map((talleres) => (
                <React.Fragment key={talleres.id}>
                    <Row className="taller-row">
                        <Col className="flex">
                            <h2 className="taller-titulo">
                                {talleres.value.nombre}
                            </h2>
                        </Col>

                        <Col>
                            <h2 className="taller-fecha">Fechas</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="taller-texto">
                            {talleres.value.descripcion}
                        </Col>
                        <Col className="taller-texto">
                            {grupos.map((grupos, index) => {
                                return (

                                    <Fecha myID={talleres.id} myIDgrupo={grupos.value.taller_idStr} index={index} />


                                );

                            })}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="center-taller">
                            <Button className="taller-button">Lista</Button>
                        </Col>
                        <Col className="center-taller">
                            <Button className="taller-button">Editar</Button>
                        </Col>
                    </Row>
                </React.Fragment>

            ))}
        </>
    );
};

