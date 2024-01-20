//Todoリストのタスク状況を管理

type TodoType = {
  completed : boolean
  id : string
  name : string
}

type ToggleTodoType = (id: string) => void

const Todo = ({todo, toggleTodo}:{todo: TodoType, toggleTodo:ToggleTodoType}) => {
  return (
    <div>
        <label >
            <input 
                type="checkbox" 
                onChange={() => toggleTodo(todo.id)}
                />
        </label>
        {todo.name}
    </div>
  )
}

export default Todo