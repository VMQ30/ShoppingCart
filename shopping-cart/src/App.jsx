import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import logo from "./assets/logo.png";
export function App() {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(orders));
  }, [orders]);

  return (
    <>
      <nav>
        <img src={logo} />
        <div className="nav-buttons">
          <ul>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="products/Milk Tea">Products</NavLink>
            <NavLink to="cart">Cart</NavLink>
          </ul>
        </div>
      </nav>

      <main>
        <Outlet context={[orders, setOrders]} />
      </main>

      <footer></footer>
    </>
  );
}
