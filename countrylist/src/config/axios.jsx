import axios from "axios";

export const userInstance = axios.create({
  baseURL: `http://localhost:8080/userapi/`,
  withCredentials: true,
});