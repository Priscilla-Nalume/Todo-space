const input = document.getElementById("taskinput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("tasklist")

// CRUD= Create, Read, Update and Delete
// Create = create new task
addBtn.addEventListener("click", function(){
    const newTask = input.value.trim();

    if(newTask == ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = newTask;
    list.appendChild(li);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit"
    editBtn.addEventListener("click", function(){
        const updatedTask = prompt("Enter the updated task", li.textContent);
        if(updatedTask !== null &&updatedTask.trim() !=="" ){
            li.textContent = updatedTask.trim();
            li.appendChild(editBtn)
        }
    })
    li.appendChild(editBtn);

    // delete button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function(){
        li.remove();
    })



    input.value = "";

})

// Read= display tasks (already done)
// edit - update task

const fetchDataBTN = document.getElementById("fectData")
fetchDataBTN.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(response => response.json())
      .then(todos => )
})
