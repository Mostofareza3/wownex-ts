"use client";

import { CartContext } from "app/context/CartStore";
// import { CartContext } from "/app/context/CartStore";
// import { Items } from "@/utilities/nav_items";
import { Items } from "../../../utilities/nav_items";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";



//top bar
//@ts-ignore
export const Top = () => {
  return (
    <div className="h-[49px] flex items-center">
      <marquee className="font-bold" direction="left">
        WoWnex বাংলাদেশের বিশ্বস্ত অনলাইন শপ, সারাদেশে ক্যাশ অন ডেলিভারি (৪৮
        থেকে ৭২ ঘণ্টার মধ্যে) হটলাইনঃ 01710696950
      </marquee>
    </div>
  );
};

// middle
export const Middle = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: Cart context is not defined</div>;
  }

  const { cart } = cartContext;

  return (
    <div className="flex items-center justify-between gap-4 pr-4 md:pr-0 bg-white">
      <div className="h-[70px]  w-full grid grid-cols-12 bg-white md:px-10 px-1">
        <div className="col-span-2 hidden md:block  place-self-center">
          <Link href="/">
            <img className="" src="/assets/logo/logo.png" alt="brand logo" />
          </Link>
        </div>
        <div className="col-span-11 md:col-span-9  place-self-center w-full justify-self-center flex justify-center">
          <div className=" border-[1px] border-[#FF4747] rounded-[15px] pl-1 w-[80%] h-[48px] flex justify-between">
            <input
              className="px-3 outline-none w-full  rounded-l-[15px]"
              type="text"
              placeholder="Search"
            />
            <button className="bg-[#FF4747] rounded-r-[15px] w-[80px] px-4">
              Search
            </button>
          </div>
        </div>
        <div className="col-span-1 place-self-center justify-self-end">
          <Link href="/cart">
            <div className="relative">
              <img className="w-[35px]" src="/assets/icons/cart.png" alt="" />
              <p className="bg-[#FF4747] rounded-full flex justify-center items-center w-[20px] h-[20px] text-white text-[12px] absolute top-0 -right-2">
                {cart.length}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleDropDown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <Top />
      <Middle />
      <div className="bg-[#FF4747]">
        <div
          className={`h-[50px] flex justify-between items-center bg-blue-200 md:mx-10 text-white  relative`}
        >
          <div className="md:hidden">
            <Link href="/">
              <img
                className="w-[150px]"
                src="/assets/logo/logo.png"
                alt="brand logo"
              />
            </Link>
          </div>
          <ul
            className={`p-4 md:h-full items-center border-t-[1px] z-10 border-blue-400  bg-[#FF4747]  md:flex md:justify-between absolute w-full top-[50px] -left-full md:left-0 md:top-0 md:border-none transition-all ease-in-out delay-200 ${isNavOpen ? "left-0" : ""
              }`}
          >
            <li>
              <p
                className="md:hidden my-2 flex  gap-2 items-center"
                onClick={handleDropDown}
              >
                <span>All Categories </span>
                <span
                  className={`text-white text-xl ${isCategoryOpen ? "rotate-180" : ""
                    }`}
                >
                  <FaCaretDown />
                </span>
              </p>
              <p className="hidden md:block ">
                <span className="flex  gap-2 items-center">
                  <span>All Categories</span>
                  <span className="text-white text-xl">
                    <FaCaretDown />
                  </span>
                </span>
              </p>
              <ul
                className={`bg-red-300 rounded-[15px] p-4 ml-4 transition-all ease-in-out delay-300 ${isCategoryOpen ? "block" : "hidden"
                  }`}
              >
                {Items.map((item, key) => (
                  <li className="my-2">
                    <Link href="#">
                      <span className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <ul className="md:flex gap-6">
                <li className="my-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="my-2">
                  <Link href="#">Flash Sale</Link>
                </li>
                <li className="my-2">
                  <Link href="#">Hot Product</Link>
                </li>
                <li className="my-2">
                  <Link href="#">Shop</Link>
                </li>
                <li className="my-2">
                  <p className="flex items-center gap-1">
                    <span className="flex items-center gap-2 font-thin">
                      <span>
                        <IoCallOutline />
                      </span>{" "}
                      Hotline:
                    </span>
                    01710-696950
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <div className="mr-2 md:hidden">
            {isNavOpen ? (
              <button onClick={handleNav} className="text-4xl text-black">
                <IoMdClose />
              </button>
            ) : (
              <button onClick={handleNav} className="text-4xl text-black">
                <RxHamburgerMenu />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
