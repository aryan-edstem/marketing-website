import React from "react";
import featureicon from "../assets/FeatureIcon.svg"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "../actions/descriptionSlice";


const Features  = (props) => {
    const dispatch=useDispatch();
    const {features} = props
    const [page,setPage]=useState('');
    const handlePage = (e) =>{
        setPage(e.target.value);
    }

    const navigate = useNavigate();
    {if(page==1){
        dispatch(fetchData(1));
        navigate("/1")
    }
    
    else if(page==2){
        dispatch(fetchData(2));
        navigate("/2")
    }

    else if(page==3){
        dispatch(fetchData(3));
        navigate("/3")
    }

    }

    return(
        <div className="flex-col mb-20 mx-16 mt-40">
            <div className="flex text-center flex-col font-roboto  mb-14">
                <p className="text-teal-600 text-base font-bold leading-28 uppercase">{features.featureData[12].shortDescription}</p>
                <p className="text-gray-800 font-inter text-4xl font-semibold leading-52 tracking-tight">{features.featureData[11].shortDescription}</p>
            </div>
            <div className="flex justify-around">
                {features && features.featureData.map((item,index)=>{
                if(item.name){
                return(
                    <div className="flex-col gap-x-8 w-[341px] text-center px-4 " key={index}>
                        <img src={featureicon} className="mb-8 flex mx-auto"/>
                        <p className=" text-blue-500 justify-center text-2xl font-medium leading-normal mb-4">{item.name}</p>
                        <p className="justify-center h-20 mb-4 text-lg">{item.shortDescription}</p>
                        <button onClick={handlePage} value={index+1} className="text-base font-medium">Learn more</button>
                    </div>
                    )}}
                )}
            </div>
        </div>
        )
        }

export default Features