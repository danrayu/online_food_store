import AuthContext from "@/store/auth-context";
import React, { useContext, useEffect, useReducer, useState } from "react";
import ProductThumbnail from "./ProductThumbnail";
import ProductCartThumb from "./ProductCartThumb";

const cartReducer = (state) => {
  return state;
};

const ProductView = (props) => {
  const context = useContext(AuthContext);
  const [cartState, dispatchCartState] = useReducer(cartReducer, { isActive: false });

  useEffect(() => {
    dispatchCartState([...context.cartItems]);
  }, [context.cartItems]);

  const addToCart = (id) => {
    context.addToCart(id);
    context.addToCartAnim();
  };

  let products = props.fullView ? context.products : context.getCartProducts(cartState);

  return (
    <div>
      {props.fullView && <div className="filters-and-sorts"></div>}

      <div className="display-grid">
        <div>
          <div className="d-flex flex-wrap">
            {products.map((item) => {
              if (props.fullView) {
                return (
                  <ProductThumbnail
                    prod={item}
                    press={addToCart}
                    key={item["id"]}
                  />
                );
              } else {
                return (
                  <ProductCartThumb
                    prod={item}
                    context={context}
                    key={item["id"]}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      {props.fullView && <div className="page-navigator"></div>}
    </div>
  );
};

export default ProductView;
