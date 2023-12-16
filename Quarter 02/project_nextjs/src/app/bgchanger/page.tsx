"use client";
import { Button } from "@/components/ui/button"
import { useState } from "react"



function BgChanger() {

    
    const [color,setColor] = useState("black")
    
    return ( 
        <div className="flex flex-col items-center justify-end h-screen w-full bg-slate-200" style={{backgroundColor: color}}>
        <div className="flex gap-5 justify-center bg-slate-900 px-10 py-3 mb-20 rounded-full">
            
        <button onClick = {()=>{setColor("red")}} className="py-1 w-16  font-bold rounded-2xl bg-red-500">Red</button>
        <button onClick = {()=>{setColor("white")}} className="py-1 w-16  font-bold rounded-2xl bg-white">White</button>
        <button onClick = {()=>{setColor("green")}} className="py-1 w-16  font-bold rounded-2xl bg-green-500">Green</button>
        <button onClick = {()=>{setColor("yellow")}} className="py-1 w-16  font-bold rounded-2xl bg-yellow-500">Yellow</button>
        <button onClick = {()=>{setColor("blue")}} className="py-1 w-16  font-bold rounded-2xl bg-blue-500">Blue</button>
        <button onClick = {()=>{setColor("black")}} className="py-1 w-16  font-bold text-white rounded-2xl bg-black">Black</button>
        </div>
        </div>
     )
}
 
export default BgChanger