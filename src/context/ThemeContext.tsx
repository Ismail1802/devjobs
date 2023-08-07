import { ReactNode, createContext, ChangeEvent } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface ThemeProps {
  theme: boolean;
  themeHandler: (e: ChangeEvent) => void;
}

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeProps);
export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useLocalStorage("theme1", false);

  const themeHandler = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}
