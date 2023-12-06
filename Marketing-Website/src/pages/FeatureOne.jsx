import React from "react";
import {Link} from "react-router-dom"
import { useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { fetchData } from "../actions/descriptionSlice";


const FeatureOne= (props) => {
    const {id} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(id));
      },[]);
    
    const feature = useSelector((state) => state.description); 
    if(feature.detailedData!=null){
        return(
        <div className="bg-gray-100 p-5 h-screen mb-12">
            <div className="text-center flex flex-col justify-center shadow-2xl rounded-3xl gap-20 w-[600px] mx-auto my-20 p-16">
                <p className="text-green-500 font-roboto text-3xl font-bold leading-normal" > {feature.detailedData.name}</p>
                <p className="w-[400px] mx-auto font-roboto text-xl font-normal leading-normal">{feature.detailedData.detailedDescription}</p>
                <Link to="/Contact">
                    <button  className=" bg-green-800 rounded p-5 z-10 text-slate-50">Get Quotation</button>
                </Link>
                <Link to="/">
                    <button  className="mx-auto text-center bg-green-800 w-20 rounded p-5 text-slate-50">Back</button>
                </Link>
            </div>
        </div>
    )
        }
}

export default FeatureOne