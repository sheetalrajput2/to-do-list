    const addButton = document.querySelector(".btn");
    const inputBox = document.querySelector(".input_box");
    const todoList = document.querySelector(".todo_list");

    // Function to create a new todo item
    function createTodoItem(text) {
        const li = document.createElement("li");
        const todoText = document.createElement("span");
        todoText.textContent = text;
        const Done = document.createElement("button");
        Done.textContent = "Done";
        Done.classList.add("Done");
        Done.addEventListener("click", function() {
            todoText.classList.toggle("done");
        });
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(todoText);
        li.appendChild(Done);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    // Event listener for add button
    addButton.addEventListener("click", function() {
        if (inputBox.value.trim() !== "") {
            createTodoItem(inputBox.value.trim());
            inputBox.value = "";
        }
    });
