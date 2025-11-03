import axios from "axios";

const API_URL = "http://localhost:3333/api/reservas";
const API_KEY = import.meta.env.VITE_API_KEY;

console.log("🔑 Usando API_KEY:", API_KEY);

export const getReservas = async () => {
  const response = await axios.get(API_URL, {
    headers: { "x-api-key": API_KEY },
  });

  if (Array.isArray(response.data)) {
    return response.data;
  }

  if (response.data?.data && Array.isArray(response.data.data)) {
    return response.data.data;
  }

  if (response.data?.reservas && Array.isArray(response.data.reservas)) {
    return response.data.reservas;
  }
  if (response.data?.items && Array.isArray(response.data?.items)) {
    return response.data?.items;
  }

  console.warn("⚠️ Formato inesperado de respuesta:", response.data);
  return [];
};

export const createReserva = async (data: any) => {
  const response = await axios.post(API_URL, data, {
    headers: { "x-api-key": API_KEY },
  });
  return response.data;
};

export const deleteReserva = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: { "x-api-key": API_KEY },
  });
  return response.data;
};