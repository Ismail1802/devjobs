import { Link } from "react-router-dom";
import { memo } from "react";
import styles from "./vacancy.module.scss";
interface VacancyProps {
  logo: string;
  id: number;
  postedAt: string;
  contract: string;
  position: string;
  company: string;
  location: string;
  logoBackground: string;
}

const Vacancy = memo((item: VacancyProps) => {
  return (
    <article className={styles.vacancy} key={item.id}>
      <picture style={{ backgroundColor: item.logoBackground }}>
        <img src={item.logo} alt="logo" />
      </picture>
      <div>
        <p className={styles.vacancy__time}>
          {item.postedAt} . {item.contract}
        </p>
        <Link to={`/devjobs/${item.id}`}>
          <p className={styles.vacancy__position}>{item.position}</p>
        </Link>
        <p className={styles.vacancy__scoot}>{item.company}</p>
      </div>
      <p className={styles.vacancy__location}>{item.location}</p>
    </article>
  );
});

export { Vacancy };
