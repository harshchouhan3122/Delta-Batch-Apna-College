# Javascript Mini Project

## Event Bubbling
    -> event.stopPropagation();
    - Whenever nested element's event is triggered, at the same time its parent's event are also triggerrred
        - For Stoping it we use stopPropagation()
    -> Code -> app.js

## Activity > to Do List

## Event Delegation
    -> Way of programming to use event bubbling
    -> Triggering of parent's eventListner using Child
    -> event.target.aprentElement -> which element is targeted

## Simon Say Game

### Basic Design
    -> HTML, CSS

### Start Game
    -> JS File
    -> Game Sequence
    -> User Sequence

### Flash Button and Level Up
    -> level up function
    -> button flash function
        -> random button selection

### Button Event Listners
    -> gameFlash
    -> userFlash
    -> Event Listners to all buttons

### Matching Sequence
    -> checkInput function
    -> check when the input is different at that time heading is not changing as GAME Over 7min
    
    -> checkInput() optamize;


### Reset Game and Display Score
    -> creating another element to show the message at the game over
    -> flashing of the container at the end 
    -> Highest Score display

    -> Try to change the color after game over -> using callback Hell (Part11.js)