import "../../static/Login.css";
import "../../static/addEvent.css";

const AddEvent = () => {
  return (
    <div className="grid__event align__item">
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
                  <input type="text" required />
                </div>
              </td>
              <td>
                <div className="form__field">
                  <label>Capacidade</label>
                  <input
                    type="text"
                    placeholder="Número máximo de pessoas"
                    required
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
                  cols={30}
                  rows={10}
                ></textarea>
              </td>
              <td>
                <div className="form__field">
                  <label>Data e hora início</label>
                  <input
                    type="datetime-local"
                    placeholder="Número máximo de pessoas"
                    required
                  />
                </div>
                <div className="form__field">
                  <label>Data e hora fim</label>
                  <input
                    type="datetime-local"
                    placeholder="Número máximo de pessoas"
                    required
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form__field">
                  <label>Estado</label>
                  <input type="text" placeholder="UF" required />
                </div>
              </td>
              <td>
                <div className="form__field">
                  <label>Cidade</label>
                  <input type="text" required />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form__field">
                  <label>Rua</label>
                  <input type="text" placeholder="" required />
                </div>
              </td>
              <td>
                <div className="form__field">
                  <label>Número</label>
                  <input type="text" required />
                </div>
              </td>
            </tr>
          </table>

          <div className="form__field">
            <input type="submit" value="Cadastrar"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
