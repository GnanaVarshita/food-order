import React from "react";
import styles from "../styles/Pizzalist.module.css";
import PizzaCard from "./PizzaCard";
const Pizzalist = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>The best pizza</div>
        <p className={styles.desc}>
          Pizza done with wood fire , perfect sauce and toppings of ur choice
        </p>
        <div className={styles.wrapper}>
          <PizzaCard name="pizza1" price="$19" />
          <PizzaCard name="pizza1" price="$19" />
          <PizzaCard name="pizza1" price="$19" />
          <PizzaCard name="pizza1" price="$19" />
          <PizzaCard name="pizza1" price="$19" />
        </div>
      </div>
    </div>
  );
};

export default Pizzalist;
