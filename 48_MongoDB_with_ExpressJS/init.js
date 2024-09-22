// Write code to initialize the DB at starting

// Connect DB
const mongoose = require("mongoose");

// Connect Model
const Chat = require("./models/chat.js");

// Create Connection with DB
main().then(res => console.log("DB Connected...")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "Hello priya",
//     created_at: new Date()      //UTC Time format
// });

// chat1.save().then(res => console.log(res)).catch(err => console.log(err))

// Chat.insertMany([
//     {
//         from: "neha",
//         to: "priya",
//         msg: "Hello priya",
//         created_at: new Date()      //UTC Time format
//     },
//     {

//     }
// ]);


let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "Hello priya",
        created_at: new Date() 
    },
    {
        from: "mohit",
        to: "rohit",
        msg: "Hello rohit",
        created_at: new Date() 
    },
    {
        from: "priya",
        to: "riya",
        msg: "Hello riya",
        created_at: new Date() 
    },
    {
        from: "Rohan",
        to: "Mohit",
        msg: "Mohit, How are You???",
        created_at: new Date() 
    },
    {
        from: "Mohit",
        to: "Rohan",
        msg: "Hello Rohan, I'm Fine",
        created_at: new Date() 
    },
];


Chat.insertMany(allChats);

console.log("Chat Inserted Successfully");
