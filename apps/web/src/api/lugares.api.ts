import { api } from "./axiosClient";

export const getLugares = async () => {
  const response = await api.get("/lugares");
  return response.data;
};