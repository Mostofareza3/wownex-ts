"use client";

import Link from "next/link";

const EmptyCart = () => {
  return (
    <div>
      {/* container  */}
      <div className="grid justify-items-center h-[500px] items-center justify-center">
        <div className="flex justify-center flex-col items-center -mt-16">
          <img
            className="h-[200px] mt-10"
            src="/assets/images/empty_cart.png"
            alt=""
          />
          <h1 className="md:text-2xl sm:text-2xl lg:text-2xl text-xl text-center my-4 text-red-400">
            Sorry, Your Cart is Empty. Nothing to Show !!!
          </h1>
          <Link href="/">
            <button className="border-1 bg-[#FF4747] px-4 py-1 sm:px-6 sm:py-2 md:px-6 md:py-2 text-sm sm:text-base md:text-base text-white rounded-full">
              Let's Buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
