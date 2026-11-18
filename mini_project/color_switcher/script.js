let contianer = document.querySelector(".contianer");
let randombtn = document.querySelector(".randombtn");
let applybtn = document.querySelector(".applybtn");
let inputbtn = document.querySelector("#inputbtn");
let currntcolorvalue = document.querySelector(".currntcolorvalue");

const changeColor = (color) => {
  contianer.style.backgroundColor = color;
  currntcolorvalue.innerHTML = color;
};
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const hadleRandomBtnClick = () => {
  const color = getRandomColor();
  changeColor(color);
};
const hadleApplyBtnClick = () => {
  const color = inputbtn.value;
  changeColor(color);
};

randombtn.addEventListener("click", hadleRandomBtnClick);
applybtn.addEventListener("click", hadleApplyBtnClick);
