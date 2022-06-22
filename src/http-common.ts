import axios from "axios";

const URL = "http://localhost:3333"

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json"
  }
});