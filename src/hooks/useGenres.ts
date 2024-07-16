import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = (endpoint: string) => useData<Genre>(endpoint);
export default useGenres;
