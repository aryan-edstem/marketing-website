import React from "react";
import { Link } from "react-router-dom";



const Success = () => {
    return(
        <div className=" flex flex-col items-center h-screen justify-center mt-10 w-5/6 h-96 shadow-lg mx-auto">   
            <h1 className="text-green-600 text-center font-roboto text-5xl font-medium leading-[72.648px]">Requirement submitted successfully</h1>
            <h1 className="text-center font-roboto text-xl font-medium leading-[72.648px]">We will get to you soon.</h1>
            <Link to="/">
                    <button  className="bg-green-800 rounded-lg p-5 z-10 text-slate-50">Back to Home</button>
            </Link>
        </div>
    )
}

export default Success