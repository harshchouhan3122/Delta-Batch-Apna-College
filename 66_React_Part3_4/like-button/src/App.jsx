import { useState } from 'react'
import './App.css'

import Counter1 from './Counter1'
import Counter from './Counter'
import LikeCounter from './LikeCounter'
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      {/* <h1>States in React</h1> */}

      <div>
        {/* Without Hook */}
        {/* <Counter1 /> */}
      </div>


      <div>
        {/* Using Hook -> To Render UI when component state updates */}
        {/* <Counter /> */}
      </div>


      <div>
        {/* <LikeCounter/> */}
      </div>

      <div>
        {/* Like Toggle button */}
        {/* <LikeButton /> */}
      </div>

      <div>
        <LudoBoard />
      </div>


    </>
  )
}

export default App
