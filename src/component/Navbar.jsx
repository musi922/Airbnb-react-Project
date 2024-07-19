import React from "react";
import img from '../assets/Airbnb2.png'

export default function Navbar() {
    return (
        <nav className="w-[100%] h-20 flex p-4 shadow-lg">
            <img src={img} />
        </nav>
    )
    
}