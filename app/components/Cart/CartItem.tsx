"use client";

import { CartContext } from "app/context/CartStore";
import { useContext } from "react";
const CartItem = () => {
const cartContext = useContext(CartContext);

if (!cartContext) {
  // Handle the case where CartContext is not defined
  return <div>Error: Cart context is not defined</div>;
}

const { cart, removeFromCart, updateQuantity } = cartContext;


  return (
    <div>
      {cart?.map((product) => (
        <div
          key={product.id}
          className="my-3 shadow-lg relative text-white bg-[#FC5B5B] h-[100px] border-[1px] border-[#95A0A7] rounded-md items-center grid grid-cols-12 mx-1 md:mx-6"
        >
          {/* cart image  */}
          <div className="grid col-span-3">
            <img
              className="md:h-[90px] h-[50px] rounded-md ml-3"
              src={product.img[0]}
              alt=""
            />
          </div>

          {/* item details  */}
          <div className="grid col-span-6 justify-start">
            <h1 className="md:font-bold text-sm md:text-base font-semibold text-center">
              {product.details}
            </h1>
            <p className="my-1">Price: ${product.cPrice} </p>
            <p className="hidden md:block">Off : {product.off}%</p>
          </div>

          {/* action  */}
          <div className="grid col-span-3 justify-center text-center mr-4">
            <h1 className="center font-semibold text-sm md:text-base md:font-bold">
              Quantity
            </h1>
            <div className="flex mt-3 mb-4">
              <button
                onClick={() => updateQuantity(product.id, "decrease")}
                className="border-l-[1px] border-b-[1px] border-t-[1px] rounded-l-md border-[#95A0A7] md:px-4 px-1 py-1 bg-black text-white"
              >
                -
              </button>
              <p className=" border-[1px] flex justify-center items-center border-[#95A0A7] md:w-[80px] w-[30px] text-sm md:text-base text-center text-black bg-yellow-50">
                {product?.quantity}
              </p>
              <button
                onClick={() => updateQuantity(product.id, "increase")}
                className="border-r-[1px] border-b-[1px] border-t-[1px] rounded-r-md border-[#95A0A7] md:px-4 px-1 py-1 bg-green-400"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(product.id)}
            className="absolute -top-1 shadow-lg right-0 w-[25px] h-[25px] text-white font-semibold border-[1px] border-green-700 bg-red-800 rounded-full"
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
