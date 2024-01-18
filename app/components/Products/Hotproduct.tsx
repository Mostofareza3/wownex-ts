"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsCart3 } from "react-icons/bs";

const HotProduct = () => {
  const priceRef = useRef<HTMLParagraphElement>(null); 

  const isInView = useInView(priceRef);

  useEffect(() => {
    const controls = animate(0, 19, {
      duration: 1.2,
      onUpdate(value) {
        if (priceRef.current) {
          priceRef.current.textContent = `${value.toFixed()}%`;
        }
      },
    });
    return () => controls.stop();
  }, [isInView]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="md:mx-10 mx-2 h-auto  mt-6 bg-white  border-[1px] rounded-lg border-red-300">
      {/* header */}
      <div className="h-[60px] border-b-[2px] border-gray-200 flex items-center px-8">
        <span>
          <h1 className="flex items-center font-bold md:text-xl text-base sm:text-lg">
            <span className="text-[#FF4747] mr-1">HOT</span> Product of this
            Week
            <span>
              <img src="/assets/icons/fire.png" alt="" />
            </span>
          </h1>
        </span>
      </div>

      {/* item  */}
      <div className="grid grid-cols-12 items-center px-8">
        <div data-aos="zoom-in" className="md:col-span-4 col-span-12 relative ">
          <img src="/assets/products/riceCooker.png" alt="" />
          <div className="mt-4 absolute top-0 left-2 md:w-[90px] md:h-[90px] h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] bg-[#FF4747] rounded-full text-center flex justify-center items-center">
            <p
              ref={priceRef}
              className="font-semibold md:text-[36px] text-[20px] sm:text-[25px] text-white"
            >
              19%
            </p>
          </div>
        </div>
        <div className="md:col-span-8 col-span-12">
          {/* price  */}
          <span className="flex items-center  gap-3">
            <p className="font-semibold text-[#FF4747]">৳ 3500</p>
            <del>
              <small>৳ 4900</small>
            </del>
          </span>
          {/* title  */}
          <p className="font-bold my-2">
            Prestige Electric Pressure Cooker or Multi cooker
          </p>

          {/* capacity */}
          <span className="flex gap-5 items-center">
            <p className="text-[#666666]">4.5 Litre</p>
            <p className="text-xs text-[#00A556]">IN STOCK</p>
          </span>
          {/* bar  */}
          <div className="h-[10px] w-full bg-[#E7E8EC] rounded-[10px] my-3">
            <div
              className="h-[10px] bg-gradient-to-r from-[#FF4747]  to-[#FF9800] rounded-[10px]"
              style={{ width: "80%" }}
            ></div>
          </div>

          {/* time */}
          <div className="my-4">
            <span>
              <span className="w-[30px] h-[30px] bg-[#E7E8EC] text-xm p-1 text-center font-bold mx-1">
                12
              </span>
              :
              <span className="w-[30px] h-[30px] bg-[#E7E8EC] text-xm p-1 text-center font-bold mx-1">
                22
              </span>
              :
              <span className="w-[30px] h-[30px] bg-[#E7E8EC] text-xm p-1 text-center font-bold mx-1">
                24
              </span>
            </span>
            <span className="ml-4 text-[#666666]">
              Hurry up!! Buy before the offer ends.
            </span>
          </div>

          {/* order button  */}
          <div className="mb-3 flex md:block justify-center items-center">
            <button className="w-[195px]  h-[28px] flex items-center gap-2 bg-[#FF4747] justify-center text-white rounded-[5px]">
              <span>
                <BsCart3 />
              </span>{" "}
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotProduct;
