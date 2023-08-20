import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

function useTheme() {
  const { theme, deviceTheme, toggleTheme, colors } = useContext(ThemeContext);
  return {
    theme,
    deviceTheme,
    toggleTheme,
    colors,
    isDark: theme === "dark",
  };
}

export default useTheme;
