"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Timer() {
  let [timerState, setTimerState] = useState(0);
  let [runningState, setrunningState] = useState(false);
  let [buttonState, setbuttonState] = useState("Start");

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
  }
  function reset() {
    setrunningState(false);
    clearTimeout(timeoutID);
    setTimerState(0);
  }

  return (
    <div className="flex py-16 justify-center bg-black h-screen mx-auto w-screen">
      <div className="flex flex-col bg-gray-700 items-center justify-around mx-auto w-2/6 h-80 ">
        <div className="text-white items-center  mx-auto text-4xl ">
          <h1>TIMER</h1>
        </div>
        <div className="flex items-center mx-auto justify-around flex-col">
          {/* ========================tabs======================== */}
          <Tabs defaultValue="account" className="w-[420px] h-[250px] justify-around mx-auto px-2 py-2 bg-black items-center">
            <TabsList>
              <TabsTrigger value="account">Version 01</TabsTrigger>
              <TabsTrigger value="password">Version 02</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="flex flex-col">
              <div className="text-white flex items-center justify-center mx-auto flex-col my-8">
                <h1 className="text-6xl text-amber-400">{timerState}</h1>
              </div>

              <div className="flex gap-4 justify-center my-2">
                <Button variant="secondary" onClick={() =>
                    (setbuttonState("Stop"), start())
                     }>
                  Start
                </Button>
                <Button variant="secondary" onClick={stop}>
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
                  onClick={() =>
                    buttonState === "Start"
                      ? (setbuttonState("Stop"), start())
                      : (setbuttonState("Start"), stop())
                  }
                >
                  {buttonState}
                </Button>

                <Button
                  variant="secondary"
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
