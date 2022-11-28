import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { CardsData } from "./CardsData";
import { useGetDataAlumno, useGetDataGrupoTaller, useGetDataInscripcion, useGetDataTaller } from "../hooks/useGetData";
import "./CardsTaller.css";

export default function ActionAreaCard({ doc }) {
    const navigate = useNavigate();
    let tabla = [];
    let fila = [];
    const [talleres] = useGetDataTaller();
    const [grupos] = useGetDataGrupoTaller();
    const [inscripciones] = useGetDataInscripcion();

    for (let i = 0; i < talleres.length; i++) {
        // para cada taller ver si el alumno lo tiene inscrito iterando cada grupo
        let registrado = false;
        for (let j = 0; j < grupos.length; j++) {

            // si el grupo tiene el taller de i y el alumno guardarlo
            if (grupos[j].value.taller_idStr == talleres[i].id  && registrado == false) {
                for (let k = 0; k < inscripciones.length; k++) {
                    if (inscripciones[k].value.grupo_idStr == grupos[j].id && inscripciones[k].value.alumno_idStr == doc.id) {
                        fila.push(talleres[i].value.nombre); // 0 = nombre
                        fila.push("/taller" + "1"); // 1 = path
                        fila.push(talleres[i].value.descripcion); // 2 = descripcion
                        fila.push("/img/backdrop.png"); // 3 = imagen
                        fila.push(inscripciones[k].value.estatus); // 4 = estatus
                        fila.push("img"); // 5 = component
                        fila.push("140"); // 6 = height

                        // 7 classnamestatus
                        if (fila[4] == "Cursando") {
                            fila.push("inscrito")
                        }
                        else {
                            fila.push("aprobado")
                        }
                        fila.push(talleres[i].value.id)
                        fila.push(talleres[i])

                        registrado = true;
                    }
                }

            }
        }
        if (registrado == false) {
            fila.push(talleres[i].value.nombre); // 0 = nombre
            fila.push("/taller" + "1"); // 1 = path
            fila.push(talleres[i].value.descripcion); // 2 = descripcion
            fila.push("/img/backdrop.png"); // 3 = imagen
            fila.push("No disponible"); // 4 = estatus
            fila.push("img"); // 5 = component
            fila.push("140"); // 6 = height

            // 7 classnamestatus

            fila.push("no_disp")
            fila.push(talleres[i].value.id)
            fila.push(talleres[i])
        }
        fila.length = 10
        let aux = [...fila]
        if (aux.length == 10) {
            tabla.push(aux)
        }
        fila.length = 0
    }
    tabla.sort(sortMatri);

    function sortMatri(a, b) {

        return (a[8] < b[8]) ? -1 : 1;
    }

    // ABFANVWAPAWVNAWKVLJ
    function dirigirTaller(index) {
        let aprobado = false
        if (tabla[index][4] == "Cursando" || tabla[index][4] == "Aprobado") {
            aprobado = true;
        }

        navigate('/taller1', {
            state: {
                alumno: doc,
                taller: tabla[index][9],
                aprobar: aprobado
            }
        });
    }

    return (
        <ul className="listaTarjetas">
            {tabla.map((item, index) => {
                return (
                    <Card key={index} className="tarjeta">
                        <CardActionArea onClick={() => { dirigirTaller(index) }}>
                            <CardMedia
                                component={item[5]}
                                height={item[6]}
                                image={item[3]}
                                alt={item[0]}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    className="titleCards"
                                >
                                    {item[0]}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    className="description"
                                >
                                    {item[2]}
                                </Typography>
                                <Typography
                                    variant="overline"
                                    component="span"
                                    className={item[7]}
                                >
                                    {item[4]}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                );
            })}
        </ul>
        
    );
}
