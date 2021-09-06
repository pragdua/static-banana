const outputText = document.querySelector(".output-text");
const translateBtn = document.querySelector(".translate-btn");
const inputText = document.querySelector(".input-text");

const setOutput = (output) => {
  outputText.innerText = output;
};

const clickHandler = () => {
  const iText = inputText.value;
  console.log(iText);
  fetch(`https://api.funtranslations.com/translate/minion.json?text=${iText}`)
    .then((res) => res.json())
    .then((data) => setOutput(data.contents.translated));
};

translateBtn.addEventListener("click", clickHandler);
