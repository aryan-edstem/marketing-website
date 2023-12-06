import React from "react";
import tick from "../assets/tick.svg";
import {useSelector} from "react-redux";


const ChooseUs  = () => {
    // const images =useSelector((state) => state.image);
    const features =useSelector((state) => state.description);
    if(features){
    return (
        <div className="flex justify-center gap-32">
            <img src={features.imageData[6].imageUrl} className="rounded-tr-[100px] rounded-bl-[100px] w-[513px] mb-16" />
            <div className="flex flex-col gap-y-4">
                <p className="text-blue-500 font-roboto text-5xl font-bold leading-normal">{features.featureData[13].shortDescription}</p>
                <p className="font-roboto text-lg font-medium leading-normal">{features.featureData[14].shortDescription}</p>
                <div className="flex justify-between ">
                    <div className="flex flex-col gap-y-6">
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features.featureData[15].shortDescription}</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features.featureData[16].shortDescription}</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features.featureData[17].shortDescription}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features.featureData[18].shortDescription}</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features.featureData[19].shortDescription}</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features.featureData[20].shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default ChooseUs