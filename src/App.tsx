import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from "./components/Login"

function App() {
  return (
      <div>
      <nav className="flex align-center">
              <p><span>Receba </span>Reservas</p>
              <ul>
                  <li className="big-screens">
            <a href="#">Início</a>
            <a href="#">Eventos</a>
            <a href="#">Sobre</a>
            <button className="btn registerAcc">Cadastro</button>
            <Link to={"login"}>
              <button className="btn login">Entrar</button>
            </Link>
            </li>
            <li className="small-screens">
            <i className="fa-solid fa-bars"></i>
            </li>
        </ul>

      </nav>
      <div>
        <Routes>
          <Route path='login' element={<Login/>}/>
        </Routes>
      </div>
      </div>
   

    
  );
}

export default App;
