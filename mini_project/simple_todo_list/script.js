let listContainer = document.querySelector(".listContainer");
let taskInput = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#addTaskButton");

let list = [];

function renderList(arr) {
  listContainer.innerHTML = "";
  arr.map((item) => {
    let disElem = document.createElement("div");
    disElem.classList.add("list");
    disElem.innerHTML = ` 
           <p>${item.text}</p>
            `;
    let buttonElem = document.createElement("button");
    buttonElem.innerText = "Delete";
    disElem.appendChild(buttonElem);
    buttonElem.onclick = () => {
      handleDeleteTask(item.id);
    };
    listContainer.append(disElem);
  });
}
renderList(list);

function handleAddTask() {
  let obj = {
    id: Date.now(),
    text: taskInput.value,
  };
  list.unshift(obj);
  renderList(list);
  taskInput.value = "";
}

function handleDeleteTask(id) {
  let filterlist = list.filter(obj => {
    return obj.id !== id;
  })
  list = filterlist;
  renderList(filterlist);
}
addTaskButton.addEventListener("click", handleAddTask);
