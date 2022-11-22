import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../ComponentsWeb/Button";
import Typography from "@mui/material/Typography";
import "./Taller1.css";
import TallerHero from "../ComponentsWeb/TallerHero";
import MainPage from "../ComponentsWeb/MainPage";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "#f8f8f8",
  fontWeight: "medium"
};

const image = {
  height: 55,
  my: 4
};

function Taller1() {
  return (
    <div>
      <MainPage />
      <TallerHero />
    </div>
  );
}

export default Taller1;
