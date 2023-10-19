import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
  const getTotalPrice = () => {
    return Math.round(props.getTotalPrice() * 100) / 100;
  };

  return (
    <div className="modal backdrop-modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cart</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={props.close}
            ></button>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="justify-content-end d-flex align-items-baseline m-3">
            <h4 className="mt-a mx-2">Total</h4>
            <h3 className="card bg-gray p-1 my-1 me-3">${getTotalPrice()}</h3>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.close}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
