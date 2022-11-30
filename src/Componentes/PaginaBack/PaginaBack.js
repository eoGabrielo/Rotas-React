import React from "react";  
import BotaoVoltar from "../BotaoVoltar/BotaoVoltar";
import "./style.css"; 

function PaginaBack(){
    return(
        <div className="conteudo">
            <h1>BACK-END</h1>
            <p>Como o próprio nome sugere, vem da ideia daquilo que tem por trás de uma aplicação. Pode ficar meio abstrato num primeiro momento, mas pense que para conseguir usar o Facebook no dia a dia, os dados as informações do seu perfil, amigos e publicações precisam estar salvos em algum lugar e serem processados a partir dele, sendo este lugar um banco de dados.</p>
            <BotaoVoltar/>
        </div>
    );
}

export default PaginaBack;