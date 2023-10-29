import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src="/img/7.jpg" width="100" height="50" alt="" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.motto}>Order Now!!</h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>Restaurantes</h1>
            <p className={styles.text}>
              1654 10 Downing Street #304,
              <br /> Spain
              <br />
              781-603-8654
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>Working Hours</h1>
            <p className={styles.text}>10 AM - 1 AM </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
