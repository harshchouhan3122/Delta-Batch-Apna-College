// To do List

let div = document.querySelector('div');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let task = document.createElement('li');
    task.innerText = inp.value.trim();
    // task.innerText = inp.value.trim().toLocaleLowerCase();
    task.innerText = task.innerText.charAt(0).toUpperCase()+inp.value.slice(1);


    if (task.innerText.length > 0){
        // ul.append(task);
        let btn2 = document.createElement('input');
        btn2.setAttribute('type', 'checkbox');
        btn2.classList.add('checkbox-task');

        let btn3 = document.createElement('button');
        btn3.classList.add('button-delete');
        btn3.innerText = "Delete";

        task.prepend(btn2);
        task.appendChild(btn3);

        ul.appendChild(task);

        // Checkbox Button
        btn2.addEventListener('change', function () {
            // ul.removeChild(task);
            if (btn2.checked){
                task.style.textDecoration = "line-through";
            }
            else{
                task.style.textDecoration = "none";
            }
        })

        // Delete Button
        // btn3.addEventListener('click', function () {
        //     ul.removeChild(task);
        // })
    }

    inp.value = "";

})


ul.addEventListener('click', function (event) {

    // Delete Button
    if (event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
        // ul.removeChild(item);
    };
    
    // strik the task if we clicked on task
    // if (event.target.nodeName == "LI"){
    //     let item = event.target;
    //     console.log(item);
    // };
})
