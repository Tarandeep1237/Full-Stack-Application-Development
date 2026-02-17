const coordsText = document.getElementById("coords");
const quadText = document.getElementById("quadrant");

// global mouse move listener
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const width = window.innerWidth;
  const height = window.innerHeight;

  coordsText.textContent = `X: ${x} | Y: ${y}`;

  let quadrant = "";
  let color = "";

  // ===== Quadrant Logic =====
  if (x < width / 2 && y < height / 2) {
    quadrant = "Top Left";
    color = "#fecaca";
  } 
  else if (x >= width / 2 && y < height / 2) {
    quadrant = "Top Right";
    color = "#bbf7d0";
  } 
  else if (x < width / 2 && y >= height / 2) {
    quadrant = "Bottom Left";
    color = "#bfdbfe";
  } 
  else {
    quadrant = "Bottom Right";
    color = "#fde68a";
  }

  quadText.textContent = `Quadrant: ${quadrant}`;
  document.body.style.backgroundColor = color;
});
