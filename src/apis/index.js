import axios from "axios";

const baseURL = "http://localhost:8000";
const access_token = localStorage.getItem("token");

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const authApi = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: "Bearer " + access_token,
    "Content-Type": "application/json",
  },
});

export { api, authApi };
