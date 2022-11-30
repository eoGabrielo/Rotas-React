import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicial from "../PaginaInicial/PaginaInicial.js";
import PaginaFront from "../PaginaFront/PaginaFront.js"
import PaginaBack from "../PaginaBack/PaginaBack.js";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PaginaInicial/>}/>
                <Route path="/frontEnd" element={<PaginaFront/>}/>
                <Route path="/backEnd" element={<PaginaBack/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;