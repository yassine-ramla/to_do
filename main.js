window.onload = function () {
  if (window.localStorage.tasks !== undefined) {
    let tasks = window.localStorage.tasks;
    tasks.split(",").forEach((element) => {
      var h3 = document.createElement("h3");
      h3Content = document.createTextNode(element.trim());
      h3.appendChild(h3Content);
      var button = document.createElement("button");
      button.id = "delete-task";
      button.onclick = function () {
        var tasks = window.localStorage.tasks.split(",");
        if (tasks.length === 1) {
          window.localStorage.removeItem("tasks");
        } else {
          tasks.splice(
            tasks.indexOf(this.parentNode.firstElementChild.innerText.trim()),
            1
          );
          window.localStorage.tasks = tasks;
        }
        this.parentNode.parentNode.remove();
      };
      buttonContent = document.createTextNode("delete");
      button.appendChild(buttonContent);
      var taskCard = document.createElement("div");
      taskCard.className = "task-card";
      taskCard.appendChild(h3);
      taskCard.appendChild(button);
      var taskCardContainer = document.createElement("div");
      taskCardContainer.className = "task-card-container";
      taskCardContainer.appendChild(taskCard);
      document.querySelector("main").appendChild(taskCardContainer);
    });
  } else {
  }
};

document.getElementById("submit").onclick = function () {
  let input = document.getElementById("task-title-input");
  let inputValue = input.value.trim();
  if (inputValue.length > 3) {
    if (window.localStorage.tasks !== undefined) {
      var tasks = window.localStorage.getItem("tasks");
      tasks = tasks.concat(`,${inputValue}`);
      console.log(tasks);
      window.localStorage.tasks = tasks;
    } else {
      window.localStorage.setItem("tasks", inputValue);
    }
    var h3 = document.createElement("h3");
    h3Content = document.createTextNode(inputValue);
    h3.appendChild(h3Content);
    var button = document.createElement("button");
    button.id = "delete-task";
    button.onclick = function () {
      var tasks = window.localStorage.tasks.split(",");
      if (tasks.length === 1) {
        window.localStorage.removeItem("tasks");
      } else {
        console.log(this.parentNode.firstElementChild.innerText);
        tasks.splice(
          tasks.indexOf(this.parentNode.firstElementChild.innerText.trim()),
          1
        );
        window.localStorage.tasks = tasks.join(",");
      }
      this.parentNode.parentNode.remove();
    };
    buttonContent = document.createTextNode("delete");
    button.appendChild(buttonContent);
    var taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.appendChild(h3);
    taskCard.appendChild(button);
    var taskCardContainer = document.createElement("div");
    taskCardContainer.className = "task-card-container";
    taskCardContainer.appendChild(taskCard);
    document.querySelector("main").appendChild(taskCardContainer);
  }
  input.value = "";
};
