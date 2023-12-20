"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function Counter() {
  let [counterState, setCounterState] = useState(0);

  const counterAdd = () => {
    console.log(counterState + 1);
    setCounterState((prevState: number) => prevState + 1);
  };
  function counterSubtract() {
    console.log(counterState - 1);
    setCounterState((prevState: number) => prevState - 1);
  }
  function reset() {
    setCounterState(0);
  }

  return (
    <div className="  flex justify-center">
      <div className="bg-white p-0.5 my-1 md:my-4 rounded-md w-11/12 sm:w-4/12 ">
        <div className="flex justify-center bg-slate-900 py-1 rounded-md ">
          <h1 className="text-yellow-400 text-4xl">COUNTER</h1>
        </div>
        <div className="bg-black my-0.5 rounded-md">
        <div className="flex justify-center py-5">
          {/* <h1>Counter Value</h1> */}
          <h1 className="text-6xl text-amber-400">{counterState}</h1>
        </div>

        <div className="flex flex-wrap gap-4 py-5 justify-center">
          <Button variant="secondary" className="w-20 bg-red-500" onClick={counterSubtract}>
            Decrease
          </Button>
          <Button variant="secondary" onClick={reset}>
            Reset
          </Button>
          <Button variant="secondary" className="w-20 bg-green-500" onClick={counterAdd}>
            Increase
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}

