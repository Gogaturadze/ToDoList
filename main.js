let listDiv = document.getElementById("listDiv");
listDiv = [];

function addTask() {
  let inputTxt = document.getElementById("inputTxt").value;

  if (inputTxt !== "") {
    listDiv.push(inputTxt);
    document.getElementById("listDiv").innerHTML = "";
    listDiv.forEach(function (doList, index) {
      let addTaskToDiv = document.createElement("p");
      let deleteX = document.createElement("button");
      deleteX.textContent = "X";
      addTaskToDiv.textContent = doList;
      deleteX.addEventListener("click", () => {
        deleteTask(index);
      });
      document.getElementById("listDiv").appendChild(addTaskToDiv);
      addTaskToDiv.appendChild(deleteX);
    });
  } else {
    console.log("შეიყვანეთ სიტყვა");
  }
}

function deleteTask(index) {
  listDiv.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  document.getElementById("listDiv").innerHTML = "";
  listDiv.forEach(function (doList, index) {
    let addTaskToDiv = document.createElement("p");
    let deleteX = document.createElement("button");
    deleteX.textContent = "X";
    addTaskToDiv.textContent = doList;
    deleteX.addEventListener("click", () => {
      deleteTask(index);
    });
    document.getElementById("listDiv").appendChild(addTaskToDiv);
    addTaskToDiv.appendChild(deleteX);
  });
}
