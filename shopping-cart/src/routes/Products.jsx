import { useState } from "react";
import { setMenuData } from "./data/MenuData";
import { NavLink, useLoaderData } from "react-router-dom";

import styles from "./styles/Products.module.css";

export function ProductsLoader({ params }) {
  const { category } = params;
  const finalCategory = decodeURIComponent(category);
  const { menu } = setMenuData();

  const categoryData = menu.find((item) => item.category === finalCategory);

  if (!categoryData) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { categoryData };
}

export function Products() {
  return (
    <>
      <div className={styles["products-list"]}>
        <GetData />
      </div>
    </>
  );
}

function GetData() {
  const { menu, addons } = setMenuData();
  const { categoryData } = useLoaderData();
  const drinks = categoryData.items;

  return (
    <div className={styles["drinks-container"]}>
      <div className={styles["drinks-category"]}>
        {menu.map((drinks, index) => (
          <RenderCategory drinks={drinks} key={index} />
        ))}
      </div>

      <div className={styles["drink-list-wrapper"]}>
        <h2>{categoryData.category}</h2>

        <div className={styles["drinks-list"]}>
          {drinks.map((drink) => (
            <RenderDrinks drink={drink} addons={addons} key={drink.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RenderCategory({ drinks }) {
  return (
    <>
      <h3 key={drinks.category}>
        <NavLink to={`/products/${drinks.category}`}>{drinks.category}</NavLink>
      </h3>
    </>
  );
}

function RenderDrinks({ drink, addons }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={styles["drinks-card"]}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <div className={styles["drinks-details"]}>
          <div className={styles["drinks-info"]}>
            <div className={styles["drinks-image"]}></div>
            <div className={styles["drinks-name"]}>
              <h4>{drink.name}</h4>
              {drink.bestSeller && (
                <div className={styles["best-seller"]}>
                  <p>Best Seller</p>
                </div>
              )}
            </div>
            <p>{drink.description}</p>
          </div>
          <div className={styles["drinks-price"]}>
            <h6>
              {drink.size.map(
                (size) => `${Object.keys(size)} : ₱${Object.values(size)} `,
              )}
            </h6>
          </div>
        </div>
      </div>

      {isModalOpen && <Modal drink={drink} addons={addons} />}
    </>
  );
}

function Modal({ drink, addons }) {
  const [numOfOrder, setNumOfOrder] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className={styles["modal-container"]}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className={styles["modal-photo"]}
          role="img"
          aria-label={`Photo of ${drink.name}`}
        ></div>

        <div className={styles["modal-details-wrapper"]}>
          <div className={styles["drink-details"]}>
            <h3 id="modal-title">{drink.name}</h3>
            <p>{drink.description}</p>
          </div>

          <div className={styles["drink-option"]}>
            <fieldset className={styles["size-selector-field"]}>
              <legend>
                <h4 id="size-label">* Size: </h4>
              </legend>

              <div
                className={styles["options-wrapper"]}
                role="radiogroup"
                aria-labelledby="size-label"
              >
                {drink.size.map((size) => {
                  const drinkSize = Object.keys(size)[0];
                  const drinkPrice = Object.values(size)[0];
                  const drinkId = `${drink.id}-${drinkSize}`;

                  return (
                    <div className={styles["option-size"]} key={drinkId}>
                      <input
                        id={drinkId}
                        type="radio"
                        name="drinksSize"
                        value={drinkSize}
                        onChange={() => setSelectedSize(size)}
                      />
                      <label htmlFor={drinkId}>{drinkSize}</label>
                      <h6>{`₱${drinkPrice}.00`}</h6>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <div className={styles["drink-add-ons"]}>
            <fieldset className={styles["add-ons-selector-field"]}>
              <legend>
                <h4 id="add-ons-label">Add-Ons: </h4>
              </legend>

              <div
                className={styles["options-wrapper"]}
                aria-labelledby="add-ons-label"
              >
                {addons.map((addon) => (
                  <div className={styles["option-size"]} key={addon.id}>
                    <input
                      id={addon.id}
                      type="checkbox"
                      name="addons"
                      value={addon.name}
                    />
                    <label htmlFor={addon.id}>{addon.name}</label>
                    <h6>{`₱${addon.price}.00`}</h6>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div className={styles["drink-request"]}>
            <h4>Special Request</h4>
            <textarea />
          </div>

          <div className={styles["add-order"]}>
            <div className={styles["num-of-order-wrapper"]}>
              <button
                className={styles.decrease}
                onClick={() =>
                  setNumOfOrder((prev) => (prev > 1 ? prev - 1 : 1))
                }
              >
                -
              </button>
              <div className={styles["num-of-order"]}>{numOfOrder}</div>
              <button
                className={styles.increase}
                onClick={() => setNumOfOrder((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button className={styles["add-cart"]} disabled={!selectedSize}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
