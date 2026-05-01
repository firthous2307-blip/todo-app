let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task.text;

        if (task.done) {
            li.style.textDecoration = "line-through";
        }

        li.onclick = function () {
            tasks[index].done = !tasks[index].done;
            saveTasks();
        };

        let delBtn = document.createElement("button");
        delBtn.innerHTML = '<i class="fa fa-trash"></i>';
        delBtn.onclick = function () {
            tasks.splice(index, 1);
            saveTasks();
        };

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value;

    if (text === "") {
        alert("Enter a task");
        return;
    }

    tasks.push({ text: text, done: false });
    input.value = "";
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

showTasks();