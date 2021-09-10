let div = document.createElement("div");
div.className += "calculator";
let operation = document.createElement("div");
operation.classList.add("operation");
window.onload = function () {
  document.body.appendChild(div);
};

let calculatorInput = {
  background: "none",
  border: "none",
  boxShadow: "none",
  outline: "none",
  padding: "10px",
  width: "100%",
  borderBottom: "2px solid #111",
  color: "#333",
  textAlign: "right",
  fontSize: "40px",
  borderRadius: "0",
};

let input = document.createElement("input");
input.className += "calculator-input";
console.log(input.style);
const clickEnter = () => {
  console.log(input.style);
  input.value = eval(input.value);
};

const clearInput = () => {
  input.value = "";
};

const createElementAndAppend = (
  value,
  onClick = clickButton,
  className = "calc-button",
  tag = "button"
) => {
  const tagName = document.createElement(tag);
  tagName.innerHTML = value;
  tagName.value = value;
  className !== null && (tagName.className += className);
  tagName.addEventListener("click", onClick);
  operation.appendChild(tagName);
};
div.style.display = "flex";
div.style.flexDirection = "column";

const clickButton = (e) => {
  input.value += e.target.value;
};

createElementAndAppend("C", clearInput, "clear calc-button");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.forEach((item) => {
  createElementAndAppend(item);
});
input.type = "text";
input.style.height = "5rem";
input.style.fontSize = "2rem";
createElementAndAppend(".");
createElementAndAppend("+");
createElementAndAppend("-");
createElementAndAppend("*");
createElementAndAppend("/");
createElementAndAppend("=", clickEnter, "equal calc-button");

input.style.height = "50px";
div.appendChild(input);
div.appendChild(operation);
