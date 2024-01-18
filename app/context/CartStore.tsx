"use client";

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
// import { Product } from "types";

interface Product {
  id: number;
  details: string;
  cPrice: number;
  pPrice: number;
  img: string[];
  off: number;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, type: "increase" | "decrease") => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartStoreProps {
  children: ReactNode;
}

const CartStore = ({ children }: CartStoreProps) => {
  //   state declare
  const [cart, setCart] = useState<Product[]>([]);

  //   add to cart
  const addToCart = (product: Product) => {
    const selectedProduct = cart.find((item) => item.id === product.id);
    if (selectedProduct) {
      toast("Item already have into cart!");
    } else {
      const newProduct = {
        ...product,
        quantity: 1,
        position: cart.length,
      };
      setCart([...cart, newProduct]);
      toast.success("Item added to cart!");
    }
  };

  //   remove from cart
  const removeFromCart = (id: number) => {
    Swal.fire({
      title: "Are you sure want to remove this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const filterCart = cart.filter((item) => item.id !== id);
        setCart(filterCart);
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been removed.",
          icon: "success",
        });
      }
    });
  };

  //   update quantity
  const updateQuantity = (id: number, type: "increase" | "decrease") => {
    const selectedProduct = cart.find((item) => item.id === id);
    if (selectedProduct) {
      if (type === "increase") {
        selectedProduct.quantity = selectedProduct.quantity + 1;
        setCart([...cart]);
      }
      if (type === "decrease" && selectedProduct.quantity > 1) {
        selectedProduct.quantity = selectedProduct.quantity - 1;
        setCart([...cart]);
      }
    }
  };

  // clear cart
  const clearCart = () => {
    Swal.fire({
      title: "Are you sure want to clear cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire({
          title: "Deleted!",
          text: "Your cart is cleared!",
          icon: "success",
        });
      }
    });
  };

  //   initial value
  const value = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartStore;
