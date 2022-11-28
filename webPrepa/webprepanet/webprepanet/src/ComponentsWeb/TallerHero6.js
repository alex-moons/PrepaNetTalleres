import * as React from "react";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./HeroLayout";
import "./TallerHero.css";
import { useGetDataAlumno, useGetDataGrupoTaller, useGetDataInscripcion, useGetDataTaller } from "../hooks/useGetData";

import { Box } from "../../../node_modules/@material-ui/core/index";

const backgroundImage =
    "https://firebasestorage.googleapis.com/v0/b/prepanetcyberware.appspot.com/o/FotosTalleres%2Ftaller6.png?alt=media&token=af42ec42-d42e-4e90-96f9-0d2c3d912e74";

export default function ProductHero({ alumno, taller }) {

    const [grupos] = useGetDataGrupoTaller();

    function inscribir() {
        if (let i = 0; i < grupos.length; i++) {
            if (grupos[i].value.taller_idStr == taller.id) {
                // si empata un grupo checar que la fecha sea valida e inscribirse si si
                //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            }
        }
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
                Taller 6: Mis metas
            </div>
            <div
                className="textHero"
            >
                Esferas/dimensiones de la persona. Equilibrio para lograr el bienestar. *PFP. Metodologia SMART. Desarrollo de plan de accion y toma de decisiones.
            </div>
            <div className="fechaHero">
                Fechas: 1 de agosto 2023 - 3 de noviembre 2023
            </div>
            <Button
                color="primary"
                size="large"
                variant="contained"
                component="a"
                href="/inicio"
                sx={{ mt: 8 }}
            >
                Inscribir
            </Button>
        </ProductHeroLayout>
    );
}
