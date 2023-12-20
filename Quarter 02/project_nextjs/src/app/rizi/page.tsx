import React from "react";

function Lo() {
  return (
    <div className="  flex justify-center">
      <div className="bg-white p-0.5 my-1 md:my-4 rounded-md w-11/12 sm:w-5/12 ">
        <div className="flex justify-center bg-slate-900 py-1 rounded-md ">
          <h1 className="text-yellow-400 text-4xl">Todo App</h1>
        </div>
        <div className="grid grid-cols-1  gap-y-4 p-4 bg-black my-0.5 rounded-md ">
          <div className="flex justify-between animate-pulse">
            <div className="bg-slate-800 w-32 h-9 rounded-md">
            </div>

            <div className="bg-slate-800 w-16 h-9 rounded-md">
            </div>
          </div>



          <div className="w-full p-4  bg-slate-800 rounded-md h-36 animate-pulse">
            <div className=" bg-slate-950 h-10 rounded-md border border-slate-400 animate-pulse"></div>
          </div>  
          <div className="w-full p-4 bg-slate-800 rounded-md h-36 animate-pulse">
            <div className=" bg-slate-950 h-10 rounded-md border border-slate-400 animate-pulse"></div>
          </div>  
          <div className="w-full p-4 bg-slate-800 rounded-md h-36 animate-pulse">
            <div className=" bg-slate-950 h-10 rounded-md border border-slate-400 animate-pulse"></div>
          </div>  
          <div className="w-full p-4 bg-slate-800 rounded-md h-36 animate-pulse">
            <div className=" bg-slate-950 h-10 rounded-md border border-slate-400 animate-pulse"></div>
          </div>  
        
        
        
        </div>
      </div>
    </div>
  );
}

export default Lo;
