# Rotas React
Projeto desenvolvido com a plataforma da DevMedia, estou na parte de rotas em react, gosto de me testar para ver se aprendi de verdade, então me desafio a refazer o mesmo projeto que eles disponibilizam na plataforma, mas de forma diferente e tentando ao máximo não olhar nos slides ou anotações feitas.<br/>
Esse projeto é de rotas, aonde podemos direcionar o usuário a outras páginas ou mostrá-lo uma SPA. SPA vem de Single Page Application, aonde podemos atualizar as informações da página sem fazer o recarregamento dela.<br/>

# COMPONENTES DA ROTA

É preciso criar um componente Rotas para gerenciar as rotas e instalar biblioteca de ROTAS:<br/> 
npm install react-router-dom -> Instalar no terminal

Para criar as rotas usamos as seguintes tag's:

- BrowserRouter -> Armazena as rotas
- Routes -> Seleciona um elemento para exibir na tela baseado na url
- Route -> Componente que associa a rota ao componente
- Link -> Componente que permite navegar para outra página(componente)

- Precisamos chamar essas tags da biblioteca "react-router-dom"
- import {BrowserRouter, Router, Route} from "react-router-dom"
