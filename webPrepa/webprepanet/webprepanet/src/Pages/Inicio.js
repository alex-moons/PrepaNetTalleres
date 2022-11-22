import React from "react";
import CardTaller from "../ComponentsWeb/CardsTaller";
import Sidebar from "../ComponentsWeb/Sidebar";
import { Stack } from '@mui/material';
import NavBar from "../ComponentsWeb/NavBar";
import MainPage from "../ComponentsWeb/MainPage";

const Inicio = () => {
  return (
    <div>
      <MainPage />
      <div className="titulo">Bienvenido Usuario</div>
          <Stack spacing={10} justifyContent="center" alignItems="center" direction="column">
        <CardTaller />
      </Stack>
    </div>
  );
};

export default Inicio;
