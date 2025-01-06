import { useState } from 'react';
import './Lottery.css'
import Ticket from './Ticket'
import { randomArr, sum } from './helper'
import Button from './Button';

export default function Lottery({size = 3, winCondition}) {

    let [ticket, setTicket] = useState(randomArr(size));
    // let isWinning = sum(ticket) == winningSum;
    let isWinning = winCondition(ticket);

    function buyTicket() {
        setTicket(randomArr(size));
    }

    return (
        <div className='Lottery'>
            <h1>Lottery Game</h1>

            <Ticket ticket={ticket} />
            <Button action={buyTicket}/>
            
            <h2>{isWinning && "Congratulations, you won!"}</h2>
        </div>
    )
}