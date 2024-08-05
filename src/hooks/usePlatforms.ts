import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 30 * 24 * 60 * 60 * 1000, // 24h
    initialData: () => {
      return {
        count: platforms.length,
        results: platforms.map((platform) => {
          return {
            name: platform.name,
            id: platform.id,
            slug: platform.slug,
          };
        }),
      };
    },
  });
export default usePlatforms;
