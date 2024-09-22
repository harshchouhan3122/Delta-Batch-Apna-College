# Backend Dev - Node EJS

## Node : EJS

### Templating
    -> Instagram created template for the profile
        -> when new users signup then that template is assigned to them

    -> Tools for templating
        -> EJS (Embedded Javascript templates)
        -> HandelBars

## EJS
    -> Blueprint
    -> Templating language that lets you generate HTML markup with plain Javascript

    -> EJS directory - EJSdir
    -> npm init -y  (-y is used to inherit bydefault values in package.json)
    -> npm i express
    -> npm i ejs


### using EJS
    -> require express -> express automatically require ejs
    -> baisc snippet of express

    -> res.render("home.ejs) -> if you wanna send a large file in response of the request

    -> create folder views (Folder name should be views)
        -> create home.ejs -> file having html+js files

    -> ejs 2019 - extension on vs Code

    -> for starting the server outside the directory
        -> const path = require("path");
        -> app.set("views", path.join(__dirname, "/views"));

## Interpolation Syntax
    -> Embedding expressions into marked up text.
        -> `name: ${var_name}`  (variable embedded)
    -> Dynamic Website (dynamic html -> changing of website runtime)

    -> <%= num %> -> tag for output -> in home.ejs file
    -> let val = randome value
    -> res.render("rollDice.ejs", {num: val}) -> you are passing an object from js file to ejs file and then it will gonna seen in response file

    -> Explore ejs tags 

## Activity -> Instagram EJS
    -> different data according to the routes
    -> /id/:username

    -> instagram.ejs and index.js


## Conditional Statements in EJS
    -> rollDice.ejs and index.js

    ->  <% 
        if(val==6) { %>   
            <h2>Nice! Roll a dice again.</h2>
            <% } 
         %>


## Loops in EJS
    -> instagram.ejs and index.js

    ->  <h3>Your Follower's List:</h3>
        <ul>
            <% for(let name of followerList) { %>
                <li> <%= name %> </li>
            <% } %>
        </ul>


## Additional Activity -> Instagram EJS
    -> Instagram Page with EJS
    -> download data.json and save it in same directory
    
    -> render the data of the data.json file on webpage using ejs

    -> Create new folder -> Instagram_AdditionalActivity
        -> npm init -y (Initialise node)
        -> install express, ejs
        -> create index.js file 
        -> cretae view folder for storing ejs files
        -> same the data.json file in the main directory
            -> check the data is accessible by the js file by printing it on console
        -> create indtagram.ejs file in views folder
        -> link this file to js file
            -> res.render("instagram.ejs", {username});


## Serving Static Files (in EJS)
    -> if you wanna include the css and js files in our express

    -> app.use( express.static( folderName ) )
        -> app.use( express.static( path.join(__dirname, "public") ) )
        -> create public named folder containing css and other static file, same as views folder

    -> Code -> Instagram_AdditionalActivity -> index.js


## Includes
    -> Way to create Subtempletes then we can merge subtempletes to get complete templete
    
    -> create a "includes" named folder inside the view folder and then store subtemplete .ejs files inside this folder and then import it using given syntax in the main .ejs file

    ->   <%- include("includes/head.ejs") %>     -> include it in main templete .ejs file

    -> Code -> Instagram_AdditionalActivity -> instagram2.ejs