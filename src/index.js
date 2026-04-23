function generatePoem(event) {
  event.preventDefault();

  const poemBox = document.querySelector("main div");

  poemBox.innerHTML = `
    La tombe dit à la rose<br>
    Des pleurs dont l'aube t'arrose
  `;
}

const form = document.querySelector("form");
form.addEventListener("submit", generatePoem);
