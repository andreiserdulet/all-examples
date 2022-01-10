import React from "react";
import "./MenuCategory.scss";
const MenuCategory = ({ filterItems, category }) => {
  return (
    <nav className="menu-nav-category">
      {category.map((item, index) => {
        return (
          <button
            className="menu-btn-category"
            onClick={() => filterItems(item)}
            key={index}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
};
export default MenuCategory;
