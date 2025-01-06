# React (Imp Commands)
-npm create vite@latest
    project name -> React -> Javascript
-npm install (inside the project folder directory)
-npm run dev (inside the project folder directory) -> To Start the project on Port

-> Imp for React -> Component, Props, States (Imp but confusing), Events

-> Other Important Theory
    -> Design Principal of React 
        -> State Design Pattern (Lifting State Up) -> https://react.dev/learn/sharing-state-between-components




## Part 5 (Design Principal of React)

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