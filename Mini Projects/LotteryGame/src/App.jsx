import './App.css'

import TicketNum from './TicketNum'
import Ticket from './Ticket'
import Lottery from './Lottery'
import {sum} from './helper'

function App() {

  let winCondition = (ticket) => {
    // return sum(ticket) === 15;
    // return ticket.every((num) => num === ticket[0]);
    return ticket[0] === 0;
  }

  return (
    <>
        {/* <Lottery size={3} winningSum={15} /> */}
        <Lottery size={3} winCondition={winCondition} />
    </>
  )
}

export default App
