import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4} from "uuid";
import './Todolist_app.css'


type PrevTodosType = {
  id : string
  name : string
  completed : boolean
}

export default function Top() {
  const navigate = useNavigate();

  const [todos, setTodos] = useState<PrevTodosType[]>([]);
  

  const todoNameRef  = useRef<HTMLInputElement>(null);
  
  const handleAddTodo = () => {
    const name = todoNameRef.current?.value;
    if (name === "" || name === null) return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4() , name: name as string, completed: false}];
    })
    if (todoNameRef.current) {
      todoNameRef.current.value = "";
    }
  };

  const toggleTodo = (id : string) => {
    const newTodos = todos;
    const todo = newTodos.find(( todo : PrevTodosType ) =>  todo.id === id);
    if (todo === undefined) return;
    todo.completed = !todo.completed as boolean;
    setTodos(newTodos); 
    console.log(todo.completed)

  }

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <div>ToDoリスト</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo} >タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
      <button 
        onClick={() => navigate('/')}
      >ログアウト
      </button>
    </div>
  );
}
