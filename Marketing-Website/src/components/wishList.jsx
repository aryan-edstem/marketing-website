import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist);
    return(
        <div className="m-16 p-16">
        {wishlist.map((item, index) => (
            <div key={index} className="w-120 h-120 rounded-lg bg-slate-100 flex flex-row p-10 justify-around m-16 shadow-2xl text-blue font-bold">
              <p>{item.name}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
        )

}

export default Wishlist