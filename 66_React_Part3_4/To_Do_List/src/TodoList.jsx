import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    // let [newTask, setNewTask] = useState("");
    // let [taskList, setTaskList] = useState([]);
    let [newTask, setNewTask] = useState("");
    let [taskList, setTaskList] = useState([{ todo: "sample", id: uuidv4() }]);

    function updateNewTask(event){
        setNewTask(event.target.value);
        // console.log(newTask);
    }

    function addNewTask() {
        // console.log(`Task to be added: ${task}`);
        // setTaskList([...taskList, newTask]);
        // setNewTask("");
        setTaskList([...taskList, { todo: newTask, id: uuidv4() }]);
        setNewTask("");
    }

    return (
        <>
            <h1 style={{textDecorationLine: "underline"}}>To Do List</h1>
            
            {/* Input Task */}
            <input type="text" placeholder="Enter Task" onChange={updateNewTask} value={newTask}/>

            {/* Add Task */}
            <button onClick={addNewTask}>Add</button>

            {/* Display Tasks */}
            {/* <div>
            <ul>
                {taskList.map((task) => (
                    <li>{task}</li>
                ))}
            </ul>
            </div> */}

            {/* Using index as key value */}
            {/* <div>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            </div> */}

            {/* using uuid for unique key value */}
            <div>
                <ul>
                    {taskList.map((task) => (
                        <li key={task.id}>{task.todo}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}