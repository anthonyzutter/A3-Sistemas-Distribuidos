import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Helmet } from 'react-helmet'


import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import AddEvent from "./components/AddEvent";
import EventList from "./components/User/EventList";
import EventDetail from "./components/User/EventDetail";

function App() {
  return (
    <div>
      <Helmet>
          <title>Receba Reservas</title>
        </Helmet>
      <nav className="flex align-center">
        <Link to={"/events"}>
          <p id="title">
            <span>Receba </span>Reservas
          </p>
        </Link>
        <ul>
          <li className="big-screens">
            <Link to={"/events"}>Início</Link>
            <Link to={"/events"}>Eventos</Link>
            <a href="#">Sobre</a>
            <Link to={"/addEvent"}>Novo Evento</Link>
            <Link to={"/signup"}>
              <button className="btn registerAcc">Cadastro</button>
            </Link>
            <Link to={"/login"}>
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/events" element={<EventList />}/>
          <Route path="/events/:id" element={<EventDetail/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
