import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header =() =>{

const [btnName,setbtnName]=useState("login");

const cartItems=useSelector((store)=>store.cart.items);

const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-36"
                src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        online Status:{onlineStatus?"✅":"🔴"}
                    </li>
                    <li className="px-4">
                    <Link to="/"> Home</Link></li>
                    <li className="px-4">
                    <Link to="/about"> About Me</Link>
                    </li>
                    <li className="px-4">
                      <Link to="/contact">  Contact Us</Link> 

                        </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart"> Cart -({cartItems.length} items)</Link>
                        </li>
                    <button className="login" onClick={()=>{
                        btnName=== "login" 
                        ? setbtnName("logout") 
                        
                        : setbtnName("login");
                    }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;