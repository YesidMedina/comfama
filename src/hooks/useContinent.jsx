import { useContext } from "react";
import ContinentContext from "../context/ContinentProvider";

const useContinent = () => {
  return useContext(ContinentContext);
};

export default useContinent;
