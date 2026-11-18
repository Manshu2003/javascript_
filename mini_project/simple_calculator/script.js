let display = document.querySelector(".display");

function appendValue(text) {
  // 1. DEL button ka text print hone se rokne ke liye check

  if (
    display.innerText === "0" ||
    display.innerText === "Error" ||
    display.innerText === "Infinity"
  ) {
    display.innerText = text;
    return;
  }
  display.innerText = `${display.innerText}${text}`;
}

function clearDisplay() {
  display.innerText = "0";
}
// 2. DEL button ka mitaane wala logic
function deleteLast() {
  if (display.innerText.length > 1 && display.innerText !== "Error") {
    display.innerText = display.innerText.slice(0, -1); // Ek character piche se mitaega
  } else {
    display.innerText = "0";
  }
}
function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "Error";
  }
}
