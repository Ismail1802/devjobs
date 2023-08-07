import data from "../../data/data.json";
import { useParams } from "react-router";
import styles from "./devdetails.module.scss";
import { Button } from "../../components";
import { motion } from "framer-motion";
import { pageVariants } from "../../variants";
const DevDetailsPage = () => {
  const { devId } = useParams();
  const details = data.find((item) => item.id === Number(devId))!;

  return (
    <>
      <motion.main
        initial="initial"
        animate="in"
        variants={pageVariants}
        className={styles.main}
        transition={{ duration: 0.7 }}
      >
        <section className={styles.details}>
          <article className={styles.details__header}>
            <div className={styles.details__company}>
              <picture style={{ backgroundColor: details.logoBackground }}>
                <img src={details.logo} alt="logo" />
              </picture>
              <div>
                <p className={styles.details__name}>{details.company}</p>
                <p className={styles.details__website}>{details.website}</p>
              </div>
            </div>
            <div className={styles["details__apply-btn"]}>
              <Button text="Company Site" contStyle="button__site" />
            </div>
          </article>
          <article className={styles.details__info}>
            <div className={styles.details__apply}>
              <div>
                <div>
                  <p>
                    {details.postedAt} . {details.contract}
                  </p>
                </div>
                <div>
                  <p className={styles.details__position}>{details.position}</p>
                  <p className={styles.details__location}>{details.location}</p>
                </div>
              </div>
              <div>
                <Button text="Apply Now" contStyle="button__search" />
              </div>
            </div>
            <p className={styles.details__desc}>{details.description}</p>
            <div className={styles["details__requir-cont"]}>
              <p className={styles["details__requir-title"]}>Requirements</p>
              <p className={styles["details__requir-content"]}>
                {details.requirements.content}
              </p>
              <ul className={styles["details__requir-list"]}>
                {details.requirements.items.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div className={styles["details__do-cont"]}>
              <p className={styles["details__do-title"]}>What You Will Do</p>
              <p className={styles["details__do-content"]}>
                {details.role.content}
              </p>
              <ul className={styles["details__do-list"]}>
                {details.role.items.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </article>
        </section>
      </motion.main>
      <footer className={styles.details__footer}>
        <div className={styles["details__footer-cont"]}>
          <div className={styles["details__footer-text"]}>
            <p className={styles["details__footer-pos"]}>{details.position}</p>
            <p className={styles["details__footer-comp"]}>{details.company}</p>
          </div>
          <div className={styles["details__footer-btncont"]}>
            <Button text="Apply Now" contStyle="button__search" />
          </div>
        </div>
      </footer>
    </>
  );
};

export { DevDetailsPage };

export function loader({ params }: any) {
  const details = data.find((item) => item.id === Number(params.devId))!;
  if (!details) {
    throw new Error("wrong ");
  }
  return null;
}
