import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
                navigate("/");
    }, []);

    sessionStorage.clear();
};