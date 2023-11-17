import React from "react";
import {Link} from "react-router-dom"
import { useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { fetchData } from "../actions/featureAction";
// import { fetchImage } from "../actions/imageAction";




const FeatureOne= (props) => {
    const {head,id} = props;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
  
    // useEffect(() => {
    //   dispatch(fetchImage());
    // }, []);



    useEffect(() => {
        dispatch(fetchData(id));
      },[]);
    
    const feature = useSelector((state) => state.data.data); 

    if(feature){
        return(
        <div className="bg-gray-100 p-5 h-screen">
            <div className="text-center flex flex-col justify-center border border-black border-8 rounded-3xl gap-20 w-[600px] mx-auto my-20 p-16">
                <p className="text-xl" > {feature.name}</p>
                <p className="w-[400px] mx-auto">{feature.detailedDescription}</p>
                <Link to="/Contact">
                    <button  className=" bg-green-800 rounded p-5 z-10 text-slate-50">Get Quotation</button>
                </Link>
                <Link to="/">
                    <button  className="ml-12 text-center bg-green-800 w-20 rounded p-5 text-slate-50">Back</button>
                </Link>
            </div>
        </div>
    )
        }
}

export default FeatureOne