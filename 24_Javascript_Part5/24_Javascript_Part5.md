# Javascript - Part 5

## Object Literals
    - used to store keyed collection & complex entities
    - property => (key, value) pair
    - Objects -> Collection of properties
    - Same as dictionary in python (but here indexing not possible)
    - 2 keys have same name -> last value is assigned to that key (overwrite)

### Creating Object Literals
    - Complex data generally stored in Object Literals instead of Array
    - e.g. let time ={ hour:08, minute:54, sec: 24} -> it can return hour first minute third
    - More clearity as data stored in array (here key defines extra info about value)

    - if its declared as const -> then its reference will not change while properties can be changed further with key value

    - prefered to declared with const
    - can store array as value

#### Thread / Twitter Post (app.js)
    - create a object literal for the properties
        - username
        - content
        - likes
        - reposts
        - tags

### Get values of Object Literals
    - object_name['key_name']
    - object_name.key_name      //using dot operator

    -use square brackets whenever you wanna use variables (part5.js)

    -JS automatically converts all keys to string 


### Add / Update Values
    - object_name.key_name = value
    - if key exist -> then value overwrite
    - if key doesn't exist -> then new property updated

    - delete object_name.key_name

### Nested Object
    - Object of Objects
        - classInfo -> students -> every student hold some properties ->  age, gender (part5.js)
        - e.g. classInfo.harsh.age

### Array of Objects
    - Array consisting of Objects  (part5.js)
    - use index to get values
        - object_name[index]
        - object_name[index].key_name
    - we can create new property inside objects

## Math Object
    - collection of mathematical properties

    - Maths.abs(n)      -> positive value
    - Maths.pow(a,b)    -> a^b, a**b
    - Maths.floor(n)    -> round off to lower integer
    - Maths.ceil(n)     -> round off to upper integer
    - Maths.random()    -> val between [0,1)

    - min, max, log, sin, cos
    - Math.PI
    - Math.E

### Generate Random Integer
    - random integer between 1 to 10
        - let num = Math.floor(Math.random()*10)+1

    - random integer between 1 to 5
        - let num = Math.floor(Math.random()*5)+1

    - random integer between a to b
        - let num = Math.floor(Math.random()*(b-a))+1
        - num += a

#### Guessing Game
    - guessingGame.js

### Assignment 5



    