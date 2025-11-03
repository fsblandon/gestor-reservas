import { getLugares } from "../api/lugares.api";
import { useQuery } from "@tanstack/react-query";

export function useLugares() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["lugares"],
    queryFn: getLugares,
  });

  return {
    lugares: data || [],
    isLoading,
    error,
  }
}   