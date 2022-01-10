import React, { useState } from "react";
import "./Menu.scss";
import MenuCategory from "./MenuCategory";
import menuData from "./data-menu";
import MenuProducts from "./MenuProducts";

const allCategories = [
  "all",
  ...new Set(menuData.map((item) => item.category)),
];

const Menu = () => {
  const [menuProducts, setMenuProducts] = useState(menuData);
  const [menuCategories, setMenuCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuProducts(menuData);
      return;
    }
    const newItems = menuData.filter((item) => item.category === category);
    setMenuProducts(newItems);
  };
  return (
    <div className="menu-container">
      <MenuCategory filterItems={filterItems} category={menuCategories} />
      <MenuProducts menuProducts={menuProducts} />
    </div>
  );
};
export default Menu;
