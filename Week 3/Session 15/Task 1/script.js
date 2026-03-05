// ===== State (ES6) =====
let posX = 10;
let posY = 10;
const step = 10;

const box = document.getElementById("box");
const playground = document.querySelector(".playground");

// ===== Movement handler =====
document.addEventListener("keydown", (event) => {
  const maxX = playground.clientWidth - box.clientWidth;
  const maxY = playground.clientHeight - box.clientHeight;

  switch (event.key) {
    case "ArrowUp":
      posY = Math.max(0, posY - step);
      break;

    case "ArrowDown":
      posY = Math.min(maxY, posY + step);
      break;

    case "ArrowLeft":
      posX = Math.max(0, posX - step);
      break;

    case "ArrowRight":
      posX = Math.min(maxX, posX + step);
      break;
  }

  // apply movement
  box.style.top = posY + "px";
  box.style.left = posX + "px";
});
