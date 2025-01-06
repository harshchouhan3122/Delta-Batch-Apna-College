# React (Imp Commands)
-npm create vite@latest
    project name -> React -> Javascript
-npm install (inside the project folder directory)
-npm run dev (inside the project folder directory) -> To Start the project on Port

-> Imp for React -> Component, Props, States (Imp but confusing), 


## Part 3 (Handeling Event, States, Hook, Callback in Updater Function, Initialize func By reference)

### Handeling Click Events (Important)
    -> Define a function funcName
    -> Use Attribute onClick={funcName}
        -> function greeting = () => {console.log("Hello Guys!")}
        -> <button onClick={greeting}>Click Here</button>
    -> onClick, onDoubleClick, onKeyPress, onKeyDown

    -> Attribute name to target function ->  onKeyPress, onKeyDown, onClick, onDoubleClick (Imp)

### Handeling Non-Click Events
    -> onMouseOver = {funcName}
    -> funcName - handleClick, handleMouseOver, handleDblClick,

### Event Object (Mostly used with Form Submission)     -> Imp
    -> function handleClick(event){ console.log(event) }
    -> event object has some extra info about that action
        -> Create Simple Form to understand preventDefault method of event object
            <form onSubmit={handleFormSubit}> <input> and <button> </form>
        -> event.preventDefault();
            -> Now it will not erase the form after submission
            -> It prevents the default behaviour of Form Submission (Clear Input, )


### State in React (Important)
    -> Our component rendered first in React but when there is a change in component then its not rerender automatically, Hence we have to use state in this case (Counter Update on UI)
    -> props are immutable

    -> React Component reRenders when there is a change in State, Not renders when change occurs in props or components (To Understand it go to Like-Button Activity Below)

    -> The State is a built-in React object that is used to contain data or info about the component. A component's state can be chnge over time; whenever it changes, the component re-renders.

    -> Learn Hooks first then continue it

### Hooks
    -> Hooks were the new addition of React 16.8 (2019)
        -> functional components

    -> They let you use state and other React features without writing a class
    -> Components
        -> Class Components (in Older Version)
        -> Functional Components (define with keyword function)
            -> Preferred

    -> total 15 hooks are present in latest React
    -> Provides More Features
    -> useState(), useEffect()

    -> It can only be defined inside a component itself

### useState()      -> Important
    -> Its a React Hook that lets you add a state variable (UI re-render when state variable changes) to your component.

    -> const [state, setState] = useState(initialState);
        -> useState returns an array with exactly two values (current state, setFunction/ updaterFunction)

    -> We can't use useState directly , Import it first : import { useState } from "react"

    -> Try to create a counter on web using useState() Hook in React

        -> Counter1.jsx (problems in rendering updating value withoust using state)
        -> Counter.jsx (using Hook -> useState)

        -> Create a Like Button Activity

            -> LikeCounter.jsx
                import { useState } from "react";

                export default function LikeCounter() {
                
                    let [count, setCount] = useState(0);

                    function incCount() {
                        setCount(count+1);
                        console.log(`Total Like: ${count+1}`);
                    }

                    return (
                        <div>
                            <h3>Total Likes: {count}</h3>
                            <button onClick={incCount}> Clike here to Like </button>
                        </div>
                    )
                }
    

        -> LikeButton.jsx (Like Button Toggle Mode)
            -> cdn Link for forntAwesome for free icons (heart) -> copy it in head of index.html

                export default function LikeButton() {
                    let [isLiked, setIsLiked] = useState(false);
                    let likeStyle = {color: "red"};

                    function toggleBtn() {
                        setIsLiked(!isLiked);
                    }

                    return (
                        <>
                            <button onClick={toggleBtn}>
                                <i 
                                    className = {isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                    style = {isLiked? likeStyle: {}} >
                                </i>
                            </button>
                        </>
                    )
                }


### Closure in JS
    -> Its a JS based concept where an inner function has access to the outer (enclosing) function's variable
    -> Inner Function can used saperately without calling Ouer function

    -> Example 
        function outer() {
            var b = 10;
            function inner() {
                var a = 20;
                console.log(a+b);
            }
            return inner();
        }

        -> In this case b will be define when outerfunc called, but in JS we can directly call inner() and it can directly use the value of b their without calling outer()


### Re-Render : How Doest it works?
    - whole component is render everytime whenever their is a change in state. (except the stateVariable initialization)
    - value of stateVariable updates during the re-Rendering of the Component


### Callback in Set State Function / Callback in Updater Function 
    -> Updater Function -> which is used to update the stateVariable
        -> StateFunction / Updater Function are Asynchronous Functions

        -> Check the code in Like Button Folder in Counter.jsx

            function incCount() {
                setCount(count+1);
                setCount(count+1);
                setCount(count+1);
                setCount(count+1);
                console.log(count+1);
            }

            -> So it will never increase count by 4 here, because here update function are async in nature
            So, we have to use Callback in this manner to update the counter value based on the previous value

    -> How to change the state when it depends on the current value (works only single time )

        function incCount() {
            setCount( (currCount) => {
                return currCount += 1;
            });
            setCount( (currCount) => {
                return currCount += 1;
            });
        }

        -> It will work sychronously 

### More About State (Important)
    -> Re-Rendering occcurs only when stateVarible's value changes
        -> If you are updateing value as 25 like setCount(25); then it will not re-render because staeVariable has constant value
    
    -> Always pass init function to initialize stateVariable by reference not by calling
        let [num, setNum] = useState(init()) -> Not Prefered -> It will execute everytime whenever coponent will render

        let [num, setNum] = useState(init) -> Singly Executed by React -> It will save Resources



## PART 4 -> ()

### Objects and State (Spread Operator -> Copy Object, Callback Update)
    -> Create LudoBoard.jsx to understand this concept
        -> let [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0})

        -> Initializing values of different entity with the help of object to reduce no. of statevariables
            -> Another Way to do this (Declare statevariables for each object)
                -> let [blueMoves, setBlueMoves] = useState(0)
                -> let [greenMoves, setGreenMoves] = useState(0) and so on

        -> In JS, Whenever we change the values of Array And Object then its reference address will be same, and Hence our component will not reRender because our object and Array is not getting changed.
            -> { blue: 12} -> { blue: 14} -> Refference Add of Object Would be same

        -> We have to create copy (new Address) of previous object everytime
            -> We will use spread operator which copy the object and then react will reRender because previous ddress of the objet will be change this time

            -> Spread Operator in JS (...moves)

        -> Always use callback to update the value when you want to update based on the current value

        let updateBlue = () => {
            console.log(`moves.blue = ${moves.blue}`);
            setMoves((prevMoves) => {
                return { ...prevMoves, blue: prevMoves.blue +1 };
            });
        };

### Arrays and State
    -> -> Must read :https://react.dev/learn/updating-arrays-in-state
    -> When we push element into an Array, It doesn't trigger reRendering
    Because the reference address of the array is not changing 
    -> React doesn't treat this change and Re-Rendering of Component will not be possible with this pushing operations

    -> To resolve this issue we will use spread operator
    
    setArr[...arr, "blue moves"] -> arr = ["no moves"] -> arr = ["no moves", blue moves] 

        let updateBlue = () => {

            setArr((prevArr) => {
                return [...prevArr, "blue"];
            });
        };


### Mini Project -> To Do List using React
-> UI -> Input, Button to Add Task, UL to display tasks
-> States
    -> for storing input value
        let [newTask, setNewTask] = useState("");
    -> for storing array of tasks
        let [taskList, setTaskList] = useState([]);

-> Update Functions
    function updateNewTask(event){
        setNewTask(event.target.value);
    }

    function addNewTask() {
        setTaskList([...taskList, newTask]);
        setNewTask("");
    }

-> ToDoList return Function value as

        <>
            <h1 style={{textDecorationLine: "underline"}}>To Do List</h1>
            
            {/* Input Task */}
            <input type="text" placeholder="Enter Task" onChange={updateNewTask} value={newTask}/>

            {/* Add Task */}
            <button onClick={addNewTask}>Add</button>

            {/* Display Tasks */}       -> It will show some error in console which we will cover in next topic
            <div>
                <ul>{ taskList.map((tasks) => {
                    return <li>{tasks}</li>
                }) }
                </ul>
            </div>
        </>


### Unique Key for list Items (Array of an Object)
    <ul>{ taskList.map((tasks) => {
        return <li>{tasks}</li>
    }) }
    </ul>

    -> React suggests us to keep an key for individual <li> to keep track on it for future manipulation
    -> We can create our own unique id or we can use uuid package of npm which generates unique ids for us
        -> First way -> create own uniuqe key -> we are using index value of it
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        
        -> Another way -> using uuid npm package
            -> npm i uuid
            -> import it in component
            -> call it 

            -> changes needed
            import { v4 as uuidv4 } from 'uuid';

            let [taskList, setTaskList] = useState([{ todo: "sample", id: uuidv4() }]);
            setTaskList([...taskList, { todo: newTask, id: uuidv4() }]);

            <div>
                <ul>
                    {taskList.map((task) => (
                        <li key={task.id}>{task.todo}</li>
                    ))}
                </ul>
            </div>

### Deleting from Arrays ( use Filter() )
-> Callback function will be use -> to send argument to function without executing it
-> Filter method is used to delete value from an Array in React (Important)
    -> This method return a copy of new filtered array

    function deleteTask(id) {
        // console.log(id);
        setTaskList((prevTaskList) => {
            let newTaskList = prevTaskList.filter((prevTasks) => prevTasks.id != id);
            return newTaskList;
        });
    }

    <ul>
        {taskList.map((task) => (
            <li key={task.id}>
                <span>{task.todo}</span> &emsp;
                <button onClick={()=> {deleteTask(task.id)}}>Delete</button>
            </li>
        ))}
    </ul>

### Update All in Array ( .map())
    let upperCaseAll = () => {
        // console.log("UpperCase");
        // let newArr = taskList.map((tasks) => (
        //     {...tasks,
        //     todo: tasks.todo.toUpperCase()}
        // ));
        // console.log(newArr);

        setTaskList( (prevTaskList) => 
            prevTaskList.map((tasks) => ({
                ...tasks,
                todo: tasks.todo.toUpperCase()
            }))
        );
    }

    -> Best to Understand
        function markAll() {

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

### Update One in Array ( use map())
-> We will use id to target element and then return targeted value with change change and others without change
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


### Lottery Game (Homework Activity)
-> LotteryGame.jsx