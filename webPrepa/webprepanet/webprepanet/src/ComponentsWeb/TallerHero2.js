import * as React from "react";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./HeroLayout";
import "./TallerHero.css";
import { Box } from "../../../node_modules/@material-ui/core/index";

const backgroundImage =
    "https://firebasestorage.googleapis.com/v0/b/prepanetcyberware.appspot.com/o/FotosTalleres%2Ftaller1.jpeg?alt=media&token=aa7e9a0a-492e-4e11-ac8f-f18cbf3a5c68";

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
                Taller 2: Mis habilidades y motivaciones
            </div>
            <div
                className="textHero"
            >
                Reconocimiento de habilidades, destrezas, fortalezas. FODA. GATO
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
