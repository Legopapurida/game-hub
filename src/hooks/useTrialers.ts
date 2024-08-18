import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trialer } from "../entities/Trialers";

const useTrialers = (gameId: number) => {
  const apiClient = new APIClient<Trialer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trialers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrialers;
