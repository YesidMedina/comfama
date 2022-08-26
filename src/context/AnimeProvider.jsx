import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const [category, setCategory] = useState("naruto");
  const [info, setInfo] = useState([]);
  const [informationChapter] = useState({});

  useEffect(() => {
    const consultAPI = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/anime/total`
        );
        setInfo(data);
      } catch (error) {
        console.error(error);
      }
    };
    consultAPI();
  }, [category]);

  const handleChangeSearch = async (search) => {
    try {
      if (search.length > 3) {
        const data = await axios.get(
          `http://localhost:8000/api/anime/filter?q=${search}`
        );
          setInfo(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getInformationChapter = (chapter) => {
    window.localStorage.setItem("chapter", JSON.stringify(chapter));
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const getMessageScore = async (score) => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/anime/score?score=${score}`
        );

        return data;
      } catch (error){
         console.error(error);
      }
    };

  return (
    <AnimeContext.Provider
      value={{
        category,
        handleChangeCategory,
        info,
        getInformationChapter,
        informationChapter,
        handleChangeSearch,
        getMessageScore,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export { AnimeProvider };

export default AnimeContext;
