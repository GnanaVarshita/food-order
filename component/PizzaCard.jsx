import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
const PizzaCard = (props) => {
  return (
    <div>
      <div className={styles.container}>
        {/* <Image src="/img/5.jpg" width="50" height="50" alt="" />*/}
        {props.name}
        {props.price}
      </div>
    </div>
  );
};

export default PizzaCard;
