import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className={styles.conatiner}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image src="/img/11.jpg" height="32" width="32" alt="" />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}> Order Now!</div>
            <div className={styles.text}>678 467 7998</div>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listitem}>HomePage</li>
            <li className={styles.listitem}>Products</li>
            <li className={styles.listitem}>Menu</li>
            <Image src="/img/logo.jpg" width="100" height="70" />
            <li className={styles.listitem}>Events</li>
            <li className={styles.listitem}>Blog</li>
            <li className={styles.listitem}>Search</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" width="20" height="20" />
            <div className={styles.counter}>2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
