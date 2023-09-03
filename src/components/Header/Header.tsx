import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { Toggle } from "..";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header__logo-cont"]}>
        <Link to="/">
          <picture>
            <img src="./assets/desktop/logo.svg" alt="logo" />
          </picture>
        </Link>
      </div>
      <div className={styles.header__toggle}>
        <img src="./assets/desktop/icon-sun.svg" alt="icon-sun" />
        <Toggle />
        <img src="./assets/desktop/icon-moon.svg" alt="icon-moon" />
      </div>
    </header>
  );
};

export { Header };
