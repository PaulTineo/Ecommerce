import React, { useEffect, useState } from "react";
//import redux
import { useSelector } from "react-redux";
//import components
import CartItem from "../components/CartItem";
//import react router
import { useNavigate } from "react-router-dom";
//import image
import NofountShop from '../img/shop_nofount.png'
//import icons
import { IoMdArrowBack } from "react-icons/io";

function Cart() {
  const [total, setTotal] = useState(0);
  const state = useSelector((state) => state.cart);
  const { cart } = state;
  const navigate = useNavigate();
  //calculate total
  useEffect(() => {
    let newTotal = 0;
    cart.forEach((item) => {
      newTotal += item.price * item.qty;
    });
    setTotal(newTotal);
  }, [cart]);

  return (

    <div className="w-full bg-white top-0 h-full shadow-2xl z-20 px-4 py-4">
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag({state.cart.length})
        </div>
        {/* icons */}
        <div className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowBack className="text-2xl" onClick={() => navigate(-1)} />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {/* Si el carrito esta vacio mostrar imagen, de lo contrario mostrar los items */}
        {cart.length > 0 ? cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        }) : (<div className="flex flex-col items-center justify-center h-full">
          <img src={NofountShop} alt="" className="w-[400px]" />
          <p className="text-2xl font-semibold text-gray-500">Your cart is empty</p>
        </div>
        )}
   
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>${parseFloat(total).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
