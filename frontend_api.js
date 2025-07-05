import axios from "axios";
const API = "http://localhost:3001";

export const getPlaythroughs = () => axios.get(`${API}/playthroughs`);
export const getPlaythrough = (id) => axios.get(`${API}/playthrough/${id}`);
export const createPlaythrough = (name) => axios.post(`${API}/playthrough`, { name });
export const addGame = (id, categories, scores) =>
  axios.post(`${API}/playthrough/${id}/game`, { categories, scores });
