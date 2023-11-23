import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist);
    const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
    console.log(wishlist);
    if(isAuthenticated){
        return(        
        <div className="m-16 p-32">
        <p className="text-blue-500 font-roboto text-5xl font-bold leading-normal">Your Wishlist</p>
        {wishlist.map((item, index) => (
            <div key={index} className="w-[750px] rounded-lg flex flex-row p-10 justify-around content-center m-16 shadow-2xl text-blue font-bold ml-32">
              <p className="my-auto text-green-800 font-roboto text-2xl font-normal leading-normal">{item.name}</p>
              <img src={item.imageUrl} className="h-24 w-24" />
              <p className="my-auto text-green-500 font-roboto text-3xl font-normal leading-normal">Price: {item.price}</p>
            </div>
          ))}
        </div>
        )
    }
    else{
        return(
            <div className="h-screen p-16" >
                <h1 className=" text-7xl font-bold">Please Login to continue</h1>
                <Link to="/Sign-up">
                    <button  className="rounded-[5.145px] m-32 bg-blue-500 shadow-md w-[234px] h-[71px] p-[5.145px] text-white font-bold">Login</button>
                </Link>
            </div>
        )
    }

}

export default Wishlist