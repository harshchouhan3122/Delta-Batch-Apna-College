const mongoose = require("mongoose");
const { Schema } = mongoose;

const mongo_URL = "mongodb://127.0.0.1:27017/relationDemo";

async function main() {
    await mongoose.connect(`${mongo_URL}`);
}

main()
    .then(()=> console.log("Connected..."))
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

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


const clearDB = async () => {
    await mongoose.connection.dropDatabase();
};

const addOrders = async() => {
    await clearDB();

    let res = await Order.insertMany([
    {item: "Samosa", price: 10},
    {item: "Chips", price: 20},
    {item: "Chocolate", price: 30},
    ]);

    // console.log(res);
};
// addOrders();

const addCustomers = async() => {
    // await clearDB();
    await addOrders();

    let cust1 = new Customer({
        name: "Rahul Sharama",
    });

    let order1 = await Order.findOne({ item:"Chips" });
    let order2 = await Order.findOne({ item:"Chocolate" });

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let res = await cust1.save();
    // console.log(res);

};

// addCustomers();


// Functions

const findCustomers = async() => {
    await addCustomers();

    let result = await Customer.find({}).populate("orders");   //Here only ObjectId are visible
    console.log(result[0]);
};
findCustomers();

// mongoose.connection.close();

