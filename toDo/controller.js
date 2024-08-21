import {Todo} from "./Objects/item.js"
import {Project} from "./Objects/project.js"

let general = new Project("General");
//let newItem = new Todo();
//createTodo(newItem);
//console.log(newItem.title);
//general.addToDo(newItem);
//for (item in general.todo) {
//    console.log(item.title);
//}
const form = document.querySelector("#newItem");
const menu = document.querySelector("#menu")
/*menu.addEventListener("click", function(event) {
    console.log("test");
    showForm();
}); */

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("formContainer");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
        console.log(key);
        console.log(value);
    });

    console.log(data);
    let newItem = new Todo(data.title, data.dueDate, data.priority, data.notes)
    general.addToDo(newItem);
    if(newItem.title == "") {
      alert("Task needs a title");
    } else {
      console.log(general.todos);
      makeDiv(newItem);
      form.reset();
    }
    
})

function makeDiv(item) {
    let div = document.createElement("div");
    let left = document.createElement("div");
    let right = document.createElement("div");
    let title = document.createElement("div");
    let dueDate= document.createElement("div");
    let priority = document.createElement("div");
    let notes = document.createElement("div");

    title.textContent = "Task: " + item.title;
    if (item.dueDate === undefined) {
      dueDate.textContent = item.dueDate;
    } else {
      dueDate.textContent = "Due Date: " + item.dueDate;
    }
    
    priority.textContent = item.priority;
    if (item.notes === undefined) {
      notes.textContent = item.notes;
    } else {
      notes.textContent = "Notes: " + item.notes;
    }
    //notes.textContent = item.details;

    console.log(priority.textContent);
    if (item.priority === "high") {
      priority.textContent = "Priority: " + item.priority;
      div.classList.add("high");
    } else if (item.priority === "medium") {
      priority.textContent = "  Priority: " + item.priority;
      div.classList.add("medium");
    } else if (item.priority === "low") {
      priority.textContent = "  Priority: " + item.priority;
      div.classList.add("low");
    } else {
      div.classList.add("none");
    }



    left.appendChild(title);
    left.appendChild(dueDate);
    left.appendChild(priority);
    left.appendChild(notes);

    let itemArea = document.querySelector("#items");

    let button = document.createElement("button");
    button.textContent = "Remove Item";
    button.classList.add("buttons");
    right.appendChild(button);

    button.addEventListener("click", () =>{
      let parent = button.parentNode;
      let grandparent = parent.parentNode;
      grandparent.remove();
      // i need to remove it from the list
    })

    title.style.fontSize = "2rem";

    div.appendChild(left);
    div.appendChild(right);
    div.style.display = "flex";
    right.style.marginLeft = 'auto';
    right.style.alignItems = 'center';
    right.style.justifyContent = 'center';
    itemArea.appendChild(div);
}

function showForm() {
    document.getElementById("formContainer").classList.toggle("show");
}



function createTodo(todo) {
    let title = prompt("Enter title");
    todo.title = title;
    let priority = prompt("enter priority");
    todo.priority = priority;
    let dueDate = prompt("enter due date");
    todo.dueDate = dueDate;
    let notes = prompt("enter notes");
    todo.notes = notes;
}
