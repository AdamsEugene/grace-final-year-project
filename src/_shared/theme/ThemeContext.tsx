import React, { PropsWithChildren, useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import K from "../constants";

import { ThemeColors } from "./@types";
import { darkTheme, lightTheme } from "./appTheme";

const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

export interface IThemes {
  theme: string;
  deviceTheme: boolean;
  toggleTheme: (
    v: "light" | "dark" | "device",
    deviceTheme?: boolean,
    removeFromStorage?: boolean
  ) => void;
  colors: ThemeColors;
}
export const ThemeContext = React.createContext<IThemes>({
  theme: "light",
  deviceTheme: true,
  toggleTheme: () => null,
  colors: lightTheme,
});

function getTheme(newTheme: string) {
  return newTheme === "device"
    ? prefersDarkTheme.matches
      ? "dark"
      : "light"
    : newTheme;
}

export const AppThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [theme, setTheme] = React.useState(() => {
    const currentTheme = localStorage.getItem(K.STORAGE_KEYS.THEME_KEY);
    return currentTheme
      ? currentTheme
      : prefersDarkTheme.matches
      ? "dark"
      : "light";
  });
  const [isDeviceTheme, setIsDeviceTheme] = React.useState<boolean>(() => {
    const isUsingDeviceTheme = localStorage.getItem(
      K.STORAGE_KEYS.IS_DEVICE_THEME
    );
    return isUsingDeviceTheme ? Boolean(JSON.parse(isUsingDeviceTheme)) : true;
  });
  const colors = React.useMemo(
    () => (theme === "light" ? lightTheme : darkTheme),
    [theme]
  );

  const toggleTheme = useCallback(
    (newTheme: string, deviceTheme?: boolean, removeFromStorage?: boolean) => {
      const selectedTheme = getTheme(newTheme);
      setIsDeviceTheme(!!deviceTheme);
      setTheme(selectedTheme);
      !removeFromStorage &&
        localStorage.setItem(K.STORAGE_KEYS.THEME_KEY, selectedTheme);
      localStorage.setItem(
        K.STORAGE_KEYS.IS_DEVICE_THEME,
        JSON.stringify(!!deviceTheme)
      );
    },
    []
  );

  useEffect(() => {
    function handler(event: MediaQueryListEvent) {
      toggleTheme(event.matches ? "dark" : "light", true, true);
    }
    prefersDarkTheme.addEventListener("change", handler);
    return () => prefersDarkTheme.removeEventListener("change", handler);
  }, [toggleTheme]);

  return (
    <ThemeProvider theme={colors}>
      <ThemeContext.Provider
        value={{ theme, toggleTheme, deviceTheme: isDeviceTheme, colors }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
