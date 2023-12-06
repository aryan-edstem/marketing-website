import { Link } from "react-router-dom";
import { React } from "react";
import { useSelector } from "react-redux";

const Gallery = (props) => {
  const { features } = props;
  // const images =useSelector((state) => state.image);
  if (features) {
    return (
      <div className="relative">
        <img
          src={features.imageData[4].imageUrl}
          className="w-[1000px] h-[1000px] mx-auto z-0 my-16 rounded-3xl opacity-75 relative"
        />
        <h1 className="absolute top-[200px] right-[600px] text-center font-roboto text-6xl font-medium leading-[72.648px] ">
          Residential Solar{" "}
        </h1>
        <Link to="/Contact">
          <button className="absolute bottom-40 right-[750px] bg-green-500 rounded-lg p-5 z-10 text-white font-bold ">
            Get a Free Quote
          </button>
        </Link>
        <div className="flex gap-5 absolute -bottom-32 right-60">
          <img
            src={features.imageData[1].imageUrl}
            className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125"
          />
          <img
            src={features.imageData[2].imageUrl}
            className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125"
          />
          <img
            src={features.imageData[3].imageUrl}
            className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125"
          />
          <img
            src={features.imageData[5].imageUrl}
            className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125"
          />
        </div>
      </div>
    );
  }
};

export default Gallery;
