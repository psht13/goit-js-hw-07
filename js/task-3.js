const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  let text = e.target.value.trim();
  if (text === "") output.textContent = "Anonymous";
  else output.textContent = text;
});
