const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const todo = document.querySelector('.todo');
const todoIn = document.querySelector('.todo-in');
const comp = document.querySelector('.complete');

btn.addEventListener("click", function(){
    setTimeout(function(){
        input.value = "";
    }, 1);

    if (input.value.length > 0) {
        let todoOuterDiv = document.createElement('div');
        let check = document.createElement("input");
        check.type = "checkbox";
        let todoInput = document.createElement("input");
        let button1 = document.createElement("button");
        button1.innerText = "Edit";
        button1.style.margin='5px';
        let button2 = document.createElement("button");
        button2.innerText = "Delete";
        todoOuterDiv.append(check, todoInput, button1, button2);
        todoIn.append(todoOuterDiv);

        todoInput.value = input.value;
        todoInput.setAttribute("readonly", "readonly");


        button1.addEventListener('click', function(){
            if (button1.innerText == "Edit") {
                button1.innerText = "Save";
                todoInput.removeAttribute('readonly');
            } else {
                button1.innerText = "Edit";
                todoInput.setAttribute('readonly', 'readonly');
            }
        });

        button2.addEventListener('click', function() {
            button2.parentElement.remove();
        });

        let compDiv = document.createElement("div");
        comp.append(compDiv);

        check.addEventListener('click', function(){
            check.parentElement.remove();
            compDiv.append(todoOuterDiv);
            button1.remove();
            todoInput.style.border = "none";
            todoInput.style.textDecoration = "line-through";
        })
    }
});