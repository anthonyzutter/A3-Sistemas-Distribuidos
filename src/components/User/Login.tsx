import "../../static/Login.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Helmet } from 'react-helmet'

import AuthService from "../../service/AuthService";


export default class Login extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e: any) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e: any) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e: any) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    AuthService.login(this.state.username, this.state.password).then(
      () => {
        this.props.history.push("/events");
        window.location.reload();
      },
    );

  }
  render() {
    return (
      <div className="grid align__item">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div className="register">
          <h2>
            <a>Entrar</a>
          </h2>

          <form action="" onSubmit={this.handleLogin} method="post" className="form">
            <div className="form__field">
              <label>Email</label>
              <input
                type="email"
                placeholder="email@gmail.com"
                value={this.state.username}
                onChange={this.onChangeUsername}
                required
              ></input>
            </div>

            <div className="form__field">
              <label>Senha</label>
              <input type="password" placeholder="***********" value={this.state.password}
                onChange={this.onChangePassword} required></input>
            </div>

            <div className="form__field">
              <input type="submit" value="Entrar"></input>
            </div>
          </form>

          <p>
            Não possui uma conta?
            <Link to={"/signup"} id="link">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
