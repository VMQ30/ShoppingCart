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
  console.log(menu);
  return (
    <>
      <div className="drinks-category">
        {menu.map((drinks, index) => (
          <RenderCategory drinks={drinks} key={index} />
        ))}
      </div>

      <div className="drinks-list">
        {drinks.map((drink) => (
          <RenderDrinks drink={drink} />
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
  return (
    <div className="drinks-details">
      <div className="drinks-image"></div>

      <div className="drinks-info">
        <h4>{drink.name}</h4>
      </div>
    </div>
  );
}
