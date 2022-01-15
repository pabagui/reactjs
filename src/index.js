import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //si uso export default
//si uso export: {} es desctructuring  import {App} from './App'; //si uso export: {} es desctructuring
//si uso dos export  import {App , Titulo} from './App';
//para importar antes tengo que haberlo exportado
//para poder usar la función antes tengo que importarla
import reportWebVitals from './reportWebVitals';

//App() sería llamar la función en js plano, función que ya está definida en App.js y la estoy importando previa exportación, en jsx se llama así: <App />, entonces App() == <App />
ReactDOM.render(
  //<App />, acá estaría llamando la función en jsx dentro del render
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
