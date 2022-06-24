import React, { useState, useEffect } from "react";
import "../../static/EventList.css";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import EventDataService from "../../service/EventService";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    retrieveQuadras();
  }, []);

  const retrieveQuadras = () => {
    EventDataService.getAll()
      .then(response => {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="events-container">
      {events &&
            events.map(event => (
              <EventCard event={event}/>
            ))}
      
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
  )
}

export default EventList;
