import { useState } from "react";
import { InputAdornment, TextField, FormControl } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

import useAnime from "../hooks/useAnime";

const Search = () => {
  const { handleChangeSearch } = useAnime();

  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    
    handleChangeSearch(event.target.value);
  };

  return (
    <FormControl>
      <TextField
        size="small"
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="start"
              style={{ display: showClearIcon }}
            >
              <ClearIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default Search;
