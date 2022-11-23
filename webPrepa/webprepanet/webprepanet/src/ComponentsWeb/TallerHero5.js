import * as React from "react";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./HeroLayout";
import "./TallerHero.css";
import { Box } from "../../../node_modules/@material-ui/core/index";

const backgroundImage =
    "https://firebasestorage.googleapis.com/v0/b/prepanetcyberware.appspot.com/o/FotosTalleres%2Ftaller5.jpg?alt=media&token=fc8e78d8-60be-4155-9f7e-f49b4efe3273";

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
                Taller 5: Mis areas de oportunidad
            </div>
            <div
                className="textHero"
            >
                Metamomento. Expresion de emociones. Posiciones ante la comunicacion de emociones. La inteligencia emocional y la comunicacion asertiva. Regulacion de emociones. Desarrollo de resolucion de conflictos (El plano inteligente-emocional)
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
