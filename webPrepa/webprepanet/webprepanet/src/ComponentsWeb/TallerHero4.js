import * as React from "react";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./HeroLayout";
import "./TallerHero.css";
import { Box } from "../../../node_modules/@material-ui/core/index";

const backgroundImage =
    "https://firebasestorage.googleapis.com/v0/b/prepanetcyberware.appspot.com/o/FotosTalleres%2Ftaller4.jpg?alt=media&token=753a5a57-acb8-47a3-94b5-936b74a55f86";

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
                Taller 4: Mis relaciones
            </div>
            <div
                className="textHero"
            >
                Desarrollo de empatia. (Competencias emocionales e interpersonales). Tipos de relaciones. Aspectos importantes en las relaciones. Limites personales. Mis relaciones interpersonales. Mapa de mis relaciones.
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
