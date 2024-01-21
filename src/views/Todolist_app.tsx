import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4} from "uuid";






export default function Top() {





    const navigate = useNavigate();

  //const [todos, setTodos] = useState([ ]);
  const [todos, setTodos] = useState<any>([{ id: "1", name: 'todoの追加', completed: false},]);
  const [open, setOpen] = React.useState(false);
  const close =() => {
    setOpen(false)
}
  const todoNameRef = useRef<any>();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;


    const Todos = [...todos];//コピー
    const todo = Todos.find((todo) => todo.name === name);
    //関数追加　アラート      
    if( todo){
    setOpen(true);
    }
     else{
    setOpen(false);     
    setTodos((prevTodos:any) => {

        return [...prevTodos,{id:uuidv4(),name: name, completed: false} ]
   //　settodos 更新　前のタスクの状態(prevTodos)に今のタスクを追加
    });}




    // if (name === "") return;
    // setTodos((prevTodos) => {
    //   return [...prevTodos, { id: uuidv4() , name: name, completed: false}];
    // })
     todoNameRef.current.value = null;
  };
    
    //const [todos, setTodos] = useState<any>([{ id: "1", name: 'todoの追加', completed: false},]);
    







const toggleTodo = (id: any) => {
    const newTodos = [...todos ];
    const todo = newTodos.find((todo) =>  todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos); 

  }

  const handleClear = () => {
    const newTodos = todos.filter((todo: any) => !todo.completed);
    setTodos(newTodos);
  }


    
    return (
      <div className="container">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <Snackbar
         open={open}
         autoHideDuration={6000}
         onClose={close}
         message="同じタスクが存在しています。"/>

      <button onClick={handleAddTodo} >タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク{todos.filter((todo: any) => !todo.completed).length}</div>
      <button 
        onClick={() => navigate('/')}
      >ログアウト
      </button>
    </div>


         
       
        
    );
}








