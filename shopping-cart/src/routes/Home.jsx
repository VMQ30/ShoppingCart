import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section-left"></div>
        <div className="hero-section-right">
          <p>
            Simply Un<span>bear</span>ably Good
          </p>
          <NavLink to="products/Milk Tea">View Products</NavLink>
        </div>
        <h2>Bubble Tea</h2>
      </div>

      <div className="popular-drinks">
        <h3>Signature Drinks</h3>
        <div className="products-grid"></div>
        <NavLink to="products/Milk Tea">View More</NavLink>
      </div>
    </>
  );
}
