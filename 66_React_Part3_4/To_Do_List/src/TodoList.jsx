import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    let [newTask, setNewTask] = useState("");
    let [taskList, setTaskList] = useState([{ todo: "sample", id: uuidv4(), isDone: false }]);

    function updateNewTask(event){
        setNewTask(event.target.value);
        // console.log(newTask);
    }

    function addTask() {
        setTaskList((prevTaskList) => {
            return [...prevTaskList, { todo: newTask, id: uuidv4(), isDone:false }]
        });
        setNewTask("");
    }

    function deleteTask(id) {
        // console.log(id);
        setTaskList((prevTaskList) => {
            let newTaskList = prevTaskList.filter((prevTasks) => prevTasks.id != id);
            return newTaskList;
        });
    }

    // let upperCaseAll = () => {
    //     setTaskList( (prevTaskList) => 
    //         prevTaskList.map((task) => {
    //             return {
    //                 ...task,
    //                 todo: task.todo.toUpperCase()
    //             }
    //         })
    //     );
    // }

    // let upperCaseOne = (id) => {
    //     setTaskList( (prevTaskList) => 
    //         prevTaskList.map((prevTask) => {
    //             if (prevTask.id == id){
    //                 return {
    //                     ...prevTask,
    //                     todo: prevTask.todo.toUpperCase()
    //                 }
    //             } else {
    //                 return prevTask
    //             }
    //         })
    //     );
        
    // }
    

    function markAll() {
        // console.log(taskList);
        // let newArr = taskList.map((task) => {
        //     return {...task, isDone: true}
        // })
        // console.log(newArr);
        
        // Explicit Return
        // setTaskList ( (prevTaskList) => {
        //     return prevTaskList.map((task) => {
        //         return {
        //             ...task,
        //             isDone: true
        //         }
        //     })
        // })
        
        // Implicit Return Preffered
        setTaskList((prevTaskList) =>
            prevTaskList.map((task) => ({
                ...task,
                isDone: true,
            }))
        );
        
    }

    // function markOne(id) {
    //     setTaskList ( (prevTaskList) => {
    //         return prevTaskList.map( (task) => {
    //             if (task.id == id) {
    //                 return {...task, isDone:true }
    //             } else {
    //                 return {...task}
    //             }
    //         })
    //     })
    // }

    function markOne(id) {
        setTaskList((prevTaskList) =>
            prevTaskList.map((task) =>
                task.id === id ? { ...task, isDone: true } : task
            )
        );
    }




    return (
        <>
            <h1 style={{textDecorationLine: "underline"}}>To Do List</h1>
            
            {/* Input Task */}
            <input type="text" placeholder="Enter Task" onChange={updateNewTask} value={newTask}/>

            {/* Add Task */}
            <button onClick={addTask}>Add</button>

            <hr />

            {/* Display Tasks */}
            {/* using uuid for unique key value */}
            <div>
                <ul>
                    {taskList.map((task) => (
                        <li key={task.id}>
                            <span style={{ textDecorationLine: task.isDone ? "line-through" : "none", color: task.isDone ? "grey" : "black" }}> {task.todo} </span> &emsp;
                            <button onClick={()=> {deleteTask(task.id)}}>Delete</button> &emsp;
                            <button onClick={() => {markOne(task.id)}}>Mark as Done</button>
                            {/* <button onClick={() => {upperCaseOne(task.id)}}>UpperCase It</button> */}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <hr />
                <button onClick={markAll}>Mark All as Done</button>
                {/* <button onClick={upperCaseAll}>UpperCase All</button> */}
            </div>
        </>
    )
}