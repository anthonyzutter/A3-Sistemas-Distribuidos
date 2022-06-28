import React, { useState } from "react";
import EventDataService from "../service/EventService";
import { Helmet } from "react-helmet";

import EventData from "../event.type";
import "../static/addEvent.css";

const AddEvent = () => {
  const initialEventState = {
    id: null,
    nome: "",
    descricao: "",
    capacidade: "",
    dataInicio: "",
    datafim: "",
    estado: "",
    cidade: "",
    rua: "",
    numero: "",
    imagemURL: "",
  };

  const [event, setEvent] = useState(initialEventState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: any) => {
    const { nome, value } = event.target;
    setEvent({ ...event, [nome]: value });
  };

  const saveEvent = () => {
    var data = {
      nome: event.nome,
      descricao: event.descricao,
      capacidade: event.capacidade,
      dataInicio: event.dataInicio,
      datafim: event.datafim,
      estado: event.estado,
      cidade: event.cidade,
      rua: event.rua,
      numero: event.numero,
      imagemURL: event.imagemURL,
    };

    EventDataService.createEvent(data)
      .then((response) => {
        setEvent({
          id: response.data.id,
          nome: response.data.nome,
          descricao: response.data.descricao,
          capacidade: response.data.capacidade,
          dataInicio: response.data.dataInicio,
          datafim: response.data.datafim,
          estado: response.data.estado,
          cidade: response.data.cidade,
          rua: response.data.rua,
          numero: response.data.numero,
          imagemURL: response.data.imagemURL,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newEvent = () => {
    setEvent(initialEventState);
    setSubmitted(false);
  };

  return (
    <div className="grid__event align__item">
      <Helmet>
        <title>Cadastro</title>
      </Helmet>
      <div className="register">
        <h2>
          <a>Cadastrar Evento</a>
        </h2>

        <form action="" method="post" className="form">
          <table>
            <tr>
              <td>
                <div className="form__field">
                  <label>Nome</label>
                  <input
                    type="text"
                    value={event.nome}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </td>
              <td>
                <div className="form__field">
                  <label>Capacidade</label>
                  <input
                    type="text"
                    placeholder="Número máximo de pessoas"
                    value={event.capacidade}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label>Descrição</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  value={event.descricao}
                  cols={30}
                  rows={10}
                  onChange={handleInputChange}
                ></textarea>
              </td>
              <td>
                <div className="form__field">
                  <label>Data e hora início</label>
                  <input
                    type="datetime-local"
                    placeholder="Número máximo de pessoas"
                    value={event.dataInicio}
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form__field">
                  <label>Data e hora fim</label>
                  <input
                    type="datetime-local"
                    placeholder="Número máximo de pessoas"
                    value={event.datafim}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form__field">
                  <label>Estado</label>
                  <input
                    type="text"
                    placeholder="UF"
                    value={event.estado}
                    required
                    maxLength={2}
                    onChange={handleInputChange}
                  />
                </div>
              </td>
              <td>
                <div className="form__field">
                  <label>Cidade</label>
                  <input
                    type="text"
                    value={event.cidade}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form__field">
                  <label>Rua</label>
                  <input
                    type="text"
                    placeholder=""
                    value={event.rua}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </td>
              <td>
                <div className="form__field">
                  <label>Número</label>
                  <input
                    type="text"
                    value={event.numero}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </td>
            </tr>
          </table>
          <div className="form__field">
            <label>Imagem do Evento em URL</label>
            <input
              type="text"
              value={event.imagemURL}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form__field">
            <input type="submit" value="Cadastrar" onClick={saveEvent} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
