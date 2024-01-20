import { useState, useRef } from "react";
import {  useNavigate } from "react-router-dom";
import Todolist from "./Todolist"
import {v4 as uuidv4} from "uuid";





export default function Top() {
    const navigate = useNavigate();
    const [todos, setTodos] = useState<any>([{ id: "1", name: 'todoの追加', completed: false},]);
    
    const todoNameRef =useRef<any>();

    const handleAddTodo =() => {
        //タスクを追加  読み込み

        const name = todoNameRef.current.value;
        const Todos = [...todos];//コピー
        const todo = Todos.find((todo) => todo.name === name);
        
        if( todo){
            setTodos((prevTodos: any) => {

                return [...prevTodos,{id:uuidv4(),name: "同じタスクが存在しています", completed: false} ]
           //　settodos 更新　前のタスクの状態(prevTodos)に今のタスクを追加
            });}

         else{     
        setTodos((prevTodos: any) => {

            return [...prevTodos,{id:uuidv4(),name: name, completed: false} ]
       //　settodos 更新　前のタスクの状態(prevTodos)に今のタスクを追加
        });}
        
        todoNameRef.current.value = null;
    
};

    const toggleTodo = (id:any) => {
        const newTodos = [...todos];//コピー
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    //find todo.name が引数と一致するかどうか
    };

    const handleClear = () =>{
        const newTodos = todos.filter((todo: any) => !todo.completed); //todo :any??
        setTodos(newTodos);
    }
    
    return (
        
        <div className="container">
        <Todolist todos={todos} toggleTodo={toggleTodo}/>
        <input type="text" ref={todoNameRef}/>
        <button onClick={handleAddTodo}>タスクを追加</button>
        <button  onClick={handleClear}>完了したタスクの削除</button>
        <div> 残りのタスク：{todos.filter((todo: any) => !todo.completed).length}</div> 
        <button 
            onClick={() => navigate('/')}
            >ログアウト
        </button>
        </div>
    );
}//チェックが入っているものは無視してその他の量は