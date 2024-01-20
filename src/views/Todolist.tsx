import Todo from "./Todo";



const Todolist = (props: any) => {
    return props.todos.map((todo: any) => <Todo todo ={todo} key={todo.id} toggleTodo={props.toggleTodo}/>  ); //todosの中身を取り出して、Todoコンポーネントに渡す
// ユニークキーの設定（todoの見分けを付ける）
};
export default Todolist;