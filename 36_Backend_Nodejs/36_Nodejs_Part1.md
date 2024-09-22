# Backend Dev - Nodejs - Part1

## Nodejs
    -> Javascript Runtime Environment
    -> used for the server side programming (Backend)
    -> Node.js is not a language, library or framework

    -> download link - pdf
    -> node -v   -> on cmd to check the version

    -> VS code is built by using node js

## Node REPL
    -> Read, Evaluate, Print, Loop
    -> cmd - open node (terminal/ environment to code)
        -> can run js here like console on browser
        -> DOM manipulation is not possible from here
    -> .help - basic command

## Node Files
    -> correct directory should be there before running a file

## Process in Node
    -> process - this object provides info about, and control over, the current Node.js process
        -> input/ output
        -> cmd -> node -> process (functions, methods, version)
            -> process.cwd(); -> current directory

    -> process.argv - returns an array containing the command-line arguments passed when the Node.js process was launched
        -> same like promts in browser

## Export in Files
    -> require(file directory) -> for import

    -> module.exports -> special object which return     value/method from one file to another file

    -> used, if you wanna create another library
    -> when you want to distribute code in different different js files 

### Importing from the same directory
    -> require(file directory)
        -> ./fileName
        -> ./directoryName

### Importing from the different directory
    -> require(folder directory)
    -> index.js (entry point)   -> same as main() in c


## npm
    -> node package manager
    -> library of packages (share and borrow packages)
    -> command line tool
    -> already written codes which can be use by others using npm
    -> express.js, react.js -> packages
    -> pre-installed with node
        -> cmd -> npm -v (to check weather its installed or not)
        
### Installing Packages
    -> npm install <- package name ->
        -> express.js
        -> react.js
        -> figlet.js -> package for display text using symbol

    -> node_modules -> the node_modules folder contains every installed dependencies for your project

    -> package-lock.json -> It records the exact version of every installed dependency, including its sub-dependencies and their versions.

    -> package.json -> this file contains descriptive and functional metadata (data about data -> version, author) about a project, such as a name, version, dependencies
        -> its very important to reinstall our dependencies, if they got deleted mistakenly
        -> cmd -> npm install -> no need to mention any other thing, it will install all required dependencies

    -> we can create our own package.json (metadata) for our project
        -> npm init (package.json created)
        -> then if you download any other package then this package.json gets updated

## Figlet (package)
    -> npm install figlet

    -> Code -> index.js
        -> require(package name) -> ./ not required here
        -> copy code from the official website : https://www.npmjs.com/package/figlet

## Local vs Global Installation
    -> Local Installation -> best practice
        -> npm install <-package name->

    -> Global Installation
        -> npm install -g <-package name->

        -> npm link <-package name->
            -> its must to use globally installed packages in out local directory

## import modules
### import v/s require
    -> require -> previously used (it imports everything)
        -> synchronous loading (top to bottom importing)
    -> import -> mostly used (imports only required function not every function/data)
        -> asynchronous loading
        -> selective loading -> saves memory

    -> ES6 -> new features with arrow function , with import
    
    -> import {sum} from "./math.js"
    -> export sum = (a,b) => {a,b}

    -> use only require or only import in complete file

    -> NOTE : if you want to use import export of objects
        -> npm init -> package.json -> add "type::"module"
        -> then only import export works