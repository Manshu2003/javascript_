let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addTaskButton");
let todoContainer = document.querySelector(".listContainer");
let API = "https://6b041d4e9e7cafb37dbfe932.mockapi.io/test";

addBtn.addEventListener("click", postData);

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();

  if (data) {
    todoContainer.innerHTML = "";

    data.forEach((obj) => {
      let div = document.createElement("div");
      div.className = "list";
      div.innerHTML = `<p class="paraText">${obj.test}</p>
      <input type="text" id="editInput" value="${obj.test}" />
          <div>
          <button class="deleteBtn">Delete</button>
          <button class="editBtn">Edit</button>
          <button class="saveBtn">Save</button>
          </div>`;

      let deleteBtn = div.querySelector(".deleteBtn");
      let editBtn = div.querySelector(".editBtn");
      let saveBtn = div.querySelector(".saveBtn");
      let paraText = div.querySelector(".paraText");
      let editInput = div.querySelector("#editInput");

      deleteBtn.addEventListener("click", function () {
        deleteData(obj.id);
      });
      editBtn.addEventListener("click", function () {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
        paraText.style.display = "none";
        editInput.style.display = "inline";
      });
      saveBtn.addEventListener("click", async function () {
        let editValue = editInput.value;
        let response = await updateData(obj.id, editValue);
        if (response.status === 200) {
          fetchData();
          editBtn.style.display = "inline";
          saveBtn.style.display = "none";
          paraText.style.display = "inline";
          editInput.style.display = "none";
        }
      });

      todoContainer.appendChild(div);
    });
  }
}

async function postData() {
  let value = taskInput.value;
  let objData = {
    test: value.trim(),
  };

  let response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });
  if (response.status === 201) {
    fetchData();
    taskInput.value = "";
  }
}
async function updateData(id, value) {
  let objData = {
    test: value.trim(),
  };

  let response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });
  return response;
}

async function deleteData(id) {
  let response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    fetchData();
  }
}

fetchData();
