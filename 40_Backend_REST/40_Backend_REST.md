# Backend Dev - REST

## REST (imp for APIs)
    -> Representational State Transfer

    -> REST is an architectural style that defines a set of constraints to be used for creating web services.

    -> Creating APIs using REST (rules/ concept to be used)     -> RESTful APIs

    -> RESTful APIs are used for handeling CRUD Operations. (Create, Read, Update, Delete)

    -> Read this blog at the end of this chapter
        -> https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/

        -> use nouns instead of verbs at the endpoints

## CRUD Operations
    -> GET      -> retrieves resources
    -> POST     -> submits new data to the server
    -> PUT      -> updates existing data completly
    -> PATCH    -> to update the data partially
    -> DELETE   -> removes data

    -> Mini Project 
        -> Design a quora post page and then add some functionality
            -> View
            -> Individual
            -> Edit 
            -> Delete

    -> Resources -> this is a data on which we are performing CRUD operations.
        -> In the above project Posts are the resources.

## Creating RESTful APIs
    -> GET     ->/posts       -> to get data for all posts  (Index Route/ Main)
    -> POST    ->/posts       -> to add new posts   (Create Route)
    -> GET     ->/posts/:id   -> to get one post (using id) (View Route)
    -> PATCH   ->/posts/:id   -> to update specific post    (Update Route)
    -> DELETE  ->/posts/:id   -> to delete specific Post    (Destroy Route)

    -> Setup for the Project
        -> Create folder REST_CLASS
        -> npm init -y
        -> npm i express
        -> npm i ejs
        -> mkdir public
        -> mkdir views
        -> notepad index.js (write basic code)

### Basic Code Template
    const express = require("express");
    const app = express();
    const port = 3000;
    const path = require("path");

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));

    app.use(express.urlencoded({extended: true}));
    app.use(express.static(path.join(__dirname, "public")));

    app.get("/", (req, res) => {
        res.send("Server Working Well!");
        res.render("index.ejs", {});
    });

    app.get("*", (req, res) => {
        res.send("Error - Path Not Found.");
    });

    app.listen(port, () => {
        console.log(`Listening to port: ${port}`);
    });


## Index Route
    -> Implement : GET/posts
    -> GET     ->/posts       -> to get data for all posts  (Index Route/ Main)

    -> posts = [{dummy data}]
    -> index.ejs
    -> styles.css

## Create New Route
    -> Implement : POST/posts
    -> POST    ->/posts       -> to add new posts   (Create Route)
        -> need 2 new routes
        -> Serve the form       -> GET    -> /posts/new
        -> Add the new post     -> POST   -> /posts

        -> new.ejs  (create form for taking input)
        -> push the new content into the posts array in index.js

    app.post("/posts", (req, res) => {
        let {username, content} = req.body;
        let newPost = {username, content};
        posts.push(newPost);
        // res.send(nePost);
        res.render("index.ejs", {posts});
    });

## Redirect
    -> Connect Multiple Pages
    -> res.redirect(URL)        //bydefault GET request send

    -> Add a button in index.ejs for new post

## Show/View Route
    -> GET     ->/posts/:id   -> to get one post (using id) (View Route)

    -> id should be unique
    -> alot random ids to the posts
    
    -> show.ejs     (for single detailed post)
    -> index.ejs    (crete a button in every post to see it in detail)

    app.get("/posts/:id", (req, res) => {
        let {id} = req.params;
        // console.log(id);
        let post = posts.find((p) => id === p.id);
        // res.send(post);
        res.render("show.ejs", {post});
    });

    -> Try to solve the problem of assigning id to new posts 


## Creating IDs 
    -> Creating ID for Posts
    -> UUID Package
        -> Universally Unique Identifier
    -> npm install uuid (string ids)

    const {v4: uuidv4} = require('uuid');


## Update Route
    -> PATCH   ->/posts/:id   -> to update specific post    (Update Route)

    -> Update your PATCH request using Hoppscoth 
        -> Send the value in encoded form using key and value


## Edit Route
    -> edit.ejs


    -> NOTE: We can send only GET or POST request in html forms
        -> We will use npm package which override the method

        -> npm install method-override 

    -> Changes in edit.ejs

        <form method="post" action="/posts/<%=post.id%>?_method=PATCH">

    -> Changes in index.js
        const methodOverride = require("method-override");  //  for getting PATCH request from HTML form 

        // Edit Post using HTML form - using Method-Override    API use
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
            // res.send(`Working Well, Check the Console $      {newContent}`);
        })

## Destroy Route (DELETE)
    -> DELETE  ->/posts/:id   -> to delete specific Post    (Destroy Route)

    -> create a delet button on the index.ejs
    
    -> if you create a button then you have to add eventListners using Javascript or you can create a button under FORM so that you can use method override for DELETE as PATCH in the previous part
