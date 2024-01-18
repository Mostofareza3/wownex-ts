"use client";
// import RelatedProducts from "@/app/components/Products/RelatedProducts";
// import { CartContext } from "@/app/context/CartStore";
// import { ProductContext } from "@/app/context/ProductStore";
import AOS from "aos";
import "aos/dist/aos.css";
import RelatedProducts from "app/components/Products/RelatedProducts";
import { CartContext } from "app/context/CartStore";
import { ProductContext } from "app/context/ProductStore";
import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCallOutline, IoCartOutline, IoLogoWhatsapp } from "react-icons/io5";
import { LuRocket } from "react-icons/lu";
import { PiKeyReturnLight } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const ProductDetails = () => {
  const[productDetails, setProductDetails]=useState(true);
  const [deliveryDetails, setDeliveryDetails] = useState(false);
  const [policy, setPolicy] = useState(false);
  const[indicator,setIndicator] = useState(true);
 const { detailsProduct } = useContext(ProductContext);
 const product = detailsProduct?.product
 const cartContext = useContext(CartContext);
  if (!cartContext) {
    return <div>Error: Cart context is undefined</div>;
  }

const { addToCart } = cartContext;

  const handlePolicy=(value:string)=>{
    if(value==="details"){
      setProductDetails(true)
      setDeliveryDetails(false)
      setPolicy(false)
      setIndicator(true);

    }
    if (value === "delivery") {
      setProductDetails(false);
      setDeliveryDetails(!deliveryDetails);
      setPolicy(false);
      setIndicator(false)
    }
    if (value === "policy") {
      setProductDetails(false);
      setDeliveryDetails(false);
      setPolicy(!policy);
      setIndicator(false);

    }
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-12 md:px-10 gap-6 px-4 py-6 bg-white">
        <div className="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-4 place-self-center">
          <Carousel
            autoPlay={false}
            interval={3000}
            showArrows={false}
            infiniteLoop
            showStatus={false}
            swipeable={true}
            showIndicators={false}
            thumbWidth={60}
            className="text-center w-full"
          >
            {product?.img.map((image:string, index:number) => (
              <div key={index}>
                <img src={image} alt="Product" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="col-span-12 sm:col-span-7 md:col-span-7 lg:col-span-8">
          <h2>
            Multi-Function Professional Blender, Pro - Grade, Best 2.5 liters
            Container, 6000W
          </h2>
          <p className="text-green-500 my-2">IN STOCK</p>
          <div className="grid grid-cols-12  gap-4">
            <div className="lg:col-span-7 col-span-12">
              <div className="flex justify-between ">
                <span className="text-[#FF4747] font-bold md:text-3xl">
                  ৳ 3850{" "}
                  <sub>
                    <del className="text-stone-700 text-base">৳ 5500</del>
                  </sub>
                </span>
                <span className="bg-[#FF9A03] relative flex items-center text-white md:px-5 px-2 rounded-bl-full rounded-tr-full">
                  ৳ 1650 OFF
                  <span className="w-[7px] hidden md:block absolute top-1 left-2 h-[7px] bg-white rounded-full"></span>
                </span>
              </div>
              <button className="bg-[#FF4747] w-full my-4 py-2 text-white rounded-full font-bold">
                Order Now
              </button>
              <button
                onClick={() => addToCart(product)}
                className="bg-[#FFE6E7] w-full flex justify-center items-center gap-2 mb-4 pt-2 py-2 text-red-500 rounded-full font-bold"
              >
                <span className="font-bold">
                  <IoCartOutline />
                </span>
                Add to Cart
              </button>
              <Toaster />
              <div className="w-full mt-6 p-2 border-[1px] border-dotted border-stone-500 rounded-lg flex justify-center items-center">
                <div>
                  <p>এই পন্য সম্পর্কে জানতে আমাদেরকে কল করুনঃ</p>
                  <p className="flex justify-center items-center gap-2 font-semibold">
                    <IoCallOutline />
                    01710-696950
                  </p>
                </div>
              </div>
              <div className="w-full mt-2 p-2 border-[1px] border-dotted border-stone-500 rounded-lg flex justify-center items-center">
                <div>
                  <p>WhatsApp করুনঃ</p>
                  <p className="flex justify-center items-center gap-2 font-semibold">
                    <IoLogoWhatsapp />
                    01710-696950
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-5 hidden lg:block  bg-[#F8F8F8] rounded-[15px] p-3">
              <div>
                <h3 className="flex justify-start items-center gap-2 text-[#7c3cb8] font-bold text-[14px]">
                  <span>
                    <LuRocket />
                  </span>{" "}
                  ডেলিভারী খরচঃ
                </h3>
                <div className="border-t-[1px] ml-6 p-2">
                  <span className="flex justify-between items-center text-sm">
                    <span>ঢাকা শহরের ভেতরেঃ </span>
                    <span>৬০ টাকা</span>
                  </span>
                  <span className="flex justify-between items-center text-sm">
                    <span>ঢাকা শহরের বাইরেঃ</span>
                    <span> ১৫০ টাকা</span>
                  </span>
                </div>
              </div>
              <div>
                <h3 className="flex text-[14px] justify-start items-center gap-2 text-[#7c3cb8] font-bold">
                  <span>
                    <PiKeyReturnLight />
                  </span>{" "}
                  রিটার্নঃ
                </h3>
                <div className="border-t-[1px] ml-6 p-2">
                  <p className="text-sm">
                    ৭ দিনের মাঝে ফ্রি রিটার্ন ({" "}
                    <span className="text-red-500">
                      যদি পন্যে কোন সমস্যা থাকে
                    </span>{" "}
                    )
                  </p>
                </div>
              </div>
              <div>
                <h3 className="flex text-[14px] justify-start items-center gap-2 text-[#7c3cb8] font-bold">
                  <span>
                    <CiDeliveryTruck />
                  </span>{" "}
                  পন্য হাতে পেয়ে পেমেন্ট
                </h3>
                <div className="border-t-[1px] ml-6 p-2">
                  <p className="text-sm">
                    ৪৮-৭২ ঘন্টার মাঝে সারাদেশে ক্যাশ অন ডেলিভারী
                  </p>
                </div>
              </div>
              <div>
                <h3 className="flex justify-start items-center gap-2 text-[#7c3cb8] text-[14px] font-bold">
                  <span>
                    <RiCustomerService2Line />
                  </span>{" "}
                  কাস্টমার সার্ভিস
                </h3>
                <div className="border-t-[1px] ml-6 p-2 text-sm">
                  <p>
                    সকাল ১০ টা থেকে রাত ১১ টা পর্যন্ত আমাদের কল অথবা হোয়াটসেপ
                    করতে পারেন
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:hidden  bg-[#F8F8F8] rounded-[15px] p-3">
          <div>
            <h3 className="flex justify-start items-center gap-2 text-[#7c3cb8] font-bold text-[14px]">
              <span>
                <LuRocket />
              </span>{" "}
              ডেলিভারী খরচঃ
            </h3>
            <div className="border-t-[1px] ml-6 p-2">
              <span className="flex justify-between items-center text-sm">
                <span>ঢাকা শহরের ভেতরেঃ </span>
                <span>৬০ টাকা</span>
              </span>
              <span className="flex justify-between items-center text-sm">
                <span>ঢাকা শহরের বাইরেঃ</span>
                <span> ১৫০ টাকা</span>
              </span>
            </div>
          </div>
          <div>
            <h3 className="flex text-[14px] justify-start items-center gap-2 text-[#7c3cb8] font-bold">
              <span>
                <PiKeyReturnLight />
              </span>{" "}
              রিটার্নঃ
            </h3>
            <div className="border-t-[1px] ml-6 p-2">
              <p className="text-sm">
                ৭ দিনের মাঝে ফ্রি রিটার্ন ({" "}
                <span className="text-red-500">যদি পন্যে কোন সমস্যা থাকে</span>{" "}
                )
              </p>
            </div>
          </div>
          <div>
            <h3 className="flex text-[14px] justify-start items-center gap-2 text-[#7c3cb8] font-bold">
              <span>
                <CiDeliveryTruck />
              </span>{" "}
              পন্য হাতে পেয়ে পেমেন্ট
            </h3>
            <div className="border-t-[1px] ml-6 p-2">
              <p className="text-sm">
                ৪৮-৭২ ঘন্টার মাঝে সারাদেশে ক্যাশ অন ডেলিভারী
              </p>
            </div>
          </div>
          <div>
            <h3 className="flex justify-start items-center gap-2 text-[#7c3cb8] text-[14px] font-bold">
              <span>
                <RiCustomerService2Line />
              </span>{" "}
              কাস্টমার সার্ভিস
            </h3>
            <div className="border-t-[1px] ml-6 p-2 text-sm">
              <p>
                সকাল ১০ টা থেকে রাত ১১ টা পর্যন্ত আমাদের কল অথবা হোয়াটসেপ করতে
                পারেন
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="col-span-12 mt-6 "
        >
          <div className="bg-[#E7E8EC] p-2 flex justify-center md:gap-10 gap-3 md:h-[50px] sm:h-[50px] h-auto rounded-t-[15px]">
            <button
              className={` ${indicator ? "text-[#FC5B5B]" : ""}`}
              onClick={() => handlePolicy("details")}
            >
              Product Details
            </button>
            <button
              className={`${deliveryDetails ? "text-[#FC5B5B]" : ""}`}
              onClick={() => handlePolicy("delivery")}
            >
              Delivery Information
            </button>
            <button
              className={`${policy ? "text-[#FC5B5B]" : ""}`}
              onClick={() => handlePolicy("policy")}
            >
              Return & Refund Policy
            </button>
          </div>
          <div className="md:p-6 p-2 bg-[#F8F8F8] rounded-b-[15px]">
            {productDetails ? (
              <div>
                <h2 className="font-semibold">Feature:</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <ul className="my-6 list-disc">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                </ul>

                <h3 className="font-semibold">Specification:</h3>
                <p>
                  At elementum eu facilisis sed odio morbi quis commodo odio.
                  Euismod lacinia at quis risus sed. Dolor sed viverra ipsum
                  nunc aliquet bibendum enim facilisis gravida. Lacus sed turpis
                  tincidunt id aliquet risus feugiat in. Nisi vitae suscipit
                  tellus mauris a diam maecenas. Quisque egestas diam in arcu
                  cursus euismod quis.
                </p>
              </div>
            ) : deliveryDetails ? (
              <h1>Delivery Details</h1>
            ) : policy ? (
              <h1>Policy Details</h1>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="col-span-12 h-auto">
          <RelatedProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
