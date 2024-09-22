# Javascript - Part 12

### async Function
    -> async & await keyword

    -> async function - bydefault return a promise whether we have declare or not (return new Promise())
        -> on promise return we can use .then().catch() methods

    -> Code - sync&await.js

### await keyword
    -> pauses the execution of its surrounding async function until the promise is settled (resilved or rejected)

    -> await can be use only if the function is async

    -> if you wanna execute one thing after the another then we can use async and await

#### Try to change the bg-color of body (last part) using async and await keyword (callbackHell.js -> part 31)

## Handeling Rejections 
    -> try, catch
    -> use try block to write await calls becuase it can be rejected due to network issue or any api issue


## API
    -> Application Programming Interface

    -> e.g. waiter -> do work for us from the another source -> googlemap API used in Zomato, Swiggy

    -> Interface between two softwares -> Web APIs used in Web Applications
    
    -> Return/ response some data in JSON (JavaScript Object Notation) format not in HTML, CSS, JS format

### Some Random APIs
    -> Cat Facts - https://catfact.ninja/fact
    -> Bore Activity - https://www.boreapi.com/api/activity
    -> Dog Image - https://dog.ceo/api/breeds/image/random

    -> Twitter APIs 9without login twitter account, access some features (wating shorts, like, replies)
        -> free - key (password) X - access token

## JSON
    -> JavaScript Object Notation
    -> accessible with js, py
    -> previously XML is used for API purpose

    -> (key : value) pairs -> all keys are f string format
    -> undefined not valid in JSON value
    -> JSON Validators -> to check our JSON file is valid or not -> online tool

### Accessing JSON Data
    -> response -> data is in the form of string
    -> JSON.parse(data) -> to parse a string data into JS object
        -> to access data from APIs
    -> JSON.stringify(json) -> To parse JS object data into JSON
        -> to create APIs

## API Testing Tools (for Developers)
    -> Postman (software download)
    -> Hoppscoth (online) -> https://hoppscotch.io/

## AJAX (Asynchronous Javascript and XML)
    -> AJAX calls -> when we request API but further work is in continuation, we are not waiting for thr response of a API for another task
    -> Instagram Like -> without reloading of the page -> like count++ using API

    -> Now Response comes in JSON file but we still call it AJAX not AJAJ

## HHTP Verbs
    -> GET - to get data (access)
    -> POST - to send data
    -> DELETE - to delete data

## Status Codes
    -> 200 - OK
    -> 404 - Not Found
    -> 400 - Bad Request
    -> 500 - Internal Server Error

    -> Informational Responses (100-199)
    -> Successful Responses (200-299)
    -> Redirection Responses (300-399)
    -> Client Error Responses (400-499)
    -> Server Error Responses (500-599)

## Adding Information in URLs
    -> using query string (?q=mango)
        -> key:value pair for additional info
        -> www.google.com/search?q=mango

    -> using API routes (/:id)

    -> unused key value pairs are ignored means we will not get any error code from the server

## HTTPs Headers
    -> header, value
    -> inspect -> network

    -> in every request some additional about our machine has been sent using headers

    -> headers are used to get different type of data (text/html, location/json)

    -> meta data can also be send using headers -> meta data is data about data

## API Request using JS
    -> fetch(url)   -> return promise

    -> Code -> part12.js 
        -> Check it -> Inspect -> Network -> fact -> Response

    -> res.json()

## Using Fetch with async & await
    -> url = "https://catfact.ninja/fact";
        async function getFact(){
            try{
                let res = await fetch(url);
                let data = await res.json();
                console.log(data.fact);

                let res2 = await fetch(url);
                let data2 = await res2.json();
                console.log(data2.fact);

            } catch(err){
                console.log("Error -> " + err);
            }
        }

    -> we have to parse data for readable format

## Axios 
    -> Library to make HTTP request
    -> cdn link copy on html using script tag
    -> Code -> part12.js
    -> Don't need to parse data because in this we get data in the readable format directly

## Activity 
    -> get random facts on webpage (randomFacts.html)
    -> get random images on webpage (randomImage.html)

## Sending Headers with API Request
    -> Code - headersAPI.js

    const url = "https://icanhazdadjoke.com/";
    const config = { headers: { Accept: "application/json"}};
    let res = await axios.get(url, config);
    let data = await res.data;

## Activity using query String
    -> Code - queryString.js