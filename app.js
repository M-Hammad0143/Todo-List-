const inputbox = document.getElementById("inp");
const list = document.getElementById("todo-list");
const btn = document.getElementById("toggle");

// Dark mode toggle
btn.onclick = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "Light";
        btn.style.color = "white";
    } else {
        btn.innerHTML = "Dark";
        btn.style.color = "black";
    }
};

// Add task
function addtask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;

        // delete button
        let delBtn = document.createElement("button");
        delBtn.innerHTML = "❌";
        delBtn.style.marginLeft = "20px";
        delBtn.style.border = "none";
        delBtn.style.background = "transparent";
        delBtn.style.cursor = "pointer";

        delBtn.onclick = function () {
            li.remove();
        };

        li.appendChild(delBtn);
        list.appendChild(li);

        inputbox.value = "";
    }
}

// Clear all tasks
function clearTasks() {
    list.innerHTML = "";
}