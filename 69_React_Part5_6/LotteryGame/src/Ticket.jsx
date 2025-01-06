import TicketNum from './TicketNum';
import './Ticket.css';

export default function Ticket( { ticket } ){
    return (
        <div className='Ticket'>
            <p>Ticket</p>

            {/* Implicitly returning TicketNum component */}
            { ticket.map((val, idx) => (
                <TicketNum num={val} key={idx}/>
            ))}
        </div>
    )
}