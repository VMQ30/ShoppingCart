import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
export function App() {
  const [orders, setOrders] = useState([]);
  return (
    <>
      <nav>
        <h1>Milk Tea</h1>
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
