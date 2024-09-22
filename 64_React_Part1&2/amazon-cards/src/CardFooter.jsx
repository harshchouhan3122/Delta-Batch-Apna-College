
function CardFooter({oldPrice="Old Price", newPrice="New Price"}) {
    return (
        <>
            <div style={{height: "20%" ,borderTop: "1px solid black", backgroundColor : "yellow", boxSizing: "border-box", overflow:"hidden", borderRadius: "0px 0px 5px 5px", display: "flex", alignItems:"Center", justifyContent:"Center"}}>
                <span style={{textDecoration: "line-through"}}>${oldPrice}</span> &nbsp;&nbsp;
                <span>${newPrice}</span>
            </div>
        </>
    )
}

export default CardFooter;