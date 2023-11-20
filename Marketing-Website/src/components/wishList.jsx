import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist);
    return(
        <div className="m-16 p-32">
        <p className="text-blue-500 font-roboto text-5xl font-bold leading-normal">Your Wishlist</p>
        {wishlist.map((item, index) => (
            <div key={index} className="w-[750px] rounded-lg flex flex-row p-10 justify-around content-center m-16 shadow-2xl text-blue font-bold ml-32">
              <p className="my-auto text-green-800 font-roboto text-2xl font-normal leading-normal">{item.name}</p>
              <img src={item.url} className="h-24 w-24" />
              <p className="my-auto text-green-500 font-roboto text-3xl font-normal leading-normal">Price: {item.price}</p>
            </div>
          ))}
        </div>
        )

}

export default Wishlist