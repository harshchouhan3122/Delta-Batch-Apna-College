# Backend Middlewares (Very Imp)

## What are Middlewares?
    - It is intermediary
    - Response  -->  Middleware  --> Response
    - In Express, Middlewares are functions that come into play after the server recieves the request and before the response is sent to the client.

    - Common Middleware functions
        - methodOverride
        - bodyParser
        - express.static        (app.use(express.urlencoded({extended:true}));)
            - to serve the static files of backend (.css etc) to frontend
        - express.urlencoded    (app.use(express.static(path.join(__dirname, "/public")));)


## Our 1st Middleware

    - What do the middlewares do?
        - Execute any code
        - Make changes to request and response objects
        - End the request-response cycle
        - Call the next middleware function in the stack

    - Our 1st Middleware
        - app.use(<middleware>){//Working}
        - app.use((req, res)=>{
            //Working })
        - https://expressjs.com/en/4x/api.html#app.use      --> (Study from here the work of app.use())

#### NOTE -> We have to declare the next work after the execution of this middleware otherwise oue web page get stuck in this middleware only.
            - app.use( (req, res, next) => {
                // do your task here
                next();
            })

## Using next()
    - app.use( (req, res, next) => {
            // do your task here
            next();
        })

    - If the current  middleware function does not end the request response cycle, it must call next() to pass control to the next middleware function.
    
    - Types of middleware
        - Application level
        - Router 
        - Error handeling middleware
            - app.use((err, req, res, next) => {}) 
        - buit-in Middlewares
            - static, urlencoded
        - Third Party Middlewares
            - cookie-parker (imp)
            - morgan

#### Imp Middlewares -> https://blog.bitsrc.io/5-express-middleware-libraries-every-developer-should-know-94e2728f7503

    - If we define the two middlewares then it will get execute afetr the first one and then it will check the remaing path of the url and then the next api will call.

    - Middleware always run.
    - We can write the line here but its not preferable to write after the next(), hence we can return next()


### Creating utility Middleware
    - Useful Middlewares
    - Logger Middleware -> to print the useful info on the console (to print the logs)

    - app.use((req, res, next) => {
        req.responseTime = new Date(Date.now()).toString();
        console.log(req.method, req.path, req.responseTime, req.hostname);
        next();
    });

    - logger -> morgan is the famous middleware for this work.
    
    - We can modify the req object using Middlewares.

#### Hoppscotch -> alternate option for the postman
#### Always write Middlewares on the top
    - If you write them at the end then it will never get executed, because another api send response before them if the correct path matches with that api.


## Exploring app.use()
    - if we mention a path in our middleware then it will work only for this path, otherwise it can work for all the path requests.

    - app.use("/random", (req, res, next) => {
        console.log("I'm middleware, only for the random page.");
        next()
    })
    
    - we can write the validation / authentication using middlewares so that user can't be able to access the content without login.

    - Write it at the end
    - app.use((req, res) => {
        <!-- console.log("Error 404: Page not found..."); -->
        res.status(404).send("Page not found.");
    })


## API Token as query string (IMPORTANT)
    - Let's create a middleware for an api that checks if the access token was passed in the querry string or not.
        - // Token Based Middle-ware
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



## Passing Multiple Middlewares (IMPORTANT)

        const checkToken = (req, res, next) => {
            let { token } = req.query;
            if(token === "giveAccess"){
                next();
            }
            res.send("ACCESS DENIED");
        }

        app.get("/api", checkToken, (req, res, next) => {
            // console.log("Some Data....");
            res.send("Some data...");
        })

## Error handeling (Express Default)
    - Express DEFAULT error handler
    - It return the error code along with the error
    - It added default error handler at the end of the middleware by express itself
    - We can change the Error message by using our own error throw

    - next();     //It will search the next non error handleing middleware
        - that'swhy we use 
            next(err);