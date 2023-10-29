import React from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            src="/img/spanish-cuisine.jpg"
            width="300"
            height="300"
            border-radius="20"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/img/4.jpg" alt="" width="300" height="300" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/img/5.jpg" alt="" width="300" height="300" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/img/6.jpg" alt="" width="300" height="300" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
