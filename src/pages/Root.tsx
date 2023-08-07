import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Header } from "../components";

const Root = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    (document.querySelector("body") as HTMLBodyElement).className = theme
      ? "dark-theme"
      : "light-theme";
  }, [theme]);
  return (
    <>
      <div className="bg" />
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
