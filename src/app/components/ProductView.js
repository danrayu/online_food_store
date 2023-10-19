import AuthContext from "@/store/auth-context";
import React, { useContext } from "react";
import ProductThumbnail from "./ProductThumbnail";

const ProductView = () => {
  const context = useContext(AuthContext);

  const addToCart = (id) => {
    context.addToCart(id);
    context.addToCartAnim();
  };

  console.log("rendered productview full");

  let products = context.products;

  return (
    <div>
      <div className="filters-and-sorts"></div>

      <div className="display-grid">
        <div className="d-flex flex-wrap">
          {products.map((item) => {
            return (
              <ProductThumbnail
                prod={item}
                press={addToCart}
                key={item["id"]}
              />
            );
          })}
        </div>
      </div>
      
      <div className="page-navigator"></div>
    </div>
  );
};

export default ProductView;
