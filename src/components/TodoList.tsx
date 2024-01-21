
import Todo from "./Todo"

// interface TodoProps {
//   todos : string;
// };

const TodoList = (props:any) => {
  return (
    props.todos.map((todo:any) => <Todo todo = {todo} key={todo.id} toggleTodo = {props.toggleTodo} />)
  )
}

export default TodoList
