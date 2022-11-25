import * as React from "react";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./HeroLayout";
import "./TallerHero.css";
import { useGetDataAlumno, useGetDataGrupoTaller, useGetDataInscripcion, useGetDataTaller } from "../hooks/useGetData";

import { Box } from "../../../node_modules/@material-ui/core/index";

const backgroundImage =
    "https://firebasestorage.googleapis.com/v0/b/prepanetcyberware.appspot.com/o/FotosTalleres%2Ftaller0.jpg?alt=media&token=ec559a50-0c99-497b-9f68-b5bf20bb08bd";

export default function ProductHero({ alumno, taller }) {

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
            {grupos.map((item, index) => {
                return (
                    <div className="fechaHero">
                        {item.value.taller_idStr == taller.id &&
                            <p>Poner aqui la fecha del grupo {item.value.numer_grupo}</p>
                        }
                    </div>
                );
            })}
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
