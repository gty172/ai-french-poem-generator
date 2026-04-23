function displayPoem(response) {
  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let input = document.querySelector("input");
  let topic = input.value.trim();

  let poemElement = document.querySelector("#poem");

  // UX improvement (loading state)
  poemElement.innerHTML = "🤖 Generating your French poem...";

  let apiKey = "3fb0bbe33af251f3818a451o59ta25f7";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=Write a short French poem about ${topic}&context=poetry&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let form = document.querySelector("#poem-generator-form");
form.addEventListener("submit", generatePoem);
