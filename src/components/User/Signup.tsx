import "../../static/Login.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import EventDataService from "../../service/EventService";


const Signup = () => {
  const initialUserState = {
    id: null,
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (user: any) => {
    const { email, value } = user.target;
    setUser({ ...user, [email]: value });
  };

  const saveUser = () => {
    var data = {
      email: user.email,
      passworld: user.password,
    };

    EventDataService.createUser(data)
      .then((response: any) => {
        setUser({
          id: response.data.id,
          email: response.data.email,
          password: response.data.password,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };
  return (
    <div className="grid align__item">
      <Helmet>
        <title>Cadastro</title>
      </Helmet>
      <div className="register">
        <h2>
          <a>Cadastro</a>
        </h2>

        <form action="" method="post" className="form">

          <div className="form__field">
            <label>Email</label>
            <input type="email" value={user.email} onChange={handleInputChange} placeholder="email@gmail.com" required></input>
          </div>

          <div className="form__field">
            <label>Senha</label>
            <input type="password" value={user.password} onChange={handleInputChange} placeholder="***********" required></input>
          </div>

          {/* <div className="form__field">
            <label>Repetir senha</label>
            <input type="password" placeholder="***********" required ></input>
          </div> */}

          <div className="form__field">
            <input type="submit" value="Cadastrar" onClick={saveUser}></input>
          </div>
        </form>

        <p>
          Já possui uma conta?
          <Link to={"/login"} id="link">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
