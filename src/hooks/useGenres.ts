import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

const useGenres = (endpoint: string) => useData<Genre>(endpoint);
export default useGenres;
