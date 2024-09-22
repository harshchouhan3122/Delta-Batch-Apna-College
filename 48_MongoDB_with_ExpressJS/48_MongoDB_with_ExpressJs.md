# MongoDB with ExpressJS

## Basic Setup 
    - npm init -y
    - npm i express ejs mongoose
    - code index.js

    - create folders in root directory
        -> public -> styles.css
        -> views -> .ejs files

    // Import Express
    const express = require("express")
    const app = express()

    // Connect DB
    const mongoose = require("mongoose");

    // Require Path for views and public and Set View Engine    for EJS
    const path = require("path");
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");

    main().then(res => console.log("DB Connected...")).catch    (err => console.log(err));

    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/  whatsapp');
    }


    // Create Route
    app.get('/', (req, res) => {
        res.send("Working....");
    });

    // Define Port
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is listening on port : ${PORT}`);
    });

    -> Create RESTful APIs

## Creating Our Model / Collections
    - create folder models
        - create chat.js file
            - describe schema here and then export it

            // Connect DB
            const mongoose = require("mongoose");

            // Create Schema
            const chatSchema = new mongoose.Schema({
                from: {
                    type: String,
                    required: true
                },
                to: {
                    type: String,
                    required: true
                },
                msg: {
                    type: String,
                    maxLength: 50
                },
                created_at: {
                    type: Date,
                    required: true
                }

            });

            // Create Model
            const Chat = mongoose.model("Chat", chatSchema);

            module.exports = Chat;
    
    -> Import Chat in index.js
        // Import Model
        const Chat = require("./models/chat.js");

        let chat1 = new Chat({
            from: "neha",
            to: "priya",
            msg: "Hello priya",
            created_at: new Date()      //UTC Time format
        });

        chat1.save().then(res => console.log(res)).catch(err =>         console.log(err))


## Initialize Database
    -> init.js file
        -> Code to initialize our data
        -> Require mongoose, chats
        -> main() to create connection with mongoDB
        -> save the data from here

## Index Route
    -> GET /chats
    
    -> create init.js file to connect DB
    -> create index.ejs to create template
    -> create style.css

    -> Connect all the files with each other to show all chats on screen

## New Route
    -> GET /chats/new       <- button
    -> POST /chats          //used to create new data

    -> add this form to index.ejs
        <form method="GET" action="/chats/new">
            <button>New Chat</button>
        </form>

    -> create newChat.ejs File
        <form method="POST" action="/chats" style="border: 1px solid black;">

## Create Route
    -> index.js
        // Parse the data of form to access it in this js file
        app.use(express.urlencoded({extended: true}))

        // Create Route
        app.post("/chats", (req, res) => {
            let { from, msg, to } = req.body;       //before it, do urlencoded:true   at the top
            let newChat = new Chat({
                from: from,
                msg: msg,
                to: to,
                created_at: new Date()
            });
            newChat.save().then(console.log("newChat saved      Sucessfully.")).catch(err => console.log(err))
            // res.send("New Chat recieved....");
            res.redirect("/chats");
        });

## Using DATE (important)
    -> Parse date and Time 

    <=chat.created_at.toString().split(" ")[4] %>
    <=chat.created_at.toString().split(" ").slice(1,4).join(" ") %>


## Edit Route
    -> GET  /chats/:id/edit      // create edit button -> editChat.ejs
    -> PUT  /chats/:id

    -> index.js
            app.get("/chats/:id/edit", async (req, res) => {
                // res.send("Working....");
                const { id } = req.params;
                let chat = await Chat.findById(id);
                res.render("editChat", {chat});
            });

    -> editChat.ejs
            <form method="POST" action="/chats/<%=chat._id%>?_method=PUT" style="border: 1px solid black;">
                <p>Message id: <b><%=chat._id%></b> </p>
                <label for="msg">Message: </label>
                <textarea name="msg" id="msg" ><%=chat.msg%></textarea> <br>
                <button style="margin-left: 80%; margin-top: 20px;">Send</button>
            </form>

## Update Route
    -> PUT -> override method with Post Request
    -> npm i method-override  (PUT/DELETE request)

    -> update editForm.ejs
        <form method="POST" action="/chats/<%=chat._id%>?_method=PUT" >

    -> index.js
        const methodOverride = require("method-override");
        app.use(methodOverride("_method"))

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

    -> HW - Updated at -> time when the chat is getting update

## Destroy Route
    -> DELETE - /chats/:id

    -> index.js
        // Destroy Route
        app.delete("/chats/:id", async(req, res) => {
            const { id } = req.params;
            let deletedChat = await Chat.findByIdAndDelete(id);
            console.log(`Deleted Chat: ${deletedChat}`);
            // res.send(id);
            res.redirect("/chats");
        });

    -> index.ejs
            <form id="editButton-Form" method="POST" action="/chats/<%=chat._id%>?_method=DELETE">
                <button id="editButton" style="margin-left: 5px;" onclick="return showText()">Delete</button>
            </form> 

            <script>
                let showText = () => {
                    let userConfirmed = confirm("Do you really want to delete this chat?");
                    if (userConfirmed) {return true;} else { return false;}
                }
            </script>