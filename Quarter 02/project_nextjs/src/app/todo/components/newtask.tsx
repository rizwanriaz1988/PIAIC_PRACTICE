"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import TodoList from "./status";

interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}
interface todolist_type {
  editData: Todo;
  btnState: boolean;
  onCancel: any;
  // editTask:any;
  btnS: any;
  main: any;
  // rendercmd: () => void
}
export default function Newtask(props?: any) {
  // console.log(props.btnState);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [closediv, setClosediv] = useState(false);

  useEffect(() => {
    setTaskTitle(props.btnState ? props.editData.title : "");
    setTaskDescription(props.btnState ? props.editData.description : "");
  }, [props.btnState, props.editData]);

  // console.log("Newtask rendered");
  ``;
  async function addTask() {
    if (taskTitle) {
      if (props.btnState) {
        try {
          const api_url = `https://json-server-l2cp.onrender.com/todos/${props.editData.id}`;
          await fetch(api_url, {
            method: "PATCH", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: taskTitle,
              description: taskDescription,
            }),
          });
          {
            props.btnS();
          }
          {
            props.onCancel();
          }
        } catch (error) {
          console.error("Error updating todo status:", error);
        }
      } else {
        try {
          const api_url = `https://json-server-l2cp.onrender.com/todos/`;
          await fetch(api_url, {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: taskTitle,
              description: taskDescription,
              completed: "pending",
            }),
          });
          setTaskTitle("");
          setTaskDescription("");

          setClosediv(true);
          {
            props.main();
          }
          // ====================================================
        } catch (error) {
          console.error("Error updating todo status:", error);
        }
      }
    } else {
      alert("Enter Title !!!");
    }
  }

  function action() {
    if (props.btnState) {
      {
        props.onCancel();
      }
    } else {
      {
        props.main();
      }
    }
  }
  return (
    // (closediv &&
    <>
      <div className=" flex flex-col my-4">
        <div className="flex justify-center">
          <input
            type="text"
            onChange={(e) => setTaskTitle(e.target.value)}
            value={taskTitle}
            className=" text-white w-11/12 py-2 px-2 border "
            style={{ backgroundColor: "#0f172a" }}
            placeholder="Enter Task Title"
          />
        </div>
        <div className="flex justify-center my-2">
          <textarea
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
            className=" text-white w-11/12 py-2 px-2 border "
            rows={5}
            style={{ backgroundColor: "#0f172a" }}
            placeholder="Enter Task Description"
          />
        </div>
        <div className="flex justify-center my-2">
          <Button
            variant={"secondary"}
            onClick={addTask}
            className=" my-1 bg-green-700 hover:bg-green-700 text-black hover:text-white px-8"
          >
            {" "}
            Save
          </Button>
          <Button
            variant={"secondary"}
            onClick={action} // Call the onCancel callback
            className="my-1 ml-2 bg-red-700 hover:bg-red-700 text-black hover:text-white px-8"
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
    // )
  );
}
