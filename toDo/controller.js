import {Todo} from "./Objects/item.js"
import {Project} from "./Objects/project.js"

let general = new Project("General");



const form = document.querySelector("#newItem");
if (storageAvailable("localStorage")) {
  let items = JSON.parse(localStorage.getItem("items") || "[]");
  //console.log(items);
  for (let savedItem of items) {
    let toDoItem = new Todo(savedItem._title, savedItem._dueDate, savedItem._priority, savedItem._details);
    //console.log(savedItem._title);
    general.addToDo(toDoItem);
    makeDivFromStorage(toDoItem);
  }
  //console.log(general.todos);
} else {
  
}


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    //console.log(formData);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    //console.log(data);
    let newItem = new Todo(data.title, data.dueDate, data.priority, data.notes)
    
    if(newItem._title == "") {
      alert("Task needs a title");
    } else {
      //console.log(general.todos);
      let createDiv = true;
      //console.log(newItem._title);
      for(let item of general.todos) {
        if (item.title == newItem._title) {
          //console.log("repeat title");
          createDiv = false;
        }
      }
      if (createDiv) {
        //console.log("happens");
        general.addToDo(newItem);
        makeDiv(newItem);
        if (storageAvailable("localStorage")) {
          //console.log(localStorage);
          //console.log(JSON.stringify(newItem));
          localStorage.setItem("items", JSON.stringify(general.todos));

        }
      } else {
        alert("There already exists a to do item with that name!");
      }
      
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

    title.textContent = "Task: " + item._title;
    if (item.dueDate === "") {
        
      dueDate.textContent = item._dueDate;
    } else {
        //console.log(item.dueDate);
      dueDate.textContent = "Due Date: " + item._dueDate;
    }
    
    priority.textContent = item._priority;
    if (item._details === undefined) {
      notes.textContent = item._details;
    } else {
      notes.textContent = "Notes: " + item._details;
    }
    //notes.textContent = item.details;

    //console.log(priority.textContent);
    if (item._priority === "high") {
      priority.textContent = "Priority: " + item._priority;
      div.classList.add("high");
    } else if (item._priority === "medium") {
      priority.textContent = "  Priority: " + item._priority;
      div.classList.add("medium");
    } else if (item._priority === "low") {
      priority.textContent = "  Priority: " + item._priority;
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
      let removedTitle = item._title;
      grandparent.remove();
      general.removeToDo(removedTitle);
      //console.log(general.todos);
      localStorage.setItem("items", JSON.stringify(general.todos));
      
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
    todo._details = notes;
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function makeDivFromStorage(item) {
  let div = document.createElement("div");
  let left = document.createElement("div");
  let right = document.createElement("div");
  let title = document.createElement("div");
  let dueDate= document.createElement("div");
  let priority = document.createElement("div");
  let notes = document.createElement("div");

  title.textContent = "Task: " + item._title;
  if (item.dueDate === "") {
      
    dueDate.textContent = item._dueDate;
  } else {
      //console.log(item.dueDate);
    dueDate.textContent = "Due Date: " + item._dueDate;
  }
  
  priority.textContent = item._priority;
  if (item._details === undefined) {
    notes.textContent = item._details;
  } else {
    notes.textContent = "Notes: " + item._details;
  }
  //notes.textContent = item.details;

  //console.log(priority.textContent);
  if (item._priority === "high") {
    priority.textContent = "Priority: " + item._priority;
    div.classList.add("high");
  } else if (item._priority === "medium") {
    priority.textContent = "  Priority: " + item._priority;
    div.classList.add("medium");
  } else if (item._priority === "low") {
    priority.textContent = "  Priority: " + item._priority;
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
    let removedTitle = item._title;
    grandparent.remove();
    general.removeToDo(removedTitle);
    let newArray = general.todos.filter(function(entry) {
      return entry._title !== removedTitle;
    })
    //console.log(newArray);
    //console.log(general.todos);
    general.todos = newArray;
    //console.log(general.todos);
    localStorage.setItem("items", JSON.stringify(general.todos));
    
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