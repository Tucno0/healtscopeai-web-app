"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTheme } from "next-themes";

const DEFAULT_THEME = "default";

type ThemeContextType = {
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme?: string;
}) {
  const [activeTheme, setActiveTheme] = useState<string>(
    () => initialTheme || DEFAULT_THEME
  );
  const { theme: darkMode } = useTheme();

  useEffect(() => {
    // Remove all existing theme classes
    Array.from(document.body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => {
        document.body.classList.remove(className);
      });

    // Add the main theme class
    document.body.classList.add(`theme-${activeTheme}`);

    // Add scaled class if needed
    if (activeTheme.endsWith("-scaled")) {
      document.body.classList.add("theme-scaled");
    }

    // Handle dark mode integration
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else if (darkMode === "light") {
      document.body.classList.remove("dark");
    }
  }, [activeTheme, darkMode]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeConfig() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeConfig must be used within an ActiveThemeProvider"
    );
  }
  return context;
}
