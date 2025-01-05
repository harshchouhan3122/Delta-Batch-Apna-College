# React (Imp Commands)
-npm create vite@latest
    project name -> React -> Javascript
-npm install (inside the project folder directory)
-npm run dev (inside the project folder directory) -> To Start the project on Port

-> Imp for React -> Component, Props, States (Imp but confusing), 


## Part 3 (Handeling Event, States, Hook)

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



