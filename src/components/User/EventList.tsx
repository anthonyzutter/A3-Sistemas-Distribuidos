import "../../static/EventList.css";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { Helmet } from "react-helmet";

const EventList = () => {
  return (
    <div className="events-container">
      <Helmet>
        <title>Eventos</title>
      </Helmet>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default EventList;
