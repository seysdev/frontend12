import { api } from "./api";

export function saveContactService(payload) {
  return api.post("/contacto", payload);
}
