import React, { useContext, useEffect, useState } from "react";
import CartButton from "../CartButton";
import Modal from "../reuse/Modal";
import AuthContext from "@/store/auth-context";
import CartView from "../CartView";

const Header = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const context = useContext(AuthContext);
  const setAddToCartAnim = (animCallback) => {
    context.addToCartAnim = animCallback;
  }

  return (
    <>
      { show && <Modal close={handleClose} getTotalPrice={context.cartTotalPrice}><CartView /></Modal> }
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <a className="navbar-brand" href="#">
          Hasan Foods Co.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 bg-dark text-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <CartButton do={handleShow} itemsCount={context.cartItems.length} animSetter={setAddToCartAnim}></CartButton>
      </nav>
    </>
  );
};

export default Header;
