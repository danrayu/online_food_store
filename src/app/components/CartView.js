import AuthContext from "@/store/auth-context";
import React, { useContext } from "react";
import ProductCartThumb from "./ProductCartThumb";

const CartView = () => {
  const context = useContext(AuthContext);

  console.log("rendered productview thumb");

  return (
    <div className="display-grid">
      <div className="d-flex flex-wrap">
        {context.getCartProducts().map((item) => {
          return (
            <ProductCartThumb prod={item} context={context} key={item["id"]} />
          );
        })}
      </div>
    </div>
  );
};

export default CartView;
