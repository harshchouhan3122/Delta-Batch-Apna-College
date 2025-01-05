import Title from "./Title.jsx"
import Image from "./Image.jsx"
import Description from "./Description.jsx"

function CardContent({title="Title", description="Description"}) {
    return (
        <>
            <div class="cardContent" style={{height:"80%", boxSizing: "border-box", border: "1px solid transparent"}}>
                <h3>{title}</h3>
                <Image/>
                <p>{description.map((description) => <li style={{listStyle:"none"}}>{description}</li>)}</p>
            </div>
        </>
    )
}

export default CardContent;