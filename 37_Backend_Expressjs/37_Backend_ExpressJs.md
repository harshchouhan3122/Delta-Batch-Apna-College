# Backend Dev - Expressjs - Part1

## Library v/s Framework

### Library
    -> It is a collection of pre-written code that can be used to perform specific tasks
    -> e.g. - axios

### Framework
    -> It is a pre-written code that provides structure for developing software applications
    -> express

## Express JS
    -> Used for server side programming.

    -> Why it is used ?
        1. Listen for request 
        2. Parse data 
        3. Match response with routes 
        4. Response 

### Getting Started with Express
    -> npm init
    -> npm install express
    -> index.js
        -> require() -> function
        -> app -> object    -> consol.dir(app)
        -> port define
            -> port are the logical endpoints of a network connection that is used to exchange the information between a web server and web client

### Handeling Requests
        -> app.listen(port, () => {})
        -> app.use( (req, res)=>{ } )   -> hopscoth locahost APIs working -> download extension -> "https://github.com/hoppscotch/hoppscotch/discussions/2051"

### Sending Response
    -> http request (string) -> (express) -> request(object) -> understandable by JS

    -> res.send([body])
        -> return object, array, html code

## Routing
    -> It is the process of selecting a path for traffic in a network or between or across multiple networks

    -> app.get('/path', (req, res)=>{
    })

    -> app.get('*', (req, res)=>{}) -> else condition -> response for any path 

## Installing Nodemon
    -> To automatically restart the server with the code changes.
    -> nodemon index.js

## Path Parameters
    -> app.get('/:username/:id', (req, res)=>{})
        -> let {username, id} = req.params;

    -> using variable in the request
        -> if you are searching your user account on instagram
        -> it doesn't means that they have coded response for every user
        -> they are using path parameters there 


## Querry String
-> req.query
    -> /search?q=apple
