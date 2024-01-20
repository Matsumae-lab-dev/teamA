import Todo from "./Todo"

type TodoType = {
  completed : boolean
  id : string
  name : string
}

type ToggleTodoType = (id: string) => void

// この記法でmap関数を使う
const TodoList = ({todos , toggleTodo}:{todos : TodoType[] , toggleTodo : ToggleTodoType}) => {
  return (
    todos.map((todo) => <Todo todo = {todo} key={todo.id} toggleTodo = {toggleTodo} />)
  )
}

export default TodoList
