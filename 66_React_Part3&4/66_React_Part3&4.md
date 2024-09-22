# React
-npm create vite@latest
    project name -> React -> Javascript
-npm install (inside the project folder directory)
-npm run dev (inside the project folder directory)

## Part 3

### Handeling Click Events (Important)
    -> Define a function funcName
    -> Use Attribute onClick={funcName}
        -> function greeting = () => {console.log("Hello Guys!")}
        -> <button onClick={greeting}>Click Here</button>
    -> onClick, onDoubleClick, onKeyPress, onKeyDown

### Handeling Non-Click Events
    -> onMouseOver = {funcName}
    -> funcName - handleClick, handleMouseOver, handleDblClick

### Event Object
    -> function handleClick(event){ console.log(event) }
    -> event object has some extra info about that action
        -> Create Simple Form to understand preventDefault method of event
        -> event.preventDefault();
            -> Now it will not erase the form after submission

### State in React (Important)
    -> The State is a built-in React object that is used to contain data or info about the component. A component's state can be chnge over time; whenever it changes, the component re-renders.

    -> props are immutable

    -> Learn Hooks first then continue it

### Hooks
    -> Hooks were the new addition of React 16.8
    -> They let you use state and other React features without writing a class
    -> Components
        -> Class Components
        -> Functional Components (define with keyword function)
            -> Preferred
    -> total 15 hooks are present in latest React
    -> Provides More Features
    -> useState(), useEffect()

### useState()
    -> Its a React Hook that lets you add a state variable (UI re-render when state variable changes) to your component.

    -> const [state, setState] = useState(initialState);
        -> useState returns an array with exactly two values(current state, setFunction/ updaterFunction)

    -> Try to create a counter on web using useState() Hook in React
        -> Create a Like Button Activity

    




