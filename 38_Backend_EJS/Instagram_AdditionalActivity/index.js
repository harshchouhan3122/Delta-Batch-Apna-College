const express = require("express");
const app = express();
const port = 3000;

//for starting the server outside the directory
const path = require("path");

// for ejs
app.set("view engine", "ejs");

//for starting the server outside the directory
app.set("views", path.join(__dirname, "/views"));   

// Serving Static Files
// app.use(express.static("public"));      //public named folder is must and then store css files and other static files in this folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, ()=>{
    console.log(`Server Started at port: ${port}`);
});



app.get("/", (req, res) => {
    res.send("<p>This is the Home Page of the Instagram.</p> <b>Go to : '/ig/:username'</b> ");
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    // res.send(`Username: ${username}`);

    const instaData = require("./data.json");
    // console.log(instaData);
    
    let data = instaData[username];
    // console.log(data);
    
    if (data){
        // res.render("instagram.ejs", {data});
        res.render("instagram2.ejs", {data});        //for learning include (subtempleting)
    }
    else{
        res.render("error.ejs", {username});
    }

});

app.get("*", (req, res) => {
    res.send("Error 404 ---- Account not Found.");
});



// nodemon index.js on cmd