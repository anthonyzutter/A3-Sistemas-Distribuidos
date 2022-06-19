import "../../static/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid align__item">
      <div className="register">
        <h2>
          <a>Entrar</a>
        </h2>

        <form action="" method="post" className="form">
          <div className="form__field">
            <label>Email</label>
            <input type="email" placeholder="email@gmail.com" required></input>
          </div>

          <div className="form__field">
            <label>Senha</label>
            <input type="password" placeholder="***********" required></input>
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
};

export default Login;
