import { api } from "./axiosClient";

export const getEspacios = async () => {
  const response = await api.get("/espacios");
  return response.data;
};