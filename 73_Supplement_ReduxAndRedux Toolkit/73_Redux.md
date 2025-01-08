# Redux

## What is Redux?
-> State Management Library for JS Apps.
-> Redux is built for large, more complex applications.
-> "Redux Toolkit" is the official reccmmendation of writing Redux Code.
-> Central Store for to Store State Variables
-> Install redux-react library

-> Store -> Object (to Store State Variables)
-> Reducers -> functions for mutate state -> [state, action]
    -> Like when we add anything in the amazon cart then it will change many components simultaneously (total, reccomendations)
    -> actions are like events in Redux

## Understanding Terms (https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
    -> Store : A Centralized store holds the whole state tree of your application.

    -> Reducers: Func that take the current state and an action as arguments, an return a new state result. In other words, (state, action) => newState

    -> Action: It is a plain JavaScript Object that has a type field. (like events)

    -> Slice: Collection of Redux reducer logic and actions for a single feature/ component together in a single file.

## Setup Project (Creating ToDo App using Redux)
- npm create vite@latest
- projectName -> Redux-Class
- choose React
- choose Javascript
- cd Redux-Class
- npm install
- npm run dev / npm run start

-> Redux Toolkit : https://redux-toolkit.js.org/introduction/getting-started
- npm install @reduxjs/toolkit
- npm install react-redux

-> Redux Toolkit Start: https://redux-toolkit.js.org/tutorials/quick-start
    -> Store
    -> Actions
    -> Reducer(s) and then pass these to Store

## Configure Store
-> Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit

-> Designing the Store
    -> todo -> id, task, isDone

## Deciding Actions
-> Actions
    -> Add a todo (task), Mark as Done (id), Delete a Todo (id)

        {
            type: "ADD_TODO",
            payload: "write code"
        }


## Creating Reducers (Creating Redux State Slice)

-> (state, action) => {//update state}

-> Understad the Folder Structure properly from the documenttion first then create slice file (https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice)
    -> Add a new file named src/features/todo/todoSlice.js. In that file, import the createSlice API from Redux Toolkit.

-> Reducers -> object of functions

-> nanoId -> library under Redux -> works same as uuid -> to generate unique ids
    -> import it directly and use nanoid()

-> //direct mutation -> we can't push it directly in React -> we used ... spread operator in React [...todos, newTodo], but here we can directly mutate
    -> Its possible because of Redux Toolkit

-> Redux-Toolkit automatically generates action creators (fxns that create action objects)
-> Redux-Toolkit lets you write simpler immutable update logic using "mutating" syntax.
    export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

-> https://redux-toolkit.js.org/tutorials/quick-start#add-slice-reducers-to-the-store
    import todoReducer from "../features/todo/todoSlice";
    reducer: todoReducer,       //in store.js

## Todo Component (Provider & useSelector)
-> create components folder inside src folder and then create Todo.jsx

-> Provider Component
    -> The <Provider> component makes the Redux store variable available to ny nested components that need to access the Redux store.

-> We have to use another Hook useSelector() to access the data of Store by Provider

-> The useSelector hook allows you to extract data or state from the Redux store using selector function. (returns the data )
    const todos = useSelector((state) => state.todos )


## AddTodo (Dispatching Actions)
-> Create AddForm.jsx under components folder

-> Create new action which will save our task from AddTodo Form to store (this process is known as Dispatching Action)

-> Dispatching Actions
    -> The useDispatch hook allows you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable.

    
## Delete Todo
-> Add delete button to Todo.jsx