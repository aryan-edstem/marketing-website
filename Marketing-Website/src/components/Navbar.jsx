import React from "react";
import Logo from '../assets/logo.svg';
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";


const Navbar = () => {
    const username = useSelector((state) => state.user.username);
    return(
        <div>
            <div className="h-20 bg-gray-800 flex justify-between content-center  p-5">
                <Link to="/">
                    <img src={Logo} className="h-10 ml-10"/>
                </Link>
                <div className="flex gap-20 justify-center  mr-20">
                    <Link to="/contact">
                        <h1 className="text-slate-100 ">Contact Us</h1>
                    </Link>
                    <Link to="/home">
                        <h1 className="text-slate-100">Home</h1>
                    </Link>
                    <div>
                        <h1 className="text-slate-100">{username}</h1>
                    </div>
                </div>
            </div>
        </div>
        )
        }

export default Navbar