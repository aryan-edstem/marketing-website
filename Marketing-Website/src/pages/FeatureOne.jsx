import React from "react";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom"


const FeatureOne= () => {
    return(
        <div className="bg-gray-100">
            <Navbar />
            <div className="text-center flex flex-col justify-center border border-black border-8 rounded-3xl gap-20 w-[600px] mx-auto my-20 p-16">
                <p className="text-xl" > Feature <b>one</b></p>
                <p className="w-[400px] mx-auto">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <Link to="/Contact">
                    <button  className=" bg-green-800 rounded p-5 z-10 text-slate-50">Contact Us</button>
                </Link>
                
            </div>
        </div>
    )
}

export default FeatureOne