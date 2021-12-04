import axios from "axios";

const API = axios.create({
  baseURL: "https://work-experiance.herokuapp.com/",
});

export const fetchAll = () => API.get(`experiances`);
export const createNew = (body) => API.post("experiances", body);
export const deleteOne = (id) => API.delete(`experiances/${id}`);
export const updateOne = (body) => API.put(`experiances/${body._id}`, body);
