import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import { MantineProvider } from "@mantine/core";

const App = () => {
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);
  return (
    <MantineProvider>
      <div className={`container ${theme}`}>
        <NavBar theme={theme} setTheme={setTheme} />
        <Banner />
      </div>
    </MantineProvider>
  );
};

export default App;
