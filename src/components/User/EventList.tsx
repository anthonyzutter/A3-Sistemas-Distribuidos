import React, { useState, useEffect } from "react";
import "../../static/EventList.css";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { Helmet } from "react-helmet";
import EventDataService from "../../service/EventService"

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
