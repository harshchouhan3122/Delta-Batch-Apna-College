const express = require("express");
const app = express();

// Our 1st Middleware
// app.use((req, res, next) => {
//     console.log("This is Middleware.");
//     next();
//     console.log("We can write the line here but its not preferable to write after the next(), hence we can return next()")
// })

// app.use((req, res, next) =>{
//     console.log("This is 2nd Middleware.");
//     return next();          // Its prefereable way 
// })


// Utility Middleware (Logger)
// app.use((req, res, next) => {
//     // console.log(req);
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.responseTime, req.hostname);
//     next();
// })

// Path specific middle-ware
// app.use("/random", (req, res, next) => {
//     console.log("I'm middleware, only for the random page.");
//     next()
// });


// Token Based Middle-ware
app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if(token === "giveAccess"){
        next();
    }
    res.send("ACCESS DENIED");
})

app.get("/api", (req, res, next) => {
    // console.log("Some Data....");
    res.send("Some data...");
})

// heckToken Authentication -> Multiple Middle-wares
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if(token === "giveAccess"){
        next();
    }
    res.send("ACCESS DENIED");
}

app.get("/api/1", checkToken, (req, res, next) => {
    // console.log("Some Data....");
    res.send("Some data...");
})

app.get("/", (req, res) => {
    res.send("this is root page.");
    console.log("this is root page.");
})

app.get("/random", (req, res) => {
    res.send("this is random page.");
    console.log("this is random page.");
})

app.listen(3000, ()=>{
    console.log("Listening on PORT : 3000");
})