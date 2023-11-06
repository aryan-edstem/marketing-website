import React from "react";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom"

const FeatureThree= () => {
    return(
        <div className="bg-gray-100">
            <Navbar />
                <h1> Feature <b>Three</b></h1>
                <Link to="/Contact">
                    <button  className="absolute top-[400px] right-[800px] bg-green-800 rounded p-5 z-10 text-slate-50">Contact Us</button>
                </Link>
        </div>
    )
}

export default FeatureThree