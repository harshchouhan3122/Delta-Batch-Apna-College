function Product({title="", price=1000, features=["Not Available"], features2 = {a:"Empty"}}) {
    // let styles = {backgroundColor : "yellow", borderRadius: "20px", padding:"5px", margin:"5px"}; 
    let styles = {backgroundColor : price>=10000 ? "yellow" : "grey", borderRadius: price>=10000 ? "20px" : null, padding:"5px", margin:"5px"}; 
    
    return (

        <div className = "Product" style={styles}>
            <h3>Product: {title} </h3>
            <p>Price of the Product is : {price}</p>
            <p>Arrays: {features}</p>
            {/* <p>using Map: {features.map((feature) => <li>{feature}</li>)} </p> */}
            <p>Objects: {features2.a}</p>
            { price >=10000 ? <p>"Discount of 5%"</p> : null }
        </div>
    );
}

export default Product;