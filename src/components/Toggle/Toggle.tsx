import styles from "./toggleSwitch.module.scss";
import { ChangeEvent, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const Toggle = () => {
  const { theme, themeHandler } = useContext(ThemeContext);

  function handleTheme(e: ChangeEvent) {
    themeHandler(e);
  }

  return (
    <label className={styles["toggle-switch"]}>
      <input checked={theme} onChange={(e) => handleTheme(e)} type="checkbox" />
      <span className={styles.switch} />
    </label>
  );
};

export { Toggle };
