import * as React from "react";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./HeroLayout";
import "./TallerHero.css";
import { Box } from "../../../node_modules/@material-ui/core/index";

const backgroundImage =
    "https://firebasestorage.googleapis.com/v0/b/prepanetcyberware.appspot.com/o/FotosTalleres%2Ftaller0.jpg?alt=media&token=ec559a50-0c99-497b-9f68-b5bf20bb08bd";

export default function ProductHero() {
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
                Taller 1: Liderazgo Positivo y Transformacion Personal 
            </div>
            <div
                className="textHero"
            >
                Transformar su vida y aumentar tu riqueza y capital psicologico, con el fin de tener mayor exito estudiantil, lograr una mayor influencia en su contexto y cambiar el entorno. 
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
