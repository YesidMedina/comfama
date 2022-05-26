import React, { useState } from "react";
import { Paper, Switch } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import Next from "./Next";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ minHeight: "100vh" }}>
        <Header />
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Next" element={<Next />} />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
