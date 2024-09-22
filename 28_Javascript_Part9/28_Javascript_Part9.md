# Javascript - Part 9

## DOM (Document Object Model)
    - DOM represents a document with a logical tree.
    - It allows you to manipulate the content of HTML/CSS using JS.

    -> tags of html become an object in JS

    - console.dir(document)
        - represents the webpage as an object

    - Download Starter Code
        - Select element 
        - Changes / Manipulation of element

## Selecting Elements

### getElementById
    - (Code-> 2_JS DOM - Practice)
    - returns the element as an object or null(if not found)
    - document.getElementById("id_name")

### getElementByClassName
    - (Code-> 2_JS DOM - Practice)
    - return the element as an HTML Collection ( collection -> not array) or empty collection (if not found)
    - document.getElementByClassName("class_name")

### getElementByTagName
    - (Code-> 2_JS DOM - Practice)
    - return the element as an HTML Collection or empty collection (if not found)
    - document.getElementByTagName("tag_name")

## Query Selector (mostly used)
    - Allows us to use any CSS selector
    - used for selection of single element
    - return an object

    - document.querySelector('p') -> selects first p element
    - document.querySelector('#myId') -> selects first element with id = myId
    - document.querySelector('.myClass') -> selects first element with class = myClass

    - document.querySelectorAll('p') -> selects all p element
        - return NodeList


## Setting Content in Objects

### Using Properties and Methods
    - innerText -> shows the visisble text contained in a node 
        -> text visible to screen

    - innerHTML -> shows full markup (all tags)
        -> content of html code
        -> used for the content manipulation including tags

    - textContent -> shows all the full text (include hidden text) -> shows content same as visible in code (in VS code)
        -> text visible on VS Code (or on html code)

### Manipulating Attributes
    - Attribute -> id, class, style, src
    - getters & setters in probramming languages

    - obj.getAttribute(attr)
    - obj.setAttribute(attr, val)
        - img.setAttribute('src', 'newPath')

### Manipulating Style
    - camel case instead of hiphen -> in object
        - let head = document.querySelector('h1')
        - head.style.backgroundColor = 'red'
    
    - we can change only inline CSS using it 
        - we can't change CSS file content using it

    - it return only inline style

    - using classList -> obj.classList()
        - classList.add()   -> to add new classes
        - classList.remove()    -> to remove classes
        - classList.contains()  -> to check if class exists
        - classList.toggle()    -> to toggle b/w add & remove
    

## Navigation on Page

### parentElement
    - return unique

### children
    - return HTML Collection
    - childElementCount -> return integer value

### previousElementSibling / nextElementSibling
    - return element

    - let img = document.querSelector('img')
    - img.previousSibling.style.color = 'green';


## Adding / Removing Elements on Webpage / Document

### Adding new Element on Page
    - let newP = document.createElement('p')
    - newP.innerText = 'Hello New Para';

    - let body = document.querySelector('body')
    - body.appendChild(newP)

    - appendChild(element)
    - append(element)   -> mostly used
    - prepend(element)  -> insert at the start
    - insertAdjacent(where, element) -> insert at particular location
        - beforebegin, afterbegin, beforend, afterend

### Removing elements from the Page
    - removeChild(element)
    - remove(element)   -> mostly used


##### Practice Questions
    -> Add the following elements to the container using ony JS and the DOM methods:

        -> a <p> with red text that sys "Hey I'm Red!"

        -> a <h3> with blue text that sys "Hey I'm Blue!"

        -> a <div> with black border and pink background color with the following elements inside of it :

            -> another <h1> that says "I'm in a div

            -> a <p> that says "ME TOO!"

### JS Assignment 9

