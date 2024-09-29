const express = require("express");
const { redirect } = require("express/lib/response");
const app = express();
const PORT = 3000;

const ExpressError = require("./ExpressError");


let checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "pass"){
        // res.redirect("/admin");
        next();
    }

    throw new ExpressError(403, "Access to Admin is Forbidden..");
}

app.get("/admin", checkToken, (req, res) => {
    res.send("Admin Login...");
});

app.use((err, req, res, next) => {
    let {status, message} = err;
    res.status(status).send(message);
})

app.listen(PORT, (req, res) => {
    console.log(`Server listening  at PORT : ${PORT}.`);
} )






// function wrapAsync(fn) {
//     return function (req, res, next) {
//         fn(req, res, next).catch((err) => next(err));
//     }
// }


const handleValidationErr = (err) => {
    console.log("Validation error occured");
    return err;
};

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") {
        err = handleValidationErr(err);
    }
    next(err);
});