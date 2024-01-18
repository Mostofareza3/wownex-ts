"use client";
import Link from "next/link";
import { useContext } from "react";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import OrderSummary from "../components/Cart/OrderSummary";
import { CartContext } from "../context/CartStore";

const Cart = () => {
  const context = useContext(CartContext);
  if (!context) {
    return <div>Error: Cart context is not defined</div>;
  }
  const { cart, clearCart } = context;
  let selectedProducts = 0;
  let price = 0.0;

  for (let i = 0; i < cart?.length; i++) {
    price += cart[i]?.cPrice * cart[i]?.quantity;
    selectedProducts += cart[i]?.quantity;
  }
  return (
    <div>
      {cart?.length ? (
        <div className="grid md:grid-cols-12 grid-cols-1 gap-4 pt-[40px] px-2 h-auto mb-4 justify-center ">
          {/* cart item  */}
          <div className="grid md:col-span-8  col-span-full border-2 border-stone-400 rounded-lg p-2">
            <div
              className={` h-[300px] md:h-[400px] scroll-smooth scroll-m-1 overflow-y-scroll overflow-x-hidden `}
            >
              <div>
                <CartItem />
              </div>
            </div>
            <div className="mt-2 h-auto md:h-auto bg-slate-600 md:mx-10 mx-2 rounded-lg text-white">
              <div className="p-2 tracking-widest leading-8">
                <div>
                  <ul className="list-disc">
                    <table>
                      <tr>
                        <td>
                          <li>Selected Items: </li>
                        </td>
                        <td className="text-green-500 pl-4">{cart?.length}</td>
                      </tr>
                      <tr>
                        <td>
                          <li>Selected Products: </li>
                        </td>
                        <td className="text-green-500 pl-4">
                          {selectedProducts}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <li>Tax: </li>
                        </td>
                        <td className="text-green-500 pl-4">0%</td>
                      </tr>
                      <tr>
                        <td>
                          <li>Total Price:</li>{" "}
                        </td>
                        <td className="text-green-500 pl-4">{price} ৳</td>
                      </tr>
                    </table>
                    <h3 className="text-[#FC5B5B] text-[12px] font-bold font-serif">
                      <span className="font-serif">NB:</span>Delivery Charge: In
                      Dhaka-100৳ & Outside Dhaka-150৳
                    </h3>
                  </ul>
                </div>
                <div className="flex justify-between items-center md:mx-10 mx-2 sm:mx-4 mt-4">
                  <Link href="/">
                    <button className=" bg-blue-600 rounded-full text-sm py-1 px-2 text-white">
                      Back to Shopping
                    </button>
                  </Link>
                  <button
                    onClick={clearCart}
                    className=" bg-red-600 rounded-full text-sm py-1 px-2 text-white"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* order summery  */}
          <div className="gird md:col-span-4 col-span-full justify-self-center">
            <div className="">
              <OrderSummary />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
