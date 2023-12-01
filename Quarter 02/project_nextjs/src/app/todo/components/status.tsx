'use client';
import { Button } from '@/components/ui/button';
import { SetStateAction, useEffect, useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { RiDeleteBinLine  } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { title } from 'process';
import Todo from '../page';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface todolist_type {
  todoList: string;
}
let data ;
const TodoList = (props:todolist_type) => {

  console.log(props.todoList);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [btnState, setbtnState] = useState<boolean>(false);
  const [editData, seteditData] = useState<object>({});
  

    useEffect(() => {
      const fetchData = async () => {
        const api_url = "http://localhost:3001/todos" 
        try {
          const response = await fetch(api_url); // Fetch data from the API route
          data = await response.json();
          // console.log(data);
          setTodos(data);
        } catch (error) {
          console.error('Error fetching todos:', error);
        }
      };
  
    fetchData();
  }, []);
  
  const  todostatus = async (todoId: number, markAsComplete: boolean) => {


    const updatedTodos = todos.map((todo) =>
    // todo.id === todoId ? { ...todo, completed: markAsComplete } : todo
      todo.id === todoId ? { ...todo, completed: markAsComplete } : todo
    );

    setTodos(updatedTodos);

    try {
      const api_url = `http://localhost:3001/todos/${todoId}`;
      await fetch(api_url, {
        method: 'PATCH', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: markAsComplete }),
      });
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  };
//delete task
  const deleteTask = async (todoId: number) => {

    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);

    try {
      const api_url = `http://localhost:3001/todos/${todoId}`;
      await fetch(api_url, {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error updating todo status:', error);
    }

  }
   const editTask = async (todoId: number) => {
    let forEditing: any ;

    try {
      const api_url = `http://localhost:3001/todos/${todoId}`;
      const response = await fetch(api_url);
      // console.log(response.description);
      forEditing = await response.json();
      // console.log("err:" , forEditing);
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
    // return forEditing
    setbtnState(true)
    seteditData(forEditing)
  }
  
  return (
    <div>
      
      <div>
      {btnState && <Todo editingData={editData} btnClicked={btnState} />}
        {Array.isArray(todos) && todos.length > 0 && props.todoList === 'pending' ? (
          todos.map((todo) => (
            !todo.completed && (
              <div key={todo.id} className='py-2'>
              <div className="bg-slate-800 "> 
              <div className='px-2'>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              </div>
              <div className='flex justify-between items-end'>
                <div className='flex items-center ml-2  py-1' >
              <button onClick={() => deleteTask(todo.id)}>
              <RiDeleteBinLine  className='h-4 w-4  text-red-500 hover:text-red-600'  />
              </button>
              <button onClick={() =>editTask(todo.id)}>
              <FiEdit className='h-4 w-4 mx-2  text-red-500 hover:text-red-600' />
              </button  >
                </div>
              <Button variant='default' onClick={() => todostatus(todo.id,true)} className='bg-green-700 hover:bg-green-700  text-black hover:text-white rounded-none ' >Mark As Complete</Button>
              </div>
              </div>
            </div>
            )
            ))
        ) :((Array.isArray(todos) && todos.length > 0 && props.todoList === 'completed')?
          (
            todos.map((todo) => (
              todo.completed && (
                <div key={todo.id} className='py-2'>
                <div className="bg-slate-800 "> 
                <div className='px-2'>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                </div>
                <div className='flex justify-end'>
                <Button variant='default' onClick={() => todostatus(todo.id,false)} className='bg-red-700 hover:bg-red-700 text-black hover:text-white rounded-none' >Mark As Incomplete</Button>
                </div>
                </div>
              </div>
              )
            ))
          ):(
            <p>No Task Exist</p>
          )
        ) 
        }
      </div>
    </div>
  );
};

export default TodoList;

