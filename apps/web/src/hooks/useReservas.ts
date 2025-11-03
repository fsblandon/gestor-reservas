import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getReservas, createReserva, deleteReserva } from "../api/reservas.api";

export function useReservas() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["reservas"],
    queryFn: getReservas,
    select: (data) => data || [],
  });

  const create = useMutation({
    mutationFn: createReserva,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["reservas"] }),
  });

  const remove = useMutation({
    mutationFn: deleteReserva,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["reservas"] }),
  });

  return {
    reservas: data,
    isLoading,
    error,
    createReserva: create.mutateAsync,
    deleteReserva: remove.mutateAsync,
  };
}
