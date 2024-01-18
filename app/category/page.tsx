"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { products } from '../../utilities/products';
import ProductCard from '../components/Products/ProductCard';


const Category = () => {
   useEffect(() => {
     AOS.init({
       duration: 1000,
       once: false,
       mirror: true,
     });
   }, []);

  return (
    <div>
      <div className=" w-full h-auto px-2 md:px-10 mt-6">
        <div className="grid items-center h-[50px] border-b-[1px]  bg-white px-4 rounded-t-[15px] border-blue-400">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-full md:flex justify-end gap-3">
              <div className="justify-self-end  inline-block">
                <select
                  id="sorting"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Sort by latest</option>
                  <option value="US">Sort by oldest</option>
                  <option value="CA">Sort by low price</option>
                  <option value="FR">Sort by high price</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-4  bg-white p-4 rounded-b-[15px]">
          {products.map((product, index) => (
            <div
              data-aso="fade-up"
              key={index}
            >
              <ProductCard product={product} />
            </div>
          ))}
          {products.map((product, index) => (
            <div
              data-aso="fade-up"
              key={index}
            >
              <ProductCard  product={product} />
            </div>
          ))}
          {products.map((product, index) => (
            <div
              data-aso="fade-up"
              key={index}
            >
              <ProductCard product={product} />
            </div>
          ))}
          <div className="col-span-full flex justify-center w-full mt-4">
            <button className="border-[1px] border-[#FF4747] rounded-full px-10 py-1 text-[#FF4747] font-bold">
              LOAD MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
