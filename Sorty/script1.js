let main = document.querySelector("div");

console.log(main);

let navbar = document.createElement("div");
navbar.style.cssText += `
position: relative;
left: 0;
top: 0;
display: flex;
width: 100%;
align-items:basline;
`;

let loginModal = document.createElement("div");
loginModal.style.display = "none";
loginModal.style.cssText += `
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
max-width: 100%;
padding: 5rem;
background-color: white;
`;

let signUpModal = document.createElement("div");
signUpModal.style.display = "none";
signUpModal.style.cssText += `
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
max-width: 100%;
padding: 5rem;
background-color: white;
`;

let getStartedModal = document.createElement("div");
getStartedModal.style.display = "none";
getStartedModal.style.cssText += `
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
max-width: 100%;
padding: 5rem;
background-color: white;
`;

const CreateElementAndAppend = (
  value,
  style = null,
  onClick = null,
  tag,
  parent
) => {
  let tagName = document.createElement(tag);
  tagName.innerHTML = value;
  style !== null && (tagName.style.cssText += style);
  onClick !== null && tagName.addEventListener("click", onClick);
  parent.appendChild(tagName);
};

const links = `
display: flex;
column-gap: 20px;
font-size: 1rem;
`;

let leftLinks = document.createElement("div");
leftLinks.style.cssText += links + `align-self:end; padding-left: 2rem;`;

let rightLinks = document.createElement("div");
rightLinks.style.cssText +=
  links + `margin-left: auto;margin-top:1.5rem; padding-right:2rem;`;

CreateElementAndAppend("Sorty", null, null, "h1", leftLinks);
CreateElementAndAppend(
  "Features",
  `font-size:1.5rem;padding-top:0.5rem;opacity:0.5;`,
  null,
  "p",
  leftLinks
);
CreateElementAndAppend(
  "Pricing",
  `font-size:1.5rem;padding-top:0.5rem;opacity:0.5;`,
  null,
  "p",
  leftLinks
);
CreateElementAndAppend(
  "Resources",
  `font-size:1.5rem;padding-top:0.5rem;opacity:0.5;`,
  null,
  "p",
  leftLinks
);

const onClickLogin = () => {
  loginModal.style.display = "block";
  main.style.opacity = 0.4;
};

CreateElementAndAppend(
  "Login",
  `font-size:1.5rem;margin-top:0.2rem;cursor: pointer;`,
  onClickLogin,
  "a",
  rightLinks
);

const onClickSubmit = () => {
  loginModal.style.display === "none" &&
    ((signUpModal.style.display = "block"), (main.style.opacity = 0.4));
};

CreateElementAndAppend(
  "SignUp",
  `border-radius:2.5rem;padding:1.2rem;cursor: pointer;margin-top: -1.2rem;border-color:transparent;background-color:#8EE5D1;font-size:1.5rem`,
  onClickSubmit,
  "button",
  rightLinks
);

navbar.appendChild(leftLinks);
navbar.appendChild(rightLinks);

let section = document.createElement("div");
section.style.cssText += `
display: flex;
width: 100%;
margin-top:2rem;
align-items:center;
`;

let leftSide = document.createElement("div");

leftSide.style.cssText += `
width: 50%;
padding-left:2rem;
`;

let rightSide = document.createElement("div");

CreateElementAndAppend(
  "The best way to manage projects and tasks",
  `font-size: 2.7rem;`,
  null,
  "h1",
  leftSide
);
CreateElementAndAppend(
  "Focus on what is important to you and rely on us <br> for organizing your tasks",
  `font-size: 1.3rem;opacity:0.5;`,
  null,
  "p",
  leftSide
);

const onClickGetSubmit = () => {
  loginModal.style.display === "none" &&
    ((getStartedModal.style.display = "block"), (main.style.opacity = 0.4));
};
CreateElementAndAppend(
  "Get Started",
  `border-radius:4.5rem;padding:1.2rem;cursor: pointer;margin-bottom: 1.2rem;border-color:transparent;background-color:#8EE5D1;font-size:1.5rem`,
  onClickGetSubmit,
  `button`,
  leftSide
);

let image = document.createElement("img");
image.src = "../../TB3-assessments/css-assessment/illustration.png";

image.style.cssText += `
width:50vw;
height: 100%;
padding-right: 2rem;
flex-shrink:1;
`;

rightSide.appendChild(image);

section.appendChild(leftSide);
section.appendChild(rightSide);
main.appendChild(navbar);
main.appendChild(section);

document.body.appendChild(loginModal);
document.body.appendChild(signUpModal);
document.body.appendChild(getStartedModal);

let modalHeading = document.createElement("h1");
modalHeading.innerHTML = "Login";
modalHeading.style.textAlign = "center";

let modalHeading1 = document.createElement("h1");
modalHeading1.innerHTML = "Sign Up";
modalHeading1.style.textAlign = "center";

let modalHeading2 = document.createElement("h1");
modalHeading2.innerHTML = "Subscribe to Newsletter";
modalHeading2.style.textAlign = "center";

let form = document.createElement("form");
form.style.cssText += `
display: flex;
flex-direction: column;
row-gap: 1.2rem;
padding: 0 10rem;
`;

let form1 = document.createElement("form");
form1.style.cssText += `
display: flex;
flex-direction: column;
row-gap: 1.2rem;
padding: 0 10rem;
`;

let form2 = document.createElement("form");
form2.style.cssText += `
display: flex;
flex-direction: column;
row-gap: 1.2rem;
padding: 0 10rem;
`;

let input = document.createElement("input");
input.type = "text";
input.placeholder = "oliver@example.com";
input.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

input.onfocus = function () {
  input.style.cssText += `
  border-color: black;
  `;
};

let closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times";
closeBtn.style.cssText += `
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

let closeBtn1 = document.createElement("span");
closeBtn1.innerHTML = "&times";
closeBtn1.style.cssText += `
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

let closeBtn2 = document.createElement("span");
closeBtn2.innerHTML = "&times";
closeBtn2.style.cssText += `
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

let input1 = document.createElement("input");
input1.type = "text";
input1.placeholder = "oliver@example.com";
input1.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let input2 = document.createElement("input");
input2.type = "text";
input2.placeholder = "oliver@example.com";
input2.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let label = document.createElement("label");

label.style.cssText += `

text-align: left;
`;

let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = true;

let subscribe = document.createElement("button");
subscribe.innerHTML = "Subscribe";
subscribe.style.cssText += `
border-radius:1.5rem;
padding:0.85rem;
margin-bottom: 1.2rem;
border-color:transparent;
background-color:#8EE5D1;
font-size:0.875rem;
cursor: pointer;
`;

input1.onfocus = function () {
  input1.style.cssText += `
  background-color: blue;
  `;
};

input1.addEventListener("focusout", function () {
  input1.style.removeProperty("background-color");
});

let password = document.createElement("input");
password.type = "password";
password.placeholder = "*******";
password.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let password1 = document.createElement("input");
password1.type = "password";
password1.placeholder = "*******";
password1.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let confirmPassword = document.createElement("input");
confirmPassword.type = "password";
confirmPassword.placeholder = "*******";
confirmPassword.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let submitBtn = document.createElement("button");
submitBtn.innerHTML = "Submit";
submitBtn.style.cssText += `
border-radius:1.5rem;
padding:0.85rem;
margin-bottom: 1.2rem;
border-color:transparent;
background-color:#8EE5D1;
font-size:0.875rem;
cursor: pointer;
`;

let submitBtn1 = document.createElement("button");
submitBtn1.innerHTML = "Submit";
submitBtn1.style.cssText += `
border-radius:1.5rem;
padding:0.85rem;
margin-bottom: 1.2rem;
border-color:transparent;
background-color:#8EE5D1;
font-weight:bold;
font-size:0.875rem;
cursor: pointer;
`;

const addOptionsToSelect = (option, parent) => {
  let newOption = document.createElement("option");
  newOption.text = option;
  parent.add(newOption);
};

let selectBox = document.createElement("select");
addOptionsToSelect("user", selectBox);
addOptionsToSelect("admin", selectBox);
selectBox.style.cssText += `
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  background-color: DodgerBlue;
`;

const onClickSubmitInLoginModal = (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
  main.style.opacity = 1;
};

const onClickSubmitInSignUpModal = (e) => {
  e.preventDefault();
  signUpModal.style.display = "none";
  loginModal.style.display = "none";
  main.style.opacity = 1;
};

const onClickSubscribe = (e) => {
  e.preventDefault();
  subscribe.innerHTML = "Subscribed<span>&check;</span>";
  signUpModal.style.display = "none";
  loginModal.style.display = "none";
  main.style.opacity = 1;
};

const onCloseSubscribe = (e) => {
  e.preventDefault();
  getStartedModal.style.display = "none";
  signUpModal.style.display = "none";
  loginModal.style.display = "none";
  main.style.opacity = 1;
};

submitBtn.addEventListener("click", onClickSubmitInLoginModal);
closeBtn.addEventListener("click", onClickSubmitInLoginModal);
submitBtn1.addEventListener("click", onClickSubmitInSignUpModal);
closeBtn1.addEventListener("click", onClickSubmitInSignUpModal);
subscribe.addEventListener("click", onClickSubscribe);
closeBtn2.addEventListener("click", onCloseSubscribe);

loginModal.appendChild(closeBtn);
loginModal.appendChild(modalHeading);
loginModal.appendChild(form);
form.appendChild(input);
form.appendChild(password);
form.appendChild(submitBtn);

signUpModal.appendChild(closeBtn1);
signUpModal.appendChild(modalHeading1);
signUpModal.appendChild(form1);
form1.appendChild(input1);
form1.appendChild(password1);
form1.appendChild(confirmPassword);
form1.appendChild(selectBox);
form1.appendChild(submitBtn1);

getStartedModal.appendChild(closeBtn2);
getStartedModal.appendChild(modalHeading2);
getStartedModal.appendChild(form2);
form2.appendChild(input2);
form2.appendChild(label);
label.appendChild(checkbox);
label.append("Get Notificaiton");
form2.appendChild(subscribe);
