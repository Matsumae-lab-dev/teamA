import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4} from "uuid";
import './Todolist_app.css'



export default function Top() {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([ ]);

  const todoNameRef  = useRef<any>(null);

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4() , name: name, completed: false}];
    })
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos ];
    const todo = newTodos.find((todo) =>  todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos); 

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
      <div>残りのタスク{todos.filter((todo) => !todo.completed).length}</div>
      <button 
        onClick={() => navigate('/')}
      >ログアウト
      </button>
    </div>
  );
}
