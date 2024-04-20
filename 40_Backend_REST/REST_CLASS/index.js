const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const {v4: uuidv4} = require('uuid');       //for unique id generation
const methodOverride = require("method-override");  //for getting PATCH request from HTML form 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

let posts = [
    {
        id : uuidv4(),
        username: "Harsh123",
        content : "Olympics Winner",
    },
    {
        id : uuidv4(),
        username: "Virat198",
        content : "Selected in Playing 11",
    },
    {
        id : uuidv4(),
        username: "Rohit001",
        content : "TedX Speaker",
    },
];

app.get("/", (req, res) => {
    res.send("Corrected path : /posts");
});


// to see all the posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});


// form for taking input
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


// after submitting form , set action to form
app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let newPost = {id : uuidv4(),username, content};
    posts.push(newPost);
    // res.send(nePost);
    // res.render("index.ejs", {posts});
    res.redirect("/posts");
});


// show single post in detail
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    // res.send(post);
    res.render("show.ejs", {post});
});


// Edit Post (Update Route) -> using Hoppscoth -> html form can send only GET or POST request
// app.patch("/posts/:id/edit", (req, res)=>{
//     let {id} = req.params;
//     let newContent = req.body.content;
//     let post = posts.find((p) => id === p.id);
//     post.content = newContent;
//     res.render("index.ejs" ,{posts});
//     // res.redirect("/posts");
//     // res.send(`Working Well, Check the Console ${newContent}`);
// })



// Edit Post using HTML form - using Method-Override API use
app.get("/posts/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {id, post});
})

app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    // res.render("index.ejs" ,{posts});
    res.redirect("/posts");
    // res.send(`Working Well, Check the Console ${newContent}`);
})


// Delete Post (Destroy Route)
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => p.id != id);
    res.redirect("/posts");
});




app.get("*", (req, res) => {
    res.send("Error - Path Not Found.");
});

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});