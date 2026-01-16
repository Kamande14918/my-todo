import TodoListItem from "./TodoListItem";
function TodoList({todos}){
    return (
        <ul>
            {todos.map((todo, index) =>{
                return <TodoListItem key={index} todo={todo} />
            })}
        </ul>
    )
}
export default TodoList;