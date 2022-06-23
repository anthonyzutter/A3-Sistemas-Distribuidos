import http from "../http-common";
import AuthHeader from './AuthHeader';
import EventData from "../event.type"

const getAll = () => {
  return http.get("/events");
};

const get = (id: number) => {
  return http.get(`/events/${id}`);
};

const createEvent = (data: any) => {
  return http.post("/events", data);
};

const updateEvent = (id: number, data: EventData) => {
  return http.put(`/events/${id}`, data);
};

const deleteEvent = (id: number) => {
  return http.delete(`/events/${id}`);
}

const EventService = {
  getAll,
  get,
  createEvent,
  updateEvent,
  deleteEvent
}

export default EventService;