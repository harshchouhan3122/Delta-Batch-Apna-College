# Backend -> ErrorHandeling

## Error Handeling Middlewares
    - express in buile error handler middleware --> Default

    - https://expressjs.com/en/guide/error-handling.html#error-handling

    - We can create our own error handler middlewares.
        - 4 parameters


    - app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).send('Something broke!')
        })

    - app.use((err, req, res, next) => {
        // console.log(err);
        console.log("____________ERROR 1 Middleware_____________");
        next(err);     //It will search the next non error handleing middleware
    });

    - next()    -> Calling next non error handeling middlewares
    - next(err) -> calling next error handeling middleware


## Custom Error Class
    - to redefine an error message
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        - Informational Responses (100-199)
        - Successful Responses (200-299)
        - Redirectional Responses (300-399)
        - Client Error Responses (400-499)  -> Imp (400, 401, 403, 404)
        - Server Error Responses (500-599)  -> Imp (500)

    - ExpressError.js   -> Custom Error Class Define
        class ExpressError extends Error {      //Inheritence
            constructor(status, message) {
                super();
                this.status = status;
                this.message = message;
            }
        }

        module.exports = ExpressError;

    - app.js
        const ExpressError = require("./ExpressError");

        app.use((err, req, res, next) => {
            // console.log(err);        //ERROR Status 500 -> Server error (req not fulfill)
            console.log("_____ERROR 1 _____");
            console.log(err);
            // next(err);     //It will search the next non error handleing middleware

            // res.send(err);
            let { status, message} = err;
            res.status(status).send(message);
        });

    #### Important 
    - If Error Handler doesn't have ststus code then it assign it to 500 by default.
        - let { status = 500, message = "SOME ERROR"} = err;


## Activity (activityApp.js)
    - create an admin route & error with a 403 status code.
    - activityApp.js

        const express = require("express");
        const { redirect } = require("express/lib/response");
        const app = express();
        const PORT = 3000;
        
        const ExpressError = require("./ExpressError");
        
        
        let checkToken = (req, res, next) => {
            let { token } = req.query;
            if (token === "pass"){
                // redirect("/admin");
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
        

## Handeling Async Errors
    - Error thrown asyncronously is not able to call next() that'swhy we have to call next() explicitly.

    ### Chat management App MiniProject (WhatsApp)
    app.get("/chats/:id", async (req, res, next) => {
        let { id } = req. params;
        let chat = await Chat.findById(id);
        if(!chat){
            // throw new ExpressError(404, "Chat not found"));
            return next(new ExpressError(404, "Chat not found"));
        }
        res.render("edit.ejs", { chat });
    });
