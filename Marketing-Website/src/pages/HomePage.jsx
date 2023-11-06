import React from "react";
import solar from '../assets/solar.jpg'
import Navbar from "../components/Navbar";
import FeatureOne from "./FeatureOne";
import { useState } from "react";



const HomePage = () => {
    const [page,setPage]=useState('');
    const handlePage = (e) =>{
        setPage(e.target.value);
        console.log(e.target.value)
    }

    {if(page==='one'){
        return(
            <FeatureOne number={"One"} />
        )
    }
    
    else if(page==='two'){
        return(
            <FeatureOne number={"Two"} />
        )
    }

    else if(page==='three'){
        return(
            <FeatureOne number={"Three"} />
        )
    }

    }

    return(
        <div className="bg-gray-100">
            <Navbar />
            <div className="relative">
                <img src={solar} className="w-[1000px] mx-auto z-0 mt-16 rounded-3xl" />
            </div>
            <br />  
            <br />
                
                <div className="text-center justify-center flex gap-10 mb-20">
                <button className="w-96 h-96 border border-black border-8 rounded-3xl border-cyan-500 hover:scale-110 " value="one" onClick={handlePage}> Feature one </button>
                <button className="w-96 h-96 border border-black border-8 rounded-3xl border-cyan-500 hover:scale-110"  value="two" onClick={handlePage}> Feature two </button>
                <button className="w-96 h-96 border border-black border-8 rounded-3xl border-cyan-500 hover:scale-110"  value="three" onClick={handlePage}> Feature three </button>
                </div>
            <br />
        </div>
    )
}

export default HomePage