import './Button.css'

export default function Button ({action}){
    return <button onClick={action} className='btn'>Buy New Ticket</button>
}