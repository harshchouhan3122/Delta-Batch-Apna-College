const express = require("express");
const app = express();

// Custom ErrorClass
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveAccess"){
        next();
    }

    throw new ExpressError(401, "Access Denied..");
}

app.get("/api", checkToken, (req, res) => {
    res.send("Data...");
})



// app.get("/err", (req, res) => {
//     abcd = abcd;
// });

// Own Error Handler Middleware
app.use((err, req, res, next) => {
    // console.log(err);        //ERROR Status 500 -> Server error (req not fulfill)
    console.log("_____ERROR 1 _____");
    console.log(err);
    // next(err);     //It will search the next non error handleing middleware

    // res.send(err);
    let { status = 500, message = "SOME ERROR"} = err;
    res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//     // console.log(err);
//     console.log("____________ERROR 2 Middleware_____________");
//     next(err);     //It will search the next non error handleing middleware
// });


app.get("/", (req, res)=>{
    res.send("Root Directory...");
});

app.listen(3000, (req, res)=>{
    console.log("Listening on Port 3000.");
});