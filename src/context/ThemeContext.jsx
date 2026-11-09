import { createContext, useContext, useLayoutEffect, useState, useMemo, useCallback } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved !== null) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // useLayoutEffect applies the .dark class before the browser paints, so the
  // theme switch is visible on the very next frame with no flash.
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    // Temporarily disable ALL CSS transitions during the theme switch so the
    // colors snap instantly instead of animating over 150-300ms. The override
    // is injected before the state update and removed after two animation
    // frames, by which point React has committed the DOM and the .dark class
    // is in place.
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-theme-transition", "");
    styleEl.textContent =
      "*, *::before, *::after { transition: none !important; }";
    document.head.appendChild(styleEl);

    setDarkMode((prev) => !prev);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        styleEl.remove();
      });
    });
  }, []);

  const value = useMemo(
    () => ({ darkMode, toggleDarkMode }),
    [darkMode, toggleDarkMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};