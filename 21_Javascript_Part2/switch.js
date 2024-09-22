let color;

color = 'green'
color = 'red'
color = 'yellow'

switch(color){
    case 'red' : 
        console.log("Stop")
        // break
    case 'yellow' : 
        console.log("Slow Down")
        break
    case 'green' : 
        console.log("Go")
        break
    default :
        console.log("Broken Light")
}