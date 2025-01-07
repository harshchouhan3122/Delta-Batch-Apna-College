# React (Imp Commands)
-npm create vite@latest
    project name -> React -> Javascript
-npm install (inside the project folder directory)
-npm run dev (inside the project folder directory) -> To Start the project on Port

-> Imp for React -> Component, Props, States (Imp but confusing), Events

-> Other Important Theory
    -> Design Principal of React 
        -> State Design Pattern (Lifting State Up) -> https://react.dev/learn/sharing-state-between-components




## Part 5 (Design Principal of React, Lottery Game v2)

### Lottery Game
-> Use array of size 3 as stateVariable which have value of ticket (random 3 digits)

-> Component Decomposition
    -> Distribute chunks of components (Currently we have designed a single component for Lottery Game in prev Folder)

-> Design Related Changes (Code Flexibility -> think before designing our components)

-> App
    -> Lottery (stateArr)
        -> Tickets
            -> Ticket Num 1
            -> Ticket Num 2
            -> Ticket Num 3

-> NOTE: We can't pass stateVariable/ any info to upper hirarchy in react (Like App can pass it to Lottery but not vice versa) -> using props

-> Component Types
    -> Funtional Comp
    -> Class Components

-> Another type of Components
    -> Presentational Components (Dumb/ Only for UI/ Not having stateVariables/ Use Info by props)
        -> TicketNum Component
        -> Ticket Component
        
    -> Logical Components (Smart/ having stateVariables)
        -> Lottery Component

-> Always think for state, prop, event for each components first and then go to build it 

#### Ticket Component
-> TicketNum Component (Presentational Comp)
    -> Props: num
    -> State: none
    -> Events: none
    
-> Ticket Component (Presentational Comp)
    -> Props: ticket[] of size n
    -> State: none
    -> Events: none

-> Ticket Component (Logical Comp)
    -> Props: n, winningSum     -> Size of Ticket, sum to decide winner
    -> State: ticket[]          -> generates random number
    -> Events: buyTicket()


### Functions as Props
-> JS Functions are 1st class objects
    -> It means they can be passes to a function as argument, returned from it & assigned to a variable.

-> winCondition function passed as props in LotteryGame -> App.jsx


## Part 6 (Forms in React -> inputChange, handleSubmission, )

### Forms in React
-> The Standard way with Forms is to use Controlled Components. So we make React State to be the "single source of truth".
-> <input>, <textarea>, <select> typically aintain their own state and update it based on the user input
-> So we can track the changes in the elements of the form by tracking it using react state variables (as we have seen in the ToDo-reactApp activity)

    let [fullName, setFullName] = useState("")
    let [isDisplay, setIsDisplay] = useState(false)
    let handleNameChange = (event) => {
        setFullName(event.target.value);
        setIsDisplay(false);
    }
    let handleClick = (event) => {
        event.preventDefault();
        setIsDisplay(true);
        // setFullName("");
    }

### Labels in React
-> Connection in HTML Form
    -> Labels -> for (but in React -> It uses JS. and 'for' is reserved keyword in js, So we have to use 'htmlFor' in React)
    -> Input -> id

    <label htmlFor="address">Address: </label>
    <input type="text" id="address" placeholder="enter address" />

### Handeling Multiple Inputs (Imp)
-> We create a common handleInputChange() for all elements
    -> To create functions for each stateVariable to handleChange is not feasible
    - event.target.name -> changed field
    - event.target.value -> new value of the field

-> in the event.target.name  (Important Point)
    -> name should be same as the keyName written in a stateVariable object

-> Computed Property Name (important)
    -> student.name -> It will return the value of name key present in student object
    -> student[name] -> It will return the value of name(here name is variable) key present in student object
        -> if name = "harsh" then student[name] = student.harsh 


-> Some Important Basics
    <label htmlFor="fullName"> Full Name: </label> &ensp;
    <input type="text" id="fullName" name="fullName" placeholder="Enter Full Name" value={formData.fullName} onChange={handleInputChange} />

    -> id attribute is used for -> htmlFor (define in label to connect with it)
    -> name attribute is used for -> let fieldName = event.target.name;
        -> So that we can target field and update it with its newValue
    -> value attribute is using the currentValue to show FormData


-> Create a single handleInputChange() to handle all the changes in input fields osf the form
    function handleInputChange(event) {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        // console.log(`${fieldName}, ${newValue}`)

        setFormData( (currData) => {
            // return { ...currData, name: 'Harsh Chouhan' };
            // return {...currData, [fieldName] : newValue }
            return {...currData, [event.target.name] : event.target.value }
        })
    }

    
    <label htmlFor="fullName"> Full Name: </label> &ensp;
    <input type="text" id="fullName" name="fullName" placeholder="Enter Full Name" value={formData.fullName} onChange={handleInputChange} />

-> Prevent Form Default Submit Functions
    <form action="" onSubmit={handleSubmit}>

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);

        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    }

### Comments Form ()
-> like comment component used in different Apps