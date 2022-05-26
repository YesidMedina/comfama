import { useState, useEffect, createContext } from "react";
import axios from "axios";

const ContinentContext = createContext();

const ContinentProvider = ({ children }) => {
  const [category, setCategory] = useState("Europe");
  const [info, setInfo] = useState([]);
  const [informationCountry] = useState({});
  const [searchInfo, setSearchInfo] = useState("");

  useEffect(() => {
    const consultAPI = async () => {
      const url = `${import.meta.env.VITE_API}/region/${category}`;
      try {
        const { data } = await axios.get(url);
        setInfo(data);
      } catch (error) {
        console.error(error);
      }
    };
    consultAPI();
  }, [category]);

  const searchCountries = async () => {
    const url = `${import.meta.env.VITE_API}/name/${searchInfo}`;
    try {
      const { data } = await axios.get(url);
      setInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 3) searchCountries();

    setSearchInfo(e.target.value);
  };

  const getInformationCountry = (country) => {
    window.localStorage.setItem("country", JSON.stringify(country));
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <ContinentContext.Provider
      value={{
        category,
        handleChangeCategory,
        info,
        getInformationCountry,
        informationCountry,
        handleChangeSearch,
      }}
    >
      {children}
    </ContinentContext.Provider>
  );
};

export { ContinentProvider };

export default ContinentContext;
