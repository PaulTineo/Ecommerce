import React, { useContext, useEffect, useState } from "react";
//import product context
import { ProductContext } from "../contexts-api/context/ProductContext";
//import product component
import Product from "../components/Product";
//import hero component
import Hero from "../components/Hero";
import {
  FcCompactCamera,
  FcElectronics,
  FcManager,
  FcOnlineSupport,
} from "react-icons/fc";
function Home() {
  //get products from products context
  const { products } = useContext(ProductContext);
  //set value state
  const [value, setValue] = useState([]);
  //setear los productos por defecto
  useEffect(() => {
    setValue(products);
  }, [products]);
  //filtrar productos por categoria
  const handleClick = (category) => {
    const filteredProducts = products.filter((product) => {
      return product.category === category;
    });
    setValue(filteredProducts);
    if (category === "") {
      setValue(products);
    }
  };
  return (
    <div>
      <Hero />
      <section className="py-10 px-5">
        {/* botones de categorias */}
        <div className=" flex gap-x-3 justify-center ">
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded text-[10px]"
            onClick={() => handleClick("electronics")}
          >
            <FcElectronics className="inline-block mr-2 text-xl" />
            Electronics
          </button>

          <button
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded text-[10px]"
            onClick={() => handleClick("jewelery")}
          >
            <FcCompactCamera className="inline-block mr-2 text-xl " />
            Jewelery
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded text-[10px]"
            onClick={() => handleClick("men's clothing")}
          >
            <FcManager className="inline-block mr-2 text-xl " />
            Men's clothing
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded text-[10px]"
            onClick={() => handleClick("women's clothing")}
          >
            <FcOnlineSupport className="inline-block mr-2 text-xl" />
            Women's clothing
          </button>
        </div>

        <div className="container mx-auto pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-0">
            {value.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
