import { NavLink } from "react-router-dom";
import styles from "./styles/Home.module.css";
import sakuraGIF from "../assets/sakura.gif";
import milkSplash from "../assets/milk-splash.png";
import milkTea from "../assets/milktea.png";

import leaf1 from "../assets/leaf1.png";
import leaf2 from "../assets/leaf2.png";
import leaf3 from "../assets/leaf3.png";
import pearl from "../assets/pearl.png";
import strawberrySlice from "../assets/strawberryslice.png";
import strawberry from "../assets/strawberry.png";

export function Home() {
  return (
    <>
      <div className={styles["hero-section"]}>
        <div className={styles["hero-section-left"]}>
          <img src={milkSplash} className={styles["milk-splash"]} />
          <img src={milkTea} className={styles["milk-tea"]} />

          <img src={leaf1} className={styles["leaf1"]} />
          <img src={leaf2} className={styles["leaf2"]} />
          <img src={pearl} className={styles["pearl"]} />
          <img src={pearl} className={styles["pearl2"]} />
          <img src={pearl} className={styles["pearl3"]} />
          <img src={strawberrySlice} className={styles["strawberry-slice"]} />
          <img src={strawberry} className={styles["strawberry"]} />
          {/* <img src={splash} className={styles["splash"]} /> */}
        </div>

        <div className={styles["hero-section-right"]}>
          <div className={styles["hero-section-right-wrapper"]}>
            {/* <img src={sakuraGIF} className={styles["sakura-one"]}></img>
            <img src={sakuraGIF} className={styles["sakura-two"]}></img> */}

            <p>A taste of spring in every drop</p>
            <NavLink to="products/Milk Tea">View Products</NavLink>
          </div>
        </div>
        <h2 className={styles["captions"]}>Bubble Tea</h2>
      </div>

      <div className={styles["popular-drinks"]}>
        <h3>Signature Drinks</h3>
        <div className={styles["products-grid"]}></div>
        <NavLink to="products/Milk Tea">View More</NavLink>
      </div>
    </>
  );
}
