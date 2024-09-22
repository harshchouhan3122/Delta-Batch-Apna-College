# React
npm run dev

## Part 1

### What is React?
    -> JS Library to build UI Frontend Designs

    -> Important Topics
        -> Component
            - Reusable piece of code like function
            - Component -> Cards, Buttons etc
            - Consist of HTML, CSS, JS componentwise

### JSX -> Javascript Extension Syntax
    -> To Combine HTML with Javascript
    
    -> JSX -> transfile(Babel - converting JSX to JS) -> Javascript

    -> Easier to write and readablity of code increses to design more complex sites

### Setup Local Environment
    -> Create-React-App vs Vite
        -> tools to use React
        -> https://semaphoreci.com/blog/vite

    -> Setup VITE
        -> https://vitejs.dev/

        - npm create vite@latest
        - project name
        - React
        - Javascript
        - npm install cmd into project folder

        - npm run dev   // to start the server

### Understanding our App
    -> Understand the Folder Structure which is created
    -> node modules - all dependencies
    -> public - images
    -> src (main)
        -> App.css (css file) //project name should be same
        -> App.jsx (html+javascript file)
        -> index.html
        -> main.jsx

    -> Flow
        -> index.html (root) - main renders root component

        -> App.jsx is used for the changes bcs its main component

### Rewrite our-App
    -> Change App.jsx File only
    -> Change App.css for styling

    -> index.html file uses the components designed under App.jsx as root tag

### Our 1st Component
    -> Component is reusable & independent piece of code

    -> Creating a component (in App.jsx)
        -> function Title(){
            return (
                <h1> Hello World! </h1>
            )
        }

    -> Rendering a component (in App.jsx)
        -> <Title> </Title>
        -> <Title/>             // if you are using only single tag

    -> NOTE -> JSX File must nclude one parent tag (<div>)

### Export Import of Components
    -> Import
        import Title from "./Title.jsx"

    -> Default Export (gen used for single component which is to be used further with another/custom name)
        export default Title;

    -> Named Export (when you want to export multiple values and import them with specific names)
        export { Title };

### Writing Markup with JSX (Rules)
    -> Return with a single element
    -> Close all the tags (<img/>, bcz Babel will find element with closing tag)
    -> camelCase 

### React fragement
    -> Fragemet let you group a list of childeren without addign extra nodes to DOM

    ->  <>
            <Title/>
            <Title/>
        </>

### JSX with curly braces
    -> When we want to write a Javascript into JSX
    -> For logical or dynamic Content
    -> For using Variables
    -> <p>2*2 = {2*2}</p>

### Structuring Componets
    -> Breakdown a large Website's Content and then try to create it 
    -> Create Component using Menaingful names

    -> Create Individual Element first and then group them if Possible and then use it into the App.jsx (Reusability of code increases)

    -> Product.jsx -> ProductTab.jsx -> App.jsx

### Styling Componets
    -> Styling Tools  //Search about it
        
    -> Componentwise Styling is preferable with the sameName as in jsx file / component

    -> Product.css, ProductTab.jsx

    -> use className="" instead of class=""


## Part 2

### React Props
    -> Props are the information that you pass to a JSX tag
    -> Same as we can pass arguments to the functions.

    -> Product.jsx
        function Product({title, price}) {
            return (
                <div className = "Product">
                    <h3>Product: {title} </h3>
                    <p>Price of the Proct is : {price}</p>
                </div>
            );
        }

        export default Product;   

    -> ProductTab.jsx
        import Product from "./Product.jsx"

        function ProductTab() {
            return (
                <div className="ProductTab">
                    <Product title="SmartPhone" price="30k"/>
                    <Product title="Laptop" price="45k"/>
                    <Product title="SmartTV" price="50k"/>
                </div>
            )
        };

        export default ProductTab;

    
    -> Passing a number
        - function Product({title, price})
        - <Product title="SmartPhone" price={30000}/>

    -> Default values of Props
        - function Product({title="", price=1000}) { return {} }

### Passign Arrays to Props
    - <Product title="SmartPhone" price="30k" features={features}/>
    - function Product({title="", price=1000, features=["Not Available"]})
    - <p>Features: {features}</p>

### Passign Objects to Props
    - Double Curly Braces are used { {} }

    <Product title="SmartPhone" price="30k" features={features} features2={features2}/>
    <p>Objects: {features2.a}</p>
    
### Rendering Arrays
    -> let options = [<li>"Hello"</li>, <li>"Prod 2"</li>, <li>"Prod 3"</li> ]

    -> Another way is map method
        -> const list = features.map({feature} => <li>{feature}</li>)

        -> <p>using Map: {features.map((feature) => <li>{feature}</li>)} </p>

### Conditionals (Use Ternary Operator)
    -> {price >= 1000 ? <p>Discount = 5%</p> : null}
    -> {price >= 1000 && <p>Discount = 5%</p>}

    { price >=10000 ? <p>"Discount of 5%"</p> : null }


### Dynamic Component Styling
    -> Styling based on conditions (Runtime)
    -> Two ways
        -> Write it on the same component file or you can write it in .css file of  that component
    -> replace hyphen and use camel case in jsx (backgroundColor not background-color)

    let styles = {backgroundColor : "blue"}; 
    return (
        <div className = "Product" style={styles}>
    )

    let styles = {backgroundColor : price>=10000 ? "yellow" : "grey", borderRadius: price>=10000 ? "20px" : null, padding:"5px", margin:"5px"}; 


### Activity
    -> Show a Hello Msg to the user in diferent colors
    -> Pass 2 values to props : userName & textColor

    -> Msg.jsx
    function Msg({userName, textColor}) {
        return (
            <h2 style={{color: textColor}}>Hello, {userName}</h2>
        );
    }
    export default Msg;

    -> App.jsx
    import './App.css'
    import Msg from "./Msg.jsx"

    function App() {
      return ( 
        <>
            <h1>React Activity</h1>
            <Msg userName="Rohan" textColor="red"/>
            <Msg userName="Mohit" textColor="blue"/>
            <Msg userName="Harsh" textColor="green"/>
        </>
      )
    }
    export default App;


### Install React Developer Tools
    -> https://react.dev/learn/react-developer-tools
        -> Install for Chrome

    -> Extension of chrome which helps us to work with react
        -> Provides extra options in Inspect window
        -> Go to Atlassian Website and check this components functionality there


### Activity: Amazon Cards
    -> Create a new project named AmazonCards
        -> npm create vite@latest
        -> Project Name - AmazonCards
            -> cd AmazonCards
            -> npm install
            -> npm run dev

    -> Change the src -> App.jsx
    -> Create other JSX file inside the src folder
    