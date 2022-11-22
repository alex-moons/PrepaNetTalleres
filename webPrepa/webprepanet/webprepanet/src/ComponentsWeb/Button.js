import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
    borderRadius: 10,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.h1.fontFamily,
    color: "#1d2b50",
    backgroundColor: "#f8f8f8",
    "&:hover": {
        backgroundColor: "#1d2b50",
        color: "#f8f8f8"
    },
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(14),
    boxShadow: "none",
    "&:active, &:focus": {
        boxShadow: "none"
    },
    ...(size === "small" && {
        padding: theme.spacing(1, 3),
        fontSize: theme.typography.pxToRem(13)
    }),
    ...(size === "large" && {
        padding: theme.spacing(2, 5),
        fontSize: theme.typography.pxToRem(16)
    })
}));

function Button(props) {
    return <ButtonRoot {...props} />;
}

export default Button;
