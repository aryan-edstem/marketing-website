import React from "react";
import tick from "../assets/tick.svg";
import { useDispatch , useSelector} from "react-redux";


const ChooseUs  = (props) => {
    const {features}=props;
    console.log(features)
    const dispatch = useDispatch();
    const images =useSelector((state) => state.image);
    if(features){
    return (
        <div className="flex justify-center gap-32">
            <img src={images.data[6].imageUrl} className="rounded-tr-[100px] rounded-bl-[100px] w-[513px] mb-16" />
            <div className="flex flex-col gap-y-4">
                <p className="text-blue-500 font-roboto text-5xl font-bold leading-normal">{features[13].shortDescription}</p>
                <p className="font-roboto text-lg font-medium leading-normal">{features[14].shortDescription}</p>
                <div className="flex justify-between ">
                    <div className="flex flex-col gap-y-6">
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features[15].shortDescription}</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features[16].shortDescription}</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features[17].shortDescription}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features[18].shortDescription}</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features[19].shortDescription}</p>
                        </div>
                        <div className="flex">
                            <img src={tick} className="w-[20px]" />
                            <p>{features[20].shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default ChooseUs