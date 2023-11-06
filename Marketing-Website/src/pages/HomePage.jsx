import React from "react";
import solar from '../assets/solar.jpg'
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom"


const HomePage = () => {
    return(
        <div className="bg-gray-100">
            <Navbar />
            <div className="relative">
                <img src={solar} className="w-[1000px] mx-auto z-0 mt-16 rounded-3xl" />
            </div>
            <br />  
            <br />
                <div className="text-center justify-center flex gap-10 mb-20">
                <Link to="/Feature-one"><button className="w-96 h-96 border border-black border-8 rounded-3xl border-cyan-500 hover:scale-110 "> Feature one </button></Link>
                <Link to="/Feature-two"><button className="w-96 h-96 border border-black border-8 rounded-3xl border-cyan-500 hover:scale-110"> Feature two </button></Link>
                <Link to="/Feature-three"><button className="w-96 h-96 border border-black border-8 rounded-3xl border-cyan-500 hover:scale-110"> Feature three </button></Link>
                </div>
            <br />
        </div>
    )
}

export default HomePage