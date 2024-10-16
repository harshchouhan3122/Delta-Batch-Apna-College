const mongoose = require("mongoose");
const { Schema } = mongoose;

const mongo_URL = "mongodb://127.0.0.1:27017/relationDemo";

async function main() {
    await mongoose.connect(`${mongo_URL}`);
}

main()
    .then(()=> console.log("Connected to DB..."))
    .catch((err)=> console.log(err));


const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        { 
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

// customerSchema.pre("findOneAndDelete", async() => {
//     console.log("PRE Middleware Works....");
// });

// customerSchema.post("findOneAndDelete", async() => {
//     console.log("POST Middleware Works....");
// });

// We wanna delete orders of deleted Customer
customerSchema.post("findOneAndDelete", async(customer) => {
    // console.log(customer);
    if (customer.orders.length){
        let res = await Order.deleteMany({_id: {$in: customer.orders} });
        console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


const clearDB = async () => {
    await mongoose.connection.dropDatabase();
};



// Functions
const findCustomers = async() => {
    // await addCustomers();

    let result = await Customer.find({}).populate("orders");   //Here only ObjectId are visible
    console.log(result[1]);
};
// findCustomers();

const addCustomer= async() => {
    // let newCust = new Customer({
    //     name: "Karan Singh",
    // });
    // await newCust.save();

    // let newOrder = new Order({
    //     item: "Burger",
    //     price: 550,
    // });
    // await newOrder.save();
    // newCust.orders.push(newOrder);
    // await newCust.save();
    
    let cust = await Customer.findOne({name: "Karan Singh"});
    
    let order1 = await Order.findOne({ item:"Chips" });
    let order2 = await Order.findOne({ item:"Chocolate" });
    
    cust.orders.push(order1);
    cust.orders.push(order2);
    await cust.save();

};

const deleteCustomer = async() => {
    let data = await Customer.findByIdAndDelete("670f8f998e92ede4c1262553");    //Customer ID
    console.log(data);
};

// findCustomers()
// addCustomer();
deleteCustomer();




// mongoose.connection.close();

