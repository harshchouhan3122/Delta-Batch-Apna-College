import { useSelector } from "react-redux"
import AddTodo from "./AddTodo"
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo () {
    const todos = useSelector((state) => state.todos )
    // console.log(todos);

    const dispatch = useDispatch();

    // const delTodo = (id) => {
        // dispatch(deleteTodo(id));        //It will trigger the deleteTodo reducer in todoSlice.js
    // }


    return (
        <>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => {
                    return(
                        <li key={todo.id}> 
                            <span style={{textDecorationLine: todo.isDone ? "line-through" : null}}>{todo.task}</span> &ensp; 
                            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button> &ensp;
                            <button onClick={() => dispatch(markAsDone(todo.id))}>Mark as Done</button>
                        </li>
                    )
                })}
            </ul>

            <AddTodo />
        </>
    )
}