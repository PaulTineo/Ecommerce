import { CART_ITEM_ADD, CART_ITEM_DELETE, CART_REMOVE_ITEM } from "../types";

//Estado inicial
export const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    //aumenta  cantidad de productos en el carrito
    case CART_ITEM_ADD:
      //Comprobar si el producto ya está en el carrito
      const productInCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      //Aumentar la cantidad si el producto ya está en el carrito
      if (productInCart) {
        const updatedCart = state.cart.map((x) =>
          x.id === action.payload.id
            ? { ...productInCart, qty: productInCart.qty + 1 }
            : x
        );
        const newCart = updatedCart;
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { ...state, cart: newCart };
      } else {
        //Agregar nuevo producto al carrito
        const newCart = [...state.cart, { ...action.payload, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          ...state,
          cart: newCart,
        };
      }

    case CART_ITEM_DELETE:
      //Comprobar si el producto ya está en el carrito
      const productinCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      //Elimina producto del carrito
      if (productinCart.qty === 1) {
        const newCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          ...state,
          cart: newCart,
        };
      } else {
        //Disminuye el contador del producto en el carrito
        const newCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...productinCart, qty: productinCart.qty - 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(newCart));

        return {
          ...state,
          cart: newCart,
        };
      }
    case CART_REMOVE_ITEM:
      //Eliminar un producto del carrito
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};
