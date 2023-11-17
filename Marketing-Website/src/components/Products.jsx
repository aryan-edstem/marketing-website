import React, { useState } from "react";
import productsData from "./ProductsData";

const Features = () => {
  const [products, setProducts] = useState(productsData);
  const [wishlist, setWishlist] = useState([]);
  const [display,setDisplay] = useState(false)

  const handleWishlist = (index) => {
    const updatedProducts = [...products];
    const updatedWishlist = [...wishlist];

    updatedProducts[index].wishList = !updatedProducts[index].wishList;
    if (updatedProducts[index].wishList) {
      updatedWishlist.push({
        name: updatedProducts[index].name,
        price: updatedProducts[index].rate,
      });
    } else {
      const productIndex = updatedWishlist.findIndex(
        (item) => item.name === updatedProducts[index].name
      );
      if (productIndex !== -1) {
        updatedWishlist.splice(productIndex, 1);
      }
    }

    setProducts(updatedProducts);
    setWishlist(updatedWishlist);
  };

  const handleDisplayWishList = () =>
  {
    setDisplay(true)
  }

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
                onClick={() => handleWishlist(index)}
                className={`text-base font-medium ${
                  item.wishList ? "text-green-500" : "text-blue-500"
                }`}
              >
                {item.wishList ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={handleDisplayWishList} className="mt-12 mx-auto bg-green-500 rounded-lg p-5 z-10 text-slate-50 text-white font-bold">Wishlist</button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Wishlist:</h2>
        {display && wishlist.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Features;

