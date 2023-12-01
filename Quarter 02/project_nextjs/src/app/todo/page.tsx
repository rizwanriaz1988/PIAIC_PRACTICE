"use client"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TodoList from "./components/status";
import { useState } from "react";
// import editTask from "./components/editTask";


interface todolist_type {
  editingData: object;
  btnClicked:boolean
}
export default function Todo(props:todolist_type) {

  console.log(props.btnClicked);
  console.log(props.editingData);

  const [todoList, setTodoList] = useState("pending");
  const [divVisible, setDivVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [editbutton, setEditbutton] = useState(true);
  async function addTask() {
    try {
      const api_url = `http://localhost:3001/todos/`;
      await fetch(api_url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: taskTitle,
          description: taskDescription,
          status: "pending",}),
          // After adding the task, you might want to update the state or perform any other necessary actions.
          // For example, clearing the input fields and hiding the new task section.
          
      });
          setTaskTitle("");
          setTaskDescription("");
          setDivVisible(false);
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="flex flex-col bg-white py-0.5 px-0.5 rounded-md w-2/5">
        <div className=" flex items-center justify-center bg-slate-900 py-1 rounded-md">
          <h1 className="text-yellow-400 text-4xl">To Do List</h1>
        </div>
        <div className="flex justify-center flex-col items-center bg-black my-0.5 rounded-md ">
          {/*====================== Main Div for working ====================*/}
          {/*============================= Start ============================*/}
          <div className="w-full ">
          <Tabs defaultValue={todoList} onValueChange={(value:string) => {setTodoList(value); setDivVisible(false)}} className="w-full text-white py-1 px-1 ">
          <div className="flex justify-between">
              <div>
                <TabsList className="bg-slate-900 text-white" >
                  <TabsTrigger value="pending" className="bg-slate-900 text-slate-400">Pending</TabsTrigger>
                  <TabsTrigger value="completed" className="bg-slate-900 text-slate-400">Completed</TabsTrigger>
                </TabsList>
              </div>
              <div className="">
                <Button variant={"secondary"} onClick={() => setDivVisible(true)} className=" my-1 bg-green-700 hover:bg-green-700 text-black hover:text-white"> Add Task</Button>
              </div>
          </div>
          {!divVisible &&  <div>
            <TabsContent value="pending">
                {/*==========================================================Pending==*/}
              
              <TodoList todoList={todoList} />
            </TabsContent>
            <TabsContent value="completed">
                {/*==========================================================Pending==*/}
                <TodoList todoList={todoList} />
            </TabsContent>
          </div>
          }
          {(divVisible ) && 
            <div className=" flex flex-col my-4">
              <div className="flex justify-center">
              <input type="text" onChange={(e) => setTaskTitle(e.target.value)} className=" text-white w-11/12 py-2 px-2 border "  style={{ backgroundColor: '#0f172a' }} placeholder="Enter Task Title" />
              </div>
              <div className="flex justify-center my-2">
              <textarea onChange={(e) => setTaskDescription(e.target.value)} className=" text-white w-11/12 py-2 px-2 border " rows={5} style={{ backgroundColor: '#0f172a' }} placeholder="Enter Task Description" />
              </div>
              <div className="flex justify-center my-2">
              <Button variant={"secondary"} onClick={addTask} className=" my-1 bg-green-700 hover:bg-green-700 text-black hover:text-white px-8"> Save</Button>            
              </div>
             {/* <p>New Task</p>    */}
            </div>

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
