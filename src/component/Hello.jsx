import React from "react";
import img from '../assets/Group 77.png'

export default function Hello() {
    return (
        <div className="h-[50vh] w-full pl-80 pt-6 ">
            <img src={img} className="w-[66%]"/>
            <h1 className="font-bold text-4xl">Online Experience</h1>
            <p className="font-light w-96 text-xl pt-4">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )    
}