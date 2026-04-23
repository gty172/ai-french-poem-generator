function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let input = document.querySelector("input");
  let topic = input.value;

  let apiKey = "3fb0bbe33af251f3818a451o59ta25f7";
  let prompt = `Write a short French-style poem about ${topic}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=poetry&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
