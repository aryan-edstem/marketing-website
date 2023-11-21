import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
// import axios from "axios";
import { useDispatch , useSelector} from "react-redux";


const Gallery =(props) => {
    const {images}=props
    // const [images, setImages] = useState()
    // const dispatch = useDispatch();
    // setImages(useSelector((state) => state.image));
  
    // useEffect(() => {
    //   // Fetch the image data when the component mounts
    //   dispatch(fetchImage());
    // }, []);

    // // useEffect(() => {
    // //     const fetchData = async () => {
    // //       try {
    // //         const response = await axios.get('http://localhost:8080/image');
    // //         setImages(response.data)
    // //         console.log(response.data)
    // //       } catch (error) {
    // //         console.error('Error fetching data:', error);
    // //       }
    // //     };
    // //     fetchData();
    // //   }, []); 
    
    if(images){ 
    return(
    <div className="relative">
    <img src={images[4].imageUrl} className="w-[1000px] h-[1000px] mx-auto z-0 my-16 rounded-3xl opacity-75 relative" />
    <h1 className="absolute top-[200px] right-[600px] text-center font-roboto text-6xl font-medium leading-[72.648px] ">Residential Solar </h1>
    <Link to="/Contact">
        <button  className="absolute bottom-40 right-[800px] bg-green-500 rounded-lg p-5 z-10 text-white font-bold ">Get a Free Quote</button>
    </Link>
    <div className="flex gap-5 absolute -bottom-32 right-64">
        <img src={images[1].imageUrl} className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125" />
        <img src={images[2].imageUrl} className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125" />
        <img src={images[3].imageUrl} className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125" />
        <img src={images[5].imageUrl} className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125" />

    </div>
    </div>
    )
    }
}

export default Gallery