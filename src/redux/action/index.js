import { CART_ITEM_ADD, CART_ITEM_DELETE, CART_REMOVE_ITEM } from "../types";

export const addCart = (product) => {
  return{
      type:CART_ITEM_ADD,
      payload:product
  }
};

export const deleteCart = (id) => {
  return {
    type: CART_ITEM_DELETE,
    payload: id,
  };
};
export const removeCart = (id) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: id,
  };
};