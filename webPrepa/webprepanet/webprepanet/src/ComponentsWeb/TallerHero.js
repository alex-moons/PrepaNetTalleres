import * as React from "react";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./HeroLayout";
import "./TallerHero.css";
import { useGetDataAlumno, useGetDataGrupoTaller, useGetDataInscripcion, useGetDataTaller } from "../hooks/useGetData";
import { AddValueInscripcion } from "../components/Add"

import { Box } from "../../../node_modules/@material-ui/core/index";

const backgroundImage =
    "https://firebasestorage.googleapis.com/v0/b/prepanetcyberware.appspot.com/o/FotosTalleres%2Ftaller0.jpg?alt=media&token=ec559a50-0c99-497b-9f68-b5bf20bb08bd";

export default function ProductHero({ alumno, taller, aprobado }) {

    const [grupos] = useGetDataGrupoTaller();


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
            {aprobado == false ?
                <>
                    {grupos.map((item, index) => {
                        return (
                            <div className="fechaHero">


                                {item.value.taller_idStr == taller.id &&
                                    <>
                                        < p > Fecha inscripcion grupo: {item.value.numero_grupo}</p>
                                        <p>Inicio : {formatDate(item.value.inscripcion_inicio.toDate())}</p>
                                        <p>Fin : {formatDate(item.value.inscripcion_fin.toDate())}</p>
                                        {/*Poner un if para habilitar o no el boton*/}
                                        <AddValueInscripcion grupo={item} taller={taller} alumno={alumno} />
                                    </>
                                }




                            </div>
                        );
                    })}
                </> :
                <p>Taller inscrito</p>}

        </ProductHeroLayout >
    );
}
