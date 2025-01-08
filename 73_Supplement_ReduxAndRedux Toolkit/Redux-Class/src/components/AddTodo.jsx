import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
    let [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(task);
        dispatch(addTodo(task));        //It will trigger the addTodo reducer in todoSlice.js
        setTask("");
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => setTask(e.target.value)} />
                <button>Add Task</button>
            </form>
        </>
    )
}