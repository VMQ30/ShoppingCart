import { setMenuData } from "./data/MenuData";

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
  console.log(menu);
  return (
    <>
      {menu.map((drinks, index) => (
        <RenderCategory drinks={drinks} key={index} />
      ))}
    </>
  );
}

function RenderCategory({ drinks }) {
  return (
    <div className="drinks-category">
      <h3>{drinks.category}</h3>
      {drinks.items.map((drink) => (
        <RenderDrinks drink={drink} key={drink.id} />
      ))}
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
