import React from "react";
import {Link} from "react-router-dom"
import ellipse from "../assets/Ellipse5.png"
import Gallery from "../components/Gallery";
import Features from "../components/features";
import ChooseUs from "../components/ChooseUs";;
import {useSelector} from "react-redux";


const LandingPage = () => {
    const features =useSelector((state) => state.description);
    if(features.featureData!=null && features.imageData!=null){
        return(
        <>
        <div className="relative z-10 ">
            <img src={ellipse} className="absolute top-[200px] left-[20px] overflow-hidden z-0" />
            <div className="flex z-10">
                <div className="flex flex-col mx-auto gap-6 item-center  text-black font-roboto place-content-center z-10 relative">
                    <h1 className=" text-5xl font-semibold leading-16">{features.featureData[8].shortDescription}</h1>
                    <h2 className="text-base h-16 font-medium leading-34">{features.featureData[10].shortDescription}</h2>
                    <Link to="/Contact">
                        <button className="rounded-[5.145px] bg-blue-500 shadow-md w-[234px] h-[71px] p-[5.145px] text-white font-bold">Get A free quote</button>
                    </Link>
                </div>
                <img src={features.imageData[0].imageUrl} className="w-[600px] h-[550px] mx-auto z-20 overflow-hidden mt-16 mb-16 rounded-3xl" />
            </div>
            <Gallery/>
            <Features features={features} />
            <ChooseUs/>
        </div>
        <div>

        </div>
        </>
    )
    }
}

export default LandingPage