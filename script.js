let size = 16;
const container = document.querySelector(".container");
const containerSize = container.clientWidth;
const btn = document.querySelector("#changeGrid");
const reset = document.querySelector("#reset");

console.log(containerSize);

function generateGrid(size) {
  for (let i = 0; i < size ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${containerSize / size}px`;

    square.addEventListener("mouseenter", () => {
      //   square.style.backgroundColor = "grey";
      square.style.backgroundColor = randomColor();
    });

    container.appendChild(square);
  }
}

generateGrid(size);

let newSize = 0;
btn.addEventListener("click", () => {
  newSize = Number(prompt("Enter new size (max. 100)", ""));
  if (newSize > 100 || newSize < 1) {
    alert("Invalid value");
    return;
  }

  container.textContent = "";
  generateGrid(newSize);
  return newSize;
});

reset.addEventListener("click", () => {
  if (newSize) {
    container.textContent = "";
    generateGrid(newSize);
  } else {
    container.textContent = "";
    generateGrid(size);
  }
});

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
