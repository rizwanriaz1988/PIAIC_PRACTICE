"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
function PassGenerator() {
    const [rangeValue, setRangeValue] = useState(12);
    const [generatedPassword, setGeneratedPassword] = useState("");
    const [generatedNumeric, setNumeric] = useState(false);
    const [generatedSpecial, setSpecial] = useState(false);
    const handleRangeChange = (e:any) => {
        setRangeValue(e.target.value);
      };

function generateRandomPassword(rangeValue: number) {
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (generatedNumeric) {
    charset += "0123456789";
}
if (generatedSpecial) {
    charset += "!@#$%^&*()_+";
}
let password = "";
for (let i = 0; i < rangeValue; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
}

setGeneratedPassword(password);
}

const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(generatedPassword);
      alert('Password copied to clipboard!');
    } catch (err) {
      console.error('Unable to copy password to clipboard.', err);
    }
}


  return (
    <div className="flex justify-center bg-black h-screen w-screen py-16">
      <div className="flex flex-col bg-white h-44 w-2/5 py-0.5 px-0.5 rounded-md">
        <div className=" flex items-center justify-center bg-slate-900 py-1 rounded-md">
          <h1 className="text-yellow-400 text-4xl">Password Generator</h1>
        </div>
        <div className="flex justify-center flex-col items-center bg-slate-900 my-0.5 rounded-md h-full">
          {/*====================== Main Div for working ====================*/}
          {/*============================= Start ============================*/}


            <div className="flex place-items-center">
                <input type="text" className="h-8 my-2 w-96 " value={generatedPassword} readOnly></input>
                <Button type="button" variant="secondary" onClick={() => generateRandomPassword(rangeValue)} className="mx-1">Generate</Button>
                <Button type="button" variant="secondary" onClick={handleCopyClick} >Copy</Button>
            </div>
            
            <div className="flex items-center text-yellow-400">
            <input type="range" min="8" max="30" value = {rangeValue} step="1" onChange={handleRangeChange} className=""></input>
            <label>{rangeValue}: Length</label>
            <input type="checkbox" className="h-4 my-2 w-4 mx-1" checked={generatedNumeric} onChange={() => setNumeric(!generatedNumeric)}></input>
            <label>Numerics</label>
            <input type="checkbox" className="h-4 my-2 w-4 mx-1" checked={generatedSpecial} onChange={() => setSpecial(!generatedSpecial)}></input>
            <label>Special Characters</label>
            </div>








          {/*============================== End =============================*/}
          {/*====================== Main Div for working ====================*/}
        </div>
      </div>
    </div>
  );
}

export default PassGenerator;
