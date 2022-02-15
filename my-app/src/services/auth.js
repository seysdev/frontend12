import { api } from "./api";

export function getLoginServices() {
  return api.get("/usuarios");
}
