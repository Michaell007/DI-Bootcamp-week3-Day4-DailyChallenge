// get form
let form = document.forms[0];

// get div with listTasks
let divListTasks = document.querySelector(".listTasks");

// identifiant increment
let identifiant = 0;

// Create an empty array
const tasks = []

// Create a function called addTask()
function addTask(e) {
    e.preventDefault();

    // check that the input is not empty,
    let value = document.getElementById("todo-text").value;

    if (value != "") {
        // add it to the array
        tasks.push(value);

        // ADD IT TO THE DOM
        let newDiv = document.createElement("div"); // create new element
        newDiv.classList.add("custom-control", "custom-checkbox");

        let newInputCheckbox = document.createElement("input"); // create new checkbox
        newInputCheckbox.classList.add("custom-control-input");
        newInputCheckbox.id = `chk${identifiant}`;
        newInputCheckbox.setAttribute("type", "checkbox");

        let newLabel = document.createElement("label"); // create new label
        newLabel.classList.add("custom-control-label");
        newLabel.setAttribute("for", `chk${identifiant}`);
        newLabel.style.color = "black";
        newLabel.textContent = value;

        // append elements to div
        newDiv.appendChild(newInputCheckbox);
        newDiv.appendChild(newLabel);

        // add elemet to div listTasks
        divListTasks.append(newDiv);

        // reset input 
        document.getElementById("todo-text").value = "";

        // add event on checkbox
        let myCheck = document.getElementById(`chk${identifiant}`);
        myCheck.addEventListener("change", (e) => {
            if (e.target.checked) {
                newLabel.style.color = "red";
                newLabel.innerHTML = `<strike>${value}</strike>`;
            } else {
                newLabel.textContent = value;
                newLabel.style.color = "black";
            }
        })

        identifiant++;
    } else {
        alert("Enter un text please");
    }
}

// on submit form
form.addEventListener("submit", addTask);