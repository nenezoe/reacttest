import React from "react";
import { useState } from 'react'
const Time=()=>{
    const [time,setTime]=useState();
    
    
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);
    return (
        <>
        <h2>{time}</h2>
       <span>{new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</span></>
    )
}
export default Time;