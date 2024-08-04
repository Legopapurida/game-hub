import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      axios
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 30 * 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;
