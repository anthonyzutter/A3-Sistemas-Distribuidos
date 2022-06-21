// import "../../static/EventList.css";
import "../../static/EventDetail.css";
import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <div className="grid align__item">
      <div className="card">
      <div className="box">
          <div className="box-img">
            <img
              src="https://static1.purepeople.com.br/articles/2/35/01/42/@/3999948-festa-de-18-anos-de-mel-maia-foi-na-gale-950x0-1.jpg"
              alt=""
            />
            <h3>Festa Mel Maia 18 anos</h3>
          </div>
          
          <span>Data: 04/Maio/2022</span>   
          <br />
          <span>Descrição: Festa dedicada para o publico infantil.</span>
            <input type="submit" value="Confirmar presença"></input>

        </div>
      </div>
    </div>
  );
};

export default EventCard;
