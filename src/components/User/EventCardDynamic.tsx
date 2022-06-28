import "../../static/EventList.css";
import { Link } from "react-router-dom";
import EventDetail from "./EventDetail";

const EventCardDynamic = (props:any) => {
  return (
    <div className="box">
      <div className="box-img">
        <Link to={"/events/1"}>
          <img
            src={props.event.imagemURL}
            alt=""
          />
        </Link> 
      </div>
      <Link to={"/events/" + props.event.id}>
        <h3>{props.event.nome}</h3>
      </Link>
      <span>{props.event.dataInicio}</span>
    </div>
  );
};

export default EventCardDynamic;
