/* 
A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
length greater than 5.
For a given string print if it is golden or not.

*/

let str

str = "amazon is one of the top IT MNCs";

if ((str.length>5) && (str[0] == 'A' || str[0] =='a')){
    console.log('Golden String.')
} else {
    console.log('Not a golden String.')
}