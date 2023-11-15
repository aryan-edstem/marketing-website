import React from "react";
import us from "../assets/HomePanelS3.jpeg";
import tick from "../assets/tick.svg"

const ChooseUs  = () => {

    return (
        <div className="flex justify-center gap-32">
            <img src={us} className="rounded-tr-[100px] rounded-bl-[100px] w-[513px] mb-16" />
            <div className="flex flex-col gap-y-4">
                <p className="text-blue-500 font-roboto text-5xl font-bold leading-normal">Why choose Us?</p>
                <p className="font-roboto text-lg font-medium leading-normal">Creating quality urban lifestyles,building stronger communities</p>
                <div className="flex justify-between ">
                    <div className="flex flex-col gap-y-6">
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>Experienced</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>Reliable</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>Sustainable</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>Affordable</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>Customizable</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>Trustworthy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ChooseUs