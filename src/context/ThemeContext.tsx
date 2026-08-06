import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const saved = window.localStorage.getItem("sohaybd-theme") as Theme | null;
    return saved ?? "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("sohaybd-theme", theme);
  }, [theme]);

  const toggleTheme = (event?: React.MouseEvent) => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // Get click position from the actual button element
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (event) {
      // Use the button's center position (more accurate than clientX/Y)
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    // Set CSS variables for animation origin point
    document.documentElement.style.setProperty("--click-x", `${x}px`);
    document.documentElement.style.setProperty("--click-y", `${y}px`);

    // Set direction: "expand" for dark, "shrink" for light
    document.documentElement.style.setProperty(
      "--theme-transition-direction",
      newTheme === "dark" ? "expand" : "shrink",
    );

    // Check if View Transitions API is supported

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Trigger the smooth transition

    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
