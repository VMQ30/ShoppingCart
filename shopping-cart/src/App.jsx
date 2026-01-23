import { Outlet, NavLink } from "react-router-dom";
export function App() {
  return (
    <>
      <nav>
        <h1>Bubble Tea Shop</h1>
        <div className="nav-buttons">
          <ul>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="products">Products</NavLink>
            <NavLink to="cart">Cart</NavLink>
          </ul>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
}
