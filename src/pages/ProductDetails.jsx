import React, { useContext } from "react";
//import context
import { ProductContext } from "../contexts-api/context/ProductContext";
//import react router dom
import { useNavigate, useParams } from "react-router-dom";
//import redux
import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
//import components
import StarRating from "../components/StarRanting";
//import icons
import { IoMdArrowBack } from "react-icons/io";

function ProductDetails() {
  //obtener el id del producto
  const { id } = useParams();
  //obtener los productos del context
  const { products } = useContext(ProductContext);
  //filtrar el producto
  const product = products.find((item) => item.id === parseInt(id));
  //destructurar el producto
  const {
    title,
    price,
    description,
    image,
    rating = { rate: 0, count: 0 },
  } = product || {};
  //dispatch
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addCart(item));
  };
  //navegar hacia atras
  const navigate = useNavigate();
  return (
    <section className="pt-32 pb-12 lg:py-32 h-full flex items-center ">
      <div className="container mx-auto">
        <div className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowBack className="text-2xl" onClick={() => navigate(-1)} size="small" />
        </div>
        <div className="flex flex-col lg:flex-row items-center ">
          {/* imagen */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              src={image}
              alt={title}
              className="max-w-[200px] lg:max-w-sm"
            />
          </div>
          {/* detalles */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl font-medium mb-6">${price}</div>
            {/* rating */}
            <div className="flex items-center mb-6 justify-center lg:justify-start ">
              <div className="flex items-center ">
                <StarRating rating={rating.rate} />
              </div>
              <p className="ml-3 text-sm font-medium text-primary hover:underline cursor-pointer">
                {rating.count} reviews
              </p>
            </div>

            <p className="text-gray-600 mb-6">{description}</p>
            <button
              className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-400 "
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
