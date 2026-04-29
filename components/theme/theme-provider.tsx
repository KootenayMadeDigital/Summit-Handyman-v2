"use client";

import * as React from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "summit-theme";
const DEFAULT_THEME: Theme = "dark";

const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
  toggle: () => {},
});

function readInitialTheme(): Theme {
  if (typeof document === "undefined") return DEFAULT_THEME;
  // Trust the inline script that ran in <head> — it already set data-theme.
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setThemeState(readInitialTheme());
    setMounted(true);
  }, []);

  const setTheme = React.useCallback((t: Theme) => {
    setThemeState(t);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", t);
    }
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {}
  }, []);

  const toggle = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const value = React.useMemo(() => ({ theme, setTheme, toggle }), [theme, setTheme, toggle]);

  return (
    <ThemeContext.Provider value={value}>
      {/* Hide flicker briefly while reading storage */}
      <div data-theme-mounted={mounted ? "true" : "false"}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
