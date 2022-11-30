import React from "react"; 
import BotaoVoltar from "../BotaoVoltar/BotaoVoltar"; 
import "./style.css";

function PaginaFront(){
    return(
        <div className="conteudo">
            <h1>FRONT-END</h1>
            <p>Podemos classificar como a parte visual de um site, aquilo que conseguimos interagir. Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</p>
            <BotaoVoltar/>
        </div>
    );
}

export default PaginaFront;