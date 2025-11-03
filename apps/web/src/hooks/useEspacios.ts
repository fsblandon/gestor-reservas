import { useQuery } from "@tanstack/react-query";
import { getEspacios } from "../api/espacios.api";

export function useEspacios() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["espacios"],
    queryFn: getEspacios,
  });

  return { espacios: data || [], isLoading, error };
}
