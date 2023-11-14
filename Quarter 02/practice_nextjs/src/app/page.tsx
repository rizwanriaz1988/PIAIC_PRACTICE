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

  return (
    <div className="flex items-center justify-center bg-black h-screen w-screen">

        <div className="flex flex-col bg-gray-500 items-center justify-center w-2/6 h-80">
        <div>
          <h1>Counter Value : {counterState}</h1>
        </div>

        <div className="flex gap-4 py-5">
          <Button variant="secondary" onClick={counterSubtract}>
            Decrease
          </Button>
          <Button variant="secondary" onClick={counterAdd}>
            Increase
          </Button>
        </div>
      </div>

    </div>
  );
}
