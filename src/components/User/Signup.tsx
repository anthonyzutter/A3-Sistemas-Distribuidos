import "../../static/Login.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="grid align__item">
      <div className="register">
        <h2>
          <a>Cadastro</a>
        </h2>

        <form action="" method="post" className="form">
          <div className="form__field">
            <label>Nome</label>
            <input type="text" placeholder="Nome completo" required></input>
          </div>

          <div className="form__field">
            <label>Email</label>
            <input type="email" placeholder="email@gmail.com" required></input>
          </div>

          <div className="form__field">
            <label>Senha</label>
            <input type="password" placeholder="***********" required></input>
          </div>

          <div className="form__field">
            <label>Repetir senha</label>
            <input type="password" placeholder="***********" required></input>
          </div>

          <div className="form__field">
            <input type="submit" value="Cadastrar"></input>
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
