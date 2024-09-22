// Import Express
const express = require("express")
const app = express()

// Connect DB
const mongoose = require("mongoose");

// Require Path for views and public and Set View Engine for EJS
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// MethodOverride
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Import Model
const Chat = require("./models/chat.js");

// Connect style.css to index.ejs
app.use(express.static(path.join(__dirname, "public")));

// Parse the data of form to access it in this js file
app.use(express.urlencoded({extended: true}))

// Create Connection with DB
main().then(res => console.log("DB Connected...")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Create Route
app.get('/', (req, res) => {
    // res.send("Root is Working....");
    res.redirect('/chats');
});


// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    // res.send("Chats is Working...");
    res.render("index.ejs", {chats});
});



// New Route (it will open an form)
app.get("/chats/new", (req, res) => {
    // res.send("Button Working....");
    res.render("newChat");
});


// Create Route
app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;       //before it, do urlencoded:true   at the top
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date()
    });
    newChat.save().then(console.log("newChat saved Sucessfully.")).catch(err => console.log(err))
    // res.send("New Chat recieved....");
    res.redirect("/chats");
});


// Edit Route (Request from Edit Button)
app.get("/chats/:id/edit", async (req, res) => {
    // res.send("Working....");
    const { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("editChat", {chat});
});

// Update Route (Request from editChat.ejs)
app.put("/chats/:id", async (req, res) => {
    // res.send("PUT method Works...");

    const { id } = req.params;
    let { msg: newMsg } = req.body;
    // console.log(newMsg);

    let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
    console.log(updatedChat);
    res.redirect("/chats");
});

// Destroy Route
app.delete("/chats/:id", async(req, res) => {
    const { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(`Deleted Chat: ${deletedChat}`);
    // res.send(id);
    res.redirect("/chats");
});



// Define Port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
});
