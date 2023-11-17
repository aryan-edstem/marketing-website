import React, { useState } from "react";
import productsData from "./ProductsData";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../actions/wishlistActions";
import Wishlist from "./wishList";

const Features = () => {
  const [products, setProducts] = useState(productsData);
  const [display,setDisplay] = useState(false)
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleWishlist = (product) => {
    if (wishlist.some((item) => item.name === product.name)) {
      dispatch(removeFromWishlist(product));
    } else {
        dispatch(addToWishlist({ ...product, price: product.rate }));
    }
  };


  return (
    <div className="flex-col mb-20 mx-16 mt-40">
      <div className="flex text-center flex-col font-roboto  mb-14">
        <p className="text-gray-800 font-inter text-4xl font-semibold leading-52 tracking-tight">
          Available Products
        </p>
      </div>
      <div className="flex justify-around">
        {products.map((item, index) => {
          return (
            <div className="flex-col gap-x-8 w-[341px] text-center px-4" key={index}>
              <p className=" text-blue-500 justify-center text-2xl font-medium leading-normal mb-4">
                {item.name}
              </p>
              <p className="justify-center  mb-4 text-lg">{item.description}</p>
              <p className="mb-2">Price: {item.rate}</p>
              <button
              onClick={() => handleWishlist(item)}
              className={`text-base font-medium ${
                wishlist.some((w) => w.name === item.name)
                  ? "text-green-500"
                  : "text-blue-500"
              }`}
            >
              {wishlist.some((w) => w.name === item.name)
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;

