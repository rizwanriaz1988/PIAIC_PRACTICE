"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Todo from "../page";
import Newtask from "./newtask";

interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

interface todolist_type {
  todoList: string;
}
let data: any;
const TodoList = (props: todolist_type) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [btnState, setbtnState] = useState<boolean>(false);
  const [btnId, setbtnId] = useState<number>();
  const [editData, seteditData] = useState<Todo>({
    title: "",
    description: "",
    status: false,
    id: 0,
  });
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [btnSave, setBtnSave] = useState(true);
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);

  const [morebutton, setmorebutton] = useState("see more");
  const descriptionRef = useRef<any>([null]);

  const [overflowStatus, setOverflowStatus] = useState<{
    [key: number]: boolean;
  }>({});

  const [moreButtons, setMoreButtons] = useState<{ [key: number]: boolean }>(
    {}
  );

  const fetchData = async () => {
    const api_url = "http://localhost:3001/todos";
    try {
      const response = await fetch(api_url); // Fetch data from the API route
      data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    if (btnSave) {
      fetchData();
      console.log("Date is fetched");
      setBtnSave(false);
    }
  }, [btnSave]);

  const todostatus = async (todoId: number, markAsComplete: boolean) => {
    const updatedTodos = todos.map((todo) =>
      // todo.id === todoId ? { ...todo, completed: markAsComplete } : todo
      todo.id === todoId ? { ...todo, status: markAsComplete } : todo
    );

    setTodos(updatedTodos);
    try {
      const api_url = `http://localhost:3001/todos/${todoId}`;
      await fetch(api_url, {
        method: "PATCH", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: markAsComplete }),
      });
    } catch (error) {
      console.error("Error updating todo status:", error);
    }
  };
  //delete task
  const deleteTask = async (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
    try {
      const api_url = `http://localhost:3001/todos/${todoId}`;
      await fetch(api_url, {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error updating todo status:", error);
    }
  };
  const editTask = async (todoId: number) => {
    let forEditing: any;

    try {
      const api_url = `http://localhost:3001/todos/${todoId}`;
      const response = await fetch(api_url);
      forEditing = await response.json();
    } catch (error) {
      console.error("Error updating todo status:", error);
    }
    // return forEditing
    console.log("forEditing:", forEditing);
    setbtnState(true);
    seteditData(forEditing);
    setbtnId(todoId);
    setFormVisible(true);
  };

  function activeSeemore(todoId: number) {
    setMoreButtons((prevButtons) => ({
      ...prevButtons,
      [todoId]: !prevButtons[todoId],
    }));
  }

  useEffect(() => {
    todos.map((todo) => {
      const descriptionElement = descriptionRef.current[todo.id];
      console.log(
        "🚀 ~ file: status.tsx:146 ~ todos.map ~ descriptionElement:",
        descriptionElement
      );
      if (descriptionElement) {
        const overflowed =
          descriptionElement.scrollHeight > descriptionElement.clientHeight;
        setIsOverflowed(overflowed);
        setOverflowStatus((prevStatus) => ({
          ...prevStatus,
          [todo.id]: overflowed,
        }));
        console.log(
          "🚀 ~ file: status.tsx:156 ~ todos.map ~ overflowed:",
          overflowed
        );
        console.log("scroll", descriptionElement.scrollHeight);
        console.log("client", descriptionElement.clientHeight);
      } else {
        console.log("Element not found");
      }
    });
  }, [todos]);

  return (
    <div>
      <div>
        {Array.isArray(todos) &&
        todos.length > 0 &&
        props.todoList === "pending" ? (
          todos.map(
            (todo) =>
              !todo.status && (
                <div key={todo.id} className="py-2">
                  {/* ======================================show of edit inline */}
                  {btnState && btnId === todo.id && formVisible ? (
                    <Newtask
                      btnS={() => setBtnSave(true)}
                      btnState={btnState}
                      editData={editData}
                      onCancel={() => {
                        setFormVisible(false);
                      }}
                    />
                  ) : (
                    //use effect for showing see more button
                    <div className="bg-slate-800 ">
                      <div className="px-2">
                        <h3 className="break-words">{todo.title}</h3>

                        <p
                          ref={(el) => (descriptionRef.current[todo.id] = el!)}
                          className={`break-words ${
                            moreButtons[todo.id] ? "" : "line-clamp-2"
                          }`}
                        >
                          {todo.description}
                        </p>

                        {overflowStatus[todo.id] && (
                          <div className="my-2 text-xs  text-blue-800 hover:text-blue-500  flex justify-end">
                            <button
                              className="ml-4"
                              onClick={() => activeSeemore(todo.id)}
                            >
                              {moreButtons[todo.id] ? "see less" : "see more"}
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="flex items-center ml-2  py-1">
                          <button onClick={() => deleteTask(todo.id)}>
                            <RiDeleteBinLine className="h-4 w-4  text-red-500 hover:text-red-600" />
                          </button>
                          <button onClick={() => editTask(todo.id)}>
                            <FiEdit className="h-4 w-4 mx-2  text-red-500 hover:text-red-600" />
                          </button>
                        </div>
                        <Button
                          variant="default"
                          onClick={() => todostatus(todo.id, true)}
                          className="bg-green-700 hover:bg-green-700  text-black hover:text-white rounded-none "
                        >
                          Completed
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )
          )
        ) : Array.isArray(todos) &&
          todos.length > 0 &&
          props.todoList === "completed" ? (
          todos.map(
            (todo) =>
              todo.status && (
                <div key={todo.id} className="py-2">
                  {/* ======================================show of edit inline */}

                  {btnState && btnId === todo.id && formVisible ? (
                    <Newtask
                      btnS={() => setBtnSave(true)}
                      btnState={btnState}
                      editData={editData}
                      onCancel={() => {
                        setFormVisible(false);
                      }}
                    />
                  ) : (
                    <div className="bg-slate-800 ">
                      <div className="px-2">
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="flex items-center ml-2  py-1">
                          <button onClick={() => deleteTask(todo.id)}>
                            <RiDeleteBinLine className="h-4 w-4  text-red-500 hover:text-red-600" />
                          </button>
                          <button onClick={() => editTask(todo.id)}>
                            <FiEdit className="h-4 w-4 mx-2  text-red-500 hover:text-red-600" />
                          </button>
                        </div>
                        <Button
                          variant="default"
                          onClick={() => todostatus(todo.id, false)}
                          className="bg-red-700 hover:bg-red-700  text-black hover:text-white rounded-none "
                        >
                          To Do
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )
          )
        ) : (
          <p>No Task Exist</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
