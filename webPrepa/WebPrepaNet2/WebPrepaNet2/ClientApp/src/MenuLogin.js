import React from "react";
import "./styles/login.css";
import { Button } from "reactstrap";

function Login() {
    return (
        <div className="back" style={{ backgroundImage: "url(/imagenes/fondoPrepaNet.png)"  }}>
            <div className="login-box">
                <h1>Login PrepaNet</h1>
                <div className="textbox">
                    <i className="fa fa-user" aria-hidden="true" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="textbox">
                    <i className="fa fa-lock" aria-hidden="true" />
                    <input type="password" placeholder="Password" />
                </div>
                <Button className="button">Iniciar</Button>
            </div>
        </div>
    );
}

export default Login;
