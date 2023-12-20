"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Timer() {
  let [timerState, setTimerState] = useState(0);
  let [runningState, setrunningState] = useState(false);
  let [buttonState, setbuttonState] = useState("Start");
  const [color,setColor]=useState("green")

  let timeoutID: any;
  useEffect(() => {
    if (runningState) {
      timeoutID = setTimeout(() => {
        setTimerState((prevState) => prevState + 1);
      }, 1000);
    }
  }, [runningState, timerState]);
  function start() {
    setrunningState(true);
  }
  function stop() {
    setrunningState(false);
    clearTimeout(timeoutID);
    setbuttonState("Start")
    setColor("green")
  }
  function reset() {
    setrunningState(false);
    clearTimeout(timeoutID);
    setTimerState(0);
  }

  return (
    <div className="  flex justify-center">
      <div className="bg-white p-0.5 my-1 md:my-4 rounded-md w-11/12 sm:w-4/12 ">
        <div className="flex justify-center bg-slate-900 py-1 rounded-md ">
          <h1 className="text-yellow-400 text-4xl">TIMER</h1>
        </div>
        {/* <div className="flex justify-center flex-col items-center bg-slate-400 my-0.5 rounded-md "> */}
        <div className="my-0.5 ">
          {/* ========================tabs======================== */}
          {/* <Tabs defaultValue="account" className="flex-grow justify-around  px-2 py-2 bg-slate-900 items-center"> */}
          <Tabs defaultValue="account" className="flex-grow justify-around  px-2 py-2 bg-black items-center rounded-md">
            <TabsList className="bg-slate-900 text-white ">
              <TabsTrigger value="account" className="bg-slate-900 text-slate-400">Version 01</TabsTrigger>
              <TabsTrigger value="password" className="bg-slate-900 text-slate-400">Version 02</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="flex flex-col">
              <div className="text-white flex items-center justify-center mx-auto flex-col my-8">
                <h1 className="text-6xl text-amber-400">{timerState}</h1>
              </div>

              <div className="flex gap-4 justify-center my-2">
                <Button variant="secondary" className="bg-green-500" onClick={() =>
                    (setbuttonState("Stop"), start(),setColor("red"))
                     }>
                  Start
                </Button>
                <Button variant="secondary" className="bg-red-500" onClick={stop}>
                  Stop
                </Button>
                <Button variant="secondary" onClick={reset}>
                  Reset
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="password" className="flex flex-col">
              <div className="text-white flex items-center justify-center mx-auto flex-col my-6">
                <h1 className="text-6xl text-amber-400">{timerState}</h1>
              </div>

              <div className="flex gap-4 justify-center my-4">
                <Button
                  variant="secondary"
                  className={`bg-${color}-500`}
                  onClick={() =>
                    buttonState === "Start"
                      ? (setbuttonState("Stop"), start(),setColor("red"))
                      : (setbuttonState("Start"), stop(),setColor("green"))
                  }
                >
                  {buttonState}
                </Button>

                <Button
                  variant="secondary"
                  className={``}
                  onClick={() => (reset(), setbuttonState("Start"))}
                >
                  Reset
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
