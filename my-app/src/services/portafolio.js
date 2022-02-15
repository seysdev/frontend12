import { api } from "./api";

export function getPortafolioServices() {
  return api.get("/portafolio");
}

export function getDetailPortafolioServices(id) {
  return api.get(`/portafolio/${id}`);
}

export function savePortafolioServices(payload) {
  return api.post("/portafolio", payload);
}

export function deletePortafolioServices(id) {
  return api.delete(`/portafolio/${id}`);
}

export function updatePortafolioServices(id, payload) {
  return api.put(`/portafolio/${id}`, payload);
}
