import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts-api/context/ProductContext";
import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";

function ProductDetails() {
  //obtener el id del producto
  const { id } = useParams();
  //obtener los productos del context
  const { products } = useContext(ProductContext);
  //filtrar el producto
  const product = products.find((item) => item.id === parseInt(id));
  //destructurar el producto
  const { title, price, description, image } = product || {};
  //dispatch
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addCart(item));
  };
  return (
    <section className="pt-32 pb-12 lg:py-32 h-full flex items-center ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center ">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              src={image}
              alt={title}
              className="max-w-[200px] lg:max-w-sm"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl font-medium mb-6">
              ${price}
            </div>
            <p className="text-gray-600 mb-6">{description}
            </p>
            <button className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-400 " onClick={()=>addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
