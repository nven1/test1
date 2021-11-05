import React, { useEffect, useState } from "react";
import { ITheme, themeDark, themeLight } from "../theme/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

type ThemeType = "light" | "dark";

const ThemeProvider: React.FC = props => {
  const [mode, setMode] = useState<ThemeType>("dark");

  useEffect(() => {
    const localTheme: ThemeType =
      (window.localStorage.getItem("theme") as ThemeType) ?? "dark";
    localTheme && setMode(localTheme);
  }, []);

  const toggleTheme = () => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "light");
      setMode("light");
    } else {
      window.localStorage.setItem("theme", "dark");
      setMode("dark");
    }
  };

  const themeMode: ITheme = mode === "light" ? themeLight : themeDark;

  return (
    <StyledThemeProvider theme={{ ...themeMode, mode, toggleTheme }}>
      {props.children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
