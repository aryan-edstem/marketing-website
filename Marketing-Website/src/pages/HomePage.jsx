// import React from "react";
// import FeatureOne from "./FeatureOne";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import HomePanel from "../assets/HomePanel.jpeg";
// import HomePanelS1 from "../assets/HomePanelS1.jpeg";
// import HomePanelS2 from "../assets/HomePanelS2.jpeg";
// import HomePanelS3 from "../assets/HomePanelS3.jpeg";
// import HomePanelS4 from "../assets/HomePanelS4.jpeg";





// const HomePage = () => {
//     const [page,setPage]=useState('');
//     const username = useSelector((state) => state.user.username);
//     const handlePage = (e) =>{
//         setPage(e.target.getAttribute('data-value'));
//     }
    
    
//     {if(page==='one'){
//         return(
//             <FeatureOne head="Reduce your electricity bills" id="5"/>
//         )
//     }
    
//     else if(page==='two'){
//         return(
//             <FeatureOne head="Cleaner future for next generations" id="6" />
//         )
//     }

//     else if(page==='three'){
//         return(
//             <FeatureOne head="Reduce your carbon footprints" id="7"/>
//         )
//     }

//     }

//     return(
//         <div className="bg-gray-100 relative">

//             <div>
//                 <h1 className="text-2xl font-bold text-gray-800 mt-8 ml-8">Welcome, {username}!</h1>
//             </div>
//             <div className="relative">
//                 <img src={HomePanel} className="w-[1440px] mx-auto z-0 mt-16 rounded-3xl opacity-50 relative" />
//                 <h1 className="absolute top-[200px] right-[600px] text-center font-roboto text-6xl font-medium leading-[72.648px] ">Residential Solar </h1>
//                 <Link to="/Contact">
//                     <button  className="absolute bottom-40 right-[800px] bg-green-500 rounded-lg p-5 z-10 text-white font-bold ">Contact Us</button>
//                 </Link>
//                 <div className="flex gap-5 absolute -bottom-32 right-64">
//                     <img src={HomePanelS1} className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125" />
//                     <img src={HomePanelS2} className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125" />
//                     <img src={HomePanelS3} className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125" />
//                     <img src={HomePanelS4} className="w-[285px] h-230px border-4 border-solid border-blue-500 bg-cover bg-no-repeat shadow-md hover:scale-125" />

//                 </div>
//             </div>
//             <br />  
//             <br />


//                 <div className="text-center justify-center flex gap-10 mb-48 mt-40 p-8 font-roboto text-2xl font-medium">
//                     <div className="w-64 h-64 p-8 border rounded-3xl shadow-lg hover:scale-110 cursor-pointer hover:pointer" data-value="one" onClick={handlePage}>
//                      Reduce your electricity bills
//                     </div>
//                     <div className="w-64 h-64 p-8 border rounded-3xl shadow-lg hover:scale-110 cursor-pointer hover:pointer"  data-value="two" onClick={handlePage}>
//                         Cleaner future for next generations
//                     </div>
//                     <div className="w-64 h-64 p-8 border   rounded-3xl shadow-lg hover:scale-110 cursor-pointer hover:pointer"  data-value="three" onClick={handlePage}>
//                         Reduce your carbon footprints
//                     </div>
//                 </div>
//             <br />
//             <Link to="/Contact">
//                     <button  className="absolute  bottom-20 right-[800px] bg-green-500 rounded-lg p-5 z-10 font-bold text-white">Get a free quote</button>
//             </Link>
//             {/* <Footer /> */}
//         </div>
//     )
// }

// export default HomePage