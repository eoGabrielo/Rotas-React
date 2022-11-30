import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function PaginaInicial() {
    return (
        <div>
            <h1>Qual sua escolha:</h1>
            <div className="links">
                <Link className="botoes" to="/frontEnd">Front-end</Link>
                <br></br><br></br>
                <Link className="botoes" to="/backEnd">Back-end</Link>
            </div>
        </div>
    );
}

export default PaginaInicial;