let smallcursor = document.querySelector(".smallCursor");
let shadowcursor = document.querySelector(".shadowCursor");

let mouseX = 0;
let mouseY = 0;
let aminationFrameId = null;
let time = null;
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  smallcursor.style.left = mouseX + "px";
  smallcursor.style.top = mouseY + "px";
  if (!aminationFrameId) {
    animateShadowCursor();
  }
  clearTimeout(time);
  time = setTimeout(() => {
    cancelAnimationFrame(aminationFrameId);
  }, 1000);
});

function animateShadowCursor() {
  let currentX = parseFloat(shadowcursor.style.left) || 0;
  let currentY = parseFloat(shadowcursor.style.top) || 0;
  let deltaX = mouseX - currentX;
  let deltaY = mouseY - currentY;
  shadowcursor.style.left = currentX + deltaX * 0.1 + "px";
  shadowcursor.style.top = currentY + deltaY * 0.1 + "px";
  let animationFrameId = requestAnimationFrame(animateShadowCursor);
  console.log(animationFrameId);
}
