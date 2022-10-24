import "./App.css";
import react, { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#ffd180",
        light: "#ffffb1",
        contrastText: "#000000",
      },
      secondary: {
        light: "#ffffcf",
        main: "#fff59d",
        contrastText: "#000000",
      },
    },
  });
  const changeMode = (mode) => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{ margin: 0 }}
      >
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={changeMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
