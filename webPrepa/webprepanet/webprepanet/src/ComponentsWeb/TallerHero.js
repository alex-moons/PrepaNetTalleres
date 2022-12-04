import * as React from "react";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./HeroLayout";
import { Stack } from "@mui/material";
import "./TallerHero.css";
import { useGetDataAlumno, useGetDataGrupoTaller, useGetDataInscripcion, useGetDataTaller } from "../hooks/useGetData";
import { AddValueInscripcion } from "../components/Add"

import { Box } from "../../../node_modules/@material-ui/core/index";

const backgroundImage =
    "https://firebasestorage.googleapis.com/v0/b/prepanetcyberware.appspot.com/o/FotosTalleres%2Ftaller0.jpg?alt=media&token=ec559a50-0c99-497b-9f68-b5bf20bb08bd";

export default function ProductHero({ alumno, taller, aprobado }) {

    const [grupos] = useGetDataGrupoTaller();
    //console.log(sessionStorage.getItem("usuario"));
    //console.log(sessionStorage.getItem("taller"));
    //console.log(taller == sessionStorage.getItem("taller"));
    //console.log(sessionStorage.getItem("aprobado"));
    //var taller2 = JSON.parse(taller1);
    var alumno1 = sessionStorage.getItem("alumno_doc");
    alumno = JSON.parse(alumno1);
    var alumno2 = JSON.parse(alumno1);
    //console.log(alumno.value.campus);
    //console.log(sessionStorage.getItem("alumno_doc"));
    //console.log(taller2.id);
    //console.log(taller.id);
    var aprobar = false;
    if (aprobado == "false") {
        aprobar = false;
    }
    else {
        aprobar = true;
    }
    console.log(aprobar);

    function inscribir() {
        for (let i = 0; i < grupos.length; i++) {
            if (grupos[i].value.taller_idStr == taller.id) {
                // si empata un grupo checar que la fecha sea valida e inscribirse si si
                var grupo = grupos[i]
                //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            }
        }
    }

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

    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: "#7fc7d9", // Average color of the background image.
                backgroundPosition: "center"
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: "none" }}
                src={backgroundImage}
                alt="increase priority"
            />
            <div
                className="titleHero"
            >
                Taller {taller.value.id}: {taller.value.nombre}
            </div>
            <div
                className="textHero"
            >
                {taller.value.descripcion}
            </div>
            {aprobar == false ?
                <>
                    <Stack direction="row" spacing={2}>
                        {grupos.map((item, index) => {
                            return (
                                <div className="fechaHero">

                                    {item.value.taller_idStr == taller.id &&
                                        <>

                                            < p > Fecha inscripcion grupo: {item.value.numero_grupo}</p>
                                            <p>Inicio : {formatDate(item.value.inscripcion_inicio.toDate())}</p>
                                            <p>Fin : {formatDate(item.value.inscripcion_fin.toDate())}</p>
                                            {/*Poner un if para habilitar o no el boton*/}
                                            <AddValueInscripcion grupo={item} taller={taller} alumno={alumno2} />

                                        </>
                                    }

                                </div>
                            );
                        })}
                    </Stack>
                </> :
                <p>Taller inscrito</p>}

        </ProductHeroLayout >
    );
}
