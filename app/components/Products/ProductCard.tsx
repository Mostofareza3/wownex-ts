// import { ProductContext } from "@/app/context/ProductStore";
import { ProductContext } from "app/context/ProductStore";
import Link from "next/link";
import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Product } from "types";

type PropsType = {
  product: Product;
};

const ProductCard = (product:PropsType) => {
  const { details, cPrice, pPrice, img, off, id } = product.product;
  const { detailsProduct, addDetailsProduct } = useContext(ProductContext);

  return (
    <div className="shadow-lg w-full relative rounded-[15px] bg-white border border-gray-200   dark:border-gray-700 ">
      {/* product image  */}
      <Link href={`product/${id}`}>
        <img className="rounded-t-[15px] w-full" src={img[0]} alt="" />
      </Link>
      <div className="p-2">
        <div className="h-[60px] overflow-hidden">
          <Link href={`product/${id}`}>
            <h5 className="mb-2 text-[14px] md:text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              {details?.slice(0, 50)}
            </h5>
          </Link>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-2 md:my-1">
          <span className="md:text-xl text-base sm:text-lg mr-2 text-[#FF4747]">
            ৳ {cPrice}
          </span>
          <sub>
            <del>৳ {pPrice}</del>
          </sub>
        </p>
        <div className="w-full flex justify-center items-center">
          <button
            className="bg-[#FC5B5B] px-2 py-1 rounded-[15px]"
            onClick={() => addDetailsProduct(product)}
          >
            <Link href={`product/${id}`} className="">
              <span className="flex justify-center items-center md:gap-2 gap-1 text-[12px] sm:text-[15px]  md:text-base text-white">
                <span>
                  <IoCartOutline />
                </span>
                Order Now
              </span>
            </Link>
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 bg-[#FF4747] text-sm text-white w-[40px] flex justify-center items-center rounded-tl-[15px] rounded-br-[15px]">
        <p>-{off}%</p>
      </div>
    </div>
  );
};

export default ProductCard;
