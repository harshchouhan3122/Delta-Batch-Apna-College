const express = require("express");
const app = express();
const PORT = 3000;

const path = require("path");
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}))                    // to get the parameters from the query String 
app.use(methodOverride("_method"));                             //for PUT request in UPDATE Route

// const cookieParser = require("cookie-parser");

const users = require("./routes/users");
const posts = require("./routes/posts");

const session = require("express-session");

app.use(session({secret: "secretCode", saveUninitialized: true, resave: false}));   //connect.sid


// Express-Session  -> Session is same if you open another tab for the same route
app.get("/test", (req, res) => {
    // res.send("Test Seccessful. ");
    if(req.session.count){
        req.session.count ++;
    } else{
        req.session.count = 1;
    }
    res.send(`You sent a request ${req.session.count} times`);
});










// Root Directory
app.get("/", (req, res)=>{
    res.send("Server is working....");
});


// Restructured Posts and Users and then import there paths
app.use("/users", users);
app.use("/posts", posts);


// Start Server
app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT: ${PORT}`);
});