import React from "react";
import "./MenuProducts.scss";
const MenuProducts = ({ menuProducts }) => {
  return (
    <div className="menu-container-products">
      {menuProducts.map((products) => {
        const { id, title, category, price, img, desc } = products;
        return (
          <div className="menu-card" key={id}>
            <div className="menu-image-product">
              <img src={img} alt={title} className="menu-image" />
            </div>
            <article className="menu-info">
              <header className="menu-header">
                <h1 className="menu-product-title">{title}</h1>
                <p className="menu-product-price">${price}</p>
              </header>
              <div className="menu-underline"></div>
              <p className="menu-product-description">{desc} </p>
            </article>
          </div>
        );
      })}
    </div>
  );
};
export default MenuProducts;
