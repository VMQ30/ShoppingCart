import { useState } from "react";
import { setMenuData } from "./data/MenuData";
import { NavLink, useLoaderData } from "react-router-dom";

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
      <div className="products-list">
        <GetData />
      </div>
    </>
  );
}

function GetData() {
  const { menu, addons } = setMenuData();
  const { categoryData } = useLoaderData();
  const drinks = categoryData.items;

  console.log(categoryData);
  return (
    <>
      <div className="drinks-category">
        {menu.map((drinks, index) => (
          <RenderCategory drinks={drinks} key={index} />
        ))}
      </div>

      <div className="drinks-list">
        <h2>{categoryData.category}</h2>
        {drinks.map((drink) => (
          <RenderDrinks drink={drink} key={drink.id} />
        ))}
      </div>
    </>
  );
}

function RenderCategory({ drinks }) {
  return (
    <div className="drinks-category">
      <h3 key={drinks.category}>
        <NavLink to={`/products/${drinks.category}`}>{drinks.category}</NavLink>
      </h3>
    </div>
  );
}

function RenderDrinks({ drink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="drinks-card" onClick={() => setIsModalOpen(!isModalOpen)}>
        <div className="drinks-details">
          <div className="drinks-info">
            <div>
              <h4>{drink.name}</h4>
              {drink.bestSeller && (
                <div className="best-seller">Best Seller </div>
              )}
            </div>
            <p>{drink.description}</p>
          </div>
          <h6>
            {drink.size.map(
              (size) => `${Object.keys(size)} : ₱${Object.values(size)} `,
            )}
          </h6>
        </div>
        <div className="drinks-image"></div>
      </div>

      {isModalOpen && <Modal drink={drink} />}
    </>
  );
}

function Modal({ drink }) {
  const [numOfOrder, setNumOfOrder] = useState(1);
  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-photo"
        role="img"
        aria-label={`Photo of ${drink.name}`}
      ></div>

      <div className="drink-details">
        <h3 id="modal-title">{drink.name}</h3>
        <p>{drink.description}</p>
      </div>

      <div className="drink-option">
        <fieldset className="size-selector-field">
          <legend>
            <h4 id="size-label">Size: </h4>
          </legend>

          <div
            className="options-wrapper"
            role="radiogroup"
            aria-labelledby="size-label"
          >
            {drink.size.map((size) => {
              const drinkSize = Object.keys(size)[0];
              const drinkPrice = Object.values(size)[0];
              const drinkId = `${drink.id}-${drinkSize}`;

              return (
                <div className="option-size" key={drinkId}>
                  <input
                    id={drinkId}
                    type="radio"
                    name="drinksSize"
                    value={drinkSize}
                  />
                  <label htmlFor={drinkId}>{drinkSize}</label>
                  <h6>{`₱${drinkPrice}.00`}</h6>
                </div>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="drink-request">
        <h4>Special Request</h4>
        <textarea />
      </div>

      <div className="add-order">
        <div className="num-of-order-wrapper">
          <button
            className="decrease"
            onClick={() => setNumOfOrder((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            -
          </button>
          <div className="num-of-order">{numOfOrder}</div>
          <button
            className="increase"
            onClick={() => setNumOfOrder((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="add-cart">Add to Cart</button>
      </div>
    </div>
  );
}
