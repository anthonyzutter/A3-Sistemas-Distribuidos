import "../../static/EventList.css";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";


const EventList = () => {
  return (
    <div className="events-container">
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>

    </div>
  )
}

export default EventList;
