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
    <div className="  flex justify-center">
      <div className="bg-white p-0.5 my-1 md:my-4 rounded-md w-11/12 sm:w-5/12 ">
        <div className="flex justify-center bg-slate-900 py-1 rounded-md ">
          <h1 className="text-yellow-400 text-4xl">Password Generator</h1>
          {/* text-4xl */}
        </div>
        <div className="items-center flex flex-col  bg-black my-0.5 rounded-md ">
          {/*====================== Main Div for working ====================*/}
          {/*============================= Start ============================*/}


            {/* <div className="flex sm:flex-wrap place-items-center w-auto bg-slate-400 flex-shrink "> */}
            <div className="flex items-center w-full px-2 flex-wrap sm:flex-nowrap justify-center">
                <input type="text" className="py-1 my-2 flex w-full" value={generatedPassword} readOnly></input>
                <Button type="button" variant="secondary" onClick={() => generateRandomPassword(rangeValue)} className="mx-1">Generate</Button>
                <Button type="button" variant="secondary" onClick={handleCopyClick} >Copy</Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:mt-0 w-full justify-center items-center text-yellow-400">

              <div className="w-auto justify-center items-center flex mt-2 sm:mt-0 ">
            <input className="flex-grow mx-3 my-2" type="range" min="8" max="30" value = {rangeValue} step="1" onChange={handleRangeChange} ></input>
            <label>{rangeValue}: Length</label>
              </div>

            <div className="flex justify-center items-center w-auto gap-2 ">
            <input type="checkbox" className="h-4 my-2 w-4 flex-shrink" checked={generatedNumeric} onChange={() => setNumeric(!generatedNumeric)}></input>
            <label>Numerics</label>
            <input type="checkbox" className="h-4 my-2 w-4 ml-5 flex-shrink" checked={generatedSpecial} onChange={() => setSpecial(!generatedSpecial)}></input>
            <label>Characters</label>
            </div>
            </div>








          {/*============================== End =============================*/}
          {/*====================== Main Div for working ====================*/}
        </div>
      </div>
    </div>
  );
}

export default PassGenerator;
