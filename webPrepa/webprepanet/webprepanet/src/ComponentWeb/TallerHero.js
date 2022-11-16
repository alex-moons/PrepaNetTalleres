import * as React from "react";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./HeroLayout";
import "./TallerHero.css";

const backgroundImage =
    "https://observatory.tec.mx/wp-content/uploads/2020/11/FiveWaystoEvaluateOnlineLearning.jpg";

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
            <Typography
                color="inherit"
                align="center"
                variant="h2"
                marked="center"
                className="title"
            >
                Taller 1: Transformacion
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
                className="text"
            >
                Transformar vida
            </Typography>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
        </ProductHeroLayout>
    );
}
