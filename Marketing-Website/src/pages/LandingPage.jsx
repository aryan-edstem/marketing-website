import React from "react";
import solar from '../assets/solar.jpg'
import {Link} from "react-router-dom"
import Footer from "../components/Footer";
import ellipse from "../assets/Ellipse5.png"

const LandingPage = () => {
    return(
        <div className="relative z-10 ">
            {/* <div className="relative">
                <img src={solar} className="w-[1000px] mx-auto z-0 mt-16 rounded-3xl" />
                <Link to="/Sign-up">
                    <button  className="absolute top-[500px] right-[800px] bg-green-800 rounded-lg p-5 z-10 text-slate-50">Sign Up</button>
                </Link>
            </div> */}
            <img src={ellipse} className="absolute top-[200px] left-[20px] overflow-hidden z-0" />
            <div className="flex z-10">
                <div className="flex flex-col mx-auto gap-16 item-center  text-black font-roboto place-content-center z-10 relative">
                    <h1 className=" text-4xl font-extrabold leading-65">Switch to Solar Energy Today</h1>
                    <h2 className="text-base font-medium leading-34">Save money and help the environment</h2>
                    <Link to="/Sign-up">
                        <button className="rounded-[5.145px] bg-blue-500 shadow-md w-[234px] h-[71px] py-[5.145px] px-[5.145px] text-white font-bold">Get A free quote</button>
                    </Link>
                </div>
                <img src={solar} className="w-[500px] mx-auto z-0 mt-16 mb-16 rounded-3xl" />

            </div>
            <Link to="/Sign-up">
                    <button  className="absolute  -bottom-40 right-[800px] bg-green-500 rounded-lg p-5 z-10 text-slate-50 text-white font-bold">Sign Up</button>
            </Link>
            <Footer />

        </div>
    )
}

export default LandingPage