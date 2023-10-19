import React, { useState } from "react";

const ProductThumbnail = (props) => {
  let item = props.prod;

  const [isPressed, setPressState] = useState(false);

  const buttonPress = () => {
    let id = item["id"];
    props.press(id);
    
  };

  const onMouseDown = () => {
    setPressState(true);
  };

  const onMouseUp = () => {
    setTimeout(() => {
      setPressState(false);
    }, 70)
  };

  return (
    <div className="col-md-4 col-sm-6 col-12 p-3">
      <div className="p-3 card text-light d-flex flex-column align-content-between h-100">
        <div>
          <h4>{item["name"]}</h4>
          <p>{item["description"]}</p>
        </div>
        <div className="mt-auto pt-2 d-flex justify-content-end">
          <h3 className="card bg-gray p-1 my-1 me-3">${item["price"]}</h3>
          <button
            className={
              "btn btn-warning w-fit " + (isPressed && "btn-yellow-pressed")
            }
            onClick={buttonPress}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductThumbnail;
