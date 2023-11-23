import React from "react";
import {Link} from "react-router-dom"
import ellipse from "../assets/Ellipse5.png"
import Gallery from "../components/Gallery";
import Features from "../components/features";
import ChooseUs from "../components/ChooseUs";
import { useState,useEffect } from "react";
import axios from "axios";
import { useDispatch , useSelector} from "react-redux";
import { fetchImage } from "../actions/imageAction";

const LandingPage = () => {
    const [feature, setFeature] = useState();
    const dispatch = useDispatch();
    const images =useSelector((state) => state.image);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/description/short');
            console.log('Data:', response.data);
            setFeature(response.data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
        dispatch(fetchImage());
      }, []); 
    if(feature && images){
        return(
        <>
        <div className="relative z-10 ">
            <img src={ellipse} className="absolute top-[200px] left-[20px] overflow-hidden z-0" />
            <div className="flex z-10">
                <div className="flex flex-col mx-auto gap-6 item-center  text-black font-roboto place-content-center z-10 relative">
                    <h1 className=" text-5xl font-semibold leading-16">{feature[8].shortDescription}</h1>
                    <h2 className="text-base h-16 font-medium leading-34">{feature[10].shortDescription}</h2>
                    <Link to="/Contact">
                        <button className="rounded-[5.145px] bg-blue-500 shadow-md w-[234px] h-[71px] p-[5.145px] text-white font-bold">Get A free quote</button>
                    </Link>
                </div>
                <img src={images.data[0].imageUrl} className="w-[600px] h-[550px] mx-auto z-20 overflow-hidden mt-16 mb-16 rounded-3xl" />
            </div>
            <Gallery />
            <Features features={feature}/>
            <ChooseUs features={feature}/>
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
}

export default LandingPage