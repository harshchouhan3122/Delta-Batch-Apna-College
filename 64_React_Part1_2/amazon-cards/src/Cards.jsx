import CardContent from "./CardContent.jsx"
import CardFooter from "./CardFooter.jsx"
import "./Cards.css"

function Cards({title, description, oldPrice, newPrice}) {
    return (
        <>
            <div class="card">
                <CardContent title={title} description={description}/>
                <CardFooter oldPrice={oldPrice} newPrice={newPrice}/>
            </div>
        </>
    )
}

export default Cards;