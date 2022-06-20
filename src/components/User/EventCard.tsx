import "../../static/EventList.css";
import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <div className="box">
        <div className="box-img">
            <a href="#" title="Festa">
                <img src="https://static1.purepeople.com.br/articles/2/35/01/42/@/3999948-festa-de-18-anos-de-mel-maia-foi-na-gale-950x0-1.jpg" alt=""/>
            </a>
        </div>
        <a href="#" title="Festa">
            <h3>Festa Mel Maia 18 anos</h3>
        </a>
        <span>04</span>
        <span>Maio</span>
        <span>2022</span>
    </div>
  )
}

export default EventCard;
