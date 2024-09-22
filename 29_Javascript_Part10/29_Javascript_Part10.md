# Javascript - Part 10

## DOM Events
    - Tells about the actions occurred (user input/ output)
    - click, hover, etc

### 1. Inline Events
    - button onClick=""
    - We write JS File to handel the events mostly
        - Inline Evenets are not preffered when we have to do same task again and again (multiple buttons)

## 2. Mouse/ Pointer Events
    - onclick -> when an element is clicked
    - onmouseenter -> when mouse enetrs an element -> hover effect

    -> Access multiple buttons on the webpage -> querSelectorAll() -> then loop
        -> Code -> part10.js

### 3. Event Listeners
    - they are used to assign multiple task to single event 
        - onclick -> we can assign only single task -> part10.js (Code)
    
    - If you wanna call two different functions on single click of button

    - element.addEvenetListner(event, callback)
        - event -> click, dblclick, drag, keyboardkey
    
    -> Check out Event types on MDN Website

#### Activity -> Generate random color and set the background of the div 
    - Code -> randomColor.js
        -> using QuerySelector
        -> Math.random()*255

### 4. Event Listeners for Elements
    -> Event Listners for <p>, <div>
        -> Click, Hover, onmouse, mouseenter

    -> Code -> part10.js

### 5. this in Event Listners
    - when 'this' is used in a callback of event handler of something, it refers to that something.
    -> event Listners = event handler

    -> if we want to apply single function to multiple elements


## Keyboard Events
    - default argument -> event
        -> PointerEvent - multiple properties
            -> type
    
        -> KeyboardEvent
            -> keydown, keyup

            -> code(Space), key(" ")
            -> code(KeyS), key("S")
            -> code(KeyS), key("s")

## Form Events
    - can create event listeners for form

### Extracting Form Data
    - Code -> formData.html, formData.js
    - access data -> btn.value not btn.innerText

    -> Another way to access the data instead of querySelector
        -> form.elements[0] //usimg indexing of collection

### More Events
    -> change event (final/ major change)
        - occurs when the value of an element has been changed
        - works only on <input>, <textarea>, <select>

    -> input event (to monitor small small changes)
    - triggered by only character keys
        - it fires when the value of an <input>, <select>, <textarea> element has been changed

    -> Code -> formData.js

#### Text Editor
    -> Code - formData.js