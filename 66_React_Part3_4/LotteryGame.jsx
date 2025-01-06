import { useState } from "react"

export default function LotteryGame () {

    let [ticketNum, setTicketNum] = useState(0)
    let [winner, setWinner] = useState(false)

    let generateTicket = () => {
        // Random Generating 3 Digit Num (100 to 999)
        let randNum = Math.floor(Math.random()* 900) + 100;
        return randNum;
    }

    let sumOfDigit = (num) => {
        let res = 0;
        while(num != 0){
            res += num%10;
            num = Math.floor(num/10);
        }
        return res;
    }

    function checkResult() {
        setWinner(false);
        let newTicket = generateTicket();
        setTicketNum(newTicket);

        let digitSum = sumOfDigit(newTicket);
        // console.log(digitSum);

        // if the sum of randomNum is 15, then play won the Lottery
        if (digitSum === 15){
            setWinner(true);
        }

    }

    return (
        <>
            <h1>Lottery Game</h1>
            <h3> Lottery Ticket : {ticketNum}</h3>
            <button onClick={checkResult}>Get New Ticket</button>

            <h2 style={{backgroundColor:"yellow", display: winner ? "block" : "none"}}>Congrats! You Won This Lottery!</h2>
        </>
    )
}