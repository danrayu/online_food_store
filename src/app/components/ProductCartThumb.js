import React, { useState } from "react";
import TrashButton from "./TrashButton";
import PlusMinusButton from "./reuse/PlusMinusButton";
import style from "./ProductCartThumb.module.css";

const ProductCartThumb = (props) => {
  let item = props.prod;
  const [isClosing, setClosingState] = useState(false);

  const removeFromCart = () => {
    setClosingState(true);
    setTimeout(() => props.context.minusCart(item["id"], true), 1000);
  };

  const modCart = (positive) => {
    if (positive) {
      props.context.addToCart(item["id"]);
    } else {
      props.context.minusCart(item["id"]);
    }
  };

  return (
    <div className={"col-12 p-3 " + (isClosing && style["close-animation"])}>
      <div className="p-3 card text-light d-flex flex-column align-content-between h-100">
        <div>
          <h4>{item.fields["name"]}</h4>
        </div>
        <div className="d-flex">
          <PlusMinusButton
            plus={false}
            onClick={() => modCart(false)}
          ></PlusMinusButton>
          <p className={"my-1 mx-2 " + style["quantity-field"]}>
            {item.quantity}
          </p>
          <PlusMinusButton
            plus={true}
            onClick={() => modCart(true)}
          ></PlusMinusButton>
        </div>
        <div className="mt-auto pt-2 d-flex justify-content-end">
          <h3 className="card bg-gray p-1 my-1 me-3">
            ${item.fields["price"]}
          </h3>
          <TrashButton do={removeFromCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductCartThumb;
