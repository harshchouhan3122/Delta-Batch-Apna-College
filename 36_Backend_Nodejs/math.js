let PI = 3.14;

function sqr(num){
    return num**2
}

function circle_area (r){
    return PI*r*r 
}

function square_area (side){
    return side*side 
}

let obj = {
PI, sqr, circle_area, square_area
}

module.exports = obj