import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../actions/wishlistActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";



const Features = () => {
  const [products, setProducts] = useState();
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        console.log('Data:', response.data);
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 


  const handleWishlist = (product) => {
    if (wishlist.some((item) => item.name === product.name)) {
      dispatch(removeFromWishlist(product));
    } else {
        if(!isAuthenticated){
            navigate("/Sign-up");
          }
        dispatch(addToWishlist({ ...product, price: product.price,image: product.url }));
    }
  };

  if(products){
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
            <div className="flex w-auto text-center ml-4 border-2 p-8 justify-between gap-x-8 bg-slate-100 rounded-3xl" key={item.id}>
            <img src={item.imageUrl} className="w-24 h-24 my-auto" />
              <p className="flex text-blue-500 justify-center text-2xl font-medium leading-normal my-auto">
                {item.name}
              </p>
              <p className=" flex justify-center my-auto w-[750px] text-lg">{item.description}</p>
              <p className="flex my-auto">Price: {item.price}</p>
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
    }
};

export default Features;

