import { useContext } from "react";
import AnimeContext from "../context/AnimeProvider";

const useAnime = () => {
  return useContext(AnimeContext);
};

export default useAnime;
