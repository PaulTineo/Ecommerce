import React, { useContext, useEffect, useState } from "react";
//import product context
import { ProductContext } from "../contexts-api/context/ProductContext";
//import product component
import Product from "../components/Product";
//import hero component
import Hero from "../components/Hero";
function Home() {
  //get products from products context
  const { products } = useContext(ProductContext);
  //set value state
  const [value, setValue] = useState([]);
  //set selected category
  const [selectedCategory, setSelectedCategory] = useState("");
  //set categories
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  //setear los productos por defecto
  useEffect(() => {
    setValue(products);
  }, [products]);
  //filtrar productos por categoria
  const handleClick = (e) => {
    const filteredProducts = products.filter((product) => {
      return product.category === e.target.value;
    });
    setValue(filteredProducts);
    if (e.target.value === "") {
      setValue(products);
    }
  };
  //capturar el valor del select
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div>
      <Hero/>
      <section className="py-16 px-8 ">
        <div className="inline-block relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline "
            value={selectedCategory}
            onChange={handleChange}
            onClick={handleClick}
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414L11.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto pt-5">
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
