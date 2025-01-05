# React (https://react.dev/learn)
npm run dev

## Part 1 -> (Setup, Export, Components, JS With JSX, Structure and Styling of Components)

### What is React?
    -> JS Library to build UI Frontend Designs

    -> Important Topics
        -> Component
            - Reusable piece of code like function
            - Component -> Cards, Buttons etc
            - Consist of HTML, CSS, JS componentwise
            - A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

    -> React Frontend built example -> https://www.atlassian.com/

    -> Try : https://codesandbox.io/p/sandbox/nh2zj3?file=%2Fsrc%2FApp.js
        Button2 = () => {
          return (
            <div> Harsh Chouhan </div>
          );
        }
        
        export default function MyApp() {
          return (
            <div>
              <h1>Welcome to my app</h1>
              <Button2 />
            </div>
          );
        }

### JSX -> Javascript Extension Syntax
    -> Note:
        - Component Naming: Component names must start with an uppercase letter (Button2) to ensure React treats them as custom components.
        - Usage: When rendering the component, use <Button2 /> instead of <button2 />.

    -> React is -> Combine HTML with Javascript (jsx is writing html inside js)
    
    -> JSX Code -> transpile (Babel is tool -> converts JSX to JS) -> Javascript Code
        - Babel - https://babeljs.io/docs/babel-plugin-transform-react-jsx

    -> Easier to write and readablity of code increses to design more complex sites

### Setup Local Environment (IMPORTANT) -> Vite (after 2020)
    -> Create-React-App vs Vite
        -> tools to use React
        -> Why prefer Vite over create-react-app? -> https://semaphoreci.com/blog/vite

    -> Setup VITE
        -> https://vitejs.dev/

        - npm create vite@latest
        - project name
        - React
        - Javascript
        - npm install cmd into project folder (in root directory)

        - npm run dev   // to start the server

        - Always write react code in App.jsx, You can write in App.js but it preferrable to use .jsx



### Understanding our App
    -> Understand the Folder Structure which is created
    -> node modules - all dependencies
    -> public - images
    -> src (main)   -> Important
        -> App.css (css file) //project name should be same
        -> App.jsx (html+javascript file)
        -> index.css
        -> main.jsx

    -> Flow
        -> index.html (root) - main renders root component
        -> App.jsx is used for the changes bcs its main App component

        - Imp files
            - index.html 
            - main.jsx
            - App.jsx (Its prefer to make changes here)

### Rewrite our-App
    -> Change App.jsx File only
    -> Change App.css for styling

    -> index.html file uses the components designed under App.jsx as root tag

### Our 1st Component
    -> Component is reusable & independent piece of code

    -> A Component can return only single tag in function in react
        - That's why use empty tag or <div> for multiple tags
        <>
            <p> Para 1 </p>
            <p> Para 2 </p>
        </>

    -> Creating a component (in App.jsx)
        -> function Title(){
            return (
                <h1> Hello World! </h1>
            )
        }

    -> Rendering a component (in App.jsx)
        -> <Title> </Title>
        -> <Title />             // if you are using only single tag

    -> NOTE -> JSX File must include one parent tag (<div>)

    -> Always write each and every component in different file not in App.jsx and save it inside the src folder with same name as the component name -> Title.jsx, Card.jsx


### Export / Import of Components
    -> Import
        import Title from "./Title.jsx"

    -> Default Export (generally used for single component which is to be used further with another/custom name)
        export default Title;

    -> Named Export (when you want to export multiple values and import them with specific names)
        export { Title, Title2 };
        import { Title, Title2 } from "./Title.jsx";

### Writing Markup with JSX (General Rules)
    -> Return with a single root element
    -> Close all the tags (<img/>, bcz Babel will find element with closing tag)
    -> camelCase  -> attributes, variables
        -> class - className (alternate name of attributes for jsx-js)
            - bcz JSX -> JS and in JS, class is keyword
    -> Component naming -> 1st letter of component in UpperCase

### React fragement
    -> Fragemet let you group a list of childeren without adding extra nodes to DOM
        -> use <> instead of <div>

    ->  <>
            <Title/>
            <Title/>
        </>

### JSX with curly braces (IMPORTANT)
    -> When we want to write a Javascript into JSX -> We write JS inside the curly braces {} in JSX file
    -> For logical or dynamic Content
    -> For using Variables
    -> <p>2*2 = {2*2}</p>


### Structuring Componets
    -> Breakdown a large Website's Content and then try to create it 
    -> Create Component using Menaingful names

    -> Create Individual Element first and then group them if Possible and then use it into the App.jsx (Reusability of code increases)

    -> Product.jsx -> ProductTab.jsx -> ( App.jsx + index.html ) -> main.jsx

### Styling Componets
    -> Styling Tools  //Search about it
        
    -> Componentwise Styling is preferable with the sameName as in jsx file / component

    -> Product.css, ProductTab.css

    -> use className="" instead of class=""

    -> className of the components should be same as the ComponentName (Prefferable)

    -> Webpack in React gives functionality to import .css files directly as .js files
        - import "./Product.css";






## Part 2 (Props, )

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

    
    -> Passing a number as prop (use brackets)
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

    -> <Cards title={"Dell"} description={["Wireless Mouse 2.4GHz", "5 Programmable Buttons"]} oldPrice={899} newPrice={699}/>
        -> <p>{description.map((description) => <li style={{listStyle:"none"}}>{description}</li>)}</p>

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
            -> Components (To see the hirarchy of components in Inspect Window) , Propiler 
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
    