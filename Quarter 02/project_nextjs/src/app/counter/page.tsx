"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function counter() {
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
    <div className="flex py-16 justify-center bg-black h-screen w-screen">
      <div className="flex flex-col bg-gray-700 items-center justify-around w-2/6 h-80">
        <div className="text-white  text-4xl ">
          <h1>COUNTER</h1>
        </div>
        <div className="text-white flex items-center flex-col">
          {/* <h1>Counter Value</h1> */}
          <h1 className="text-6xl text-amber-400">{counterState}</h1>
        </div>

        <div className="flex gap-4 py-5 ">
          <Button variant="secondary" onClick={counterSubtract}>
            Decrease
          </Button>
          <Button variant="secondary" onClick={reset}>
            Reset
          </Button>
          <Button variant="secondary" onClick={counterAdd}>
            Increase
          </Button>
        </div>
      </div>
    </div>
  );
}

