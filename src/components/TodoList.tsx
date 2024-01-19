import Todo from "./Todo"

// interface TodoProps {
//   todos : string;
// };

const TodoList = ({todos, toggleTodo}) => {
  return (
    todos.map((todo) => <Todo todo = {todo} key={todo.id} toggleTodo = {toggleTodo} />)
  )
}

export default TodoList
