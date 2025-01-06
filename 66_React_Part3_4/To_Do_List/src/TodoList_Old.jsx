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

    function addTask() {
        // console.log(`Task to be added: ${task}`);
        // setTaskList([...taskList, newTask]);
        // setNewTask("");
        setTaskList((prevTaskList) => {
            return [...prevTaskList, { todo: newTask, id: uuidv4() }]
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

    let upperCaseAll = () => {
        // console.log("UpperCase");
        // let newArr = taskList.map((tasks) => (
        //     {...tasks,
        //     todo: tasks.todo.toUpperCase()}
        // ));
        // console.log(newArr);

        // setTaskList( (prevTaskList) => 
        //     prevTaskList.map((tasks) => ({
        //         ...tasks,
        //         todo: tasks.todo.toUpperCase()
        //     }))
        // );

        setTaskList( (prevTaskList) => 
            prevTaskList.map((task) => {
                return {
                    ...task,
                    todo: task.todo.toUpperCase()
                }
            })
        );
    }

    let upperCaseOne = (id) => {
        // console.log(id);
        setTaskList( (prevTaskList) => 
            prevTaskList.map((prevTask) => {
                if (prevTask.id == id){
                    return {
                        ...prevTask,
                        todo: prevTask.todo.toUpperCase()
                    }
                } else {
                    return prevTask
                }
            })
        );
        
    }





    return (
        <>
            <h1 style={{textDecorationLine: "underline"}}>To Do List (Old Version)</h1>
            
            {/* Input Task */}
            <input type="text" placeholder="Enter Task" onChange={updateNewTask} value={newTask}/>

            {/* Add Task */}
            <button onClick={addTask}>Add</button>

            {/* Display Tasks */}
            {/* using uuid for unique key value */}
            <div>
                <ul>
                    {taskList.map((task) => (
                        <li key={task.id}>
                            <span>{task.todo}</span> &emsp;
                            <button onClick={()=> {deleteTask(task.id)}}>Delete</button>
                            <button onClick={() => {upperCaseOne(task.id)}}>UpperCase It</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <button onClick={upperCaseAll}>UpperCase All</button>
            </div>
        </>
    )
}