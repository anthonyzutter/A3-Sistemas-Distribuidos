import '../static/Login.css'


const Login = () => {
  return (
    <div className="grid align__item">

        <div className="register">
    
          <h2><a>Entrar</a></h2>
    
          <form action="" method="post" className="form">
    
            <div className="form__field">
              <input type="email" placeholder="email@gmail.com" required></input>
            </div>
    
            <div className="form__field">
              <input type="password" placeholder="***********" required></input>
            </div>
    
            <div className="form__field">
              <input type="submit" value="Entrar"></input>
            </div>
    
          </form>
    
          <p>Não possui uma conta? <a href="#">Criar conta</a></p>
    
        </div>
      </div>
  );
};

export default Login;