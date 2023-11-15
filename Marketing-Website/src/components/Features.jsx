import React from "react";
import featureicon from "../assets/FeatureIcon.svg"
import features from "./FeaturesData";

const Features  = () => {

    return(
        <div className="flex-col mb-20 mx-16">
            <div className="flex text-center flex-col font-roboto  mb-14">
                <p className="text-teal-600 text-base font-bold leading-28 uppercase">Advantages</p>
                <p className="text-gray-800 font-inter text-4xl font-semibold leading-52 tracking-tight">Benefits of Going Solar</p>
            </div>
            <div className="flex justify-around">
                {features && features.map((item)=>{
                return(
                    <div className="flex-col gap-x-8 w-[341px] text-center px-4 ">
                        <img src={featureicon} className="mb-8 flex mx-auto"/>
                        <p className=" text-blue-500 justify-center text-2xl font-medium leading-normal mb-4">{item.name}</p>
                        <p className="text-justify mb-4 text-lg">{item.description}</p>
                        <p className="text-base font-medium">Learn more</p>
                    </div>
                    )}
                )}
            </div>
        </div>
        )
        }

export default Features