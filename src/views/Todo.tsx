const Todo =(props: any) => {
    const handleTodoClick = () =>{
        props.toggleTodo(props.todo.id);
    }
    return <div>
        <label>
            <input type="checkbox" 
            checked={props.todo.completed}　
            readOnly
            onChange ={handleTodoClick}
            /> 
        </label>
        {props.todo.name}</div>
};
export default Todo;

// completedをtrueかfalsかで完了、未完了を判定