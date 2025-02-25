import { useColorScheme as useDefaultColorScheme } from "react-native";
import { useState } from "react";

export function useThemeToggle() {
  const systemScheme = useDefaultColorScheme();
  const [theme, setTheme] = useState(systemScheme ?? "light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
