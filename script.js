function addItem() {
    console.log("hej");

    let wrapper = document.getElementById("task-wrapper");
    let todoTitle = document.getElementById("title").value;
    let task = document.createElement("li");

    wrapper.appendChild(task);

    task.innerText = todoTitle;
}

