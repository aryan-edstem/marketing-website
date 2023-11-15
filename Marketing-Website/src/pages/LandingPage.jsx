import React from "react";
import {Link} from "react-router-dom"
import Footer from "../components/Footer";
import ellipse from "../assets/Ellipse5.png"
import customer from "../assets/customer.png"
import Features from "../components/features";
import ChooseUs from "../components/ChooseUs";

const LandingPage = () => {
    return(
        <>
        <div className="relative z-10 ">
            <img src={ellipse} className="absolute top-[200px] left-[20px] overflow-hidden z-0" />
            <div className="flex z-10">
                <div className="flex flex-col mx-auto gap-6 item-center  text-black font-roboto place-content-center z-10 relative">
                    <h1 className=" text-5xl font-semibold leading-16">Switch to Solar Energy Today</h1>
                    <h2 className="text-base h-16 font-medium leading-34">Save money and help the environment</h2>
                    <Link to="/Sign-up">
                        <button className="rounded-[5.145px] bg-blue-500 shadow-md w-[234px] h-[71px] p-[5.145px] text-white font-bold">Get A free quote</button>
                    </Link>
                </div>
                <img src={customer} className="w-[600px] h-[550px] mx-auto z-0 mt-16 mb-16 rounded-3xl" />
            </div>
            <Features />
            <ChooseUs />
            {/* <Link to="/Sign-up">
                    <button  className="absolute  -bottom-40 right-[800px] bg-green-500 rounded-lg p-5 z-10 text-slate-50 text-white font-bold">Sign Up</button>
            </Link> */}
            {/* <Footer /> */}
        </div>
        <div>

        </div>
        </>
    )
}

export default LandingPage