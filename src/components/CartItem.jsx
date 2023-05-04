import React from "react";
//import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
//import redux
import { useDispatch } from "react-redux";
//import link
import { Link } from "react-router-dom";
//import actions
import { addCart, deleteCart, removeCart } from "../redux/action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addCart(item));
  };

  const removeToCart = (item) => {
    dispatch(deleteCart(item));
  };
  
  const deleteToCart = (item) => {
    dispatch(removeCart(item));
  };
  //destructurar el item
  const { id, title, price, image, amount, qty } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}

        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div className="text-xl cursor-pointer"    onClick={() => deleteToCart(item)}>
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-mediun">
              {/* minus icon */}
              <div
                className="flex-1 flex justify-center items-center cursor-pointer"
                onClick={() => removeToCart(item)}
              >
                <IoMdRemove />
              </div>

              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {qty}
              </div>
              {/* plus icon */}
              <div
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={() => addToCart(item)}
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              ${price}
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-normal items-center text-primary font-medium">{`$ ${parseFloat(
              price * qty
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
