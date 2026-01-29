import { useOutletContext, NavLink } from "react-router-dom";
import styles from "./styles/Shop.module.css";
import { useState } from "react";
export function Shop() {
  const [orders, setOrders] = useOutletContext();
  const grandTotal = orders.reduce((sum, order) => {
    const size = Object.keys(order.size)[0];
    const sizePrice = order.size[size];
    const addonsPrice = order.selectedAddons.reduce(
      (addonSum, addon) => addonSum + addon.price,
      0,
    );
    return sum + (sizePrice + addonsPrice) * order.numOfOrder;
  }, 0);

  return (
    <div className={styles["cart-container"]}>
      <div className={styles["cart-container-wrapper"]}>
        <h2>Your Cart</h2>
        <div className={styles["cart-order-wrapper"]}>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <RenderOrders
                orders={orders}
                setOrders={setOrders}
                order={order}
                id={`${order.id}-${index}`}
              />
            ))
          ) : (
            <div className={styles["no-orders"]}>
              <NavLink to="../products/Milk Tea">
                Browse our menu and start adding items to your order ➜{" "}
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className={styles["order-summary"]}>
        <div className={styles["summary-header"]}>
          <h2>Order Summary</h2>
          <p>{orders.length} Items</p>
        </div>

        <div className={styles["summary-details"]}>
          <h3>{`Total: ₱${grandTotal}`}</h3>
        </div>
      </div>
    </div>
  );
}

function RenderOrders({ orders, setOrders, order }) {
  const totalPrice = GetDrinksPrice(order);
  const size = Object.keys(order.size)[0];

  return (
    <div className={styles["order"]}>
      <div className={styles["order-quantity"]}>
        <button
          className={styles["remove"]}
          onClick={() =>
            setOrders(orders.filter((drink) => order.id !== drink.id))
          }
        >
          X
        </button>
        <div>
          <button
            className={styles["decrease"]}
            onClick={() =>
              setOrders((prevOrder) =>
                prevOrder.map((item) =>
                  item.id === order.id
                    ? { ...item, numOfOrder: Math.max(item.numOfOrder - 1, 1) }
                    : item,
                ),
              )
            }
          >
            -
          </button>
          <div className={styles["quantity"]}>{order.numOfOrder}</div>
          <button
            className={styles["increase"]}
            onClick={() =>
              setOrders((prevOrder) =>
                prevOrder.map((item) =>
                  item.id === order.id
                    ? { ...item, numOfOrder: item.numOfOrder + 1 }
                    : item,
                ),
              )
            }
          >
            +
          </button>
        </div>
      </div>

      <div className={styles["order-details-container"]}>
        <div className={styles["order-details"]}>
          <h3>
            {order.name} - {order.category}
          </h3>
          <p>
            {size} - ₱{totalPrice}
          </p>
        </div>

        <div className={styles["order-addons"]}>
          {order.selectedAddons.map((addon) => (
            <div className={styles["addons"]}>{addon.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GetDrinksPrice(order) {
  let total = 0;
  const size = Object.keys(order.size)[0];

  total += order.size[size];

  for (const addon of order.selectedAddons) {
    total += addon.price;
  }
  return total * order.numOfOrder;
}
