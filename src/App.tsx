import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import AddEvent from "./components/Admin/AddEvent";
import EventList from "./components/User/EventList";

function App() {
  return (
    <div>
      <nav className="flex align-center">
        <Link to={"/"}>
          <p id="title">
            <span>Receba </span>Reservas
          </p>
        </Link>
        <ul>
          <li className="big-screens">
            <Link to={"/"}>Início</Link>
            <Link to={"/events"}>Eventos</Link>
            <a href="#">Sobre</a>
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
          <Route path="/events" element={<EventList />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
