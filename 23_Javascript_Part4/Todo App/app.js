console.log("Welcome to our To Do App");
console.log("Commands:")
console.log("list -> to show all tasks")
console.log("add -> to add any task")
console.log("delete -> to delete any task")
console.log("quit -> to exit")

let tasks = []

while(true){

    let req = prompt("Enter command (shown on webpage): ").toLowerCase();

    if (req == "quit"){
        console.log("Todo Quit");
        break
    }

    else if (req == 'list'){
        console.log("Todo tasks :")
        for (let i=0; i<tasks.length; i++){
            console.log(i + " -> " + tasks[i]);
        }
    }

    else if (req == 'add'){
        let task = prompt("Enter Task : ")
        tasks.push(task)
        console.log("Task added successfully.")
    }

    else if (req == 'delete'){
        let index = parseInt(prompt("Enter task index: "));
        tasks.splice(index,1)
        console.log("Task deleted.")
    }

    else{
        console.log('Enter valid command.')
    }
    
  }