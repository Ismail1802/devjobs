import { FormEvent, MouseEvent, useEffect, useState } from "react";
import styles from "./form.module.scss";
import { Button } from "..";
import React from "react";
import { useIsMobileResolution } from "./useIsMobileResolution";
interface FormProps {
  searchRefD: React.RefObject<HTMLInputElement>;
  locationRefD: React.RefObject<HTMLInputElement>;
  isFullTime: boolean;
  setIsFullTime: React.Dispatch<React.SetStateAction<boolean>>;
  locationRefM: React.RefObject<HTMLInputElement>;
  searchRefM: React.RefObject<HTMLInputElement>;
  desktopFormSubmit: (e?: FormEvent) => void;
  mobileFormSubmit: (e?: FormEvent) => void;
}

const Form = React.memo(
  ({
    searchRefD,
    desktopFormSubmit,
    locationRefD,
    isFullTime,
    setIsFullTime,
    searchRefM,
    locationRefM,
    mobileFormSubmit,
  }: FormProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const isMobile = useIsMobileResolution();

    useEffect(() => {
      if (modalOpen) {
        document.querySelector("body")!.style.overflow = "hidden";
      } else {
        document.querySelector("body")!.style.overflow = "auto";
      }
    }, [modalOpen]);

    function markedHandler() {
      setIsFullTime(!isFullTime);
    }

    function modalHandler() {
      setModalOpen(!modalOpen);
    }

    function propagationHandler(e: MouseEvent) {
      e.stopPropagation();
    }

    return (
      <>
        <form onSubmit={(e) => desktopFormSubmit(e)} className={styles.form}>
          <div className={styles.form__search}>
            <label htmlFor="searchD">
              <img src="./assets/desktop/icon-search.svg" alt="icon-search" />
            </label>
            <input
              ref={searchRefD}
              id="searchD"
              placeholder={
                isMobile
                  ? "Filter by title..."
                  : "Filter by title, companies, expertise"
              }
              type="text"
            />
          </div>
          <div className={styles.form__location}>
            <img
              src="./assets/desktop/icon-location.svg"
              alt="icon-location.svg"
            />
            <input
              id="locationD"
              ref={locationRefD}
              placeholder="Filter by location.."
              type="text"
            />
          </div>
          <div className={styles["form__btn-cont"]}>
            <div className={styles.form__full}>
              <div
                style={{
                  backgroundColor: isFullTime ? "var(--color-violet)" : "",
                }}
                onClick={markedHandler}
              >
                <img
                  style={{ opacity: isFullTime ? "1" : "0" }}
                  src="./assets/desktop/icon-check.svg"
                  alt="icon-check"
                />
              </div>
              <label className={styles["form__label-only"]}>
                Full Time Only
              </label>
              <label className={styles.form__label}>Full Time</label>
            </div>
            <Button typ="submit" contStyle="button__search" text="Search" />
          </div>
        </form>

        <form
          onSubmit={mobileFormSubmit}
          className={`${styles.form} ${styles.form__mobile}`}
        >
          <div className={styles.form__search}>
            <input
              ref={searchRefM}
              id="search"
              placeholder={
                isMobile
                  ? "Filter by title..."
                  : "Filter by title, companies, expertise"
              }
              type="text"
            />
          </div>
          <button
            type="button"
            onClick={modalHandler}
            className={styles.form__filter}
          >
            <img src="./assets/mobile/icon-filter.svg" alt="filter" />
          </button>
          <button type="submit" className={styles.form__si}>
            <img src="./assets/mobile/icon-search.svg" alt="" />
          </button>
          <div
            onClick={modalHandler}
            className={
              modalOpen
                ? styles["form__modal-bgactive"]
                : styles["form__modal-bg"]
            }
          >
            <div
              onClick={(e) => propagationHandler(e)}
              className={styles.form__modal}
            >
              <div className={styles.form__location}>
                <img
                  src="./assets/desktop/icon-location.svg"
                  alt="icon-location.svg"
                />
                <input
                  ref={locationRefM}
                  placeholder="Filter by location.."
                  type="text"
                />
              </div>
              <div className={styles["form__btn-cont"]}>
                <div className={styles.form__full}>
                  <div
                    className={styles["form__full-mark"]}
                    style={{
                      backgroundColor: isFullTime ? "var(--color-violet)" : "",
                    }}
                    onClick={markedHandler}
                  >
                    <img
                      style={{ opacity: isFullTime ? "1" : "0" }}
                      src="./assets/desktop/icon-check.svg"
                      alt="icon-check"
                    />
                  </div>
                  <label className={styles["form__label-only"]}>
                    Full Time Only
                  </label>
                  <label className={styles.form__label}>Full Time</label>
                </div>
                <div onClick={modalHandler}>
                  <Button
                    typ="submit"
                    text="Search"
                    contStyle="button__search"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
);
export { Form };
