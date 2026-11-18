let button = document.querySelector(".btn");
let modalContainer = document.querySelector(".modalContainer");

button.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

modalContainer.addEventListener("click", (e) => {
  if (e.target.className === "modalContainer") {
    modalContainer.style.display = "none";
  }
});
