import { useOutletContext, NavLink } from "react-router-dom";
import styles from "./styles/Shop.module.css";
import { useState } from "react";
export function Shop() {
  const [orders, setOrders] = useOutletContext();
  console.log(orders);

  return (
    <div className={styles["cart-container"]}>
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
  );
}

function RenderOrders({ orders, setOrders, order }) {
  const [newNumOfOrder, setNewNumOfOrder] = useState(order.numOfOrder);
  const totalPrice = GetDrinksPrice(order, newNumOfOrder);
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
              setNewNumOfOrder((prev) => (prev === 1 ? 1 : prev - 1))
            }
          >
            -
          </button>
          <div className={styles["quantity"]}>{newNumOfOrder}</div>
          <button
            className={styles["increase"]}
            onClick={() => setNewNumOfOrder((prev) => prev + 1)}
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

function GetTotalPrice() {}
function GetDrinksPrice(order, numOfOrder) {
  let total = 0;
  const size = Object.keys(order.size)[0];

  total += order.size[size];

  for (const addon of order.selectedAddons) {
    total += addon.price;
  }

  return total * numOfOrder;
}
