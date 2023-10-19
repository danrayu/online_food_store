import React, { useState } from "react";

const AuthContext = React.createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  addToCartAnim: () => {},
  getCartProducts: () => {},
  minusCart: () => {},
  cartTotalPrice: () => {},
});

const products = [
  {
    id: 0,
    name: "Pork Doner",
    description: "Pork Doner usual size. 100 grams",
    price: 8.79,
  },
  {
    id: 1,
    name: "Pork Doner XL",
    description: "Pork Doner extra large size. 300 grams",
    price: 10.99,
  },
  {
    id: 2,
    name: "Fried Potatoes",
    description: "Traditional fried potatoes. 50 grams",
    price: 5.29,
  },
  {
    id: 3,
    name: "Potatoes",
    description: "Fresh potatoes.",
    price: 16.0,
  },
  {
    id: 5,
    name: "Turkish Delight",
    description: "A traditional Turkish sweet treat.",
    price: 1.0,
  },
  {
    id: 6,
    name: "Ayran",
    description: "500 grams of refreshing ayran.",
    price: 1.19,
  },
  {
    id: 7,
    name: "Kapsalon",
    description: "A delicious dish with meat and vegetables.",
    price: 2.01,
  },
  {
    id: 10,
    name: "Iskender Kebab",
    description:
      "Thinly cut grilled lamb served over pita bread, topped with tomato sauce.",
    price: 11.5,
  },
  {
    id: 11,
    name: "Manti",
    description:
      "Turkish dumplings filled with ground meat, served with garlic yogurt.",
    price: 8.25,
  },
  {
    id: 12,
    name: "Simit",
    description: "Circular bread with sesame seeds, a Turkish staple.",
    price: 1.5,
  },
  {
    id: 13,
    name: "Pide",
    description:
      "Turkish flatbread with various toppings like cheese, sausage, and vegetables.",
    price: 7.0,
  },
  {
    id: 14,
    name: "Lahmacun",
    description: "Thin Turkish pizza with minced meat, vegetables, and spices.",
    price: 6.0,
  },
  {
    id: 15,
    name: "Cacik",
    description: "A refreshing dish of yogurt mixed with cucumbers and herbs.",
    price: 3.5,
  },
  {
    id: 16,
    name: "Stuffed Grape Leaves",
    description:
      "Grape leaves stuffed with rice, pine nuts, and various spices.",
    price: 5.0,
  },
  {
    id: 17,
    name: "Shish Kebab",
    description: "Skewered and grilled cubes of meat, served with vegetables.",
    price: 10.5,
  },
  {
    id: 18,
    name: "Falafel",
    description: "Deep-fried balls made from ground chickpeas.",
    price: 4.5,
  },
  {
    id: 19,
    name: "Hummus",
    description: "Creamy blend of chickpeas, tahini, and spices.",
    price: 3.75,
  },
];

const getItemById = (id, list) => {
  for (let itemi in list) {
    if (list[itemi]["id"] === id) {
      return list[itemi];
    }
  }
};

const addToCartAnim = () => {};

const getIndexById = (id, list) => {
  for (let itemi in list) {
    if (list[itemi].id === id) {
      return itemi;
    }
  }
  return null;
};

export const AuthContextProvider = (props) => {

  const [cartItems, setCartItems] = useState([]);

  const minusCart = (id, all = false /* entirely delete item from cart */) => {
    const idInCart = getIndexById(id, cartItems);
    let temp = [...cartItems];
    if (idInCart === null) {
      return;
    }

    if (all || cartItems[idInCart].quantity === 1) {
      temp.splice(idInCart, 1);
    } else {
      temp[idInCart] = {
        id: id,
        quantity: temp[idInCart].quantity - 1,
      };
    }
    setCartItems([...temp]);
  };

  const newToCart = (id) => {
    setCartItems((oldItems) => {
      return [
        ...oldItems,
        {
          id: id,
          quantity: 1,
        },
      ];
    });
  };

  const addToCart = (id) => {
    const idInCart = getIndexById(id, cartItems);
    if (idInCart === null) {
      newToCart(id);
    } else {
      let temp = [...cartItems];
      temp[idInCart] = {
        id: id,
        quantity: temp[idInCart].quantity + 1,
      };
      setCartItems([...temp]);
    }
  };

  const getCartProducts = () => {
    let cartProducts = [];
    for (let itemI in cartItems) {
      let id = cartItems[itemI].id;
      cartProducts.push({
        id: id,
        quantity: cartItems[itemI].quantity,
        fields: getItemById(cartItems[itemI].id, products),
      });
    }
    return cartProducts;
  };

  const cartTotalPrice = () => {
    let price = 0.0;
    let cart = getCartProducts();
    for (let itemI in cart) {
      price += cart[itemI].quantity * cart[itemI].fields.price;
    }
    return price;
  };

  return (
    <AuthContext.Provider
      value={{
        products: products,
        cartItems: cartItems,
        addToCart: addToCart,
        addToCartAnim: addToCartAnim,
        getCartProducts: getCartProducts,
        minusCart: minusCart,
        cartTotalPrice: cartTotalPrice,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
