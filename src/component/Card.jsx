import React from "react";
import { FaStar } from 'react-icons/fa';

export default function Card({image, }){
    const hours = new Date().getHours()
    return(
        <div className="pt-[22%] pl-32 pb-12">
            <img src={image} className="rounded-s-md h-[45vh] w-full "  />
            <div className="rounded-md h-10 w-32 bg-white absolute mt-[-20.7%] ml-6 text-center">
                <h1 className="p-2">{(props.name).toUpperCase()}</h1>
            </div>
            <div className="flex gap-1">
             <FaStar className="text-[#FE395C] pt-1"/>
             <h1 className="font-semibold">{props.num}<span className="font-normal">({props.num2})-USA</span></h1>
             </div>
             <p>{props.text}</p>
             <h1 className="font-bold">From {props.frw}<span className="font-normal"> / person</span></h1>
        </div>
    )
}