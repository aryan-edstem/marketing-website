import axios from "axios";
import React from "react";
import {Link} from "react-router-dom"
import { useEffect,useState } from "react";



const FeatureOne= (props) => {
    const {head,id} = props;
    const [feature, setFeature] = useState()
    useEffect(() => {
        axios.get(`http://localhost:8080/description/detailed/${id}`)
        .then(response => {      
          console.log(response.data);
          setFeature(response.data)
        })    
        .catch(error => {
          console.error('Error:', error);
        });
    }, [])
    
    if(feature){
        return(
        <div className="bg-gray-100">
            <div className="text-center flex flex-col justify-center border border-black border-8 rounded-3xl gap-20 w-[600px] mx-auto my-20 p-16">
                <p className="text-xl" > {head}</p>
                <p className="w-[400px] mx-auto">{feature.detailedDescription}</p>
                <Link to="/Contact">
                    <button  className=" bg-green-800 rounded p-5 z-10 text-slate-50">Contact Us</button>
                </Link>
                
            </div>
        </div>
    )
        }
}

export default FeatureOne