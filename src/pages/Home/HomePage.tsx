import styles from "./home.module.scss";
import data from "../../data/data.json";
import { useState, FormEvent, useRef, useEffect } from "react";
import { Vacancy, Button, Form } from "../../components";
import { filterHelper } from "./utils.js";
import { pageVariants } from "../../variants/index.js";
import { motion } from "framer-motion";

const HomePage = () => {
  const [limit, setLimit] = useState(9);
  const [jobs, setJobs] = useState(data);
  const [isFullTime, setIsFullTime] = useState(false);
  const searchRefD = useRef<HTMLInputElement>(null);
  const locationRefD = useRef<HTMLInputElement>(null);
  const searchRefM = useRef<HTMLInputElement>(null);
  const locationRefM = useRef<HTMLInputElement>(null);

  const limitHandler = () => {
    setLimit((prev) => prev + 7);
  };

  useEffect(() => {
    desktopFormSubmit();
  }, [isFullTime]);

  const desktopFormSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    setJobs(
      data.filter((job) =>
        filterHelper(job, isFullTime, searchRefD, locationRefD)
      )
    );
  };

  const mobileFormSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    setJobs(
      data.filter((job) =>
        filterHelper(job, isFullTime, searchRefM, locationRefM)
      )
    );
  };

  return (
    <motion.main
      initial="initial"
      animate="in"
      variants={pageVariants}
      className={styles.main}
      transition={{ duration: 0.7 }}
    >
      <Form
        searchRefM={searchRefM}
        locationRefM={locationRefM}
        locationRefD={locationRefD}
        searchRefD={searchRefD}
        desktopFormSubmit={desktopFormSubmit}
        mobileFormSubmit={mobileFormSubmit}
        isFullTime={isFullTime}
        setIsFullTime={setIsFullTime}
      />
      <section className={styles.main__list}>
        {jobs.slice(0, limit).map((item) => {
          return <Vacancy key={item.id} {...item} />;
        })}
      </section>
      {limit < 16 && jobs.length > limit && (
        <div onClick={limitHandler}>
          <Button contStyle="button__load" text="Load More" />
        </div>
      )}
    </motion.main>
  );
};

export { HomePage };
