import React, { useState } from "react";
import productsData from "./ProductsData";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../actions/wishlistActions";
import Success from "../pages/Succes";
import SignUpPage from "../pages/SignUpPage";


const Features = () => {
  const [products, setProducts] = useState(productsData);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleWishlist = (product) => {
    if (wishlist.some((item) => item.name === product.name)) {
      dispatch(removeFromWishlist(product));
    } else {
        if(wishlist==''){
            return(
                <SignUpPage />
            )
        }
        dispatch(addToWishlist({ ...product, price: product.rate,image: product.url }));
    }
  };


  return (
    <div className="flex-col mb-20 mx-8 mt-20">
      <div className="flex text-center flex-col font-roboto  mb-14">
        <p className="text-gray-800 font-inter text-4xl font-semibold leading-52 tracking-tight">
          Available Products
        </p>
      </div>
      <div className="flex flex-col gap-y-8 ">
        {products.map((item, index) => {
          return (
            <div className="flex w-auto text-center ml-4 border-2 p-8 justify-between gap-x-8 bg-slate-100 rounded-3xl" key={index}>
            <img src={item.url} className="w-24 h-24 my-auto" />
              <p className="flex text-blue-500 justify-center text-2xl font-medium leading-normal my-auto">
                {item.name}
              </p>
              <p className=" flex justify-center my-auto w-[750px] text-lg">{item.description}</p>
              <p className="flex my-auto">Price: {item.rate}</p>
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
