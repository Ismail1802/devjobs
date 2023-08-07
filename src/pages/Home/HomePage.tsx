import styles from "./home.module.scss";
import data from "../../data/data.json";
import { useState, FormEvent, useRef, useEffect, useCallback } from "react";
import { Vacancy, Button, Form } from "../../components";

import { stringHandler } from "../../utils";
import { pageVariants } from "../../variants/index.js";
import { motion } from "framer-motion";
const HomePage = () => {
  const [limit, setLimit] = useState(9);
  const [jobs, setJobs] = useState(data);
  const [marked, setMarked] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const searchRefM = useRef<HTMLInputElement>(null);
  const locationRefM = useRef<HTMLInputElement>(null);

  const limitHandler = () => {
    setLimit((prev) => prev + 7);
  };

  useEffect(() => {
    submitHandler();
  }, [marked]);

  const submitHandler = useCallback(
    (e?: FormEvent) => {
      e?.preventDefault();
      if (searchRef.current?.value || locationRef.current?.value) {
        setJobs(
          data.filter((job) => {
            const currentMarked = marked ? "Full Time" : job.contract;
            return (
              stringHandler(job.position).includes(
                stringHandler(searchRef.current!.value)
              ) &&
              stringHandler(job.location).includes(
                stringHandler(locationRef.current!.value)
              ) &&
              job.contract === currentMarked
            );
          })
        );
      } else {
        setJobs(
          data.filter((job) => {
            const currentMarked = marked ? "Full Time" : job.contract;
            return (
              stringHandler(job.position).includes(
                stringHandler(searchRefM.current!.value)
              ) &&
              stringHandler(job.location).includes(
                stringHandler(locationRefM.current!.value)
              ) &&
              job.contract === currentMarked
            );
          })
        );
      }
    },
    [marked]
  );

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
        locationRef={locationRef}
        searchRef={searchRef}
        submitHandler={submitHandler}
        marked={marked}
        setMarked={setMarked}
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
