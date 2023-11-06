import React from "react";
import solar from '../assets/solar.jpg'
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom"


const LandingPage = () => {
    return(
        <div className="bg-gray-100">
            <Navbar />
            <div className="relative">
                <img src={solar} className="w-[1000px] mx-auto z-0 mt-16 rounded-3xl" />
                <Link to="/Sign-up">
                    <button  className="absolute top-[500px] right-[800px] bg-green-800 rounded-lg p-5 z-10 text-slate-50">Sign Up</button>
                </Link>
            </div>

        </div>
    )
}

export default LandingPage