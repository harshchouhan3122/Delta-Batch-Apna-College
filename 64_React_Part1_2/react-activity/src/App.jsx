import './App.css'
import Msg from "./Msg.jsx"

function App() {

  return (
  
    <>
        <h1>React Activity</h1>

        <Msg userName="Rohan" textColor="red"/>
        <Msg userName="Mohit" textColor="blue"/>
        <Msg userName="Harsh" textColor="green"/>
    </>
  )
}

export default App;
