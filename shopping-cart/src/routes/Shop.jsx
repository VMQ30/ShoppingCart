import { useOutletContext } from "react-router-dom";
import styles from "./styles/Shop.module.css";

export function Shop() {
  const [orders, setOrders] = useOutletContext();
  console.log(orders);

  return (
    <div className={styles["cart-container"]}>
      <h2>Your Cart</h2>
      <div className={styles["cart-order-wrapper"]}>
        {orders.map((order, index) => (
          <RenderOrders order={order} id={`${order.id}-${index}`} />
        ))}
      </div>
    </div>
  );
}

function RenderOrders({ order }) {
  const totalPrice = GetDrinksPrice(order);
  const size = Object.keys(order.size)[0];
  return (
    <div className={styles["order"]}>
      <div className={styles["order-pic"]}></div>
      <div className={styles["order-details-container"]}>
        <div className={styles["order-details"]}>
          <h3>{order.name}</h3>
          <p>
            {size} - ₱{totalPrice}
          </p>
        </div>
        <div className={styles["order-quantity"]}>
          <button className={styles["decrease"]}>-</button>
          <div className={styles["quantity"]}>{order.numOfOrder}</div>
          <button className={styles["increase"]}>+</button>
        </div>
      </div>
    </div>
  );
}

function GetTotalPrice() {}
function GetDrinksPrice(order) {
  let total = 0;
  const size = Object.keys(order.size)[0];

  total += order.size[size];

  for (const addon of order.selectedAddons) {
    total += addon.price;
  }

  return total;
}
