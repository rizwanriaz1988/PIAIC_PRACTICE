"use client"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TodoList from "./components/status";
import { useState } from "react";
import Newtask from "./components/newtask";
import loading from "../loading";
// import editTask from "./components/editTask";




export default function Todo() {


  const [todoList, setTodoList] = useState("pending");
  const [divVisible, setDivVisible] = useState(false);
  // const [newTask, setNewTask] = useState(false);
  const [rerender, setRerender] = useState(true);
  const [mainSave, setmainSave] = useState(false);


  
  
  return (
    // <div className="flex flex-col items-center justify-center py-16">
    //   <div className="flex flex-col bg-white py-0.5 px-0.5 rounded-md w-2/5">
    //     <div className=" flex items-center justify-center bg-slate-900 py-1 rounded-md">
    <div className="  flex justify-center">
      <div className="bg-white p-0.5 my-1 md:my-4 rounded-md w-11/12 sm:w-5/12 ">
        <div className="flex justify-center bg-slate-900 py-1 rounded-md ">
          <h1 className="text-yellow-400 text-4xl">Todo App</h1>
        </div>
        <div className="flex justify-center flex-col items-center bg-black my-0.5 rounded-md ">
          {/*====================== Main Div for working ====================*/}
          {/*============================= Start ============================*/}
          <div className=" w-full ">
          <Tabs defaultValue={todoList} onValueChange={(value:string) => {setTodoList(value); setDivVisible(false)}} className="w-full text-white py-1 px-1 ">
          <div className="flex justify-between mx-1 flex-shrink">
              <div className="">
                <TabsList className="bg-slate-900 text-white " >
                  <TabsTrigger value="pending" className="bg-slate-900 text-slate-400">Pending</TabsTrigger>
                  <TabsTrigger value="completed" className="bg-slate-900 text-slate-400">Completed</TabsTrigger>
                </TabsList>
              </div>
              <div className="mx-1">
                <Button variant={"secondary"} onClick={() => setmainSave(true)} className=" my-1 bg-green-700 hover:bg-green-700 text-black hover:text-white"> Add Task</Button>
              </div>
          </div>
          {(!mainSave) &&  <div>
            <TabsContent value="pending">
                {/*==========================================================Pending==*/}
              
              {rerender && <TodoList todoList={todoList} />}
            </TabsContent>
            <TabsContent value="completed">
                {/*==========================================================Pending==*/}
                {rerender && <TodoList todoList={todoList} />}
            </TabsContent>
          </div>
          }
          {( mainSave ) && 
            // <Newtask newTaskRender = {()=>setNewTask(true)}/>
            <Newtask main={()=>setmainSave(false)}/>
            // setmainSave(true)
          }
          
          </Tabs>
          </div>
          {/*============================== End =============================*/}
          {/*====================== Main Div for working ====================*/}
        </div>
      </div>
    </div>
  );
}
