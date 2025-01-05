import Product from "./Product.jsx"


function ProductTab() {
    const features = ["Hi-Tech", "Durable", "Fast"];
    const features2 = {a:"Hi-Tech", b:"Durable", c:"Fast"};
    return (
        <div className="ProductTab">
            <Product title="SmartPhone" price="30000" features={features} features2={features2}/>
            <Product title="Laptop" price="45000" features={features}/>
            <Product title="SmartTV" />
        </div>
    )
};

export default ProductTab;