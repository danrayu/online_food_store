import AuthContext from "@/store/auth-context";
import React, { useContext } from "react";
import ProductCartThumb from "./ProductCartThumb";

const CartView = () => {
  const context = useContext(AuthContext);

  let cart = context.getCartProducts();

  console.log("rendered productview thumb");

  const displayCart = () => {
    return cart.map((item) => {
      return (
        <ProductCartThumb prod={item} context={context} key={item["id"]} />
      );
    });
  };

  return (
    <div className="display-grid">
      <div className="d-flex flex-wrap">
        {(cart.length !== 0) && displayCart()}
        {cart.length === 0 && <h3>The cart is empty</h3>}
      </div>
    </div>
  );
};

export default CartView;
