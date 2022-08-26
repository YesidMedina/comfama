import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const [category, setCategory] = useState("naruto");
  const [info, setInfo] = useState([]);
  const [informationChapter] = useState({});
  const [searchInfo, setSearchInfo] = useState("");

  useEffect(() => {
    const consultAPI = async () => {
      const url = `${import.meta.env.VITE_API}`;
      try {
        const { data } = await axios.get(url);
        setInfo(data);
      } catch (error) {
        console.error(error);
      }
    };
    consultAPI();
  }, [category]);

  const searchChapters = async () => {
    const url = `${import.meta.env.VITE_API}`;
    try {
      const { data } = await axios.get(url);
      setInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 3) searchChapters();

    setSearchInfo(e.target.value);
  };

  const getInformationChapter = (chapter) => {
    window.localStorage.setItem("chapter", JSON.stringify(chapter));
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
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
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export { AnimeProvider };

export default AnimeContext;
